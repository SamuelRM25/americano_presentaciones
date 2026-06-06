#!/bin/bash
set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

if [ ! -d "venv" ]; then
  echo "🔧 Creando entorno virtual..."
  python3 -m venv venv
  echo "📦 Instalando dependencias..."
  ./venv/bin/pip install --quiet -r requirements.txt
fi

echo ""
echo "🚀 Iniciando servidor Americano..."
echo "   📡 Local:    http://localhost:8080"
echo "   🌐 Red LAN:  http://$(ipconfig getifaddr en0 2>/dev/null || echo '192.168.1.100'):8080"
echo "   👨‍🏫 Admin:    http://localhost:8080/admin"
echo ""
echo "   Presiona Ctrl+C para detener."
echo ""

./venv/bin/python server.py
