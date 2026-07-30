import { useCallback, useEffect, useRef, useState } from 'react';

/* Cloudflare Turnstile widget (fleet-standard bot protection for forms).

   Renders nothing until PUBLIC_TURNSTILE_SITE_KEY is configured — same
   ship-ahead pattern as the analytics beacon — so the code can deploy before
   the widget exists. The companion server-side check lives in the /api/contact
   route (TURNSTILE_SECRET_KEY): tokens are verified against siteverify there,
   never in the browser. */

const SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      action?: string;
      theme?: 'light' | 'dark' | 'auto';
      callback: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function turnstileConfigured(): boolean {
  return Boolean(SITE_KEY);
}

/** Reset the page's widget (after a successful submit consumes the token). */
export function resetTurnstile(): void {
  try {
    window.turnstile?.reset();
  } catch {
    // Widget not rendered — nothing to reset.
  }
}

export function Turnstile({ onToken }: { onToken: (token: string | null) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [failed, setFailed] = useState(false);

  const renderWidget = useCallback(() => {
    if (!SITE_KEY || rendered.current || !containerRef.current || !window.turnstile) return;
    rendered.current = true;
    window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      action: 'request-service',
      theme: 'light',
      callback: (token) => onToken(token),
      'expired-callback': () => onToken(null),
      'error-callback': () => setFailed(true),
    });
  }, [onToken]);

  useEffect(() => {
    if (!SITE_KEY) return;
    if (window.turnstile) {
      renderWidget();
      return;
    }
    // Load the API script once; re-mounts (e.g. "Send another request") reuse it.
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener('load', renderWidget);
    return () => script?.removeEventListener('load', renderWidget);
  }, [renderWidget]);

  if (!SITE_KEY) return null;

  return (
    <div className="mb-4">
      <div ref={containerRef} />
      {failed && (
        <p className="mt-1.5 text-[13px] font-semibold text-accent-700">
          The security check couldn't load. Please refresh and try again.
        </p>
      )}
    </div>
  );
}
