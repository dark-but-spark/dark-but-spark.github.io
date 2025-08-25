# 设置控制台为UTF-8编码，避免日志和屏幕乱码
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$logPath = "logs\Run.log"
if (!(Test-Path "logs")) { New-Item -ItemType Directory -Path "logs" | Out-Null }
Remove-Item $logPath -ErrorAction SilentlyContinue

function Write-Log {
    param([string]$Text)
    Write-Host $Text
    Add-Content -Path $logPath -Value $Text -Encoding UTF8
}


Write-Log "==== Hexo Clean ===="
hexo clean 2>&1 | ForEach-Object { Write-Log $_ }

Write-Log "==== Hexo Server ===="
hexo server 2>&1 | ForEach-Object { Write-Log $_ }