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
  // Primary line is the public number; secondary is the office alternate line.
  phones: ['(972) 429-2223', '(972) 475-5458'],
  email: 'info@holeinoneplumbing.com',
  // TX law requires displaying the RMP license number on every page.
  // Client-confirmed format: "RMP #37741" (Responsible Master Plumber).
  license: 'RMP #37741',
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
      'Buying a home or suspect a slab leak? We run a water-level test on your under-slab drain system to confirm whether the sewer lines hold water — before you sign or spend a dollar on repairs.',
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
      'BIG or small, we repair them all. When a line fails beneath the slab, we tunnel or re-route to fix it on solid ground and restore the system.',
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
    key: 'hydro-jetting',
    title: 'Hydro Jetting',
    blurb:
      'High-pressure cleaning that scours drain and sewer lines — not just a hole through the clog.',
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
// Note: Gas Lines & Miscellaneous are full blocks on /services but are intentionally
// NOT featured on the homepage grid (homepage keeps the foundation-first cards).

/* Real customer reviews (Google), provided by the client 2026-07. Lightly
   edited for length/typos only — wording is the customer's own. */
export interface Story {
  quote: string;
  name: string;
  city: string;
  service: string;
}

export const TESTIMONIALS: Story[] = [
  {
    quote:
      'I’m not one to leave reviews unless the service is stellar. This company surpassed my expectations and made a stressful plumbing situation better with their thorough communication, competence, and fair pricing. Another company quoted three times as much for the same issues. Oscar and Ashle at Hole in One have renewed my faith that there is still trustworthy, quality care out there!',
    name: 'Holly Hartman',
    city: 'Wylie, TX',
    service: 'Leak Detection & Pipe Repair',
  },
  {
    quote:
      'Hole in One Plumbing is an excellent company. Oscar, Erica and their team are caring, responsive and as genuine as it gets. Max came out to my house following a water leak and was able to quickly diagnose and remedy the problem. Their customer service and attention to detail is top notch. Highly recommend them!',
    name: 'Andrew Ortiz',
    city: 'Fate, TX',
    service: 'Leak Repair',
  },
  {
    quote:
      'Big company communication and skill, with local company attitude and pricing. Have used these guys across three different houses now for very different types of work and they’ve done a great job each time.',
    name: 'Chris Ray',
    city: 'Dallas, TX',
    service: 'Repeat Customer',
  },
  {
    quote:
      'A previous plumber told us our cast iron pipes were leaking and needed to be replaced. Hole in One saved us a ton and proved the previous tests were wrong. Super helpful, communicated clearly. Would recommend to anyone.',
    name: 'Dave Patterson',
    city: 'Rockwall, TX',
    service: 'Second Opinion / Testing',
  },
  {
    quote:
      'Hole in One Plumbing has been honest and reliable. We have used their service for many years — most recently for our kitchen faucet and outdoor faucet repair. Very reasonable pricing and professional, friendly service. They explain everything. Would highly recommend!',
    name: 'Judy',
    city: 'Richardson, TX',
    service: 'Faucet Repair',
  },
  {
    quote:
      'I called Hole in One for a hydrostatic test, leak detection, and repair — and I couldn’t be more impressed. Every team that came out was professional and courteous, and the owner himself showed up to assist with the leak detection. They located all the leaks and completed the repairs efficiently. I’ve never been this satisfied with a plumbing company.',
    name: 'Zach F.',
    city: 'Allen, TX',
    service: 'Hydrostatic Test & Leak Detection',
  },
  {
    quote:
      'What a wonderful experience. We needed complex plumbing done on our sewer system. The plumber was excellent and really knew what he was doing — pleasant, and kept me posted. The work crew was amazing: when they finished, it looked like no one had even been outside digging.',
    name: 'Jim Hanophy',
    city: 'Hurst, TX',
    service: 'Sewer Repair',
  },
  {
    quote:
      'They fixed two leaks in our sewer lines, replaced a hose bibb, and installed flood stops on our water heaters. From start to finish, their entire team was friendly, helpful, and professional. Communication was excellent — they kept us informed every step of the way.',
    name: 'Brad Hobson',
    city: 'Dallas, TX',
    service: 'Sewer & Fixture Repairs',
  },
  {
    quote:
      'We have been long-time customers, so when we discovered a sewer backup on New Year’s Eve, we did not ask for — nor expect — same-day service. But that’s exactly what they did, and they came back New Year’s Day to complete the job. We appreciate the excellent work that is always performed by Hole in One and their dedication to customers.',
    name: 'Bruce Brazzell',
    city: 'Rowlett, TX',
    service: 'Emergency Sewer Service',
  },
  {
    quote:
      'We have used several plumbing contractors for slab leak and sewer line replacements, but Hole in One was by far the most up-front, personable and professional plumbing company we have dealt with. Oscar managed the job like a champ, and Ashle in the office was incredible with follow-up and customer service.',
    name: 'Brian Shuey',
    city: 'Realtor · DFW',
    service: 'Slab Leak & Sewer Line',
  },
];

/* Google "write a review" link — opens the review dialog on the company's
   Google Business listing (listing ID from the client's Maps URL). */
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=hole+in+one+plumbing#lrd=0x864c0502ebb46c23:0x3dced2bf9022bebe,3';

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

/* Shared job-site photo, reused on the /services foundation section and the
   /customer-stories featured story. Real client photo: technician running a
   cleanout test at an outdoor sewer cleanout. */
export const JOBSITE_PHOTO: PhotoSlot = {
  src: '/assets/cleanout-test.jpg',
  placeholder: 'Photo · sewer cleanout test',
  alt: 'Hole in One Plumbing technician running test lines into an outdoor sewer cleanout',
};

/* Homepage hero imagery — a full-bleed background (branded service truck,
   shown darkened behind the hero) and the foreground photo card. */
export const HERO_BG: PhotoSlot = {
  src: '/assets/hero-truck.jpg',
  placeholder: 'Photo · Hole in One service truck',
  alt: 'Hole in One Plumbing service truck with Texas-flag branding on the utility bed',
};
/* Social-share (og:image) photo — 1200×630 crop of the hero camera-inspection
   photo (client-licensed Adobe Stock). Layout.astro resolves it against `site`. */
export const OG_IMAGE = '/assets/og-image.jpg';

/* Client-licensed Adobe Stock (AdobeStock_1203145106), resized to 1200w. */
export const HERO_CARD: PhotoSlot = {
  src: '/assets/hero-camera-inspection.jpg',
  placeholder: 'Photo · pipe camera inspection',
  alt: 'Technician running a pipe inspection camera into a sewer cleanout, watching the line on the monitor',
};

/* Licensed stock placeholders (Unsplash + Pexels licenses — both free for
   commercial use, no attribution required). PRE-LAUNCH: replace with real client photos. */
export const PHOTOS: Record<'why' | 'area', PhotoSlot> = {
  // Client-licensed Adobe Stock (AdobeStock_311970855), resized to 1200w.
  why: {
    src: '/assets/water-heater.jpg',
    placeholder: 'Photo · water heater',
    alt: 'Copper water lines and flue on a residential water heater installation',
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
