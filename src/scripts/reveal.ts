/* Reveal-on-scroll: adds `.in` to `.reveal` elements as they enter the
   viewport. Respects prefers-reduced-motion (CSS handles the no-motion
   case by forcing everything visible). */
function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (els.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );

  els.forEach((el) => io.observe(el));
}

initReveal();
