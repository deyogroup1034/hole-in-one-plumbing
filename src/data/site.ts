/* ============================================================
   SITE DATA — single source of truth shared by .astro sections
   and React islands.

   TODO(client): every value tagged `TODO` below is a draft and
   must be confirmed with the client before launch.
   ============================================================ */

export const BIZ = {
  name: 'Hole in One Plumbing',
  tagline: 'Foundation plumbing specialists for the DFW Metroplex',
  // TODO(client): confirm primary + alternate phone numbers.
  phones: ['(972) 429-2223', '(972) 475-5458'],
  // TODO(client): confirm public-facing email address.
  email: 'info@holeinoneplumbing.com',
  // TODO(client): confirm exact Master Plumber license number (draft from prototype).
  license: 'Master Plumber #M37741',
  // TODO(client): confirm years in business.
  years: '20+',
  // TODO(client): confirm office hours + whether 24/7 emergency is offered.
  hours: 'Mon–Fri 8a–5p',
  emergency: '24/7 emergency response', // TODO(client): confirm true 24/7 availability.
  // TODO(client): confirm financing partner / terms before publishing.
  financing: 'Financing available on qualifying repairs',
} as const;

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

/* TODO(client): replace with verified Google/Facebook reviews + consent.
   (Draft copy carried over from the approved prototype.) */
export const TESTIMONIALS = [
  {
    quote:
      'Replacing the gas line went extremely smooth. He was extremely clean and time efficient. His honesty was appreciated — the final price was actually less than quoted. I would recommend him for all future services. Excellent!',
    name: 'Mr. Haddock',
    city: 'McKinney, TX',
  },
  {
    quote:
      "He saved me about $6,000 by properly diagnosing a sink drain as a clog rather than a broken pipe like another company claimed. He cleared the nasty clog in about half an hour. As far as I'm concerned, Oscar is my plumber for life.",
    name: 'Mr. Hoskins',
    city: 'Dallas, TX',
  },
  {
    quote:
      'The initial customer service was by far the best I have experienced. Genuine interest and concern with problems other plumbers failed to fix. His price was very reasonable. I would not hesitate to call again.',
    name: 'Ms. West',
    city: 'Mesquite, TX',
  },
  {
    quote:
      'Came out on zero notice Sunday afternoon to finish a job I started. (I fought the faucet, the faucet won.) Quickly assessed the situation, gave a fair quote, and the job was done quickly and very well.',
    name: 'Ms. Romero',
    city: 'Dallas, TX',
  },
  {
    quote:
      "It's comforting to know I have a plumbing service I can use that has a high level of integrity — that's difficult to find these days. I will recommend you to anyone that asks.",
    name: 'Mr. Durham',
    city: 'Allen, TX',
  },
];

/* TODO(client): confirm exact list of cities served. */
export const AREAS = [
  'Dallas',
  'Fort Worth',
  'Plano',
  'Frisco',
  'McKinney',
  'Allen',
  'Wylie',
  'Sachse',
  'Murphy',
  'Rockwall',
  'Garland',
  'Richardson',
  'Carrollton',
  'Mesquite',
  'Irving',
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
   approved prototype). At launch, add a real `src` to any slot and the
   same wrapper renders the photo — no component changes needed.
   TODO(client): add real licensed photos (set `src` on each slot). */
export interface PhotoSlot {
  /** Set this to a real image URL/path to render a photo. Leave undefined to show the placeholder box. */
  src?: string;
  placeholder: string;
  alt: string;
}

/* The one REAL job-site photo, reused on the homepage hero, the /services
   foundation section, and the /customer-stories featured story.
   TODO(client): drop the real file at public/assets/hio_hero_clean.jpg, then
   uncomment the `src` line below — every placement swaps to the photo at once. */
export const JOBSITE_PHOTO: PhotoSlot = {
  // src: '/assets/hio_hero_clean.jpg',
  placeholder: 'Photo · plumber on the job',
  alt: 'Hole in One Plumbing technician on a foundation plumbing job',
};

export const PHOTOS: Record<'why' | 'area', PhotoSlot> = {
  why: {
    // src: '/assets/photos/team-van.jpg',
    placeholder: 'Photo · team & service van',
    alt: 'Hole in One Plumbing team and service van',
  },
  area: {
    // src: '/assets/photos/dfw-map.jpg',
    placeholder: 'Map · DFW service area',
    alt: 'Map of the Dallas–Fort Worth service area',
  },
};

// tel: links need digits only.
export const telHref = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;
