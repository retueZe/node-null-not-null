@ECHO OFF

CD "%~dp0\.."
RD dist /Q /S
MD dist
XCOPY src dist /E /Y >NUL