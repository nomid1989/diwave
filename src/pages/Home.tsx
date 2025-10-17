import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import {
  IconCard,
  IconChip,
  IconAutomation,
  IconAnalytics,
  IconSupport,
  IconCalendar,
  IconDesign,
  IconDeploy,
  IconLoop
} from '@/components/Icons';
import SmartImage from '@/components/ui/SmartImage';
import SectionHeader from '@/components/sections/SectionHeader';
import { getProjects } from '@/lib/content/projects';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const content = {
  uk: {
    hero: {
      title: 'Автоматизуємо бізнес та підключаємо обладнання до інтернету.',
      subtitle: 'E-commerce, CRM/SCADA, IoT, AI-SEO, платіжні інтеграції та аналітика.',
      ctaExplore: 'Переглянути рішення'
    },
    solutions: {
      title: 'Наші рішення, які працюють на вас',
      subtitle: 'Комплексні бізнес-рішення з IoT, платіжними інтеграціями та повною автоматизацією',
      carWash: {
        badge: 'Популярне',
        title: 'Автомийки самообслуговування SamWash',
        description: 'Повністю автоматизовані комплекси з EBITDA 70%. Інтеграції з готівковими, безготівковими та монетними платіжними пристроями та дистанційним керуванням і обслуговуванням. Ти спиш, а бізнес працює 24/7',
        cta: 'Дізнатися більше'
      },
      vacuum: {
        badge: 'IoT',
        title: 'Порохотяг самообслуговування з сенсорним екраном та ступенем захисту IP 65',
        description: 'Ефективний порохотяг самообслуговування на 2 поста, потужністю 6 кВт 380V для автомийок, електро зарядних станцій та зон скупчення автомобілей',
        cta: 'Дізнатися більше'
      },
      drones: {
        badge: 'Новинка',
        title: 'Дрони FPV • Гніздо (UAPD)',
        description: 'Українська асоціація пілотів дронів: навчання, виробництво та розвиток drone-технологій',
        cta: 'Дізнатися більше'
      }
    },
    featuredProject: {
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
    projects: {
      ecommerce: {
        title: 'Електронна комерція',
        description: 'Розробка інтернет-магазинів з повною автоматизацією',
        tag1: 'Без кол-центру',
        tag2: 'React',
        tag3: 'Orderv analytics'
      },
      allProjects: 'Усі проєкти'
    },
    gallery: {
      title: 'Наші роботи',
      subtitle: 'Від промислових автомийок та вендингових автоматів самообслуговування до організації змагань на дронах — ми створюємо комплексні рішення'
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
      ctaTitle: 'Готові розв\'язати вузьке місце у вашому бізнесі?',
      ctaButton: 'Зв\'язатися'
    },
    howItWorks: {
      bookCall: 'Записатись на дзвінок'
    },
    industries: {
      overline: 'Індустрії',
      allIndustries: 'Усі індустрії',
      automotive: 'Автомобільна',
      vending: 'Вендинг',
      fintech: 'Фінтех',
      energy: 'Енергетика',
      retail: 'Рітейл',
      logistics: 'Логістика',
      iot: 'IoT',
      marketing: 'Маркетинг'
    },
    cta: {
      title: 'Є ідея або проєкт?',
      subtitle: 'Від Discovery та дизайну — до запуску і зростання.',
      discussProject: 'Обговорити проєкт',
      seeSolutions: 'Дивитись рішення'
    },
    contact: {
      title: 'Зв\'язатися з нами',
      description: 'Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки, вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо процеси за допомогою AI, щоб бізнес працював ефективніше.'
    }
  },
  en: {
    hero: {
      title: 'Automating business and connecting equipment to the internet.',
      subtitle: 'E-commerce, CRM/SCADA, IoT, AI-SEO, payment integrations and analytics.',
      ctaExplore: 'Explore solutions'
    },
    solutions: {
      title: 'Our solutions that work for you',
      subtitle: 'Comprehensive business solutions with IoT, payment integrations and full automation',
      carWash: {
        badge: 'Popular',
        title: 'SamWash Self-Service Car Washes',
        description: 'Fully automated complexes with 70% EBITDA. Integrations with cash, cashless and coin payment devices with remote management and maintenance. You sleep while business runs 24/7',
        cta: 'Learn more'
      },
      vacuum: {
        badge: 'IoT',
        title: 'Self-Service Vacuum Cleaner with Touch Screen and IP65 Protection',
        description: 'Efficient 2-post self-service vacuum cleaner, 6 kW 380V power for car washes, electric charging stations and vehicle gathering zones',
        cta: 'Learn more'
      },
      drones: {
        badge: 'New',
        title: 'FPV Drones • Gnizdo (UAPD)',
        description: 'Ukrainian Association of Drone Pilots: training, production and development of drone technologies',
        cta: 'Learn more'
      }
    },
    featuredProject: {
      badge: 'Vending Solutions',
      title: 'Vending Machines with Touch Screen',
      description: 'IP65 protection — complete protection from dust and water splashes. Perfect for outdoor installation in any weather conditions.',
      features: [
        '19" high-brightness touch screen for outdoor use',
        'Contactless payment (NFC, QR codes, cards)',
        'Remote monitoring and control via IoT',
        'Product cooling/heating system'
      ],
      cta: 'Learn more'
    },
    projects: {
      ecommerce: {
        title: 'E-commerce',
        description: 'Development of online stores with full automation',
        tag1: 'No call center',
        tag2: 'React',
        tag3: 'SEO'
      },
      allProjects: 'All projects'
    },
    gallery: {
      title: 'Our Work',
      subtitle: 'From industrial car washes and self-service vending machines to organizing drone competitions — we create comprehensive solutions'
    },
    about: {
      title: 'Who are we?',
      description: 'Diwave is an engineering team combining hardware solutions, software and analytics. We automate business processes, connect equipment (IoT/SCADA), integrate payments and launch e-commerce, CRM/loyalty and AI-SEO. We work from Discovery and design to launch and further growth.',
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
      ctaTitle: 'Ready to solve your business bottleneck?',
      ctaButton: 'Contact us'
    },
    howItWorks: {
      bookCall: 'Book a call'
    },
    industries: {
      overline: 'Industries',
      allIndustries: 'All industries',
      automotive: 'Automotive',
      vending: 'Vending',
      fintech: 'Fintech',
      energy: 'Energy',
      retail: 'Retail',
      logistics: 'Logistics',
      iot: 'IoT',
      marketing: 'Marketing'
    },
    cta: {
      title: 'Have a project in mind?',
      subtitle: 'From discovery and design to launch and growth.',
      discussProject: 'Discuss project',
      seeSolutions: 'See solutions'
    },
    contact: {
      title: 'Contact us',
      description: 'We combine hardware solutions, software and analytics: car washes, vending, drones, e-commerce, payments, loyalty and energy. We automate processes using AI to make business more efficient.'
    }
  }
};

const Home: React.FC<Props> = ({ locale }) => {
  const { t } = useTranslation();
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}`;
  const c = content[locale];

  const projects = getProjects(locale);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const seoContent = {
    uk: {
      title: 'Diwave — Автоматизація Бізнесу | IoT, E-commerce, CRM, Платежі, AI-SEO',
      description: 'Автоматизуємо бізнес та підключаємо обладнання до інтернету. Комплексні рішення: автомийки SamWash (EBITDA 70%), вендинг з IoT, e-commerce Plantpol (-75% штату), дрони Gnizdo, платіжні інтеграції, CRM/SCADA, AI-SEO. 14+ років досвіду. Працюємо з Україною та ЄС. Від Discovery і дизайну до запуску та зростання.',
      keywords: 'Diwave автоматизація бізнесу, IoT SCADA Україна, автомийки SamWash, вендинг з сенсорним екраном, e-commerce CRM інтеграції, платіжні системи, AI SEO оптимізація, дрони FPV Gnizdo, телеметрія обладнання, безготівкові платежі'
    },
    en: {
      title: 'Diwave — Business Automation | IoT, E-commerce, CRM, Payments, AI-SEO',
      description: 'We automate business and connect equipment to the internet. Comprehensive solutions: SamWash car washes (70% EBITDA), IoT vending, Plantpol e-commerce (-75% staff), Gnizdo drones, payment integrations, CRM/SCADA, AI-SEO. 14+ years experience. Working with Ukraine & EU. From Discovery and design to launch and growth.',
      keywords: 'Diwave business automation, IoT SCADA Ukraine, SamWash car wash, touchscreen vending, e-commerce CRM integrations, payment systems, AI SEO optimization, FPV drones Gnizdo, equipment telemetry, cashless payments'
    }
  };

  const seo = seoContent[locale];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Diwave',
      url,
      areaServed: ['UA', 'EU'],
      logo: `${baseUrl}/favicon.ico`,
      founder: {
        '@type': 'Person',
        name: 'Dmytro Kravets',
        email: 'dmytro@diwave.company',
        jobTitle: 'Founder & Tech Lead',
        sameAs: [
          'https://linkedin.com/in/dmytrokravets',
          'https://upwork.com/freelancers/stevark',
          'https://clutch.co/profile/diwave'
        ]
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+380505923772',
        email: 'info@diwave.company',
        contactType: 'sales',
        areaServed: ['UA', 'EU']
      },
      description: seo.description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Diwave',
      url,
      description: seo.description,
      inLanguage: locale === 'uk' ? 'uk-UA' : 'en-US'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: locale === 'uk' ? 'Як швидко стартуємо?' : 'How quickly do we start?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'uk'
              ? 'Залежно від складності: від 2–4 тижнів для MVP до 2–3 місяців для повноцінного запуску. Починаємо з Discovery, узгоджуємо KPI та план.'
              : 'Depending on complexity: from 2-4 weeks for MVP to 2-3 months for full launch. We start with Discovery, agree on KPIs and plan.'
          }
        },
        {
          '@type': 'Question',
          name: locale === 'uk' ? 'Які технології використовуєте?' : 'What technologies do you use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'uk'
              ? 'TypeScript/React, Node.js/PHP, інтеграції з платіжними провайдерами, IoT/SCADA, аналітика, AI-SEO. Інфраструктура: Docker, CI/CD, моніторинг.'
              : 'TypeScript/React, Node.js/PHP, payment provider integrations, IoT/SCADA, analytics, AI-SEO. Infrastructure: Docker, CI/CD, monitoring.'
          }
        },
        {
          '@type': 'Question',
          name: locale === 'uk' ? 'Чи підтримуєте IoT/SCADA?' : 'Do you support IoT/SCADA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: locale === 'uk'
              ? 'Так, ми підключаємо пристрої, збираємо дані та автоматизуємо процеси.'
              : 'Yes, we connect devices, collect data and automate processes.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: locale === 'uk' ? 'Проєкти Diwave' : 'Diwave Projects',
      itemListElement: projects.items.slice(0, 6).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title,
        url: `${baseUrl}${locale === 'en' ? '/en' : ''}/projects/${p.slug}`
      }))
    }
  ];

  // Клікабельні картки рішень з реальними посиланнями
  const products = [
    { icon: IconCard, title: t('products.payment'), href: `${locale === 'en' ? '/en' : ''}/solutions/ecommerce` },
    { icon: IconChip, title: t('products.iot'), href: `${locale === 'en' ? '/en' : ''}/solutions/iot-scada` },
    { icon: IconAutomation, title: t('products.automation'), href: `${locale === 'en' ? '/en' : ''}/solutions/project-sourcing` },
    { icon: IconAnalytics, title: t('products.analytics'), href: `${locale === 'en' ? '/en' : ''}/solutions/marketing` },
    { icon: IconSupport, title: t('products.support'), href: `${locale === 'en' ? '/en' : ''}/contact` }
  ];

  const steps = [
    { icon: IconCalendar, title: t('steps.discovery') },
    { icon: IconDesign, title: t('steps.design') },
    { icon: IconDeploy, title: t('steps.deployment') },
    { icon: IconLoop, title: t('steps.support') }
  ];


  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        url={url}
        image={`${baseUrl}/images/home/hero.webp`}
        locale={locale}
        keywords={seo.keywords}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/` },
          { hrefLang: 'en', href: `${baseUrl}/en` }
        ]}
        jsonLd={jsonLd}
      />

      {/* HERO: iOS 26 style з WOW-ефектом та glassmorphism */}
      <section className="hero-section relative overflow-hidden min-h-[600px] flex items-center">
        {/* Анімовані градієнтні кулі */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Glassmorphism overlay */}
        <div className="hero-glass-overlay" />

        {/* Mesh gradient background */}
        <div className="hero-mesh-gradient" />

        {/* Shimmer effect */}
        <div className="hero-shimmer" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-content-wrapper"
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-title text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              {c.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hero-subtitle mt-6 text-lg md:text-xl text-white/90 max-w-3xl"
            >
              {c.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={`${locale === 'en' ? '/en' : ''}/contact`}
                className="hero-cta-primary group relative inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,122,255,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href={`${locale === 'en' ? '/en' : ''}/solutions`}
                className="hero-cta-secondary group inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  {c.hero.ctaExplore}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { href: '/solutions/car-washes', label: 'Car wash' },
                { href: '/solutions/ecommerce', label: 'E‑commerce' },
                { href: '/solutions/iot-scada', label: 'IoT/SCADA' },
                { href: '/solutions/drones', label: 'Drones' }
              ].map((tag, idx) => (
                <motion.a
                  key={tag.label}
                  href={`${locale === 'en' ? '/en' : ''}${tag.href}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  className="hero-tag text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-110"
                >
                  {tag.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS: Наші рішення, які працюють на вас */}
      <section className="products-section relative overflow-hidden mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/50">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-3">{c.solutions.title}</h2>
        <p className="text-center text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-12">{c.solutions.subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Картка 1: Автомийки SamWash */}
          <a href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`} className="group block">
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 light:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 light:hover:shadow-cyan-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/solutions/car-washes/FEC5B102-98DA-4179-BDEE-88D3EFCC21E3_1_105_c.jpeg"]}
                  alt="Автомийки самообслуговування SamWash"
                  className="w-full h-full"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-500 text-white text-xs font-semibold shadow-lg">
                    {c.solutions.carWash.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-black/10 light:bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/5 light:border-gray-200">
                    <h3 className=" dark:text-white light:text-gray-900 font-bold text-sm mb-1 line-clamp-2">{c.solutions.carWash.title}</h3>
                    <p className="text-gray-100 dark:text-gray-100 light:text-gray-700 text-xs leading-snug line-clamp-2">{c.solutions.carWash.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Картка 2: Порохотяг - вертикальна */}
          <a href={`${locale === 'en' ? '/en' : ''}/projects/vending`} className="group block">
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 light:hover:shadow-purple-500/30">
              <div className="aspect-[3/4] relative overflow-hidden">
                <SmartImage
                  sources={["/images/industries/vending/vacuum-home.jpg", "/images/industries/vending/vacuum-home.webp", "/images/industries/vending/vacuum-home.jpeg"]}
                  alt="Порохотяг самообслуговування"
                  className="w-full h-full"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-purple-500 text-white text-xs font-semibold shadow-lg">
                    {c.solutions.vacuum.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-black/10 light:bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/5 light:border-gray-200">
                    <h3 className=" dark:text-white light:text-gray-900 font-bold text-sm mb-1 line-clamp-2">{c.solutions.vacuum.title}</h3>
                    <p className="text-gray-100 dark:text-gray-100 light:text-gray-700 text-xs leading-snug line-clamp-2">{c.solutions.vacuum.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* Картка 3: Дрони FPV */}
          <a href={`${locale === 'en' ? '/en' : ''}/solutions/drones`} className="group block">
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-emerald-400/50 dark:hover:border-emerald-400/50 light:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/10 light:hover:shadow-emerald-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/gnizdo-team/team-vader.avif", "/images/gnizdo-team/team-vader.webp", "/images/gnizdo-team/team-vader.jpeg"]}
                  alt="Дрони FPV та Українська асоціація пілотів дронів"
                  className="w-full h-full"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500 text-white text-xs font-semibold shadow-lg">
                    {c.solutions.drones.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-black/10 light:bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/5 light:border-gray-200">
                    <h3 className=" dark:text-white light:text-gray-900 font-bold text-sm mb-1 line-clamp-2">{c.solutions.drones.title}</h3>
                    <p className="text-gray-100 dark:text-gray-100 light:text-gray-700 text-xs leading-snug line-clamp-2">{c.solutions.drones.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* PROJECTS SHOWCASE: Реальні проєкти з фото */}
      <section className="mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/30">
        <SectionHeader overline={t('headings.projects')} title={projects.title} subtitle={projects.intro} />

        {/* Великі featured проєкти */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/30 to-black/50 hover:border-cyan-300/40 transition-all backdrop-blur-sm"
          >
            <div className="relative h-80 flex items-center justify-center">
              <SmartImage
                sources={['/images/projects/img_2.png']}
                alt="SamWash - Автомийки самообслуговування"
                className="w-full h-80"
                sizes="(min-width:768px) 50vw, 100vw"
                imgClassName="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Бізнес з EBITDA 70% - SamWash</h3>
                  <p className="text-gray-300 text-sm mb-3">Автомийки самообслуговування з IoT/SCADA та платіжними інтеграціями</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">70% EBITDA</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">IoT/SCADA</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Telemetry</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/projects/ecommerce`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/30 to-black/50 hover:border-cyan-300/40 transition-all backdrop-blur-sm"
          >
            <div className="relative h-80 flex items-center justify-center">
              <SmartImage
                sources={['/images/agricultural-center-plantpol-ukraine/plantpol-crm-dashboard.png']}
                alt="E-commerce проєкти"
                className="w-full h-80"
                sizes="(min-width:768px) 50vw, 100vw"
                imgClassName="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{c.projects.ecommerce.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{c.projects.ecommerce.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">{c.projects.ecommerce.tag1}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">{c.projects.ecommerce.tag2}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">{c.projects.ecommerce.tag3}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Менші проєкти */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.items.slice(0, 3).map((p, idx) => (
            <motion.a
              key={p.slug}
              href={`${locale === 'en' ? '/en' : ''}/projects/${p.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="block rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-300/40 transition-all group backdrop-blur-sm hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-black/5 to-black/10">
                <SmartImage
                  srcFolder={p.imgFolder}
                  alt={p.imgAlt}
                  className="w-full h-48"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <div className="p-5 bg-gradient-to-b from-white/5 to-white/[0.02]">
                <div className=" font-semibold text-base mb-2">{p.title}</div>
                <div className="text-gray-300 text-sm mt-1 mb-3 line-clamp-2">{p.description}</div>
                <div className="flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={`${locale === 'en' ? '/en' : ''}/projects`}
            className="inline-flex items-center rounded-md px-5 py-2 border border-white/20  hover:bg-white/10 transition"
          >
            {c.projects.allProjects}
          </a>
        </div>
      </section>

      {/* FEATURED PROJECT: Вендинговий апарат */}
      <section className="mx-auto max-w-7xl px-6 py-16 bg-transparent">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 md:p-12 backdrop-blur overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="vending-block">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-600/20 border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-600/50">
                <span className="text-lg">🏪</span>
                <span className="text-sm text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">{c.featuredProject.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900 mb-4">
                {c.featuredProject.title}
              </h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-6">
                {c.featuredProject.description}
              </p>
              <ul className="space-y-3 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6">
                {c.featuredProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-1 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${locale === 'en' ? '/en' : ''}/solutions/alcohol-vending`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 dark:bg-cyan-500 light:bg-blue-600 text-white font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-600 light:hover:bg-blue-700 transition shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/25 light:shadow-blue-500/25"
              >
                <span className="text-white">{c.featuredProject.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/20">
                <SmartImage
                  sources={['/images/solutions/alcohol-vending/vending-mashines-alcohol.webp', '/images/solutions/vending-mashines-alcohol.png']}
                  alt="Вендинговий апарат з сенсорним екраном та захистом IP65"
                  className="w-full h-auto"
                  sizes="(min-width:768px) 50vw, 100vw"
                  imgClassName="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* GALLERY: Наші роботи */}
      <section className="design-gallery mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/40">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-3">{c.gallery.title}</h2>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-base max-w-3xl mx-auto">{c.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Team Work */}
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/about`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-cyan-400/40 dark:hover:border-cyan-400/40 light:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 light:hover:shadow-cyan-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/gnizdo-team/team-meeting.avif", "/images/gnizdo-team/team-meeting.webp", "/images/gnizdo-team/team-meeting.jpeg"]}
                  alt="Командна робота Diwave"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-cyan-500 text-white text-xs font-semibold shadow-lg">Team</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/10 light:border-white/30">
                    <h3 className=" dark:text-white light:text-black font-bold text-sm">Команда Diwave</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Car Wash */}
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-purple-400/40 dark:hover:border-purple-400/40 light:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 light:hover:shadow-purple-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/solutions/car-washes/home.avif", "/images/solutions/car-washes/home.jpeg", "/images/solutions/car-washes/home.webp"]}
                  alt="Автомийка SamWash"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-purple-500 text-white text-xs font-semibold shadow-lg">Car Wash</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/10 light:border-white/30">
                    <h3 className=" dark:text-white light:text-black font-bold text-sm">Автомийки SamWash</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* FPV Drones */}
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/solutions/drones`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-emerald-400/40 dark:hover:border-emerald-400/40 light:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 light:hover:shadow-emerald-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/gnizdo-team/fpv-riding.avif", "/images/gnizdo-team/fpv-riding.webp", "/images/gnizdo-team/fpv-riding.jpeg"]}
                  alt="FPV дрони в польоті"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500 text-white text-xs font-semibold shadow-lg">Drones</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/10 light:border-white/30">
                    <h3 className=" dark:text-white light:text-black font-bold text-sm">FPV Дрони • Gnizdo</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          {/* E-commerce */}
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/projects/ecommerce`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 dark:border-white/10 light:border-gray-300 hover:border-blue-400/40 dark:hover:border-blue-400/40 light:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 light:hover:shadow-blue-500/30">
              <div className="aspect-[4/3] relative overflow-hidden">
                <SmartImage
                  sources={["/images/agricultural-center-plantpol-ukraine/hero.avif", "/images/agricultural-center-plantpol-ukraine/hero.webp", "/images/agricultural-center-plantpol-ukraine/hero.png"]}
                  alt="E-commerce Plantpol"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent dark:from-black/90 dark:via-black/20 light:from-black/75 light:via-black/30" />
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500 text-white text-xs font-semibold shadow-lg">E-commerce</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 dark:border-white/10 light:border-white/30">
                    <h3 className=" dark:text-white light:text-black font-bold text-sm">Агрохолдинг Plantpol</h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ABOUT: Хто ми? */}
      <section id="about" className="about-section mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/50">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-8">{c.about.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <SmartImage
            sources={["/images/home/FPF%20team%20with%20Diwave.jpg", "/images/home/FPF team with Diwave.jpg"]}
            alt="Команда Diwave з FPF"
            className="w-full h-96 rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
            sizes="(min-width:768px) 50vw, 100vw"
            imgClassName="w-full h-96 object-cover"
          />
          <div>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
              {c.about.description}
            </p>
            <a href={`${locale === 'en' ? '/en' : ''}/about`} className="inline-flex mt-6 px-5 py-2 rounded-md border border-white/20 dark:border-white/20 light:border-blue-300 text-white dark:text-white light:text-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-600 transition">{c.about.cta}</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section mx-auto max-w-3xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/40">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 text-center">{c.faq.title}</h2>
        <div className="mt-6 divide-y divide-white/10 dark:divide-white/10 light:divide-gray-200 rounded-xl border border-white/10 dark:border-white/10 light:border-gray-200 overflow-hidden">
          {c.faq.items.map((item, idx) => (
            <div key={idx} className="bg-white/5 dark:bg-white/5 light:bg-white">
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 transition"
                aria-expanded={openFaq===idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <h3 className="text-white dark:text-white light:text-gray-900 font-medium">{item.question}</h3>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">{openFaq===idx ? '−' : '+'}</span>
              </button>
              {openFaq===idx && (
                <div className="px-5 pb-5 text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <div className="text-white dark:text-white light:text-gray-900 text-lg">{c.faq.ctaTitle}</div>
          <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex mt-4 px-6 py-3 rounded-md bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-lg">
            <span className="text-white">{c.faq.ctaButton}</span>
          </a>
        </div>
      </section>

      {/* HOW IT WORKS: коротко і без «порожніх» блоків */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-sm tracking-widest text-gray-400 mb-8">
          {t('headings.how').toUpperCase()}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title }) => (
            <motion.a
              key={title}
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-300/40 hover:bg-white/10 transition-colors text-center"
            >
              <div className="flex justify-center">
                <Icon className="text-cyan-300" />
              </div>
              <div className="mt-3 font-semibold font-bold text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">{title}</div>
              <div className="text-xs text-gray-300 opacity-90 group-hover:opacity-100">
                {c.howItWorks.bookCall}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* INDUSTRIES: навігація за індустріями з фото з public/images */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white light:text-gray-900">{locale === 'en' ? 'Industries' : 'Індустрії'}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {[
            { slug: 'automotive', img: '/images/industries/automotive', alt: 'Automotive' },
            { slug: 'vending', img: '/images/industries/vending', alt: 'Vending' },
            { slug: 'fintech', img: '/images/industries/fintech', alt: 'Fintech' },
            { slug: 'energy', img: '/images/industries/energy', alt: 'Energy' },
            { slug: 'retail', img: '/images/industries/retail', alt: 'Retail' },
            { slug: 'logistics', img: '/images/industries/logistics', alt: 'Logistics' },
            { slug: 'iot', img: '/images/industries/iot', alt: 'IoT' },
            { slug: 'marketing', img: '/images/industries/marketing', alt: 'Marketing' }
          ].map((i) => (
            <motion.a
              key={i.slug}
              href={`${locale === 'en' ? '/en' : ''}/industries/${i.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block rounded-lg overflow-hidden border border-white/10 hover:border-cyan-300/40 transition-colors"
            >
              <div className="relative">
                <SmartImage
                  srcFolder={i.img}
                  alt={i.alt}
                  className="w-full h-32"
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  imgClassName="w-full h-32 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-white font-bold text-base drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {c.industries[i.slug as keyof typeof c.industries]}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={`${locale === 'en' ? '/en' : ''}/industries`}
            className="inline-flex items-center rounded-md px-5 py-2 border border-white/20 dark:border-white/20 light:border-gray-300 dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition"
          >
            {c.industries.allIndustries}
          </a>
        </div>
      </section>

      {/* CTA: чіткий заклик до дії */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white p-6 backdrop-blur flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="dark:text-white light:text-gray-900 text-lg font-semibold">
              {c.cta.title}
            </div>
            <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
              {c.cta.subtitle}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center rounded-md px-5 py-2 bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-md"
            >
              <span className="text-white">{c.cta.discussProject}</span>
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 dark:border-white/30 light:border-blue-300 text-white dark:text-white light:text-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-600 transition"
            >
              {c.cta.seeSolutions}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT: компактний і стильний */}
      <section className="contact-section relative overflow-hidden mx-auto max-w-5xl px-6 pb-20">
        <h2 className="my-8
        text-2xl md:text-3xl font-semibol dark:text-white light:text-gray-900 text-center
 ">
          {t('headings.contact').toUpperCase()}
        </h2>

        <div className="contact-card rounded-3xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-white/[0.03] to-white/[0.08] dark:from-white/[0.03] dark:to-white/[0.08] light:from-white light:to-gray-50 p-8 md:p-10 backdrop-blur-2xl shadow-2xl">
          {/* Header з фото та описом */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-purple-400/15 to-blue-400/20 blur-lg" />
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-white/20 light:border-blue-200">
                <SmartImage
                  sources={["/images/team/dmytro.jpg"]}
                  alt="Dmytro Kravets"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="dark:text-white light:text-gray-900 font-bold text-2xl mb-2">Dmytro Kravets</h3>
              <p className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 text-sm font-semibold mb-3">Founder, Diwave</p>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                {c.contact.description}
              </p>
            </div>
          </div>

          {/* Контакти у дві колонки */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Колонка 1: Основні контакти */}
            <div className="space-y-3">
              <h4 className="dark:text-white light:text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide opacity-70">{locale === 'en' ? 'Contact Info' : 'Контакти'}</h4>
              <a href="tel:+380505923772" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-blue-600 text-sm">+380 50 592 3772</span>
              </a>
              <a href="mailto:info@diwave.company" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-blue-600 text-sm break-all">info@diwave.company</span>
              </a>
              <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-blue-600 text-sm">/in/dmytrokravets</span>
              </a>
              <a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-blue-600 text-sm">/freelancers/stevark</span>
              </a>
              <a href="https://clutch.co/profile/diwave" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-orange-400 dark:text-orange-400 light:text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-blue-600 text-sm">Clutch Reviews</span>
              </a>
            </div>

            {/* Колонка 2: Месенджери та соцмережі */}
            <div className="space-y-3">
              <h4 className=" dark:text-white light:text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wide opacity-70">{locale === 'en' ? 'Messengers' : 'Месенджери'}</h4>
              <a href="tg://resolve?phone=380505923772" className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-50 border border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-200 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 light:hover:bg-blue-100 transition-colors group">
                <span className="text-cyan-300 dark:text-cyan-300 light:text-blue-700 text-sm font-semibold">Telegram</span>
              </a>
              <a href={locale === 'en' ? "https://wa.me/380505923772?text=Hello%20Diwave!%20I%20want%20to%20discuss%20a%20project." : "https://wa.me/380505923772?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%20Diwave!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82."} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-50 border border-emerald-400/20 dark:border-emerald-400/20 light:border-emerald-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/20 light:hover:bg-emerald-100 transition-colors group">
                <span className="text-emerald-300 dark:text-emerald-300 light:text-emerald-700 text-sm font-semibold">WhatsApp</span>
              </a>
              <a href="viber://chat?number=%2B380505923772" className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 border border-purple-400/20 dark:border-purple-400/20 light:border-purple-300 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-100 transition-colors group">
                <span className="text-purple-300 dark:text-purple-300 light:text-purple-700 text-sm font-semibold">Viber</span>
              </a>
              <div className="pt-2 flex gap-3">
                <a href="https://www.facebook.com/DiWave.company" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                  <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-medium">Facebook</span>
                </a>
                <a href="https://www.instagram.com/diwave.company/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                  <span className="text-pink-400 dark:text-pink-400 light:text-pink-600 text-xs font-medium">Instagram</span>
                </a>
                <a href="https://www.youtube.com/@DigitalWaveAI" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                  <span className="text-red-400 dark:text-red-400 light:text-red-600 text-xs font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA кнопка */}
          <div className="flex justify-center pt-4">
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-500 dark:to-blue-600 light:from-blue-600 light:to-indigo-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>{t('cta.discuss')}</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
