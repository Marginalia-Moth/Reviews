# Marginalia

A personal archive of blog essays, Bluesky posts, and Reddit comments — filed in one place so the platforms can't take them with them when they go.

## Running locally

It's a static site. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Publishing on GitHub Pages

1. Push this folder to a GitHub repository.
2. Settings → Pages → Build and deployment → Deploy from a branch → `main`, folder `/ (root)`.
3. The site appears at `https://<username>.github.io/<repo-name>/`.

The `.nojekyll` file is a safety net. No file or folder in this repo starts with an underscore, so Pages serves everything as-is even if `.nojekyll` gets lost during upload.

## Adding posts

All content lives in `posts.js` — you never need to touch `index.html`. Open it on GitHub, click the pencil icon, add an object to the array, and commit. The site rebuilds in about a minute.

```js
{
  id: 'b5',                          // unique across the file
  platform: 'blog',                  // 'blog' | 'bluesky' | 'reddit'
  subreddit: 'r/writing',            // reddit only
  date: 'Aug 12, 2026',
  title: 'A title',
  excerpt: 'The line shown on the card in the feed.',
  tags: ['writing', 'internet'],
  body: [
    'First paragraph.',
    'Second paragraph.'
  ]
}
```

Tag chips, search, the platform sections and the post count all derive from this array — nothing else needs updating. Watch the commas: every object except the last needs one after its closing brace. If the page goes blank after an edit, that's almost always a missing or extra comma; the browser console will name the line.

## Files

| Path | What it is |
| --- | --- |
| `posts.js` | **Your content** — the archive of posts. This is the only file you edit routinely |
| `index.html` | The page: markup, layout and logic |
| `support.js` | Runtime that renders the page |
| `image-slot.js` | Drag-and-drop image placeholder (the About photo) |
| `ds/styles.css` | Broadsheet design system — tokens and component styles |
| `ds/ds-bundle.js` | Design system runtime (print separation filters) |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
