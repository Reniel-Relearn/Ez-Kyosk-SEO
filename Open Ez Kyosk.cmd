@echo off
setlocal
cd /d "%~dp0"
set ASTRO_TELEMETRY_DISABLED=1
echo Preparing your Ez Kyosk preview...
call npm exec -- astro preview stop
call npm run build
if errorlevel 1 goto failed
call npm run preview -- --port 4322 --background
if errorlevel 1 goto failed
start "" "http://127.0.0.1:4322/"
exit /b 0
:failed
echo.
echo The preview could not start. Keep this window open and share the error with the site maintainer.
pause
exit /b 1
