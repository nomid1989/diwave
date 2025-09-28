export type SolutionItem = {
  slug: string;
  title: string;
  description: string;
  imgFolder: string;
  imgAlt: string;
};

export const getSolutions = (locale: 'uk' | 'en'): { title: string; intro: string; items: SolutionItem[] } => {
  const t = (uk: string, en: string) => (locale === 'uk' ? uk : en);
  return {
    title: t('Рішення', 'Solutions'),
    intro: t(
      '7 базових напрямів: Samwash QR‑оплата, автомийки, вендинг, дрони, e‑commerce, IoT/SCADA, маркетинг.',
      '7 core solutions: Samwash QR payments, car wash, vending, drones, e‑commerce, IoT/SCADA, marketing.'
    ),
    items: [
      {
        slug: 'samwash-qr',
        title: t('Samwash: QR‑оплата на автомийках', 'Samwash: QR payments for car wash'),
        description: t(
          'Безготівкова оплата зі смартфона, AI‑адаптація за регіоном, двомовність. Деталі — на сторінці послуги.',
          'Cashless smartphone payments, region‑aware AI, bilingual. See details on the service page.'
        ),
        imgFolder: '/images/solutions/samwash-qr',
        imgAlt: t('Samwash QR‑оплата', 'Samwash QR payments')
      },
      {
        slug: 'car-washes',
        title: t('Автомийки самообслуговування', 'Self‑service car washes'),
        description: t('Виробництво + IoT/SCADA, телеметрія, платежі, CRM.', 'Manufacturing + IoT/SCADA, telemetry, payments, CRM.'),
        imgFolder: '/images/solutions/car-washes',
        imgAlt: t('Автомийки', 'Car washes')
      },
      {
        slug: 'alcohol-vending',
        title: t('Алко‑вендинг (hardware + software, KYC)', 'Alcohol vending (hardware + software, KYC)'),
        description: t('Вікова верифікація, KYC, безготівкові оплати, віддалений моніторинг.', 'Age verification, KYC, cashless, remote monitoring.'),
        imgFolder: '/images/solutions/alcohol-vending',
        imgAlt: t('Алко‑вендинг', 'Alcohol vending')
      },
      {
        slug: 'drones',
        title: t('Дрони та змагання (Gnizdo)', 'Drones and competitions (Gnizdo)'),
        description: t('Треки, турніри, телеметрія, суддівство, аналітика.', 'Tracks, tournaments, telemetry, judging, analytics.'),
        imgFolder: '/images/solutions/drones',
        imgAlt: t('Дрони', 'Drones')
      },
      {
        slug: 'ecommerce',
        title: t('E‑commerce та сайти (B2B/B2C)', 'E‑commerce and websites (B2B/B2C)'),
        description: t('CMS/ERP інтеграції, SEO/GEO‑SEO, конверсії.', 'CMS/ERP integrations, SEO/GEO‑SEO, conversions.'),
        imgFolder: '/images/solutions/ecommerce',
        imgAlt: t('E‑commerce', 'E‑commerce')
      },
      {
        slug: 'iot-scada',
        title: t('IoT & SCADA & автоматизація', 'IoT & SCADA & automation'),
        description: t('Підключення пристроїв, дані, дії за тригерами.', 'Device connectivity, data, trigger‑based actions.'),
        imgFolder: '/images/solutions/iot',
        imgAlt: t('IoT/SCADA', 'IoT/SCADA')
      },
      {
        slug: 'marketing',
        title: t('SEO/GEO‑SEO, SMM, Ads, аналітика', 'SEO/GEO‑SEO, SMM, Ads, analytics'),
        description: t('Органіка, локальне SEO, таргетинг, e2e аналітика.', 'Organic, local SEO, targeting, end‑to‑end analytics.'),
        imgFolder: '/images/solutions/marketing',
        imgAlt: t('Маркетинг', 'Marketing')
      }
    ]
  };
};
