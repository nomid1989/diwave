import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import { getBreadcrumbSchema, getProductSchema, getServiceSchema, getSoftwareApplicationSchema, getHowToSchema, combineSchemas } from '@/lib/structuredData';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function SamwashQR({ locale }: Props) {
  const content = {
    uk: {
      title: 'Автоматизація оплати послуг мережі автомийок Samwash через QR-код | Diwave Solutions',
      description: 'Оплата зі смартфона без терміналів: Samwash QR — AI-адаптація за регіоном, двомовність, швидка інтеграція. Система автоматично враховує локацію та синхронізується з обладнанням.',
      heading: 'QR‑оплата Samwash для мереж автомийок',
      demoButton: 'Замовити демо',
      caseButton: 'Дивитися кейс',
      metricTime: 'час обслуговування',
      metricPayments: 'безготівкові платежі',
      metricUptime: 'робота під навантаженням',
      features: [
        { t: 'AI‑адаптація', d: 'Контент і способи оплати під регіон клієнта.' },
        { t: 'Двомовність', d: 'UA/EN інтерфейси для різних аудиторій.' },
        { t: 'Швидка інтеграція', d: 'Впровадження як модуль/віджет або окреме рішення.' }
      ],
      howItWorksTitle: 'Як це працює',
      howItWorksSteps: [
        'Скануєте QR‑код на локації.',
        'Обираєте послугу і оплачуєте зі смартфона.',
        'Система запускає програму на обладнанні.'
      ],
      videoTitle: 'Відео інструкція',
      videoDesc: 'Дивіться коротке відео про те, як користуватись додатком SamWash для оплати послуг автомийки через QR-код',
      videoButton: '🎥 Дивитись на TikTok',
      galleryTitle: '📸 Скріншоти додатку SamPay',
      altApp: 'SamPay додаток',
      altPayment: 'SamPay оплата',
      altFunctions: 'SamPay функції',
      altInterface: 'SamPay інтерфейс',
      altQR: 'SamPay QR код',
      altMobile: 'SamPay мобільна версія',
      altSystem: 'SamPay система',
      navSolutions: '← До каталогу Рішень',
      navCase: 'Кейс Samwash',
      navIndustries: 'Для індустрій',
      officialLinksTitle: 'Офіційні посилання Samwash',
      oldWebsite: 'Старий вебсайт: ism-wash.com',
      newWebsite: 'Новий вебсайт: samwash.ua',
      onlineShop: 'Інтернет‑магазин: shop.samwash.ua',
      paymentSystem: 'Система оплати послуг автомийки самообслуговування, робот мийки та пилососа: app.samwash.ua',
      socialTitle: 'Соцмережі Samwash',
      partnersTitle: 'Партнери та друзі',
      partner1: 'Plantpol — інтернет‑магазин квіткового господарства',
      partner2: 'Lemberg Flowers — партнер',
      partner3: 'Rozkriy — фрезерна порізка матеріалів',
      partner4: 'ГНІЗДО — УАПД "Гніздо"',
      madeFromScratchTitle: 'Що зроблено з нуля та моя роль',
      madeFromScratchItems: [
        '<b>Комунікація та постановка задач:</b> зібрав вимоги, узгодив KPI та GTM.',
        '<b>Дизайн і UX:</b> побудував разом із дизайнерами зручний потік оплати, контент і двомовність.',
        '<b>Архітектура та інтеграції:</b> IoT/SCADA, платіжні провайдери, телеметрія, захищені вебхуки.',
        '<b>Розробка:</b> фронтенд/бекенд, синхронізація з мийкою/роботом/пилососом, кабінет клієнта.',
        '<b>Інфраструктура:</b> CI/CD, контейнеризація, логування, моніторинг, SLA.',
        '<b>Запуск і маркетинг:</b> контент та рекламні кампанії, аналітика, оптимізація конверсій.'
      ],
      techStackTitle: 'Технічний стек',
      techStackItems: [
        '<b>Frontend:</b> TypeScript, React 18, Tailwind, i18n.',
        '<b>Backend:</b> Node.js/PHP, REST API, інтеграції з платіжними сервісами та обладнанням.',
        '<b>Інтеграції:</b> платежі, CRM/лояльність, телеметрія.',
        '<b>DevOps:</b> Docker, CI/CD, моніторинг/алерти, CDN/WAF, бекапи.'
      ],
      researchTitle: 'Що показує аналіз відкритих джерел',
      researchItems: [
        'Samwash — мережа автомийок самообслуговування, що мігрувала на новий сайт samwash.ua; активно веде соцмережі та має широку географію локацій.',
        'Plantpol — квіткове господарство із садовим центром та онлайн‑магазином; комунікації ведуться через Instagram та Facebook.',
        'Lemberg Flowers — роздріб/опт рослин, озеленення інтер\'єрів; активна присутність у Instagram та Facebook.',
        'Rozkriy — фігурна порізка/фрезерування різних матеріалів із чистими краями без нагару; присутність у Facebook.',
        'ГНІЗДО — об\'єднання пілотів дронів; інформаційна платформа та навчальна/спільнотна діяльність.'
      ],
      ctaTitle: 'Готові спробувати?',
      ctaDesc: 'Залиште контакт — допоможемо обрати конфігурацію та швидко впровадити.',
      ctaButton: 'Написати'
    },
    en: {
      title: 'Samwash Car Wash Network QR-Code Payment Automation | Diwave Solutions',
      description: 'Smartphone payments without terminals: Samwash QR — AI-powered regional adaptation, bilingual interface, fast integration. System automatically accounts for location and syncs with equipment.',
      heading: 'Samwash QR Payment for Car Wash Networks',
      demoButton: 'Request Demo',
      caseButton: 'View Case Study',
      metricTime: 'service time',
      metricPayments: 'cashless payments',
      metricUptime: 'uptime under load',
      features: [
        { t: 'AI Adaptation', d: 'Content and payment methods tailored to customer region.' },
        { t: 'Bilingual', d: 'UA/EN interfaces for different audiences.' },
        { t: 'Fast Integration', d: 'Deploy as module/widget or standalone solution.' }
      ],
      howItWorksTitle: 'How It Works',
      howItWorksSteps: [
        'Scan QR code at location.',
        'Select service and pay from smartphone.',
        'System launches program on equipment.'
      ],
      videoTitle: 'Video Tutorial',
      videoDesc: 'Watch a short video on how to use the SamWash app for car wash service payments via QR code',
      videoButton: '🎥 Watch on TikTok',
      galleryTitle: '📸 SamPay App Screenshots',
      altApp: 'SamPay application',
      altPayment: 'SamPay payment',
      altFunctions: 'SamPay functions',
      altInterface: 'SamPay interface',
      altQR: 'SamPay QR code',
      altMobile: 'SamPay mobile version',
      altSystem: 'SamPay system',
      navSolutions: '← Back to Solutions',
      navCase: 'Samwash Case Study',
      navIndustries: 'For Industries',
      officialLinksTitle: 'Official Samwash Links',
      oldWebsite: 'Legacy website: ism-wash.com',
      newWebsite: 'New website: samwash.ua',
      onlineShop: 'Online shop: shop.samwash.ua',
      paymentSystem: 'Self-service car wash, robot wash, and vacuum payment system: app.samwash.ua',
      socialTitle: 'Samwash Social Media',
      partnersTitle: 'Partners & Friends',
      partner1: 'Plantpol — flower farming online store',
      partner2: 'Lemberg Flowers — partner',
      partner3: 'Rozkriy — CNC material cutting',
      partner4: 'GNIZDO — UAV Pilots Association',
      madeFromScratchTitle: 'What Was Built From Scratch and My Role',
      madeFromScratchItems: [
        '<b>Communication & Requirements:</b> Gathered requirements, aligned KPIs and GTM.',
        '<b>Design & UX:</b> Built convenient payment flow with designers, content and bilingual support.',
        '<b>Architecture & Integrations:</b> IoT/SCADA, payment providers, telemetry, secure webhooks.',
        '<b>Development:</b> Frontend/backend, synchronization with wash/robot/vacuum equipment, customer portal.',
        '<b>Infrastructure:</b> CI/CD, containerization, logging, monitoring, SLA.',
        '<b>Launch & Marketing:</b> Content and ad campaigns, analytics, conversion optimization.'
      ],
      techStackTitle: 'Technology Stack',
      techStackItems: [
        '<b>Frontend:</b> TypeScript, React 18, Tailwind, i18n.',
        '<b>Backend:</b> Node.js/PHP, REST API, integrations with payment services and equipment.',
        '<b>Integrations:</b> Payments, CRM/loyalty, telemetry.',
        '<b>DevOps:</b> Docker, CI/CD, monitoring/alerts, CDN/WAF, backups.'
      ],
      researchTitle: 'What Open Source Analysis Shows',
      researchItems: [
        'Samwash — self-service car wash network that migrated to new website samwash.ua; actively manages social media and has wide geographic coverage.',
        'Plantpol — flower farming with garden center and online store; communications via Instagram and Facebook.',
        'Lemberg Flowers — plant retail/wholesale, interior landscaping; active presence on Instagram and Facebook.',
        'Rozkriy — CNC cutting/milling of various materials with clean edges; presence on Facebook.',
        'GNIZDO — drone pilots association; information platform and educational/community activities.'
      ],
      ctaTitle: 'Ready to Try?',
      ctaDesc: 'Leave your contact — we\'ll help you choose the right configuration and deploy quickly.',
      ctaButton: 'Contact Us'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions/samwash-qr`;

  const jsonLd = combineSchemas(
    // Breadcrumb
    getBreadcrumbSchema([
      { name: locale === 'uk' ? 'Головна' : 'Home', url: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
      { name: locale === 'uk' ? 'Рішення' : 'Solutions', url: `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions` },
      { name: 'SamWash QR', url }
    ], locale),

    // Service schema
    getServiceSchema({
      name: locale === 'uk' ? 'SamWash QR - Безконтактна оплата для автомийок' : 'SamWash QR - Contactless Payment for Car Washes',
      description: locale === 'uk'
        ? 'Система QR-оплати для автомийок самообслуговування: AI-адаптація контенту за регіоном, двомовність (UA/EN), швидка інтеграція. Оплата зі смартфона без терміналів, автоматична синхронізація з обладнанням. -30% час обслуговування, +90% безготівкових платежів.'
        : 'QR payment system for self-service car washes: AI-powered content adaptation by region, bilingual (UA/EN), fast integration. Smartphone payments without terminals, automatic equipment synchronization. -30% service time, +90% cashless payments.',
      serviceType: 'QR Payment System',
      areaServed: ['Ukraine', 'European Union'],
      provider: 'Diwave Solutions'
    }, locale),

    // SoftwareApplication schema for mobile app
    getSoftwareApplicationSchema({
      name: 'SamPay - QR Payment App',
      description: locale === 'uk'
        ? 'Мобільний додаток для оплати послуг автомийок самообслуговування через QR-код. Підтримка карток, Apple Pay, Google Pay. Двомовний інтерфейс (UA/EN), історія платежів, програма лояльності.'
        : 'Mobile app for self-service car wash payments via QR code. Supports cards, Apple Pay, Google Pay. Bilingual interface (UA/EN), payment history, loyalty program.',
      operatingSystem: ['iOS', 'Android', 'Web'],
      applicationCategory: 'FinanceApplication',
      offers: {
        price: '0',
        priceCurrency: 'USD'
      },
      aggregateRating: {
        ratingValue: '4.7',
        reviewCount: '320'
      }
    }, locale),

    // HowTo schema
    getHowToSchema({
      name: locale === 'uk' ? 'Як оплатити автомийку через QR-код' : 'How to Pay for Car Wash via QR Code',
      description: locale === 'uk'
        ? 'Покрокова інструкція оплати послуг автомийки самообслуговування через мобільний додаток SamPay з QR-кодом'
        : 'Step-by-step guide for paying self-service car wash services via SamPay mobile app with QR code',
      image: `${baseUrl}/images/solutions/samwash-qr/hero.webp`,
      totalTime: 'PT2M',
      estimatedCost: {
        currency: 'UAH',
        value: '50-150'
      },
      supply: [
        locale === 'uk' ? 'Смартфон з камерою' : 'Smartphone with camera',
        locale === 'uk' ? 'Встановлений додаток SamPay або браузер' : 'SamPay app installed or browser',
        locale === 'uk' ? 'Банківська картка або Apple/Google Pay' : 'Bank card or Apple/Google Pay'
      ],
      tool: [
        'SamPay App',
        'QR Code Scanner'
      ],
      step: [
        {
          name: locale === 'uk' ? 'Крок 1: Скануйте QR-код' : 'Step 1: Scan QR Code',
          text: locale === 'uk'
            ? 'Відкрийте додаток SamPay або камеру смартфона та наведіть на QR-код, розміщений на автомийці. Додаток автоматично визначить локацію та доступні послуги.'
            : 'Open SamPay app or smartphone camera and point at QR code placed on car wash. App automatically detects location and available services.',
          image: `${baseUrl}/images/solutions/samwash-qr/step1.jpg`,
          url: `${url}#step1`
        },
        {
          name: locale === 'uk' ? 'Крок 2: Оберіть послугу' : 'Step 2: Select Service',
          text: locale === 'uk'
            ? 'В додатку виберіть потрібну послугу: мийка, пилосос, або робот-мийка. Вкажіть тривалість програми (зазвичай 5-15 хвилин) та переглянте вартість.'
            : 'In app select needed service: wash, vacuum, or robot wash. Specify program duration (typically 5-15 minutes) and review cost.',
          image: `${baseUrl}/images/solutions/samwash-qr/step2.jpg`,
          url: `${url}#step2`
        },
        {
          name: locale === 'uk' ? 'Крок 3: Оплатіть' : 'Step 3: Pay',
          text: locale === 'uk'
            ? 'Оберіть спосіб оплати: картка, Apple Pay або Google Pay. Підтвердіть платіж. Система автоматично запустить обране обладнання на автомийці.'
            : 'Select payment method: card, Apple Pay, or Google Pay. Confirm payment. System automatically starts selected equipment at car wash.',
          image: `${baseUrl}/images/solutions/samwash-qr/step3.jpg`,
          url: `${url}#step3`
        }
      ]
    }, locale),

    // Product schema for QR payment system as a product
    getProductSchema({
      name: locale === 'uk' ? 'Система QR-оплати SamWash' : 'SamWash QR Payment System',
      description: locale === 'uk'
        ? 'Готове рішення для автоматизації оплати послуг автомийок самообслуговування через QR-код. Включає мобільний додаток, інтеграцію з обладнанням, платіжними системами, CRM та аналітику.'
        : 'Ready solution for automating self-service car wash payments via QR code. Includes mobile app, equipment integration, payment systems, CRM and analytics.',
      image: `${baseUrl}/images/solutions/samwash-qr/hero.jpeg`,
      brand: 'SamWash by Diwave',
      sku: 'SAMWASH-QR-001',
      category: 'Payment System',
      price: 2000,
      currency: 'USD',
      availability: 'InStock',
      url,
      rating: { value: 4.7, count: 85 }
    }, locale)
  );

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/solutions/samwash-qr/cover.jpg`}
        locale={locale}
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
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  {t.demoButton}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href={`${locale === 'en' ? '/en' : ''}/projects/samwash-qr`}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  {t.caseButton}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">-40%</div>
                  <div className="text-xs text-gray-300">{t.metricTime}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">+30%</div>
                  <div className="text-xs text-gray-300">{t.metricPayments}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">24/7</div>
                  <div className="text-xs text-gray-300">{t.metricUptime}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/samwash-qr"
                  alt={locale === 'uk' ? 'Samwash QR — мобільна оплата на автомийці' : 'Samwash QR — mobile car wash payment'}
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {t.features.map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">{t.howItWorksTitle}</h2>
            <ol className="grid md:grid-cols-3 gap-4 list-decimal list-inside text-gray-200 mb-6">
              {t.howItWorksSteps.map((step, i) => (
                <li key={i} className="rounded-xl border border-white/10 bg-black/20 p-4">{step}</li>
              ))}
            </ol>

            {/* Video Tutorial - YouTube Shorts Embed */}
            <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📱</span>
                <h3 className="text-white font-semibold text-lg">{t.videoTitle}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                {t.videoDesc}
              </p>

              {/* YouTube Shorts Video Embed */}
              <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur" style={{ aspectRatio: '9/16', maxWidth: '360px', margin: '0 auto' }}>
                <iframe
                  src="https://www.youtube.com/embed/VZXtZNfXdZ0?si=BzNYDudxHCENktTG"
                  title="SamWash QR Payment Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <a
                  href="https://youtube.com/shorts/VZXtZNfXdZ0?feature=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition shadow-lg"
                >
                  🎥 Дивитись на YouTube
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://vm.tiktok.com/ZMAP3rGX8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium hover:from-pink-600 hover:to-cyan-600 transition shadow-lg"
                >
                  {t.videoButton}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/5582F1D0-BC9B-4D6A-8B1D-389DB639C31A_1_201_a.jpeg"
                alt={t.altApp}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/95319261-59A2-4791-9199-C5B6C2658E21_1_201_a.jpeg"
                alt={t.altPayment}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/9C63F51B-23FC-42EB-8A15-B0FD19ED9646_1_201_a.jpeg"
                alt={t.altFunctions}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/9FB083C6-DCF4-414C-A4CC-C676C7CB3908_1_201_a.jpeg"
                alt={t.altInterface}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/A94E3411-7E20-40F9-B58A-CFB7B7174069_1_201_a.jpeg"
                alt={t.altQR}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/C634410E-48EE-48D5-98F9-35D3199297C5_1_201_a.jpeg"
                alt={t.altMobile}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/EEA41C16-78E2-4CC5-8F5D-278338A9F065_1_201_a.jpeg"
                alt={t.altSystem}
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* CTA / Links */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navSolutions}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/projects/samwash-qr`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navCase}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/industries/automotive/car-wash-qr`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              {t.navIndustries}
            </a>
          </div>
        </section>

        {/* Official links */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">{t.officialLinksTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="https://ism-wash.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.oldWebsite}</a>
                </li>
                <li>
                  <a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.newWebsite}</a>
                </li>
                <li>
                  <a href="https://shop.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.onlineShop}</a>
                </li>
                <li>
                  <a href="https://app.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.paymentSystem}</a>
                </li>
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
                <li>
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.partner1}</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
                <li>
                  <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.partner2}</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
                <li>
                  <a href="https://rozkriy.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.partner3}</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/rozkriy.com.ua/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
                <li>
                  <a href="https://gnizdoteam.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{t.partner4}</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/gnizdoteam/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/gnizdoteam/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Made from scratch & roles */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">{t.madeFromScratchTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              {t.madeFromScratchItems.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">{t.techStackTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              {t.techStackItems.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </section>

        {/* Research-based insights */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">{t.researchTitle}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              {t.researchItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact anchor */}
        <section id="contact" className="mx-auto max-w-3xl px-6 pb-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center">
            <h3 className="text-white text-lg font-semibold">{t.ctaTitle}</h3>
            <p className="text-gray-300 mt-1">{t.ctaDesc}</p>
            <a
              href="mailto:kravets.lviv@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white"
            >
              {t.ctaButton}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
