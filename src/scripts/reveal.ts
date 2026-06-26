/* Reveal-on-scroll — progressive enhancement.
   Content is visible by default; the hidden/animated state in global.css
   only applies once we add `.js-reveal` to <html>. So if this script never
   runs (JS off/blocked), nothing is hidden. While it runs, elements reveal
   as they scroll into view, with a hard safety net so content can NEVER
   stay permanently hidden. */
function initReveal() {
  const root = document.documentElement;
  root.classList.add('js-reveal');

  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (els.length === 0) return;

  const revealAll = () => els.forEach((el) => el.classList.add('in'));

  const inView = (el: Element) => {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * 0.92 && r.bottom > 0;
  };
  const check = () => {
    for (const el of els) {
      if (!el.classList.contains('in') && inView(el)) el.classList.add('in');
    }
  };

  // Reveal anything already on screen now (no flash for above-the-fold).
  check();
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check, { passive: true });
  window.addEventListener('load', check);

  // Safety net: if anything ever blocks the scroll checks, make sure no
  // content stays hidden.
  setTimeout(revealAll, 2500);
}

initReveal();
