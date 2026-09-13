#!/usr/bin/env python3
import pathlib
import sys

IGNORED = {'vendor', 'node_modules', '_site', 'dist'}


def iter_yaml_files(root: pathlib.Path):
    for path in root.rglob('*'):
        if any(part in IGNORED for part in path.parts):
            continue
        if path.suffix in {'.yml', '.yaml'} and path.is_file():
            yield path


def lint_file(path: pathlib.Path):
    errors = []
    stack = [0]
    prev_indent = 0
    block_indent = None
    for lineno, raw in enumerate(path.read_text(encoding='utf-8').splitlines(), start=1):
        line = raw.rstrip('\n')
        if '\t' in line:
            errors.append((lineno, 'Tabs are not allowed.'))
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        indent = len(line) - len(line.lstrip(' '))
        if block_indent is not None and indent > block_indent:
            continue
        if block_indent is not None and indent <= block_indent:
            block_indent = None
        if indent % 2 != 0:
            errors.append((lineno, 'Indentation must be multiples of 2 spaces.'))
        if indent > prev_indent and indent - prev_indent > 2:
            errors.append((lineno, 'Indentation increases must be in steps of 2 spaces.'))
        while stack and indent < stack[-1]:
            stack.pop()
        if not stack or indent != stack[-1]:
            stack.append(indent)
        prev_indent = indent
        if stripped.startswith('-'):
            if stripped != '-' and not stripped.startswith('- '):
                errors.append((lineno, 'Sequence items must have a space after "-".'))
        else:
            if ':' not in stripped:
                errors.append((lineno, 'Mappings must use the "key: value" form.'))
            if stripped.endswith(('|', '>-', '|-', '>')):
                block_indent = indent
    return errors


def main():
    root = pathlib.Path('.')
    all_errors = []
    for path in iter_yaml_files(root):
        for lineno, message in lint_file(path):
            all_errors.append(f"{path}:{lineno} {message}")
    if all_errors:
        for err in all_errors:
            print(err)
        print(f"YAML_LINT_FAILED ({len(all_errors)} issues)")
        return 1
    print('YAML_LINT_OK')
    return 0


if __name__ == '__main__':
    sys.exit(main())
