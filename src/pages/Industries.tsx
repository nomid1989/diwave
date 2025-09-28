import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeader from '@/components/sections/SectionHeader';
import { getIndustries } from '@/lib/content/industries';
import { IndustriesQRSection } from '@/content/QRSections';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const Industries: React.FC<Props> = ({ locale }) => {
  const content = getIndustries(locale);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/industries`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: content.title,
      url
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: content.items.map((i, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: i.title
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: content.title, item: url }
      ]
    }
  ];

  const labels = {
    page: locale === 'uk' ? 'Детальніше' : 'Learn more'
  };

  // Розкривні секції відключено; використовуємо пряме посилання "Детальніше"

  return (
    <>
      <SEO
        title={`Diwave — ${content.title}`}
        description="Industries we serve."
        url={url}
        image={`${baseUrl}/images/industries/cover.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/industries` },
          { hrefLang: 'en', href: `${baseUrl}/en/industries` }
        ]}
        jsonLd={jsonLd}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader title={content.title} subtitle="" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {content.items.map((it) => {
            return (
              <article
                key={it.slug}
                className="rounded-xl overflow-hidden border border-cyan-400/20 bg-black/40 hover:border-cyan-400/40 transition-colors"
              >
                <SmartImage
                  srcFolder={it.imgFolder}
                  alt={it.imgAlt}
                  className="w-full h-44"
                  imgClassName="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{it.description}</p>

                  <div className="mt-3">
                    <a
                      href={`/industries/${it.slug}`}
                      className="text-xs inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-400/30 text-cyan-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-colors"
                    >
                      {labels.page}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-80">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <IndustriesQRSection />
        <nav className="mt-4">
          <p>
            Детальна сторінка: <a href="/industries/automotive/car-wash-qr">/industries/automotive/car-wash-qr</a>
          </p>
          <p>
            SEO‑лендинг QR‑оплат: <a href="/qr">/qr</a>
          </p>
          <p>
            Перейти до інших каталогів: <a href="/solutions">Рішення</a> · <a href="/projects">Проєкти</a>
          </p>
        </nav>
      </section>
    </>
  );
};

export default Industries;
