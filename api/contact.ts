import nodemailer from 'nodemailer';

// Helper: ensure string env
function env(name: string, fallback = ''): string {
  const v = process.env[name];
  return typeof v === 'string' ? v : fallback;
}

async function sendTelegramServer(text: string): Promise<boolean> {
  const token = env('TELEGRAM_BOT_TOKEN') || env('VITE_TELEGRAM_BOT_TOKEN');
  const chatId = env('TELEGRAM_CHAT_ID') || env('VITE_TELEGRAM_CHAT_ID');
  if (!token || !chatId) return false;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true })
  });
  if (!res.ok) return false;
  const data = await res.json().catch(() => null) as any;
  return !!data?.ok;
}

async function sendEmailServer({ name, email, message }: { name: string; email: string; message: string; }): Promise<boolean> {
  const host = env('SMTP_HOST');
  const port = Number(env('SMTP_PORT', '465')) || 465;
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  const to = env('TO_EMAIL') || env('VITE_TO_EMAIL') || env('VITE_CONTACT_TO_EMAIL');
  const from = env('FROM_EMAIL') || user || 'no-reply@diwave.company';

  if (!host || !user || !pass || !to) return false;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass }
  });

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.5;color:#0b0b0b">
      <h2 style="margin:0 0 12px">New contact — diwave.company</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 8px;color:#555">Name</td><td style="padding:4px 8px"><b>${escapeHtml(name)}</b></td></tr>
        <tr><td style="padding:4px 8px;color:#555">Email</td><td style="padding:4px 8px">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 8px;color:#555">Message</td><td style="padding:4px 8px;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from,
      to,
      subject: 'New contact — diwave.company',
      html,
      replyTo: email
    });
    return true;
  } catch {
    return false;
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

export default async function handler(req: any, res: any) {
  // CORS headers to allow cross-origin calls from SPA if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name = '', email = '', message = '', honeypot = '' } = (req.body || {});

    // Basic validation
    if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
      // Pretend success to bots
      return res.status(200).json({ ok: true, tg: false, email: false, bot: true });
    }
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    const tgText = `<b>New contact request</b>\n<b>Name:</b> ${escapeHtml(name)}\n<b>Email:</b> ${escapeHtml(email)}\n<b>Message:</b>\n${escapeHtml(message)}`;

    const [tgOk, emOk] = await Promise.all([
      sendTelegramServer(tgText).catch(() => false),
      sendEmailServer({ name, email, message }).catch(() => false)
    ]);

    const ok = tgOk || emOk;
    return res.status(ok ? 200 : 502).json({ ok, tg: tgOk, email: emOk });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || 'Server error' });
  }
}
