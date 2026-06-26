import { useState } from 'react';
import { Icon } from './icons';
import { TESTIMONIALS } from '@/data/site';

/* Testimonials carousel — hydrated island. The heading/eyebrow live in
   the parent .astro section so they stay server-rendered. */
export function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  const go = (d: number) => setI((p) => (p + d + n) % n);
  const t = TESTIMONIALS[i];
  const initial = t.name.replace(/^(Mr|Mrs|Ms)\.\s/, '').charAt(0);

  return (
    <div>
      <div className="relative mx-auto max-w-3xl rounded-3xl bg-white p-9 shadow-lift sm:p-12">
        <div className="mb-5 flex gap-1 text-gold-500">
          {[0, 1, 2, 3, 4].map((k) => (
            <span key={k} className="inline-flex">
              <Icon name="star" size={20} />
            </span>
          ))}
        </div>

        <p className="font-display text-[clamp(20px,2.2vw,26px)] font-medium leading-snug tracking-tight text-slate-deep">
          “{t.quote}”
        </p>

        <div className="mt-7 flex items-center gap-3.5">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-700 font-display text-xl font-extrabold text-white">
            {initial}
          </div>
          <div>
            <div className="font-display font-bold text-ink">{t.name}</div>
            <div className="text-[14px] text-slate-soft">{t.city}</div>
          </div>
        </div>

        <div className="absolute right-8 top-9 flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="rev-arrow grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-white text-slate-strong transition"
          >
            <Icon name="arrow" size={20} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="rev-arrow grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-white text-slate-strong transition"
          >
            <Icon name="arrow" size={20} />
          </button>
        </div>
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {TESTIMONIALS.map((_, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Review ${k + 1}`}
            className="h-2 rounded-full transition-all"
            style={{
              width: k === i ? 26 : 8,
              background: k === i ? 'var(--color-accent-500)' : 'rgba(255,255,255,.3)',
            }}
          />
        ))}
      </div>

      <style>{`
        .rev-arrow:hover {
          background: var(--color-navy-700);
          color: #fff;
          border-color: var(--color-navy-700);
        }
      `}</style>
    </div>
  );
}
