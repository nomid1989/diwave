export async function sendTelegram(text: string): Promise<void> {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

  if (!token || !chatId) {
    console.warn('Telegram is not configured (VITE_TELEGRAM_BOT_TOKEN/VITE_TELEGRAM_CHAT_ID)');
    return;
  }

  // Many browsers block Telegram Bot API with CORS if using JSON POST.
  // Use a CORS-safe strategy: fire-and-forget GET with mode=no-cors (no preflight),
  // and fallback to POST with FormData and no custom headers.
  const base = `https://api.telegram.org/bot${token}/sendMessage`;
  const url = `${base}?chat_id=${encodeURIComponent(chatId)}&text=${encodeURIComponent(text)}&parse_mode=HTML`;

  try {
    await fetch(url, { method: 'GET', mode: 'no-cors', keepalive: true });
    // Response will be opaque; we cannot read status but the request is sent.
    return;
  } catch (e) {
    console.warn('Telegram GET no-cors failed, trying FormData POST');
  }

  const form = new FormData();
  form.append('chat_id', chatId);
  form.append('text', text);
  form.append('parse_mode', 'HTML');
  // Fire-and-forget POST with FormData (no headers → no preflight)
  try {
    await fetch(base, { method: 'POST', mode: 'no-cors', body: form, keepalive: true });
  } catch {
    // one more very short retry
    try {
      await fetch(base, { method: 'POST', mode: 'no-cors', body: form, keepalive: true });
    } catch {}
  }
}
