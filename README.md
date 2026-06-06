# 🎓 Americano · Plataforma Educativa Interactiva

Plataforma web para clases de computación, ofimática y TIC. Servidor local con IP estática, almacenamiento de progreso de estudiantes, panel del profesor y respaldo opcional a Google Forms/Sheets.

---

## ✨ Características

- 🎨 **Diseño moderno y colorido** con animaciones premium (gradientes, glassmorphism, transiciones suaves).
- 📚 **6 clases interactivas por grado** con información, ejercicios, palabras clave, tareas y mini-exámenes.
- 🔑 **Palabras clave resaltadas** que el estudiante debe investigar y definir con sus propias palabras.
- 📝 **Ejercicios interactivos**: opción múltiple, verdadero/falso, completar.
- 🏆 **Examen final acumulativo** al terminar el curso.
- 💾 **Progreso persistente** en el servidor (JSON central) + localStorage del navegador.
- 👨‍🏫 **Panel del profesor** protegido con contraseña para ver progreso, respuestas y calificaciones.
- 🌐 **Servidor LAN con IP estática** — los estudiantes acceden desde sus dispositivos.
- ☁️ **Respaldo opcional a Google Forms/Sheets** desde el panel del profesor.
- 🐧 **Multiplataforma** — funciona en Mac, Windows y Linux (Python 3.10+).

---

## 📁 Estructura del proyecto

```
Americano/
├── server.py                    # Servidor Flask
├── requirements.txt
├── config.json                  # IP, puerto, contraseña admin
├── .gitignore
├── README.md
│
├── data/                        # Datos de estudiantes (auto-creado)
├── templates/                   # HTMLs servidos por Flask
│   ├── index.html               # Landing con 9 grados
│   ├── admin.html               # Panel del profesor
│   ├── admin_login.html         # Login del profesor
│   ├── coming_soon.html
│   └── cuarto_madurez.html      # ⬅ Presentación 4to Bachillerato
│
├── static/
│   ├── css/                     # Estilos (base, theme, presentation, admin)
│   ├── js/                      # Lógica (api, student, progress, exam, etc.)
│   └── img/
│
├── scripts/
│   ├── start_mac.command        # Doble clic en Mac
│   ├── start_windows.bat        # Doble clic en Windows
│   └── init_github.sh           # Inicializar repo Git
│
└── venv/                        # Entorno virtual (ignorado en git)
```

---

## 🚀 Inicio rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/SamuelRM25/americano_presentaciones.git
cd americano_presentaciones
```

### 2. Iniciar el servidor

#### En Mac
Doble clic en `scripts/start_mac.command`, o desde terminal:
```bash
./scripts/start_mac.command
```

#### En Windows
Doble clic en `scripts/start_windows.bat`, o desde CMD:
```bat
scripts\start_windows.bat
```

#### Manualmente (cualquier SO)
```bash
python3 -m venv venv
source venv/bin/activate   # Mac/Linux
# venv\Scripts\activate    # Windows
pip install -r requirements.txt
python server.py
```

### 3. Acceder

Tienes dos formas de acceder, según tu entorno:

**A) Acceso local** (en la misma Mac donde corre el servidor):
- Estudiantes: http://localhost:8080
- Admin: http://localhost:8080/admin

**B) Acceso LAN** (desde otras computadoras en la red):
- Estudiantes: `http://192.168.1.100/grado/<id_grado>` o `http://192.168.1.100/grados/<id_grado>` (ambos funcionan)
- Admin: `http://192.168.1.100/admin`
- Sin necesidad de especificar puerto (XAMPP Apache hace de proxy en puerto 80)
- Contraseña admin: `Samprs258`

**Grados disponibles:**
- `cuarto_madurez` — Cuarto Bachillerato por Madurez (TIC)
- `sexto_pc` — Sexto Perito Contador (Excel avanzado)
- `segundo_basico` — Segundo Básico (TAC/Mecanografía)

---

## 🌐 Configurar IP estática en la red LAN

Para que los estudiantes accedan desde sus dispositivos, el servidor debe correr en una IP fija de tu red local.

### En Mac (Servidor) — Método GUI
1. **Preferencias del Sistema → Red → Wi-Fi (o Ethernet) → Detalles**
2. **TCP/IP → Configurar IPv4: Manualmente**
3. Asigna una IP fija fuera del rango DHCP del router, por ejemplo:
   - **Dirección IP:** `192.168.1.100`
   - **Máscara de subred:** `255.255.255.0`
   - **Router:** `192.168.1.1` (la puerta de enlace de tu router)
4. Aplica cambios y reinicia el servidor Americano.

