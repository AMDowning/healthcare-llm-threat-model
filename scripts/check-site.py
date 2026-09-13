#!/usr/bin/env python3
"""Validate rendered routes, content, evidence cards, and local links after Jekyll builds."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import sys

ROOT = Path('_site')
BASE = '/healthcare-llm-threat-model'


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.links = []
        self.ids = set()
        self.items = []
        self.options = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        if tag == 'a' and a.get('href'):
            self.links.append(a['href'])
        if tag in ('link', 'script'):
            value = a.get('href') or a.get('src')
            if value:
                self.links.append(value)
        if tag == 'option' and a.get('value', '').startswith('LLM'):
            self.options.append(a['value'])
        if 'catalog-item' in a.get('class', '').split():
            self.items.append(a)


errors = []
if not ROOT.exists():
    sys.exit('Build the site first: bundle exec jekyll build')
pages = {p: Page(p.read_text()) for p in ROOT.rglob('*.html')}
for path, page in pages.items():
    text = path.read_text()
    if '{{' in text or '{%' in text:
        errors.append(f'{path}: unrendered Liquid')
    for href in page.links:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        route = unquote(url.path)
        if route.startswith('/'):
            if not route.startswith(BASE + '/') and route != BASE:
                errors.append(f'{path}: link missing project base path: {href}')
                continue
            target = ROOT / route[len(BASE):].lstrip('/')
        elif route:
            target = path.parent / route
        else:
            target = path
        if target.is_dir():
            target /= 'index.html'
        if not target.exists():
            errors.append(f'{path}: broken local link: {href}')
        elif url.fragment and target.suffix == '.html':
            parsed = pages.get(target) or Page(target.read_text())
            if unquote(url.fragment) not in parsed.ids:
                errors.append(f'{path}: missing anchor: {href}')

index = json.loads(Path('assets/catalog.json').read_text())
catalog_path = ROOT / 'threats/index.html'
catalog = pages.get(catalog_path)
if not catalog or len(catalog.items) != len(index):
    errors.append('Rendered catalog count does not match JSON index')
if catalog:
    if set(catalog.options) != {f'LLM{i:02}' for i in range(1, 11)}:
        errors.append('Category filter must use the ten legacy IDs, not Jekyll document IDs')
    for item in catalog.items:
        for risk in item.get('data-risk', '').split(','):
            if risk and risk not in catalog.options:
                errors.append(f'Unknown rendered category filter: {risk}')
expected = {'category': 10, 'incident': 4, 'vulnerability': 2, 'scenario': 5, 'research': 8}
for kind, count in expected.items():
    actual = sum(r['evidence_type'] == kind for r in index)
    if actual != count:
        errors.append(f'{kind}: expected {count} entries, got {actual}')
for record in index:
    route = record['url']
    if not route:
        errors.append(f'Missing route: {record["id"]}')
        continue
    p = ROOT / route.lstrip('/') / 'index.html'
    if not p.exists():
        errors.append(f'Missing entry page: {route}')
        continue
    html = p.read_text()
    if record['evidence_type'] == 'category':
        for heading in ['Operational safeguards', 'Detection', 'Question for community partnership']:
            if heading not in html:
                errors.append(f'{p}: category body missing {heading}')
    if record['evidence_type'] in ('incident', 'vulnerability', 'scenario'):
        for heading in ['What happened', 'Evidence status', 'Question for community partnership']:
            if heading not in html:
                errors.append(f'{p}: missing {heading}')
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'SITE_OK: {len(pages)} HTML pages; {len(index)} catalog entries; all local links resolved')
