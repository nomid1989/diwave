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
  const name = params.get('n') || ''; // client name
  const contactType = params.get('ct') || 'email'; // email|phone

  const channelText =
    s === 'both' ? (locale === 'en' ? 'email and Telegram' : 'e‑mail і Telegram') :
    s === 'email' ? 'e‑mail' :
    s === 'tg' ? 'Telegram' :
    locale === 'en' ? 'unknown' : 'невідомо';

  const contactMethod = contactType === 'phone'
    ? (locale === 'en' ? 'phone' : 'телефону')
    : (locale === 'en' ? 'email' : 'e‑mail');

  const title = name
    ? (locale === 'en' ? `Thank you, ${name}!` : `Дякуємо, ${name}!`)
    : (locale === 'en' ? 'Thank you!' : 'Дякуємо!');

  const desc = locale === 'en'
    ? `We received your message via ${channelText}. ${name ? `We'll contact you by ${contactMethod} as you requested.` : 'We will get back shortly.'}`
    : `Ми отримали ваше повідомлення через ${channelText}. ${name ? `Ми зв'яжемося з вами через ${contactMethod}, як ви просили.` : 'Ми звʼяжемося найближчим часом.'}`;

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

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_30%,rgba(16,185,129,0.15),transparent),radial-gradient(1000px_500px_at_80%_70%,rgba(34,211,238,0.12),transparent),radial-gradient(800px_400px_at_20%_60%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />

        <section className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          {/* Success icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 mb-6 shadow-lg shadow-emerald-500/50">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur mb-8">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              to={locale === 'en' ? '/en' : '/'}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:from-emerald-600 hover:to-cyan-600 transition shadow-lg shadow-emerald-500/30"
            >
              {locale === 'en' ? 'Back to Home' : 'На головну'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <Link
              to={locale === 'en' ? '/en/solutions' : '/solutions'}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition backdrop-blur"
            >
              {locale === 'en' ? 'Explore solutions' : 'Переглянути рішення'}
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-12 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur">
            <p className="text-gray-300 text-sm">
              {locale === 'en' ? (
                <>
                  💡 Usually we respond within 2-4 hours during business hours. You can also reach us via{' '}
                  <a href="tg://resolve?phone=380505923772" className="text-cyan-300 hover:text-cyan-200 underline">Telegram</a>,{' '}
                  <a href="https://wa.me/380505923772" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline">WhatsApp</a>, or{' '}
                  <a href="viber://chat?number=%2B380505923772" className="text-cyan-300 hover:text-cyan-200 underline">Viber</a>.
                </>
              ) : (
                <>
                  💡 Зазвичай ми відповідаємо протягом 2-4 годин у робочий час. Ви також можете звʼязатися з нами через{' '}
                  <a href="tg://resolve?phone=380505923772" className="text-cyan-300 hover:text-cyan-200 underline">Telegram</a>,{' '}
                  <a href="https://wa.me/380505923772" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline">WhatsApp</a> або{' '}
                  <a href="viber://chat?number=%2B380505923772" className="text-cyan-300 hover:text-cyan-200 underline">Viber</a>.
                </>
              )}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThankYou;
