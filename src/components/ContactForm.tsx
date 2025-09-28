import React, { useState } from 'react';
import { sendTelegram } from '@/lib/telegram';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactForm: React.FC<{ locale?: 'uk' | 'en' }> = ({ locale }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const effectiveLocale: 'uk' | 'en' = locale ?? (pathname.startsWith('/en') ? 'en' : 'uk');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(null);
    try {
      const text =
        `<b>New contact request</b>\n` +
        `<b>Name:</b> ${name}\n` +
        `<b>Email:</b> ${email}\n` +
        `<b>Message:</b>\n${message}`;
      await sendTelegram(text);
      // Analytics
      try {
        // @ts-ignore
        window.dataLayer?.push({ event: 'form_submit', form: 'contact', locale: effectiveLocale });
      } catch {}
      setSent('ok');
      setName('');
      setEmail('');
      setMessage('');
      navigate(effectiveLocale === 'en' ? '/en/thank-you' : '/thank-you', { replace: true });
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
      <div>
        <label className="block text-sm text-gray-300 mb-1">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-1">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full rounded-md bg-gray-900 border border-cyan-400/20 px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
          placeholder="Tell us about your project"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={sending}
          className="px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? 'Sending…' : 'Send'}
        </button>
        {sent === 'ok' && <span className="text-emerald-400">Sent!</span>}
        {sent === 'err' && <span className="text-red-400">Error. Try again.</span>}
      </div>
    </motion.form>
  );
};

export default ContactForm;
