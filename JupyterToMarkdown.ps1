[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$logPath = "logs\JupyterToMarkdown.log"
if (!(Test-Path "logs")) { New-Item -ItemType Directory -Path "logs" | Out-Null }
Remove-Item $logPath -ErrorAction SilentlyContinue
$outputPath = "markdown_output\"
if (!(Test-Path "markdown_output")) { New-Item -ItemType Directory -Path "markdown_output" | Out-Null }

function Write-Log {
    param([string]$Text)
    Write-Host $Text
    Add-Content -Path $logPath -Value $Text -Encoding UTF8
}
if(!(Get-Command jupyter -ErrorAction SilentlyContinue)) {
    Write-Log "jupyter not found"
    exit
}
$inputPath= Read-Host "please enter a Jupyter Notebook file path:"
Write-Log "Input path is: $inputPath"
if(!(Test-Path $inputPath) -or ([System.IO.Path]::GetExtension($inputPath) -ne ".ipynb")){
    Write-Log "File error: not found or incorrect format $inputPath"
    exit
}
$baseName = [System.IO.Path]::GetFileNameWithoutExtension($inputPath)
Write-Log "==== Jupyter Notebook to Markdown Conversion Started ===="
jupyter nbconvert $inputPath --to markdown --output "$baseName.md" --output-dir $outputPath
if($?) {
    Write-Log "Conversion successful: $outputPath$baseName.md"
} else {
    Write-Log "Conversion failed"
}
