::
:: Code made by Google AI
::
@echo off
cd /d "%~dp0"

if not exist "assets\scripts\minified" mkdir "assets\scripts\minified"

call uglifyjs assets/scripts/builder.js -o assets/scripts/minified/builder.min.js -c -m
call uglifyjs assets/scripts/gallery-filter.js -o assets/scripts/minified/gallery-filter.min.js -c -m

timeout /t 2