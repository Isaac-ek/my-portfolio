# Display media

The original artwork and application screenshots remain in their original paths for full-resolution inspection links. Page images use generated WebP sizes, and small carton mockups embed only their cropped front and side panels instead of requesting complete production sheets.

`ResponsiveImage` selects a display width through `srcset` and `sizes`, reserves the image dimensions, and defaults to lazy loading and asynchronous decoding. The SecureStream cover loads eagerly. The CRM project card uses a crop matching its existing 9:7 display, so it does not download the hidden length of the full-page screenshot.

Generated filenames include a content hash. Vercel serves `/assets/optimized/` with a one-year immutable cache; updated media gets a new URL. HTML and the original unversioned artwork do not receive that policy.

## Regeneration

With Python and Pillow (including WebP support) installed:

```sh
npm run images:build
# Or select a specific Python interpreter:
IMAGE_PYTHON=/path/to/python npm run images:build
```

The script reads the shared design data, preserves the original carton geometry, and writes the optimized files and TypeScript manifests. Review the range, single-carton, front-panel and dieline views after changing artwork or panel coordinates. Commit the generated files; the deployment does not need Python or image-encoding dependencies.

The five existing font faces are served locally as WOFF2 with `font-display: swap`. The display and body fonts have preload hints. Their OFL licenses are included in `/assets/font-licenses/`. To refresh them from the official Google Fonts source, run `python3 scripts/vendor_fonts.py` and commit the font assets, CSS and preload links together.

## Size comparison

These are asset sizes, not measured page-load times:

| Display | Previous download | Generated display asset(s) |
| --- | --- | --- |
| CRM lead card | 2,074 KiB full-page PNG | 57 KiB at 960 px; smaller widths available |
| Seven soap carton mockups | Complete production sheets, about 3 MiB | 147 KiB combined |
| Five honey carton mockups | Complete production sheets, over 13 MiB | 208 KiB combined |

Verify phone and desktop image selection, local font loading, all twelve packaging variants, full-resolution links and both application walkthroughs. Inspect actual decoded images as well as network requests; smaller files alone do not establish acceptable visual quality.
