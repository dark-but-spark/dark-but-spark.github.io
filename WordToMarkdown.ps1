[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$logPath = "logs\WordToMarkdown.log"
if (!(Test-Path "logs")) { New-Item -ItemType Directory -Path "logs" | Out-Null }
Remove-Item $logPath -ErrorAction SilentlyContinue
$outputPath = "markdown_output\"
if (!(Test-Path "markdown_output")) { New-Item -ItemType Directory -Path "markdown_output" | Out-Null }

function Write-Log {
    param([string]$Text)
    Write-Host $Text
    Add-Content -Path $logPath -Value $Text -Encoding UTF8
}

if(!(Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Log "pandoc not found"
    exit
}

$inputPath= Read-Host "please enter a Word file path:"
Write-Log "Input path is: $inputPath"
if(!(Test-Path $inputPath) -or ([System.IO.Path]::GetExtension($inputPath) -ne ".docx")){
    Write-Log "File error: not found or incorrect format $inputPath"
    exit
}
$baseName = [System.IO.Path]::GetFileNameWithoutExtension($inputPath)
Write-Log "==== Word to Markdown Conversion Started ===="
pandoc $inputPath -t markdown -o "$outputPath$baseName.md" --extract-media="$outputPath/images"
if($?) {
    Write-Log "Conversion successful: $outputPath$baseName.md"
} else {
    Write-Log "Conversion failed"
}
