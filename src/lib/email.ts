import { Resend } from 'resend';

// Instantiated lazily inside sendEmail: the Resend constructor throws when no
// API key is available, and this module must stay importable with email
// unconfigured — the contact route ships ahead of the Resend setup.
let resend: Resend | null = null;

// `onboarding@resend.dev` works with any Resend API key for testing (it only
// delivers to the account owner's email). Swap RESEND_FROM_EMAIL to a verified
// sending domain (holeinoneplumbing.com) once it's set up in Resend.
const DEFAULT_FROM =
  process.env.RESEND_FROM_EMAIL ?? 'Hole in One Plumbing <onboarding@resend.dev>';

export type SendEmailParams = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string | string[];
};

/** Thin wrapper around the Resend client; reports a typed error when the
 * API key isn't configured yet instead of throwing. */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  from = DEFAULT_FROM,
  replyTo,
}: SendEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    return {
      data: null,
      error: {
        name: 'missing_api_key' as const,
        message: 'RESEND_API_KEY is not configured',
      },
    };
  }
  resend ??= new Resend(process.env.RESEND_API_KEY);
  return resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
    replyTo,
  });
}
