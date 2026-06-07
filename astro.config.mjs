// @ts-check
import { defineConfig } from 'astro/config';

// Static output — the whole site is prerendered to plain HTML/CSS/JS and
// deployed to GitHub Pages on the custom domain island.dimsky.cn at the root
// path (base = '/'). SITE_URL / SITE_BASE stay overridable via env for local
// previews or alternate/sub-path hosts; internal asset URLs are built from
// import.meta.env.BASE_URL so changing SITE_BASE is all that's needed.
const base = process.env.SITE_BASE || '/';
const site = process.env.SITE_URL || 'https://island.dimsky.cn';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    assets: '_assets',
  },
});
