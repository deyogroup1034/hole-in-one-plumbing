import type { APIRoute } from 'astro';
import { isTestSubmission, postLeadToDeyoDash } from '@/lib/deyo';
import { verifyTurnstile } from '@/lib/turnstile-verify';

// On-demand: this route runs as a Vercel serverless function rather than
// being prerendered. Everything else on the site stays static.
export const prerender = false;

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  turnstileToken?: string;
  deyo_test?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const POST: APIRoute = async ({ request }) => {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400);
  }

  const name = body.name?.trim() ?? '';
  const phoneDigits = (body.phone ?? '').replace(/\D/g, '');
  const service = body.service?.trim() ?? '';

  // Server-side validation mirrors the client form.
  if (!name || phoneDigits.length < 7 || !service) {
    return json({ ok: false, error: 'Please provide your name, a valid phone, and a service.' }, 422);
  }

  const lead = {
    name,
    phone: body.phone?.trim() ?? '',
    email: body.email?.trim() ?? '',
    service,
    message: body.message?.trim() ?? '',
    receivedAt: new Date().toISOString(),
  };

  // Synthetic form-delivery test (Deyo Dash monitoring). The marker must
  // match the fleet shared secret, so nothing external can reach this path.
  // It runs the same validation, then routes to the sink: the webhook flagged
  // `test: true` (recorded as a form_delivery health result, never a lead).
  // Responding `deyo_test: "delivered"` confirms the whole chain worked.
  if (isTestSubmission(body.deyo_test)) {
    const delivered = await postLeadToDeyoDash({
      name: lead.name,
      email: lead.email,
      detail: { service: lead.service, message: lead.message },
      test: true,
    });
    return json({ ok: delivered, deyo_test: delivered ? 'delivered' : 'webhook-failed' }, delivered ? 200 : 502);
  }

  // Fleet-standard bot gate: verify the Turnstile token server-side before
  // accepting the lead. Enforced only once TURNSTILE_SECRET_KEY is configured,
  // so the form keeps working while the widget is being set up.
  const human = await verifyTurnstile(body.turnstileToken ?? null);
  if (!human) {
    return json(
      { ok: false, error: "We couldn't confirm the security check. Please complete it and try again." },
      403,
    );
  }

  // PRE-LAUNCH: wire up real lead delivery here — email via Resend
  // (confirmed choice). Secrets come from Vercel env vars via `process.env`.
  // For now the lead is logged and reported to Deyo Dash (below), so nothing
  // is silently dropped while email is pending.
  console.log('New service request:', lead);

  // Report the lead to Deyo Dash monitoring/reporting. Best-effort — a
  // webhook hiccup must never break the visitor's submission.
  await postLeadToDeyoDash({
    name: lead.name,
    email: lead.email,
    detail: { phone: lead.phone, service: lead.service, message: lead.message },
  });

  return json({ ok: true });
};
