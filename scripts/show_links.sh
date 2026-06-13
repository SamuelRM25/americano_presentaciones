#!/bin/bash
# show_links.sh - Muestra los enlaces de la plataforma Americano
# Opcionalmente abre la página de QRs en el navegador.
# Uso: ./show_links.sh [--open] [--copy GRADO]

set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"
LAN_IP=$(python3 -c "import json; print(json.load(open('$PROJECT_DIR/config.json'))['server']['lan_ip'])" 2>/dev/null || echo "192.168.1.100")
PORT=$(python3 -c "import json; print(json.load(open('$PROJECT_DIR/config.json'))['server']['port'])" 2>/dev/null || echo "8080")
API_URL="http://${LAN_IP}:${PORT}/api/links"

# Parse args
OPEN_BROWSER=0
COPY_GRADE=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --open|-o) OPEN_BROWSER=1; shift ;;
    --copy|-c) COPY_GRADE="$2"; shift 2 ;;
    --help|-h)
      echo "Uso: $0 [--open] [--copy GRADO]"
      echo "  --open   Abre la página de QRs en el navegador"
      echo "  --copy   Copia el enlace del GRADO al portapapeles"
      echo ""
      echo "Grados disponibles: ver lista con $0 (sin args)"
      exit 0
      ;;
    *) echo "Argumento desconocido: $1"; exit 1 ;;
  esac
done

# Verificar que el servidor responde
if ! curl -s --max-time 3 "$API_URL" > /dev/null; then
  CURRENT_IP=$(ipconfig getifaddr en0 2>/dev/null)
  if [ -n "$CURRENT_IP" ] && [ "$CURRENT_IP" != "$LAN_IP" ]; then
    echo "⚠️  IP estática ($LAN_IP) no responde. IP actual: $CURRENT_IP"
    if curl -s --max-time 3 "http://${CURRENT_IP}:${PORT}/api/links" > /dev/null; then
      echo "    Usando la IP actual en su lugar."
      LAN_IP="$CURRENT_IP"
      API_URL="http://${LAN_IP}:${PORT}/api/links"
    else
      echo "❌ El servidor no responde en $API_URL ni en $CURRENT_IP"
      echo "   Asegúrate de que esté corriendo (doble clic en scripts/start_mac.command)"
      exit 1
    fi
  else
    echo "❌ El servidor no responde en $API_URL"
    echo "   Asegúrate de que esté corriendo (doble clic en scripts/start_mac.command)"
    exit 1
  fi
fi

# Si pidió copiar
if [ -n "$COPY_GRADE" ]; then
  URL=$(curl -s "$API_URL" | python3 -c "
import json, sys
data = json.load(sys.stdin)
g = data['grades'].get('$COPY_GRADE')
if g and g.get('url'):
    print(g['url'])
else:
    sys.exit(1)
" 2>/dev/null)
  if [ -n "$URL" ]; then
    echo "$URL" | pbcopy
    echo "✅ Enlace copiado al portapapeles:"
    echo "   $URL"
    exit 0
  else
    echo "❌ Grado '$COPY_GRADE' no encontrado o no disponible"
    exit 1
  fi
fi

# Mostrar lista bonita
echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  🎓 Americano · Enlaces para los estudiantes                ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  📡 Servidor: http://$LAN_IP:$PORT  "
echo "║  👨‍🏫 Admin:   http://$LAN_IP/admin        "
echo "║  🖨️  QRs:     http://$LAN_IP/qr-cards  "
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

ACTIVE=$(curl -s "$API_URL" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('active_label') or '')")
if [ -n "$ACTIVE" ]; then
  echo "🎯 HOY VEMOS: $ACTIVE"
  echo "   → Los estudiantes al entrar a http://$LAN_IP van directo a este grado"
  echo ""
fi

echo "📚 GRADOS DISPONIBLES:"
echo ""

curl -s "$API_URL" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for gid, g in data['grades'].items():
    if g.get('ready') and g.get('url'):
        marker = '  ⭐ ' if (g.get('label') == data.get('active_label')) else '  🎯 '
        print(f'{marker}{g[\"label\"]}')
        print(f'     Materia:  {g[\"subject\"]}')
        print(f'     Enlace:   {g[\"url\"]}')
        print(f'     QR:       {g[\"qr_url\"]}')
        print()
"

echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "💡 CONSEJOS PARA ENVIAR A LOS ALUMNOS:"
echo "   1. Imprime QRs:    http://$LAN_IP/qr-cards  (botón Imprimir)"
echo "   2. Proyector:      http://$LAN_IP/qr-cards  (mostrar QR grande)"
echo "   3. Por WhatsApp:   $0 --copy segundo_basico  (luego pégalo)"
echo "   4. Ver todos:      ./show_links.sh"
echo ""

# Abrir navegador si pidió
if [ "$OPEN_BROWSER" = "1" ]; then
  echo "🌐 Abriendo navegador en http://$LAN_IP/qr-cards ..."
  open "http://$LAN_IP/qr-cards" 2>/dev/null || xdg-open "http://$LAN_IP/qr-cards" 2>/dev/null || echo "   (no se pudo abrir el navegador automáticamente)"
fi
