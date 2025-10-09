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

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Diwave',
      url,
      areaServed: ['UA', 'EU'],
      logo: `${baseUrl}/favicon.ico`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Diwave',
      url
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you deliver end-to-end?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. From idea and hardware to software, launch and growth.' }
        },
        {
          '@type': 'Question',
          name: 'Do you support IoT/SCADA?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we connect devices, collect data and automate.' }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: projects.items.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.title
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
        title="Diwave — Software, IoT, car wash, vending, drones | Diwave"
        description={t('hero.subtitle')}
        url={url}
        image={`${baseUrl}/images/home/hero.webp`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/` },
          { hrefLang: 'en', href: `${baseUrl}/en` }
        ]}
        jsonLd={jsonLd}
      />

      {/* HERO: iOS 26 style, яскравіші кольори + світла версія */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000428] via-[#004e92] to-[#001837] dark:from-[#000428] dark:via-[#004e92] dark:to-[#001837] light:from-blue-50 light:via-purple-50 light:to-pink-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1400px_700px_at_25%_15%,rgba(59,130,246,0.25),transparent),radial-gradient(1200px_600px_at_75%_25%,rgba(147,51,234,0.22),transparent),radial-gradient(900px_450px_at_50%_75%,rgba(6,182,212,0.18),transparent)] dark:bg-[radial-gradient(1400px_700px_at_25%_15%,rgba(59,130,246,0.25),transparent),radial-gradient(1200px_600px_at_75%_25%,rgba(147,51,234,0.22),transparent),radial-gradient(900px_450px_at_50%_75%,rgba(6,182,212,0.18),transparent)] light:bg-[radial-gradient(1400px_700px_at_25%_15%,rgba(59,130,246,0.15),transparent),radial-gradient(1200px_600px_at_75%_25%,rgba(147,51,234,0.12),transparent),radial-gradient(900px_450px_at_50%_75%,rgba(6,182,212,0.1),transparent)]" />
        <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '50px 50px'}} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent dark:from-black/30 light:from-white/20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold text-white dark:text-white light:text-gray-900 tracking-tight"
          >
            Автоматизуємо бізнес та підключаємо обладнання до інтернету.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-5 text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl"
          >
            E-commerce, CRM/SCADA, IoT, AI-SEO, платіжні інтеграції та аналітика.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center rounded-md px-6 py-3 bg-white text-black dark:bg-white dark:text-black light:bg-blue-600 light:text-white font-semibold hover:bg-white/90 dark:hover:bg-white/90 light:hover:bg-blue-700 transition"
            >
              {t('hero.cta')}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center rounded-md px-6 py-3 border border-white/30 dark:border-white/30 light:border-blue-300 text-white dark:text-white light:text-blue-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-blue-50 transition"
            >
              {locale === 'en' ? 'Explore solutions' : 'Переглянути рішення'}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/car-washes`} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/90 hover:bg-white/15 border border-white/15">Car wash</a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/ecommerce`} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/90 hover:bg-white/15 border border-white/15">E‑commerce</a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/iot-scada`} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/90 hover:bg-white/15 border border-white/15">IoT/SCADA</a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/drones`} className="text-sm px-3 py-1.5 rounded-full bg-white/10 text-white/90 hover:bg-white/15 border border-white/15">Drones</a>
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
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-4">Повністю автоматизовані комплекси з платіжними інтеграціями та дистанційним керуванням</p>
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
                sources={["/images/industries/vending/22B1B692-DB4B-41CB-9738-DFD3507F6708_1_105_c.jpeg"]}
                alt="Вендінгові апарати з 19'' екраном"
                className="w-full h-80"
                imgClassName="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-purple-500/90 text-white text-xs font-semibold backdrop-blur">IoT</div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-xl mb-2">Вендингові апарати з сенсорним екраном та ступенем захисту IP 65</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-sm leading-relaxed mb-4 flex-1">Ефективний пилосос самообслуговування потужністю 6 кВт 380V з великим вертикальним дисплеєм для автомийок, EV-станцій та зон скупчення автомобілей</p>
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
                <h3 className="text-white text-2xl font-bold mb-2">E-commerce</h3>
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

      {/* DESIGN GALLERY: Наші роботи */}
      <section className="design-gallery mx-auto max-w-7xl px-6 py-16 bg-transparent dark:bg-transparent light:bg-white/40">
        <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-3">Наші роботи</h2>
        <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-10 max-w-2xl">Від промислових автомийок та вендингових автоматів самообслуговування до організації змагань на дронах — ми створюємо комплексні рішення</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { src: '/images/projects/0D836EDC-DDF3-49DC-A654-BC4BB803C72C_1_105_c.jpeg', alt: 'Дизайн екстер\'єру автомийки', category: 'Design' },
            { src: '/images/projects/img.png', alt: 'Комплексні IoT рішення', category: 'IoT' },
            { src: '/images/projects/img_1.png', alt: 'Промислове обладнання', category: 'Hardware' },
            { src: '/images/projects/22B1B692-DB4B-41CB-9738-DFD3507F6708_1_105_c.jpeg', alt: 'Пилосос 6 кВт з 19" екраном', category: 'Vending' },
            { src: '/public/images/solutions/car-washes/2F00D20A-A2AE-46A7-875B-EF2CDB18B66E_1_105_c.jpeg', alt: 'Технологічні рішення', category: 'Tech' },
            { src: '/images/industries/drones/741ADB82-E672-4F57-95E6-790CD07D8C92_1_105_c.jpeg', alt: 'Дрон-технології', category: 'Drones' },
            { src: '/images/projects/img_2.png', alt: 'Вендингові системи', category: 'Software' },
            { src: '/images/projects/img_3.png', alt: 'Автомийки самообслуговування', category: 'Car Wash' }
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/90 dark:bg-cyan-500/90 light:bg-blue-600/90 text-white text-xs font-semibold backdrop-blur transform group-hover:scale-110 transition-transform">
                  {img.category}
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white dark:text-white light:text-white font-semibold text-sm leading-snug drop-shadow-lg">{img.alt}</p>
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
          <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex mt-4 px-6 py-3 rounded-md bg-white dark:bg-white light:bg-blue-600 text-black dark:text-black light:text-white font-semibold hover:bg-white/90 dark:hover:bg-white/90 light:hover:bg-blue-700 transition">Зв'язатися</a>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                <div className="absolute bottom-3 left-3 text-white font-semibold">
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
              className="inline-flex items-center rounded-md px-5 py-2 bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              {locale === 'en' ? 'Discuss project' : 'Обговорити проєкт'}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition"
            >
              {locale === 'en' ? 'See solutions' : 'Дивитись рішення'}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT: з реальним фото з public/images */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-center text-sm tracking-widest text-gray-400 mb-8">
          {t('headings.contact').toUpperCase()}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <SmartImage
              srcFolder="/images/team"
              alt="Dmytro Kravets — Founder, Diwave"
              className="rounded-lg w-full h-64"
              imgClassName="rounded-lg w-full h-64 object-cover"
            />
            <div className="mt-4">
              <div className="text-white font-semibold">Dmytro Kravets — Founder, Diwave</div>
              <p className="text-gray-300 text-sm mt-2">
                Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки,
                вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо
                процеси за допомогою AI, щоб бізнес працював ефективніше.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex mb-4 px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              {t('cta.discuss')}
            </a>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="tel:+380505923772" className="hover:text-white text-cyan-300">Phone: +380 50 592 3772</a>
              </li>
              <li>
                <a href="mailto:kravets.lviv@gmail.com" className="hover:text-white text-cyan-300">E‑mail: kravets.lviv@gmail.com</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">
                  LinkedIn: /in/dmytrokravets
                </a>
              </li>
              <li>
                <a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">
                  Upwork: /freelancers/stevark
                </a>
              </li>
              <li className="opacity-80">Location: Ukraine & EU</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
