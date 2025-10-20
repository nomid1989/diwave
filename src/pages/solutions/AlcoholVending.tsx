import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import { getBreadcrumbSchema, getProductSchema, getServiceSchema, combineSchemas } from '@/lib/structuredData';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function AlcoholVending({ locale }: Props) {
  const content = {
    uk: {
      title: 'Алко‑вендинг (hardware + software, KYC) | Diwave Solutions',
      description: 'Вікова верифікація (KYC), безготівкові оплати, віддалений моніторинг та телеметрія. Інтеграції з провайдерами верифікації та платіжними системами.',
      jsonDescription: 'Комплекс для автоматичного продажу алкоголю: апаратне + ПЗ, KYC, платежі, моніторинг та аналітика.',
      badge: 'Вендингові рішення',
      heading: 'Алко‑вендинг з KYC верифікацією',
      protectionTitle: 'Захист IP65',
      protectionDesc: 'Повна захищеність від пилу та водяних бризок. Сенсорний екран 19" високої яскравості для установки на вулиці.',
      btnConsultation: 'Замовити консультацію',
      btnSolutions: 'До каталогу рішень',
      feature1Title: 'KYC',
      feature1Desc: 'Вікова верифікація та контроль доступу.',
      feature2Title: 'Платежі',
      feature2Desc: 'Картки, QR, локальні методи, Apple/Google Pay.',
      feature3Title: 'Моніторинг',
      feature3Desc: 'Телеметрія, інциденти, інвентаризація.',
      navSolutions: '← До каталогу Рішень',
      navIndustries: 'Індустрії'
    },
    en: {
      title: 'Alcohol Vending (hardware + software, KYC) | Diwave Solutions',
      description: 'Age verification (KYC), cashless payments, remote monitoring and telemetry. Integrations with verification providers and payment systems.',
      jsonDescription: 'Complete alcohol vending system: hardware + software, KYC, payments, monitoring and analytics.',
      badge: 'Vending Solutions',
      heading: 'Alcohol Vending with KYC Verification',
      protectionTitle: 'IP65 Protection',
      protectionDesc: 'Full protection from dust and water splashes. 19" high-brightness touchscreen for outdoor installation.',
      btnConsultation: 'Request Consultation',
      btnSolutions: 'All Solutions',
      feature1Title: 'KYC',
      feature1Desc: 'Age verification and access control.',
      feature2Title: 'Payments',
      feature2Desc: 'Cards, QR, local methods, Apple/Google Pay.',
      feature3Title: 'Monitoring',
      feature3Desc: 'Telemetry, incidents, inventory management.',
      navSolutions: '← Back to Solutions',
      navIndustries: 'Industries'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions/alcohol-vending`;

  const jsonLd = combineSchemas(
    getBreadcrumbSchema([
      { name: locale === 'uk' ? 'Головна' : 'Home', url: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
      { name: locale === 'uk' ? 'Рішення' : 'Solutions', url: `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions` },
      { name: locale === 'uk' ? 'Алко-вендинг' : 'Alcohol Vending', url }
    ], locale),
    getServiceSchema({
      name: locale === 'uk' ? 'Алко-вендинг з KYC верифікацією' : 'Alcohol Vending with KYC Verification',
      description: locale === 'uk'
        ? 'Комплексне рішення для автоматичного продажу алкоголю: вікова верифікація (KYC), безготівкові оплати, телеметрія, IP65 захист. Інтеграції з провайдерами верифікації, платіжними системами та системами моніторингу.'
        : 'Complete alcohol vending solution: age verification (KYC), cashless payments, telemetry, IP65 protection. Integrations with verification providers, payment systems and monitoring systems.',
      serviceType: 'Vending Machine System',
      areaServed: ['Ukraine', 'European Union'],
      provider: 'Diwave Solutions'
    }, locale),
    getProductSchema({
      name: locale === 'uk' ? 'Вендинговий автомат з KYC та IP65' : 'Vending Machine with KYC and IP65',
      description: locale === 'uk'
        ? '19" сенсорний екран високої яскравості, IP65 захист, KYC верифікація, безконтактна оплата (NFC, QR, картки), віддалений IoT-моніторинг, система охолодження/нагріву продукції.'
        : '19" high-brightness touch screen, IP65 protection, KYC verification, contactless payment (NFC, QR, cards), remote IoT monitoring, product cooling/heating system.',
      image: `${baseUrl}/images/solutions/alcohol-vending/hero.jpeg`,
      brand: 'Diwave Vending',
      sku: 'VENDING-KYC-IP65',
      category: 'Vending Machine',
      price: 15000,
      currency: 'USD',
      availability: 'PreOrder',
      url,
      rating: { value: 4.6, count: 23 }
    }, locale)
  );

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/solutions/alcohol-vending/vending-mashines-snaks.png`}
        locale={locale}
        alternates={[{ hrefLang: locale, href: url }]}
        jsonLd={jsonLd}
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-lg">🏪</span>
                <span className="text-sm text-cyan-300 font-medium">{t.badge}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                {t.heading}
              </h1>
              <p className="mt-4 text-gray-300 text-lg">{t.description}</p>

              <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 backdrop-blur">
                <p className="text-white font-semibold mb-2">{t.protectionTitle}</p>
                <p className="text-gray-300 text-sm">{t.protectionDesc}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25">{t.btnConsultation}</a>
                <a href={`${locale === 'en' ? '/en' : ''}/solutions`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">{t.btnSolutions}</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/20">
                <SmartImage
                  sources={['/images/solutions/alcohol-vending/hero.png']}
                  alt={locale === 'uk' ? 'Вендинговий апарат для продажу алкоголю з KYC верифікацією' : 'Alcohol vending machine with KYC verification'}
                  className="w-full h-auto"
                  imgClassName="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: t.feature1Title, d: t.feature1Desc },
              { t: t.feature2Title, d: t.feature2Desc },
              { t: t.feature3Title, d: t.feature3Desc }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`${locale === 'en' ? '/en' : ''}/solutions`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">{t.navSolutions}</a>
            <a href={`${locale === 'en' ? '/en' : ''}/industries`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">{t.navIndustries}</a>
          </div>
        </section>
      </main>
    </>
  );
}
