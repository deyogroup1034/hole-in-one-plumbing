# HIO Client Feedback — Change Spec (Round 1)

Source: "Website_items_need_to_be_fixed.docx" from Oscar & Erica.
Screenshots referenced below are in `hio-feedback-screenshots.zip` — unzip to
`feedback-screenshots/` in the repo root. **Where an item says "per screenshot,"
locate the exact current text by matching the screenshot — do not guess or
apply globally unless the item says site-wide.**

---

## A. Site-wide text changes

1. **"Family Run" → "Family Owned & Operated"** — site-wide, every instance
   (hero eyebrow, About, footer, meta descriptions, anywhere "family-run" or
   "family run" appears).

2. **License format** — change every instance of the master license to
   **`RMP #37741`** (currently shown as "TX Master Plumber #M37741" or similar).
   Site-wide: footer, contact page, utility bar, schema.
   ✅ CONFIRMED: use `RMP #37741` site-wide. (Client's "RPM" was a transposition
   of the Texas RMP — Responsible Master Plumber — designation.)

3. **Phone — remove Oscar's cell.** Replace **(469) 855-9041** everywhere with
   **(972) 475-5458**. Primary line **(972) 429-2223** stays as-is. Specific spots
   from screenshots: the number shown in screenshot `image8.png`, and the
   **"Alternate" line on the Contact page** (screenshot `image14.png`). Check the
   emergency callout too.

---

## B. Homepage / hero area

4. **Headline change (per screenshot `image2.png`)** — the heading containing
   "Foundation plumbing" becomes:
   **"Foundation plumbing repairs and everything else your home needs."**

5. **Remove the "most plumbers send out:" line (per screenshot, same area)** and
   replace with this subcopy (client option c, lightly polished):
   **"We handle the everyday repairs with the right tools to find the real
   problem — from hydrostatic testing to isolating the root cause — so it's
   done right the first time."**

6. **Use Oscar's line on the Under-Slab Repair card** as its tagline/first line:
   **"BIG or small, we repair them all."**
   (Both client-suggested lines get used — Erica's in the hero, Oscar's on the
   card his specialty lives on.)

7. **Trust strip line (per screenshot `image7.png`)** — replace the line shown
   with: **"Every job is done right and guaranteed."**

8. **Add trust logos (per screenshot `image1.png`):** The Good Contractors List
   logo + BBB logo, placed in the trust badge area (and footer if it fits).
   Temporary: crop the two logos from `image1.png` in the zip. TODO(pending):
   swap for official high-res assets (BBB accredited-business seal; Good
   Contractors member badge).

---

## C. Services changes

9. **REMOVE Backflow entirely** — they do not do backflow testing. Remove the
   `/services` block, the homepage grid card, its Service schema, and any nav
   anchors/mentions. (Screenshot `image4.png` confirms the block.)

