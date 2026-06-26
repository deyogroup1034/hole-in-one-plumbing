# Hole in One Plumbing — Website

Marketing site for **Hole in One Plumbing**, a Dallas–Fort Worth plumber
specializing in foundation plumbing (hydrostatic pre-test, post-test, pipe
isolation, under-slab repair) plus drain & sewer, water heaters, and emergency
service.

Built with **Astro + Tailwind v4**, deployed to **Cloudflare Pages**.

## Stack & architecture

- **Astro 5**, `output: 'static'` — every page prerenders to static HTML.
- The contact form route (`src/pages/api/contact.ts`) opts out with
  `export const prerender = false`, so it runs **on-demand as a Cloudflare
  Pages Function**. This is the "hybrid" split: static marketing pages, dynamic
  form endpoint.
- **Tailwind v4** via `@tailwindcss/vite`. The approved palette (deep **navy** +
  **charcoal** backgrounds, **amber** accents) is locked as theme tokens in
  `src/styles/global.css` under `@theme` — use them as utilities
  (`bg-navy-900`, `text-amber-400`, `border-line`, `font-display`, …).
- **React islands** (`@astrojs/react`) for the only interactive bits:
  - `MobileNav.tsx` — mobile drawer (`client:load`)
  - `Testimonials.tsx` — reviews carousel (`client:visible`)
  - `RequestServiceForm.tsx` — the reusable Request Service form (`client:visible`)
  Everything else is static `.astro`.

## Project layout

```
src/
  data/
    site.ts        # ← single source of truth: business info, services, areas, reviews, photos
    icons.ts       # shared SVG path data
  components/
    Image.astro    # photo wrapper — every image is a swappable {src, alt} prop
    Icon.astro / icons.tsx   # icon renderers (Astro + React)
    Header.astro / Footer.astro / MobileNav.tsx
    RequestServiceForm.tsx   # reusable form block
    Testimonials.tsx
    sections/      # homepage sections (Hero, Stats, Services, …)
  layouts/Layout.astro
  pages/
    index.astro
    api/contact.ts # on-demand Pages Function
```

## Commands

```bash
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build -> ./dist
npm run preview  # serve the build on the Cloudflare runtime (wrangler pages dev)
npm run deploy   # build + wrangler pages deploy ./dist
```

## Images

Image slots are defined in `src/data/site.ts` (`PHOTOS`) and rendered through
`components/Image.astro`. Right now each slot has no `src`, so the wrapper draws
the **approved prototype placeholder box** (striped panel + label) — there are
no remote image URLs that can break. To use a real photo, set `src` on a slot
(e.g. `src: '/assets/photos/hero.jpg'`); the same wrapper then renders the
`<img>`. `alt` is required on every slot. The logo is a real local asset at
`public/assets/logo.png`.

## Before launch — client TODOs

Search the codebase for `TODO(client)` for the in-context list. The key items:

- **License #** — real Master Plumber license (currently `#M-XXXXX` placeholder).
- **Exact cities served** — confirm/trim the `AREAS` list.
- **Financing** — confirm partner/terms before publishing the financing line.
- **Phone numbers / email** — confirm primary + alternate.
- **Hours & 24/7 emergency** — confirm true availability before the emergency band claims it.
- **Headline stats** (years, cities count) and **reviews** — replace draft copy with verified, consented testimonials.
- **Logo** — wordmark placeholder in header/footer; swap for the real asset.
- **Real photos** — replace Unsplash placeholders.

## Form delivery (not yet wired)

`src/pages/api/contact.ts` validates the submission and currently just
`console.log`s the lead. Wire up real delivery there before launch — e.g. email
via Resend / Cloudflare Email Routing, or persist to D1/KV. Cloudflare secrets
and bindings are available on `locals.runtime.env`.

> Note: the Cloudflare adapter prints an informational `SESSION` KV binding
> message at build time. It's harmless — nothing on the site uses sessions. Only
> add a `SESSION` KV namespace if you later use Astro sessions.
