#!/usr/bin/env node
const fs = require('fs');
const crypto = require('crypto');

const FILES = ['src/pl/index.html', 'src/en/index.html'];
const OPEN = '<' + 'script>';
const CLOSE = '<' + '/script>';

for (const file of FILES) {
    const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?--\s*>/g, '');
    const start = html.indexOf(OPEN);
    if (start === -1) { console.error(file, 'no bare <script> tag'); process.exit(1); }
    const contentStart = start + OPEN.length;
    const end = html.indexOf(CLOSE, contentStart);
    if (end === -1) { console.error(file, 'no closing tag'); process.exit(1); }
    const inner = html.slice(contentStart, end);
    const hash = 'sha256-' + crypto.createHash('sha256').update(inner).digest('base64');
    console.log(file, hash);
}