10. **ADD Hydro Jetting** — full block on `/services` + homepage grid card
    (takes Backflow's grid slot, keeping the grid at 8):
    - **/services block:** "Hydro Jetting — High-pressure water jetting that
      scours the inside of your drain and sewer lines clean, not just poking a
      hole through the clog. You need it when a line keeps backing up after
      snaking, when years of grease or roots have built up, or as maintenance
      before a slow drain becomes an emergency. It's the difference between
      clearing a clog and actually cleaning the pipe."
    - **Homepage card:** "Hydro Jetting — High-pressure cleaning that scours
      drain and sewer lines — not just a hole through the clog."
    - Add Service schema.

11. **ADD Miscellaneous section** — `/services` block (not on the homepage grid):
    - **"Miscellaneous Plumbing — Faucets, toilets, garbage disposals, hose
      bibs, leak repairs, fixture swaps — the everyday list that keeps a house
      running. If water runs through it, we work on it. No job is too small to
      do right."**
    - Add Service schema.

12. **Services hero wording (per screenshot `image9.png`)** — change
    "…plumber" to "…**plumbing needs too**" in the sentence shown (e.g.
    "and your everyday plumber, too" → "and your everyday plumbing needs too").

13. **Foundation explainer, step 1 heading (per screenshot `image11.png`)** —
    "Hydrostatic pre-test" → **"Hydrostatic test"** (this instance only; the
    Pre-Test service card keeps its name unless its screenshot says otherwise).

14. **Foundation explainer, step 1 body (per screenshot `image10.png`)** —
    remove "isolate and": "We isolate and fill…" → **"We fill…"**

15. **Terminology: remove "pressure," use water-level language** (two spots):
    - Per screenshot `image5.png`: remove the word "pressure" from the text shown
      (e.g. "A pressure/level test" → "A water-level test").
    - Per screenshot `image12.png`: remove "pressure" and add "water level" in
      the text shown.
    Rationale: hydrostatic testing is a water-level test — the client is
    correcting the plumbing terminology. If "pressure test" appears anywhere
    else in foundation-testing copy, align it to water-level wording.

16. **Under-Slab card (per screenshot `image6.png`)** — remove the phrase
    "coordinated cleanly with your foundation crew" (under-slab work isn't
    always foundation-related). Smooth the remaining sentence.

17. **Add the hydrostatic testing illustration** — file:
    `hydrostatic-testing-illustration.jpg` (client-provided, approved for use;
    provenance being verified separately by John — not a build blocker).
    **Placement:** `/services`, inside the "How foundation testing works"
    section, **full content-column width, directly BELOW the numbered steps**
    (not beside them — the infographic is too dense to read at half width).
    - Use the `<Image>` wrapper, lazy-loaded, run through the Astro image
      pipeline (source is 1429×1071); rounded corners + card shadow to match
      the section's card styling.
    - **Alt text:** "Illustration of how a hydrostatic test works: the system
      is sealed with a test ball at the outdoor cleanout, floor-level drains
      are accessed, and the lines are filled with water and monitored."
    - **Caption below (small, muted):** "The system is sealed at the outdoor
      two-way cleanout, filled with water, and monitored — no high pressure
      involved. A two-way outdoor cleanout is required to perform the test."
    - Note: the graphic's baked-in phone numbers and "Family Owned & Operated"
      badge match the corrected site content — no conflicts.

---

## D. Pending assets (no action now — slots to keep ready)

- **Brock photo:** client is shooting a real photo of their tech performing a
  hydrostatic test to replace the image in screenshot `image13.png`. Keep that
  slot on the swappable `<Image>` wrapper; swap on delivery.
- **Official logo files** for BBB + Good Contractors (item 8).

---

## E. Claude Code prompt (paste this)

```
Unzip hio-feedback-screenshots.zip to feedback-screenshots/ in the repo
root, then implement every change in hio-feedback-changes.md sections A–C
on the hole-in-one-site Astro project.

Rules:
- For items marked "per screenshot," open the referenced screenshot and
  match the exact current text before editing — do not guess or apply
  globally unless the item says site-wide.
- Item 2: use exactly "RMP #37741" site-wide (confirmed).
- Item 9: remove Backflow completely — /services block, homepage card,
  Service schema, anchors.
- Item 10: Hydro Jetting takes Backflow's homepage grid slot (grid stays
  at 8 cards).
- Item 17: copy hydrostatic-testing-illustration.jpg into src/assets and
  place it full column-width directly BELOW the foundation-explainer steps
  on /services, with the exact alt text and caption from the spec
  (lazy-loaded, Astro image pipeline, rounded corners + card shadow).
- Preserve the pending-asset slots in section D (swappable Image slots).
- After all edits: grep -ri "family.run\|backflow\|855-9041\|M37741" src/
  must return nothing. npm run build must pass clean.
- Commit as "Apply HIO round-1 client feedback (17 items)" and deploy via
  npm run deploy so the pages.dev preview reflects the changes.

Report a checklist of all 17 items with done/blocked status.
```
