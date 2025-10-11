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
      name: locale === 'uk' ? 'Рішення для Автоматизації Бізнесу від Diwave' : 'Business Automation Solutions by Diwave',
      description: locale === 'uk'
        ? 'Комплексні технологічні рішення: IoT/SCADA, e-commerce, fintech, AI/ML, маркетинг та автоматизація бізнес-процесів'
        : 'Comprehensive technology solutions: IoT/SCADA, e-commerce, fintech, AI/ML, marketing and business process automation',
      url,
      provider: {
        '@type': 'Organization',
        name: 'Diwave',
        url: baseUrl,
        founder: {
          '@type': 'Person',
          name: 'Dmytro Kravets',
          email: 'dmytro@diwave.company',
          jobTitle: 'Founder & Tech Lead'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+380505923772',
          email: 'info@diwave.company',
          contactType: 'sales'
        }
      }
    },
    ...content.items.map((s) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      description: s.description,
      areaServed: ['UA', 'EU'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions/${s.slug}`
      },
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

  const seoContent = {
    uk: {
      title: 'Diwave — Рішення для Автоматизації Бізнесу | IoT, E-commerce, Fintech, AI/ML',
      description: 'Комплексні технологічні рішення від Diwave: QR-платежі Samwash, IoT/SCADA для автомийок і вендингу, e-commerce інтеграції, маркетингова аналітика, операції з дронами. 14+ років досвіду автоматизації бізнесу в Україні та ЄС. Від ідеї до впровадження — full-stack розробка, інтеграції ERP/CRM, безготівкові платежі, телеметрія обладнання. Збільшуємо EBITDA, знижуємо OPEX, підвищуємо конверсії.',
      keywords: 'Diwave рішення, QR оплата автомийка, IoT SCADA Україна, алко-вендинг KYC, дрони телеметрія, e-commerce інтеграції, SEO GEO оптимізація, автоматизація бізнесу, безготівкові платежі, CRM loyalty система'
    },
    en: {
      title: 'Diwave — Business Automation Solutions | IoT, E-commerce, Fintech, AI/ML',
      description: 'Comprehensive technology solutions from Diwave: Samwash QR payments, IoT/SCADA for car washes & vending, e-commerce integrations, marketing analytics, drone operations. 14+ years of business automation experience in Ukraine & EU. From idea to deployment — full-stack development, ERP/CRM integrations, cashless payments, equipment telemetry. We increase EBITDA, reduce OPEX, boost conversions.',
      keywords: 'Diwave solutions, QR payment car wash, IoT SCADA Ukraine, alcohol vending KYC, drone telemetry, e-commerce integrations, SEO GEO optimization, business automation, cashless payments, CRM loyalty system'
    }
  };

  const seo = seoContent[locale];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={url}
        image={`${baseUrl}/images/solutions/cover.jpg`}
        locale={locale}
        keywords={seo.keywords}
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
              className="group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-xl hover:border-cyan-400/40 dark:hover:border-cyan-400/40 light:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <SmartImage
                  srcFolder={s.imgFolder}
                  alt={s.imgAlt}
                  className="w-full h-44"
                  imgClassName="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/60 light:from-white/40 to-transparent pointer-events-none" />
              </div>
              <div className="p-5">
                <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">{s.description}</p>
                <div className="mt-4">
                  <a
                    href={`/solutions/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-cyan-400/40 dark:border-cyan-400/40 light:border-blue-500/60 bg-cyan-400/10 dark:bg-cyan-400/10 light:bg-blue-500/10 text-cyan-200 dark:text-cyan-200 light:text-blue-700 hover:text-white dark:hover:text-white light:hover:text-white hover:border-cyan-300/70 dark:hover:border-cyan-300/70 light:hover:border-blue-500 hover:bg-cyan-400/20 dark:hover:bg-cyan-400/20 light:hover:bg-blue-500 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="light:group-hover:text-white">{locale === 'uk' ? 'Детальніше' : 'Learn more'}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-80 group-hover:translate-x-1 transition-transform">
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
