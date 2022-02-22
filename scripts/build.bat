@ECHO OFF

CD "%~dp0\.."
RD dist /Q /S >NUL
npx babel src -d dist