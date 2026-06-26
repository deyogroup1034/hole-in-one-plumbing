/* ============================================================
   SITE DATA — single source of truth shared by .astro sections
   and React islands. Values are owner-confirmed (hio-site-facts.md)
   except where flagged PLACEHOLDER (reviews) or as a pre-launch task.
   ============================================================ */

export const BIZ = {
  name: 'Hole in One Plumbing',
  legalName: 'Hole in One Plumbing, LLC',
  owner: 'Oscar Sherman',
  tagline: 'Foundation plumbing specialists for the DFW Metroplex',
  // Service-area business based in Wylie, TX 75098 — no public street address (PO Box only).
  homeBase: 'Wylie, TX',
  // Primary line is the public number; secondary is optional to display.
  phones: ['(972) 429-2223', '(469) 855-9041'],
  email: 'info@holeinoneplumbing.com',
  // TX law requires displaying the RMP license number on every page.
  license: 'Master Plumber #M37741',
  founded: 2006,
  experience: 'nearly two decades',
  hours: 'Mon–Fri 8a–5p',
  // Fast emergency response — NOT 24/7. Never claim 24/7 anywhere.
  emergency: 'Fast emergency response',
} as const;

/* Real, verifiable trust signals (NOT a star rating — we don't publish an
   unverified aggregate score). Sources: BBB, Nextdoor, foundation-company referrals. */
export const TRUST_BADGES: { icon: IconName; label: string }[] = [
  { icon: 'award', label: 'BBB A+ Accredited' },
  { icon: 'star', label: 'Nextdoor Neighborhood Favorite' },
  { icon: 'shield', label: 'Trusted by DFW foundation companies' },
];

export type IconName =
  | 'gauge'
  | 'shield'
  | 'isolate'
  | 'foundation'
  | 'drain'
  | 'flame'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'star'
  | 'check'
  | 'award'
  | 'truck'
  | 'arrow'
  | 'wallet';

export interface Service {
  key: string;
  title: string;
  blurb: string;
  icon: IconName;
}

/* Foundation plumbing is the specialty (cards 1–4); drain/sewer and
   water heaters round out the core residential services. Emergency
   service is surfaced separately via the header + emergency band. */
export const SERVICES: Service[] = [
  {
    key: 'hydro-pre',
    title: 'Hydrostatic Pre-Test',
    blurb:
      'Buying a home or suspect a slab leak? We pressure-test your under-slab drain system to confirm whether the sewer lines hold water — before you sign or spend a dollar on repairs.',
    icon: 'gauge',
  },
  {
    key: 'hydro-post',
    title: 'Hydrostatic Post-Test',
    blurb:
      'After foundation repair, we re-test the lines to verify nothing cracked when the slab moved — documented proof that your plumbing came through sound.',
    icon: 'shield',
  },
  {
    key: 'isolation',
    title: 'Pipe Isolation Testing',
    blurb:
      'A failed test only tells you there is a leak. Isolation testing pinpoints the exact line and section that failed, so the repair is targeted — not guesswork.',
    icon: 'isolate',
  },
  {
    key: 'foundation-repair',
    title: 'Under-Slab Repair',
    blurb:
      'When a line fails beneath the slab, we tunnel or re-route to fix it on solid ground and restore the system — coordinated cleanly with your foundation crew.',
    icon: 'foundation',
  },
  {
    key: 'drain',
    title: 'Drain & Sewer',
    blurb:
      'From stubborn kitchen clogs to mainline sewer stoppages, we clear the line and camera-inspect it to find the real cause — no upselling, no guessing.',
    icon: 'drain',
  },
  {
    key: 'water-heater',
    title: 'Water Heaters',
    blurb:
      'Repair, replacement, and tankless upgrades — installed to code with up-front pricing on both the unit and the labor.',
    icon: 'flame',
  },
];
// Note: Gas Lines & Backflow are full blocks on /services but are intentionally
// NOT featured on the homepage grid (homepage keeps the 6 foundation-first cards).

