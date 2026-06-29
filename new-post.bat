@echo off
chcp 65001 >nul
:: 支持中文显示（可选）
git pull

:: 设置默认值
set "mark=Contents"
:: 提示用户输入，若直接回车则保留默认值
set /p "mark=Press your blog name (Default: %mark%): "

echo.
echo Ready to commit with message: "Update %mark%"
echo Press any key to submit...
pause >nul

:: 执行 Git 命令
git add .
git commit -m "Update %mark%"
git push

echo Done!
pause