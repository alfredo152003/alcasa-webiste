# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **ALCASA** (Almacenadora Centroamericana S.A.), a grain storage and logistics company in El Salvador. Built as a static site with Astro 6, Tailwind CSS 4, and TypeScript.

## Commands

- `npm run dev` — Start dev server at localhost:4321 (binds to all interfaces via `--host`)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `docker compose up` — Run dev environment in Docker (uses polling for file watching on Windows)

No test runner or linter is configured.

## Architecture

- **Framework**: Astro 6 (static SSG, file-based routing). All components are `.astro` files (no React/Vue).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin. Global CSS at `src/styles/global.css` imports Tailwind. Note: `tailwind.config.mjs` exists for the custom theme but v4 uses the Vite plugin approach.
- **Font**: Archivo Variable via `@fontsource-variable/archivo`, loaded in `Layout.astro`.
- **Icons**: Bootstrap Icons loaded via CDN in `Layout.astro`, plus inline SVGs throughout components.

### Brand Colors (defined in `tailwind.config.mjs`)

- Green: `#78ab2c` — primary brand color
- Orange: `#e67e00` — accent/CTA color
- Dark: `#49494b` — text color
- Light: `#FAFAFA` — background color

### Layout Structure

`src/layouts/Layout.astro` is the single layout wrapper. It includes `Navbar` and `Sidebar` globally. All pages use `<Layout title="...">`.

- **Navbar** (`src/components/Navbar.astro`): Fixed top nav with scroll-based color transition (green to white). Mobile menu triggers the Sidebar.
- **Sidebar** (`src/components/Sidebar.astro`): Slide-in right panel for mobile nav, includes contact info and WhatsApp CTA.
- Both Navbar and Sidebar duplicate the `navLinks` array — keep them in sync when adding/modifying routes.

### Pages

- `/` — Home: Hero (video background), Mision/Vision, Services preview
- `/servicios` — Services: grain handling, discharge management, grain conditioning
- `/instalaciones` — Facilities: silo specs (CilinderCard), warehouse table

Planned but not yet implemented: `/historia`, `/contacto`.

### Scroll Animations

Pages use a recurring `IntersectionObserver` pattern with `.reveal` classes for scroll-triggered animations. This observer script is duplicated in each page that uses it (`servicios.astro`, `instalaciones.astro`).

### Language

All UI content is in **Spanish**. Code comments are also in Spanish.
