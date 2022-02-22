@ECHO OFF

CD "%~dp0\.."
RD dist /Q /S
npx babel src -d dist