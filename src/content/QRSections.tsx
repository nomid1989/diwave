import React from 'react';

export const SolutionsQRSection: React.FC = () => (
  <section className="mt-12 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/60 backdrop-blur-xl">
    <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Комплексні рішення для автоматизації бізнесу</h2>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
      Diwave пропонує готові технологічні рішення, які покривають весь цикл автоматизації — від ідеї до впровадження.
      Наші продукти створені на базі реального досвіду роботи з 10+ галузями та перевірені на практиці в умовах високого
      навантаження. Кожне рішення — модульне, масштабоване та готове до інтеграції з вашими існуючими системами.
    </p>
    <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-3">Що ми пропонуємо:</h3>
    <ul className="space-y-2 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
      <li>🚗 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">QR-платежі Samwash</strong> — безготівкова оплата для автомийок та вендингу з AI-адаптацією під локацію</li>
      <li>📡 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">IoT/SCADA платформи</strong> — телеметрія обладнання, моніторинг в реальному часі, MQTT/Modbus</li>
      <li>🛒 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">E-commerce інтеграції</strong> — ERP/CRM підключення, багатоканальність, GEO/SEO оптимізація</li>
      <li>🤖 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">AI/ML сервіси</strong> — RAG Copilot, автоматизація процесів, аналітика та прогнозування</li>
      <li>📊 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Маркетингова аналітика</strong> — метрики конверсій, A/B тестування, Google Analytics 4, GTM</li>
    </ul>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-3 leading-relaxed">
      Всі рішення розроблені з урахуванням вимог безпеки (GDPR, PCI DSS), масштабованості (10,000+ одночасних користувачів)
      та стабільності (99.9% uptime). Підтримуємо мультимовність (UK/EN + інші мови), white-label брендування та гнучку
      модель ліцензування.
    </p>
    <div className="flex flex-wrap gap-3 text-sm">
      <a href="/solutions/samwash-qr" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ QR-платежі Samwash</a>
      <a href="/solutions/car-washes" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ IoT для автомийок</a>
      <a href="/solutions/ecommerce" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ E-commerce рішення</a>
      <a href="/solutions/iot-scada" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ IoT/SCADA платформи</a>
      <a href="/solutions/marketing" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Маркетингова аналітика</a>
    </div>
  </section>
);

export const ProjectsQRSection: React.FC = () => (
  <section className="mt-12 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/60 backdrop-blur-xl">
    <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Наші проєкти — від ідеї до результату</h2>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
      Кожен проєкт у нашому портфоліо — це реальний бізнес-кейс з вимірюваними результатами. Ми спеціалізуємося на автоматизації
      складних процесів: від IoT-телеметрії автомийок з EBITDA 70% до e-commerce платформ з 5000+ SKU, від алко-вендингу з KYC
      до операцій з дронами. Наш досвід охоплює 10+ галузей та 14+ років розробки.
    </p>
    <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-3">Типові результати наших проєктів:</h3>
    <ul className="space-y-2 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
      <li>✓ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Зростання EBITDA</strong> на 30-70% через автоматизацію та оптимізацію процесів</li>
      <li>✓ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Скорочення операційних витрат</strong> на 40-75% завдяки автоматизації та зменшенню штату</li>
      <li>✓ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Підвищення конверсії</strong> на 25-40% через покращення UX та інтеграції</li>
      <li>✓ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Масштабованість</strong> — готові рішення для швидкого розгортання на нові локації</li>
    </ul>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-3 leading-relaxed">
      Від телеметрії обладнання та безготівкових платежів до CRM/loyalty систем та AI/ML — ми покриваємо full-stack розробку
      з інтеграцією в існуючі ERP/CRM. Технології: IoT/SCADA, React/Node.js, Python/FastAPI, PostgreSQL/MongoDB,
      AWS/GCP, MQTT/Modbus.
    </p>
    <div className="flex flex-wrap gap-3 text-sm">
      <a href="/projects/car-wash" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Кейс: Автомийки з IoT</a>
      <a href="/projects/plantpol" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Кейс: E-commerce Plantpol</a>
      <a href="/projects/vending" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Кейс: Алко-вендинг з KYC</a>
      <a href="/projects/gnizdo" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Кейс: Дрони Gnizdo</a>
    </div>
  </section>
);

export const IndustriesQRSection: React.FC = () => (
  <section className="mt-12 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200/60 bg-white/3 dark:bg-white/3 light:bg-white/60 backdrop-blur-xl">
    <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Галузева експертиза для вашого бізнесу</h2>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
      14+ років досвіду роботи в 15 різних індустріях дозволяють нам розуміти специфіку кожної галузі та пропонувати
      не просто технічні рішення, а готові бізнес-моделі. Ми знаємо виклики ринку, регуляторні вимоги та best practices
      кожної індустрії — від Automotive до Robotics.
    </p>
    <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-3">Наша галузева експертиза:</h3>
    <ul className="space-y-2 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
      <li>🚗 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Automotive</strong> — автомийки з IoT/SCADA, +30% EBITDA, телеметрія обладнання, безготівкові платежі</li>
      <li>🍫 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Vending</strong> — KYC верифікація, cashless платежі, телеметрія запасів, моніторинг мережі 24/7</li>
      <li>💳 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Fintech</strong> — платіжні шлюзи, антифрод системи, PCI DSS compliance, +8 п.п. auth rate</li>
      <li>🛒 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Retail/E-commerce</strong> — омніканальність, ERP інтеграції, +25% конверсії, GEO-SEO</li>
      <li>✈️ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Logistics/Дрони</strong> — Gnizdo операції, трекінг в реальному часі, геозони, автопілот</li>
      <li>📡 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">IoT/SCADA</strong> — MQTT/Modbus, HMI/SCADA, прогнозна аналітика, edge computing</li>
      <li>🤖 <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">AI/ML</strong> — RAG Copilot, LLM інтеграції, predictive maintenance, -40% часу на завдання</li>
      <li>🛡️ <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Cybersecurity</strong> — SIEM/SOAR, Zero-Trust архітектура, threat intelligence</li>
    </ul>
    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-3 leading-relaxed">
      Також працюємо з Healthcare (telemedicine, EHR/HL7), ClimateTech/ESG (вуглецевий слід, -25% енергії),
      Agritech (precision farming, NDVI), Hospitality (dynamic pricing), PropTech (smart buildings, BMS),
      EV Charging (OCPP, балансування), Robotics (AMR/AGV, WMS інтеграції).
    </p>
    <div className="flex flex-wrap gap-3 text-sm">
      <a href="/industries/automotive" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Automotive</a>
      <a href="/industries/vending" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Vending</a>
      <a href="/industries/fintech" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Fintech</a>
      <a href="/industries/retail" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Retail</a>
      <a href="/industries/logistics" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ Logistics</a>
      <a href="/industries/iot" className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 hover:underline">→ IoT/SCADA</a>
    </div>
  </section>
);
