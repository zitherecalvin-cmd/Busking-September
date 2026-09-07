# Busking September — Chord Guides

Chord charts for jam sessions, with a key-transpose toolbar built for guitar.

## Guides

- **`chord_guide_september.html`** / **`chord-guide-september.md`** — 14-song setlist (see `songs-data.js` for the source data)
- **`chord_guide_v2.html`** / **`chord-guide-v2.md`** — 18-song setlist

## How it works

- **`songs-data.js`** is the single source of truth for the September setlist: each song's chords and lyrics, grouped into labeled sections.
- **`transpose.js`** is the transposition engine (works in the browser and in Node). It rewrites chord roots, slash-bass notes, and extensions (`maj7`, `add9`, `sus4`, `m7b5`, ...) while leaving lyrics, section labels, and spacing untouched. Sharp/flat spelling follows the target key's own convention.
- **`build-markdown.js`** renders `songs-data.js` into `chord-guide-september.md`.
- **`test_transpose.js`** is the engine's test suite — run with `node test_transpose.js`.

## Source material

Chord sheets for the September setlist are in `September/` (Ultimate-Guitar-style `.docx` files), except Saksi Ang Langit, which is carried over from the v2 guide.

## Opening the guides

The HTML pages load their data via `<script src="...">`, so open them through a local server rather than `file://` directly, e.g.:

```
python -m http.server 8000
```

then visit `http://localhost:8000/chord_guide_september.html`.
