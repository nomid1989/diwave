import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeader from '@/components/sections/SectionHeader';
import { getIndustries } from '@/lib/content/industries';
import { IndustriesSection } from "@/content/CatalogSections";

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const Industries: React.FC<Props> = ({ locale }) => {
  const content = getIndustries(locale);
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/industries`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: locale === 'uk' ? 'Індустрії — Рішення Diwave для Різних Галузей' : 'Industries — Diwave Solutions for Various Sectors',
      description: locale === 'uk'
        ? 'Галузеві рішення від Diwave: Automotive (автомийки IoT/SCADA, +30% EBITDA), Вендинг (KYC, cashless, телеметрія), Fintech (платіжні шлюзи, антифрод), Retail/E-commerce (+25% конверсії), Logistics/Дрони, IoT/SCADA платформи, AI/ML інтеграції, Cybersecurity, Healthcare, ClimateTech/ESG, Agritech, Hospitality, PropTech, EV Charging, Robotics. 15 індустрій, 14+ років досвіду.'
        : 'Industry solutions by Diwave: Automotive (car wash IoT/SCADA, +30% EBITDA), Vending (KYC, cashless, telemetry), Fintech (payment gateways, antifraud), Retail/E-commerce (+25% conversion), Logistics/Drones, IoT/SCADA platforms, AI/ML integrations, Cybersecurity, Healthcare, ClimateTech/ESG, Agritech, Hospitality, PropTech, EV Charging, Robotics. 15 industries, 14+ years experience.',
      url,
      publisher: {
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
          contactType: 'customer support'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: locale === 'uk' ? 'Каталог галузевих рішень' : 'Industry solutions catalog',
      itemListElement: content.items.map((i, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: i.title,
        url: `${baseUrl}${locale === 'en' ? '/en' : ''}/industries/${i.slug}`,
        description: i.description
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
      title: 'Diwave — Індустрії | Automotive, Fintech, Retail, IoT, AI/ML, Healthcare, Agritech',
      description: 'Галузеві рішення Diwave для 15 індустрій: Automotive/автомийки (IoT/SCADA, +30% EBITDA, ↓30% простій), Вендинг (KYC, cashless, телеметрія, +20% дохід), Fintech (платіжні шлюзи, антифрод, +8 п.п. auth rate), Retail/E-commerce (+25% конверсії, CMS/ERP інтеграції, GEO-SEO), Logistics/Дрони (Gnizdo, трекінг, геозони), IoT/SCADA (MQTT, Modbus, автоматизація), AI/ML (RAG, Copilot, -40% часу), Cybersecurity (SIEM/SOAR, Zero-Trust), Healthcare/Telemedicine (HIPAA, EHR/HL7), ClimateTech/ESG (вуглецевий слід, -25% енергії), Agritech (дрони, NDVI, precision farming), Hospitality/TravelTech (бронювання, dynamic pricing), PropTech/Smart Buildings (BMS, -30% енергії), EV Charging (OCPP, балансування), Robotics (AMR/AGV, WMS інтеграції). 14+ років досвіду, Україна та ЄС.',
      keywords: 'Diwave індустрії, IoT автомийки Україна, вендинг KYC телеметрія, fintech платіжні шлюзи, e-commerce інтеграції ERP, дрони Gnizdo логістика, AI ML RAG Copilot, cybersecurity SIEM Ukraine, healthcare telemedicine EHR, climatetech ESG звітність, agritech precision farming, hospitality dynamic pricing, proptech BMS smart building, EV charging OCPP, robotics AMR AGV'
    },
    en: {
      title: 'Diwave — Industries | Automotive, Fintech, Retail, IoT, AI/ML, Healthcare, Agritech',
      description: 'Diwave industry solutions for 15 sectors: Automotive/Car Wash (IoT/SCADA, +30% EBITDA, ↓30% downtime), Vending (KYC, cashless, telemetry, +20% revenue), Fintech (payment gateways, antifraud, +8pp auth rate), Retail/E-commerce (+25% conversion, CMS/ERP integrations, GEO-SEO), Logistics/Drones (Gnizdo, tracking, geofencing), IoT/SCADA (MQTT, Modbus, automation), AI/ML (RAG, Copilot, -40% time), Cybersecurity (SIEM/SOAR, Zero-Trust), Healthcare/Telemedicine (HIPAA, EHR/HL7), ClimateTech/ESG (carbon footprint, -25% energy), Agritech (drones, NDVI, precision farming), Hospitality/TravelTech (booking, dynamic pricing), PropTech/Smart Buildings (BMS, -30% energy), EV Charging (OCPP, balancing), Robotics (AMR/AGV, WMS integrations). 14+ years experience, Ukraine & EU.',
      keywords: 'Diwave industries, IoT car wash Ukraine, vending KYC telemetry, fintech payment gateways, e-commerce ERP integrations, Gnizdo drones logistics, AI ML RAG Copilot, cybersecurity SIEM Ukraine, healthcare telemedicine EHR, climatetech ESG reporting, agritech precision farming, hospitality dynamic pricing, proptech BMS smart building, EV charging OCPP, robotics AMR AGV'
    }
  };

  const seo = seoContent[locale];

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={url}
        image={`${baseUrl}/images/industries/cover.jpg`}
        locale={locale}
        keywords={seo.keywords}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/industries` },
          { hrefLang: 'en', href: `${baseUrl}/en/industries` }
        ]}
        jsonLd={jsonLd}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          title={content.title}
          subtitle={locale === 'uk'
            ? 'Галузеві рішення для автоматизації бізнесу: від IoT до AI/ML'
            : 'Industry solutions for business automation: from IoT to AI/ML'
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {content.items.map((it) => {
            return (
              <article
                key={it.slug}
                className="group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-xl hover:border-cyan-400/40 dark:hover:border-cyan-400/40 light:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    srcFolder={it.imgFolder}
                    alt={it.imgAlt}
                    className="w-full h-44"
                    imgClassName="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/60 light:from-white/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-5">
                  <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-lg mb-2">{it.title}</h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">{it.description}</p>

                  <div className="mt-4">
                    <a
                      href={`/industries/${it.slug}`}
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
        <IndustriesSection locale={locale} />
        <nav className="mt-6 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
          <p>
            {locale === 'uk' ? 'Інші каталоги:' : 'Other catalogs:'} <a href={locale === 'en' ? '/en/solutions' : '/solutions'} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">{locale === 'uk' ? 'Рішення' : 'Solutions'}</a> · <a href={locale === 'en' ? '/en/projects' : '/projects'} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">{locale === 'uk' ? 'Проєкти' : 'Projects'}</a>
          </p>
        </nav>
      </section>
    </>
  );
};

export default Industries;
