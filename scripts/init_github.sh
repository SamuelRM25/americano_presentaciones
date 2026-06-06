#!/bin/bash
set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

if [ ! -d ".git" ]; then
  echo "🔧 Inicializando repositorio Git..."
  git init
  git branch -M main
  git remote add origin https://github.com/SamuelRM25/americano_presentaciones.git
fi

echo "📦 Agregando archivos..."
git add .

echo ""
echo "📝 Configuración del commit:"
read -p "   Mensaje del commit (Enter para usar el por defecto): " MSG
MSG=${MSG:-"Initial commit: Plataforma educativa Americano con Cuarto Bachillerato por Madurez"}

echo "💾 Haciendo commit..."
git commit -m "$MSG" 2>/dev/null || git commit -m "$MSG --no-verify" || echo "   (sin cambios nuevos para commitear)"

echo ""
echo "🚀 Intentando push al repositorio remoto..."
echo "   Si es la primera vez, te pedirá autenticación."
echo ""
git push -u origin main 2>&1 | head -20 || echo ""
echo ""
echo "✅ Listo. Revisa: https://github.com/SamuelRM25/americano_presentaciones"
