@echo off
echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Creating initial commit...
git commit -m "Initial commit - Migrated storefront to React + TypeScript"

echo Renaming default branch to main...
git branch -M main

echo Setting remote origin...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/AadhityaS-2124/La-For-t.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
