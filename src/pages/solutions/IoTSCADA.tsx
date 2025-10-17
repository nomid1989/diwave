import React, { useState } from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import { motion } from 'framer-motion';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function IoTSCADA({ locale }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const content = {
    uk: {
      title: 'IoT & SCADA Рішення | Телеметрія та Моніторинг Обладнання 24/7 | Diwave',
      description: 'Професійні IoT/SCADA платформи від Diwave: підключення обладнання, телеметрія в реальному часі, AI-аналітика, MQTT/Modbus протоколи. Зменшення простою до 30%, віддалене керування, прогнозна аналітика. Понад 500+ підключених пристроїв.',
      keywords: 'IoT, SCADA, телеметрія, моніторинг обладнання, MQTT, Modbus, промислова автоматизація, Industry 4.0, IoT платформа, віддалене керування',

      // Hero
      badge: 'Industry 4.0',
      heroTitle: 'IoT & SCADA Платформи',
      heroTitleHighlight: 'для Промислової Автоматизації',
      heroDesc: 'Підключаємо обладнання, збираємо телеметрію, аналізуємо дані та автоматизуємо процеси. Віддалений моніторинг 24/7, прогнозна аналітика та зменшення простою на 30%.',
      ctaDemo: 'Демо платформи',
      ctaConsultation: 'Безкоштовна консультація',

      // Stats
      statsDevices: 'Підключених пристроїв',
      statsUptime: 'Uptime гарантія',
      statsDowntime: 'Зменшення простою',
      statsROI: 'ROI за перший рік',

      // What is IoT/SCADA
      whatTitle: 'Що таке IoT/SCADA рішення від Diwave?',
      whatDesc1: 'IoT (Internet of Things) + SCADA (Supervisory Control And Data Acquisition) — це комплексна система для підключення промислового обладнання до інтернету, збору телеметрії та автоматизації процесів.',
      whatDesc2: 'Diwave розробляє custom IoT/SCADA платформи для різних галузей: автомийки, вендинг, енергетика, виробництво. Наші системи працюють 24/7, збирають дані з тисяч датчиків та надають real-time аналітику.',
      whatDesc3: 'Використовуємо промислові протоколи (MQTT, Modbus, OPC UA), хмарні технології (AWS IoT, Azure IoT Hub) та AI для прогнозної аналітики.',

      // Features
      featuresTitle: '🚀 Можливості IoT/SCADA платформи',
      features: [
        {
          icon: '📡',
          title: 'Підключення обладнання',
          desc: 'Підтримка MQTT, Modbus RTU/TCP, OPC UA, HTTP/REST API. Готові модулі для контролерів Schneider Electric, Siemens, Omron.',
          items: ['MQTT 5.0 з QoS', 'Modbus RTU/TCP', 'OPC UA Client', 'REST API']
        },
        {
          icon: '📊',
          title: 'Real-time моніторинг',
          desc: 'Дашборди з візуалізацією даних у реальному часі. WebSocket оновлення, графіки, тренди, аларми.',
          items: ['Live дашборди', 'Графіки та тренди', 'Push-нотифікації', 'Історія подій']
        },
        {
          icon: '🤖',
          title: 'AI-аналітика та прогнози',
          desc: 'Machine Learning для прогнозування збоїв, оптимізації роботи та виявлення аномалій.',
          items: ['Прогнозна аналітика', 'Виявлення аномалій', 'Оптимізація роботи', 'ML-моделі']
        },
        {
          icon: '⚡',
          title: 'Автоматизація та тригери',
          desc: 'Автоматичні дії за подіями: сповіщення, команди пристроям, інтеграції з іншими системами.',
          items: ['Event-driven логіка', 'Webhooks', 'Email/SMS/Telegram', 'API інтеграції']
        },
        {
          icon: '🔒',
          title: 'Безпека та надійність',
          desc: 'Шифрування TLS/SSL, автентифікація JWT, роль-based доступ. 99.9% uptime SLA.',
          items: ['TLS 1.3 шифрування', 'JWT tokens', 'RBAC доступ', '99.9% uptime']
        },
        {
          icon: '📈',
          title: 'Звітність та аналітика',
          desc: 'Автоматичні звіти, KPI дашборди, експорт у CSV/Excel, інтеграція з BI системами.',
          items: ['KPI дашборди', 'Автозвіти', 'CSV/Excel експорт', 'BI інтеграція']
        }
      ],

      // Use Cases
      useCasesTitle: '💼 Кейси використання',
      useCases: [
        {
          title: '🚗 Автомийки самообслуговування',
          desc: 'Моніторинг 120+ мийок у реальному часі: стан постів, витрати води/хімії, платежі, аларми при збоях.',
          metrics: ['30% ↓ простій', '24/7 моніторинг', '15% ↓ витрати']
        },
        {
          title: '🍫 Вендингові мережі',
          desc: 'Телеметрія 500+ автоматів: залишки товарів, температура, готівка, маршрути інкасації.',
          metrics: ['10% ↑ продажі', 'Автомаршрути', 'Real-time stock']
        },
        {
          title: '⚡ Енергетика та EV зарядки',
          desc: 'Моніторинг зарядних станцій, споживання енергії, планування навантаження, біллінг.',
          metrics: ['99.9% uptime', 'Smart charging', 'Energy analytics']
        },
        {
          title: '🏭 Промислове виробництво',
          desc: 'SCADA для конвеєрів, роботів, датчиків. OEE метрики, прогнозне обслуговування.',
          metrics: ['25% ↑ OEE', 'Прогноз збоїв', 'Menos downtime']
        }
      ],

      // Tech Stack
      techTitle: '🛠️ Технологічний стек',
      techDesc: 'Використовуємо перевірені технології для промислової автоматизації:',
      techCategories: [
        {
          title: 'IoT Протоколи',
          items: ['MQTT 5.0 (HiveMQ, Mosquitto)', 'Modbus RTU/TCP', 'OPC UA', 'CoAP', 'LoRaWAN']
        },
        {
          title: 'Backend & AI',
          items: ['Node.js + TypeScript', 'Python FastAPI', 'TensorFlow/PyTorch для ML', 'PostgreSQL + TimescaleDB', 'Redis для кешування']
        },
        {
          title: 'Frontend',
          items: ['React + TypeScript', 'WebSocket для real-time', 'Recharts/D3.js для графіків', 'PWA для мобільних']
        },
        {
          title: 'Infrastructure',
          items: ['AWS IoT Core / Azure IoT Hub', 'Docker + Kubernetes', 'Grafana для моніторингу', 'Prometheus metrics']
        }
      ],

      // Pricing
      pricingTitle: '💰 Вартість IoT/SCADA рішення',
      pricingDesc: 'Ціна залежить від кількості пристроїв, функціоналу та інфраструктури. Орієнтовні ціни:',
      pricingPackages: [
        {
          name: 'Starter',
          price: '$3,000',
          desc: 'Для малого бізнесу',
          features: ['До 50 пристроїв', 'MQTT підключення', 'Базові дашборди', 'Email алерти', 'Cloud hosting', '3 місяці підтримки'],
          note: 'Від $50/міс за hosting'
        },
        {
          name: 'Professional',
          price: '$8,000',
          desc: 'Для середнього бізнесу',
          features: ['До 500 пристроїв', 'MQTT + Modbus', 'Custom дашборди', 'SMS/Telegram алерти', 'AI аналітика (базова)', 'Мобільний додаток', '6 місяців підтримки'],
          highlight: true,
          note: 'Від $200/міс за hosting'
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          desc: 'Для великих підприємств',
          features: ['Необмежено пристроїв', 'Всі протоколи', 'White-label платформа', 'Advanced AI/ML', 'On-premise hosting', 'SLA 99.9%', '12 місяців підтримки'],
          note: 'Індивідуальний розрахунок'
        }
      ],

      // Gallery
      galleryTitle: '📸 Приклади реалізацій',
      galleryDesc: 'Скриншоти реальних IoT/SCADA платформ від Diwave',

      // FAQ
      faqTitle: '❓ Часті питання',
      faq: [
        {
          q: 'Які пристрої можна підключити?',
          a: 'Будь-які пристрої з підтримкою MQTT, Modbus, OPC UA, HTTP API. Також працюємо з контролерами Schneider Electric, Siemens, Omron, Arduino, Raspberry Pi. Якщо пристрій має RS485/RS232 - підключимо через IoT-шлюз.'
        },
        {
          q: 'Чи можна інтегрувати з існуючими системами?',
          a: 'Так, інтегруємо з ERP (SAP, 1C), CRM (Salesforce, HubSpot), BI (Power BI, Tableau), payment системами. Надаємо REST API та webhooks для двостороннього обміну даними.'
        },
        {
          q: 'Як швидко можна запустити платформу?',
          a: 'Залежить від складності: базова платформа - 4-6 тижнів, складна з AI та інтеграціями - 2-3 місяці. Починаємо з Discovery та PoC (2 тижні).'
        },
        {
          q: 'Чи безпечна передача даних?',
          a: 'Так, використовуємо TLS 1.3 шифрування, JWT автентифікацію, role-based доступ. Дані зберігаються в захищених AWS/Azure дата-центрах з резервним копіюванням.'
        },
        {
          q: 'Які метрики можна отримувати?',
          a: 'Будь-які: температура, тиск, споживання енергії, вібрація, обороти, витрати води/газу, стан датчиків, лічильники, GPS координати. Все, що надає обладнання.'
        },
        {
          q: 'Чи підтримується on-premise розгортання?',
          a: 'Так, для Enterprise клієнтів розгортаємо платформу на власних серверах. Надаємо Docker образи та інструкції по налаштуванню.'
        }
      ],

      // CTA
      ctaTitle: 'Готові автоматизувати ваше обладнання?',
      ctaDesc: 'Отримайте безкоштовну консультацію від Diwave. Розберемо ваші потреби, запропонуємо архітектуру та розрахуємо ROI.',
      ctaButton: 'Замовити консультацію',

      // Navigation
      navCatalog: '← До каталогу Рішень',
      navProjects: 'Дивитись кейси',
      navIndustries: 'Індустрії'
    },
    en: {
      title: 'IoT & SCADA Solutions | 24/7 Equipment Telemetry and Monitoring | Diwave',
      description: 'Professional IoT/SCADA platforms from Diwave: equipment connectivity, real-time telemetry, AI analytics, MQTT/Modbus protocols. 30% downtime reduction, remote control, predictive analytics. 500+ connected devices.',
      keywords: 'IoT, SCADA, telemetry, equipment monitoring, MQTT, Modbus, industrial automation, Industry 4.0, IoT platform, remote control',

      badge: 'Industry 4.0',
      heroTitle: 'IoT & SCADA Platforms',
      heroTitleHighlight: 'for Industrial Automation',
      heroDesc: 'We connect equipment, collect telemetry, analyze data and automate processes. 24/7 remote monitoring, predictive analytics and 30% downtime reduction.',
      ctaDemo: 'Platform Demo',
      ctaConsultation: 'Free Consultation',

      statsDevices: 'Connected Devices',
      statsUptime: 'Uptime Guarantee',
      statsDowntime: 'Downtime Reduction',
      statsROI: 'ROI in First Year',

      whatTitle: 'What is Diwave IoT/SCADA Solution?',
      whatDesc1: 'IoT (Internet of Things) + SCADA (Supervisory Control And Data Acquisition) is a comprehensive system for connecting industrial equipment to the internet, collecting telemetry and automating processes.',
      whatDesc2: 'Diwave develops custom IoT/SCADA platforms for various industries: car washes, vending, energy, manufacturing. Our systems operate 24/7, collect data from thousands of sensors and provide real-time analytics.',
      whatDesc3: 'We use industrial protocols (MQTT, Modbus, OPC UA), cloud technologies (AWS IoT, Azure IoT Hub) and AI for predictive analytics.',

      featuresTitle: '🚀 IoT/SCADA Platform Features',
      features: [
        {
          icon: '📡',
          title: 'Equipment Connectivity',
          desc: 'Support for MQTT, Modbus RTU/TCP, OPC UA, HTTP/REST API. Ready modules for Schneider Electric, Siemens, Omron controllers.',
          items: ['MQTT 5.0 with QoS', 'Modbus RTU/TCP', 'OPC UA Client', 'REST API']
        },
        {
          icon: '📊',
          title: 'Real-time Monitoring',
          desc: 'Dashboards with real-time data visualization. WebSocket updates, charts, trends, alarms.',
          items: ['Live dashboards', 'Charts and trends', 'Push notifications', 'Event history']
        },
        {
          icon: '🤖',
          title: 'AI Analytics and Forecasts',
          desc: 'Machine Learning for failure prediction, operation optimization and anomaly detection.',
          items: ['Predictive analytics', 'Anomaly detection', 'Operation optimization', 'ML models']
        },
        {
          icon: '⚡',
          title: 'Automation and Triggers',
          desc: 'Automatic actions on events: notifications, device commands, integrations with other systems.',
          items: ['Event-driven logic', 'Webhooks', 'Email/SMS/Telegram', 'API integrations']
        },
        {
          icon: '🔒',
          title: 'Security and Reliability',
          desc: 'TLS/SSL encryption, JWT authentication, role-based access. 99.9% uptime SLA.',
          items: ['TLS 1.3 encryption', 'JWT tokens', 'RBAC access', '99.9% uptime']
        },
        {
          icon: '📈',
          title: 'Reporting and Analytics',
          desc: 'Automated reports, KPI dashboards, CSV/Excel export, BI systems integration.',
          items: ['KPI dashboards', 'Auto reports', 'CSV/Excel export', 'BI integration']
        }
      ],

      useCasesTitle: '💼 Use Cases',
      useCases: [
        {
          title: '🚗 Self-Service Car Washes',
          desc: 'Real-time monitoring of 120+ washes: bay status, water/chemical consumption, payments, failure alarms.',
          metrics: ['30% ↓ downtime', '24/7 monitoring', '15% ↓ costs']
        },
        {
          title: '🍫 Vending Networks',
          desc: 'Telemetry of 500+ machines: product stock, temperature, cash, collection routes.',
          metrics: ['10% ↑ sales', 'Auto routing', 'Real-time stock']
        },
        {
          title: '⚡ Energy and EV Charging',
          desc: 'Charging station monitoring, energy consumption, load planning, billing.',
          metrics: ['99.9% uptime', 'Smart charging', 'Energy analytics']
        },
        {
          title: '🏭 Industrial Manufacturing',
          desc: 'SCADA for conveyors, robots, sensors. OEE metrics, predictive maintenance.',
          metrics: ['25% ↑ OEE', 'Failure prediction', 'Less downtime']
        }
      ],

      techTitle: '🛠️ Technology Stack',
      techDesc: 'We use proven technologies for industrial automation:',
      techCategories: [
        {
          title: 'IoT Protocols',
          items: ['MQTT 5.0 (HiveMQ, Mosquitto)', 'Modbus RTU/TCP', 'OPC UA', 'CoAP', 'LoRaWAN']
        },
        {
          title: 'Backend & AI',
          items: ['Node.js + TypeScript', 'Python FastAPI', 'TensorFlow/PyTorch for ML', 'PostgreSQL + TimescaleDB', 'Redis for caching']
        },
        {
          title: 'Frontend',
          items: ['React + TypeScript', 'WebSocket for real-time', 'Recharts/D3.js for charts', 'PWA for mobile']
        },
        {
          title: 'Infrastructure',
          items: ['AWS IoT Core / Azure IoT Hub', 'Docker + Kubernetes', 'Grafana for monitoring', 'Prometheus metrics']
        }
      ],

      pricingTitle: '💰 IoT/SCADA Solution Cost',
      pricingDesc: 'Price depends on device count, functionality and infrastructure. Approximate prices:',
      pricingPackages: [
        {
          name: 'Starter',
          price: '$3,000',
          desc: 'For small business',
          features: ['Up to 50 devices', 'MQTT connectivity', 'Basic dashboards', 'Email alerts', 'Cloud hosting', '3 months support'],
          note: 'From $50/mo for hosting'
        },
        {
          name: 'Professional',
          price: '$8,000',
          desc: 'For medium business',
          features: ['Up to 500 devices', 'MQTT + Modbus', 'Custom dashboards', 'SMS/Telegram alerts', 'AI analytics (basic)', 'Mobile app', '6 months support'],
          highlight: true,
          note: 'From $200/mo for hosting'
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          desc: 'For large enterprises',
          features: ['Unlimited devices', 'All protocols', 'White-label platform', 'Advanced AI/ML', 'On-premise hosting', 'SLA 99.9%', '12 months support'],
          note: 'Custom calculation'
        }
      ],

      galleryTitle: '📸 Implementation Examples',
      galleryDesc: 'Screenshots of real IoT/SCADA platforms by Diwave',

      faqTitle: '❓ FAQ',
      faq: [
        {
          q: 'What devices can be connected?',
          a: 'Any devices with MQTT, Modbus, OPC UA, HTTP API support. We also work with Schneider Electric, Siemens, Omron, Arduino, Raspberry Pi controllers. If device has RS485/RS232 - we connect via IoT gateway.'
        },
        {
          q: 'Can it be integrated with existing systems?',
          a: 'Yes, we integrate with ERP (SAP, 1C), CRM (Salesforce, HubSpot), BI (Power BI, Tableau), payment systems. We provide REST API and webhooks for bidirectional data exchange.'
        },
        {
          q: 'How fast can the platform be launched?',
          a: 'Depends on complexity: basic platform - 4-6 weeks, complex with AI and integrations - 2-3 months. We start with Discovery and PoC (2 weeks).'
        },
        {
          q: 'Is data transmission secure?',
          a: 'Yes, we use TLS 1.3 encryption, JWT authentication, role-based access. Data stored in secure AWS/Azure data centers with backup.'
        },
        {
          q: 'What metrics can be obtained?',
          a: 'Any: temperature, pressure, energy consumption, vibration, RPM, water/gas consumption, sensor status, counters, GPS coordinates. Everything the equipment provides.'
        },
        {
          q: 'Is on-premise deployment supported?',
          a: 'Yes, for Enterprise clients we deploy the platform on own servers. We provide Docker images and setup instructions.'
        }
      ],

      ctaTitle: 'Ready to automate your equipment?',
      ctaDesc: 'Get a free consultation from Diwave. We\'ll analyze your needs, propose architecture and calculate ROI.',
      ctaButton: 'Request Consultation',

      navCatalog: '← Back to Solutions',
      navProjects: 'View Case Studies',
      navIndustries: 'Industries'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/solutions/iot-scada`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t.heroTitle,
      description: t.description,
      provider: {
        '@type': 'Organization',
        name: 'Diwave Solutions',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`
      },
      areaServed: ['UA', 'EU', 'US'],
      inLanguage: ['uk', 'en'],
      url,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '3000',
        highPrice: '50000',
        offerCount: '3'
      }
    }
  ];

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/solutions/iot/hero.jpg`}
        locale={locale}
        keywords={t.keywords}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/solutions/iot-scada` },
          { hrefLang: 'en', href: `${baseUrl}/en/solutions/iot-scada` },
          { hrefLang: 'x-default', href: `${baseUrl}/solutions/iot-scada` }
        ]}
        jsonLd={jsonLd}
      />

      <main className="relative bg-black text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[600px] flex items-center">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-glass-overlay" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                {t.badge}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                {t.heroTitle}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {t.heroTitleHighlight}
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`${locale === 'en' ? '/en' : ''}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all shadow-2xl"
                >
                  {t.ctaDemo}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={`${locale === 'en' ? '/en' : ''}/contact`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  {t.ctaConsultation}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: t.statsDevices },
              { value: '99.9%', label: t.statsUptime },
              { value: '-30%', label: t.statsDowntime },
              { value: '200%', label: t.statsROI }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What is IoT/SCADA */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.whatTitle}</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>{t.whatDesc1}</p>
            <p>{t.whatDesc2}</p>
            <p>{t.whatDesc3}</p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/30 transition-all">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.useCasesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.useCases.map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.techTitle}</h2>
          <p className="text-xl text-gray-300 text-center mb-12">{t.techDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.techCategories.map((category, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.pricingTitle}</h2>
          <p className="text-xl text-gray-300 text-center mb-12">{t.pricingDesc}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.pricingPackages.map((pkg, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border ${pkg.highlight ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10 bg-white/5'} backdrop-blur`}
              >
                {pkg.highlight && (
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-500 text-white text-sm font-bold mb-4">
                    Популярний
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                <p className="text-gray-400 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500">{pkg.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.galleryTitle}</h2>
          <p className="text-xl text-gray-300 text-center mb-12">{t.galleryDesc}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  sources={[
                    `/images/solutions/iot/dashboard-${num}.jpg`,
                    `/images/projects/car-wash/screenshot-${num}.jpg`
                  ]}
                  alt={`IoT/SCADA Dashboard ${num}`}
                  className="w-full h-64"
                  imgClassName="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faq.map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{item.q}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.ctaDesc}</p>
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all shadow-2xl"
            >
              {t.ctaButton}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              {t.navCatalog}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/projects`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              {t.navProjects}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/industries`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              {t.navIndustries}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