/* ⚠️ PLACEHOLDER reviews — invented for layout only. DO NOT LAUNCH AS-IS.
   Publishing fabricated testimonials on a live commercial site is deceptive
   under FTC rules. PRE-LAUNCH: replace all of these with real, verifiable
   customer reviews (collect fresh Google reviews, or migrate genuine
   Angi/Yelp/BuildZoom reviews with proper attribution + consent). */
export interface Story {
  quote: string;
  name: string;
  city: string;
  service: string;
}

export const TESTIMONIALS: Story[] = [
  {
    quote:
      'Our foundation crew sent Hole in One to re-check the plumbing after the lift. On time, thorough, and they explained every step. No surprises.',
    name: 'Karen M.',
    city: 'Plano, TX',
    service: 'Foundation Post-Test',
  },
  {
    quote:
      'Another company told me I needed a major repair. Hole in One found the real problem in under an hour and charged me a fraction of the price. Honest people.',
    name: 'David H.',
    city: 'Rockwall, TX',
    service: 'Slab Leak / Diagnosis',
  },
  {
    quote:
      'They replaced our old cast-iron lines with PVC by tunneling instead of tearing up our floors. Clean, respectful crew — they treated our home like their own.',
    name: 'The Nguyen Family',
    city: 'Sachse, TX',
    service: 'Cast Iron to PVC',
  },
  {
    quote:
      'Quick tankless install, sized right for our house, and the final price matched the quote exactly. Couldn’t ask for more.',
    name: 'Brian T.',
    city: 'Murphy, TX',
    service: 'Tankless Water Heater',
  },
  {
    quote:
      'Needed a pressure test before foundation work. They were early both times, clearly knew their stuff, and walked me through the whole process.',
    name: 'Stephanie R.',
    city: 'Wylie, TX',
    service: 'Hydrostatic Pre-Test',
  },
];

// Confirmed service area: greater DFW, "from Rockwall to Frisco, Carrollton to Anna."
export const AREAS = [
  'Wylie',
  'Sachse',
  'Murphy',
  'Plano',
  'Rockwall',
  'Frisco',
  'Carrollton',
  'Anna',
  'Lucas',
  'Parker',
  'Little Elm',
  'Keller',
  'Arlington',
];

export const NAV_LINKS: [label: string, href: string][] = [
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Customer Stories', '/customer-stories'],
  ['Contact', '/contact'],
];

/* Centralized, swappable image slots. Each is fed through the <Image>
   wrapper. Right now they render styled placeholder boxes (matching the
   approved prototype). To use a real photo, set `src` on a slot — the same
   wrapper renders the <img>, no component changes needed.
   PRE-LAUNCH: add real licensed photos (set `src` on each slot). */
export interface PhotoSlot {
  /** Set this to a real image URL/path to render a photo. Leave undefined to show the placeholder box. */
  src?: string;
  placeholder: string;
  alt: string;
}

/* Shared job-site photo, reused on the homepage hero, the /services
   foundation section, and the /customer-stories featured story.
   Licensed Unsplash stock for now (Unsplash License — free commercial use).
   PRE-LAUNCH: swap `src` for a real client photo (e.g. drop the file at
   public/assets/hio_hero_clean.jpg and point src there) — every placement
   swaps at once. */
export const JOBSITE_PHOTO: PhotoSlot = {
  src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1100&q=80',
  placeholder: 'Photo · plumber on the job',
  alt: 'Hole in One Plumbing technician on a foundation plumbing job',
};

/* Homepage hero imagery — a full-bleed background (technician + service van,
   shown darkened behind the hero) and the foreground photo card.
   Licensed Unsplash stock; PRE-LAUNCH: swap both for the client's real photos. */
