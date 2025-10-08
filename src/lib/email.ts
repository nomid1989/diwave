export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

/**
 * Sends an email using formsubmit.co as a no-backend relay.
 * For production, replace with your own backend or transactional email API.
 * Requires VITE_TO_EMAIL set in env (recipient email).
 */
export async function sendEmail({ name, email, message }: ContactPayload): Promise<void> {
  const to = (import.meta.env.VITE_TO_EMAIL as string | undefined) || (import.meta.env.VITE_CONTACT_TO_EMAIL as string | undefined);
  if (!to) {
    console.warn('Email is not configured (VITE_TO_EMAIL or VITE_CONTACT_TO_EMAIL missing)');
    return;
  }

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(to)}`;
  const payload = {
    name,
    email,
    message,
    _subject: 'New contact — diwave.company',
    _template: 'table'
  } as Record<string, string>;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Email error: ${res.status} ${body}`);
  }
}
