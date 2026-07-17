import { useState } from 'react';
import { Icon } from './icons';
import { FEATURED_STORIES } from '@/data/site';
import type { PhotoSlot } from '@/data/site';

/* Photo renderer that mirrors Image.astro: real <img> when a src is set,
   otherwise the styled `.ph` placeholder box (global.css). */
function Photo({ photo, className }: { photo: PhotoSlot; className?: string }) {
  if (photo.src) {
    return <img src={photo.src} alt={photo.alt} className={className} />;
  }
  return (
    <div className={`ph ${className ?? ''}`} role="img" aria-label={photo.alt}>
      <span>{photo.placeholder}</span>
    </div>
  );
}

/* Featured Stories picker: one main story shown large, the rest selectable
   from the rail. Hydrated island. */
export function FeaturedStories() {
  const [active, setActive] = useState(0);
  const story = FEATURED_STORIES[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
      {/* Main story */}
      <article className="overflow-hidden rounded-[20px] border border-line border-l-[6px] border-l-accent-500 bg-white shadow-card">
        <Photo photo={story.photo} className="h-[240px] w-full object-cover object-[center_30%] sm:h-[300px]" />
        <div className="p-8 lg:p-9">
          <div className="font-display text-[12.5px] font-bold uppercase tracking-[0.08em] text-accent-600">
            {story.service}
          </div>
          <h3 className="mt-2 text-[24px] font-bold leading-snug">
            {story.title} — {story.location}
          </h3>
          <p className="mt-3 text-[16.5px] leading-relaxed text-slate-strong">{story.body}</p>
          <a
            href={story.serviceHref}
            className="mt-5 inline-flex items-center gap-1.5 font-display text-[14.5px] font-bold text-accent-600"
          >
            See the service behind this job <Icon name="arrow" size={16} />
          </a>
        </div>
      </article>

      {/* Selector rail */}
      <div
        className="flex flex-col gap-3"
        role="tablist"
        aria-label="Featured stories"
      >
        {FEATURED_STORIES.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={[
                'rounded-[14px] p-4 text-left transition',
                isActive
                  ? 'border-l-[4px] border-l-accent-500 bg-accent-tint/60 shadow-sm'
                  : 'border border-line bg-white hover:border-line-strong hover:shadow-sm',
              ].join(' ')}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-accent-600">
                  {s.service}
                </div>
                {isActive && <Icon name="arrow" size={15} className="text-accent-600" />}
              </div>
              <div className="mt-1 font-display text-[15.5px] font-bold leading-snug text-ink">
                {s.title}
              </div>
              <div className="mt-0.5 text-[13px] text-slate-faint">{s.location}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
