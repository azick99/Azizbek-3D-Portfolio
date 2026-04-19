# Azizbek 3D Portfolio

A modern personal portfolio built with React, TypeScript, Vite, Three.js, and Sanity CMS.

## Overview

This project is a 3D portfolio website featuring:

- Animated hero section with 3D visuals
- Responsive navigation
- About, Experience, Technologies, Works, and Contact sections
- Interactive 3D canvas (Stars, Earth, Computers, Ball components)
- Sanity Studio for content management
- Email form integration with EmailJS

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Sass
- Three.js with `@react-three/fiber` and `@react-three/drei`
- Framer Motion
- Sanity CMS
- EmailJS
- gh-pages for deployment

## Available Scripts

From the project root:

- `npm install` — install dependencies
- `npm run dev` — start the Vite development server
- `npm run build` — build the production site
- `npm run preview` — preview the production build locally
- `npm run typecheck` — run TypeScript type checking
- `npm run deploy` — build and publish to GitHub Pages

Sanity Studio commands from the root:

- `npm run studio` — start the Sanity Studio in development mode
- `npm run studio:build` — build the Sanity Studio for production
- `npm run studio:deploy` — deploy the Sanity Studio

## Project Structure

- `src/` — main application source
  - `components/` — reusable UI and page sections
  - `components/canvas/` — 3D canvas components
  - `sanity/` — Sanity client and query helpers
  - `hooks/` — custom hooks
  - `types/` — TypeScript definitions
  - `utils/` — motion and helper utilities
- `public/` — static assets and textures
- `studio/` — Sanity Studio project

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the site in your browser at the URL shown in the terminal.

## Sanity Studio

The `studio/` folder contains a separate Sanity Studio app for editing portfolio content.

To work with Studio:

```bash
npm run studio
```

Then open the local Studio URL shown in the terminal.

## Deployment

The site uses GitHub Pages for deployment. Run:

```bash
npm run deploy
```

This builds the app and publishes the `build` folder to the `gh-pages` branch.

## Notes

- The project is configured as a private repo app, so GitHub Pages deployment is optional.
- Ensure Sanity environment variables and project configuration are set before using Studio.
