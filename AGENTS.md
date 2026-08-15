# AGENTS.md

## Overview

Static HTML site for learning Japanese kana (Hiragana & Katakana). No build tools, no package manager, no framework. Open with any static file server or VS Code Live Server (port 5501 per `.vscode/settings.json`).

**Language: Indonesian.** All UI text is in Bahasa Indonesia — do not translate to English.

## Structure

- `index.html` — landing page
- `hiragana.html` / `katakana.html` — reference table pages
- `flashcard.html` — flashcard practice (inline JS)
- `kuis.html` — multiple-choice quiz (inline JS)
- `tulis.html` — stroke-order writing practice
- `js/data.js` — source of truth for all character data (`HIRAGANA`, `KATAKANA`, `flattenKana()`)
- `js/layout.js` — renders shared header/footer, activated by `data-page` attribute on `<body>`
- `js/table.js` — renders reference table grid on hiragana/katakana pages
- `js/vendor/hanzi-writer.min.js` — third-party lib for stroke animation/quizzes
- `data/strokes/*.json` — stroke-order data files, named by exact Unicode character (e.g. `あ.json`, `カ.json`)

## Key Conventions

- Each HTML page sets `data-page` on `<body>` (e.g. `data-page="hiragana"`) to drive nav active state in `layout.js`.
- Reference table pages also set `data-script` (e.g. `data-script="hiragana"`) which `table.js` reads to pick the correct dataset.
- Flashcard and quiz logic is inline `<script>` in their respective HTML files, not in separate JS modules.
- User progress (mastered characters) persists via `localStorage` keys: `kanaLab_mastered_hiragana`, `kanaLab_mastered_katakana`, `kanaLab_flash_mastered`.

## Adding New Characters

1. Add to `HIRAGANA` or `KATAKANA` array in `js/data.js`.
2. Create matching `data/strokes/<character>.json` file for stroke animation support.
