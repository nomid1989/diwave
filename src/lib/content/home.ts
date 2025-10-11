/**
 * Home Page Content
 * Scalable i18n structure for homepage
 *
 * To add new language:
 * 1. Add locale type: 'uk' | 'en' | 'fr' | 'it' | 'el'
 * 2. Add translation in getHomeContent()
 * 3. Update t() helper function
 */

export type Locale = 'uk' | 'en'; // Add more: | 'fr' | 'it' | 'el'

export type HomeContent = {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    tags: string[];
  };
  products: {
    overline: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      badge: string;
      cta: string;
    }[];
  };
  projects: {
    overline: string;
    viewAll: string;
    featured: {
      title: string;
      description: string;
    }[];
  };
  vending: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  about: {
    title: string;
    description: string;
    cta: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
    cta: {
      question: string;
      button: string;
    };
  };
  howItWorks: {
    overline: string;
    bookCall: string;
  };
  industries: {
    overline: string;
    viewAll: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  contact: {
    overline: string;
    founder: {
      name: string;
      title: string;
      bio: string;
    };
    form: {
      title: string;
      location: string;
    };
    discuss: string;
  };
};

export const getHomeContent = (locale: Locale): HomeContent => {
  const content: Record<Locale, HomeContent> = {
    uk: {
      seo: {
        title: 'Diwave — Автоматизація Бізнесу | IoT, E-commerce, CRM, Платежі, AI-SEO',
        description: 'Автоматизуємо бізнес та підключаємо обладнання до інтернету. Комплексні рішення: автомийки SamWash (EBITDA 70%), вендинг з IoT, e-commerce Plantpol (-75% штату), дрони Gnizdo, платіжні інтеграції, CRM/SCADA, AI-SEO. 14+ років досвіду. Працюємо з Україною та ЄС. Від Discovery і дизайну до запуску та зростання.',
        keywords: 'Diwave автоматизація бізнесу, IoT SCADA Україна, автомийки SamWash, вендинг з сенсорним екраном, e-commerce CRM інтеграції, платіжні системи, AI SEO оптимізація, дрони FPV Gnizdo, телеметрія обладнання, безготівкові платежі'
      },
      hero: {
        title: 'Автоматизуємо бізнес та підключаємо обладнання до інтернету.',
        subtitle: 'E-commerce, CRM/SCADA, IoT, AI-SEO, платіжні інтеграції та аналітика.',
        cta: {
          primary: 'Обговорити проєкт',
          secondary: 'Переглянути рішення'
        },
        tags: ['Car wash', 'E‑commerce', 'IoT/SCADA', 'Drones']
      },
      products: {
        overline: 'РІШЕННЯ',
        title: 'Наші рішення, які працюють на вас',
        subtitle: 'Комплексні бізнес-рішення з IoT, платіжними інтеграціями та повною автоматизацією',
        items: [
          {
            title: 'Автомийки самообслуговування SamWash',
            description: 'Повністю автоматизовані комплекси з EBITDA 70%. Інтеграції з готівковими, безготівковими та монетними платіжними пристроями та дистанційним керуванням і обслуговуванням. Ти спиш, а бізнес працює 24/7',
            badge: 'Популярне',
            cta: 'Дізнатися більше'
          },
          {
            title: 'Порохотяг самообслуговування з сенсорним екраном та ступенем захисту IP 65',
            description: 'Ефективний порохотяг самообслуговування на 2 поста, потужністю 6 кВт 380V для автомийок, електро зарядних станцій та зон скупчення автомобілей',
            badge: 'IoT',
            cta: 'Дізнатися більше'
          },
          {
            title: 'Дрони FPV • Гніздо (UAPD)',
            description: 'Українська асоціація пілотів дронів: навчання, виробництво та розвиток drone-технологій',
            badge: 'Новинка',
            cta: 'Дізнатися більше'
          }
        ]
      },
      projects: {
        overline: 'ПРОЄКТИ',
        viewAll: 'Усі проєкти',
        featured: [
          {
            title: 'SamWash',
            description: 'Автомийки самообслуговування з IoT/SCADA та платіжними інтеграціями'
          },
          {
            title: 'Електронна комерція',
            description: 'Розробка інтернет-магазинів з повною автоматизацією'
          }
        ]
      },
      vending: {
        badge: 'Вендингові рішення',
        title: 'Вендингові апарати з сенсорним екраном',
        description: 'Захист IP65 — повна захищеність від пилу та водяних бризок. Ідеально підходить для зовнішньої установки у будь-яких погодних умовах.',
        features: [
          'Сенсорний екран 19" високої яскравості для роботи на вулиці',
          'Безконтактна оплата (NFC, QR-коди, картки)',
          'Віддалений моніторинг та контроль через IoT',
          'Система охолодження/нагріву продукції'
        ],
        cta: 'Дізнатись більше'
      },
      gallery: {
        title: 'Наші роботи',
        subtitle: 'Від промислових автомийок та вендингових автоматів самообслуговування до організації змагань на дронах — ми створюємо комплексні рішення',
        categories: {
          design: 'Design',
          iot: 'IoT',
          hardware: 'Hardware',
          tech: 'Tech',
          drones: 'Drones',
          software: 'Software',
          vacuum: 'Vacuum'
        }
      },
      about: {
        title: 'Хто ми?',
        description: 'Diwave — інженерна команда, що поєднує апаратні рішення, програмне забезпечення та аналітику. Ми автоматизуємо бізнес‑процеси, підключаємо обладнання (IoT/SCADA), інтегруємо платежі та запускаємо e‑commerce, CRM/лояльність і AI‑SEO. Працюємо від Discovery і дизайну до запуску та подальшого зростання.',
        cta: 'Дізнатися про нас більше'
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Як швидко стартуємо?',
            answer: 'Залежно від складності: від 2–4 тижнів для MVP до 2–3 місяців для повноцінного запуску. Починаємо з Discovery, узгоджуємо KPI та план.'
          },
          {
            question: 'Які технології?',
            answer: 'TypeScript/React, Node.js/PHP, інтеграції з платіжними провайдерами, IoT/SCADA, аналітика, AI‑SEO. Інфраструктура: Docker, CI/CD, моніторинг.'
          }
        ],
        cta: {
          question: 'Готові розв'язати вузьке місце у вашому бізнесі?',
          button: 'Зв'язатися'
        }
      },
      howItWorks: {
        overline: 'ЯК МИ ПРАЦЮЄМО',
        bookCall: 'Записатись на дзвінок'
      },
      industries: {
        overline: 'Індустрії',
        viewAll: 'Усі індустрії'
      },
      finalCta: {
        title: 'Є ідея або проєкт?',
        subtitle: 'Від Discovery та дизайну — до запуску і зростання.',
        primary: 'Обговорити проєкт',
        secondary: 'Дивитись рішення'
      },
      contact: {
        overline: 'КОНТАКТИ',
        founder: {
          name: 'Dmytro Kravets',
          title: 'Founder, Diwave',
          bio: 'Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки, вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо процеси за допомогою AI, щоб бізнес працював ефективніше.'
        },
        form: {
          title: 'Зв'язатися з нами',
          location: 'Ukraine & EU'
        },
        discuss: 'Обговорити проєкт'
      }
    },
    en: {
      seo: {
        title: 'Diwave — Business Automation | IoT, E-commerce, CRM, Payments, AI-SEO',
        description: 'We automate business and connect equipment to the internet. Comprehensive solutions: SamWash car washes (70% EBITDA), IoT vending, Plantpol e-commerce (-75% staff), Gnizdo drones, payment integrations, CRM/SCADA, AI-SEO. 14+ years experience. Working with Ukraine & EU. From Discovery and design to launch and growth.',
        keywords: 'Diwave business automation, IoT SCADA Ukraine, SamWash car wash, touchscreen vending, e-commerce CRM integrations, payment systems, AI SEO optimization, FPV drones Gnizdo, equipment telemetry, cashless payments'
      },
      hero: {
        title: 'We automate business and connect equipment to the internet.',
        subtitle: 'E-commerce, CRM/SCADA, IoT, AI-SEO, payment integrations and analytics.',
        cta: {
          primary: 'Discuss project',
          secondary: 'Explore solutions'
        },
        tags: ['Car wash', 'E‑commerce', 'IoT/SCADA', 'Drones']
      },
      products: {
        overline: 'SOLUTIONS',
        title: 'Our solutions that work for you',
        subtitle: 'Comprehensive business solutions with IoT, payment integrations and full automation',
        items: [
          {
            title: 'SamWash Self-Service Car Wash',
            description: 'Fully automated complexes with 70% EBITDA. Integrations with cash, cashless and coin payment devices with remote management and maintenance. You sleep, business works 24/7',
            badge: 'Popular',
            cta: 'Learn more'
          },
          {
            title: 'Self-Service Vacuum Cleaner with Touchscreen and IP65 Protection',
            description: 'Efficient self-service vacuum cleaner for 2 bays, 6 kW 380V power for car washes, EV charging stations and vehicle gathering areas',
            badge: 'IoT',
            cta: 'Learn more'
          },
          {
            title: 'FPV Drones • Gnizdo (UAPD)',
            description: 'Ukrainian Association of Drone Pilots: training, manufacturing and development of drone technologies',
            badge: 'New',
            cta: 'Learn more'
          }
        ]
      },
      projects: {
        overline: 'PROJECTS',
        viewAll: 'All projects',
        featured: [
          {
            title: 'SamWash',
            description: 'Self-service car washes with IoT/SCADA and payment integrations'
          },
          {
            title: 'E-commerce',
            description: 'Development of online stores with full automation'
          }
        ]
      },
      vending: {
        badge: 'Vending Solutions',
        title: 'Vending machines with touchscreen',
        description: 'IP65 protection — complete protection from dust and water splashes. Ideal for outdoor installation in any weather conditions.',
        features: [
          '19" high brightness touchscreen for outdoor operation',
          'Contactless payment (NFC, QR codes, cards)',
          'Remote monitoring and control via IoT',
          'Product cooling/heating system'
        ],
        cta: 'Learn more'
      },
      gallery: {
        title: 'Our work',
        subtitle: 'From industrial car washes and self-service vending machines to organizing drone competitions — we create comprehensive solutions',
        categories: {
          design: 'Design',
          iot: 'IoT',
          hardware: 'Hardware',
          tech: 'Tech',
          drones: 'Drones',
          software: 'Software',
          vacuum: 'Vacuum'
        }
      },
      about: {
        title: 'Who we are?',
        description: 'Diwave is an engineering team that combines hardware solutions, software and analytics. We automate business processes, connect equipment (IoT/SCADA), integrate payments and launch e-commerce, CRM/loyalty and AI-SEO. We work from Discovery and design to launch and further growth.',
        cta: 'Learn more about us'
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'How quickly do we start?',
            answer: 'Depending on complexity: from 2-4 weeks for MVP to 2-3 months for full launch. We start with Discovery, agree on KPIs and plan.'
          },
          {
            question: 'What technologies?',
            answer: 'TypeScript/React, Node.js/PHP, payment provider integrations, IoT/SCADA, analytics, AI-SEO. Infrastructure: Docker, CI/CD, monitoring.'
          }
        ],
        cta: {
          question: 'Ready to solve your business bottleneck?',
          button: 'Contact us'
        }
      },
      howItWorks: {
        overline: 'HOW WE WORK',
        bookCall: 'Book a call'
      },
      industries: {
        overline: 'Industries',
        viewAll: 'All industries'
      },
      finalCta: {
        title: 'Have a project in mind?',
        subtitle: 'From discovery and design to launch and growth.',
        primary: 'Discuss project',
        secondary: 'See solutions'
      },
      contact: {
        overline: 'CONTACT',
        founder: {
          name: 'Dmytro Kravets',
          title: 'Founder, Diwave',
          bio: 'We combine hardware solutions, software and analytics: car washes, vending, drones, e-commerce, payments, loyalty and energy. We automate processes using AI to make business work more efficiently.'
        },
        form: {
          title: 'Contact us',
          location: 'Ukraine & EU'
        },
        discuss: 'Discuss project'
      }
    }
  };

  return content[locale];
};

// Helper function for inline translations (for images, categories, etc.)
export const t = (locale: Locale, uk: string, en: string): string => {
  return locale === 'uk' ? uk : en;
};
