# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kidseria Kıyafet Giydirme — an AI-powered children's clothing photo/video studio. Users select clothing from a catalog, configure child profiles (age, skin tone), pick environments/scenarios, and generate AI-produced photos and videos of children wearing those clothes. Built with Next.js 15 App Router + Tailwind CSS v4.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run lint` — ESLint via next lint
- No test suite configured

## Architecture

### Routing

- `app/page.tsx` — redirects to `/video-studio`
- `app/(studio)/layout.tsx` — wraps studio pages with `<Sidebar>`; applies to `/photo-studio` and `/video-studio`
- `app/(studio)/photo-studio/page.tsx` — photo generation studio (client component)
- `app/(studio)/video-studio/page.tsx` — video generation studio (client component)
- `app/catalog/page.tsx` — clothing catalog management (client component)
- `app/gallery/page.tsx` — gallery of generated results (client component)
- `app/layout.tsx` — root layout with `<TopNav>`

### API Routes (Kie.ai integration)

All AI generation goes through Kie.ai API (`lib/kie.ts`):
- `POST /api/generate-image` — creates image task using `nano-banana-2` model
- `POST /api/generate-video` — creates video task using `kling-3.0/video` model
- `GET /api/task-status?taskId=...` — polls task completion

Requires `KIE_API_KEY` in `.env.local`.

### Shared Components

- `components/TopNav.tsx` — top navigation bar with page links (client component, uses `usePathname`)
- `components/Sidebar.tsx` — studio sidebar navigation (client component, uses `usePathname`)

### Key Libraries

- `lib/catalog.ts` — `catalogItems` array (clothing data with code, name, image path, ageRange); images stored in `public/catalog/`
- `lib/cn.ts` — `cn()` utility (clsx + tailwind-merge)
- `lib/kie.ts` — Kie.ai API client with auth

## Styling

Tailwind CSS v4 with `@tailwindcss/postcss`. Custom theme defined in `app/globals.css` using `@theme` directive — Material Design 3 inspired color tokens (primary, surface, on-surface, etc.). Two font families: Manrope (headlines, `font-headline`) and Inter (body, `font-body`).

Path alias: `@/*` maps to project root.

## Environment Variables

- `KIE_API_KEY` — Kie.ai API key (required for generation features)
- `APP_URL` — public app URL for callback URLs (defaults to `http://localhost:3000`)
