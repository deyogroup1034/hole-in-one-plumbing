import type { IconName } from './site';

/* Inner SVG markup for each icon. Drawn on a 24x24 viewBox with
   stroke="currentColor". Shared by Icon.astro (set:html) and the
   React <Icon> island (dangerouslySetInnerHTML). */
export const ICON_PATHS: Record<IconName, string> = {
  // Hydrostatic pressure gauge
  gauge: '<circle cx="12" cy="13" r="8" /><path d="M12 13l4-3" /><path d="M12 5V3" /><path d="M5.5 7.5 4 6" /><path d="M18.5 7.5 20 6" />',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" /><path d="M9 12.5 11 15l4-4.5" />',
  // Isolation: pipe with a shut-off
  isolate: '<path d="M3 12h6" /><path d="M15 12h6" /><circle cx="12" cy="12" r="3" /><path d="M12 9V6" /><path d="M12 18v-3" />',
  // Foundation / under-slab
  foundation: '<path d="M3 9h18" /><path d="M5 9v11h14V9" /><path d="M5 9 12 4l7 5" /><path d="M10 20v-5h4v5" />',
  // Drain swirl
  drain: '<path d="M4 7h13a3 3 0 1 1-3 3" /><path d="M4 12h9a3 3 0 1 1-3 3" /><path d="M4 17h6" />',
  flame: '<path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c2 1.5 3 3.4 3 5.5a5 5 0 0 1-10 0C7 11 12 9 12 3z" />',
  phone: '<path d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2 4 1.6V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />',
  clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />',
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />',
  check: '<path d="M5 12.5 10 17l9-10" />',
  award: '<circle cx="12" cy="9" r="5" /><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />',
  truck: '<path d="M3 6h11v9H3z" /><path d="M14 9h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.6" /><circle cx="17" cy="17.5" r="1.6" />',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6" />',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16.5" cy="14" r="1.2" />',
};
