import { useState } from 'react';
import { Icon } from './icons';
import { BIZ, SERVICES } from '@/data/site';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: '', phone: '', email: '', service: '', message: '' };

/* Reusable "Request Service" block. Hydrated island. Posts to the
   /api/contact Pages Function (which runs on-demand on Cloudflare). */
export function RequestServiceForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): Errors => {
    const er: Errors = {};
    if (!form.name.trim()) er.name = 'Please enter your name';
    if (!/[0-9]{7,}/.test(form.phone.replace(/\D/g, ''))) er.phone = 'Enter a valid phone number';
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (!form.service) er.service = 'Choose a service';
    return er;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="rounded-[22px] border border-line bg-white p-9 text-center shadow-lift">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-accent-tint text-accent-600">
          <Icon name="check" size={30} />
        </div>
        <h3 className="mb-2.5 text-2xl">Request received!</h3>
        <p className="mx-auto mb-5 max-w-sm text-slate-soft">
          Thanks, {form.name.split(' ')[0] || 'there'}. We'll reach out shortly to confirm your
          appointment. Need us sooner? Call {BIZ.phones[0]}.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setStatus('idle');
          }}
          className="btn btn-ghost"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] border border-line bg-white p-8 shadow-lift sm:p-9">
      <form onSubmit={submit} noValidate>
        <h3 className="mb-1.5 text-[23px]">Request your appointment</h3>
        <p className="mb-5 text-[14.5px] text-slate-soft">
          We'll confirm by phone — usually same day.
        </p>

        <Field label="Full name" error={errors.name}>
          <input
            className={inputClass}
            value={form.name}
            onChange={set('name')}
            placeholder="Jane Smith"
            autoComplete="name"
          />
        </Field>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Phone" error={errors.phone}>
            <input
              className={inputClass}
              value={form.phone}
              onChange={set('phone')}
              placeholder="(972) 555-0123"
              inputMode="tel"
              autoComplete="tel"
            />
          </Field>
          <Field label="Email (optional)" error={errors.email}>
            <input
              className={inputClass}
              value={form.email}
              onChange={set('email')}
              placeholder="jane@email.com"
              inputMode="email"
              autoComplete="email"
            />
          </Field>
        </div>

        <Field label="Service needed" error={errors.service}>
          <select
            className={`${inputClass} appearance-none pr-10`}
            value={form.service}
            onChange={set('service')}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.key} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Emergency / burst pipe">Emergency / burst pipe</option>
            <option value="Other">Something else</option>
          </select>
        </Field>

        <Field label="What's going on? (optional)">
          <textarea
            className={`${inputClass} min-h-24 resize-y`}
            value={form.message}
            onChange={set('message')}
            placeholder="Describe the problem…"
          />
        </Field>

        {status === 'error' && (
          <p className="mb-3 text-[14px] font-semibold text-accent-700">
            Something went wrong sending your request. Please call {BIZ.phones[0]} and we'll help
            right away.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn btn-accent btn-lg mt-1.5 w-full disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : 'Request appointment'}
          {status !== 'sending' && <Icon name="arrow" size={18} />}
        </button>
      </form>
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border-[1.5px] border-line-strong bg-paper px-4 py-3 text-[15.5px] text-ink outline-none transition focus:border-navy-500 focus:ring-[3px] focus:ring-navy-500/15';

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block font-display text-[14px] font-semibold text-slate-strong">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[13px] font-semibold text-accent-700">{error}</span>}
    </label>
  );
}
