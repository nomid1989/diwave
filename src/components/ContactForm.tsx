import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendTelegram } from '@/lib/telegram';
import { sendEmail } from '@/lib/email';
import { formatPageHistory } from '@/lib/pageHistory';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [contactType, setContactType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'partial' | 'err'>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const locale: 'uk' | 'en' = pathname.startsWith('/en') ? 'en' : 'uk';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim().length > 0) {
      // likely bot
      return;
    }
    const last = Number(localStorage.getItem('contact:last') || '0');
    if (Date.now() - last < 60_000) {
      setSent('err');
      return;
    }
    setSending(true);
    setSent(null);
    try {
      // Try serverless API first for reliable delivery (Telegram + SMTP)
      try {
        const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || '/api/contact';
        const api = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, honeypot })
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
            localStorage.setItem('contact:last', String(Date.now()));
            const status = tgOk && emOk ? 'both' : tgOk ? 'tg' : emOk ? 'email' : 'none';
            const base = locale === 'en' ? '/en' : '';
            navigate(`${base}/thank-you?s=${encodeURIComponent(status)}`, { replace: true });
            return;
          }
        }
      } catch (e) {
        // fall back to client-only channels below
      }

      // Fallback: client-only Telegram and Email
      const contactInfo = contactType === 'email' ? `<b>Email:</b> ${email}` : `<b>Phone:</b> ${phone}`;
      const pageHistory = formatPageHistory();
      const text =
        `<b>New contact request</b>\n` +
        `<b>Name:</b> ${name}\n` +
        contactInfo + `\n` +
        `<b>Message:</b>\n${message}\n\n` +
        `<b>Page History:</b>\n${pageHistory}`;
      const results = await Promise.allSettled([
        sendTelegram(text),
        sendEmail({ name, email: contactType === 'email' ? email : phone, message })
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
        localStorage.setItem('contact:last', String(Date.now()));
        const status = tgOk && emOk ? 'both' : tgOk ? 'tg' : emOk ? 'email' : 'none';
        const base = locale === 'en' ? '/en' : '';
        navigate(`${base}/thank-you?s=${encodeURIComponent(status)}`, { replace: true });
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
      className="space-y-4 p-6 rounded-xl border border-cyan-400/20 bg-black/40"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Honeypot field (hidden) */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          {locale === 'uk' ? "Ім'я" : 'Name'}
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          placeholder={locale === 'uk' ? "Ваше ім'я" : 'Your name'}
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">
          {locale === 'uk' ? 'Спосіб зв\'язку' : 'Contact method'}
        </label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              checked={contactType === 'email'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4 text-cyan-400 bg-gray-900 border-cyan-400/20 focus:ring-cyan-400"
            />
            <span className="text-gray-300">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              checked={contactType === 'phone'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4 text-cyan-400 bg-gray-900 border-cyan-400/20 focus:ring-cyan-400"
            />
            <span className="text-gray-300">{locale === 'uk' ? 'Телефон' : 'Phone'}</span>
          </label>
        </div>

        {contactType === 'email' ? (
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            placeholder="you@example.com"
          />
        ) : (
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            required
            className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            placeholder="+380 50 123 4567"
          />
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-1">
          {locale === 'uk' ? 'Короткий опис' : 'Brief description'}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          placeholder={locale === 'uk' ? 'Розкажіть про ваш проєкт' : 'Tell us about your project'}
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={sending}
          className="px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending
            ? (locale === 'uk' ? 'Надсилання…' : 'Sending…')
            : (locale === 'uk' ? 'Надіслати' : 'Send')
          }
        </button>
        {sent === 'ok' && (
          <span className="text-emerald-400">
            {locale === 'uk' ? 'Надіслано!' : 'Sent (Email + Telegram)!'}
          </span>
        )}
        {sent === 'partial' && (
          <span className="text-yellow-400">
            {locale === 'uk' ? 'Надіслано одним каналом' : 'Sent via one channel'}
          </span>
        )}
        {sent === 'err' && (
          <span className="text-red-400">
            {locale === 'uk' ? 'Помилка. Спробуйте ще раз.' : 'Error. Try again.'}
          </span>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;
