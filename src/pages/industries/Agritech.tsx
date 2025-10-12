import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function AgritechIndustry({ locale }: Props) {
  const content = {
    uk: {
      title: 'Agritech & Precision Farming | Diwave Industries',
      description: 'Дрони та сенсори, NDVI/карти полів, аналітика вологості/живлення, планування внесень.',
      heading: 'Agritech & Precision Farming',
      btnSolutions: 'Рішення',
      btnContact: 'Зв\'язатись'
    },
    en: {
      title: 'Agritech & Precision Farming | Diwave Industries',
      description: 'Drones and sensors, NDVI/field maps, moisture/nutrient analytics, precision application planning.',
      heading: 'Agritech & Precision Farming',
      btnSolutions: 'Solutions',
      btnContact: 'Contact'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/industries/agritech`;

  const jsonLd = [{
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.heading,
    description: t.description,
    url
  }];

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/industries/agritech/cover.jpg`}
        locale={locale}
        jsonLd={jsonLd}
      />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">{t.heading}</h1>
              <p className="mt-4 text-gray-300">{t.description}</p>
              <div className="mt-6 flex gap-3">
                <a href={`${locale === 'en' ? '/en' : ''}/solutions`} className="rounded-md px-5 py-2.5 bg-white text-black font-medium hover:bg-white/90">{t.btnSolutions}</a>
                <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="rounded-md px-5 py-2.5 border border-white/30 text-white hover:bg-white/10">{t.btnContact}</a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <SmartImage srcFolder="/images/industries/agritech" alt="Agritech" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
