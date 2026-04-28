# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static website for System Druk, deployed to GitHub Pages at `https://wooczak.github.io/systemdruk`. The site uses:
- **Astro 6** as the main framework
- **SolidJS** for interactive client components
- **SCSS** for styling
- **Astro Icon** with Material Design Icons (@iconify-json/mdi)
- **Motion** for animations
- **Local fonts** (Source Sans Pro) configured via Astro's font providers

## Development Commands

Run from project root:

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI commands
```

**Node version requirement:** >= 22.12.0

## Architecture

### Directory Structure

- `src/pages/` - File-based routing (each file becomes a route)
- `src/sections/` - Major page sections (Hero, Footer, ContactForm, etc.)
- `src/components/` - Reusable UI components (Navigation, Buttons, Subheading)
- `src/layout/` - Base layout template with global styles and meta tags
- `src/content/` - Content collections (blog posts)
- `src/content.config.ts` - Content collection schemas
- `src/assets/` - Static assets including fonts
- `src/icons/` - Custom icons for astro-icon
- `public/` - Static files served as-is

### Key Patterns

**Hybrid Architecture:** The site uses Astro components (.astro files) for static content and SolidJS (.tsx files) for interactive components requiring client-side reactivity. SolidJS components are identified by `.client.tsx` suffix.

**Styling Convention:** Each section/component has a co-located `.styles.scss` file (e.g., `Hero.astro` + `Hero.styles.scss`).

**Client Components:** Interactive forms and dynamic UI use SolidJS with reactive primitives (`createSignal`, `createEffect`). See `ContactForm.client.tsx` for form validation pattern using Zod schema validation.

**Content Collections:** Blog content is managed via Astro's content collections with schema validation (title, slug, categories, author, post_date, img_url).

**Base Configuration:** Site is configured with base path `/systemdruk` for GitHub Pages deployment. The main layout (`src/layout/index.astro`) defines CSS custom properties for colors, typography, and spacing used throughout the site.

## Deployment

Automatic deployment to GitHub Pages via `.github/workflows/jekyll-gh-pages.yml` on push to `main` branch. The workflow:
1. Installs dependencies with `npm ci`
2. Builds with `npm run build`
3. Deploys `./dist/` to GitHub Pages

## Configuration Files

- `astro.config.mjs` - Astro config with font providers, integrations (icon, solidJs), and site/base settings
- `tsconfig.json` - TypeScript config with `jsxImportSource: "solid-js"` for SolidJS support
- `src/content.config.ts` - Content collection schemas using Zod validation
