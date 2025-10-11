import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';
import { motion } from 'framer-motion';

type Props = { locale: 'uk' | 'en' };

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const About: React.FC<Props> = ({ locale }) => {
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/about`;

  const content = {
    uk: {
      title: 'Про Diwave — Команда та Місія',
      description: 'Diwave: інжиніринг, програмні рішення, IoT, AI та автоматизація. Команда експертів, що поєднує апаратні рішення, ПЗ та аналітику для масштабування бізнесу. Від ідеї до запуску та зростання.',
      heroTitle: 'Про Diwave',
      heroSubtitle: 'Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику для автоматизації та масштабування бізнесу',
      missionTitle: 'Наша Місія',
      missionText: 'Трансформувати традиційний бізнес через технології. Ми створюємо end-to-end екосистеми — від ідеї та обладнання до ПЗ, фіскалізації, запуску та масштабування. Наша мета — зробити бізнес прозорим, ефективним та прибутковим.',
      valuesTitle: 'Наші Цінності',
      values: [
        { title: 'Інновації', text: 'Застосовуємо найсучасніші технології: IoT, AI, Cloud для вирішення реальних бізнес-викликів' },
        { title: 'Прозорість', text: 'Усуваємо витоки готівки через прозору CRM з фіскалізацією та онлайн-звітністю' },
        { title: 'Автоматизація', text: 'Замінюємо ручні процеси на ефективні e-commerce платформи без кол-центрів' },
        { title: 'Результат', text: 'Фокусуємось на ROI, EBITDA до 70% у нішах, масштабоване зростання' }
      ],
      founderTitle: 'Засновник та Організатор',
      founderName: 'Дмитро Кравець',
      founderRole: 'Founder & CTO',
      founderBio: 'Tech Entrepreneur із 14+ роками досвіду трансформації традиційного бізнесу. Будує end-to-end технологічні екосистеми від ідеї до масштабування. Експерт у фіскалізації, e-commerce, IoT та AI-автоматизації.',
      founderExpertise: [
        'Technology Strategy & R&D',
        'Full-Stack Development (PHP, Python, Node.js, TypeScript)',
        'DevOps & Cloud (Docker, K8s, AWS, DigitalOcean)',
        'E-commerce & SaaS Architecture',
        'Payment Systems (Stripe, LiqPay, PayPal, Monobank)',
        'AI Integration & Automation',
        'Digital Marketing (Google, Facebook, SEO)',
        'Team Leadership & Performance Management'
      ],
      projectsTitle: 'Ключові Проєкти',
      projects: [
        {
          name: 'Samwash',
          desc: 'CRM з фіскалізацією для автомийок самообслуговування. Прозора звітність, онлайн-платежі, EBITDA 70%',
          link: 'https://samwash.ua'
        },
        {
          name: 'Plantpol',
          desc: 'Один з найбільших B2B e-commerce магазинів розсади в Україні. Повна автоматизація без кол-центру',
          link: 'https://plantpol.com.ua'
        },
        {
          name: 'IoT Solutions',
          desc: 'Інтеграція обладнання: вендингові автомати, автомийки, зарядні станції EV, дрони'
        }
      ],
      teamTitle: 'Наша Команда',
      teamSubtitle: 'Експерти, що допомагають клієнтам масштабувати бізнес через технології',
      ctaTitle: 'Готові обговорити ваш проєкт?',
      ctaText: 'Отримайте безкоштовну консультацію від команди Diwave. Ми допоможемо визначити технологічний стек, розрахувати ROI та побудувати дорожню карту проєкту.',
      ctaButton: 'Зв\'язатись з нами',
      ctaNote: 'Відповідь протягом 24 годин • Безкоштовна консультація • NDA за запитом'
    },
    en: {
      title: 'About Diwave — Team and Mission',
      description: 'Diwave: engineering, software solutions, IoT, AI and automation. Team of experts combining hardware, software and analytics to scale businesses. From idea to launch and growth.',
      heroTitle: 'About Diwave',
      heroSubtitle: 'We combine hardware solutions, software, and analytics to automate and scale businesses',
      missionTitle: 'Our Mission',
      missionText: 'Transform traditional businesses through technology. We create end-to-end ecosystems — from idea and hardware to software, fiscalization, launch and scaling. Our goal is to make businesses transparent, efficient and profitable.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Innovation', text: 'Apply cutting-edge technologies: IoT, AI, Cloud to solve real business challenges' },
        { title: 'Transparency', text: 'Eliminate cash leaks through transparent CRM with fiscalization and online reporting' },
        { title: 'Automation', text: 'Replace manual processes with efficient e-commerce platforms without call centers' },
        { title: 'Results', text: 'Focus on ROI, EBITDA up to 70% in niches, scalable growth' }
      ],
      founderTitle: 'Founder and Organizer',
      founderName: 'Dmytro Kravets',
      founderRole: 'Founder & CTO',
      founderBio: 'Tech Entrepreneur with 14+ years of experience transforming traditional businesses. Builds end-to-end tech ecosystems from idea to scaling. Expert in fiscalization, e-commerce, IoT and AI automation.',
      founderExpertise: [
        'Technology Strategy & R&D',
        'Full-Stack Development (PHP, Python, Node.js, TypeScript)',
        'DevOps & Cloud (Docker, K8s, AWS, DigitalOcean)',
        'E-commerce & SaaS Architecture',
        'Payment Systems (Stripe, LiqPay, PayPal, Monobank)',
        'AI Integration & Automation',
        'Digital Marketing (Google, Facebook, SEO)',
        'Team Leadership & Performance Management'
      ],
      projectsTitle: 'Key Projects',
      projects: [
        {
          name: 'Samwash',
          desc: 'CRM with fiscalization for self-service car washes. Transparent reporting, online payments, 70% EBITDA',
          link: 'https://samwash.ua'
        },
        {
          name: 'Plantpol',
          desc: 'One of the largest B2B e-commerce plant nursery stores in Ukraine. Full automation without call center',
          link: 'https://plantpol.com.ua'
        },
        {
          name: 'IoT Solutions',
          desc: 'Hardware integration: vending machines, car washes, EV charging stations, drones'
        }
      ],
      teamTitle: 'Our Team',
      teamSubtitle: 'Experts helping clients scale businesses through technology',
      ctaTitle: 'Ready to discuss your project?',
      ctaText: 'Get a free consultation from the Diwave team. We will help define the technology stack, calculate ROI and build a project roadmap.',
      ctaButton: 'Contact Us',
      ctaNote: 'Response within 24 hours • Free consultation • NDA upon request'
    }
  };

  const t = content[locale];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Diwave',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: t.description,
      areaServed: ['UA', 'EU'],
      founder: {
        '@type': 'Person',
        name: 'Dmytro Kravets',
        jobTitle: 'Founder & CTO',
        url: `${baseUrl}${locale === 'en' ? '/en' : ''}/about`,
        image: `${baseUrl}/images/team/dmytro.jpg`,
        sameAs: [
          'https://linkedin.com/in/dmytrokravets',
          'https://upwork.com/freelancers/stevark',
          'https://youtube.com/@samwash',
          'https://tiktok.com/@samwash.official',
          'https://instagram.com/samwash_carwash',
          'https://facebook.com/samwashcarwash'
        ]
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+380505923772',
        contactType: 'customer service',
        email: 'info@diwave.company',
        areaServed: ['UA', 'EU'],
        availableLanguage: ['Ukrainian', 'English']
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'вул. Венiченка 30',
        addressLocality: 'Львів',
        addressCountry: 'UA'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dmytro Kravets',
      jobTitle: 'Tech Entrepreneur, Founder & CTO',
      url: `${baseUrl}${locale === 'en' ? '/en' : ''}/about`,
      image: `${baseUrl}/images/team/dmytro.jpg`,
      description: t.founderBio,
      sameAs: [
        'https://linkedin.com/in/dmytrokravets',
        'https://upwork.com/freelancers/stevark',
        'https://youtube.com/@samwash',
        'https://tiktok.com/@samwash.official',
        'https://instagram.com/samwash_carwash',
        'https://facebook.com/samwashcarwash',
        'https://diwave.company'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'business',
        email: 'info@diwave.company',
        telephone: '+380505923772',
        areaServed: ['UA', 'EU'],
        availableLanguage: ['Ukrainian', 'English']
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Diwave'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : 'Головна', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
        { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'About' : 'Про нас', item: url }
      ]
    }
  ];

  const teamMembers = [
    { fileBase: 'dimon', name: 'Dmytro Kravets', role: 'Founder & CTO', featured: true },
    { fileBase: 'artem', name: 'Artem', role: 'Full-Stack Developer' },
    { fileBase: 'danik', name: 'Danik', role: 'Backend Developer' },
    { fileBase: 'denus', name: 'Denus', role: 'Hardware Engineer' },
    { fileBase: 'denys', name: 'Denys', role: 'Frontend Developer' },
    { fileBase: 'diana', name: 'Diana', role: 'UI/UX Designer' },
    { fileBase: 'edik', name: 'Edik', role: 'IoT Engineer' },
    { fileBase: 'ira', name: 'Ira', role: 'Project Manager' },
    { fileBase: 'mykola', name: 'Mykola', role: 'DevOps Engineer' },
    { fileBase: 'slavik', name: 'Slavik', role: 'QA Engineer' },
    { fileBase: 'tamila', name: 'Tamila', role: 'Marketing Manager' },
    { fileBase: 'ylia', name: 'Yulia', role: 'Graphic Designer' }
  ];

  return (
    <>
      <SEO
        title={t.title}
        description={t.description}
        url={url}
        image={`${baseUrl}/images/about/fpv-team.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/about` },
          { hrefLang: 'en', href: `${baseUrl}/en/about` },
          { hrefLang: 'x-default', href: `${baseUrl}/about` }
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero Section - iOS 26 Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419] dark:from-[#0a0f1c] dark:via-[#1a1f3a] dark:to-[#0f1419] light:from-gray-50 light:via-white light:to-gray-100">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)] dark:bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)] light:bg-none" />
        <div className="absolute inset-0 opacity-30 dark:opacity-30 light:opacity-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}} aria-hidden />

        <div className="mx-auto max-w-7xl px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-2xl shadow-xl">
              <SmartImage
                srcFolder="/images/about"
                sources={['fpv-team.jpg']}
                alt="Diwave Team - FPV Drone Development"
                className="w-full h-80"
                imgClassName="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-2xl shadow-xl">
              <SmartImage
                srcFolder="/images/about"
                sources={['fpv-working-testing.jpeg']}
                alt="Diwave Team - Working and Testing"
                className="w-full h-80"
                imgClassName="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              {t.missionTitle}
            </h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
              {t.missionText}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              {t.valuesTitle}
            </h2>
            <div className="space-y-4">
              {t.values.map((value, i) => (
                <div key={i} className="border-l-4 border-cyan-500 dark:border-cyan-500 light:border-blue-600 pl-4">
                  <h3 className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Featured */}
      <section className="mx-auto max-w-7xl px-6 py-20 bg-gradient-to-br from-cyan-900/10 via-blue-900/5 to-purple-900/10 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-purple-900/10 light:from-blue-50 light:via-indigo-50 light:to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-3">
            {t.founderTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Founder Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400 bg-white/5 dark:bg-white/5 light:bg-white p-6 backdrop-blur-xl shadow-2xl">
              <div className="rounded-xl overflow-hidden mb-4">
                <SmartImage
                  srcFolder="/images/team"
                  sources={['dmytro.jpg']}
                  alt="Dmytro Kravets — Founder & CTO, Diwave"
                  className="w-full h-96"
                  imgClassName="w-full h-96 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-1">
                {t.founderName}
              </h3>
              <p className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-semibold mb-4">
                {t.founderRole}
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:+380505923772" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-blue-600 transition">
                  📞 +380 50 592 3772
                </a>
                <a href="mailto:dmytro@diwave.company" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-blue-600 transition">
                  ✉️ dmytro@diwave.company
                </a>
                <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-blue-600 transition">
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-xl shadow-xl">
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-6">
                {t.founderBio}
              </p>

              <h4 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                {locale === 'en' ? 'Expertise' : 'Експертиза'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {t.founderExpertise.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 text-lg">✓</span>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-xl shadow-xl">
              <h4 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                {t.projectsTitle}
              </h4>
              <div className="space-y-4">
                {t.projects.map((project, i) => (
                  <div key={i} className="border-l-4 border-emerald-500 dark:border-emerald-500 light:border-green-600 pl-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h5 className="text-white dark:text-white light:text-gray-900 font-semibold">
                        {project.name}
                      </h5>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 text-xs hover:underline"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-3">
            {t.teamTitle}
          </h2>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto">
            {t.teamSubtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.filter(m => !m.featured).map((member, i) => (
            <motion.div
              key={member.fileBase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 light:hover:border-blue-400 transition-all group backdrop-blur-xl shadow-lg hover:shadow-xl"
            >
              <SmartImage
                sources={[`/images/team/${member.fileBase}.jpg`]}
                alt={`${member.name} — ${member.role}`}
                className="w-full h-56"
                imgClassName="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <div className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">
                  {member.name}
                </div>
                <div className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 text-sm">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-xl shadow-xl"
        >
          <SmartImage
            srcFolder="/images/about"
            sources={['learning2025.jpeg']}
            alt="Diwave Team - Learning and Development 2025"
            className="w-full h-96"
            imgClassName="w-full h-96 object-cover"
          />
          <div className="p-6 text-center">
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">
              {locale === 'en'
                ? 'Continuous learning and development — our team in 2025'
                : 'Постійне навчання та розвиток — наша команда у 2025'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 light:from-blue-100 light:via-indigo-100 light:to-purple-100 p-12 text-center backdrop-blur-xl shadow-2xl"
        >
          {/* iOS 26 mesh gradient */}
          <div className="absolute inset-0 opacity-30 dark:opacity-30 light:opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.25),transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`${locale === 'en' ? '/en' : ''}/contact`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-lg text-lg"
              >
                <span className="text-white">📧 {t.ctaButton}</span>
              </a>
              <a
                href="tel:+380505923772"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 dark:border-white/30 light:border-gray-400 text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition text-lg font-semibold backdrop-blur"
              >
                📞 +380 50 592 3772
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 dark:border-white/10 light:border-gray-300">
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                {t.ctaNote}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
