import React from 'react';

type Props = { locale: 'uk' | 'en' };

// ==================== SOLUTIONS PAGE ====================
export const SolutionsSection: React.FC<Props> = ({ locale }) => {
  const content = {
    uk: {
      title: 'Комплексні рішення для автоматизації бізнесу',
      intro: 'Diwave пропонує готові технологічні рішення, які покривають весь цикл автоматизації — від ідеї до впровадження. Наші продукти створені на базі реального досвіду роботи з 10+ галузями та перевірені на практиці в умовах високого навантаження. Кожне рішення модульне, масштабоване та готове до інтеграції з вашими існуючими системами.',
      subtitle: 'Що ми пропонуємо:',
      items: [
        { icon: '🚗', title: 'QR-платежі Samwash', desc: 'безготівкова оплата для автомийок та вендингу з AI-адаптацією під локацію' },
        { icon: '📡', title: 'IoT/SCADA платформи', desc: 'телеметрія обладнання, моніторинг у реальному часі, MQTT/Modbus' },
        { icon: '🛒', title: 'E-commerce інтеграції', desc: 'ERP/CRM підключення, омніканальність, GEO/SEO оптимізація' },
        { icon: '🤖', title: 'AI/ML сервіси', desc: 'RAG Copilot, автоматизація процесів, аналітика та прогнозування' },
        { icon: '📊', title: 'Маркетингова аналітика', desc: 'метрики конверсій, A/B тестування, Google Analytics 4, GTM' }
      ],
      outro: 'Усі рішення розроблені з урахуванням вимог безпеки (GDPR, PCI DSS), масштабованості (10,000+ одночасних користувачів) та стабільності (99.9% uptime). Підтримуємо мультимовність (UK/EN/інші мови), white-label брендування та гнучку модель ліцензування.',
      links: [
        { href: '/solutions/samwash-qr', text: 'QR-платежі Samwash' },
        { href: '/solutions/car-washes', text: 'IoT для автомийок' },
        { href: '/solutions/ecommerce', text: 'E-commerce рішення' },
        { href: '/solutions/iot-scada', text: 'IoT/SCADA платформи' },
        { href: '/solutions/marketing', text: 'Маркетингова аналітика' }
      ]
    },
    en: {
      title: 'Comprehensive Business Automation Solutions',
      intro: 'Diwave offers ready-made technology solutions covering the entire automation cycle — from concept to deployment. Our products are built on real-world experience across 10+ industries and proven in high-load production environments. Each solution is modular, scalable, and ready for integration with your existing systems.',
      subtitle: 'What we offer:',
      items: [
        { icon: '🚗', title: 'Samwash QR Payments', desc: 'cashless payment for car washes and vending with AI location adaptation' },
        { icon: '📡', title: 'IoT/SCADA Platforms', desc: 'equipment telemetry, real-time monitoring, MQTT/Modbus protocols' },
        { icon: '🛒', title: 'E-commerce Integrations', desc: 'ERP/CRM connectivity, omnichannel commerce, GEO/SEO optimization' },
        { icon: '🤖', title: 'AI/ML Services', desc: 'RAG Copilot, process automation, analytics and forecasting' },
        { icon: '📊', title: 'Marketing Analytics', desc: 'conversion metrics, A/B testing, Google Analytics 4, GTM' }
      ],
      outro: 'All solutions are developed with security requirements (GDPR, PCI DSS), scalability (10,000+ concurrent users), and stability (99.9% uptime) in mind. We support multilingual implementation (UK/EN/other languages), white-label branding, and flexible licensing models.',
      links: [
        { href: '/en/solutions/samwash-qr', text: 'Samwash QR Payments' },
        { href: '/en/solutions/car-washes', text: 'IoT for Car Washes' },
        { href: '/en/solutions/ecommerce', text: 'E-commerce Solutions' },
        { href: '/en/solutions/iot-scada', text: 'IoT/SCADA Platforms' },
        { href: '/en/solutions/marketing', text: 'Marketing Analytics' }
      ]
    }
  };

  const c = content[locale];

  return (
    <section className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/70 bg-white/5 dark:bg-white/5 light:bg-gray-50/95 backdrop-blur-xl">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-4 tracking-tight leading-tight">{c.title}</h2>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.intro}</p>
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-3 tracking-tight">{c.subtitle}</h3>
      <ul className="space-y-3 text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed">
        {c.items.map((item, i) => (
          <li key={i} className="tracking-wide">
            <span className="text-xl sm:text-2xl mr-2" role="img" aria-label={item.title}>{item.icon}</span>
            <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-semibold">{item.title}</strong> — {item.desc}
          </li>
        ))}
      </ul>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.outro}</p>
      <div className="flex flex-wrap gap-3 text-sm sm:text-base">
        {c.links.map((link, i) => (
          <a key={i} href={link.href} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline font-medium transition-colors">
            → {link.text}
          </a>
        ))}
      </div>
    </section>
  );
};

