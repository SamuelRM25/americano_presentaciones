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
echo ""
echo "   ╔══════════════════════════════════════════════════════════╗"
echo "   ║                                                          ║"
echo "   ║  📡 Acceso local:    http://localhost:8080               ║"
echo "   ║  🌐 Acceso LAN:      http://$LAN_IP  (vía XAMPP)    ║"
echo "   ║                                                          ║"
echo "   ║  👨‍🏫 Admin:           http://$LAN_IP/admin   ║"
echo "   ║  🖨️  QRs imprimibles: http://$LAN_IP/qr-cards   ║"
echo "   ║                                                          ║"
echo "   ║  📲 Para alumnos: muestra la pantalla de QRs en el      ║"
echo "   ║     proyector o imprime la hoja para que escaneen        ║"
echo "   ║     con la cámara de su celular.                        ║"
echo "   ║                                                          ║"
echo "   ╚══════════════════════════════════════════════════════════╝"
echo ""

if [ "$CURRENT_IP" = "$LAN_IP" ]; then
  echo "   ✓ IP estática activa en este equipo"
else
  echo "   ⚠️  IP actual ($CURRENT_IP) ≠ IP configurada ($LAN_IP)"
  echo "      Configura con: sudo networksetup -setmanual Wi-Fi $LAN_IP 255.255.255.0 192.168.1.1"
fi
echo ""
echo "   Comandos útiles:"
echo "   ./scripts/show_links.sh              Ver todos los enlaces"
echo "   ./scripts/show_links.sh --open       Abrir página de QRs"
echo "   ./scripts/show_links.sh --copy segundo_basico   Copiar enlace al portapapeles"
echo ""
echo "   Presiona Ctrl+C para detener."
echo ""

./venv/bin/python server.py
