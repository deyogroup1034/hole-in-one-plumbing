# Hole in One Plumbing — Nav Change + Four-Page Build Spec

Content source of truth for the Claude Code build. Draft copy is realistic but
**not client-confirmed**; everything needing real data is tagged `TODO(client)`.
Match existing tokens: red accent `#c8102e`, navy/blue backgrounds, gold review
stars, eyebrow tags, card styles. Voice: plain-spoken, honest, North-Texas
local. Tagline anchor: "Honest plumbing, done right the first time."

---

## 1. Navigation change

New primary nav, left → right:

`About Us` · `Services` · `Customer Stories` · `Contact`

- Keep the sticky tap-to-call button in the header, separate from the nav links.
- Footer nav mirrors the same four links + license/legal line.
- Routes / slugs:
  - About Us → `/about`
  - Services → `/services`
  - Customer Stories → `/customer-stories`
  - Contact → `/contact`
- Mobile drawer (`MobileNav.tsx`) uses the same four items.
- Homepage cross-links: the homepage Services section gets a "See all services →"
  link to `/services`; the homepage Reviews section gets a "Read more customer
  stories →" link to `/customer-stories`.

---

## 2. Shared conventions (build these first)

- **`PageHero.astro`** — a compact inner-page hero band (shorter than the homepage
  hero): eyebrow + H1 + one-line subhead over a navy band with the red accent.
  Optional right-side image slot using the existing `<Image>` wrapper.
- **`CtaBand.astro`** — reusable bottom call-to-action strip (headline + phone
  button + "Request Service" button). Appears at the foot of all four pages.
- Reuse existing `RequestServiceForm.tsx`, `Image.astro`, header, footer.
- **SEO per page:** unique `<title>`, meta description, single H1. Add
  `Service` schema on `/services` blocks and keep the global `LocalBusiness`
  schema. (Provided per page below.)
- Keep the placeholder image boxes for any slot without a real photo. The job-site
  hero photo (`hio_hero_clean.jpg`) is real — use it on the homepage hero **and**
  reuse it as the featured image on `/services` (foundation section) and as the
  featured story image on `/customer-stories`.

---

## 3. Page specs + draft copy

### 3.1 About Us — `/about`

- **Title:** About Hole in One Plumbing | Family-Run DFW Plumbers
- **Meta:** Family-owned plumbing company serving Dallas–Fort Worth, specializing
  in foundation plumbing, slab leaks, and honest, up-front pricing.

