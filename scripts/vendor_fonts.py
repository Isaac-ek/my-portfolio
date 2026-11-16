"""Vendor official Google Fonts Latin subsets and their OFL licenses.

Run explicitly when updating fonts; Vercel builds use the committed assets.
"""
import hashlib
import re
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public/assets/optimized'
LICENSES = ROOT / 'public/assets/font-licenses'
LICENSES.mkdir(parents=True, exist_ok=True)
url = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400..700&family=Space+Grotesk:wght@400..700&family=Syne:wght@700..800&display=swap'
agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
stylesheet = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': agent}), timeout=30).read().decode()
rules = re.findall(r'/\* latin \*/\s*(@font-face\s*\{[^}]+\})', stylesheet)
assert len(rules) == 5, f'Expected five Latin font faces, found {len(rules)}'
css = ['/* Official Google Fonts Latin subsets. OFL licenses: /assets/font-licenses/. */']
preloads = []
for rule in rules:
    family = re.search(r"font-family: '([^']+)'", rule)[1]
    style = re.search(r'font-style: ([^;]+)', rule)[1]
    source = re.search(r'url\(([^)]+)\)', rule)[1]
    data = urllib.request.urlopen(urllib.request.Request(source, headers={'User-Agent': agent}), timeout=30).read()
    assert data[:4] == b'wOF2'
    filename = family.lower().replace(' ', '-') + '-' + style + '-' + hashlib.sha256(data).hexdigest()[:12] + '.woff2'
    (OUTPUT / filename).write_bytes(data)
    local = '/assets/optimized/' + filename
    css.append(rule.replace(source, local))
    if family in {'Syne', 'Space Grotesk'}:
        preloads.append(f'    <link rel="preload" href="{local}" as="font" type="font/woff2" crossorigin />')
for family in ['instrumentserif', 'jetbrainsmono', 'spacegrotesk', 'syne']:
    license_url = f'https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/OFL.txt'
    data = urllib.request.urlopen(license_url, timeout=30).read()
    (LICENSES / f'{family}-OFL.txt').write_text('\n'.join(line.rstrip() for line in data.decode().splitlines()) + '\n')
styles = ROOT / 'src/styles'
styles.mkdir(exist_ok=True)
(styles / 'fonts.css').write_text('\n\n'.join(css) + '\n')
index = ROOT / 'index.html'
s = index.read_text()
s = re.sub(r'    <!-- Local font preloads -->.*?    <!-- End local font preloads -->\n', '', s, flags=re.S)
s = s.replace('    <title>', '    <!-- Local font preloads -->\n' + '\n'.join(preloads) + '\n    <!-- End local font preloads -->\n    <title>', 1)
index.write_text(s)
print(f'Vendored {len(rules)} WOFF2 font faces with OFL licenses.')
