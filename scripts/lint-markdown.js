#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const IGNORED_DIRS = new Set(['vendor', 'node_modules', '_site']);

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

function report(file, line, code, message, errors) {
  errors.push(`${file}:${line} [${code}] ${message}`);
}

function checkFile(file, errors) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  let inCode = false;
  let inFrontmatter = false;
  let frontmatterFenceCount = 0;

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const lineno = idx + 1;
    const trimmed = line.trim();
    const endsWithSpace = /[ \t]$/.test(line);

    // Front matter detection so list/heading rules don't apply there
    if (lineno === 1 && trimmed === '---') {
      inFrontmatter = true;
    }
    if (inFrontmatter) {
      if (trimmed === '---') {
        frontmatterFenceCount += 1;
        if (frontmatterFenceCount === 2) {
          inFrontmatter = false;
        }
      }
      continue;
    }

    if (/^(```|~~~)/.test(trimmed)) {
      inCode = !inCode;
    }

    if (!inCode) {
      if (endsWithSpace && trimmed.length > 0 && !/  $/.test(line)) {
        report(file, lineno, 'no-trailing-spaces', 'Trailing spaces are not allowed (except for hard line breaks).', errors);
      }

      if (
        line.length > 100 &&
        !line.includes('http') &&
        !line.includes('|') &&
        !line.includes('](') &&
        !/^\s*```/.test(trimmed)
      ) {
        report(file, lineno, 'MD013', 'Line exceeds 100 characters.', errors);
      }

      if (/^[ \t]*[\*\+]\s/.test(line)) {
        report(file, lineno, 'MD004', 'Bulleted lists must use "-" as the marker.', errors);
      }

      const listMatch = line.match(/^( +)- /);
      if (listMatch) {
        const spaces = listMatch[1].length;
        if (spaces !== 0 && spaces % 2 !== 0 && spaces % 3 !== 0 && spaces % 4 !== 0) {
          report(file, lineno, 'MD007', 'List indentation must use consistent spacing.', errors);
        }
      }
    }
  }
}

function main() {
  const mdFiles = walk('.');
  const errors = [];
  for (const file of mdFiles) {
    checkFile(file, errors);
  }
  if (errors.length) {
    for (const err of errors) {
      console.log(err);
    }
    console.log(`MARKDOWN_LINT_FAILED (${errors.length} issues)`);
    process.exit(1);
  }
  console.log('MARKDOWN_LINT_OK');
}

main();