export const HERO_BG: PhotoSlot = {
  src: 'https://images.unsplash.com/photo-1663181191222-a20536e7419c?auto=format&fit=crop&w=1920&q=80',
  placeholder: 'Photo · technician and service truck',
  alt: 'Hole in One Plumbing technician in front of the service truck',
};
export const HERO_CARD: PhotoSlot = {
  src: 'https://images.unsplash.com/photo-1530122577122-6b8010d1a6b3?auto=format&fit=crop&w=1100&q=80',
  placeholder: 'Photo · hydrostatic pressure test',
  alt: 'Pressure gauge on copper pipes during a plumbing pressure test',
};

/* Licensed Unsplash stock placeholders. PRE-LAUNCH: replace with real client photos. */
export const PHOTOS: Record<'why' | 'area', PhotoSlot> = {
  why: {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1100&q=80',
    placeholder: 'Photo · team & service van',
    alt: 'Hole in One Plumbing team and service van',
  },
  area: {
    src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1100&q=80',
    placeholder: 'Map · DFW service area',
    alt: 'Map of the Dallas–Fort Worth service area',
  },
};

/* ⚠️ PLACEHOLDER featured stories — invented case studies for layout/UX.
   DO NOT LAUNCH AS-IS. PRE-LAUNCH: replace with real, verifiable jobs +
   consent. Shown in the interactive Featured Stories picker (one main view
   + the rest selectable). The first story reuses the real job-site photo. */
export interface FeaturedStory {
  title: string;
  location: string;
  service: string;
  body: string;
  serviceHref: string;
  photo: PhotoSlot;
}

export const FEATURED_STORIES: FeaturedStory[] = [
  {
    title: 'A slab leak found and fixed without tearing up the house',
    location: 'Wylie, TX',
    service: 'Hydrostatic Pre-Test',
    body: "A foundation crew couldn't start until the under-slab plumbing was cleared. We ran a hydrostatic test, isolated the failed line, and repaired it — documented start to finish, so the foundation work stayed on schedule.",
    serviceHref: '/services#hydro-pre',
    photo: JOBSITE_PHOTO,
  },
  {
    title: 'Every line re-tested and documented after the lift',
    location: 'Plano, TX',
    service: 'Hydrostatic Post-Test',
    body: 'After the slab was lifted, we post-tested each under-slab line and handed over written results — proof the plumbing came through the foundation repair sound.',
    serviceHref: '/services#hydro-post',
    photo: {
      src: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1100&q=80',
      placeholder: 'Photo · post-test, Plano',
      alt: 'Documented hydrostatic post-test job',
    },
  },
  {
    title: 'Cast-iron drains converted to PVC — by tunneling, not demolition',
    location: 'Sachse, TX',
    service: 'Under-Slab Repair',
    body: 'Aging cast-iron lines were failing beneath an older home. We tunneled under the slab and converted them to PVC, leaving the finished floors untouched.',
    serviceHref: '/services#foundation-repair',
    photo: {
      src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1100&q=80',
      placeholder: 'Photo · under-slab repair, Sachse',
      alt: 'Under-slab cast-iron to PVC conversion job',
    },
  },
  {
    title: 'A second opinion that saved thousands',
    location: 'Rockwall, TX',
    service: 'Pipe & Sewer Isolation',
    body: 'Another company called for a major repair. We isolated the system, pinpointed the real failure in under an hour, and fixed only what actually needed fixing.',
    serviceHref: '/services#isolation',
    photo: {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=80',
      placeholder: 'Photo · isolation test, Rockwall',
      alt: 'Pipe and sewer isolation diagnosis job',
    },
  },
  {
    title: 'A tankless system, sized and installed right',
    location: 'Murphy, TX',
    service: 'Water Heaters',
    body: 'We swapped an aging tank for a tankless unit sized for the home — installed to code with up-front pricing on both the unit and the labor.',
    serviceHref: '/services#water-heater',
    photo: {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=80',
      placeholder: 'Photo · tankless install, Murphy',
      alt: 'Tankless water heater installation job',
    },
  },
];

// tel: links need digits only.
export const telHref = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;
