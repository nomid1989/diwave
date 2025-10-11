export type IndustryDetails = {
  challenge: string;
  solution: string;
  results: string[];
  cta?: { label: string; href: string };
};

export type IndustryItem = {
  slug: string;
  title: string;
  description: string;
  imgFolder: string; // e.g. "/images/industries/automotive"
  imgAlt: string;
  details: IndustryDetails;
};

export const getIndustries = (locale: 'uk' | 'en'): { title: string; items: IndustryItem[] } => {
  const t = (uk: string, en: string) => (locale === 'uk' ? uk : en);
  return {
    title: t('Індустрії', 'Industries'),
    items: [
      // ✅ ПОВНІСТЮ ЗАПОВНЕНІ - детальні сторінки з багато контенту
      {
        slug: 'automotive',
        title: t('Автомийки та Automotive', 'Automotive & Car Wash'),
        description: t(
          'IoT/SCADA, телеметрія, безготівкові платежі, CRM та лояльність. Підвищуємо EBITDA й скорочуємо простій.',
          'IoT/SCADA, telemetry, cashless payments, CRM and loyalty. Maximize EBITDA and reduce downtime.'
        ),
        imgFolder: '/images/industries/automotive',
        imgAlt: t('Автомийка самообслуговування', 'Self-service car wash'),
        details: {
          challenge: t(
            'Фрагментована інфраструктура, відсутність єдиного моніторингу, ручний облік і простої обладнання без швидкого виявлення причин.',
            'Fragmented infrastructure, lack of unified monitoring, manual accounting and equipment downtime without quick root-cause detection.'
          ),
          solution: t(
            'Єдина платформа IoT/SCADA з телеметрією у реальному часі, панелі для власника та оператора, cashless‑платежі (Apple/Google Pay), CRM і програми лояльності з персоналізацією, антифрод та ролі. Інтеграції з контролерами, банком, бухгалтерією.',
            'Unified IoT/SCADA platform with real‑time telemetry, owner/operator dashboards, cashless payments (Apple/Google Pay), CRM and personalized loyalty, antifraud and roles. Integrations with controllers, banking and accounting.'
          ),
          results: [
            t('EBITDA +10–30% завдяки прозорості й оптимізації витрат', 'EBITDA +10–30% via transparency and cost optimization'),
            t('Простій ↓ до 30% завдяки оповіщенням та предиктивному сервісу', 'Downtime ↓ up to 30% via alerts and predictive service'),
            t('NPS +15 п.п., повторні покупки через лояльність', 'NPS +15 pp, repeat purchases via loyalty')
          ],
          cta: { label: t('Кейс: QR для автомийок', 'Case: Car Wash QR'), href: '/industries/automotive/car-wash-qr' }
        }
      },
      {
        slug: 'vending',
        title: t('Вендинг та самообслуговування', 'Vending & Self-service'),
        description: t(
          'Термінали, ідентифікація, KYC, безготівкові оплати, дистанційний моніторинг і поповнення.',
          'Terminals, identification, KYC, cashless payments, remote monitoring and replenishment.'
        ),
        imgFolder: '/images/industries/vending',
        imgAlt: t('Вендинговий автомат', 'Vending machine'),
        details: {
          challenge: t(
            'Неконтрольовані інкасації, втрати від крадіжок, простої, відсутність єдиної картини продажів та стану парку.',
            'Uncontrolled cash collection, shrinkage, downtime, no unified view of fleet sales and health.'
          ),
          solution: t(
            'Телеметрія обладнання, безготівкові оплати, віддалені оновлення меню/цін, маршрути для інкасацій, відстеження залишків, push‑алерти для сервісу. KYC/AML для ідентифікації та антифрод.',
            'Device telemetry, cashless payments, remote menu/price updates, cash collection routing, stock tracking, service push alerts. KYC/AML for identification and antifraud.'
          ),
          results: [
            t('Дохід +7–20% завдяки безготівковим і динамічним цінам', 'Revenue +7–20% via cashless and dynamic pricing'),
            t('OPEX ↓ завдяки оптимізації маршрутів і планового сервісу', 'OPEX ↓ via route optimization and planned service'),
            t('Прозора звірка інкасацій і зменшення втрат', 'Transparent reconciliation and shrinkage reduction')
          ]
        }
      },
      {
        slug: 'fintech',
        title: t('Fintech & Платежі', 'Fintech & Payments'),
        description: t(
          'Єдині платіжні шлюзи, антифрод, повторні білінги, маршрутизація платежів, звірка.',
          'Unified payment gateways, antifraud, recurring billing, payment routing, reconciliation.'
        ),
        imgFolder: '/images/industries/fintech',
        imgAlt: t('Фінтех-платежі', 'Fintech payments'),
        details: {
          challenge: t(
            'Низький показник авторизації, висока доля declined, множинні інтерфейси та ручна звірка.',
            'Low auth rate, high decline share, multiple interfaces and manual reconciliation.'
          ),
          solution: t(
            'Єдиний платіжний шар із маршрутизацією між PSP/банками, повторні білінги, токенізація карт, антифрод, інвойсинг, webhooks і єдина звірка.',
            'Unified payment layer with routing across PSP/banks, recurring billing, card tokenization, antifraud, invoicing, webhooks and unified reconciliation.'
          ),
          results: [
            t('Auth rate +3–8 п.п., конверсія в оплату ↑', 'Auth rate +3–8 pp, payment conversion ↑'),
            t('Chargebacks ↓ завдяки антифроду та 3DS‑флоу', 'Chargebacks ↓ via antifraud and 3DS flow'),
            t('Фінзвітність у єдиному форматі', 'Financial reporting in a unified format')
          ]
        }
      },
      {
        slug: 'energy',
        title: t('Енергетика та Utilities', 'Energy & Utilities'),
        description: t(
          'Облік, smart meters, енергомоніторинг, оповіщення, рекомендації з економії.',
          'Metering, smart meters, energy monitoring, alerts, saving recommendations.'
        ),
        imgFolder: '/images/industries/energy',
        imgAlt: t('Енергомоніторинг', 'Energy monitoring'),
        details: {
          challenge: t(
            'Непередбачувані рахунки, ручний знім показників, відсутність прозорості та дій за відхиленнями.',
            'Unpredictable bills, manual reads, lack of transparency and actions on anomalies.'
          ),
          solution: t(
            'Підключення smart‑лічильників, агрегація споживання, дашборди по об’єктах/зонах, оповіщення при відхиленнях, рекомендації зі зниження піків.',
            'Smart meter connectivity, consumption aggregation, site/zone dashboards, anomaly alerts, peak‑shaving recommendations.'
          ),
          results: [
            t('Економія 10–25% за рахунок управління піками', 'Savings 10–25% via peak management'),
            t('Швидке виявлення витоків та аварій', 'Fast leak and incident detection'),
            t('Прогнозування витрат і бюджетування', 'Spend forecasting and budgeting')
          ]
        }
      },
      {
        slug: 'retail',
        title: t('Retail & eCommerce', 'Retail & eCommerce'),
        description: t(
          'Інтеграції з CMS/ERP, кошик, склад, доставка, чек-аут, SEO/GEO росту органіки.',
          'Integrations with CMS/ERP, cart, inventory, shipping, checkout, SEO/GEO growth.'
        ),
        imgFolder: '/images/industries/retail',
        imgAlt: t('Рітейл та eCommerce', 'Retail and eCommerce'),
        details: {
          challenge: t(
            'Низька конверсія, повільний чек‑аут, розірвана аналітика між онлайн/офлайн.',
            'Low conversion, slow checkout, disconnected online/offline analytics.'
          ),
          solution: t(
            'Omni‑канальний каталог, швидкий чек‑аут (1‑2 кроки), інтеграції з ERP/WMS/кур’єрами, персональні промо, GEO‑SEO і наскрізна аналітика.',
            'Omnichannel catalog, fast checkout (1–2 steps), ERP/WMS/courier integrations, personal promos, GEO‑SEO and end‑to‑end analytics.'
          ),
          results: [
            t('Конверсія +10–25%', 'Conversion +10–25%'),
            t('LTV ↑ завдяки персоналізації та CRM', 'LTV ↑ via personalization and CRM'),
            t('Зниження відмов у кошику', 'Checkout drop‑off reduction')
          ]
        }
      },
      {
        slug: 'logistics',
        title: t('Логістика та Дрони', 'Logistics & Drones'),
        description: t(
          'Операції з дронами, змагання, трекінг, геозони, маршрути, аналітика.',
          'Drone operations, competitions, tracking, geofencing, routing, analytics.'
        ),
        imgFolder: '/images/industries/logistics',
        imgAlt: t('Дрони', 'Drones'),
        details: {
          challenge: t(
            'Складність планування місій, безпека польотів, комплаєнс і облік перельотів.',
            'Mission planning complexity, flight safety, compliance and flight accounting.'
          ),
          solution: t(
            'Планувальник місій, геозони та маршрути, трекінг у реальному часі, рейтинги, змагання та реплеї польотів. Інтеграції з телеметрією дронів.',
            'Mission planner, geofences and routes, real‑time tracking, rankings, competitions and flight replays. Drone telemetry integrations.'
          ),
          results: [
            t('Прозорі операції та комплаєнс', 'Transparent operations and compliance'),
            t('Менше інцидентів завдяки контролю зон/висот', 'Fewer incidents via zone/altitude control'),
            t('Аналітика ефективності пілотів/команд', 'Pilot/team performance analytics')
          ]
        }
      },
      {
        slug: 'iot',
        title: t('IoT та SCADA', 'IoT & SCADA'),
        description: t(
          'Підключаємо пристрої, збираємо дані, автоматизуємо процеси та підвищуємо ефективність.',
          'Connect devices, collect data, automate processes and increase efficiency.'
        ),
        imgFolder: '/images/industries/iot',
        imgAlt: t('IoT/SCADA', 'IoT/SCADA'),
        details: {
          challenge: t(
            'Довгий time‑to‑market і висока ціна інтеграцій, складні апаратні протоколи.',
            'Long time‑to‑market and costly integrations, complex hardware protocols.'
          ),
          solution: t(
            'Платформа підключення (MQTT/HTTP/Modbus тощо), збирання та нормалізація даних, правила автоматизації, події та інтеграції з бізнес‑системами.',
            'Connectivity platform (MQTT/HTTP/Modbus etc.), data collection/normalization, automation rules, events and integrations to business systems.'
          ),
          results: [
            t('Запуск MVP за тижні, а не місяці', 'Launch MVP in weeks, not months'),
            t('Масштабування без простоїв', 'Scale without downtime'),
            t('Зниження витрат на інтеграції', 'Integration cost reduction')
          ]
        }
      },
      {
        slug: 'marketing',
        title: t('Маркетинг та Email', 'Marketing & Email'),
        description: t(
          'Е2Е email‑маркетинг, SMM, SEO/GEO‑SEO, аналітика, дашборди, персоналізація.',
          'End‑to‑end email marketing, SMM, SEO/GEO‑SEO, analytics, dashboards, personalization.'
        ),
        imgFolder: '/images/industries/marketing',
        imgAlt: t('Email‑маркетинг', 'Email marketing'),
        details: {
          challenge: t(
            'Низька відкриваність і конверсія, відсутність сегментації та life‑cycle сценаріїв.',
            'Low open and conversion rates, lack of segmentation and lifecycle automation.'
          ),
          solution: t(
            'CDP + сегментація за поведінкою, тригерні та life‑cycle листи, A/B‑тести, наскрізна атрибуція. Дашборди маркетингової ефективності.',
            'CDP + behavioral segmentation, triggered and lifecycle emails, A/B tests, end‑to‑end attribution. Marketing effectiveness dashboards.'
          ),
          results: [
            t('Open rate +20–50%', 'Open rate +20–50%'),
            t('Конверсії з email ↑', 'Email conversions ↑'),
            t('Більший LTV і retention', 'Higher LTV and retention')
          ]
        }
      },
      // ⚠️ ПОТРЕБУЮТЬ ДООПРАЦЮВАННЯ - базові описи, немає детальних сторінок
      {
        slug: 'ai-ml',
        title: t('AI/ML та Generative AI', 'AI/ML & Generative AI'),
        description: t(
          'Інтеграція AI в продукти: RAG‑помічники, класифікація, прогнозування, Copilot‑сценарії.',
          'AI in products: RAG assistants, classification, forecasting, Copilot scenarios.'
        ),
        imgFolder: '/images/industries/ai-ml',
        imgAlt: t('AI/ML', 'AI/ML'),
        details: {
          challenge: t(
            'Відсутність AI‑компетенцій, приватність даних, висока ціна помилки.',
            'Lack of AI expertise, data privacy, high cost of mistakes.'
          ),
          solution: t(
            'RAG на приватних даних, векторний пошук, фічерінг, пайплайни ML. Моделі для класифікації/прогнозу. Вшиваємо Copilot у процеси.',
            'RAG on private data, vector search, feature engineering, ML pipelines. Models for classification/forecast. Embedded Copilot in flows.'
          ),
          results: [
            t('Економія робочого часу 20–40%', '20–40% time saving'),
            t('Точніша аналітика і рішення', 'More accurate analytics & decisions'),
            t('Кращий клієнтський досвід', 'Better CX')
          ]
        }
      },
      {
        slug: 'cybersecurity',
        title: t('Кібербезпека', 'Cybersecurity'),
        description: t(
          'SIEM/SOAR, IAM, захист API/даних, моніторинг, тестування на проникнення.',
          'SIEM/SOAR, IAM, API/data protection, monitoring, penetration testing.'
        ),
        imgFolder: '/images/industries/cybersecurity',
        imgAlt: t('Кібербезпека', 'Cybersecurity'),
        details: {
          challenge: t(
            'Зростання кібератак, відсутність централізованого моніторингу та реакції.',
            'Rising cyber threats, lack of centralized monitoring and response.'
          ),
          solution: t(
            'Впроваджуємо SIEM/SOAR, цілісний IAM, Zero‑Trust, шифрування/токенізацію, SAST/DAST, Red/Blue teaming.',
            'Deploy SIEM/SOAR, holistic IAM, Zero‑Trust, encryption/tokenization, SAST/DAST, Red/Blue teaming.'
          ),
          results: [
            t('MTTD/MTTR ↓', 'MTTD/MTTR ↓'),
            t('Менше інцидентів та штрафів', 'Fewer incidents & fines'),
            t('Відповідність стандартам', 'Compliance readiness')
          ]
        }
      },
      {
        slug: 'healthcare',
        title: t('Healthcare & Telemedicine', 'Healthcare & Telemedicine'),
        description: t(
          'HIPAA‑friendly архітектура, телемедицина, EHR, інтеграції з медобладнанням.',
          'HIPAA‑friendly architecture, telemedicine, EHR, medical device integrations.'
        ),
        imgFolder: '/images/industries/healthcare',
        imgAlt: t('Healthcare', 'Healthcare'),
        details: {
          challenge: t(
            'Регуляторика, сумісність систем, приватність даних та безперервність сервісу.',
            'Regulatory, interoperability, data privacy and service continuity.'
          ),
          solution: t(
            'Телемед‑платформи, інтеграції EHR/HL7/FHIR, записи/платежі, аналітика, IoT‑моніторинг пацієнтів.',
            'Telemed platforms, EHR/HL7/FHIR, bookings/payments, analytics, patient IoT monitoring.'
          ),
          results: [
            t('Доступність послуг ↑', 'Access ↑'),
            t('Якість лікування зростає', 'Care quality ↑'),
            t('Зниження операційних витрат', 'Operational costs ↓')
          ]
        }
      },
      {
        slug: 'climate-tech',
        title: t('ClimateTech & ESG', 'ClimateTech & ESG'),
        description: t(
          'Вуглецевий слід, оптимізація енергії, ESG‑звітність, відновлювана енергетика.',
          'Carbon footprint, energy optimization, ESG reporting, renewables.'
        ),
        imgFolder: '/images/industries/climate-tech',
        imgAlt: t('ClimateTech', 'ClimateTech'),
        details: {
          challenge: t(
            'Потреба в прозорості ESG, штрафи, витрати на енергію та викиди.',
            'ESG transparency, fines, energy and emissions costs.'
          ),
          solution: t(
            'Платформи для обліку викидів, оптимізація споживання, інтеграції з лічильниками/БМС, автоматизована ESG‑звітність.',
            'Emissions accounting, consumption optimization, meter/BMS integrations, automated ESG reporting.'
          ),
          results: [
            t('Витрати на енергію ↓ 10–25%', 'Energy costs ↓ 10–25%'),
            t('ESG‑ризики ↓', 'ESG risks ↓'),
            t('Імідж бренду ↑', 'Brand image ↑')
          ]
        }
      },
      {
        slug: 'agritech',
        title: t('Agritech & Precision Farming', 'Agritech & Precision Farming'),
        description: t(
          'Дрони, сенсори, карти полів, прогнозування врожаю, агро‑аналітика.',
          'Drones, sensors, field mapping, yield forecasting, agro analytics.'
        ),
        imgFolder: '/images/industries/agritech',
        imgAlt: t('Agritech', 'Agritech'),
        details: {
          challenge: t(
            'Залежність від погоди, нестача даних про поля та витрати ресурсів.',
            'Weather dependency, lack of field data, resource waste.'
          ),
          solution: t(
            'Дрони та IoT‑сенсори, NDVI/карти, аналітика вологості/живлення, планування внесень та маршрутів.',
            'Drones & IoT sensors, NDVI/maps, moisture/nutrition analytics, application & route planning.'
          ),
          results: [
            t('Врожайність ↑', 'Yield ↑'),
            t('Добрива/вода ↓', 'Fertilizer/water ↓'),
            t('Окупність інвестицій', 'ROI ↑')
          ]
        }
      },
      {
        slug: 'hospitality',
        title: t('Hospitality & TravelTech', 'Hospitality & TravelTech'),
        description: t(
          'Бронювання, OTA інтеграції, динамічні ціни, IoT‑сервіси для готелів.',
          'Bookings, OTA integrations, dynamic pricing, hotel IoT services.'
        ),
        imgFolder: '/images/industries/hospitality',
        imgAlt: t('Hospitality', 'Hospitality'),
        details: {
          challenge: t(
            'Сезонність, OTA‑комісії, ручні операції, відсутність персоналізації.',
            'Seasonality, OTA fees, manual ops, lack of personalization.'
          ),
          solution: t(
            'Сайт‑бронювання з прямими оплатами, PMS/OTA інтеграції, динамічні тарифи, ключ‑less check‑in, IoT‑сервіси номерів.',
            'Direct booking + payments, PMS/OTA integrations, dynamic rates, key‑less check‑in, room IoT.'
          ),
          results: [
            t('Прямі бронювання ↑', 'Direct bookings ↑'),
            t('OPEX ↓ завдяки автоматизації', 'OPEX ↓ via automation'),
            t('Вищий NPS за персоналізацію', 'Higher NPS via personalization')
          ]
        }
      },
      {
        slug: 'proptech',
        title: t('PropTech & Smart Buildings', 'PropTech & Smart Buildings'),
        description: t(
          'BMS, доступи, лічильники, енергоменеджмент, безпека, аналітика.',
          'BMS, access, metering, energy management, security, analytics.'
        ),
        imgFolder: '/images/industries/proptech',
        imgAlt: t('PropTech', 'PropTech'),
        details: {
          challenge: t(
            'Фрагментовані системи будівлі, висока вартість енергії та сервісу.',
            'Fragmented building systems, high energy and service costs.'
          ),
          solution: t(
            'Єдина платформа BMS/IoT: лічильники, освітлення/клімат, доступи, відео, аналітика, оповіщення.',
            'Unified BMS/IoT: metering, lighting/HVAC, access, video, analytics, alerts.'
          ),
          results: [
            t('Економія енергії 10–30%', 'Energy savings 10–30%'),
            t('Менше аварій/інцидентів', 'Fewer incidents'),
            t('Комфорт і безпека ↑', 'Comfort & security ↑')
          ]
        }
      },
      {
        slug: 'ev-charging',
        title: t('EV Charging & e‑Mobility', 'EV Charging & e‑Mobility'),
        description: t(
          'Мережі зарядок, білінг, балансування, моніторинг, інтеграції.',
          'Charging networks, billing, balancing, monitoring, integrations.'
        ),
        imgFolder: '/images/industries/ev-charging',
        imgAlt: t('EV Charging', 'EV Charging'),
        details: {
          challenge: t(
            'Керування мережею та навантаженням, білінг, доступність та SLA.',
            'Network/load management, billing, availability and SLAs.'
          ),
          solution: t(
            'Платформа OCPP, балансування навантажень, білінг і підписки, карти/навігація, мобільні додатки.',
            'OCPP platform, load balancing, billing/subscriptions, maps/navigation, mobile apps.'
          ),
          results: [
            t('Uptime ↑, SLA прозорий', 'Uptime ↑, SLA transparent'),
            t('Мережа масштабується', 'Scalable network'),
            t('Валова маржа під контролем', 'Margin under control')
          ]
        }
      },
      {
        slug: 'robotics',
        title: t('Robotics & Automation', 'Robotics & Automation'),
        description: t(
          'AMR/AGV, роботизація складу/виробництва, візія, інтеграції з ERP/WMS.',
          'AMR/AGV, warehouse/production automation, vision, ERP/WMS integrations.'
        ),
        imgFolder: '/images/industries/robotics',
        imgAlt: t('Robotics', 'Robotics'),
        details: {
          challenge: t(
            'Дефіцит персоналу, помилки ручних операцій, безпека та продуктивність.',
            'Labor shortage, manual errors, safety and productivity.'
          ),
          solution: t(
            'Роботи для транспортування/пікінгу, компʼютерний зір, інтеграції з WMS/MES/ERP, симуляція та оптимізація.',
            'Robots for transport/picking, computer vision, WMS/MES/ERP integrations, simulation and optimization.'
          ),
          results: [
            t('Пропускна здатність ↑', 'Throughput ↑'),
            t('Помилки ↓', 'Errors ↓'),
            t('Окупність через ефективність', 'ROI via efficiency')
          ]
        }
      }
    ]
  };
};
