::
:: Code made by Google AI
::
@echo off
chcp 65001 > nul
cd /d "%~dp0"

for %%I in ("%cd%") do set "Folder=%%~nxI"

echo [Info] Automatic SCSS compilation started in folder "%Folder%".
echo [Info] You can keep this terminal open if you plan to continue editing SCSS files.
echo.

sass --watch assets/styles/master.scss assets/styles/minified/master.min.css --style=compressed

pause