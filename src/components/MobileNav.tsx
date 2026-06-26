import { useState } from 'react';
import { Icon } from './icons';
import { BIZ, NAV_LINKS, telHref } from '@/data/site';

/* Mobile hamburger + slide-down drawer. Hydrated island — the desktop
   nav is static HTML in Header.astro and stays server-rendered. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex flex-col gap-[5px] p-2"
      >
        <span
          className="h-[2.5px] w-6 rounded bg-ink transition-transform duration-200"
          style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
        />
        <span
          className="h-[2.5px] w-6 rounded bg-ink transition-opacity duration-200"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="h-[2.5px] w-6 rounded bg-ink transition-transform duration-200"
          style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
        />
      </button>

      <div
        className="absolute inset-x-0 top-full overflow-hidden border-b border-line bg-white shadow-lift transition-all duration-300"
        style={{ maxHeight: open ? 480 : 0, opacity: open ? 1 : 0 }}
      >
        <nav className="flex flex-col px-7 pb-6 pt-1">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 font-display text-[17px] font-semibold text-slate-deep"
            >
              {label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2.5">
            <a href={telHref(BIZ.phones[0])} className="btn btn-ghost">
              <Icon name="phone" size={18} /> {BIZ.phones[0]}
            </a>
            <a href="/contact" onClick={() => setOpen(false)} className="btn btn-accent">
              Schedule Service
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
