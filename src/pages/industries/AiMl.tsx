import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function AiMlIndustry() {
  const title = 'AI/ML та Generative AI | Diwave Industries';
  const description =
    'Інтегруємо AI/ML: RAG на приватних даних, Copilot для процесів, класифікація і прогнозування. Швидкий та безпечний запуск.';
  const url = `${baseUrl}/industries/ai-ml`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/industries/ai-ml/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">AI/ML та Generative AI</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex gap-3">
                <a href="/solutions" className="rounded-md px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90">Дивитись рішення</a>
                <a href="/contact" className="rounded-md px-5 py-2.5 border border-white/30 text-white hover:bg-white/10">Звʼязатись</a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <SmartImage srcFolder="/images/industries/ai-ml" alt="AI/ML" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover"/>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'RAG + Векторний пошук', d: 'Працюємо з вашими приватними даними без витоку.' },
              { t: 'Copilot у процесах', d: 'Автозаповнення, підказки, генерація ідей/звітів.' },
              { t: 'ML‑моделі', d: 'Класифікація, прогноз, рекомендації, фрод.' }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Економія 20–40% часу знаннєвих ролей</li>
              <li>Краще прийняття рішень та персоналізація</li>
              <li>Готовність до масштабування</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
