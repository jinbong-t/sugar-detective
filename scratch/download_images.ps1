$htmlPath = "c:\Users\user\OneDrive - 우신중학교\바이브코딩\당류탐정수사대\index.html"
$imgDir = "c:\Users\user\OneDrive - 우신중학교\바이브코딩\당류탐정수사대\images"
if (-Not (Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir }

$content = Get-Content -Raw -Path $htmlPath
$pattern = 'https://i\.imgur\.com/[\w\.]+'
$matches = [regex]::Matches($content, $pattern)
$urls = $matches | ForEach-Object { $_.Value } | Select-Object -Unique

foreach ($url in $urls) {
    $filename = $url.Split('/')[-1]
    $localPath = Join-Path $imgDir $filename
    Write-Host "Downloading $url to $localPath"
    Invoke-WebRequest -Uri $url -OutFile $localPath
    $content = $content.Replace($url, "images/$filename")
}

Set-Content -Path $htmlPath -Value $content
Write-Host "Done."
