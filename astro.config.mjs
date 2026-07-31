// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical + OG URLs and the sitemap. Live domain since the
  // 2026-07-31 DNS cutover; hole-in-one-plumbing.vercel.app is the deploy alias.
  site: 'https://holeinoneplumbing.com',

  // Static by default. Individual routes opt into on-demand (serverless)
  // rendering with `export const prerender = false` — e.g. the contact form
  // API route. This is the Astro 5 replacement for the old `output: 'hybrid'`.
  output: 'static',

  // The Vercel adapter emits /about/index.html and its own 308 redirect from
  // /about/ to /about, so nav hrefs like `/about` serve with no slash.
  trailingSlash: 'never',

  adapter: vercel(),

  // sitemap emits /sitemap-index.xml from `site` on every build; a
  // vercel.json redirect aliases the conventional /sitemap.xml to it.
  // /drafts/* pages are internal (noindexed) and stay out of the sitemap.
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/drafts/') })],

  vite: {
    plugins: [tailwindcss()],
  },
});
