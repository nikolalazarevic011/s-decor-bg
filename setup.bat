@echo off
echo.
echo ========================================
echo  Stefan Portfolio - Next.js Setup
echo ========================================
echo.

echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo.
    echo ❌ Installation failed! 
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo ✅ Installation complete!
echo.
echo Next steps:
echo 1. Run "npm run dev" to start development server
echo 2. Open http://localhost:3000 in your browser
echo 3. Run "npm run build && npm run export" to build for production
echo.
echo Press any key to start development server...
pause > nul

echo.
echo Starting development server...
call npm run dev

pause