// ==================== PROJECTS PAGE ====================
export const ProjectsSection: React.FC<Props> = ({ locale }) => {
  const content = {
    uk: {
      title: 'Наші проєкти — від ідеї до результату',
      intro: 'Кожен проєкт у нашому портфоліо — це реальний бізнес-кейс з вимірюваними результатами. Ми спеціалізуємося на автоматизації складних процесів: від IoT-телеметрії автомийок з EBITDA 70% до e-commerce платформ із 5000+ SKU, від алко-вендингу з KYC до операцій із дронами. Наш досвід охоплює 10+ галузей та 14+ років розробки.',
      subtitle: 'Типові результати наших проєктів:',
      results: [
        { icon: '✓', title: 'Зростання EBITDA', desc: 'на 30-70% через автоматизацію та оптимізацію процесів' },
        { icon: '✓', title: 'Скорочення операційних витрат', desc: 'на 40-75% завдяки автоматизації та зменшенню штату' },
        { icon: '✓', title: 'Підвищення конверсії', desc: 'на 25-40% через покращення UX та інтеграції' },
        { icon: '✓', title: 'Масштабованість', desc: 'готові рішення для швидкого розгортання на нові локації' }
      ],
      outro: 'Від телеметрії обладнання та безготівкових платежів до CRM/loyalty систем та AI/ML — ми покриваємо full-stack розробку з інтеграцією в існуючі ERP/CRM. Технології: IoT/SCADA, React/Node.js, Python/FastAPI, PostgreSQL/MongoDB, AWS/GCP, MQTT/Modbus.',
      links: [
        { href: '/projects/car-wash', text: 'Кейс: Автомийки з IoT' },
        { href: '/projects/plantpol', text: 'Кейс: E-commerce Plantpol' },
        { href: '/projects/vending', text: 'Кейс: Алко-вендинг з KYC' },
        { href: '/projects/gnizdo', text: 'Кейс: Дрони Gnizdo' }
      ]
    },
    en: {
      title: 'Our Projects — From Concept to Results',
      intro: 'Each project in our portfolio is a real business case with measurable results. We specialize in automating complex processes: from IoT telemetry for car washes with 70% EBITDA to e-commerce platforms with 5000+ SKUs, from alcohol vending with KYC to drone operations. Our experience spans 10+ industries and 14+ years of development.',
      subtitle: 'Typical project outcomes:',
      results: [
        { icon: '✓', title: 'EBITDA Growth', desc: '30-70% through automation and process optimization' },
        { icon: '✓', title: 'Operating Cost Reduction', desc: '40-75% via automation and workforce optimization' },
        { icon: '✓', title: 'Conversion Rate Increase', desc: '25-40% through UX improvements and integrations' },
        { icon: '✓', title: 'Scalability', desc: 'ready-to-deploy solutions for rapid expansion to new locations' }
      ],
      outro: 'From equipment telemetry and cashless payments to CRM/loyalty systems and AI/ML — we cover full-stack development with integration into existing ERP/CRM systems. Technologies: IoT/SCADA, React/Node.js, Python/FastAPI, PostgreSQL/MongoDB, AWS/GCP, MQTT/Modbus.',
      links: [
        { href: '/en/projects/car-wash', text: 'Case: Car Wash IoT' },
        { href: '/en/projects/plantpol', text: 'Case: E-commerce Plantpol' },
        { href: '/en/projects/vending', text: 'Case: Alcohol Vending with KYC' },
        { href: '/en/projects/gnizdo', text: 'Case: Gnizdo Drones' }
      ]
    }
  };

  const c = content[locale];

  return (
    <section className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/70 bg-white/5 dark:bg-white/5 light:bg-gray-50/95 backdrop-blur-xl">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold  dark:text-white light:text-gray-900 mb-4 tracking-tight leading-tight">{c.title}</h2>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.intro}</p>
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold  dark:text-white light:text-gray-900 mb-3 tracking-tight">{c.subtitle}</h3>
      <ul className="space-y-3 text-base sm:text-lg  dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed">
        {c.results.map((r, i) => (
          <li key={i} className="tracking-wide">
            <span className="text-xl sm:text-2xl mr-2 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" role="img">{r.icon}</span>
            <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-semibold">{r.title}</strong> {r.desc}
          </li>
        ))}
      </ul>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.outro}</p>
      <div className="flex flex-wrap gap-3 text-sm sm:text-base">
        {c.links.map((link, i) => (
          <a key={i} href={link.href} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline font-medium transition-colors">
            → {link.text}
          </a>
        ))}
      </div>
    </section>
  );
};

