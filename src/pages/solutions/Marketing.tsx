import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, combineSchemas } from '@/lib/structuredData';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function Marketing() {
  const title = 'SEO/GEO‑SEO, SMM, Ads, аналітика | Diwave Solutions';
  const description =
    'Органіка, локальне SEO, таргетинг у соцмережах, performance‑реклама та end‑to‑end аналітика для зростання бізнесу.';
  const url = `${baseUrl}/solutions/marketing`;

  const jsonLd = combineSchemas(
    getBreadcrumbSchema([
      { name: 'Головна', url: baseUrl },
      { name: 'Рішення', url: `${baseUrl}/solutions` },
      { name: 'Маркетинг', url }
    ], 'uk'),
    getServiceSchema({
      name: 'SEO/GEO-SEO, SMM, Ads і Аналітика',
      description: 'Комплексний digital-маркетинг: технічне та локальне SEO, контент-маркетинг, SMM (Facebook/Instagram/TikTok), Google/Facebook Ads, end-to-end аналітика. Підвищення органічного трафіку на 150-300%, ROI 300-500%, ROAS 4-8x.',
      serviceType: 'Digital Marketing',
      areaServed: ['Ukraine', 'European Union', 'United States'],
      provider: 'Diwave Solutions'
    }, 'uk'),
    getFAQSchema([
      {
        question: 'Які послуги входять в digital-маркетинг від Diwave?',
        answer: 'Комплекс послуг: технічне SEO (швидкість, структура, мікророзмітка), контент-маркетинг, локальне GEO-SEO, SMM (соцмережі: Facebook, Instagram, TikTok, LinkedIn), performance-реклама (Google Ads, Facebook Ads, TikTok Ads), end-to-end аналітика (GA4, GTM, BigQuery), CRO (оптимізація конверсій).'
      },
      {
        question: 'Скільки коштує SEO просування сайту?',
        answer: 'Залежить від конкуренції та цілей: базове технічне SEO аудит - від $500, комплексне SEO просування (технічна оптимізація + контент + посилання) - від $2,000/міс, локальне GEO-SEO для бізнесу - від $1,000/міс. Перші результати через 2-3 місяці, стійкі результати через 6-9 місяців.'
      },
      {
        question: 'Який ROI від контекстної реклами Google Ads?',
        answer: 'Типовий ROI від Google Ads кампаній: e-commerce - 300-500%, B2B послуги - 200-400%, локальний бізнес - 400-600%. ROAS (Return on Ad Spend) зазвичай 4-8x. Залежить від ніші, конкуренції, якості посадкових сторінок, CRO оптимізації. Мінімальний бюджет для тесту - від $500/міс.'
      },
      {
        question: 'Як виміряти ефективність маркетингу через end-to-end аналітику?',
        answer: 'End-to-end аналітика відстежує весь шлях клієнта від першого дотику до покупки: джерело трафіку (Google/Facebook/Direct), взаємодія на сайті, конверсії, CRM дані, фактичний дохід. Інструменти: Google Analytics 4, Google Tag Manager, BigQuery, CRM інтеграції. Дає повне розуміння ROI кожного каналу та attribution моделі.'
      },
      {
        question: 'Чи можна поєднати SEO та контекстну рекламу?',
        answer: 'Так, це найефективніша стратегія! SEO дає довгостроковий безкоштовний трафік (результати через 3-6 місяців, стабільні), Google Ads - миттєві результати (сьогодні запустили - завтра продажі), але платно. Поєднання дає: швидкий старт через Ads + органічне зростання через SEO = максимальне охоплення SERP та нижча ціна за лід.'
      }
    ], 'uk')
  );

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/solutions/marketing/cover.jpg`}
        locale="uk"
        alternates={[{ hrefLang: 'uk', href: url }]}
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
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                SEO/GEO‑SEO, SMM, Ads, аналітика
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">До каталогу рішень</a>
                <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Кейси</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/marketing"
                  alt="Маркетинг — рішення Diwave"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'SEO', d: 'Технічне, контентне, локальне GEO‑SEO.' },
              { t: 'SMM/Ads', d: 'Facebook/Instagram, YouTube, Google Ads.' },
              { t: 'Аналітика', d: 'E2E‑метрики, атрибуція, ROAS.' }
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
            <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Рішень</a>
            <a href="/industries" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Індустрії</a>
          </div>
        </section>
      </main>
    </>
  );
}
