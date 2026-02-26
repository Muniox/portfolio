# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a Fullstack .NET & Angular Developer. Built with vanilla HTML5, CSS3, and JavaScript (no frameworks or package manager). All content is in Polish.

## Development

No build step required. Serve the `src/` directory with any static file server:
```bash
# Using Python
python -m http.server -d src

# Using Docker (production setup)
docker build -t portfolio . && docker run -p 80:80 portfolio
```

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`): builds a Docker image (nginx:alpine), pushes to Docker Hub, and deploys to VPS via SSH.

## Architecture

Single-page app in three files under `src/`:

- **index.html** — Semantic HTML5 with sections: hero, about, skills, projects, experience, contact
- **styles.css** — Full styling with CSS custom properties for theming
- **script.js** — IIFE-wrapped modules: custom cursor, navigation, scroll animations, hero canvas particles

## Design System

- **Theme**: Dark mode with mint accent (`#00e5a0`), red (`#e63946`), blue (`#3b82f6`)
- **Fonts**: `Syne` (display), `Manrope` (body), `Fira Code` (mono) — loaded from Google Fonts
- **Typography**: Fluid sizing via `clamp()`
- **Texture**: CSS noise overlay and grid background with radial gradient mask

## Key Patterns

- JavaScript uses an IIFE for scope isolation; all interactive features are self-contained modules inside it
- Intersection Observer API drives scroll-triggered reveal animations
- Canvas-based particle system in hero section adapts count by device (mobile: 30, desktop: 80)
- Custom cursor with dot + ring; ring follows with easing factor (0.15)
- Responsive: mobile nav overlay with hamburger toggle, fluid typography
