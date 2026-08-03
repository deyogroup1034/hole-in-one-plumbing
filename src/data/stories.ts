/* ============================================================
   FEATURED JOB STORIES — content source: hio-job-stories.md spec.
   Five standalone /stories/{slug} pages, one service × one city each.
   Reenactment-style narratives: based on real jobs, dramatized details,
   disclosure on every page (see STORY_DISCLOSURE / StoryDisclosure.astro).

   Honesty guardrails (from the spec): no invented dollar amounts stated
   as fact, no real customer names in the narrative, and no real photo of
   a customer's property without confirmed consent.
   ============================================================ */

export interface StoryFaq {
  q: string;
  /** May contain inline <em>/<strong>; stripped for the FAQPage schema. */
  a: string;
}

export interface StorySection {
  heading: string;
  /** Paragraphs may contain inline <em>/<strong> (rendered via set:html). */
  paragraphs: string[];
}

export interface JobStory {
  slug: string;
  city: string;
  service: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  /** Real photo lands as src/assets/stories/{file}; placeholder box until then. */
  heroImage: { file: string; placeholder: string; alt: string };
  intro: string[];
  sections: StorySection[];
  faqs: StoryFaq[];
  cta: { heading: string; subhead: string };
  /** Internal links: matching /services anchor(s) for this story. */
  serviceLinks: { label: string; href: string }[];
  siblingSlug: string;
  datePublished: string;
  /** FLIP TO INDEX when real photo + customer consent confirmed — then link
      hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
      (Also remove /stories from the sitemap exclusion in astro.config.mjs
      for flipped pages.) */
  indexable: boolean;
}

export const STORY_DISCLOSURE = `Every story here is based on a real Hole in One Plumbing job. Like a TV reenactment, we've changed names and a few identifying details to protect our customers' privacy — but the problems, the process, and the results are the real thing.`;

