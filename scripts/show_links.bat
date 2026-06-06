@echo off
chcp 65001 >nul
cd /d "%~dp0\.."

set LAN_IP=192.168.1.100
for /f "delims=" %%i in ('powershell -Command "(Get-Content config.json | ConvertFrom-Json).server.lan_ip"') do set LAN_IP=%%i

echo.
echo   Mostrando enlaces...
echo.

powershell -Command ^
  "$ErrorActionPreference='SilentlyContinue';" ^
  "try {" ^
  "  $api = Invoke-RestMethod -Uri ('http://%LAN_IP%:8080/api/links') -TimeoutSec 3;" ^
  "  Write-Host '';" ^
  "  Write-Host '════════════════════════════════════════════════════════════════════' -ForegroundColor Cyan;" ^
  "  Write-Host '  Americano - Enlaces para los estudiantes' -ForegroundColor Yellow;" ^
  "  Write-Host '════════════════════════════════════════════════════════════════════' -ForegroundColor Cyan;" ^
  "  Write-Host '';" ^
  "  foreach ($gid in $api.grades.PSObject.Properties) {" ^
  "    $g = $gid.Value;" ^
  "    if ($g.ready) {" ^
  "      Write-Host ('  ' + $g.label) -ForegroundColor Green;" ^
  "      Write-Host ('    Enlace: ' + $g.url) -ForegroundColor White;" ^
  "      Write-Host ('    QR:     ' + $g.qr_url) -ForegroundColor Gray;" ^
  "      Write-Host '';" ^
  "    }" ^
  "  }" ^
  "  Write-Host '  QRs imprimibles: http://%LAN_IP%/qr-cards' -ForegroundColor Magenta;" ^
  "  Write-Host '  Admin:           http://%LAN_IP%/admin' -ForegroundColor Magenta;" ^
  "  Write-Host '';" ^
  "} catch {" ^
  "  Write-Host 'ERROR: No se pudo conectar al servidor en http://%LAN_IP%:8080' -ForegroundColor Red;" ^
  "  Write-Host 'Asegurate de que el servidor este corriendo (iniciar con start_windows.bat).' -ForegroundColor Yellow;" ^
  "}"
echo.
pause
