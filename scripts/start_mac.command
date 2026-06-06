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

LAN_IP=$(python3 -c "import json; print(json.load(open('config.json'))['server']['lan_ip'])" 2>/dev/null || echo "192.168.1.100")
CURRENT_IP=$(ipconfig getifaddr en0 2>/dev/null)

echo ""
echo "🚀 Iniciando servidor Americano..."
echo "   📡 Local:    http://localhost:8080"
if [ "$CURRENT_IP" = "$LAN_IP" ]; then
  echo "   🌐 Red LAN:  http://${LAN_IP}:8080  ✓ IP estática activa"
else
  echo "   ⚠️  IP actual ($CURRENT_IP) ≠ IP configurada ($LAN_IP)"
  echo "      Configura la IP estática con:"
  echo "      sudo networksetup -setmanual Wi-Fi $LAN_IP 255.255.255.0 192.168.1.1"
fi
echo "   👨‍🏫 Admin:    http://${LAN_IP}:8080/admin  (Samprs258)"
echo ""
echo "   Presiona Ctrl+C para detener."
echo ""

./venv/bin/python server.py
