import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function CarWashProject({ locale }: Props) {
  const content = {
    uk: {
      title: 'Samwash — Автомийки Самообслуговування з EBITDA 70% | IoT/SCADA Платформа Diwave',
      description: 'Повністю автоматизовані автомийки самообслуговування Samwash з EBITDA до 70%. IoT/SCADA платформа з Predictive Maintenance: 24/7 телеметрія обладнання, безготівкові платежі через QR-код, CRM з фіскалізацією. Бізнес працює без участі власника. Від 2 до 12+ постів, повна інтеграція з платіжними системами, віддалений моніторинг. Розробка та впровадження Diwave.',
      badge: 'IoT/SCADA Platform',
      heroTitle: 'Diwave Proactive\nMaintenance Platform',
      heroSubtitle: 'Технічний ROI вашого обладнання',
      ecosystemTitle: 'Екосистема SAMWASH — Трансформація Бізнесу Самообслуговування',
      ecosystemSubtitle: 'Повноцінна, трирівнева цифрова екосистема, що інтегрує IoT, FinTech та потужну CRM',
      level1: 'Рівень 1',
      level1Title: 'Взаємодія з Клієнтами',
      level1Desc: 'Веб-додаток на React/Next.js для миттєвої оплати послуг через QR-код',
      level1Result: 'Результат:',
      level1Features: ['Безготівкова оплата', 'Швидке обслуговування', 'Маркетингові акції'],
      level2: 'Рівень 2',
      level2Title: 'IoT та Middleware',
      level2Desc: 'Спеціалізований API — міст між веб-сервісами та фізичним обладнанням',
      level2Tech: 'Технологія:',
      level2Features: ['Raspberry Pi 5 як контролер', 'Низька затримка', 'Надійність терміналів'],
      level3: 'Рівень 3',
      level3Title: 'Управління Бізнесом',
      level3Desc: 'Потужна CRM для власників та менеджерів',
      level3Func: 'Функції:',
      level3Features: ['Моніторинг доходів 24/7', 'Управління інкасаціями', 'Predictive Maintenance'],
      keyValue: '🔑 Ключова Цінність',
      keyValueText: 'Впровадження елементів Предиктивного Обслуговування (Predictive Maintenance), що допомагає заздалегідь прогнозувати потенційні поломки та мінімізувати простої. Наша унікальність — здатність поєднувати програмне забезпечення з фізичним світом, створюючи повністю керовані цифрові екосистеми.',
      mainIntro: 'Ми перетворюємо непередбачувані поломки на прогнозоване обслуговування.',
      mainDesc1: 'Наша IoT/SCADA платформа забезпечує 24/7 телеметрію кожного елемента автомийки. Система автоматично відстежує напрацьовані години насосів для своєчасної заміни мастила та фіксує критичні показники, як-от якість води чи рівень хімічних засобів.',
      mainDesc2: 'Всі дані доступні власнику та обслуговуючому персоналу в режимі реального часу на мобільному телефоні, дозволяючи оперативно вводити історію поломок та обслуговування. Це не просто звітність — це проактивна система запобігання простоям, яка гарантує максимальний термін служби обладнання та стабільний прибуток.',
      mainConclusion: 'Diwave дає вам повний контроль, щоб ваш бізнес працював бездоганно.',
      featuresTitle: 'Ключові функції платформи',
      features: [
        { icon: '📊', title: 'Моніторинг в реальному часі', desc: 'Відстежування стану всього обладнання автомийки 24/7. Температура, тиск, вібрація, споживання електроенергії.' },
        { icon: '⚙️', title: 'Облік напрацювання', desc: 'Години роботи насосів, компресорів, двигунів. Автоматичні сповіщення про потребу заміни масла та витратних матеріалів.' },
        { icon: '🚨', title: 'Раннє виявлення несправностей', desc: 'Погана якість води, зниження тиску, закінчення хімії — система миттєво реагує та попереджає команду.' },
        { icon: '📱', title: 'Мобільні сповіщення', desc: 'Push-нотифікації, Telegram, SMS. Власник та техперсонал завжди в курсі подій, незалежно від місцезнаходження.' },
        { icon: '📝', title: 'Історія обслуговування', desc: 'Повна база даних поломок, ремонтів, замін деталей. Кожен інцидент документується для подальшої аналітики.' },
        { icon: '📈', title: 'Аналітика та прогнози', desc: 'Графіки використання постів, статистика по програмах, прогнозування технічного обслуговування на основі ML.' }
      ],
      techStackTitle: 'Технологічний стек',
      techBackend: 'Backend & IoT',
      techFrontend: 'Frontend & Mobile',
      techHardware: 'Апаратна платформа',
      techIntegrations: 'Інтеграції',
      benefitsTitle: 'Переваги для бізнесу',
      benefits: [
        { metric: '30–50%', label: 'Зменшення простоїв', desc: 'Проактивне обслуговування запобігає аварійним зупинкам та втратам виручки' },
        { metric: '100%', label: 'Прогнозування ТО', desc: 'Плануйте заміну деталей заздалегідь на основі реальних даних напрацювання' },
        { metric: '↑', label: 'Якість сервісу', desc: 'Завжди справне обладнання = щасливі клієнти та позитивні відгуки' },
        { metric: '⏱', label: 'Економія часу', desc: 'Персонал отримує алерти миттєво, без потреби фізичного контролю локацій' }
      ],
      integrationTitle: 'Повна сумісність з екосистемою Diwave',
      integrations: [
        { title: 'SamWash QR', desc: 'Безготівкові платежі та лояльність інтегровані з моніторингом обладнання' },
        { title: 'SmartVac', desc: 'Вакуумні пилососи з телеметрією та віддаленим керуванням' },
        { title: 'Diwave Cloud', desc: 'Централізована платформа для управління всіма локаціями та обладнанням' }
      ],
      ctaTitle: 'Готові підключити вашу автомийку?',
      ctaDesc: 'Отримайте безкоштовну консультацію та дізнайтесь, як Diwave Proactive Maintenance Platform може збільшити ROI вашого обладнання',
      ctaButton1: '🚀 Підключити автомийку',
      ctaButton2: '📊 Отримати демо',
      ctaFooter: 'Підтримка 24/7 • Безкоштовна інтеграція • Навчання персоналу',
      navProjects: '← До каталогу Проєктів',
      navSolutions: 'Рішення для автомийок',
      navIoT: 'IoT & SCADA'
    },
    en: {
      title: 'Samwash — Self-Service Car Washes with 70% EBITDA | Diwave IoT/SCADA Platform',
      description: 'Fully automated Samwash self-service car washes with up to 70% EBITDA. IoT/SCADA platform with Predictive Maintenance: 24/7 equipment telemetry, cashless QR-code payments, CRM with fiscalization. Business operates without owner involvement. From 2 to 12+ bays, full payment system integration, remote monitoring. Developed and implemented by Diwave.',
      badge: 'IoT/SCADA Platform',
      heroTitle: 'Diwave Proactive\nMaintenance Platform',
      heroSubtitle: 'Technical ROI of Your Equipment',
      ecosystemTitle: 'SAMWASH Ecosystem — Transforming Self-Service Business',
      ecosystemSubtitle: 'Complete three-tier digital ecosystem integrating IoT, FinTech, and powerful CRM',
      level1: 'Level 1',
      level1Title: 'Customer Interaction',
      level1Desc: 'React/Next.js web app for instant QR-code service payments',
      level1Result: 'Results:',
      level1Features: ['Cashless payments', 'Fast service', 'Marketing campaigns'],
      level2: 'Level 2',
      level2Title: 'IoT & Middleware',
      level2Desc: 'Specialized API — bridge between web services and physical equipment',
      level2Tech: 'Technology:',
      level2Features: ['Raspberry Pi 5 as controller', 'Low latency', 'Terminal reliability'],
      level3: 'Level 3',
      level3Title: 'Business Management',
      level3Desc: 'Powerful CRM for owners and managers',
      level3Func: 'Features:',
      level3Features: ['24/7 revenue monitoring', 'Cash collection management', 'Predictive Maintenance'],
      keyValue: '🔑 Key Value',
      keyValueText: 'Implementation of Predictive Maintenance elements that help forecast potential failures in advance and minimize downtime. Our uniqueness is the ability to combine software with the physical world, creating fully controlled digital ecosystems.',
      mainIntro: 'We transform unpredictable breakdowns into predictable maintenance.',
      mainDesc1: 'Our IoT/SCADA platform provides 24/7 telemetry of every car wash element. The system automatically tracks pump operating hours for timely oil changes and records critical indicators such as water quality or chemical levels.',
      mainDesc2: 'All data is available to the owner and maintenance staff in real-time on their mobile phones, allowing them to promptly record breakdown and maintenance history. This is not just reporting — it\'s a proactive downtime prevention system that guarantees maximum equipment lifespan and stable profit.',
      mainConclusion: 'Diwave gives you complete control so your business runs flawlessly.',
      featuresTitle: 'Key Platform Features',
      features: [
        { icon: '📊', title: 'Real-time Monitoring', desc: '24/7 tracking of all car wash equipment status. Temperature, pressure, vibration, power consumption.' },
        { icon: '⚙️', title: 'Operating Hours Tracking', desc: 'Pump, compressor, motor operating hours. Automatic notifications for oil and consumable replacement needs.' },
        { icon: '🚨', title: 'Early Fault Detection', desc: 'Poor water quality, pressure drop, chemical depletion — the system responds instantly and alerts the team.' },
        { icon: '📱', title: 'Mobile Notifications', desc: 'Push notifications, Telegram, SMS. Owner and tech staff always informed, regardless of location.' },
        { icon: '📝', title: 'Service History', desc: 'Complete database of breakdowns, repairs, part replacements. Each incident documented for further analysis.' },
        { icon: '📈', title: 'Analytics & Forecasts', desc: 'Bay usage charts, program statistics, ML-based technical maintenance forecasting.' }
      ],
      techStackTitle: 'Technology Stack',
      techBackend: 'Backend & IoT',
      techFrontend: 'Frontend & Mobile',
      techHardware: 'Hardware Platform',
      techIntegrations: 'Integrations',
      benefitsTitle: 'Business Benefits',
      benefits: [
        { metric: '30–50%', label: 'Downtime Reduction', desc: 'Proactive maintenance prevents emergency shutdowns and revenue losses' },
        { metric: '100%', label: 'Maintenance Forecasting', desc: 'Plan part replacements in advance based on real operating data' },
        { metric: '↑', label: 'Service Quality', desc: 'Always working equipment = happy customers and positive reviews' },
        { metric: '⏱', label: 'Time Savings', desc: 'Staff receives alerts instantly, without need for physical location checks' }
      ],
      integrationTitle: 'Full Compatibility with Diwave Ecosystem',
      integrations: [
        { title: 'SamWash QR', desc: 'Cashless payments and loyalty integrated with equipment monitoring' },
        { title: 'SmartVac', desc: 'Vacuum cleaners with telemetry and remote control' },
        { title: 'Diwave Cloud', desc: 'Centralized platform for managing all locations and equipment' }
      ],
      ctaTitle: 'Ready to Connect Your Car Wash?',
      ctaDesc: 'Get a free consultation and learn how Diwave Proactive Maintenance Platform can increase your equipment ROI',
      ctaButton1: '🚀 Connect Car Wash',
      ctaButton2: '📊 Get Demo',
      ctaFooter: '24/7 Support • Free Integration • Staff Training',
      navProjects: '← Back to Projects',
      navSolutions: 'Car Wash Solutions',
      navIoT: 'IoT & SCADA'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/projects/car-wash`;

  const jsonLd = [{
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Diwave Proactive Maintenance Platform',
    description: locale === 'uk'
      ? 'IoT/SCADA платформа для моніторингу та технічного обслуговування автомийок самообслуговування'
      : 'IoT/SCADA platform for self-service car wash monitoring and maintenance',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
    inLanguage: ['uk', 'en'],
    url
  }];

  return (
    <>
      <SEO title={t.title} description={t.description} url={url} image={`${baseUrl}/images/projects/car-wash/cover.jpg`} locale={locale} jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-lg">📡</span>
              <span className="text-sm text-cyan-300 font-medium">{t.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur">
              <SmartImage
                srcFolder="/images/projects/car-wash"
                alt="Diwave Proactive Maintenance Platform"
                className="w-full h-[500px]"
                imgClassName="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* SAMWASH Ecosystem Overview */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.ecosystemTitle}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t.ecosystemSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Level 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{t.level1}</h3>
                    <p className="text-cyan-400 text-sm">{t.level1Title}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong className="text-white">app.samwash.ua</strong></p>
                  <p>{t.level1Desc}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-cyan-300 font-semibold mb-2">{t.level1Result}</p>
                    <ul className="space-y-1 text-xs">
                      {t.level1Features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🔌</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{t.level2}</h3>
                    <p className="text-cyan-400 text-sm">{t.level2Title}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong className="text-white">API ph.ua</strong></p>
                  <p>{t.level2Desc}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-cyan-300 font-semibold mb-2">{t.level2Tech}</p>
                    <ul className="space-y-1 text-xs">
                      {t.level2Features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{t.level3}</h3>
                    <p className="text-cyan-400 text-sm">{t.level3Title}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong className="text-white">admin.samwash.ua</strong></p>
                  <p>{t.level3Desc}</p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-cyan-300 font-semibold mb-2">{t.level3Func}</p>
                    <ul className="space-y-1 text-xs">
                      {t.level3Features.map((f, i) => <li key={i}>✓ {f}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
              <h3 className="text-white font-semibold text-lg mb-3">{t.keyValue}</h3>
              <p className="text-gray-300 text-sm">{t.keyValueText}</p>
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl text-white font-semibold">{t.mainIntro}</p>
              <p>{t.mainDesc1}</p>
              <p>{t.mainDesc2}</p>
              <p className="text-white font-semibold">{t.mainConclusion}</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-500/30 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.techStackTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  {t.techBackend}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▸</span><span><strong className="text-white">Laravel / Node.js</strong> — API {locale === 'uk' ? 'та бізнес-логіка' : 'and business logic'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▸</span><span><strong className="text-white">MQTT</strong> — real-time {locale === 'uk' ? 'обмін даними з контролерами' : 'data exchange with controllers'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▸</span><span><strong className="text-white">Modbus TCP/IP</strong> — {locale === 'uk' ? 'комунікація з промисловими PLC' : 'communication with industrial PLCs'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▸</span><span><strong className="text-white">PostgreSQL / TimescaleDB</strong> — {locale === 'uk' ? 'зберігання телеметрії' : 'telemetry storage'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">▸</span><span><strong className="text-white">Redis</strong> — {locale === 'uk' ? 'кешування та черги повідомлень' : 'caching and message queues'}</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  {t.techFrontend}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▸</span><span><strong className="text-white">React / Vue</strong> — {locale === 'uk' ? 'адміністративна панель' : 'admin panel'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▸</span><span><strong className="text-white">Tailwind CSS</strong> — {locale === 'uk' ? 'адаптивний UI' : 'responsive UI'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▸</span><span><strong className="text-white">Recharts / Chart.js</strong> — {locale === 'uk' ? 'візуалізація даних' : 'data visualization'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▸</span><span><strong className="text-white">PWA</strong> — {locale === 'uk' ? 'мобільний застосунок без установки' : 'mobile app without installation'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-1">▸</span><span><strong className="text-white">Telegram Bot API</strong> — {locale === 'uk' ? 'інстант-нотифікації' : 'instant notifications'}</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  {t.techHardware}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▸</span><span><strong className="text-white">Raspberry Pi</strong> — edge computing</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▸</span><span><strong className="text-white">Schneider PLC</strong> — {locale === 'uk' ? 'промислові контролери' : 'industrial controllers'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">▸</span><span><strong className="text-white">SamWash Controller</strong> — {locale === 'uk' ? 'власні контролери автомийок' : 'proprietary car wash controllers'}</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  {t.techIntegrations}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span><span><strong className="text-white">REST API</strong> — {locale === 'uk' ? 'зовнішні системи' : 'external systems'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span><span><strong className="text-white">Email SMTP</strong> — {locale === 'uk' ? 'звітність' : 'reporting'}</span></li>
                  <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span><span><strong className="text-white">Diwave Cloud</strong> — {locale === 'uk' ? 'єдина екосистема' : 'unified ecosystem'}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.benefitsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 backdrop-blur">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{benefit.metric}</div>
                <div className="text-white font-semibold text-lg mb-2">{benefit.label}</div>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration with SamWash Ecosystem */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔗</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">{t.integrationTitle}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {t.integrations.map((int, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-white font-semibold mb-2">{int.title}</h3>
                  <p className="text-gray-300 text-sm">{int.desc}</p>
                </div>
              ))}
            </div>

            {/* QR Payment Demo Video */}
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📱</span>
                <h3 className="text-white font-semibold text-lg">
                  {locale === 'uk' ? 'Демо QR-оплати SamWash' : 'SamWash QR Payment Demo'}
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                {locale === 'uk'
                  ? 'Подивіться як працює безконтактна оплата через QR-код на автомийці самообслуговування'
                  : 'Watch how contactless QR-code payment works at a self-service car wash'}
              </p>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* YouTube Shorts Embed */}
                <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur mx-auto" style={{ aspectRatio: '9/16', maxWidth: '320px' }}>
                  <iframe
                    src="https://www.youtube.com/embed/VZXtZNfXdZ0?si=BzNYDudxHCENktTG"
                    title="SamWash QR Payment Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>

                {/* Video Description */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {locale === 'uk' ? 'Миттєва оплата' : 'Instant Payment'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {locale === 'uk'
                          ? 'Сканування QR-коду та оплата за 10 секунд'
                          : 'Scan QR code and pay in 10 seconds'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💳</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {locale === 'uk' ? 'Без готівки' : 'Cashless'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {locale === 'uk'
                          ? 'Apple Pay, Google Pay, картки'
                          : 'Apple Pay, Google Pay, cards'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {locale === 'uk' ? 'Автоматичний запуск' : 'Auto Start'}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {locale === 'uk'
                          ? 'Обладнання запускається автоматично після оплати'
                          : 'Equipment starts automatically after payment'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href="https://youtube.com/shorts/VZXtZNfXdZ0?feature=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium hover:from-red-600 hover:to-red-700 transition"
                    >
                      🎥 YouTube
                    </a>
                    <a
                      href={`${locale === 'en' ? '/en' : ''}/solutions/samwash-qr`}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/30 text-white text-sm hover:bg-white/10 transition"
                    >
                      {locale === 'uk' ? 'Детальніше про QR-систему' : 'Learn More About QR System'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25 text-lg">
                {t.ctaButton1}
              </a>
              <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold">
                {t.ctaButton2}
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">{t.ctaFooter}</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`${locale === 'en' ? '/en' : ''}/projects`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              {t.navProjects}
            </a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              {t.navSolutions}
            </a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/iot-scada`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              {t.navIoT}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
