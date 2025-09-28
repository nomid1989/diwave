import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const ThankYouPage: React.FC<Props> = ({ locale }) => {
  const prefix = locale === 'en' ? '/en' : '';
  const url = `${baseUrl}${prefix}/thank-you`;

  useEffect(() => {
    try {
      // @ts-ignore
      window.dataLayer?.push({ event: 'thank_you_view', locale });
    } catch {}
  }, [locale]);

  const dict = {
    uk: {
      title: 'Дякуємо! Повідомлення надіслано',
      subtitle: 'Ми звʼяжемося з вами найближчим часом.',
      home: 'На головну',
      solutions: 'Переглянути рішення',
      contact: 'Ще одне повідомлення'
    },
    en: {
      title: 'Thank you! Message sent',
      subtitle: 'We will get back to you shortly.',
      home: 'Go home',
      solutions: 'See solutions',
      contact: 'Send another message'
    }
  }[locale];

  return (
    <>
      <SEO
        title={dict.title}
        description={dict.subtitle}
        url={url}
        image={`${baseUrl}/images/home/hero.webp`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/thank-you` },
          { hrefLang: 'en', href: `${baseUrl}/en/thank-you` }
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: dict.title,
            url
          }
        ]}
      />
      <main className="relative min-h-[70vh] overflow-hidden">
        <SmartImage srcFolder="/images/home" alt="Background" asBackground className="absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_520px_at_10%_-10%,rgba(34,211,238,0.22),transparent),radial-gradient(900px_480px_at_90%_0%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[1.5px]" aria-hidden />
        <section className="relative mx-auto max-w-3xl px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">{dict.title}</h1>
            <p className="mt-3 text-gray-300">{dict.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${prefix}/`} className="inline-flex items-center rounded-md px-5 py-2 bg-white text-black font-semibold hover:bg-white/90 transition">
                {dict.home}
              </a>
              <a href={`${prefix}/solutions`} className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition">
                {dict.solutions}
              </a>
              <a href={`${prefix}/contact`} className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition">
                {dict.contact}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYouPage;
