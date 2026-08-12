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

The `.nojekyll` file must stay — without it GitHub Pages skips the `_ds/` directory, since Jekyll ignores folders whose names begin with an underscore, and the stylesheet won't load.

## Adding posts

Posts live in the `POSTS` array inside `index.html`. Each entry:

```js
{
  id: 'b5',                      // unique
  platform: 'blog',              // 'blog' | 'bluesky' | 'reddit'
  subreddit: 'r/writing',        // reddit only
  date: 'Aug 12, 2026',
  title: '…',
  excerpt: '…',                  // shown on the card
  tags: ['writing'],             // feed the tag filter automatically
  body: ['paragraph', 'paragraph'] // shown on the post page
}
```

Tag chips, search, platform sections, and the post count all derive from this array — nothing else needs updating.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site: markup, posts, and logic |
| `support.js` | Runtime that renders the page |
| `image-slot.js` | Drag-and-drop image placeholder (the About photo) |
| `_ds/broadsheet-…/` | Broadsheet design system — tokens, component styles, print treatments |
| `.nojekyll` | Tells GitHub Pages to serve `_ds/` |
