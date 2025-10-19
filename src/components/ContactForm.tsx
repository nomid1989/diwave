import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendTelegram } from '@/lib/telegram';
import { sendEmail } from '@/lib/email';
import { formatPageHistory } from '@/lib/pageHistory';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { locale?: 'uk' | 'en' };

// Timezone conversion helper
const convertToLvivTime = (date: string, time: string, timezone: string): string => {
  if (!date || !time || !timezone) return '';

  try {
    const dateTimeStr = `${date}T${time}:00`;
    const userDate = new Date(dateTimeStr + timezone);
    const lvivTime = new Intl.DateTimeFormat('uk-UA', {
      timeZone: 'Europe/Kiev',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(userDate);

    return lvivTime;
  } catch (e) {
    return `${date} ${time} (${timezone})`;
  }
};

const ContactForm: React.FC<Props> = ({ locale: propLocale }) => {
  const [name, setName] = useState('');
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSchedule, setShowSchedule] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [timezone, setTimezone] = useState('+02:00'); // Default: Lviv time
  const [honeypot, setHoneypot] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'partial' | 'err'>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const locale: 'uk' | 'en' = propLocale || (pathname.startsWith('/en') ? 'en' : 'uk');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim().length > 0) return;

    const last = Number(localStorage.getItem('contact:last') || '0');
    if (Date.now() - last < 60_000) {
      setSent('err');
      return;
    }

    setSending(true);
    setSent(null);

    try {
      const contactValue = contactType === 'email' ? email : phone;
      const lvivTimeStr = preferredDate && preferredTime && timezone
        ? convertToLvivTime(preferredDate, preferredTime, timezone)
        : '';

      const preferredTimeInfo = preferredDate || preferredTime
        ? `\n<b>🕐 Preferred time:</b> ${preferredDate} ${preferredTime} (${timezone})` +
          (lvivTimeStr ? `\n<b>🇺🇦 Lviv time:</b> ${lvivTimeStr}` : '')
        : '';

      // Try serverless API first
      try {
        const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || '/api/contact';
        const api = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email: contactValue,
            contactType,
            phone: contactType === 'phone' ? phone : undefined,
            message,
            preferredDate,
            preferredTime,
            timezone,
            lvivTime: lvivTimeStr,
            honeypot
          })
        });

        if (api.ok) {
          const data = await api.json().catch(() => ({}));
          const tgOk = !!data.tg;
          const emOk = !!data.email;
          const okCount = (tgOk ? 1 : 0) + (emOk ? 1 : 0);

          if (okCount === 2) setSent('ok');
          else if (okCount === 1) setSent('partial');
          else setSent('err');

          if (okCount > 0) {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setPreferredDate('');
            setPreferredTime('');
            setShowSchedule(false);
            localStorage.setItem('contact:last', String(Date.now()));
            const status = tgOk && emOk ? 'both' : tgOk ? 'tg' : emOk ? 'email' : 'none';
            const base = locale === 'en' ? '/en' : '';
            navigate(`${base}/thank-you?s=${encodeURIComponent(status)}&n=${encodeURIComponent(name)}&ct=${contactType}`, { replace: true });
            return;
          }
        }
      } catch (e) {
        // fallback below
      }

      // Fallback: client-only
      const contactInfo = contactType === 'email' ? `<b>Email:</b> ${email}` : `<b>Phone:</b> ${phone}`;
      const pageHistory = formatPageHistory();
      const text =
        `<b>📬 New contact request</b>\n` +
        `<b>Name:</b> ${name}\n` +
        contactInfo + preferredTimeInfo + `\n` +
        `<b>Message:</b>\n${message}\n\n` +
        `<b>📊 Page History:</b>\n${pageHistory}`;

      const results = await Promise.allSettled([
        sendTelegram(text),
        sendEmail({ name, email: contactValue, message })
      ]);

      const tgOk = results[0].status === 'fulfilled';
      const emOk = results[1].status === 'fulfilled';
      const okCount = (tgOk ? 1 : 0) + (emOk ? 1 : 0);

      if (okCount === 2) setSent('ok');
      else if (okCount === 1) setSent('partial');
      else setSent('err');

      if (okCount > 0) {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setPreferredDate('');
        setPreferredTime('');
        setShowSchedule(false);
        localStorage.setItem('contact:last', String(Date.now()));
        const status = tgOk && emOk ? 'both' : tgOk ? 'tg' : emOk ? 'email' : 'none';
        const base = locale === 'en' ? '/en' : '';
        navigate(`${base}/thank-you?s=${encodeURIComponent(status)}&n=${encodeURIComponent(name)}&ct=${contactType}`, { replace: true });
      }
    } catch (e) {
      console.error(e);
      setSent('err');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      className="space-y-4 p-6 rounded-xl border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/50 backdrop-blur-2xl shadow-lg"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>Company<input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" /></label>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm  dark:text-white light:text-gray-700 mb-1 font-medium">
          {locale === 'uk' ? "Ім'я" : 'Name'}
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
          placeholder={locale === 'uk' ? "Ваше ім'я" : 'Your name'}
        />
      </div>

      {/* Contact Method */}
      <div>
        <label className="block text-sm  dark:text-white light:text-gray-700 mb-2 font-medium">
          {locale === 'uk' ? 'Спосіб зв\'язку' : 'Contact method'}
        </label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              checked={contactType === 'email'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4"
            />
            <span className=" dark:text-white light:text-gray-700 font-medium">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              checked={contactType === 'phone'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4"
            />
            <span className=" dark:text-white light:text-gray-700 font-medium">{locale === 'uk' ? 'Телефон' : 'Phone'}</span>
          </label>
        </div>

        {contactType === 'email' ? (
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
            placeholder="you@example.com"
          />
        ) : (
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s()-]/g, ''))}
            type="tel"
            required
            className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
            placeholder="+380 50 123 4567"
          />
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm  dark:text-white light:text-gray-700 mb-1 font-medium">
          {locale === 'uk' ? 'Короткий опис' : 'Brief description'}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all resize-none"
          placeholder={locale === 'uk' ? 'Розкажіть про ваш проєкт' : 'Tell us about your project'}
        />
      </div>

      {/* Schedule Toggle Button */}
      <button
        type="button"
        onClick={() => setShowSchedule(!showSchedule)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400/50 bg-cyan-500/5 dark:bg-cyan-500/5 light:bg-blue-50/50 hover:bg-cyan-500/10 dark:hover:bg-cyan-500/10 light:hover:bg-blue-100/50 transition-all group"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📅</span>
          <span className="text-sm light:text-black dark:text-white light:text-gray-900 font-semibold">
            {locale === 'uk' ? 'Вказати зручний час для зв\'язку (опційно)' : 'Specify preferred contact time (optional)'}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 transition-transform ${showSchedule ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Schedule Form - Collapsible */}
      <AnimatePresence>
        {showSchedule && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-cyan-500/20 dark:border-cyan-500/20 light:border-blue-400/30 bg-cyan-500/5 dark:bg-cyan-500/5 light:bg-blue-50/50 p-4 space-y-3">
              <p className="text-xs text-gray-300 dark:text-gray-300 light:text-gray-600">
                {locale === 'uk'
                  ? 'Оберіть дату, час та ваш часовий пояс. Ми автоматично конвертуємо його у львівський час.'
                  : 'Select date, time and your timezone. We\'ll automatically convert it to Lviv time.'}
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-300 dark:text-gray-300 light:text-gray-700 mb-1 font-medium">
                    {locale === 'uk' ? 'Дата' : 'Date'}
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-3 py-2  dark:text-white light:text-gray-900 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-300 dark:text-gray-300 light:text-gray-700 mb-1 font-medium">
                    {locale === 'uk' ? 'Час' : 'Time'}
                  </label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-3 py-2  dark:text-white light:text-gray-900 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-300 dark:text-gray-300 light:text-gray-700 mb-1 font-medium">
                  {locale === 'uk' ? 'Ваш часовий пояс' : 'Your timezone'}
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-3 py-2  dark:text-white light:text-gray-900 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
                >
                  <option value="+02:00">🇺🇦 Kyiv/Lviv (UTC+2)</option>
                  <option value="+01:00">🇪🇺 Central Europe (UTC+1)</option>
                  <option value="+00:00">🇬🇧 London (UTC+0)</option>
                  <option value="-05:00">🇺🇸 New York (UTC-5)</option>
                  <option value="-06:00">🇺🇸 Chicago (UTC-6)</option>
                  <option value="-07:00">🇺🇸 Denver (UTC-7)</option>
                  <option value="-08:00">🇺🇸 Los Angeles (UTC-8)</option>
                  <option value="+08:00">🇨🇳 Beijing/Singapore (UTC+8)</option>
                  <option value="+09:00">🇯🇵 Tokyo (UTC+9)</option>
                  <option value="+10:00">🇦🇺 Sydney (UTC+10)</option>
                </select>
              </div>

              {preferredDate && preferredTime && (
                <div className="mt-2 p-2 rounded bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 border border-emerald-400/30 dark:border-emerald-400/30 light:border-emerald-500">
                  <p className="text-xs text-emerald-200 dark:text-emerald-200 light:text-emerald-800">
                    🇺🇦 <strong>{locale === 'uk' ? 'У Львові це буде:' : 'In Lviv it will be:'}</strong> {convertToLvivTime(preferredDate, preferredTime, timezone)}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={sending}
          className="px-6 py-3 rounded-xl bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-bold shadow-lg hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105"
        >
          <span className="text-white">{sending
            ? (locale === 'uk' ? 'Надсилання…' : 'Sending…')
            : (locale === 'uk' ? 'Надіслати' : 'Send')
          }</span>
        </button>
        {sent === 'ok' && <span className="text-emerald-400">{locale === 'uk' ? 'Надіслано!' : 'Sent!'}</span>}
        {sent === 'partial' && <span className="text-yellow-400">{locale === 'uk' ? 'Надіслано частково' : 'Partially sent'}</span>}
        {sent === 'err' && <span className="text-red-400">{locale === 'uk' ? 'Помилка' : 'Error'}</span>}
      </div>
    </motion.form>
  );
};

export default ContactForm;