// ==================== INDUSTRIES PAGE ====================
export const IndustriesSection: React.FC<Props> = ({ locale }) => {
  const content = {
    uk: {
      title: 'Галузева експертиза для вашого бізнесу',
      intro: '14+ років досвіду роботи в 15 різних індустріях дозволяють нам розуміти специфіку кожної галузі та пропонувати не просто технічні рішення, а готові бізнес-моделі. Ми знаємо виклики ринку, регуляторні вимоги та best practices кожної індустрії — від Automotive до Robotics.',
      subtitle: 'Наша галузева експертиза:',
      industries: [
        { icon: '🚗', title: 'Automotive', desc: 'автомийки з IoT/SCADA, +30% EBITDA, телеметрія обладнання, безготівкові платежі' },
        { icon: '🍫', title: 'Vending', desc: 'KYC верифікація, cashless платежі, телеметрія запасів, моніторинг мережі 24/7' },
        { icon: '💳', title: 'Fintech', desc: 'платіжні шлюзи, антифрод системи, PCI DSS compliance, +8 п.п. auth rate' },
        { icon: '🛒', title: 'Retail/E-commerce', desc: 'омніканальність, ERP інтеграції, +25% конверсії, GEO-SEO' },
        { icon: '✈️', title: 'Logistics/Дрони', desc: 'Gnizdo операції, трекінг у реальному часі, геозони, автопілот' },
        { icon: '📡', title: 'IoT/SCADA', desc: 'MQTT/Modbus, HMI/SCADA, прогнозна аналітика, edge computing' },
        { icon: '🤖', title: 'AI/ML', desc: 'RAG Copilot, LLM інтеграції, predictive maintenance, -40% часу на завдання' },
        { icon: '🛡️', title: 'Cybersecurity', desc: 'SIEM/SOAR, Zero-Trust архітектура, threat intelligence' }
      ],
      outro: 'Також працюємо з Healthcare (telemedicine, EHR/HL7), ClimateTech/ESG (вуглецевий слід, -25% енергії), Agritech (precision farming, NDVI), Hospitality (dynamic pricing), PropTech (smart buildings, BMS), EV Charging (OCPP, балансування), Robotics (AMR/AGV, WMS інтеграції).',
      links: [
        { href: '/industries/automotive', text: 'Automotive' },
        { href: '/industries/vending', text: 'Vending' },
        { href: '/industries/fintech', text: 'Fintech' },
        { href: '/industries/retail', text: 'Retail' },
        { href: '/industries/logistics', text: 'Logistics' },
        { href: '/industries/iot', text: 'IoT/SCADA' }
      ]
    },
    en: {
      title: 'Industry Expertise for Your Business',
      intro: '14+ years of experience across 15 different industries allow us to understand the specifics of each sector and offer not just technical solutions, but ready-made business models. We know market challenges, regulatory requirements, and best practices for every industry — from Automotive to Robotics.',
      subtitle: 'Our industry expertise:',
      industries: [
        { icon: '🚗', title: 'Automotive', desc: 'car wash IoT/SCADA, +30% EBITDA, equipment telemetry, cashless payments' },
        { icon: '🍫', title: 'Vending', desc: 'KYC verification, cashless payments, inventory telemetry, 24/7 network monitoring' },
        { icon: '💳', title: 'Fintech', desc: 'payment gateways, anti-fraud systems, PCI DSS compliance, +8pp auth rate' },
        { icon: '🛒', title: 'Retail/E-commerce', desc: 'omnichannel, ERP integrations, +25% conversion, GEO-SEO' },
        { icon: '✈️', title: 'Logistics/Drones', desc: 'Gnizdo operations, real-time tracking, geofencing, autopilot' },
        { icon: '📡', title: 'IoT/SCADA', desc: 'MQTT/Modbus, HMI/SCADA, predictive analytics, edge computing' },
        { icon: '🤖', title: 'AI/ML', desc: 'RAG Copilot, LLM integrations, predictive maintenance, -40% task time' },
        { icon: '🛡️', title: 'Cybersecurity', desc: 'SIEM/SOAR, Zero-Trust architecture, threat intelligence' }
      ],
      outro: 'We also work with Healthcare (telemedicine, EHR/HL7), ClimateTech/ESG (carbon footprint, -25% energy), Agritech (precision farming, NDVI), Hospitality (dynamic pricing), PropTech (smart buildings, BMS), EV Charging (OCPP, load balancing), Robotics (AMR/AGV, WMS integrations).',
      links: [
        { href: '/en/industries/automotive', text: 'Automotive' },
        { href: '/en/industries/vending', text: 'Vending' },
        { href: '/en/industries/fintech', text: 'Fintech' },
        { href: '/en/industries/retail', text: 'Retail' },
        { href: '/en/industries/logistics', text: 'Logistics' },
        { href: '/en/industries/iot', text: 'IoT/SCADA' }
      ]
    }
  };

  const c = content[locale];

  return (
    <section className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/70 bg-white/5 dark:bg-white/5 light:bg-gray-50/95 backdrop-blur-xl">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-4 tracking-tight leading-tight">{c.title}</h2>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.intro}</p>
      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-3 tracking-tight">{c.subtitle}</h3>
      <ul className="space-y-3 text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed">
        {c.industries.map((ind, i) => (
          <li key={i} className="tracking-wide">
            <span className="text-xl sm:text-2xl mr-2" role="img" aria-label={ind.title}>{ind.icon}</span>
            <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-semibold">{ind.title}</strong> — {ind.desc}
          </li>
        ))}
      </ul>
      <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200 light:text-gray-700 mb-4 leading-relaxed tracking-wide">{c.outro}</p>
      <div className="flex flex-wrap gap-3 text-sm sm:text-base">
        {c.links.map((link, i) => (
          <a key={i} href={link.href} className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline font-medium transition-colors">
            → {link.text}
          </a>
        ))}
      </div>
    </section>
  );
};
