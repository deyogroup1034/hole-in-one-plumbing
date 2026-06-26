import { ICON_PATHS } from '@/data/icons';
import type { IconName } from '@/data/site';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/* React counterpart of Icon.astro — for use inside hydrated islands. */
export function Icon({ name, size = 26, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICON_PATHS[name] }}
    />
  );
}
