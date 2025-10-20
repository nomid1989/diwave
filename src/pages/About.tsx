import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

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
      founderBio: 'Tech Entrepreneur із 14+ роками досвіду трансформації традиційного бізнесу. Засновник Samwash — мережі автомийок самообслуговування з EBITDA 70%, що працюють повністю автоматично. Створив Plantpol — один з найбільших B2B e-commerce магазинів розсади в Україні з повною автоматизацією без кол-центру. Організатор і техлід Української Асоціації Пілотів Дронів (UAPD/Gnizdo). Будує end-to-end технологічні екосистеми: від апаратної частини та ПЗ до фіскалізації, платежів, запуску та масштабування. Експерт у IoT/SCADA, e-commerce, fintech та AI-автоматизації.',
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
          name: 'Гніздо (UAPD)',
          desc: 'Українська Асоціація Пілотів Дронів: навчання, виробництво FPV, телеметрія, організація змагань',
          link: 'https://gnizdo.org.ua'
        },
        {
          name: 'IoT Solutions',
          desc: 'Інтеграція обладнання: вендингові автомати з сенсорними екранами IP65, автомийки з телеметрією, зарядні станції EV'
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
      founderBio: 'Tech Entrepreneur with 14+ years of experience transforming traditional businesses. Founder of Samwash — self-service car wash network with 70% EBITDA operating fully automatically. Created Plantpol — one of Ukraine\'s largest B2B e-commerce plant nursery stores with full automation without call center. Organizer and tech lead of Ukrainian Association of Drone Pilots (UAPD/Gnizdo). Builds end-to-end tech ecosystems: from hardware and software to fiscalization, payments, launch and scaling. Expert in IoT/SCADA, e-commerce, fintech and AI automation.',
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
          name: 'Gnizdo (UAPD)',
          desc: 'Ukrainian Association of Drone Pilots: training, FPV production, telemetry, competition organization',
          link: 'https://gnizdo.org.ua'
        },
        {
          name: 'IoT Solutions',
          desc: 'Hardware integration: IP65 touchscreen vending machines, car washes with telemetry, EV charging stations'
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

      {/* Hero Section - Gemini AI + iOS 26 + Mercedes Style */}
      <section className="relative overflow-hidden min-h-[60vh] bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419] dark:from-[#0a0f1c] dark:via-[#1a1f3a] dark:to-[#0f1419] light:from-white light:via-gray-50 light:to-blue-50/30">
        {/* Gemini AI-style animated gradient mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/15 light:bg-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}} />
        </div>
        {/* iOS 26 grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)', backgroundSize: '48px 48px'}} aria-hidden />

        <div className="mx-auto max-w-7xl px-6 py-20 relative">
          <div className="text-center mb-16">
            {/* Mercedes-Benz inspired triple diamond */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <svg className="w-8 h-8 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 12l4 10 4-10z" opacity="0.6" />
              </svg>
              <svg className="w-10 h-10 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 12l4 10 4-10z" />
              </svg>
              <svg className="w-8 h-8 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 12l4 10 4-10z" opacity="0.6" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 light:from-blue-600 light:via-indigo-600 light:to-purple-600 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Hero Images Gallery - iOS 26 Ultra Glass */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Card 1 - Horizontal */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/20 to-black/10 dark:from-black/20 dark:to-black/10 light:from-gray-50 light:to-white backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/20 light:hover:shadow-blue-500/30 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 light:hover:border-blue-400">
              <div className="relative aspect-[4/3]">
                <SmartImage
                  sources={["/images/gnizdo-team/team-meeting.webp", "/images/gnizdo-team/team-meeting.jpeg"]}
                  alt="Team Planning Meeting"
                  className="w-full h-full"
                  sizes="(min-width:768px) 33vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70 dark:via-black/20 light:from-black/60 light:via-black/15 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
            </div>

              {/* Card 3 - Vertical */}
              <div className="group relative rounded-2xl overflow-hidden border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/20 to-black/10 dark:from-black/20 dark:to-black/10 light:from-gray-50 light:to-white backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 light:hover:shadow-emerald-500/30 hover:border-emerald-400/60 dark:hover:border-emerald-400/60 light:hover:border-emerald-400">
                  <div className="relative aspect-[3/4]">
                      <SmartImage
                          sources={["/images/about/fpv-working-testing.webp", "/images/about/fpv-working-testing.jpeg",  "/images/about/fpv-working-testing.avif"]}
                          alt="FPV Testing and Development"
                          className="w-full h-full"
                          sizes="(min-width:768px) 33vw, 100vw"
                          imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          priority={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70 dark:via-black/20 light:from-black/60 light:via-black/15 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
              </div>


              {/* Card 2 - Horizontal */}
            <div className="group relative rounded-2xl overflow-hidden border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/20 to-black/10 dark:from-black/20 dark:to-black/10 light:from-gray-50 light:to-white backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 light:hover:shadow-purple-500/30 hover:border-purple-400/60 dark:hover:border-purple-400/60 light:hover:border-purple-400">
              <div className="relative aspect-[4/3]">
                <SmartImage
                  sources={["/images/gnizdo-team/fpv-crafting.webp", "/images/gnizdo-team/fpv-crafting.jpeg"]}
                  alt="FPV Drone Crafting"
                  className="w-full h-full"
                  sizes="(min-width:768px) 33vw, 100vw"
                  imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70 dark:via-black/20 light:from-black/60 light:via-black/15 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
            </div>

           </div>
        </div>
      </section>

      {/* Mission & Values Section - Ultra Glass */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group relative rounded-3xl border-2 border-white/10 dark:border-white/10 light:border-gray-200 overflow-hidden backdrop-blur-3xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-cyan-400/50 dark:hover:border-cyan-400/50 light:hover:border-blue-400">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] dark:from-white/[0.05] dark:via-white/[0.02] dark:to-white/[0.05] light:from-white/95 light:via-white/90 light:to-white/95 backdrop-saturate-[200%]" />
            {/* Gemini mesh */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/40 to-transparent blur-2xl" />
            </div>
            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L8 12l4 10 4-10z" />
                </svg>
                <h2 className="text-3xl font-bold  dark:text-white light:text-gray-900">
                  {t.missionTitle}
                </h2>
              </div>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-lg">
                {t.missionText}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group relative rounded-3xl border-2 border-white/10 dark:border-white/10 light:border-gray-200 overflow-hidden backdrop-blur-3xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-400">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] dark:from-white/[0.05] dark:via-white/[0.02] dark:to-white/[0.05] light:from-white/95 light:via-white/90 light:to-white/95 backdrop-saturate-[200%]" />
            {/* Gemini mesh */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/40 to-transparent blur-2xl" />
            </div>
            <div className="relative p-10">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-purple-400 dark:text-purple-400 light:text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L8 12l4 10 4-10z" />
                </svg>
                <h2 className="text-3xl font-bold  dark:text-white light:text-gray-900">
                  {t.valuesTitle}
                </h2>
              </div>
              <div className="space-y-4">
                {t.values.map((value, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 dark:bg-white/5 light:bg-gray-50 border-l-4 border-purple-500 dark:border-purple-500 light:border-purple-600">
                    <h3 className=" dark:text-white light:text-gray-900 font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className=" dark:text-gray-300 light:text-gray-700 text-sm leading-relaxed">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Featured */}
      <section className="mx-auto max-w-7xl px-6 py-20 bg-gradient-to-br from-cyan-900/10 via-blue-900/5 to-purple-900/10 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-purple-900/10 light:from-blue-50 light:via-indigo-50 light:to-purple-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  dark:text-white light:text-gray-900 mb-3">
            {t.founderTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Founder Photo */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400 bg-gradient-to-br from-cyan-900/10 via-blue-900/5 to-purple-900/10 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-purple-900/10 light:from-blue-50 light:via-indigo-50 light:to-purple-50 p-6 backdrop-blur-xl shadow-2xl h-fit">
              <div className="rounded-xl mb-4 w-full">
                <SmartImage
                  sources={[
                    "/images/gnizdo-team/dmytro-kravets.jpg",
                    "/images/team/dmytro.jpg"
                  ]}
                  alt="Dmytro Kravets — Founder & CTO, Diwave"
                  className="w-full"
                  sizes="(min-width:768px) 40vw, 100vw"
                  imgClassName="w-full h-auto rounded-xl"
                  priority={true}
                />
              </div>
              <h3 className="text-2xl font-bold  dark:text-white light:text-gray-900 mb-1">
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
                <a href="https://clutch.co/profile/diwave" target="_blank" rel="noopener noreferrer" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-blue-600 transition">
                  ⭐ Clutch Profile
                </a>
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div className="md:col-span-3 space-y-6">
            <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-xl shadow-xl">
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-6">
                {t.founderBio}
              </p>

              <h4 className="text-xl font-bold  dark:text-white light:text-gray-900 mb-4">
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
              <h4 className="text-xl font-bold  dark:text-white light:text-gray-900 mb-4">
                {t.projectsTitle}
              </h4>
              <div className="space-y-4">
                {t.projects.map((project, i) => (
                  <div key={i} className="border-l-4 border-emerald-500 dark:border-emerald-500 light:border-green-600 pl-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h5 className=" dark:text-white light:text-gray-900 font-semibold">
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  dark:text-white light:text-gray-900 mb-3">
            {t.teamTitle}
          </h2>
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto">
            {t.teamSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.filter(m => !m.featured).map((member) => (
            <div
              key={member.fileBase}
              className="group text-center"
            >
              {/* Circular photo with iOS 26 glassmorphism */}
              <div className="relative mx-auto w-40 h-40 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-white/20 dark:border-white/20 light:border-gray-300 bg-white/5 dark:bg-white/5 light:bg-white/60 backdrop-blur-xl shadow-xl group-hover:border-cyan-400/60 dark:group-hover:border-cyan-400/60 light:group-hover:border-blue-400 group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <SmartImage
                    sources={[`/images/team/${member.fileBase}.jpg`]}
                    alt={`${member.name} — ${member.role}`}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className=" dark:text-white light:text-gray-900 font-semibold mb-1">
                {member.name}
              </div>
              <div className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 text-sm">
                {member.role}
              </div>
            </div>
          ))}
        </div>

        {/* Team Photos Grid - Блоки підлаштовуються під фото */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
          {/* Photo 1 - Horizontal */}
          <div className="group rounded-2xl border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/10 to-black/5 dark:from-black/10 dark:to-black/5 light:from-white/80 light:to-white backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/20 light:hover:shadow-cyan-500/30 hover:scale-[1.02] hover:border-cyan-400/50 dark:hover:border-cyan-400/50 light:hover:border-cyan-400 transition-all duration-300 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <SmartImage
                sources={[
                  "/images/about/learning2025-1.avif",
                  "/images/about/learning2025-1.webp",
                  "/images/about/learning2025-1.jpeg"
                ]}
                alt="Diwave Team - Learning and Development 2025"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-gradient-to-b from-white/5 to-transparent dark:from-white/5 dark:to-transparent light:from-white/60 light:to-white/40">
              <p className="text-gray-200 dark:text-gray-200 light:text-gray-800 text-sm font-medium leading-relaxed">
                {locale === 'en'
                  ? 'Continuous learning and development — our team in 2025'
                  : 'Постійне навчання та розвиток — наша команда у 2025'}
              </p>
            </div>
          </div>
          {/* Photo 2 - Vertical */}
          <div className="group rounded-2xl border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/10 to-black/5 dark:from-black/10 dark:to-black/5 light:from-white/80 light:to-white backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20 light:hover:shadow-purple-500/30 hover:scale-[1.02] hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-400 transition-all duration-300 overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <SmartImage
                sources={[
                  "/images/about/learning2025-2.avif",
                  "/images/about/learning2025-2.webp",
                  "/images/about/learning2025-2.jpeg"
                ]}
                alt="Diwave Team - Learning Session 2025"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-gradient-to-b from-white/5 to-transparent dark:from-white/5 dark:to-transparent light:from-white/60 light:to-white/40">
              <p className="text-gray-200 dark:text-gray-200 light:text-gray-800 text-sm font-medium leading-relaxed">
                {locale === 'en'
                  ? 'Team learning sessions and skill development'
                  : 'Командні навчальні сесії та розвиток навичок'}
              </p>
            </div>
          </div>
          {/* Photo 3 - Horizontal */}
          <div className="group rounded-2xl border-2 border-white/10 dark:border-white/10 light:border-gray-200 bg-gradient-to-br from-black/10 to-black/5 dark:from-black/10 dark:to-black/5 light:from-white/80 light:to-white backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/20 light:hover:shadow-emerald-500/30 hover:scale-[1.02] hover:border-emerald-400/50 dark:hover:border-emerald-400/50 light:hover:border-emerald-400 transition-all duration-300 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <SmartImage
                sources={[
                  "/images/about/learning2025.avif",
                  "/images/about/learning2025.webp",
                  "/images/about/learning2025.jpeg"
                ]}
                alt="Diwave Learning 2025 - Professional Growth"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-5 bg-gradient-to-b from-white/5 to-transparent dark:from-white/5 dark:to-transparent light:from-white/60 light:to-white/40">
              <p className="text-gray-200 dark:text-gray-200 light:text-gray-800 text-sm font-medium leading-relaxed">
                {locale === 'en'
                  ? 'Professional growth and knowledge sharing'
                  : 'Професійне зростання та обмін знаннями'}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <span className="text-gray-400 text-sm">{locale === 'en' ? 'Social:' : 'Соцмережі:'}</span>
          <a href="https://www.facebook.com/DiWave.company" className="text-blue-400 hover:text-blue-300 text-sm" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/diwave.company/" className="text-pink-400 hover:text-pink-300 text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@DigitalWaveAI" className="text-red-400 hover:text-red-300 text-sm" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </section>

      {/* CTA Section with Team Photo */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Team Contact Photo */}
          <div className="rounded-2xl border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400 bg-gradient-to-br from-cyan-900/10 via-blue-900/5 to-purple-900/10 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-purple-900/10 light:from-blue-50 light:via-indigo-50 light:to-purple-50 overflow-hidden backdrop-blur-xl shadow-2xl">
            <SmartImage
              sources={[
                "/images/about/DmytroKravetsFamaly.webp",
                "/images/about/DmytroKravetsFamaly.jpeg",
                "/images/about/DmytroKravetsFamaly.webp"
              ]}
              alt="Diwave Team - Ready to help with your project"
              className="w-full h-full"
              sizes="(min-width:768px) 50vw, 100vw"
              imgClassName="w-full h-full object-cover"
            />
          </div>

          {/* CTA Content */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 dark:border-cyan-500/30 light:border-blue-400 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 light:from-blue-100 light:via-indigo-100 light:to-purple-100 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            {/* iOS 26 mesh gradient */}
            <div className="absolute inset-0 opacity-30 dark:opacity-30 light:opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.2),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.25),transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold  dark:text-white light:text-gray-900 mb-4">
                {t.ctaTitle}
              </h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-8">
                {t.ctaText}
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`${locale === 'en' ? '/en' : ''}/contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-semibold hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 transition shadow-lg text-lg"
                >
                  <span className="text-white">📧 {t.ctaButton}</span>
                </a>
                <a
                  href="tel:+380505923772"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 dark:border-white/30 light:border-gray-400 text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 transition text-lg font-semibold backdrop-blur"
                >
                  📞 +380 50 592 3772
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 light:border-gray-300">
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                  {t.ctaNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
