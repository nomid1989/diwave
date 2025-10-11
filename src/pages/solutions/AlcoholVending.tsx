import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function AlcoholVending() {
  const title = 'Алко‑вендинг (hardware + software, KYC) | Diwave Solutions';
  const description =
    'Вікова верифікація (KYC), безготівкові оплати, віддалений моніторинг та телеметрія. Інтеграції з провайдерами верифікації та платіжними системами.';
  const url = `${baseUrl}/solutions/alcohol-vending`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Алко‑вендинг (hardware + software, KYC)',
      description:
        'Комплекс для автоматичного продажу алкоголю: апаратне + ПЗ, KYC, платежі, моніторинг та аналітика.',
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
        image={`${baseUrl}/images/solutions/alcohol-vending/vending-mashines-snaks.png`}
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
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-lg">🏪</span>
                <span className="text-sm text-cyan-300 font-medium">Вендингові рішення</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Алко‑вендинг з KYC верифікацією
              </h1>
              <p className="mt-4 text-gray-300 text-lg">{description}</p>

              <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 backdrop-blur">
                <p className="text-white font-semibold mb-2">Захист IP65</p>
                <p className="text-gray-300 text-sm">Повна захищеність від пилу та водяних бризок. Сенсорний екран 19" високої яскравості для установки на вулиці.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25">Замовити консультацію</a>
                <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">До каталогу рішень</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/20">
                <img
                  src="/images/projects/alcohol/vending-mashines-snaks.png"
                  alt="Вендинговий апарат з сенсорним екраном та захистом IP65"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'KYC', d: 'Вікова верифікація та контроль доступу.' },
              { t: 'Платежі', d: 'Картки, QR, локальні методи, Apple/Google Pay.' },
              { t: 'Моніторинг', d: 'Телеметрія, інциденти, інвентаризація.' }
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
