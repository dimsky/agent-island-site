# Agent Island — landing site

Pixel-retro, single-page marketing site for Agent Island. Astro static output,
bilingual (English + 简体中文), dark base + CRT amber accent. The centerpiece is
a self-playing "notch island" demo (`src/components/NotchMockup.astro`) — an
original re-implementation of the morphing-island technique: a resizing `#island`
div state machine, canvas pixel sprites, a fake cursor, a `setTimeout` storyboard,
and `IntersectionObserver` playback gating, with a `prefers-reduced-motion`
static fallback.

## Develop

```bash
pnpm install
pnpm dev           # http://localhost:4321
```

## Build

```bash
pnpm build         # → dist/ (static)
pnpm preview       # serve the build locally
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` (auto-detects pnpm) and publishes `dist/` to GitHub Pages on
the custom domain **https://island.dimsky.cn** (set via `public/CNAME`).

`astro.config.mjs` defaults `site` to that domain and `base` to `/`, so no build
env is needed. `SITE_URL` / `SITE_BASE` remain overridable for previews or
sub-path hosts; internal asset URLs derive from `import.meta.env.BASE_URL`.

## Structure

```
src/
  layouts/BaseLayout.astro   head, fonts, JSON-LD, language init + persistence
  pages/index.astro          composes all sections
  components/
    T.astro                  bilingual <span lang> helper (CSS toggles which shows)
    Nav, Hero, NotchMockup, Features, Support, WhyOpen, FAQ, Footer, LangToggle
  styles/global.css          design tokens + shared classes
```

Content (agent/terminal lists, features, FAQ) mirrors the Agent Island
`README.md` and `docs/product.md` — keep them in sync at release time.
