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

const Home: React.FC<Props> = ({ locale }) => {
  const { t } = useTranslation();
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}`;

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
          'https://upwork.com/freelancers/stevark'
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
              Автоматизуємо бізнес та підключаємо обладнання до інтернету.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hero-subtitle mt-6 text-lg md:text-xl text-white/90 max-w-3xl"
            >
              E-commerce, CRM/SCADA, IoT, AI-SEO, платіжні інтеграції та аналітика.
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
                  {locale === 'en' ? 'Explore solutions' : 'Переглянути рішення'}
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
      <section className="products-section mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/50">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-3">Наші рішення, які працюють на вас</h2>
        <p className="text-center text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-8">Комплексні бізнес-рішення з IoT, платіжними інтеграціями та повною автоматизацією</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Картка 1: Автомийки SamWash - горизонтальна */}
          <div className="product-card group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur hover:border-cyan-400/50 dark:hover:border-cyan-400/50 light:hover:border-blue-400 hover:bg-white/10 dark:hover:bg-white/10 light:hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
              <SmartImage
                sources={["/images/solutions/car-washes/FEC5B102-98DA-4179-BDEE-88D3EFCC21E3_1_105_c.jpeg"]}
                alt="Автомийки самообслуговування SamWash"
                className="w-full h-64"
                imgClassName="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-500/90 text-white text-xs font-semibold backdrop-blur">Популярне</div>
            </div>
            <div className="p-6">
              <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-xl mb-2">Автомийки самообслуговування SamWash</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-4">Повністю автоматизовані комплекси з EBITDA 70%. Інтеграції з готівковими, безготівковими та монетними платіжними пристроями та дистанційним
                  керуванням і обслуговуванням. <br/> Ти спиш, а бізнес працює 24/7</p>
              <a href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 dark:border-white/20 light:border-blue-300 text-white dark:text-white light:text-blue-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50 transition group-hover:border-cyan-400/60">
                Дізнатися більше
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Картка 2: Вендінгові апарати - вертикальна */}
          <div className="product-card group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-400 hover:bg-white/10 dark:hover:bg-white/10 light:hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <SmartImage
                sources={["/images/industries/vending/vacuum-main.jpg"]}
                alt="Вендінгові апарати з 19'' екраном"
                className="w-full h-80"
                imgClassName="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-semibold backdrop-blur">IoT</div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-xl mb-2">Порохотяг самообслуговування з сенсорним екраном та ступенем захисту IP 65</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-4 flex-1">Ефективний порохотяг самообслуговування на 2 поста, потужністю 6 кВт 380V для автомийок, електро зарядних станцій та зон скупчення автомобілей</p>
              <a href={`${locale === 'en' ? '/en' : ''}/projects/vending`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 dark:border-white/20 light:border-purple-300 text-white dark:text-white light:text-purple-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-purple-50 transition group-hover:border-purple-400/60">
                Дізнатися більше
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Картка 3: Дрони FPV */}
          <div className="product-card group rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur hover:border-emerald-400/50 dark:hover:border-emerald-400/50 light:hover:border-emerald-400 hover:bg-white/10 dark:hover:bg-white/10 light:hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-900/20 to-teal-900/20">
              <SmartImage
                sources={["/images/industries/drones/img.png"]}
                alt="Дрони FPV та Українська асоціація пілотів дронів"
                className="w-full h-64"
                imgClassName="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold backdrop-blur">Новинка</div>
            </div>
            <div className="p-6">
              <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-xl mb-2">Дрони FPV • Гніздо (UAPD)</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-4">Українська асоціація пілотів дронів: навчання, виробництво та розвиток drone-технологій</p>
              <a href={`${locale === 'en' ? '/en' : ''}/solutions/drones`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 dark:border-white/20 light:border-emerald-300 text-white dark:text-white light:text-emerald-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-emerald-50 transition group-hover:border-emerald-400/60">
                Дізнатися більше
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SHOWCASE: Реальні проєкти з фото */}
      <section className="mx-auto max-w-7xl px-6 pb-8 bg-transparent dark:bg-transparent light:bg-white/30">
        <SectionHeader overline={t('headings.projects')} title={projects.title} subtitle={projects.intro} />

        {/* Великі featured проєкти */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.a
            href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-300/40 transition-all"
          >
            <SmartImage
              sources={['/images/projects/img_2.png']}
              alt="SamWash - Автомийки самообслуговування"
              className="w-full h-80"
              imgClassName="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">SamWash</h3>
                <p className="text-gray-300 text-sm mb-3">Автомийки самообслуговування з IoT/SCADA та платіжними інтеграціями</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">70% EBITDA</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">IoT/SCADA</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">Telemetry</span>
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
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-300/40 transition-all"
          >
            <SmartImage
              sources={['/images/projects/plantpol.png']}
              alt="E-commerce проєкти"
              className="w-full h-80"
              imgClassName="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Електронна комерція</h3>
                <p className="text-gray-300 text-sm mb-3">Розробка інтернет-магазинів з повною автоматизацією</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Без кол-центру</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">React</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">SEO</span>
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
              className="block rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-300/40 transition-colors group"
            >
              <SmartImage
                srcFolder={p.imgFolder}
                alt={p.imgAlt}
                className="w-full h-48"
                imgClassName="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="text-gray-400 text-sm mt-1 line-clamp-2">{p.description}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 rounded bg-cyan-400/10 text-cyan-200 border border-cyan-400/20"
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
            className="inline-flex items-center rounded-md px-5 py-2 border border-white/20 text-white hover:bg-white/10 transition"
          >
            {locale === 'en' ? 'All projects' : 'Усі проєкти'}
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
                <span className="text-sm text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">Вендингові рішення</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                Вендингові апарати з сенсорним екраном
              </h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-6">
                Захист <strong className="text-cyan-400 dark:text-cyan-400 light:text-blue-700">IP65</strong> — повна захищеність від пилу та водяних бризок.
                Ідеально підходить для зовнішньої установки у будь-яких погодних умовах.
              </p>
              <ul className="space-y-3 text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-1 font-bold">✓</span>
                  <span>Сенсорний екран 19" високої яскравості для роботи на вулиці</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-1 font-bold">✓</span>
                  <span>Безконтактна оплата (NFC, QR-коди, картки)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-1 font-bold">✓</span>
                  <span>Віддалений моніторинг та контроль через IoT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 mt-1 font-bold">✓</span>
                  <span>Система охолодження/нагріву продукції</span>
                </li>
              </ul>
              <a
                href="/solutions/alcohol-vending"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 dark:bg-cyan-500 light:bg-blue-600 text-white font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-600 light:hover:bg-blue-700 transition shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/25 light:shadow-blue-500/25"
              >
                <span className="text-white">Дізнатись більше</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/20">
                <img
                  src="/images/projects/img_2.png"
                  alt="Вендинговий апарат з сенсорним екраном та захистом IP65"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN GALLERY: Наші роботи */}
      <section className="design-gallery mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/40">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-3">Наші роботи</h2>
        <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-10 max-w-2xl">Від промислових автомийок та вендингових автоматів самообслуговування до організації змагань на дронах — ми створюємо комплексні рішення</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { src: '/images/projects/0D836EDC-DDF3-49DC-A654-BC4BB803C72C_1_105_c.jpeg', alt: 'Дизайн екстер\'єру автомийки', category: 'Design' },
            { src: '/images/projects/img.png', alt: 'Комплексні IoT рішення', category: 'IoT' },
            { src: '/images/projects/img_1.png', alt: 'Промислове обладнання', category: 'Hardware' },
            { src: '/images/solutions/car-washes/2F00D20A-A2AE-46A7-875B-EF2CDB18B66E_1_105_c.jpeg', alt: 'Технологічні рішення', category: 'Tech' },
            { src: '/images/industries/drones/741ADB82-E672-4F57-95E6-790CD07D8C92_1_105_c.jpeg', alt: 'Дрон-технології', category: 'Drones' },
            { src: '/images/projects/img_2.png', alt: 'Вендингові системи', category: 'Software' },
            { src: '/images/projects/22B1B692-DB4B-41CB-9738-DFD3507F6708_1_105_c.jpeg', alt: 'Пилосос 6 кВт з 19" екраном', category: 'Vacuum' }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 light:hover:border-blue-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50">
                <SmartImage
                  sources={[img.src]}
                  alt={img.alt}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Category badge - always white text */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                  {img.category}
                </div>

                {/* Title on hover - always white text with strong shadow */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT: Хто ми? */}
      <section id="about" className="about-section mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/50">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-8">Хто ми?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <SmartImage
            sources={["/images/home/FPF team with Diwave.jpg"]}
            alt="Команда Diwave з FPF"
            className="w-full h-72 rounded-xl border border-white/10"
            imgClassName="w-full h-72 object-cover"
          />
          <div>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
              Diwave — інженерна команда, що поєднує апаратні рішення, програмне забезпечення та аналітику. Ми автоматизуємо бізнес‑процеси, підключаємо обладнання (IoT/SCADA), інтегруємо платежі та запускаємо e‑commerce, CRM/лояльність і AI‑SEO. Працюємо від Discovery і дизайну до запуску та подальшого зростання.
            </p>
            <a href={`${locale === 'en' ? '/en' : ''}/about`} className="inline-flex mt-6 px-5 py-2 rounded-md border border-white/20 dark:border-white/20 light:border-blue-300 text-white dark:text-white light:text-blue-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50 transition">Дізнатися про нас більше</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section mx-auto max-w-3xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/40">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 text-center">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10 dark:divide-white/10 light:divide-gray-200 rounded-xl border border-white/10 dark:border-white/10 light:border-gray-200 overflow-hidden">
          {[{q:'Як швидко стартуємо?', a:'Залежно від складності: від 2–4 тижнів для MVP до 2–3 місяців для повноцінного запуску. Починаємо з Discovery, узгоджуємо KPI та план.'}, {q:'Які технології?', a:'TypeScript/React, Node.js/PHP, інтеграції з платіжними провайдерами, IoT/SCADA, аналітика, AI‑SEO. Інфраструктура: Docker, CI/CD, моніторинг.'}].map((item, idx) => (
            <div key={idx} className="bg-white/5 dark:bg-white/5 light:bg-white">
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 transition"
                aria-expanded={openFaq===idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <h3 className="text-white dark:text-white light:text-gray-900 font-medium">{item.q}</h3>
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-600">{openFaq===idx ? '−' : '+'}</span>
              </button>
              {openFaq===idx && (
                <div className="px-5 pb-5 text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <div className="text-white dark:text-white light:text-gray-900 text-lg">Готові розв'язати вузьке місце у вашому бізнесі?</div>
          <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex mt-4 px-6 py-3 rounded-md bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-lg">
            <span className="text-white">Зв'язатися</span>
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
              <div className="mt-3 font-semibold text-white">{title}</div>
              <div className="text-xs text-gray-300 opacity-90 group-hover:opacity-100">
                {locale === 'en' ? 'Book a call' : 'Записатись на дзвінок'}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* INDUSTRIES: навігація за індустріями з фото з public/images */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader overline={locale === 'en' ? 'Industries' : 'Індустрії'} title="" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {[
            { slug: 'automotive', titleUk: 'Автомобільна', titleEn: 'Automotive', img: '/images/industries/automotive', alt: 'Automotive' },
            { slug: 'vending', titleUk: 'Вендинг', titleEn: 'Vending', img: '/images/industries/vending', alt: 'Vending' },
            { slug: 'fintech', titleUk: 'Фінтех', titleEn: 'Fintech', img: '/images/industries/fintech', alt: 'Fintech' },
            { slug: 'energy', titleUk: 'Енергетика', titleEn: 'Energy', img: '/images/industries/energy', alt: 'Energy' },
            { slug: 'retail', titleUk: 'Рітейл', titleEn: 'Retail', img: '/images/industries/retail', alt: 'Retail' },
            { slug: 'logistics', titleUk: 'Логістика', titleEn: 'Logistics', img: '/images/industries/logistics', alt: 'Logistics' },
            { slug: 'iot', titleUk: 'IoT', titleEn: 'IoT', img: '/images/industries/iot', alt: 'IoT' },
            { slug: 'marketing', titleUk: 'Маркетинг', titleEn: 'Marketing', img: '/images/industries/marketing', alt: 'Marketing' }
          ].map((i) => (
            <motion.a
              key={i.slug}
              href={`${locale === 'en' ? '/en' : ''}/industries/${i.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-300/40 transition-colors"
            >
              <div className="relative">
                <SmartImage
                  srcFolder={i.img}
                  alt={i.alt}
                  className="w-full h-40"
                  imgClassName="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {locale === 'en' ? i.titleEn : i.titleUk}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={`${locale === 'en' ? '/en' : ''}/industries`}
            className="inline-flex items-center rounded-md px-5 py-2 border border-white/20 text-white hover:bg-white/10 transition"
          >
            {locale === 'en' ? 'All industries' : 'Усі індустрії'}
          </a>
        </div>
      </section>

      {/* CTA: чіткий заклик до дії */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="text-white text-lg font-semibold">
              {locale === 'en' ? 'Have a project in mind?' : 'Є ідея або проєкт?'}
            </div>
            <div className="text-gray-300 text-sm">
              {locale === 'en'
                ? 'From discovery and design to launch and growth.'
                : 'Від Discovery та дизайну — до запуску і зростання.'}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center rounded-md px-5 py-2 bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-md"
            >
              <span className="text-white">{locale === 'en' ? 'Discuss project' : 'Обговорити проєкт'}</span>
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 dark:border-white/30 light:border-blue-300 text-white dark:text-white light:text-blue-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50 transition"
            >
              {locale === 'en' ? 'See solutions' : 'Дивитись рішення'}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT: з реальним фото з public/images */}
      <section className="contact-section mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-center text-sm tracking-widest text-gray-400 dark:text-gray-400 light:text-gray-600 mb-12 font-semibold">
          {t('headings.contact').toUpperCase()}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="contact-card rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white p-8 backdrop-blur shadow-xl">
            <SmartImage
              srcFolder="/images/team"
              alt="Dmytro Kravets — Founder, Diwave"
              className="rounded-xl w-full h-72 mb-6"
              imgClassName="rounded-xl w-full h-72 object-cover"
            />
            <div className="mt-6">
              <div className="text-white dark:text-white light:text-gray-900 font-bold text-xl mb-3">Dmytro Kravets — Founder, Diwave</div>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-base leading-relaxed">
                Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки,
                вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо
                процеси за допомогою AI, щоб бізнес працював ефективніше.
              </p>
            </div>
          </div>
          <div className="contact-card rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/5 dark:bg-white/5 light:bg-white p-8 backdrop-blur shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-white dark:text-white light:text-gray-900 font-bold text-2xl mb-6">Зв'язатися з нами</h3>
              <ul className="text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-4">
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+380505923772" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">+380 50 592 3772</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@diwave.company" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">info@diwave.company</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">/in/dmytrokravets</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                  <a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">/freelancers/stevark</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg">
                  <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">Ukraine & EU</span>
                </li>
              </ul>
            </div>
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-4 rounded-xl bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-bold shadow-lg hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105"
            >
              <span className="text-white">{t('cta.discuss')}</span>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
