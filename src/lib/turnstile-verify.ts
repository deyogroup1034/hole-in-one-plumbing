/**
 * Server-side Turnstile verification (Cloudflare siteverify), used by the
 * contact API route. Enforced only once TURNSTILE_SECRET_KEY is configured,
 * so the form keeps working while the widget is being set up.
 */
export async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured yet — widget isn't rendered either
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });
    if (!res.ok) {
      console.error('turnstile siteverify HTTP', res.status);
      return false;
    }
    const data = (await res.json()) as {
      success?: boolean;
      'error-codes'?: string[];
    };
    if (!data.success) console.warn('turnstile rejected:', data['error-codes']);
    return Boolean(data.success);
  } catch (err) {
    console.error('turnstile siteverify failed:', err);
    return false;
  }
}