### En Mac (Servidor) — Método terminal (más rápido)
```bash
# Configurar IP estática
sudo networksetup -setmanual "Wi-Fi" 192.168.1.100 255.255.255.0 192.168.1.1
sudo networksetup -setdnsservers "Wi-Fi" 1.1.1.1 8.8.8.8

# Permitir Python en el firewall
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/samuelrm/Documents/Americano/venv/bin/python3
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /Users/samuelrm/Documents/Americano/venv/bin/python3

# Volver a DHCP cuando termines (en casa, etc.)
sudo networksetup -setdhcp "Wi-Fi"
```

### En Windows (Servidor)
1. **Panel de control → Centro de redes → Conexión activa → Propiedades**
2. Doble clic en **Protocolo de Internet versión 4 (TCP/IPv4)**
3. Selecciona **Usar la siguiente dirección IP** y completa:
   - **IP:** `192.168.1.100`
   - **Máscara:** `255.255.255.0`
   - **Puerta de enlace:** `192.168.1.1` (IP de tu router)
4. Aceptar y reiniciar el servidor.

### Configurar IP en el proyecto
Edita `config.json` y actualiza `server.lan_ip` con tu IP fija:
```json
{
  "server": {
    "host": "0.0.0.0",
    "port": 8080,
    "lan_ip": "192.168.1.100",
    "debug": false
  }
}
```

### ⚠️ Troubleshooting
- Si después de cambiar la IP el servidor no responde, **apaga y enciende el Wi-Fi** (o reinicia la Mac). El cambio de IP a veces deja rutas obsoletas en la tabla de routing.
- Si necesitas internet en la Mac mientras el servidor está corriendo, **conecta por Ethernet** y deja el Wi-Fi en DHCP.
- Verifica con: `curl http://192.168.1.100:8080/api/health`

### Acceso desde los estudiantes
- En el navegador del estudiante: `http://192.168.1.100/grado/<id_grado>`
- Funciona con o sin "s" en "grado/grados"
- (El estudiante debe estar conectado a la **misma red Wi-Fi/LAN** que el profesor)
- Si usas Windows como servidor, ajusta la URL con la IP que asignaste.

### 🌐 Configurar proxy inverso (opcional, recomendado)

Si tienes **XAMPP, MAMP, Apache u otro servidor web en el puerto 80**, puedes configurarlo como proxy inverso a Flask (puerto 8080) para acceder **sin especificar el puerto 8080** en las URLs.

**En XAMPP/MAMP Apache**, agrega esto a `httpd.conf` (con `mod_proxy` y `mod_rewrite` habilitados):

```apache
<IfModule proxy_module>
    RewriteEngine On
    RewriteRule ^/grados/(.*)$ /grado/$1 [PT,L]

    ProxyPass /grado/ http://127.0.0.1:8080/grado/
    ProxyPassReverse /grado/ http://127.0.0.1:8080/grado/
    ProxyPass /admin http://127.0.0.1:8080/admin
    ProxyPassReverse /admin http://127.0.0.1:8080/admin
    ProxyPass /api/ http://127.0.0.1:8080/api/
    ProxyPassReverse /api/ http://127.0.0.1:8080/api/
    ProxyPass /static/ http://127.0.0.1:8080/static/
    ProxyPassReverse /static/ http://127.0.0.1:8080/static/

    <Location /grado/>
        Require all granted
    </Location>
    <Location /admin>
        Require all granted
    </Location>
    <Location /api/>
        Require all granted
    </Location>
    <Location /static/>
        Require all granted
    </Location>
</IfModule>
```

Reinicia Apache y tendrás:
- `http://192.168.1.100/grado/segundo_basico` ← funciona (con o sin "s")
- `http://192.168.1.100/admin` ← funciona
- `http://192.168.1.100/dashboard/` ← XAMPP sigue funcionando

### ⚠️ Hotspots de celular (NO recomendado para clases)
Los hotspots de iPhone/Android tienen **aislación de clientes**: los dispositivos conectados no se ven entre sí. Para una clase con varios estudiantes, usa un **router Wi-Fi real**.

---

## ☁️ Configurar respaldo a Google Forms

1. Crea un Google Form con estos campos:
   - Nombre (texto)
   - Apellido (texto)
   - Grado (opción múltiple: Primero Básico, ..., Quinto Bachillerato)
   - Clase (texto)
   - Tipo (opción múltiple: Palabra clave, Ejercicio, Tarea, Mini-examen, Examen final)
   - Contenido (texto largo)
   - Calificación (texto)

