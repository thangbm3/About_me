#!/usr/bin/env python3
"""Offline preview of the fully static Astro page.

The page uses pure HTML markup, so copying the markup and /public assets
produces a browsable static preview without needing Node dependencies.
This is for preview only; the GitHub Pages workflow runs `astro build`.
"""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parents[1]
astro_page = (root / 'src/pages/index.astro').read_text(encoding='utf-8')
if not astro_page.startswith('---\n'):
    raise RuntimeError('Astro page frontmatter format changed; update this helper.')
page = astro_page.split('---\n', 2)[2]
dist = root / 'dist'
dist.mkdir(exist_ok=True)
for item in (root / 'public').iterdir():
    dest = dist / item.name
    if item.is_dir():
        shutil.copytree(item, dest, dirs_exist_ok=True)
    else:
        shutil.copy2(item, dest)
(dist / 'index.html').write_text(page, encoding='utf-8')
print(f'Offline preview: {dist / "index.html"}')
