import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function IoTSCADA({ locale }: Props) {
  const content = {
    uk: {
      title: 'IoT & SCADA & автоматизація | Diwave Solutions',
      description: 'Підключення пристроїв, збір і аналіз даних, дії за тригерами. SCADA для моніторингу та керування, інтеграції й безпека.',
      heading: 'IoT & SCADA & автоматизація',
      jsonDescription: 'Побудова IoT‑ланцюжків, SCADA, тригерні сценарії, інтеграції та безпека для підприємств.',
      btnSolutions: 'До каталогу рішень',
      btnCases: 'Кейси',
      feature1Title: 'Підключення',
      feature1Desc: 'IoT‑шлюзи, протоколи, безпечний зв\'язок.',
      feature2Title: 'SCADA',
      feature2Desc: 'Моніторинг станів і керування процесами.',
      feature3Title: 'Тригери',
      feature3Desc: 'Автоматичні дії за подіями та алгоритмами.',
      navSolutions: '← До каталогу Рішень',
      navIndustries: 'Індустрії'
    },
    en: {
      title: 'IoT & SCADA & Automation | Diwave Solutions',
      description: 'Device connectivity, data collection and analysis, trigger-based actions. SCADA for monitoring and control, integrations and security.',
      heading: 'IoT & SCADA & Automation',
      jsonDescription: 'Building IoT chains, SCADA, trigger scenarios, integrations and security for enterprises.',
      btnSolutions: 'All Solutions',
      btnCases: 'Case Studies',
      feature1Title: 'Connectivity',
      feature1Desc: 'IoT gateways, protocols, secure communication.',
      feature2Title: 'SCADA',
      feature2Desc: 'Status monitoring and process control.',
      feature3Title: 'Triggers',
      feature3Desc: 'Automated actions based on events and algorithms.',
      navSolutions: '← Back to Solutions',
      navIndustries: 'Industries'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions/iot-scada`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t.heading,
      description: t.jsonDescription,
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/solutions/iot/cover.jpg`}
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
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                {t.heading}
              </h1>
              <p className="mt-4 text-gray-300">{t.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`${locale === 'en' ? '/en' : ''}/solutions`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">{t.btnSolutions}</a>
                <a href={`${locale === 'en' ? '/en' : ''}/projects`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">{t.btnCases}</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/iot"
                  alt={locale === 'uk' ? 'IoT і SCADA — рішення Diwave' : 'IoT & SCADA — Diwave solutions'}
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
