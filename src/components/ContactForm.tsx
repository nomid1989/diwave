import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendTelegram } from '@/lib/telegram';
import { sendEmail } from '@/lib/email';
import { formatPageHistory } from '@/lib/pageHistory';
import { motion } from 'framer-motion';

type Props = { locale?: 'uk' | 'en' };

const ContactForm: React.FC<Props> = ({ locale: propLocale }) => {
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
  const locale: 'uk' | 'en' = propLocale || (pathname.startsWith('/en') ? 'en' : 'uk');

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
        const contactValue = contactType === 'email' ? email : phone;
        const api = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email: contactValue, contactType, phone: contactType === 'phone' ? phone : undefined, message, honeypot })
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
      const contactValue = contactType === 'email' ? email : phone;
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
      className="space-y-4 p-6 rounded-xl border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/50 backdrop-blur-2xl shadow-lg"
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
        <label className="block text-sm text-white dark:text-white light:text-gray-700 mb-1 font-medium">
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

      <div>
        <label className="block text-sm text-white dark:text-white light:text-gray-700 mb-2 font-medium">
          {locale === 'uk' ? 'Спосіб зв\'язку' : 'Contact method'}
        </label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              checked={contactType === 'email'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-blue-600 bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 focus:ring-cyan-400 dark:focus:ring-cyan-400 light:focus:ring-blue-600"
            />
            <span className="text-white dark:text-white light:text-gray-700 font-medium">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              checked={contactType === 'phone'}
              onChange={(e) => setContactType(e.target.value as 'email' | 'phone')}
              className="w-4 h-4 text-cyan-400 dark:text-cyan-400 light:text-blue-600 bg-white/10 dark:bg-white/10 light:bg-white border-white/20 dark:border-white/20 light:border-gray-300 focus:ring-cyan-400 dark:focus:ring-cyan-400 light:focus:ring-blue-600"
            />
            <span className="text-white dark:text-white light:text-gray-700 font-medium">{locale === 'uk' ? 'Телефон' : 'Phone'}</span>
          </label>
        </div>

        {contactType === 'email' ? (
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
            placeholder={locale === 'uk' ? 'you@example.com' : 'you@example.com'}
            title={locale === 'uk' ? 'Введіть дійсну email адресу' : 'Enter a valid email address'}
          />
        ) : (
          <input
            value={phone}
            onChange={(e) => {
              // International phone mask - allow +, digits, spaces, hyphens, parentheses
              const cleaned = e.target.value.replace(/[^\d+\s()-]/g, '');
              setPhone(cleaned);
            }}
            type="tel"
            required
            pattern="[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}"
            className="w-full rounded-lg bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-gray-300 px-4 py-2.5 text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 light:focus:border-blue-500 focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-400/20 light:focus:ring-blue-500/20 backdrop-blur-sm transition-all"
            placeholder={locale === 'uk' ? '+380 50 123 4567' : '+380 50 123 4567'}
            title={locale === 'uk' ? 'Введіть міжнародний номер телефону (напр: +380 50 123 4567)' : 'Enter international phone number (e.g: +380 50 123 4567)'}
          />
        )}
      </div>

      <div>
        <label className="block text-sm text-white dark:text-white light:text-gray-700 mb-1 font-medium">
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
