@echo off
title Presser Beta

if exist node_modules\ (
  echo Please wait...
  node index.js
  pause
) else (
  call npm i >> NUL
  echo Succesfully installed!
  echo Please wait...
  node index.js
  pause
)
