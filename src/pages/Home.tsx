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

      {/* HERO: iOS‑like, серйозний тон, чіткі CTA */}
      <section className="relative overflow-hidden">
        <SmartImage
          srcFolder="/images/home"
          alt="Diwave hero"
          asBackground
          className="absolute inset-0 opacity-35"
          priority
        />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(950px_480px_at_15%_-10%,rgba(34,211,238,0.24),transparent),radial-gradient(800px_420px_at_85%_0%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[1.5px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tight"
          >
            {t('hero.h1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-5 text-lg text-gray-300 max-w-3xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`${locale === 'en' ? '/en' : ''}/contact`}
              className="inline-flex items-center rounded-md px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              {t('hero.cta')}
            </a>
            <a
              href={`${locale === 'en' ? '/en' : ''}/solutions`}
              className="inline-flex items-center rounded-md px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
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

      {/* SOLUTIONS: Клікабельні картки з iOS‑склом */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader overline={t('headings.products')} title="" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {products.map(({ icon: Icon, title, href }) => (
            <motion.a
              key={title}
              href={href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-300/40 hover:bg-white/10 transition-colors"
            >
              <Icon className="text-cyan-300" />
              <div className="mt-3 font-semibold text-white">{title}</div>
              <div className="mt-1 text-sm text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity">
                {locale === 'en'
                  ? 'Click to learn more'
                  : 'Перейти до розділу'}
              </div>
            </motion.a>
          ))}
          {/* Плитка «Усі рішення» */}
          <a
            href={`${locale === 'en' ? '/en' : ''}/solutions`}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-300/40 hover:bg-white/10 transition-colors flex items-center justify-center text-white/90 font-semibold"
          >
            {locale === 'en' ? 'All solutions →' : 'Усі рішення →'}
          </a>
        </div>
      </section>

      {/* PROJECTS: клікабельні кейси з фото з public/images */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <SectionHeader overline={t('headings.projects')} title={projects.title} subtitle={projects.intro} />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.items.map((p) => (
            <motion.a
              key={p.slug}
              href={`${locale === 'en' ? '/en' : ''}/projects/${p.slug}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block rounded-xl overflow-hidden border border-white/10 bg-black/40 hover:border-cyan-300/40 transition-colors"
            >
              <SmartImage
                srcFolder={p.imgFolder}
                alt={p.imgAlt}
                className="w-full h-48"
                imgClassName="w-full h-48 object-cover"
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
