@echo off
title Launching Modules v.1.1.0
:top
cls
node launch.js
pause
    call npm init
    call npm install discord.js
    call npm install chalk
pause
cls
node done.js
pause
exit
goto :top