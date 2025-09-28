import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeader from '@/components/sections/SectionHeader';
import { getSolutions } from '@/lib/content/solutions';
import { SolutionsQRSection } from '@/content/QRSections';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const Solutions: React.FC<Props> = ({ locale }) => {
  const content = getSolutions(locale);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: content.title,
      url
    },
    ...content.items.map((s) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      description: s.description,
      areaServed: ['UA', 'EU'],
      provider: {
        '@type': 'Organization',
        name: 'Diwave',
        url: baseUrl
      }
    })),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: content.title, item: url }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={`Diwave — ${content.title}`}
        description={content.intro}
        url={url}
        image={`${baseUrl}/images/solutions/cover.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/solutions` },
          { hrefLang: 'en', href: `${baseUrl}/en/solutions` }
        ]}
        jsonLd={jsonLd}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader title={content.title} subtitle={content.intro} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {content.items.map((s) => (
            <article
              key={s.slug}
              className="rounded-xl overflow-hidden border border-cyan-400/20 bg-black/40 hover:border-cyan-400/40 transition-colors"
            >
              <SmartImage srcFolder={s.imgFolder} alt={s.imgAlt} className="w-full h-44" imgClassName="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{s.description}</p>
                <div className="mt-3">
                  <a
                    href={`/solutions/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-cyan-400/40 text-cyan-200 hover:text-white hover:border-cyan-300/70 hover:bg-cyan-400/10 transition-colors"
                  >
                    Детальніше
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-80">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SolutionsQRSection />
        <nav className="mt-4">
          <p>
            Детальна сторінка рішення: <a href="/solutions/samwash-qr">/solutions/samwash-qr</a>
          </p>
          <p>
            SEO‑лендинг QR‑оплат: <a href="/qr">/qr</a>
          </p>
          <p>
            Перейти до інших каталогів: <a href="/projects">Проєкти</a> · <a href="/industries">Індустрії</a>
          </p>
        </nav>
      </section>
    </>
  );
};

export default Solutions;
