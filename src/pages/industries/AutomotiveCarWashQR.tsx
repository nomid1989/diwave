import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function AutomotiveCarWashQR({ locale }: Props) {
  const content = {
    uk: {
      title: 'QR-оплата для індустрії автомийок і автомотиву | Diwave Solutions',
      description: 'Безтермінальна QR-оплата для мереж автомийок: AI-адаптація за регіоном, двомовність, масштабованість та інтеграції. Єдиний стандарт із локальними налаштуваннями.',
      jsonName: 'QR-оплата для індустрії автомийок',
      jsonDescription: 'QR-оплата без терміналів, AI-адаптація контенту за регіоном, двомовність, відповідність і безпека, масштабованість для мереж.',
      heading: 'QR‑оплата для індустрії автомийок і автомотиву',
      btnSolution: 'Перейти до рішення',
      btnCase: 'Дивитися кейс',
      benefit1Title: 'Зниження витрат',
      benefit1Desc: 'Менше обладнання — менше сервісу і амортизації.',
      benefit2Title: 'Єдиний стандарт',
      benefit2Desc: 'Одна платформа з локальними налаштуваннями за регіоном.',
      benefit3Title: 'Масштабованість',
      benefit3Desc: 'Легке розгортання на нові точки мережі.',
      scenariosTitle: 'Сценарії використання',
      scenarios: [
        'Самообслуговування без касира та терміналів.',
        'Партнерські майданчики з різними платіжними методами.',
        'Мережеві інсталяції з централізованим контролем.'
      ],
      complianceTitle: 'Відповідність і безпека',
      complianceDesc: 'Відповідаємо кращим практикам безпеки та приватності, забезпечуємо стабільність під навантаженням, журналювання і моніторинг для аудиту.',
      officialLinksTitle: 'Офіційні посилання Samwash',
      officialLinks: [
        { text: 'Старий сайт: ism-wash.com', url: 'https://ism-wash.com' },
        { text: 'Новий сайт: samwash.ua', url: 'https://samwash.ua' },
        { text: 'Інтернет‑магазин: shop.samwash.ua', url: 'https://shop.samwash.ua' },
        { text: 'Система оплати/керування: app.samwash.ua', url: 'https://app.samwash.ua' }
      ],
      socialTitle: 'Соцмережі Samwash',
      partnersTitle: 'Партнери та друзі',
      partners: [
        {
          name: 'Plantpol — інтернет‑магазин квіткового господарства',
          url: 'https://plantpol.com.ua',
          instagram: 'https://www.instagram.com/plantpol_ukraina/',
          facebook: 'https://www.facebook.com/plantpol.ukraine/'
        },
        {
          name: 'Lemberg Flowers — партнер',
          url: 'https://lembergflowers.com.ua',
          instagram: 'https://www.instagram.com/lembergflowers/',
          facebook: 'https://www.facebook.com/lembergflowers.ltd/'
        },
        {
          name: 'Rozkriy — фрезерна порізка матеріалів',
          url: 'https://rozkriy.com.ua',
          facebook: 'https://www.facebook.com/rozkriy.com.ua/'
        },
        {
          name: 'ГНІЗДО — УАПД "Гніздо"',
          url: 'https://gnizdoteam.com'
        }
      ],
      researchTitle: 'Що показує аналіз відкритих джерел',
      research: [
        'Samwash — активне розгортання QR‑оплат і digital‑каналів; новий сайт та соцмережі слугують ключовими точками взаємодії.',
        'Plantpol — виробництво/продаж рослин, офлайн садовий центр та онлайн‑магазин; Instagram/FB як ключові канали.',
        'Lemberg Flowers — асортимент для озеленення та сервіси під ключ; Instagram/FB як вітрина.',
        'Rozkriy — порізка/фрезерування широкого спектра матеріалів; Facebook для комунікацій.',
        'ГНІЗДО — ком\'юніті пілотів дронів; інформаційні та навчальні активності.'
      ],
      navIndustries: '← До каталогу Індустрій',
      navSolution: 'Рішення Samwash QR',
      navCase: 'Кейс Samwash'
    },
    en: {
      title: 'QR Payment for Car Wash & Automotive Industry | Diwave Solutions',
      description: 'Terminal-free QR payment for car wash networks: AI-powered regional adaptation, multilingual support, scalability and integrations. Single standard with local customization.',
      jsonName: 'QR Payment for Car Wash Industry',
      jsonDescription: 'Terminal-free QR payment, AI-powered regional content adaptation, multilingual support, compliance and security, network scalability.',
      heading: 'QR Payment for Car Wash & Automotive Industry',
      btnSolution: 'View Solution',
      btnCase: 'View Case Study',
      benefit1Title: 'Cost Reduction',
      benefit1Desc: 'Less equipment — less maintenance and depreciation.',
      benefit2Title: 'Single Standard',
      benefit2Desc: 'One platform with regional customization.',
      benefit3Title: 'Scalability',
      benefit3Desc: 'Easy deployment to new network locations.',
      scenariosTitle: 'Use Cases',
      scenarios: [
        'Self-service without cashiers and terminals.',
        'Partner locations with different payment methods.',
        'Network installations with centralized control.'
      ],
      complianceTitle: 'Compliance & Security',
      complianceDesc: 'We comply with security and privacy best practices, ensure stability under load, logging and monitoring for audits.',
      officialLinksTitle: 'Official Samwash Links',
      officialLinks: [
        { text: 'Old site: ism-wash.com', url: 'https://ism-wash.com' },
        { text: 'New site: samwash.ua', url: 'https://samwash.ua' },
        { text: 'Online store: shop.samwash.ua', url: 'https://shop.samwash.ua' },
        { text: 'Payment/management system: app.samwash.ua', url: 'https://app.samwash.ua' }
      ],
      socialTitle: 'Samwash Social Media',
      partnersTitle: 'Partners and Friends',
      partners: [
        {
          name: 'Plantpol — Horticultural Online Store',
          url: 'https://plantpol.com.ua',
          instagram: 'https://www.instagram.com/plantpol_ukraina/',
          facebook: 'https://www.facebook.com/plantpol.ukraine/'
        },
        {
          name: 'Lemberg Flowers — Partner',
          url: 'https://lembergflowers.com.ua',
          instagram: 'https://www.instagram.com/lembergflowers/',
          facebook: 'https://www.facebook.com/lembergflowers.ltd/'
        },
        {
          name: 'Rozkriy — CNC Material Cutting',
          url: 'https://rozkriy.com.ua',
          facebook: 'https://www.facebook.com/rozkriy.com.ua/'
        },
        {
          name: 'GNIZDO — Ukrainian Drone Pilot Association',
          url: 'https://gnizdoteam.com'
        }
      ],
      researchTitle: 'Open Source Analysis Insights',
      research: [
        'Samwash — Active QR payment and digital channel deployment; new website and social media serve as key interaction points.',
        'Plantpol — Plant production/sales, offline garden center and online store; Instagram/FB as key channels.',
        'Lemberg Flowers — Landscaping products and turnkey services; Instagram/FB as showcase.',
        'Rozkriy — Cutting/milling of wide range of materials; Facebook for communications.',
        'GNIZDO — Drone pilot community; informational and educational activities.'
      ],
      navIndustries: '← Back to Industries',
      navSolution: 'Samwash QR Solution',
      navCase: 'Samwash Case Study'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/industries/automotive/car-wash-qr`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t.jsonName,
      description: t.jsonDescription,
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      audience: { '@type': 'BusinessAudience', name: 'Car wash networks' },
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
        image={`${baseUrl}/images/industries/car-wash-qr/cover.jpg`}
        locale={locale}
        alternates={[{ hrefLang: locale, href: url }]}
        jsonLd={jsonLd}
      />

      {/* Background gradient + blur */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                {t.heading}
              </h1>
              <p className="mt-4 text-gray-300">{t.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`${locale === 'en' ? '/en' : ''}/solutions/samwash-qr`}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  {t.btnSolution}
                </a>
                <a
                  href={`${locale === 'en' ? '/en' : ''}/projects/samwash-qr`}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  {t.btnCase}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/industries/car-wash-qr"
                  alt={locale === 'uk' ? 'QR-оплата для індустрії автомийок' : 'QR payment for car wash industry'}
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: t.benefit1Title, d: t.benefit1Desc },
              { t: t.benefit2Title, d: t.benefit2Desc },
              { t: t.benefit3Title, d: t.benefit3Desc }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenarios + Compliance */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">{t.scenariosTitle}</h2>
              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                {t.scenarios.map((scenario, i) => (
                  <li key={i}>{scenario}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">{t.complianceTitle}</h2>
              <p className="mt-3 text-gray-300">{t.complianceDesc}</p>
            </div>
          </div>
        </section>

        {/* Official links */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">{t.officialLinksTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {t.officialLinks.map((link, i) => (
                  <li key={i}><a href={link.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{link.text}</a></li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">{t.socialTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="https://www.facebook.com/samwashcarwash/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Facebook</a></li>
                <li><a href="https://www.instagram.com/samwash_carwash/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Instagram</a></li>
                <li><a href="https://www.youtube.com/@samwash" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">YouTube</a></li>
                <li><a href="https://www.tiktok.com/@samwash.official" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">TikTok</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">{t.partnersTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {t.partners.map((partner, i) => (
                  <li key={i}>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{partner.name}</a>
                    {partner.instagram && (
                      <>
                        <span className="text-gray-400"> · </span>
                        <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                      </>
                    )}
                    {partner.facebook && (
                      <>
                        <span className="text-gray-400"> · </span>
                        <a href={partner.facebook} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Research-based insights */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">{t.researchTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              {t.research.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA / Links */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${locale === 'en' ? '/en' : ''}/industries`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navIndustries}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions/samwash-qr`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navSolution}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/projects/samwash-qr`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navCase}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
