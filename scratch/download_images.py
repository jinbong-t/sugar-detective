import re
import urllib.request
import os

html_path = 'c:\\Users\\user\\OneDrive - 우신중학교\\바이브코딩\\당류탐정수사대\\index.html'
images_dir = 'c:\\Users\\user\\OneDrive - 우신중학교\\바이브코딩\\당류탐정수사대\\images'

if not os.path.exists(images_dir):
    os.makedirs(images_dir)

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all imgur URLs
urls = re.findall(r'https://i\.imgur\.com/[\w\.]+', content)
urls = list(set(urls))

for url in urls:
    filename = url.split('/')[-1]
    local_path = os.path.join(images_dir, filename)
    print(f"Downloading {url} to {local_path}...")
    try:
        urllib.request.urlretrieve(url, local_path)
        # Replace in HTML
        content = content.replace(url, f"images/{filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done.")
