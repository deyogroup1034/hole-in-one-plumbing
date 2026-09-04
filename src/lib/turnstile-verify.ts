/**
 * Server-side Turnstile verification (Cloudflare siteverify) for the
 * service-request form.
 *
 * Fails CLOSED. A missing secret, an unreachable siteverify, or any non-success
 * verdict rejects the submission. The only case that skips the check is a fully
 * unconfigured environment (neither site key nor secret — i.e. local dev, where
 * the widget never renders), and never in Vercel production.
 *
 * This replaces an earlier version that returned `true` when the secret was
 * missing, which made an unconfigured gate indistinguishable from a passing one
 * and would have let the lead form through unverified without reporting it.
 *
 * Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** Cloudflare rejects tokens longer than this; don't bother round-tripping. */
const MAX_TOKEN_LENGTH = 2048;

const TIMEOUT_MS = 10_000;

export type TurnstileResult =
  | { ok: true }
  /** Bad/missing/expired/replayed token — the visitor can retry the checkbox. */
  | { ok: false; kind: 'challenge' }
  /** Misconfiguration or siteverify outage — the visitor cannot fix this. */
  | { ok: false; kind: 'unavailable' };

/**
 * Error codes that describe the *token* rather than our configuration.
 * Anything else (bad secret, bad request, internal error) is our problem and
 * must surface as "unavailable", so the visitor gets the call-us fallback
 * instead of being told to re-tick a checkbox that will never work.
 */
const CHALLENGE_CODES = new Set([
  'missing-input-response',
  'invalid-input-response',
  'timeout-or-duplicate',
]);

interface SiteverifyResponse {
  success?: boolean;
  'error-codes'?: string[];
  hostname?: string;
  action?: string;
  challenge_ts?: string;
}

function siteKeyConfigured(): boolean {
  return Boolean(
    process.env.PUBLIC_TURNSTILE_SITE_KEY || import.meta.env.PUBLIC_TURNSTILE_SITE_KEY,
  );
}

/**
 * Whether the gate is enforced. Enforced whenever any part of Turnstile is
 * configured, and unconditionally in Vercel production — so a half-applied env
 * change (widget live, secret missing) rejects rather than waving traffic
 * through unverified.
 */
function isEnforced(): boolean {
  if (process.env.VERCEL_ENV === 'production') return true;
  return Boolean(process.env.TURNSTILE_SECRET_KEY) || siteKeyConfigured();
}

function isIpAddress(value: string): boolean {
  if (value.length > 45) return false;
  const ipv4 = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
  const ipv6 = /^[0-9a-fA-F:]+$/;
  return ipv4.test(value) || (value.includes(':') && ipv6.test(value));
}

/**
 * Best-effort client IP for the optional `remoteip` parameter. On Vercel the
 * head of `x-forwarded-for` is client-controllable, so prefer the platform-set
 * headers and fall back to the first hop. An unparseable value is dropped
 * rather than sent — `remoteip` is optional, and garbage risks a `bad-request`
 * verdict that would fail an otherwise valid submission.
 */
function clientIp(headers?: Headers): string | undefined {
  if (!headers) return undefined;
  const candidate =
    headers.get('x-vercel-forwarded-for') ??
    headers.get('x-real-ip') ??
    headers.get('x-forwarded-for')?.split(',')[0];
  const ip = candidate?.trim();
  return ip && isIpAddress(ip) ? ip : undefined;
}

/**
 * Verify a Turnstile token against Cloudflare siteverify. Never throws — the
 * form must degrade rather than 500 — and never returns ok on doubt.
 */
export async function verifyTurnstile(
  token: string | null,
  requestHeaders?: Headers,
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (!isEnforced()) return { ok: true }; // unconfigured local dev
    console.error(
      'turnstile: TURNSTILE_SECRET_KEY is not set — rejecting submission (fail closed)',
    );
    return { ok: false, kind: 'unavailable' };
  }

  if (!token || token.length > MAX_TOKEN_LENGTH) {
    console.warn('turnstile: submission carried no usable token');
    return { ok: false, kind: 'challenge' };
  }

  const remoteip = clientIp(requestHeaders);
  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.set('remoteip', remoteip);

  let data: SiteverifyResponse;
  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      console.error('turnstile: siteverify HTTP', res.status);
      return { ok: false, kind: 'unavailable' };
    }
    data = (await res.json()) as SiteverifyResponse;
  } catch (err) {
    console.error('turnstile: siteverify unreachable —', err);
    return { ok: false, kind: 'unavailable' };
  }

  if (data.success === true) return { ok: true };

  const codes = data['error-codes'] ?? [];
  console.warn('turnstile: rejected —', codes.join(', ') || 'no error codes');

  // A token-shaped failure is the visitor's to retry; anything else is ours.
  const tokenFault = codes.length > 0 && codes.every((code) => CHALLENGE_CODES.has(code));
  return { ok: false, kind: tokenFault ? 'challenge' : 'unavailable' };
}
