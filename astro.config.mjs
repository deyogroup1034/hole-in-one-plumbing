// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical + OG URLs and the sitemap.
  // LAUNCH: flip to https://holeinoneplumbing.com at domain cutover.
  site: 'https://hole-in-one.pages.dev',

  // Static by default. Individual routes opt into on-demand (Pages Function)
  // rendering with `export const prerender = false` — e.g. the contact form
  // API route. This is the Astro 5 replacement for the old `output: 'hybrid'`.
  output: 'static',

  // Emit /about.html (not /about/index.html) so nav hrefs like `/about`
  // serve directly on Cloudflare Pages — no trailing-slash 308 redirect hop.
  build: { format: 'file' },
  trailingSlash: 'never',

  adapter: cloudflare({
    // We render plain <img> tags for now (stock placeholders), so we don't
    // need Astro's image service. `passthrough` avoids pulling in sharp,
    // which doesn't run on the Cloudflare runtime.
    imageService: 'passthrough',
    platformProxy: { enabled: true },
  }),

  // sitemap emits /sitemap-index.xml from `site` on every build; a
  // public/_redirects rule aliases the conventional /sitemap.xml to it.
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
