#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const BAD_PATTERNS = [
  { re: /\bTODO\b/i, message: 'TODO markers should be resolved.' },
  { re: /\bFIXME\b/i, message: 'FIXME markers should be resolved.' },
  { re: /\bteh\b/i, message: 'Did you mean "the"?' },
  { re: /\bhte\b/i, message: 'Did you mean "the"?' },
  { re: /\brecieve\b/i, message: 'Did you mean "receive"?' },
  { re: /\bseperate\b/i, message: 'Did you mean "separate"?' }
];

const IGNORED_DIRS = new Set(['vendor', 'node_modules', '_site', 'dist']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

function checkFile(file, errors) {
  const text = fs.readFileSync(file, 'utf8');
  for (const pattern of BAD_PATTERNS) {
    if (pattern.re.test(text)) {
      errors.push(`${file}: ${pattern.message}`);
    }
  }
}

function main() {
  const files = walk('.');
  const errors = [];
  for (const file of files) {
    checkFile(file, errors);
  }
  if (errors.length) {
    for (const err of errors) console.log(err);
    console.log(`SPELLCHECK_FAILED (${errors.length} issues)`);
    process.exit(1);
  }
  console.log('SPELLCHECK_OK');
}

main();