**Hero**
- Eyebrow: About Hole in One Plumbing
- H1: Family-run plumbers who treat your home like our own
- Subhead: For TODO(client: # years) years, North Texas homeowners have trusted us
  for the foundation and plumbing work other companies pass on.

**Our story**
> Hole in One Plumbing is a family-owned company serving the Dallas–Fort Worth
> metroplex. We built this business on a simple idea: tell people the truth, charge
> a fair price, and do the job right the first time. While a lot of plumbers shy
> away from foundation-related work — the slab leaks, the hydrostatic testing, the
> under-slab repairs — that's exactly where we've made our name. When a foundation
> company or a homeowner needs to know whether the plumbing under a slab is sound,
> they call us.
> TODO(client: home base — prototype said Wylie, TX; confirm before publishing.)

**What makes us different** (4 cards, red accent icons)
- **Up-front pricing.** You get a clear price before we start. No surprises, no
  pressure, no "mystery" charges at the end.
- **Foundation specialists.** Hydrostatic testing, isolation, and under-slab repair
  are our core work — not an afterthought.
- **Licensed & insured.** TX Master Plumber License TODO(client: #M37741 — confirm).
  Fully insured for your protection.
- **Family-run & local.** You deal with people who live and work right here in North
  Texas, not a call center.

**Service area**
- Short paragraph naming the DFW metroplex + TODO(client: list real cities served).
- Reuse the homepage service-area styling.

**Credentials strip** (optional)
- Licensed · Insured · TODO(client: years in business) · TODO(client: BBB / Google
  rating if applicable) · TODO(client: "Proud sponsor of the Wylie Pirates" —
  confirm before including).

**CTA band**

---

### 3.2 Services — `/services`

> Build as ONE page with anchored sections per service. Structure each block
> identically so it splits cleanly into standalone SEO pages later if they take
> that add-on. Add `Service` schema to each block.

- **Title:** Plumbing & Foundation Services | Hole in One Plumbing DFW
- **Meta:** Hydrostatic testing, pipe isolation, under-slab repair, drain & sewer,
  water heaters, and emergency plumbing across Dallas–Fort Worth.

**Hero**
- Eyebrow: Our Services
- H1: Foundation plumbing specialists — and your everyday plumber, too
- Subhead: From the diagnostic testing that foundation repairs depend on to the
  water heater that quit this morning, we handle it.

**How foundation testing works** (signature explainer — put this near the top; it
is the differentiator)
> Before a foundation company lifts your slab, the plumbing underneath has to be
> checked — and checked again afterward. Here's the flow we run:
> 1. **Hydrostatic pre-test.** We isolate and fill the under-slab drain lines with
>    water and watch the level. If it holds, the plumbing is sound and the
>    foundation work can proceed. If it drops, there's a leak to find first.
> 2. **Isolation.** If the pre-test fails, we isolate the system section by section
>    to pinpoint exactly where the break is — so you're not paying to dig up sound
>    pipe.
> 3. **Under-slab repair.** We access and repair the failed line.
> 4. **Hydrostatic post-test.** After the foundation lift, we re-test to confirm the
>    work didn't damage the plumbing and that everything holds.
>
> Most companies can't (or won't) do this. We do it every day.

**Service blocks** (each: icon, name, "What it is," "When you need it")
1. **Hydrostatic Pre-Test** — A pressure/level test of your under-slab drains before
   foundation work. Needed when a foundation company requires proof the plumbing is
   sound before they lift.
2. **Hydrostatic Post-Test** — The same test after foundation repair, confirming the
   lift didn't crack or shift a line.
3. **Pipe & Sewer Isolation** — Section-by-section testing to locate a leak precisely
   instead of guessing. Saves you from unnecessary digging.
4. **Under-Slab Repair** — Accessing and repairing failed drain or sewer lines beneath
   the foundation, with the area restored when we're done.
5. **Drain & Sewer** — Clogs, backups, camera inspections, and line cleaning for slow
   or stopped drains.
6. **Water Heaters** — Repair and replacement, traditional and tankless, sized right
   for your home.
7. **Emergency & General Plumbing** — Slab leaks, burst pipes, fixtures, and the
   everyday work. TODO(client: confirm 24/7 emergency availability).

**For foundation companies** (B2B callout band)
> Foundation contractors across DFW rely on us for fast, documented pre- and
> post-tests that keep their jobs moving. TODO(client: confirm partner/referral
> program details.) Reuse the job-site hero photo here.

**CTA band**

---

### 3.3 Customer Stories — `/customer-stories`

- **Title:** Customer Stories & Reviews | Hole in One Plumbing
- **Meta:** Real Dallas–Fort Worth homeowners on their experience with Hole in One
  Plumbing — honest pricing and foundation work done right.

**Hero**
- Eyebrow: Customer Stories
- H1: Real homes, real fixes, honest results
- Subhead: Don't take our word for it — here's what North Texas homeowners say.

**Trust bar**
- TODO(client: real star rating) ★ across TODO(client: # reviews) reviews · gold
  stars. (Pull live from their Google Business Profile once we have access.)

**Featured story** (case-study card, larger, red left-border; use the job-site
hero photo)
> **A slab leak under a finished home — found and fixed without tearing up the
> house.** When TODO(client: customer/neighborhood) noticed TODO(client: symptom),
> a foundation company couldn't move forward until the under-slab plumbing was
> cleared. We ran a hydrostatic test, isolated the failed line, and repaired it —
> documented start to finish. TODO(client: replace with a real job story; this is a
> placeholder modeled on the photo.)

**Reviews grid** (carry over the homepage testimonials + room for more; mark all as
draft until confirmed)
- 6–8 cards: first name + last initial, city, gold stars, quote, service type.
- TODO(client: replace placeholder reviews with real ones, ideally pulled from
  Google.)

**Leave-a-review CTA**
- "Worked with us? We'd love your feedback." → TODO(client: Google review link).

**CTA band**

---

### 3.4 Contact — `/contact`

- **Title:** Contact Hole in One Plumbing | DFW Plumbers
- **Meta:** Call or request service from Hole in One Plumbing — fast, fair, honest
  plumbing and foundation work across Dallas–Fort Worth.

**Hero**
- Eyebrow: Contact Us
- H1: Get a straight answer and a fair price
- Subhead: Call us or send a request and we'll get right back to you.

**Two-column body**
- Left: `RequestServiceForm` (name, phone, email, service type dropdown, message).
- Right (info card):
  - Phone: TODO(client: HIO business number) — click-to-call.
  - Emergency line: TODO(client: confirm 24/7 number, or remove).
  - Email: TODO(client).
  - Hours: TODO(client).
  - Service area: Dallas–Fort Worth metroplex + TODO(client: cities).
  - License: TX Master Plumber TODO(client: #M37741 — confirm).

**Service-area block**
- Reuse homepage service-area visual; map embed is optional (TODO: decide Google
  Maps embed vs styled area box).

**Emergency callout band**
- "Plumbing emergency? Call now." + phone button. TODO(client: confirm 24/7).

**CTA band** (or omit here since the whole page is a CTA — your call)

---

## 4. Open decisions (need your call)

1. **Unverified claims.** Prototype asserts a Wylie home base and "Proud sponsor of
   the Wylie Pirates." I've kept both as `TODO(client)` rather than publishing them.
   Confirm, and I'll bake them in (the local-sponsor line is great trust-building if
   true).
2. **Services: one page vs. split.** Built as one anchored page now, structured to
   split into per-service SEO pages later (the add-on in the proposal). Good?
3. **Placeholders to confirm with Oscar & Erica:** business phone(s), email, exact
   license #, hours, 24/7 emergency yes/no, real reviews + Google link, city list,
   financing terms.

---

## 5. Claude Code kickoff prompt (paste this)

```
Using hio-pages-spec.md as the content source, do two things on the
hole-in-one-site Astro project:

1) Change the primary nav to exactly four items, in order:
   About Us (/about), Services (/services), Customer Stories
   (/customer-stories), Contact (/contact). Update Header.astro,
   Footer.astro, and MobileNav.tsx. Keep the tap-to-call button.
   Add cross-links from the homepage Services section to /services
   and the homepage Reviews section to /customer-stories.

2) Build the four pages from the spec. First create shared
   PageHero.astro and CtaBand.astro components, then build each page
   reusing existing tokens (red #c8102e accent, navy bg, gold stars),
   the <Image> placeholder wrapper, and RequestServiceForm. Use the
   exact draft copy from the spec, and preserve every TODO(client)
   marker as a visible code comment so we can find them before launch.
   Add per-page <title>/meta and Service schema on each /services block.
   Reuse the real job-site photo (hio_hero_clean.jpg) on the homepage
   hero, the /services foundation section, and the /customer-stories
   featured story.

Keep the homepage static + the contact route as a Pages Function.
Build clean before finishing. Don't invent client facts — leave them
as TODO(client).
```
