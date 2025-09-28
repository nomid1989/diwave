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
            'Швидкий чек‑аут у 1–2 кроки, інтеграції з ERP/WMS/кур’єрами, персональні промо, GEO‑SEO та наскрізна аналітика.',
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
      }
    ]
  };
};
