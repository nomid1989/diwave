import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function CybersecurityIndustry() {
  const title = 'Кібербезпека | Diwave Industries';
  const description =
    'SIEM/SOAR, IAM, Zero‑Trust, захист API/даних, моніторинг і пентести. Зменшуємо ризики та MTTR.';
  const url = `${baseUrl}/industries/cybersecurity`;

  const jsonLd = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url }];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/industries/cybersecurity/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Кібербезпека</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex gap-3">
                <a href="/solutions" className="rounded-md px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90">Рішення</a>
                <a href="/contact" className="rounded-md px-5 py-2.5 border border-white/30 text-white hover:bg-white/10">Консультація</a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <SmartImage srcFolder="/images/industries/cybersecurity" alt="Cybersecurity" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover"/>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'SIEM/SOAR', d: 'Централізований моніторинг та реагування.' },
              { t: 'IAM & Zero‑Trust', d: 'Мінімальні привілеї, MFA, сегментація.' },
              { t: 'Пентести', d: 'SAST/DAST, Red/Blue teaming, звіти.' }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