2. Obtén los IDs de cada campo:
   - En el Form: ⋮ menú → **Obtener enlace pre-rellenado**
   - Rellena datos de prueba en cada campo
   - "Obtener enlace" → copia la URL
   - La URL se ve así: `https://docs.google.com/forms/d/e/FORM_ID/formResponse?entry.111111=Juan&entry.222222=Perez...`
   - Los `entry.XXXXXXX` son los IDs de cada campo.

3. Ve al panel del profesor: **http://localhost:5000/admin**
4. Sección **⚙️ Configuración**:
   - Pega la URL del form (la parte hasta `formResponse`).
   - Marca **Habilitar respaldo a Google Forms: Sí**
   - Llena los IDs de cada campo.
   - **Guardar configuración**.

5. Usa el botón **📤 Exportar todo a Google Forms** para enviar los datos acumulados.

> Nota: Google Forms no permite envíos masivos programáticos con la API pública, por lo que el envío se hace **estudiante por estudiante** desde el panel del profesor (un clic = muchas submissions).

---

## 🎓 Grados soportados

| Archivo HTML | Grado | Materia | Estado |
|--------------|-------|---------|--------|
| `primero_basico.html` | Primero Básico | TAC (Mecanografía) | Próximamente |
| `segundo_basico.html` | Segundo Básico | TAC (Mecanografía) | Próximamente |
| `tercero_basico.html` | Tercero Básico | TAC | Próximamente |
| `cuarto_madurez.html` | Cuarto Bachillerato por Madurez | TIC | ✅ Completo |
| `cuarto_perito.html` | Cuarto Perito Contador | Computación I | Próximamente |
| `quinto_perito.html` | Quinto Perito Contador | Computación II | Próximamente |
| `sexto_perito.html` | Sexto Perito Contador | Computación III | Próximamente |
| `cuarto_secretariado.html` | Cuarto Secretariado | Computación I | Próximamente |
| `quinto_bachillerato.html` | Quinto Bachillerato en Computación | Computación II | Próximamente |

---

## 🛠️ Agregar un nuevo grado

1. Crea el archivo HTML en `templates/` siguiendo el patrón de `cuarto_madurez.html`.
2. Crea el archivo de datos en `static/js/` siguiendo el patrón de `cuarto_madurez_data.js`.
3. En `server.py`, actualiza el diccionario `GRADES`:
   ```python
   "nuevo_grado_id": {"label": "Nombre del grado", "subject": "Materia", "ready": True},
   ```
4. Reinicia el servidor.

---

## 🔐 Cambiar la contraseña del profesor

Edita `config.json`:
```json
{
  "admin": {
    "password": "TuNuevaContraseña"
  }
}
```

O desde el panel del profesor: **⚙️ Configuración → Contraseña del panel**.

---

## 💾 Datos de los estudiantes

Los datos se guardan automáticamente en `data/{grado_id}.json` cada vez que el estudiante:
- Investiga una palabra clave
- Completa un ejercicio
- Marca una tarea
- Realiza un mini-examen o examen final

Estructura del JSON:
```json
{
  "students": [
    {
      "key": "juan_perez",
      "nombre": "Juan",
      "apellido": "Pérez",
      "created_at": "2024-...",
      "last_active": "2024-...",
      "progress": {
        "c1": { "visited_slides": ["info_panel"], "exercises": {...} },
        "c2": { ... }
      },
      "keywords": {
        "c1": { "Hardware": "Componentes físicos...", "Software": "..." }
      },
      "tasks": {
        "c1": { "c1t1": { "done": true, "notes": "..." } }
      },
      "exams": {
        "c1_mini": { "score": 4, "total": 5, "taken": true, "at": "..." }
      }
    }
  ]
}
```

---

## 📤 Subir a GitHub

```bash
./scripts/init_github.sh
```

Este script hace:
1. `git init` (si no existe)
2. Configura el remoto a `https://github.com/SamuelRM25/americano_presentaciones.git`
3. Hace `git add .` y un commit
4. Push a la rama `main`

---

## 🆘 Solución de problemas

| Problema | Solución |
|----------|----------|
| `python3` no se reconoce | Instala Python 3.10+ desde python.org y reinicia la terminal |
| `pip install` falla | Usa `python3 -m pip install --user -r requirements.txt` |
| Puerto 5000 ocupado | Cambia `server.port` en `config.json` |
| Estudiantes no pueden acceder | Verifica firewall y que estén en la misma red Wi-Fi |
| La contraseña admin no funciona | Verifica `config.json` (el archivo debe estar en UTF-8) |
| Google Forms no recibe datos | Verifica los `entry.XXXXXXX` y que la URL termine en `/formResponse` |

---

## 📝 Licencia

Uso interno educativo — Colegio Americano.

---

Hecho con ❤️ por **Prof. Samuel Ramírez** para el Colegio Americano.
