import os
import json
import hashlib
import secrets
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path
from functools import wraps

from flask import Flask, request, jsonify, render_template, session, redirect, url_for, send_from_directory
from flask_cors import CORS

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
TEMPLATES_DIR = BASE_DIR / "templates"
STATIC_DIR = BASE_DIR / "static"
CONFIG_PATH = BASE_DIR / "config.json"

DATA_DIR.mkdir(exist_ok=True)

app = Flask(__name__, template_folder=str(TEMPLATES_DIR), static_folder=str(STATIC_DIR))
CORS(app)


def load_config():
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def save_config(cfg):
    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        json.dump(cfg, f, indent=2, ensure_ascii=False)


def grade_path(grade_id):
    return DATA_DIR / f"{grade_id}.json"


def load_grade(grade_id):
    path = grade_path(grade_id)
    if not path.exists():
        return {"students": []}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_grade(grade_id, data):
    path = grade_path(grade_id)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def admin_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        if not session.get("admin_auth"):
            return jsonify({"error": "unauthorized"}), 401
        return f(*args, **kwargs)
    return wrapper


GRADES = {
    "primero_basico": {"label": "Primero Básico", "subject": "TAC (Mecanografía)", "ready": False},
    "segundo_basico": {"label": "Segundo Básico", "subject": "TAC (Mecanografía)", "ready": True},
    "tercero_basico": {"label": "Tercero Básico", "subject": "TAC", "ready": False},
    "cuarto_madurez": {"label": "Cuarto Bachillerato por Madurez", "subject": "TIC", "ready": True},
    "cuarto_perito": {"label": "Cuarto Perito Contador", "subject": "Computación I", "ready": False},
    "quinto_perito": {"label": "Quinto Perito Contador", "subject": "Computación II", "ready": False},
    "sexto_pc": {"label": "Sexto Perito Contador", "subject": "Computación III (Funciones avanzadas de Excel)", "ready": True},
    "cuarto_secretariado": {"label": "Cuarto Secretariado", "subject": "Computación I", "ready": False},
    "quinto_bachillerato": {"label": "Quinto Bachillerato en Computación", "subject": "Computación II", "ready": False},
}


@app.route("/")
def index():
    return render_template("index.html", grades=GRADES, school=load_config()["school"])


@app.route("/grado/<grade_id>")
def grade_view(grade_id):
    if grade_id not in GRADES:
        return "Grado no encontrado", 404
    if not GRADES[grade_id]["ready"]:
        return render_template("coming_soon.html", grade=GRADES[grade_id])
    return render_template(f"{grade_id}.html", grade=GRADES[grade_id])


@app.route("/admin")
def admin_view():
    if session.get("admin_auth"):
        return render_template("admin.html", grades=GRADES)
    return render_template("admin_login.html")


@app.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.get_json() or {}
    password = data.get("password", "")
    cfg = load_config()
    if password == cfg["admin"]["password"]:
        session["admin_auth"] = True
        return jsonify({"ok": True})
    return jsonify({"ok": False, "error": "Contraseña incorrecta"}), 401


@app.route("/api/admin/logout", methods=["POST"])
def admin_logout():
    session.pop("admin_auth", None)
    return jsonify({"ok": True})


@app.route("/api/admin/data", methods=["GET"])
@admin_required
def admin_data():
    grade_id = request.args.get("grade")
    if grade_id and grade_id != "all":
        return jsonify(load_grade(grade_id))
    all_data = {}
    for gid in GRADES:
        all_data[gid] = load_grade(gid)
    return jsonify(all_data)


@app.route("/api/admin/config", methods=["GET", "POST"])
@admin_required
def admin_config():
    if request.method == "GET":
        return jsonify(load_config())
    new_cfg = request.get_json() or {}
    cfg = load_config()
    if "admin" in new_cfg and "password" in new_cfg["admin"]:
        cfg["admin"]["password"] = new_cfg["admin"]["password"]
    if "google_forms" in new_cfg:
        cfg["google_forms"].update(new_cfg["google_forms"])
    if "server" in new_cfg:
        cfg["server"].update(new_cfg["server"])
    save_config(cfg)
    return jsonify({"ok": True})


