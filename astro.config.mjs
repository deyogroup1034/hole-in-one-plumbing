// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical + OG URLs and the sitemap.
  // LAUNCH: flip to https://holeinoneplumbing.com at domain cutover.
  site: 'https://hole-in-one-plumbing.vercel.app',

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
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
