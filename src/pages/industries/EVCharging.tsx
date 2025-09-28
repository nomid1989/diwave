import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function EVChargingIndustry() {
  const title = 'EV Charging & e‑Mobility | Diwave Industries';
  const description =
    'OCPP‑платформа, балансування навантажень, білінг/підписки, карти/навігація, мобільні додатки.';
  const url = `${baseUrl}/industries/ev-charging`;

  const jsonLd = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, url }];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/industries/ev-charging/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">EV Charging & e‑Mobility</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex gap-3">
                <a href="/solutions" className="rounded-md px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90">Рішення</a>
                <a href="/contact" className="rounded-md px-5 py-2.5 border border-white/30 text-white hover:bg-white/10">Звʼязатись</a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <SmartImage srcFolder="/images/industries/ev-charging" alt="EV Charging" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