@app.route("/api/student/save", methods=["POST"])
def student_save():
    payload = request.get_json() or {}
    grade_id = payload.get("grade")
    if grade_id not in GRADES:
        return jsonify({"error": "grado inválido"}), 400

    nombre = (payload.get("nombre") or "").strip()
    apellido = (payload.get("apellido") or "").strip()
    if not nombre or not apellido:
        return jsonify({"error": "nombre y apellido requeridos"}), 400

    student_key = f"{nombre.lower()}_{apellido.lower()}"
    data = load_grade(grade_id)
    students = data.get("students", [])

    student = None
    for s in students:
        if s.get("key") == student_key:
            student = s
            break
    if student is None:
        student = {
            "key": student_key,
            "nombre": nombre,
            "apellido": apellido,
            "created_at": datetime.utcnow().isoformat(),
            "progress": {},
            "responses": [],
            "keywords": {},
            "tasks": {},
            "exams": {},
            "last_active": None,
        }
        students.append(student)

    for k in ["progress", "keywords", "tasks", "exams"]:
        if k in payload and isinstance(payload[k], dict):
            student[k] = {**student.get(k, {}), **payload[k]}

    if "responses" in payload and isinstance(payload["responses"], list):
        student["responses"] = (student.get("responses", []) + payload["responses"])[-500:]

    student["last_active"] = datetime.utcnow().isoformat()
    data["students"] = students
    save_grade(grade_id, data)

    return jsonify({"ok": True, "key": student_key})


@app.route("/api/student/load", methods=["GET"])
def student_load():
    grade_id = request.args.get("grade")
    nombre = (request.args.get("nombre") or "").strip().lower()
    apellido = (request.args.get("apellido") or "").strip().lower()
    if not (grade_id and nombre and apellido):
        return jsonify({"error": "faltan parámetros"}), 400
    if grade_id not in GRADES:
        return jsonify({"error": "grado inválido"}), 400

    data = load_grade(grade_id)
    key = f"{nombre}_{apellido}"
    for s in data.get("students", []):
        if s.get("key") == key:
            return jsonify(s)
    return jsonify({"exists": False})


@app.route("/api/export/google-forms", methods=["POST"])
@admin_required
def export_google_forms():
    cfg = load_config()
    gf = cfg.get("google_forms", {})
    if not gf.get("enabled") or not gf.get("form_url"):
        return jsonify({"error": "Google Forms no configurado"}), 400
    if not gf.get("fields", {}).get("nombre"):
        return jsonify({"error": "Faltan IDs de campos del form"}), 400

    payload = request.get_json() or {}
    records = payload.get("records", [])
    form_url = gf["form_url"]
    fields = gf["fields"]
    sent = 0
    errors = []

    for rec in records:
        data = {}
        for key, entry_id in fields.items():
            if not entry_id:
                continue
            value = rec.get(key, "")
            if value is None:
                value = ""
            data[entry_id] = str(value)
        try:
            encoded = urllib.parse.urlencode(data).encode("utf-8")
            req = urllib.request.Request(form_url, data=encoded, method="POST")
            req.add_header("Content-Type", "application/x-www-form-urlencoded")
            with urllib.request.urlopen(req, timeout=10) as resp:
                sent += 1
        except Exception as e:
            errors.append(str(e))

    return jsonify({"ok": True, "sent": sent, "errors": errors})


@app.route("/api/health")
def health():
    return jsonify({"ok": True, "time": datetime.utcnow().isoformat()})


if __name__ == "__main__":
    cfg = load_config()
    app.secret_key = cfg["admin"]["session_secret"]
    app.run(host=cfg["server"]["host"], port=cfg["server"]["port"], debug=cfg["server"]["debug"])
