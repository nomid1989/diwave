import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeader from '@/components/sections/SectionHeader';
import { getProjects } from '@/lib/content/projects';
import { ProjectsQRSection } from '@/content/QRSections';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const Projects: React.FC<Props> = ({ locale }) => {
  const content = getProjects(locale);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/projects`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: locale === 'uk' ? 'Проєкти та Кейси Diwave' : 'Diwave Projects & Case Studies',
      description: locale === 'uk'
        ? 'Реалізовані проєкти автоматизації: телеметрія автомийок з EBITDA 70%, алко-вендинг з KYC, операції з дронами Gnizdo, e-commerce Plantpol зі скороченням штату на 75%, CRM/loyalty системи. Від IoT/SCADA до AI/ML.'
        : 'Implemented automation projects: car wash telemetry with 70% EBITDA, alcohol vending with KYC, Gnizdo drone operations, Plantpol e-commerce with 75% staff reduction, CRM/loyalty systems. From IoT/SCADA to AI/ML.',
      url,
      publisher: {
        '@type': 'Organization',
        name: 'Diwave',
        url: baseUrl,
        founder: {
          '@type': 'Person',
          name: 'Dmytro Kravets',
          email: 'dmytro@diwave.company'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: locale === 'uk' ? 'Каталог реалізованих проєктів' : 'Catalog of completed projects',
      itemListElement: content.items.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `${baseUrl}${locale === 'en' ? '/en' : ''}/projects/${p.slug}`,
        description: p.description
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

  const seoContent = {
    uk: {
      title: 'Diwave — Проєкти та Кейси | Автомийки, Вендинг, E-commerce, Дрони, CRM',
      description: 'Успішні кейси Diwave: автомийки з EBITDA 70% та IoT/SCADA, алко-вендинг з KYC і телеметрією, операції з дронами Gnizdo, B2B e-commerce Plantpol (5000+ SKU, -75% штату), міжнародна логістика USA.UA, Lasso.ai SaaS email-маркетинг, CRM/loyalty системи, енергомоніторинг. 14+ років досвіду: від телеметрії до AI/ML. Реальні результати: +EBITDA, ↓OPEX, +конверсії, автоматизація бізнес-процесів.',
      keywords: 'Diwave проєкти, кейси автомийок, вендинг телеметрія, Plantpol e-commerce, USA.UA логістика, Gnizdo дрони, Lemberg Flowers сайт, Lasso.ai email, хостел бронювання, CRM loyalty, IoT SCADA кейси'
    },
    en: {
      title: 'Diwave — Projects & Case Studies | Car Wash, Vending, E-commerce, Drones, CRM',
      description: 'Successful Diwave case studies: car washes with 70% EBITDA and IoT/SCADA, alcohol vending with KYC & telemetry, Gnizdo drone operations, Plantpol B2B e-commerce (5000+ SKU, -75% staff), USA.UA international logistics, Lasso.ai SaaS email marketing, CRM/loyalty systems, energy monitoring. 14+ years experience: from telemetry to AI/ML. Real results: +EBITDA, ↓OPEX, +conversions, business process automation.',
      keywords: 'Diwave projects, car wash cases, vending telemetry, Plantpol e-commerce, USA.UA logistics, Gnizdo drones, Lemberg Flowers site, Lasso.ai email, hostel booking, CRM loyalty, IoT SCADA cases'
    }
  };

  const seo = seoContent[locale];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={url}
        image={`${baseUrl}/images/projects/cover.jpg`}
        locale={locale}
        keywords={seo.keywords}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/projects` },
          { hrefLang: 'en', href: `${baseUrl}/en/projects` }
        ]}
        jsonLd={jsonLd}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader title={content.title} subtitle={content.intro} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {content.items.map((p) => {
            return (
              <article
                key={p.slug}
                className="group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-xl hover:border-cyan-400/40 dark:hover:border-cyan-400/40 light:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    srcFolder={p.imgFolder}
                    alt={p.imgAlt}
                    className="w-full h-48"
                    imgClassName="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/60 light:from-white/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-5">
                  <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 dark:bg-cyan-400/10 light:bg-blue-500/10 text-cyan-200 dark:text-cyan-200 light:text-blue-700 border border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-500/30 font-medium backdrop-blur-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-cyan-400/40 dark:border-cyan-400/40 light:border-blue-500/60 bg-cyan-400/10 dark:bg-cyan-400/10 light:bg-blue-500/10 text-cyan-200 dark:text-cyan-200 light:text-blue-700 hover:text-white dark:hover:text-white light:hover:text-white hover:border-cyan-300/70 dark:hover:border-cyan-300/70 light:hover:border-blue-500 hover:bg-cyan-400/20 dark:hover:bg-cyan-400/20 light:hover:bg-blue-500 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                    >
                      <span className="light:group-hover:text-white">{labels.page}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-80 group-hover:translate-x-1 transition-transform">
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
        <ProjectsQRSection />
        <nav className="mt-6 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
          <p>
            Інші каталоги: <a href="/solutions" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">Рішення</a> · <a href="/industries" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">Індустрії</a>
          </p>
        </nav>
      </section>
    </>
  );
};

export default Projects;
