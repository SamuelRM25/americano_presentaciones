@echo off
chcp 65001 >nul
cd /d "%~dp0\.."

if not exist "venv\" (
  echo 🔧 Creando entorno virtual...
  python -m venv venv
  echo 📦 Instalando dependencias...
  call venv\Scripts\pip install --quiet -r requirements.txt
)

echo.
echo 🚀 Iniciando servidor Americano...
echo    📡 Local:    http://localhost:8080
echo    👨^&🏫 Admin:    http://localhost:8080/admin
echo.
echo    Presiona Ctrl+C para detener.
echo.

call venv\Scripts\python server.py
pause
