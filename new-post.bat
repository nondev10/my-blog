@echo off
git pull

:: Create
set /p mark="Press article keywords("-^" to link): "
echo Run it by yourself: pnpm new-post %mark%

pause > nul

explorer ".\src\content\posts\%mark%.md"

pause > nul

:: Commit
git add .
git commit -m "Update %mark%"
git push

pause > nul
