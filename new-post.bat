@echo off
git pull

:: Create
set /p mark="Press article keywords("-^" to link): "
echo Run it by yourself: pnpm new-post %mark%
echo Then press enter to open the blog with default method.

pause > nul

explorer ".\src\content\posts\%mark%.md"

echo Press enter to submit the blog.
pause > nul

:: Commit
git add .
git commit -m "Update %mark%"
git push

echo Press enter to end.
pause > nul
