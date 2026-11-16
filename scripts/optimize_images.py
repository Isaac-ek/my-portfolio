"""Generate committed display assets; originals remain available for full-size links.

Requires Pillow with WebP support. Run through npm run images:build.
Carton geometry matches the original SVG presentation; the artwork is not redrawn.
"""
import base64
import hashlib
import io
import json
from pathlib import Path
import sys

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUTPUT = PUBLIC / 'assets/optimized'
OUTPUT.mkdir(parents=True, exist_ok=True)

# Normalized panel coordinates from the original interactive SVG viewer.
PANELS = {
    'detox': ((26.2, 51.8, 47, 25.4), (73.4, 52.2, 18.5, 24.5)),
    'bright': ((26.3, 50.8, 47, 24.8), (73.6, 51.4, 19.5, 23.5)),
    'beauty': ((22, 48.5, 55.7, 27), (77.9, 49.2, 16.3, 25.5)),
    'renew': ((25.4, 47.8, 49.8, 29.1), (75.5, 48.5, 18.6, 27.8)),
    'acne': ((26.3, 51.6, 47.1, 25.1), (73.7, 52.2, 18.9, 24)),
    'men': ((21.6, 49.4, 56, 27), (77.9, 50, 16.5, 25.7)),
    'barrier': ((21.9, 48.9, 55.3, 27.1), (77.4, 49.6, 16.3, 25.9)),
    'salvia': ((25.8, 18.3, 22.7, 63.1), (69, 18.6, 19, 62.6)),
    'excelsa': ((24.2, 16, 22, 65.7), (66.7, 16.2, 18.3, 65.5)),
    'mirosan': ((24.9, 17.3, 22.2, 69.9), (68.9, 17.3, 21.3, 69.9)),
    'apipropol': ((24.2, 15.3, 21.5, 72.8), (64.2, 15.3, 19.4, 72.8)),
    'gastro': ((25.3, 15.6, 22.8, 70.3), (68.7, 15.8, 22.2, 70.1)),
}


def write_asset(stem, content, extension):
    digest = hashlib.sha256(content).hexdigest()[:12]
    name = f'{stem}-{digest}.{extension}'
    (OUTPUT / name).write_bytes(content)
    return f'/assets/optimized/{name}'


def webp(image, quality=86):
    buffer = io.BytesIO()
    image.save(buffer, 'WEBP', quality=quality, method=6)
    return buffer.getvalue()


def responsive(image, stem):
    widths = sorted(set([w for w in (320, 640, 960, 1440) if w < image.width] + [min(image.width, 1600)]))
    variants = []
    for width in widths:
        height = max(1, round(image.height * width / image.width))
        resized = image.resize((width, height), Image.Resampling.LANCZOS)
        variants.append((width, write_asset(f'{stem}-{width}', webp(resized), 'webp')))
    default = min(variants, key=lambda item: abs(item[0] - 960))
    return {'src': default[1], 'srcSet': ', '.join(f'{url} {width}w' for width, url in variants), 'width': image.width, 'height': image.height}


def crop_panel(image, coordinates, logical_width, logical_height, maximum_width):
    x, y, width, height = coordinates
    box = tuple(round(value) for value in (
        image.width * x / 100, image.height * y / 100,
        image.width * (x + width) / 100, image.height * (y + height) / 100,
    ))
    panel = image.crop(box)
    width = min(panel.width, maximum_width)
    return panel.resize((width, round(width * logical_height / logical_width)), Image.Resampling.LANCZOS)


def carton_svg(front, side, width, height, accent):
    front_url = 'data:image/webp;base64,' + base64.b64encode(webp(front)).decode()
    side_url = 'data:image/webp;base64,' + base64.b64encode(webp(side)).decode()
    top = f'M 15 36 L 65 12 L {width + 65} 12 L {width + 15} 36 Z'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width + 75} {height + 65}">
<ellipse cx="{(width + 75) / 2}" cy="{height + 50}" rx="{width / 2 + 20}" ry="10" fill="#000" opacity=".14"/>
<path d="{top}" fill="{accent}"/><path d="{top}" fill="#fff" opacity=".25"/>
<image x="15" y="36" width="{width}" height="{height}" href="{front_url}" preserveAspectRatio="none"/>
<g transform="translate({width + 15} 36) skewY(-26.565)"><image width="50" height="{height}" href="{side_url}" preserveAspectRatio="none"/><rect width="50" height="{height}" fill="#000" opacity=".18"/></g>
<path d="M 15 36 H {width + 15} V {height + 36} H 15 Z" fill="none" stroke="#000" stroke-opacity=".1"/>
</svg>'''.encode()


images = {}
sources = sorted((PUBLIC / 'assets/designs').glob('*')) + sorted((PUBLIC / 'assets/projects').rglob('*'))
original_bytes = 0
for path in sources:
    if path.suffix.lower() not in {'.jpg', '.jpeg', '.png'} or '-assembled' in path.name:
        continue
    with Image.open(path) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
    key = '/' + path.relative_to(PUBLIC).as_posix()
    entry = responsive(image, path.stem)
    original_bytes += path.stat().st_size
    if path.name == 'lead-detail.png':
        card = image.crop((0, 0, image.width, round(image.width * 7 / 9)))
        entry['card'] = responsive(card, 'lead-detail-card')
    images[key] = entry

previews = {}
for design in json.load(sys.stdin):
    for variant in design.get('variants', []):
        variant_id = variant['id']
        source = PUBLIC / variant.get('dielineImage', variant['image']).lstrip('/')
        with Image.open(source) as original:
            image = ImageOps.exif_transpose(original).convert('RGB')
        width, height = (300, 195) if variant_id in {'detox', 'bright', 'beauty', 'renew', 'acne', 'men', 'barrier'} else (160, 260)
        front_coords, side_coords = PANELS[variant_id]
        front = crop_panel(image, front_coords, width, height, 1200)
        front_entry = responsive(front, f'{variant_id}-front')
        urls = {}
        for kind, front_width, side_width in [('small', 200, 65), ('assembled', 600, 180)]:
            front = crop_panel(image, front_coords, width, height, front_width)
            side = crop_panel(image, side_coords, 50, height, side_width)
            urls[kind] = write_asset(f'{variant_id}-{kind}', carton_svg(front, side, width, height, variant['accent']), 'svg')
        previews[variant_id] = {'width': width, 'height': height, 'front': front_entry, **urls}

header = '// Generated by npm run images:build. Keep original assets for full-size inspection.\n'
image_type = 'export type ImageAsset = { src: string; srcSet: string; width: number; height: number; card?: ImageAsset };\n'
(ROOT / 'src/data/image-assets.ts').write_text(header + image_type + 'export const imageAssets: Record<string, ImageAsset> = ' + json.dumps(images, indent=2) + ';\n')
(ROOT / 'src/data/packaging-assets.ts').write_text(header + "import type { ImageAsset } from './image-assets';\n" + 'export const packagingAssets: Record<string, { width: number; height: number; front: ImageAsset; small: string; assembled: string }> = ' + json.dumps(previews, indent=2) + ';\n')
print(f'Generated responsive previews for {len(images)} originals ({original_bytes / 1024 / 1024:.1f} MiB) and {len(previews)} cartons.')
