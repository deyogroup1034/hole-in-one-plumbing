# Hole in One Plumbing — Homepage

A rebuilt marketing homepage for **Hole in One Plumbing, LLC** — a family-run plumbing company serving the Dallas–Ft. Worth Metroplex.

Clean, trustworthy, mobile-responsive single-page site with a working "request appointment" form, scroll reveal animations, and a red/white/blue palette.

## Tech

Static site — **no build step required**. Plain HTML + CSS, with React 18 + Babel loaded from CDN for the interactive sections. Opens directly in any browser and deploys to any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

## Structure

```
index.html          Page shell, fonts, CSS design system (color/type tokens)
parts/
  shared.jsx        Business data, icons, scroll-reveal hook, helpers
  sections1.jsx     Header, Hero, Stats, Services
  sections2.jsx     Why Us, Service Area, Testimonials, Contact form, Footer
  app.jsx           Style object, responsive CSS, App composition + render
assets/
  logo.png          Company logo
```

## Run locally

Because the page loads `.jsx` files over `fetch`, serve it over HTTP (don't open the file path directly):

```bash
# from the repo root
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.
4. Save. The site publishes at `https://<user>.github.io/<repo>/`.

## Notes for production

- The contact form is currently a front-end demo (validates and shows a success state, but does not send anywhere). Wire it to an email/CRM endpoint (e.g. Formspree, a serverless function, or your backend) before going live.
- Replace the labeled image placeholders (`PHOTO · …`, `MAP · …`) with real photography and a map embed.
- For best performance at scale, precompile the JSX instead of using the in-browser Babel transformer.

## Business details

- **Phone:** (972) 429-2223 / (972) 475-5458
- **Email:** info@holeinoneplumbing.com
- **License:** Master Plumber #M37741
- **Service area:** Wylie, Sachse, Murphy, Plano, McKinney, Allen, Frisco, Rockwall, Carrollton, Mesquite, Dallas, Garland, Richardson, Anna, and surrounding DFW communities.
