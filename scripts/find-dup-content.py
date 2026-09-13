# Detect near-duplicate headings/paragraphs across Markdown files.
import glob, os, re, itertools, difflib, sys
def chunks(md):
    # Compare complete prose paragraphs, not individual wrapped lines or card headings.
    out, paragraph = [], []
    start, in_code = 1, False
    def flush():
        if paragraph:
            out.append(("p", start, re.sub(r'\s+', ' ', ' '.join(paragraph))))
            paragraph.clear()
    for i, line in enumerate(md.splitlines(), 1):
        stripped = line.strip()
        if stripped.startswith(('```', '~~~')):
            flush()
            in_code = not in_code
            continue
        if in_code:
            continue
        if not stripped or stripped.startswith(('#', '-', '*', '>', '|', '[', '{%', '{{', '<', '— [')):
            flush()
            continue
        if not paragraph:
            start = i
        paragraph.append(stripped)
    flush()
    return out
files = sorted([p for p in glob.glob("**/*.md", recursive=True)
                if not set(p.split('/')) & {'node_modules', '_site', 'vendor'}])
blobs = []
for f in files:
    with open(f, "r", encoding="utf-8", errors="ignore") as fh:
        raw = fh.read()
    if raw.startswith("---"):
        parts = raw.split("---", 2)
        if len(parts) == 3:
            raw = parts[2]
    for kind, ln, txt in chunks(raw):
            if len(txt) >= 40:
                blobs.append((f, ln, kind, txt[:400]))
pairs = []
for (i, a), (j, b) in itertools.combinations(enumerate(blobs), 2):
    r = difflib.SequenceMatcher(None, a[3].lower(), b[3].lower()).ratio()
    if r >= 0.90:
        pairs.append((r, a, b))
pairs.sort(reverse=True)
bad = []
for r, a, b in pairs[:300]:
    bad.append(f"{r:.2f} | {a[0]}:{a[1]} ({a[2]}) == {b[0]}:{b[1]} ({b[2]})")
if bad:
    print("NEAR_DUPLICATES_DETECTED")
    for line in bad: print(line)
    sys.exit(2)
else:
    print("NO_DUPLICATES")
