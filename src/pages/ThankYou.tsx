import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

function useLocaleFromPathname(pathname: string): 'uk' | 'en' {
  return pathname.startsWith('/en') ? 'en' : 'uk';
}

const ThankYou: React.FC = () => {
  const { pathname, search } = useLocation();
  const locale = useLocaleFromPathname(pathname);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/thank-you`;

  const params = new URLSearchParams(search);
  const s = params.get('s'); // both|email|tg|none
  const channelText =
    s === 'both' ? (locale === 'en' ? 'email and Telegram' : 'e‑mail і Telegram') :
    s === 'email' ? 'e‑mail' :
    s === 'tg' ? 'Telegram' :
    locale === 'en' ? 'unknown' : 'невідомо';

  const title = locale === 'en' ? 'Thank you!' : 'Дякуємо!';
  const desc = locale === 'en'
    ? `We received your message via ${channelText}. We will get back shortly.`
    : `Ми отримали ваше повідомлення через ${channelText}. Ми звʼяжемося найближчим часом.`;

  return (
    <>
      <SEO
        title={locale === 'en' ? 'Thank you — Diwave' : 'Дякуємо — Diwave'}
        description={desc}
        url={url}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          url
        }]}
      />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">{title}</h1>
        <p className="text-gray-300 mt-3">{desc}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to={locale === 'en' ? '/en' : '/'} className="inline-flex items-center rounded-md px-5 py-2 bg-white text-black font-semibold hover:bg-white/90 transition">
            {locale === 'en' ? 'Back to Home' : 'На головну'}
          </Link>
          <Link to={locale === 'en' ? '/en/contact' : '/contact'} className="inline-flex items-center rounded-md px-5 py-2 border border-white/20 text-white hover:bg-white/10 transition">
            {locale === 'en' ? 'Send another message' : 'Надіслати ще одне'}
          </Link>
          <Link to={locale === 'en' ? '/en/book' : '/book'} className="inline-flex items-center rounded-md px-5 py-2 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/10 transition">
            {locale === 'en' ? 'Book a call' : 'Записатися в календар'}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
