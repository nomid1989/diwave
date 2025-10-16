export type ProjectDetails = {
  challenge: string;
  solution: string;
  results: string[];
  tech?: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  imgFolder: string;
  imgAlt: string;
  details: ProjectDetails;
};

export const getProjects = (locale: 'uk' | 'en'): { title: string; intro: string; items: ProjectItem[] } => {
  const t = (uk: string, en: string) => (locale === 'uk' ? uk : en);
  return {
    title: t('Проєкти', 'Projects'),
    intro: t(
      'Вибрані кейси: телеметрія, платежі, автоматизація, e‑commerce та аналітика.',
      'Selected case studies: telemetry, payments, automation, e‑commerce and analytics.'
    ),
    items: [
      // ✅ ПОВНІСТЮ ЗАПОВНЕНІ - детальні сторінки з багатьма даними
      {
        slug: 'plantpol',
        title: t('PlantPol Ukraine — B2B портал', 'PlantPol Ukraine — B2B portal'),
        description: t('E-commerce зі складною логістикою для агротехнологій. 5000+ SKU, інтеграція 1С.', 'E-commerce with complex logistics for agritech. 5000+ SKU, 1C integration.'),
        highlights: [t('5000+ SKU', '5000+ SKU'), t('-75% штату', '-75% staff'), 'B2B'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('PlantPol B2B портал', 'PlantPol B2B portal'),
        details: {
          challenge: t(
            'Потреба цифрової платформи для заміни ручного управління замовленнями з можливістю замовлення товарів наперед на фіксовані дати доставки.',
            'Need for digital platform to replace manual order management with ability to pre-order goods for fixed delivery dates.'
          ),
          solution: t(
            'Створено повноцінний інтернет-магазин з кастомним рушієм та унікальною системою логістики замовлень на палетах з плануванням на 1-2 роки.',
            'Built full-featured online store with custom engine and unique pallet order logistics system with 1-2 year planning.'
          ),
          results: [
            t('Скорочення штату менеджерів на 75% (з 20 до 5)', '75% staff reduction (from 20 to 5 managers)'),
            t('Стабільне зростання органічного трафіку за 3 роки', 'Steady organic traffic growth over 3 years'),
            t('Автоматизація складних B2B замовлень', 'Complex B2B order automation')
          ],
          tech: ['Angular', 'Laravel', '1C Integration', 'B2B Logic', 'SEO']
        }
      },
      {
        slug: 'car-wash',
        title: t('Платформа для автомийок самообслуговування', 'Self‑service car wash platform'),
        description: t(
          'IoT/SCADA, моніторинг у реальному часі, платежі, CRM та лояльність.',
          'IoT/SCADA, real‑time monitoring, payments, CRM and loyalty.'
        ),
        highlights: [t('EBITDA 70%', '70% EBITDA'), t('Простій ↓', 'Downtime ↓'), 'Telemetry'],
        imgFolder: '/images/projects/car-wash',
        imgAlt: t('Автомийка — панель керування', 'Car wash — control panel'),
        details: {
          challenge: t(
            'Розрізнені контролери, простої постів, готівкові розрахунки й відсутність прозорої аналітики.',
            'Disparate controllers, bay downtime, cash handling and lack of transparent analytics.'
          ),
          solution: t(
            'Створили єдину платформу: підключили контролери, додали реальний‑час моніторингу, Apple/Google Pay, особистий кабінет, CRM та лояльність з персоналізацією. Автоалерти для сервісу.',
            'Built a unified platform: connected controllers, real‑time monitoring, Apple/Google Pay, customer portal, CRM and personalized loyalty. Auto alerts for service.'
          ),
          results: [
            t('Простій ↓ до 30% завдяки оповіщенням', 'Downtime ↓ up to 30% via alerts'),
            t('EBITDA ↑ за рахунок безготівки та оптимізації', 'EBITDA ↑ through cashless and optimization'),
            t('Повторні покупки та NPS ↑', 'Repeat purchases and NPS ↑')
          ],
          tech: ['IoT/SCADA', 'MQTT', 'Node.js', 'React', 'PSP', 'CDP/CRM']
        }
      },
      {
        slug: 'vending',
        title: t('Вендинг: телеметрія та платежі', 'Vending telemetry & payments'),
        description: t(
          'KYC, безготівкові оплати, віддалений збір інкасацій, маршрути.',
          'KYC, cashless payments, remote cash collection, routing.'
        ),
        highlights: ['KYC', t('Безготівково', 'Cashless'), 'Telemetry'],
        imgFolder: '/images/projects/vending',
        imgAlt: t('Вендинг — дашборд', 'Vending — dashboard'),
        details: {
          challenge: t(
            'Необліковані продажі, втрати від простоїв і контроль інкасацій вручну.',
            'Unaccounted sales, losses from downtime and manual cash collection control.'
          ),
          solution: t(
            'Підключили телеметрію, додали cashless, маршрути для інкасацій, push‑алерти про збої/закінчення товару, ролі для мережевих операторів.',
            'Connected telemetry, added cashless, cash collection routes, push alerts for failures/stock‑outs, roles for network operators.'
          ),
          results: [
            t('Продажі +10–15% завдяки безготівці', 'Sales +10–15% via cashless'),
            t('Менше простоїв і оптимізація маршрутів', 'Less downtime and optimized routes'),
            t('Прозора звірка', 'Transparent reconciliation')
          ],
          tech: ['Telemetry', 'React', 'Node.js', 'PSP', 'KYC/AML']
        }
      },
      {
        slug: 'drones',
        title: t('Система операцій з дронами', 'Drone operations system'),
        description: t('Треки, геозони, рейтинги, змагання, телеметрія.', 'Tracks, geofencing, rankings, competitions, telemetry.'),
        highlights: ['Gnizdo', 'UAV', 'Telemetry'],
        imgFolder: '/images/projects/drones',
        imgAlt: t('Дрони — інтерфейс', 'Drones — interface'),
        details: {
          challenge: t(
            'Керування польотами, безпека і прозорість змагань, облік перельотів.',
            'Flight management, safety and transparent competitions, flight accounting.'
          ),
          solution: t(
            'Реалізовано планувальник місій, геозони, трекінг і реплеї, рейтинги та протоколи змагань. Інтеграції з телеметрією дронів.',
            'Implemented mission planner, geofences, tracking and replays, rankings and competition protocols. Drone telemetry integrations.'
          ),
          results: [
            t('Прозорість і безпека польотів', 'Flight transparency and safety'),
            t('Зручна робота суддів/організаторів', 'Convenient work for judges/organizers'),
            t('Аналітика по пілотах/командах', 'Pilot/team analytics')
          ],
          tech: ['React', 'Node.js', 'WebSockets', 'Map SDK']
        }
      },
      {
        slug: 'loyalty-crm',
        title: t('Лояльність та CRM', 'Loyalty & CRM'),
        description: t('Бонуси, програми, сегментація, персоналізація.', 'Bonuses, programs, segmentation, personalization.'),
        highlights: ['CRM', 'CDP', 'Personalization'],
        imgFolder: '/images/projects/loyalty',
        imgAlt: t('CRM — сегментація', 'CRM — segmentation'),
        details: {
          challenge: t(
            'Низьке утримання, відсутність персоналізації та реальної сегментації.',
            'Low retention, no personalization and weak segmentation.'
          ),
          solution: t(
            'CDP з об’єднанням подій, RFM‑сегментація, тригерні кампанії та персональні офери у каналах email/SMS/push.',
            'CDP with event unification, RFM segmentation, trigger campaigns and personalized offers across email/SMS/push.'
          ),
          results: [
            t('Retention +8–20%', 'Retention +8–20%'),
            t('ROMI ↑ завдяки персоналізації', 'ROMI ↑ via personalization'),
            t('Єдина клієнтська 360‑картина', 'Unified 360‑customer view')
          ],
          tech: ['CDP', 'ESP', 'ETL', 'Analytics']
        }
      },
      {
        slug: 'lemberg-flowers',
        title: t('Lemberg Flowers — Презентаційний сайт', 'Lemberg Flowers — Presentation site'),
        description: t('Високошвидкісний сайт для виробництва квітів. Google Speedtest оптимізація.', 'High-speed site for flower production. Google Speedtest optimization.'),
        highlights: ['Vue.js', 'Performance', 'B2C'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('Lemberg Flowers сайт', 'Lemberg Flowers site'),
        details: {
          challenge: t(
            'Створення якісної онлайн-презентації виробництва горщикових квітів з вимогою виняткової швидкості завантаження.',
            'Creating quality online presentation for potted flower production with exceptional loading speed requirement.'
          ),
          solution: t(
            'Розроблено високопродуктивний презентаційний веб-сайт на базі Vue.js з фокусом на Google Speedtest Optimization та Core Web Vitals. Інтеграція Telegram/Email для лідогенерації.',
            'Built high-performance presentation website on Vue.js focused on Google Speedtest Optimization and Core Web Vitals. Telegram/Email integration for lead generation.'
          ),
          results: [
            t('Виняткова швидкість завантаження', 'Exceptional loading speed'),
            t('Миттєва доставка запитів через Telegram/Email', 'Instant query delivery via Telegram/Email'),
            t('Ефективна презентація виробництва', 'Effective production presentation')
          ],
          tech: ['Vue.js', 'Static Site', 'Telegram API', 'Speed Optimization']
        }
      },
      {
        slug: 'usa-ua',
        title: t('USA.UA — Міжнародна логістика', 'USA.UA — International logistics'),
        description: t('Система закупівлі товарів з США. Агрегатор доставки з американських сайтів.', 'US goods procurement system. Aggregator for delivery from American sites.'),
        highlights: ['USA→UA', 'Tracking', 'Payments'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('USA.UA платформа', 'USA.UA platform'),
        details: {
          challenge: t(
            'Створення складної e-commerce системи-посередника для закупівлі товарів з американських сайтів з доставкою в Україну.',
            'Creating complex e-commerce intermediary system for purchasing goods from American sites with delivery to Ukraine.'
          ),
          solution: t(
            'Платформа автоматично здійснює закупівлю, логістичне трекінгове супроводження та доставку. Інтеграція міжнародних платіжних шлюзів.',
            'Platform automatically handles purchasing, logistics tracking and delivery. International payment gateway integration.'
          ),
          results: [
            t('Автоматизація міжнародних закупівель', 'International procurement automation'),
            t('Повне трекінгове супроводження', 'Full tracking support'),
            t('Інтеграція складних логістичних процесів', 'Complex logistics process integration')
          ],
          tech: ['E-commerce', 'International PSP', 'Tracking API', 'Logistics']
        }
      },
      {
        slug: 'gnizdo',
        title: t('Асоціація Пілотів Дронів GNIZDO', 'Drone Pilots Association GNIZDO'),
        description: t('Веб-платформа для спортивної асоціації пілотів дронів. Спільнота, спорт, інвестори.', 'Web platform for sports drone pilots association. Community, sports, investors.'),
        highlights: ['Community', 'Sport', 'Drones'],
        imgFolder: '/images/projects/drones',
        imgAlt: t('GNIZDO платформа', 'GNIZDO platform'),
        details: {
          challenge: t(
            'Створення веб-сайту для Спортивної асоціації пілотів дронів «Гніздо» як початок розбудови великої мережі платформ для спільноти.',
            'Creating website for Sports Drone Pilots Association "Gnizdo" as start of building large network of community platforms.'
          ),
          solution: t(
            'Розроблено веб-платформу для нішевої спільноти пілотів дронів, що об\'єднує спорт, розробників та інвесторів.',
            'Built web platform for niche drone pilot community uniting sports, developers and investors.'
          ),
          results: [
            t('Цифрова екосистема для нішевої спільноти', 'Digital ecosystem for niche community'),
            t('Платформа для спорту та розробників', 'Platform for sports and developers'),
            t('База для розширення мережі', 'Foundation for network expansion')
          ],
          tech: ['React', 'Community Platform', 'Sports Management']
        }
      },
      {
        slug: 'lasso-ai',
        title: t('Lasso.ai — Email SaaS', 'Lasso.ai — Email SaaS'),
        description: t('Платформа SaaS для email-розсилок. Високо навантажені комунікаційні системи.', 'SaaS platform for email campaigns. High-load communication systems.'),
        highlights: ['SaaS', 'Email', 'High-load'],
        imgFolder: '/images/projects/loyalty',
        imgAlt: t('Lasso.ai платформа', 'Lasso.ai platform'),
        details: {
          challenge: t(
            'Участь у програмуванні високо навантаженого SaaS сервісу для email-розсилок.',
            'Participation in programming high-load SaaS service for email campaigns.'
          ),
          solution: t(
            'Розробка архітектури та функціоналу для масових email-розсилок з розумінням механізмів email-маркетингу.',
            'Architecture and functionality development for mass email campaigns with understanding of email marketing mechanics.'
          ),
          results: [
            t('Досвід створення високо навантажених платформ', 'Experience building high-load platforms'),
            t('Розуміння механізмів email-маркетингу', 'Understanding of email marketing mechanics'),
            t('SaaS архітектура та масштабування', 'SaaS architecture and scaling')
          ],
          tech: ['SaaS', 'Email Marketing', 'High-load', 'Queue Systems']
        }
      },
      {
        slug: 'hostel-booking',
        title: t('Готельний Менеджмент (Хостели)', 'Hotel Management (Hostels)'),
        description: t('Кастомна програма бронювання для хостелів. Бронювання кімнат/ліжок, оплата, нотифікації.', 'Custom booking app for hostels. Room/bed booking, payment, notifications.'),
        highlights: ['Booking', 'Payments', 'Hostels'],
        imgFolder: '/images/projects/loyalty',
        imgAlt: t('Система бронювання хостелів', 'Hostel booking system'),
        details: {
          challenge: t(
            'Розробка кастомної програми бронювання для трьох хостелів з унікальною логікою вибору кімнати або ліжка.',
            'Developing custom booking app for three hostels with unique room or bed selection logic.'
          ),
          solution: t(
            'Система з вибором бронювання кімнати або ліжка, автоматичним розрахунком суми, інтеграцією оплати та миттєвим сповіщенням власника.',
            'System with room or bed booking selection, automatic amount calculation, payment integration and instant owner notification.'
          ),
          results: [
            t('Автоматизація процесу бронювання', 'Booking process automation'),
            t('Гнучка логіка кімнати/ліжка', 'Flexible room/bed logic'),
            t('Миттєві нотифікації власнику', 'Instant owner notifications')
          ],
          tech: ['Booking System', 'Payment Integration', 'Notifications', 'CRM']
        }
      },
      // ⚠️ ПОТРЕБУЮТЬ ДООПРАЦЮВАННЯ - базові описи
      {
        slug: 'ecommerce',
        title: t('E‑commerce інтеграції', 'E‑commerce integration'),
        description: t('Каталог, кошик, чек‑аут, ERP, аналітика.', 'Catalog, cart, checkout, ERP, analytics.'),
        highlights: ['CMS', 'ERP', 'Analytics'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('Інтернет‑магазин', 'Online store'),
        details: {
          challenge: t(
            'Повільний чек‑аут, неузгоджені запаси, відсутність наскрізної аналітики.',
            'Slow checkout, inconsistent stock, lack of end‑to‑end analytics.'
          ),
          solution: t(
            'Швидкий чек‑аут у 1–2 кроки, інтеграції з ERP/WMS/кур\'єрами, персональні промо, GEO‑SEO та наскрізна аналітика.',
            'Fast 1–2 step checkout, integrations with ERP/WMS/couriers, personalized promos, GEO‑SEO and end‑to‑end analytics.'
          ),
          results: [
            t('Конверсія +10–25%', 'Conversion +10–25%'),
            t('Менше відмов на етапі оплати', 'Lower checkout drop‑off'),
            t('Більше органічного трафіку', 'More organic traffic')
          ],
          tech: ['React', 'Headless CMS', 'ERP', 'PSP', 'GA4/ETL']
        }
      },
      {
        slug: 'energy',
        title: t('Енергомоніторинг', 'Energy monitoring dashboards'),
        description: t('Smart meters, попередження, рекомендації.', 'Smart meters, alerts, recommendations.'),
        highlights: ['Smart Meter', 'Alerts', 'Savings'],
        imgFolder: '/images/projects/energy',
        imgAlt: t('Енергія — дашборд', 'Energy — dashboard'),
        details: {
          challenge: t(
            'Нестабільні рахунки і немає швидкого реагування на відхилення.',
            'Volatile bills and no fast reaction to anomalies.'
          ),
          solution: t(
            'Збір показників із лічильників, дашборди по зонах, алерти при витоках/піках, поради зі зниження споживання.',
            'Collect meter readings, zone dashboards, alerts on leaks/peaks, recommendations to lower consumption.'
          ),
          results: [
            t('Економія 10–25%', 'Savings 10–25%'),
            t('Менше аварійних ситуацій', 'Fewer incidents'),
            t('Прогнозовані витрати', 'Predictable spending')
          ],
          tech: ['IoT', 'Dashboards', 'Alerts', 'ML (anomaly)']
        }
      },
      {
        slug: 'areascode',
        title: t('AreasCode — Custom Software Development', 'AreasCode — Custom Software Development'),
        description: t('Партнерство у розробці кастомних рішень. Digitalization strategy, автоматизація, MVP.', 'Partnership in custom solutions development. Digitalization strategy, automation, MVP.'),
        highlights: ['USA/EU', 'Enterprise', 'Full-cycle'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('AreasCode Partnership', 'AreasCode Partnership'),
        details: {
          challenge: t(
            'Стратегічне партнерство для реалізації складних enterprise-проєктів у Healthcare, Energy, Industry 4.0.',
            'Strategic partnership for complex enterprise projects in Healthcare, Energy, Industry 4.0.'
          ),
          solution: t(
            'Спільна розробка кастомного ПЗ, digitalization strategy, business automation, архітектурні рішення.',
            'Joint custom software development, digitalization strategy, business automation, architectural solutions.'
          ),
          results: [
            t('Реалізація складних enterprise-проєктів', 'Complex enterprise projects delivery'),
            t('Цифрова трансформація процесів', 'Digital transformation of processes'),
            t('Масштабовані архітектурні рішення', 'Scalable architectural solutions')
          ],
          tech: ['Custom Development', 'Cloud', 'Mobile', 'Architecture']
        }
      },
      {
        slug: 'gust-energy',
        title: t('Gust Energy — Енергетичні Рішення', 'Gust Energy — Energy Solutions'),
        description: t('Цифрові рішення для енергетики Туреччини. Smart meters, IoT, аналітика.', 'Digital solutions for Turkish energy sector. Smart meters, IoT, analytics.'),
        highlights: ['Turkey', 'Energy', 'IoT'],
        imgFolder: '/images/projects/energy',
        imgAlt: t('Gust Energy Platform', 'Gust Energy Platform'),
        details: {
          challenge: t(
            'Розробка цифрових енергетичних технологій та систем моніторингу для турецького ринку.',
            'Development of digital energy technologies and monitoring systems for Turkish market.'
          ),
          solution: t(
            'Системи моніторингу енергоспоживання, smart meters інтеграції, real-time дашборди, алерти.',
            'Energy monitoring systems, smart meters integration, real-time dashboards, alerts.'
          ),
          results: [
            t('Масштабована платформа енергомоніторингу', 'Scalable energy monitoring platform'),
            t('IoT інтеграції з лічильниками', 'IoT integrations with meters'),
            t('Оптимізація енергоспоживання', 'Energy consumption optimization')
          ],
          tech: ['IoT/SCADA', 'Smart Meters', 'Real-time Analytics', 'Dashboards']
        }
      },
      {
        slug: 'paolla',
        title: t('Paolla — E-commerce Виробника Взуття', 'Paolla — Footwear Manufacturer E-commerce'),
        description: t('Цифрова платформа для українського виробника взуття з 30+ роками досвіду.', 'Digital platform for Ukrainian footwear manufacturer with 30+ years experience.'),
        highlights: ['Manufacturing', 'E-commerce', 'Ukraine'],
        imgFolder: '/images/projects/ecommerce',
        imgAlt: t('Paolla Platform', 'Paolla Platform'),
        details: {
          challenge: t(
            'Створення сучасної цифрової присутності для виробника з багаторічними традиціями.',
            'Creating modern digital presence for manufacturer with long-standing traditions.'
          ),
          solution: t(
            'E-commerce платформа з каталогом, система індивідуального замовлення, інтеграція з виробництвом.',
            'E-commerce platform with catalog, custom order system, production integration.'
          ),
          results: [
            t('Сучасна цифрова платформа', 'Modern digital platform'),
            t('Система онлайн замовлення', 'Online ordering system'),
            t('Інтеграція з виробництвом', 'Production integration')
          ],
          tech: ['E-commerce', 'Custom Orders', 'CRM', 'Ukrainian Market']
        }
      }
    ]
  };
};
