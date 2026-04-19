# Sanity Studio (portfolio CMS)

## One-time setup

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage) and copy the **Project ID**.
2. In this folder, copy `.env.example` to `.env` and set:
  - `SANITY_STUDIO_PROJECT_ID`
  - `SANITY_STUDIO_DATASET` (usually `production`)
3. Install and run the Studio:

```bash
cd studio
npm install
npm run dev
```

1. In the Studio, create **Site settings** once (singleton) and set your CV URL or upload a PDF.
2. Add **Project** documents (title, description, links, image, tags, sort order).

## Connect the Vite site

In the repo root, copy `.env.example` to `.env.local` and set:

- `VITE_SANITY_PROJECT_ID` (same ID as above)
- `VITE_SANITY_DATASET` (same dataset, usually `production`)

Restart `npm run dev` in the portfolio root. The site reads public content from Sanity; only you edit content in the Studio.

## CORS (required once)

In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add:

- `http://localhost:5173` (and any other local Vite port you use)
- Your production site origin, e.g. `https://azick99.github.io`

Without this, the browser may block project/CV fetches from the portfolio.

## Deploy Studio (optional)

```bash
cd studio
npm run deploy
```

This hosts your Studio on `*.sanity.studio` so you can edit without running it locally.