export const STORIES: JobStory[] = [
  // ---------- STORY 1 — Hydrostatic Pre-Test — Wylie, TX ----------
  {
    slug: 'slab-leak-hydrostatic-test-wylie-tx',
    city: 'Wylie, TX',
    service: 'Hydrostatic Pre-Test',
    titleTag: 'Slab Leak & Hydrostatic Testing in Wylie, TX | Hole in One',
    metaDescription:
      "A Wylie foundation repair couldn't start until the under-slab plumbing was cleared. How a hydrostatic test found a slab leak — and how we fixed it without tearing up the house. (972) 429-2223.",
    h1: 'A Slab Leak Found — and Fixed — Without Tearing Up a Wylie Home',
    heroImage: {
      file: 'slab-leak-hydrostatic-test-wylie-tx-hero.jpg',
      placeholder: 'Photo · hydrostatic test, Wylie',
      alt: 'Hole in One Plumbing technician sealing a two-way sewer cleanout with a test ball before a hydrostatic test in Wylie, TX.',
    },
    intro: [
      `The call came from a foundation company, not the homeowner. That's common in our line of work. They had a repair scheduled on a one-story home in Wylie — piers ready, crew booked — but their contract required one thing first: proof the under-slab plumbing was sound. If a drain line is leaking under a slab, lifting the foundation can turn a small problem into a disaster. So the foundation work stopped until someone could answer a simple question: is anything leaking under this house?`,
      `The homeowners had suspicions of their own. A warm spot on the hallway floor. A water bill that had crept up two months running. Nothing dramatic — slab leaks rarely announce themselves.`,
    ],
    sections: [
      {
        heading: 'Finding it: the hydrostatic test',
        paragraphs: [
          `A hydrostatic test is a water-level test, not a pressure test — no pumps, no stress on the pipes. We sealed the system at the home's two-way outdoor cleanout with an inflatable test ball, filled the drain lines with water to slab level, and watched. A sound system holds its level. This one didn't. The level fell slowly and steadily — a leak, somewhere under the slab.`,
          `Finding <em>a</em> leak isn't the same as finding <em>the</em> leak. Rather than guess, we isolated the system section by section, testing each run on its own until the dropping level pointed to a single stretch of drain line under the hallway — right where that warm spot had been.`,
        ],
      },
      {
        heading: 'The fix',
        paragraphs: [
          `With the leak located to a few feet instead of a whole house, the repair stayed small: targeted access, the failed section replaced, and then — this is the part that matters — a second hydrostatic test to prove the system held. It did. We documented both tests, start to finish, and sent the report to the homeowner and the foundation company the same day.`,
          `The foundation crew kept their schedule. The homeowners got their floor back. And nobody tore up a house to find a leak that a proper test could point to.`,
        ],
      },
      {
        heading: 'What Wylie homeowners should know',
        paragraphs: [
          `Foundation movement and under-slab plumbing are tangled together — movement can break pipes, and leaking pipes can undermine a foundation. If a foundation company is quoting you for repair, a hydrostatic test before the lift protects you twice: it catches leaks while they're still small, and it documents the condition of your plumbing before anyone touches the slab. A two-way outdoor cleanout is required to run the test; if your home doesn't have one, we can install it.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'What is a hydrostatic test?',
        a: `A diagnostic that fills your under-slab drain lines with water and monitors the level, usually for about 20 minutes. If the level holds, the lines are sound; if it drops, there's a leak. It's a water-level test — no damaging pressure is involved.`,
      },
      {
        q: 'Do I need one before foundation repair?',
        a: `Most reputable foundation companies require it, and for good reason: lifting a slab over a leaking line can make both problems worse. Testing first protects your home and everyone's warranty.`,
      },
      {
        q: 'What are the signs of a slab leak?',
        a: `Warm spots on floors, unexplained jumps in your water bill, the sound of running water when everything's off, and new cracks in flooring or walls. Any of these is worth a test.`,
      },
    ],
    cta: {
      heading: 'Foundation work on the calendar? Get the plumbing cleared first.',
      subhead: 'Call (972) 429-2223 or schedule a hydrostatic test online.',
    },
    serviceLinks: [{ label: 'Hydrostatic Pre-Testing', href: '/services#hydro-pre' }],
    siblingSlug: 'sewer-test-second-opinion-isolation-rockwall-tx',
    datePublished: '2026-08-03',
    // FLIP TO INDEX when real photo + customer consent confirmed — then link
    // hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
    indexable: false,
  },

  // ---------- STORY 2 — Hydrostatic Post-Test — Plano, TX ----------
  {
    slug: 'hydrostatic-test-after-foundation-repair-plano-tx',
    city: 'Plano, TX',
    service: 'Hydrostatic Post-Test',
    titleTag: 'Hydrostatic Test After Foundation Repair — Plano, TX',
    metaDescription:
      "After a Plano foundation lift, every under-slab line was re-tested and documented. Here's why the post-test matters — and what it caught. Hole in One Plumbing, (972) 429-2223.",
    h1: 'After the Lift: Re-Testing Every Line in a Plano Home',
    heroImage: {
      file: 'hydrostatic-test-after-foundation-repair-plano-tx-hero.jpg',
      placeholder: 'Photo · post-test, Plano',
      alt: 'Water-level gauge during a hydrostatic plumbing test after foundation repair at a Plano, TX home.',
    },
    intro: [
      `The foundation company had done its job: a dozen piers, the slab lifted back toward level, doors closing like they hadn't in years. For most homeowners, that feels like the finish line. For the plumbing under the house, it's the moment of maximum stress — and that's exactly why we were there.`,
      `When a slab comes up, everything attached to it moves. Rigid drain lines that spent decades settled into one position get pulled, flexed, and re-seated in an afternoon. Most survive it. Some don't. The only way to know which kind of house you have is to re-test — which is why the post-lift hydrostatic test is written into the process for foundation companies we work with across DFW.`,
    ],
    sections: [
      {
        heading: 'The re-test',
        paragraphs: [
          `Same procedure as a pre-test: seal the system at the outdoor two-way cleanout, fill the drain lines with water, and watch the level. On this Plano home, we'd tested before the lift and everything held. After the lift, it didn't — the level fell, slowly but unmistakably. The lift had opened a joint somewhere in the system.`,
          `Isolation testing narrowed it to one connection stressed by the movement — a joint, not a collapsed line, which is typical for lift damage. Caught now, it was a contained repair. Caught two years from now, it would have been a saturated slab, and very possibly new foundation movement undoing the repair the homeowners had just paid for.`,
        ],
      },
      {
        heading: 'The fix and the paperwork',
        paragraphs: [
          `We repaired the joint, re-ran the full test, and watched the level hold steady. Then we documented everything: pre-test results, post-test results, the repair between them, all dated — one copy to the homeowner, one to the foundation company. That paper trail matters more than people expect. It's the difference between "we think it's fine" and <em>proof</em>, and it's what keeps a foundation warranty conversation simple if anything ever comes up.`,
        ],
      },
      {
        heading: 'What Plano homeowners should know',
        paragraphs: [
          `If you're having foundation work done, the test <em>after</em> the lift is not optional fine print — it's how lift damage gets caught while it's still the easy kind of problem. Ask your foundation company who's doing the post-test and whether the results will be documented. If the answer is vague, that's worth fixing before the crew leaves.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Why test the plumbing after foundation repair?',
        a: `Lifting a slab moves every line attached to it. A post-lift hydrostatic test is the only way to confirm the drains survived the movement — and to document it.`,
      },
      {
        q: 'What happens if a line fails the post-test?',
        a: `We isolate the system to pinpoint the failure, repair that section, and re-test until it holds. Failures caught at this stage are usually joints, not whole lines.`,
      },
      {
        q: 'Does the foundation company arrange this, or do I?',
        a: `Either. Many DFW foundation companies bring us in directly; homeowners can also schedule the test themselves. What matters is that it happens — and gets documented.`,
      },
    ],
    cta: {
      heading: 'Foundation repair finished — or about to be? Book the post-test.',
      subhead: 'Call (972) 429-2223.',
    },
    serviceLinks: [{ label: 'Hydrostatic Post-Testing', href: '/services#hydro-post' }],
    siblingSlug: 'slab-leak-hydrostatic-test-wylie-tx',
    datePublished: '2026-08-03',
    // FLIP TO INDEX when real photo + customer consent confirmed — then link
    // hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
    indexable: false,
  },

  // ---------- STORY 3 — Under-Slab Repair — Sachse, TX ----------
  {
    slug: 'cast-iron-pipe-replacement-tunneling-sachse-tx',
    city: 'Sachse, TX',
    service: 'Under-Slab Repair',
    titleTag: 'Cast Iron Pipe Replacement by Tunneling — Sachse, TX',
    metaDescription:
      'Sixty-year-old cast iron drains, backing up again and again. How we converted a Sachse home to PVC by tunneling under the slab — no jackhammers, no torn-up floors. (972) 429-2223.',
    h1: 'Cast Iron to PVC in Sachse — By Tunnel, Not Jackhammer',
    heroImage: {
      file: 'cast-iron-pipe-replacement-tunneling-sachse-tx-hero.jpg',
      placeholder: 'Photo · under-slab tunneling, Sachse',
      alt: 'Tunnel access under a Sachse, TX home slab where corroded cast iron drain pipe is being replaced with PVC.',
    },
    intro: [
      `Some houses tell you their age through the plumbing. This one — a well-kept ranch in an established Sachse neighborhood — was doing it through the drains: another backup every few months, another cleaning, another few months of quiet before it started again. The camera told the rest of the story. The original cast iron drain lines had spent roughly sixty years under that slab, and the bottom of the pipe — the channel where water actually runs — was rotted through in stretches. Cleaning wasn't fixing anything anymore. There was less and less pipe left to clean.`,
    ],
    sections: [
      {
        heading: 'The choice every owner of an older DFW home eventually faces',
        paragraphs: [
          `When cast iron under a slab reaches the end of its life, there are two ways to replace it. The first is from above: cut open the slab through the middle of the house, room by room. It works, but you're living in a construction zone — floors up, dust everywhere, and finishes to rebuild when it's over. The second is from below: excavate at the edge of the foundation and tunnel under the slab to the failed lines, replacing them from underneath while the house above stays untouched.`,
          `We tunneled. The family kept living in their home — floors intact, kitchen running — while the work happened under it. This home sat on a conventional slab; tunneling under post-tension foundations, common in newer DFW construction, is its own specialty and one of the reasons foundation companies call us.`,
        ],
      },
      {
        heading: 'The work',
        paragraphs: [
          `Access pits at the slab edge, hand-tunneling to the failed runs, the old cast iron cut out and hauled off, new PVC set in its place with proper fall. Then the proof: a hydrostatic test on the new lines — filled, watched, held — before a single shovel of soil went back. Tunnels backfilled and compacted, the yard raked out, and the only visible evidence a patch of fresh soil along one side of the house.`,
          `The backups stopped because the reason for them was gone.`,
        ],
      },
      {
        heading: 'What Sachse homeowners should know',
        paragraphs: [
          `A lot of Sachse, Garland, and east Dallas housing stock was built in the era of cast iron drains, and cast iron under a slab has a working life of roughly fifty to seventy years. If your home is from that era and the drains are backing up on a schedule, the question usually isn't whether the cast iron is failing — it's how much of it, and the camera answers that in an afternoon. Replacement by tunnel means you don't trade your floors for your plumbing.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does cast iron drain pipe last?',
        a: `Generally 50–70 years under a slab, less in aggressive soil. Most cast iron under North Texas homes built before the mid-1970s is at or past that window now.`,
      },
      {
        q: 'Is tunneling better than cutting the slab?',
        a: `For most occupied homes, yes: no demolition inside, no rebuilt floors, and the family stays home during the work. We confirm every replacement with a hydrostatic test before backfilling either way.`,
      },
      {
        q: 'Will my yard be torn up?',
        a: `There's excavation at the access points, but tunnels are backfilled and compacted when the work is done. Fresh soil and a few weeks of regrowth are the usual evidence.`,
      },
    ],
    cta: {
      heading: 'Drains backing up on repeat in an older home? Get the camera down there and know for sure.',
      subhead: 'Call (972) 429-2223.',
    },
    serviceLinks: [
      { label: 'Under-Slab Repair', href: '/services#foundation-repair' },
      { label: 'Drain & Sewer', href: '/services#drain' },
    ],
    siblingSlug: 'tankless-water-heater-installation-murphy-tx',
    datePublished: '2026-08-03',
    // FLIP TO INDEX when real photo + customer consent confirmed — then link
    // hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
    indexable: false,
  },

  // ---------- STORY 4 — Pipe & Sewer Isolation — Rockwall, TX ----------
  {
    slug: 'sewer-test-second-opinion-isolation-rockwall-tx',
    city: 'Rockwall, TX',
    service: 'Pipe & Sewer Isolation',
    titleTag: 'Sewer Test Second Opinion & Isolation — Rockwall, TX',
    metaDescription:
      'A failed whole-house test and a massive replacement bid. An isolation test told a different story — one bad section, one contained repair. Get a second opinion: (972) 429-2223.',
    h1: 'The Second Opinion That Saved a Rockwall Homeowner Thousands',
    heroImage: {
      file: 'sewer-test-second-opinion-isolation-rockwall-tx-hero.jpg',
      placeholder: 'Photo · isolation test, Rockwall',
      alt: 'Inflatable isolation test plugs used to pinpoint a failed under-slab sewer line section at a Rockwall, TX home.',
    },
    intro: [
      `The homeowner's voice on the phone had the sound of someone bracing for bad news to get worse. Another company had run a test under her Rockwall home, told her it failed, and handed her a bid to replace the under-slab plumbing. All of it. The number had a lot of digits. She wanted to know one thing before signing anything: <em>does a failed test really mean the whole system is bad?</em>`,
      `It's the right question, and the honest answer is: not necessarily. A whole-house hydrostatic test answers one question — <em>is there a leak somewhere?</em> It does not tell you where, and it does not tell you how much of the system is involved. A single failed joint and a system-wide failure look identical on a whole-house test: the water level drops. What separates them is the next step, and the next step is isolation.`,
    ],
    sections: [
      {
        heading: 'Testing it the slow, honest way',
        paragraphs: [
          `Isolation testing splits the under-slab system into sections using inflatable plugs, then tests each section on its own. It takes longer than a single whole-house fill. It's also the difference between guessing and knowing. Section by section, this system did something the original bid hadn't accounted for: it held. Kitchen run — held. Hall bath — held. One section on the far side of the house — dropped. We ran it twice to be sure. Same result. One failed section; everything else sound.`,
        ],
      },
      {
        heading: 'The repair that actually matched the problem',
        paragraphs: [
          `With the failure isolated to a few feet of line, the fix was a targeted under-slab repair of that section — followed by a full re-test of the entire system, which held steady. The homeowner got the documentation: what was tested, section by section, what failed, what was repaired, and the passing result at the end. The final cost was a fraction of the replace-everything bid she'd been holding when she called.`,
          `We don't say the first company lied. Whole-house testing is a legitimate screening tool, and some houses genuinely do need full replacement — we've done those jobs too. But a screening result is a starting point, not a sentence, and nobody should sign a five-figure contract on a test that can't say <em>where</em> the problem is.`,
        ],
      },
      {
        heading: 'What Rockwall homeowners should know',
        paragraphs: [
          `If you've been told your under-slab plumbing failed a test, ask one question before you sign: <em>has the failure been isolated to specific sections?</em> If the answer is no, an isolation test is the cheapest expensive-mistake insurance in plumbing. Sometimes it confirms the bad news. Often, it shrinks it.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'What is a pipe isolation test?',
        a: `The under-slab drain system is divided into sections with inflatable plugs, and each section is water-tested independently — pinpointing exactly which runs leak and which are sound.`,
      },
      {
        q: 'Should I get a second opinion after a failed hydrostatic test?',
        a: `Before signing a large replacement contract, yes. A whole-house test finds <em>that</em> there's a leak; only isolation finds <em>where</em>. The difference can be most of the bid.`,
      },
      {
        q: 'Does a failed whole-house test mean full replacement?',
        a: `Sometimes — but often the failure is one section or one joint. Isolation testing is how you find out which house you're standing in.`,
      },
    ],
    cta: {
      heading: 'Holding a big repair bid and a bad feeling? Get the isolation test first.',
      subhead: 'Call (972) 429-2223.',
    },
    serviceLinks: [
      { label: 'Pipe & Sewer Isolation', href: '/services#isolation' },
      { label: 'Hydrostatic Pre-Testing', href: '/services#hydro-pre' },
    ],
    siblingSlug: 'slab-leak-hydrostatic-test-wylie-tx',
    datePublished: '2026-08-03',
    // FLIP TO INDEX when real photo + customer consent confirmed — then link
    // hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
    indexable: false,
  },

  // ---------- STORY 5 — Water Heaters — Murphy, TX ----------
  {
    slug: 'tankless-water-heater-installation-murphy-tx',
    city: 'Murphy, TX',
    service: 'Water Heaters',
    titleTag: 'Tankless Water Heater Installation — Murphy, TX',
    metaDescription:
      'A Murphy family of six, one exhausted 40-gallon tank, and the sizing math that made tankless work. Installed right, gas line and all. Hole in One Plumbing — (972) 429-2223.',
    h1: 'A Tankless Water Heater, Sized and Installed Right in Murphy',
    heroImage: {
      file: 'tankless-water-heater-installation-murphy-tx-hero.jpg',
      placeholder: 'Photo · tankless install, Murphy',
      alt: 'New wall-mounted tankless water heater with clean copper and gas piping installed by Hole in One Plumbing in Murphy, TX.',
    },
    intro: [
      `Six people, two showers, one forty-gallon tank. The math had stopped working years ago; the family in Murphy had just gotten used to scheduling their mornings around it. When the old tank finally started leaving rusty water in the pan, they called with a question we hear weekly: <em>should we just do tankless?</em>`,
      `Our answer is always the same: maybe — let's do the math first. Tankless done right is a genuine upgrade. Tankless done by guesswork is how you end up with an expensive unit that gives two showers of lukewarm regret.`,
    ],
    sections: [
      {
        heading: 'The sizing',
        paragraphs: [
          `Tankless units are rated by flow — how many gallons per minute they can heat — and by how far they have to raise the incoming water temperature. We counted the fixtures that realistically run at once in this house (two showers and a kitchen tap, on the bad mornings), and worked against North Texas groundwater, which runs warmer than the national charts assume in summer and a good deal colder in January. The unit that fit wasn't the biggest one on the truck or the one from the big-box flyer — it was the one whose numbers matched <em>this</em> house in <em>this</em> climate.`,
        ],
      },
      {
        heading: 'The part the flyer never mentions: the gas line',
        paragraphs: [
          `A tankless unit heats water on demand, which means it drinks gas fast while it runs — often more than double what a tank heater draws. The existing gas line to this water heater closet was sized for the old tank, not for that. So the install included upsizing the gas run to feed the new unit properly — pressure-tested before it carried a single BTU, the way all our gas work is. Skipping that step is the single most common reason a "professionally installed" tankless underperforms.`,
        ],
      },
      {
        heading: 'Install day',
        paragraphs: [
          `Old tank drained and hauled out. The new unit wall-mounted in a fraction of the closet, venting run to spec, water and upsized gas connected, everything leak-checked and fired. First test: both showers and the kitchen sink, running together, on purpose — probably the first time anyone in that house had dared. Hot, hot, and hot.`,
          `We left them with one piece of homework: an annual flush. North Texas water carries minerals, and a yearly descale is what keeps a tankless unit performing for its full fifteen-to-twenty-year life.`,
        ],
      },
      {
        heading: 'What Murphy homeowners should know',
        paragraphs: [
          `Tankless is worth it when the sizing is honest and the gas supply is real — and it's a disappointment when either is guessed at. If you're getting quotes, ask two questions: <em>what GPM and temperature rise is this sized for,</em> and <em>does my gas line support it?</em> If a bidder can't answer both, keep bidding.`,
        ],
      },
    ],
    faqs: [
      {
        q: 'Is tankless worth it over a standard tank?',
        a: `For households that outrun their tank — larger families, back-to-back showers — usually yes: endless hot water, a smaller footprint, and a 15–20 year service life. For light hot-water use, a quality tank can still be the value pick. We'll tell you which house you have.`,
      },
      {
        q: 'Does a tankless water heater need a bigger gas line?',
        a: `Very often, yes. Tankless units draw far more gas while running than tank heaters. We size and, when needed, upsize the line — and pressure-test all gas work before it goes live.`,
      },
      {
        q: 'What maintenance does tankless need?',
        a: `An annual flush to clear mineral scale — especially on North Texas water. It's quick, and it's the difference between a unit that lasts and one that fades at year eight.`,
      },
    ],
    cta: {
      heading: 'Tired of scheduling your showers? Get the sizing math done right.',
      subhead: 'Call (972) 429-2223.',
    },
    serviceLinks: [
      { label: 'Water Heaters', href: '/services#water-heater' },
      { label: 'Gas Lines', href: '/services#gas-lines' },
    ],
    siblingSlug: 'cast-iron-pipe-replacement-tunneling-sachse-tx',
    datePublished: '2026-08-03',
    // FLIP TO INDEX when real photo + customer consent confirmed — then link
    // hub from Customer Stories page, regenerate sitemap, resubmit in GSC.
    indexable: false,
  },
];

export const getStory = (slug: string) => STORIES.find((s) => s.slug === slug);
