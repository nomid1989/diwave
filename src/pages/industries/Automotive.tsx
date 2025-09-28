import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function AutomotiveIndustry() {
  const title = 'Автомийки та Automotive — індустрія | Diwave Solutions';
  const description =
    'IoT/SCADA, телеметрія, безготівкові платежі, CRM та лояльність. Єдиний стандарт із локальними налаштуваннями.';
  const url = `${baseUrl}/industries/automotive`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Автомийки та Automotive',
      description:
        'Рішення для автомийок і automotive: IoT/SCADA, телеметрія, платежі, CRM, лояльність.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      audience: { '@type': 'BusinessAudience', name: 'Car wash networks & automotive' },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/industries/automotive/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Автомийки та Automotive</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions/car-washes" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">Пов’язані рішення</a>
                <a href="/projects/car-wash" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Кейс</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage srcFolder="/images/industries/automotive" alt="Автомийки та Automotive" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'IoT/SCADA', d: 'Моніторинг, керування, телеметрія.' },
              { t: 'Платежі', d: 'QR, картки, локальні методи.' },
              { t: 'CRM/Лояльність', d: 'Сегменти, програми, персоналізація.' }
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
            <a href="/industries" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Індустрій</a>
            <a href="/solutions/samwash-qr" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Samwash QR</a>
          </div>
        </section>
      </main>
    </>
  );
}
