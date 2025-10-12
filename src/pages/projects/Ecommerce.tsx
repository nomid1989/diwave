import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function EcommerceProject({ locale }: Props) {
  const content = {
    uk: {
      title: 'E‑commerce інтеграції — кейс | Diwave Solutions',
      description: 'Каталог, кошик, чек‑аут, ERP, аналітика. Платформа для B2B/B2C з фокусом на швидкодію і конверсії.',
      badge: 'Кейс: Plantpol',
      heroTitle: 'B2B-портал для гіганта агротехнологій',
      heroDesc: '<strong>Plantpol</strong> — один з найбільших українських дистриб\'юторів насіння, ЗЗР та агрохімії. Ми створили B2B-портал з інтеграцією 1С, що автоматизував роботу з <strong>5000+ SKU</strong> та скоротив операційні витрати на <strong>75%</strong>.',
      stat1: 'SKU в каталозі',
      stat2: 'витрат на штат',
      stat3: 'автоматизація',
      ctaDetails: 'Детальніше про кейс',
      ctaWebsite: 'plantpol.com.ua →',
      caseTitle: 'Кейс Plantpol: ROI-оптимізація в Агротехнологіях',
      challengeTitle: 'Виклик',
      challengeDesc: 'Створення B2B-порталу на Angular/Laravel для <strong>5000+ SKU</strong>, повністю інтегрованого з 1С бухгалтерією. Компанія мала 20 менеджерів для обробки складних річних замовлень на палетах з плануванням на 1-2 роки.',
      solutionTitle: 'Рішення',
      solutionDesc: 'Замість найму додаткових 20+ менеджерів, наше рішення автоматизувало обробку складних замовлень:',
      solutionItems: [
        'Автоматизована логіка замовлень на палетах',
        'Планування на 1-2 роки наперед',
        'Повна ERP-інтеграція з 1С',
        '5000+ SKU з автоматичним оновленням'
      ],
      resultTitle: 'Результат',
      resultMetric: 'Скорочення штату менеджерів',
      resultDesc: 'З 20 до 5 менеджерів',
      beforeLabel: 'ДО',
      afterLabel: 'ПІСЛЯ',
      beforeManagers: '20 менеджерів',
      afterManagers: '5 менеджерів',
      beforeProcess: 'Ручна обробка',
      afterProcess: 'Автоматизація',
      savingsTitle: '💰 Економія',
      savingsDesc: 'Мільйони гривень збережених коштів на операційних витратах + можливість масштабування без найму',
      professionalNote: '<strong>Професійна оцінка:</strong> Plantpol проявив себе як інноваційний лідер у традиційній сфері агротехнологій. Рішення інвестувати у складний B2B-портал замість постійного найму персоналу було стратегічним і далекоглядним кроком.',
      ctaQuestion: 'Хочете подібний результат для вашого бізнесу?',
      ctaConsultation: 'Отримати безкоштовну консультацію',
      ctaSolutions: 'Дізнатись більше про рішення',
      plantpolDesc: '<strong>Plantpol</strong> — лідер у сфері агротехнологій з інноваційним підходом до автоматизації B2B-процесів.',
      trendsTitle: 'Тренди E-commerce 2025: Наше Бачення',
      trends: [
        {
          icon: '🤖',
          title: 'AI-персоналізація',
          desc: 'Штучний інтелект аналізує поведінку клієнтів у реальному часі, пропонуючи персональні рекомендації, динамічне ціноутворення та прогнозування попиту. Це не просто "схожі товари" — це повноцінний AI-помічник для кожного клієнта.'
        },
        {
          icon: '🎙️',
          title: 'Голосова комерція',
          desc: 'Voice Commerce стає нормою. Клієнти замовляють товари через Alexa, Google Assistant, Siri. Інтеграція з голосовими асистентами та оптимізація для voice search — must-have для B2C.'
        },
        {
          icon: '⚡',
          title: 'Headless Commerce',
          desc: 'Роз\'єднання frontend і backend дозволяє створювати унікальні користувацькі інтерфейси для різних каналів продажу: веб, мобільні додатки, IoT-пристрої, навіть AR/VR. Швидкість розробки та гнучкість на новому рівні.'
        },
        {
          icon: '🌍',
          title: 'Сталий розвиток',
          desc: 'Sustainability стає ключовим фактором при виборі. Клієнти хочуть бачити carbon footprint товарів, екологічну упаковку, можливість вторинної переробки. E-commerce має бути "зеленим".'
        },
        {
          icon: '🔐',
          title: 'Web3 & Blockchain',
          desc: 'Децентралізовані маркетплейси, NFT-товари, криптовалютні платежі. Blockchain забезпечує прозорість ланцюга постачання та автентичність товарів. Web3 створює нову економіку власності.'
        },
        {
          icon: '📊',
          title: 'Predictive Analytics',
          desc: 'Прогнозна аналітика передбачає попит, оптимізує запаси, персоналізує маркетинг. Machine Learning моделі аналізують мільйони data points для прийняття бізнес-рішень у реальному часі.'
        }
      ],
      ourApproachTitle: '💡 Наш підхід',
      ourApproachDesc: 'В Diwave ми не просто стежимо за трендами — ми їх створюємо. Наші рішення для e-commerce вже сьогодні використовують AI, headless architecture та predictive analytics. Ми допомагаємо бізнесу бути на крок попереду конкурентів.',
      ctaProjectTitle: 'Готові створити свій e-commerce проєкт?',
      ctaProjectDesc: 'Отримайте детальну консультацію від нашої команди. Ми допоможемо підібрати оптимальне рішення для вашого бізнесу та розрахуємо ROI.',
      ctaOrderConsultation: 'Замовити консультацію',
      ctaDiscussProject: 'Обговорити проєкт',
      implementationTitle: 'Як ми реалізуємо e‑commerce',
      implementationItems: [
        '<b>Discovery та KPI:</b> спільно з клієнтом — скорочення витрат, підвищення конверсії та AOV.',
        '<b>Каталог і пошук:</b> швидке фільтрування, варіанти, залишки, оптові прайси.',
        '<b>Кошик і чек‑аут:</b> мінімум кроків, промокоди, різні способи оплати.',
        '<b>ERP/CRM інтеграції:</b> синхронізація замовлень, клієнтів і складу; нотифікації.',
        '<b>SEO/перформанс:</b> швидкі сторінки, структуровані дані, мікророзмітка.',
        '<b>Маркетинг:</b> email/SMS, ремаркетинг, UTM‑аналітика, контент.'
      ],
      techStackTitle: 'Технічний стек',
      techStackItems: [
        '<b>Frontend:</b> React 18, Angular, TypeScript, Tailwind, i18n.',
        '<b>Backend:</b> Node.js, PHP (Laravel), REST/GraphQL, кеші та черги.',
        '<b>Платежі:</b> картки, Apple/Google Pay, безпечні вебхуки та звірка.',
        '<b>ERP/CRM:</b> 1С інтеграція, двобічна синхронізація, антифрод‑правила.',
        '<b>DevOps:</b> Docker, CI/CD, моніторинг, алерти, CDN/WAF, бекапи.'
      ],
      partnersTitle: 'Наші партнери в e-commerce',
      plantpolPartner: 'Агротехнології: насіння, ЗЗР, агрохімія. B2B-портал з 5000+ SKU та інтеграцією 1С.',
      lembergPartner: 'Роздріб/опт рослин, озеленення інтер\'єрів. B2C e-commerce з каталогом та доставкою.',
      navProjects: '← До каталогу Проєктів',
      navSolutions: 'Пов\'язане рішення'
    },
    en: {
      title: 'E-commerce Integrations — Case Study | Diwave Solutions',
      description: 'Catalog, cart, checkout, ERP, analytics. Platform for B2B/B2C with focus on speed and conversions.',
      badge: 'Case: Plantpol',
      heroTitle: 'B2B Portal for Agritech Giant',
      heroDesc: '<strong>Plantpol</strong> — one of Ukraine\'s largest distributors of seeds, PPP, and agrochemicals. We created a B2B portal with 1C integration that automated work with <strong>5000+ SKU</strong> and reduced operating costs by <strong>75%</strong>.',
      stat1: 'SKU in catalog',
      stat2: 'staff costs',
      stat3: 'automation',
      ctaDetails: 'Case Details',
      ctaWebsite: 'plantpol.com.ua →',
      caseTitle: 'Plantpol Case: ROI Optimization in Agritech',
      challengeTitle: 'Challenge',
      challengeDesc: 'Building an Angular/Laravel B2B portal for <strong>5000+ SKU</strong>, fully integrated with 1C accounting. The company had 20 managers handling complex annual pallet orders with 1-2 year planning.',
      solutionTitle: 'Solution',
      solutionDesc: 'Instead of hiring 20+ additional managers, our solution automated complex order processing:',
      solutionItems: [
        'Automated pallet order logic',
        '1-2 year advance planning',
        'Full ERP integration with 1C',
        '5000+ SKU with automatic updates'
      ],
      resultTitle: 'Result',
      resultMetric: 'Manager Staff Reduction',
      resultDesc: 'From 20 to 5 managers',
      beforeLabel: 'BEFORE',
      afterLabel: 'AFTER',
      beforeManagers: '20 managers',
      afterManagers: '5 managers',
      beforeProcess: 'Manual processing',
      afterProcess: 'Automation',
      savingsTitle: '💰 Savings',
      savingsDesc: 'Millions in saved operational costs + ability to scale without hiring',
      professionalNote: '<strong>Professional Assessment:</strong> Plantpol demonstrated itself as an innovative leader in the traditional agritech sector. The decision to invest in a complex B2B portal instead of continuous hiring was strategic and forward-thinking.',
      ctaQuestion: 'Want similar results for your business?',
      ctaConsultation: 'Get Free Consultation',
      ctaSolutions: 'Learn More About Solutions',
      plantpolDesc: '<strong>Plantpol</strong> — leader in agritech with innovative approach to B2B process automation.',
      trendsTitle: 'E-commerce Trends 2025: Our Vision',
      trends: [
        {
          icon: '🤖',
          title: 'AI Personalization',
          desc: 'Artificial intelligence analyzes customer behavior in real-time, offering personalized recommendations, dynamic pricing, and demand forecasting. This isn\'t just "similar products" — it\'s a full AI assistant for every customer.'
        },
        {
          icon: '🎙️',
          title: 'Voice Commerce',
          desc: 'Voice Commerce is becoming the norm. Customers order products through Alexa, Google Assistant, Siri. Integration with voice assistants and voice search optimization is a must-have for B2C.'
        },
        {
          icon: '⚡',
          title: 'Headless Commerce',
          desc: 'Decoupling frontend and backend enables creating unique user interfaces for different sales channels: web, mobile apps, IoT devices, even AR/VR. Development speed and flexibility at a new level.'
        },
        {
          icon: '🌍',
          title: 'Sustainability',
          desc: 'Sustainability is becoming a key selection factor. Customers want to see product carbon footprints, eco-friendly packaging, recyclability options. E-commerce must be "green".'
        },
        {
          icon: '🔐',
          title: 'Web3 & Blockchain',
          desc: 'Decentralized marketplaces, NFT products, cryptocurrency payments. Blockchain ensures supply chain transparency and product authenticity. Web3 creates a new economy of ownership.'
        },
        {
          icon: '📊',
          title: 'Predictive Analytics',
          desc: 'Predictive analytics forecasts demand, optimizes inventory, personalizes marketing. Machine Learning models analyze millions of data points for real-time business decisions.'
        }
      ],
      ourApproachTitle: '💡 Our Approach',
      ourApproachDesc: 'At Diwave, we don\'t just follow trends — we create them. Our e-commerce solutions already use AI, headless architecture, and predictive analytics today. We help businesses stay one step ahead of competitors.',
      ctaProjectTitle: 'Ready to build your e-commerce project?',
      ctaProjectDesc: 'Get detailed consultation from our team. We\'ll help you choose the optimal solution for your business and calculate ROI.',
      ctaOrderConsultation: 'Order Consultation',
      ctaDiscussProject: 'Discuss Project',
      implementationTitle: 'How We Implement E-commerce',
      implementationItems: [
        '<b>Discovery & KPIs:</b> Together with client — cost reduction, conversion and AOV improvement.',
        '<b>Catalog & Search:</b> Fast filtering, variants, inventory, wholesale pricing.',
        '<b>Cart & Checkout:</b> Minimal steps, promo codes, various payment methods.',
        '<b>ERP/CRM Integrations:</b> Order, customer, and inventory sync; notifications.',
        '<b>SEO/Performance:</b> Fast pages, structured data, micromarkup.',
        '<b>Marketing:</b> Email/SMS, remarketing, UTM analytics, content.'
      ],
      techStackTitle: 'Technology Stack',
      techStackItems: [
        '<b>Frontend:</b> React 18, Angular, TypeScript, Tailwind, i18n.',
        '<b>Backend:</b> Node.js, PHP (Laravel), REST/GraphQL, caching and queues.',
        '<b>Payments:</b> Cards, Apple/Google Pay, secure webhooks and reconciliation.',
        '<b>ERP/CRM:</b> 1C integration, bidirectional sync, anti-fraud rules.',
        '<b>DevOps:</b> Docker, CI/CD, monitoring, alerts, CDN/WAF, backups.'
      ],
      partnersTitle: 'Our E-commerce Partners',
      plantpolPartner: 'Agritech: seeds, PPP, agrochemicals. B2B portal with 5000+ SKU and 1C integration.',
      lembergPartner: 'Plant retail/wholesale, interior landscaping. B2C e-commerce with catalog and delivery.',
      navProjects: '← Back to Projects',
      navSolutions: 'Related Solution'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/projects/ecommerce`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: locale === 'uk' ? 'Кейс: E‑commerce інтеграції' : 'Case: E-commerce Integrations',
      description: locale === 'uk' ? 'Впровадження e‑commerce з глибокими інтеграціями, аналітикою та оптимізацією конверсій.' : 'E-commerce implementation with deep integrations, analytics, and conversion optimization.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={t.title} description={t.description} url={url} image={`${baseUrl}/images/projects/ecommerce/cover.jpg`} locale={locale} jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-lg">🌱</span>
                <span className="text-sm text-emerald-300 font-medium">{t.badge}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                {t.heroTitle}
              </h1>
              <p className="mt-4 text-gray-300 text-lg" dangerouslySetInnerHTML={{ __html: t.heroDesc }} />

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">5000+</div>
                  <div className="text-xs text-gray-400 mt-1">{t.stat1}</div>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">-75%</div>
                  <div className="text-xs text-gray-400 mt-1">{t.stat2}</div>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">{t.stat3}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#plantpol-details" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500/90 text-white font-medium hover:bg-emerald-500 transition">{t.ctaDetails}</a>
                <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">
                  {t.ctaWebsite}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-white/5 backdrop-blur">
                <SmartImage
                  sources={['/images/projects/plantpol.png']}
                  alt={locale === 'uk' ? 'Plantpol B2B портал' : 'Plantpol B2B portal'}
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Plantpol Case Study - Detailed */}
        <section id="plantpol-details" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🌱</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {t.caseTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{t.challengeTitle}</h3>
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: t.challengeDesc }} />

                <h3 className="text-xl font-semibold text-white mt-6">{t.solutionTitle}</h3>
                <p className="text-gray-300">{t.solutionDesc}</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.solutionItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{t.resultTitle}</h3>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <div className="text-5xl font-bold text-emerald-400 mb-2">75%</div>
                  <div className="text-white font-semibold mb-2">{t.resultMetric}</div>
                  <div className="text-gray-300 text-sm">{t.resultDesc}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400">{t.beforeLabel}</div>
                    <div className="text-sm text-gray-300 mt-1">{t.beforeManagers}</div>
                    <div className="text-xs text-gray-400">{t.beforeProcess}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-400">{t.afterLabel}</div>
                    <div className="text-sm text-gray-300 mt-1">{t.afterManagers}</div>
                    <div className="text-xs text-gray-400">{t.afterProcess}</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-white font-semibold mb-2">{t.savingsTitle}</p>
                  <p className="text-gray-300 text-sm">{t.savingsDesc}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 text-sm mb-6" dangerouslySetInnerHTML={{ __html: t.professionalNote }} />

              {/* CTA for similar projects */}
              <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 p-6 text-center">
                <p className="text-white font-semibold mb-3">{t.ctaQuestion}</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition text-sm">
                    {t.ctaConsultation}
                  </a>
                  <a href={`${locale === 'en' ? '/en' : ''}/solutions/ecommerce`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition text-sm">
                    {t.ctaSolutions}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-xl overflow-hidden border border-emerald-500/20">
                <SmartImage
                  sources={['/images/projects/plantpol.png']}
                  alt={locale === 'uk' ? 'Plantpol B2B портал' : 'Plantpol B2B portal'}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: t.plantpolDesc }} />
                <div className="flex flex-wrap gap-3">
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    plantpol.com.ua →
                  </a>
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    Facebook
                  </a>
                  <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Trends 2025 */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚀</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {t.trendsTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.trends.map((trend, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{trend.icon}</span>
                    <h3 className="text-white font-semibold text-lg">{trend.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{trend.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-white font-semibold mb-2">{t.ourApproachTitle}</p>
              <p className="text-gray-300 text-sm">{t.ourApproachDesc}</p>
            </div>

            {/* CTA Block */}
            <div className="mt-8 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">{t.ctaProjectTitle}</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                {t.ctaProjectDesc}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25">
                  <span>📧</span>
                  {t.ctaOrderConsultation}
                </a>
                <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition">
                  <span>💬</span>
                  {t.ctaDiscussProject}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Details & Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Implementation Details */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold mb-4">{t.implementationTitle}</h2>
              <ul className="space-y-3 text-sm text-gray-200">
                {t.implementationItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">▸</span>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold mb-4">{t.techStackTitle}</h2>
              <ul className="space-y-3 text-sm text-gray-200">
                {t.techStackItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▸</span>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Other Partners */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold mb-4">{t.partnersTitle}</h2>
            <div className="space-y-4">
              {/* Plantpol */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌱</span>
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-emerald-300">
                    Plantpol
                  </a>
                </div>
                <p className="text-gray-300 text-sm mb-2">{t.plantpolPartner}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                  <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">YouTube</a>
                </div>
              </div>

              {/* Lemberg Flowers */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌺</span>
                  <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-cyan-300">
                    Lemberg Flowers
                  </a>
                </div>
                <p className="text-gray-300 text-sm mb-2">{t.lembergPartner}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`${locale === 'en' ? '/en' : ''}/projects`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">{t.navProjects}</a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/ecommerce`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">{t.navSolutions}</a>
          </div>
        </section>
      </main>
    </>
  );
}
