import type { APIRoute } from 'astro';

// On-demand: this route runs as a Cloudflare Pages Function rather than
// being prerendered. Everything else on the site stays static.
export const prerender = false;

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
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

  // TODO(client): wire up real lead delivery here. Options on Cloudflare:
  //   - Email via Resend / MailChannels / Cloudflare Email Routing
  //   - Persist to D1 or KV, or forward to a CRM webhook
  // Secrets/bindings are available on `locals.runtime.env` (Cloudflare).
  // For now we just log so the request can be verified end-to-end.
  console.log('New service request:', lead);

  return json({ ok: true });
};
