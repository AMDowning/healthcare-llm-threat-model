#!/usr/bin/env python3
"""Prepare absolute web links for Lychee; check-site.py validates local routes."""
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
import re

SKIP = {'.git', 'node_modules', 'vendor', '_site', 'tmp', '.bundle', '.jekyll-cache'}


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = set()

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in ('href', 'src') and value and value.startswith(('https://', 'http://')):
                self.urls.add(value)


repo = set()
for path in Path('.').rglob('*.md'):
    if SKIP.intersection(path.parts):
        continue
    # This repository's Markdown uses unescaped, non-parenthesized web URLs.
    repo.update(unescape(url).rstrip('.,;') for url in
                re.findall(r'https?://[^\s<>"\)\]]+', path.read_text()))
site = Links()
for path in Path('_site').rglob('*.html'):
    site.feed(path.read_text())
Path('.linkcheck').mkdir(exist_ok=True)
for name, urls in (('repo', repo), ('site', site.urls)):
    Path(f'.linkcheck/{name}.txt').write_text('\n'.join(sorted(urls)) + '\n')
    print(f'{name}: {len(urls)} unique absolute web links')
