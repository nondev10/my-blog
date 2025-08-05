@echo off
git pull
git remote set-url origin git@github.com:nondev10/my-blog.git

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
