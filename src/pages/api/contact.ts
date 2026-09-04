import type { APIRoute } from 'astro';
import { isTestSubmission, postLeadToDeyoDash } from '@/lib/deyo';
import { sendEmail } from '@/lib/email';
import { verifyTurnstile } from '@/lib/turnstile-verify';
import { BIZ } from '@/data/site';

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

  // The fleet's synthetic delivery probe authenticates with the shared ingest
  // secret and never carries a widget token, so it bypasses the bot gate — but
  // nothing else does.
  const isTest = isTestSubmission(body.deyo_test);

  // Bot gate FIRST for real traffic: before validation, before the notification
  // email and the dash webhook. Fails closed.
  if (!isTest) {
    const human = await verifyTurnstile(body.turnstileToken ?? null, request.headers);
    if (!human.ok) {
      return human.kind === 'challenge'
        ? json(
            {
              ok: false,
              error: "We couldn't confirm the security check. Please complete it and try again.",
            },
            403,
          )
        : json(
            {
              ok: false,
              error: `We couldn't verify your request right now. Please call ${BIZ.phones[0]} and we'll help right away.`,
            },
            503,
          );
    }
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
  if (isTest) {
    const delivered = await postLeadToDeyoDash({
      name: lead.name,
      email: lead.email,
      detail: { service: lead.service, message: lead.message },
      test: true,
    });
    return json({ ok: delivered, deyo_test: delivered ? 'delivered' : 'webhook-failed' }, delivered ? 200 : 502);
  }

  // Always in the function logs, whatever the delivery channels do.
  console.log('New service request:', lead);

  // Lead delivery, two channels: email to the business (Resend — activates
  // once RESEND_API_KEY is set; sender upgrades via RESEND_FROM_EMAIL when
  // the domain is verified) and the Deyo Dash webhook for monitoring and
  // reporting. Either alone counts as delivered.
  const footer =
    'This notification was sent automatically by the website service-request form. ' +
    "To respond, reply to this email (replies go to the customer's address when " +
    'they provided one) or call the customer directly.';
  const text = [
    `Service: ${lead.service}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || '(not provided)'}`,
    '',
    lead.message || '(no message)',
    '',
    '—',
    footer,
  ].join('\n');
  const html = `
    <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email || '(not provided)')}</p>
    <hr />
    <p>${escapeHtml(lead.message || '(no message)').replace(/\n/g, '<br />')}</p>
    <hr />
    <p style="color:#666;font-size:12px">${footer}</p>
  `;

  const emailResult = await sendEmail({
    to: process.env.CONTACT_TO_EMAIL ?? BIZ.email,
    replyTo: lead.email || undefined,
    subject: `[Website] ${lead.service} — ${lead.name}`,
    text,
    html,
  });
  const emailConfigured = emailResult.error?.name !== 'missing_api_key';
  const emailOk = emailConfigured && !emailResult.error;
  if (emailConfigured && emailResult.error) {
    console.error('Resend error:', emailResult.error);
  }

  const webhookOk = await postLeadToDeyoDash({
    name: lead.name,
    email: lead.email,
    detail: { phone: lead.phone, service: lead.service, message: lead.message },
  });

  // Pre-launch (email unconfigured) the log + webhook are the record, so the
  // visitor still gets a success. Once email is live, only fail the visitor
  // when NO channel delivered — never lose a lead silently.
  if (emailConfigured && !emailOk && !webhookOk) {
    return json(
      { ok: false, error: `We couldn't send your request right now. Please call ${BIZ.phones[0]} and we'll help right away.` },
      500,
    );
  }

  return json({ ok: true });
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
