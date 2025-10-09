import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
// (цей файл уже створено вище)
const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function Ecommerce() {
  const title = 'E‑commerce та сайти (B2B/B2C) | Diwave Solutions';
  const description =
    'CMS/ERP інтеграції, SEO/GEO‑SEO, оптимізація конверсій. Побудова e‑commerce під навантаження з аналітикою та автоматизацією процесів.';
  const url = `${baseUrl}/solutions/ecommerce`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'E‑commerce та сайти (B2B/B2C)',
      description:
        'Інтеграції з CMS/ERP, SEO/GEO‑SEO, оптимізація конверсій, аналітика та автоматизація для інтернет‑магазинів.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/solutions/ecommerce/cover.jpg`}
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
                E‑commerce та сайти (B2B/B2C)
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>

              {/* Plantpol Highlight */}
              <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌱</span>
                  <h3 className="text-lg font-semibold text-white">Кейс: Plantpol</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Один з найбільших дистриб'юторів агротехнологій в Україні. Ми розробили B2B-портал з інтеграцією 1С, що автоматизував роботу з <strong className="text-emerald-400">5000+ SKU</strong> і скоротив штат менеджерів на <strong className="text-emerald-400">75%</strong> (з 20 до 5 осіб).
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">5000+</div>
                    <div className="text-xs text-gray-400">SKU в каталозі</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-400">-75%</div>
                    <div className="text-xs text-gray-400">операційних витрат</div>
                  </div>
                </div>
                <a href="/projects/ecommerce" className="inline-flex items-center gap-2 mt-4 text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                  Детальніше про кейс →
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">До каталогу рішень</a>
                <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Кейси</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/ecommerce"
                  alt="E‑commerce — рішення Diwave"
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
              { t: 'CMS/ERP', d: 'Глибокі інтеграції та синхронізація даних.' },
              { t: 'SEO/GEO‑SEO', d: 'Структура, контент, локальні видачі.' },
              { t: 'CRO', d: 'Оптимізація конверсій і швидкодії.' }
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
