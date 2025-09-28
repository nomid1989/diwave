export async function sendTelegram(text: string): Promise<void> {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

  if (!token || !chatId) {
    console.warn('Telegram is not configured (VITE_TELEGRAM_BOT_TOKEN/VITE_TELEGRAM_CHAT_ID)');
    return;
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Telegram error: ${res.status} ${body}`);
  }
}
