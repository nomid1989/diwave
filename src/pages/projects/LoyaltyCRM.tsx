import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function LoyaltyCRMProject() {
  const title = 'Лояльність та CRM — кейс | Diwave Solutions';
  const description =
    'Бонусні програми, сегментація, персоналізація, омніканальні кампанії. Зростання LTV і частоти покупок.';
  const url = `${baseUrl}/projects/loyalty-crm`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс: Лояльність та CRM',
      description:
        'Впровадження CRM і програм лояльності з персоналізацією і наскрізною аналітикою.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/loyalty/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Лояльність та CRM</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions/marketing" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">Перейти до рішення</a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Результати</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage srcFolder="/images/projects/loyalty" alt="Кейс: CRM і лояльність" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="results" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { m: '↑', t: 'LTV' },
                { m: '↑', t: 'Частота покупок' },
                { m: '↓', t: 'Витрати на залучення' }
              ].map((r) => (
                <div key={r.t} className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                  <div className="text-2xl text-white font-semibold">{r.m}</div>
                  <div className="text-xs text-gray-300">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Проєктів</a>
            <a href="/solutions/marketing" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Пов’язане рішення</a>
          </div>
        </section>
      </main>
    </>
  );
}
