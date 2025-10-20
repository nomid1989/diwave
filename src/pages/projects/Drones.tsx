import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

type Props = { locale: 'uk' | 'en' };

export default function DronesProject({ locale }: Props) {
  const content = {
    uk: {
      title: 'Гніздо (Gnizdo) — платформа для FPV дронів та змагань | Diwave Solutions',
      description: 'Система управління FPV-треками, організації змагань, телеметрії польотів та рейтингової системи для пілотів дронів.',
      badge: 'FPV Racing Platform',
      heroTitle: 'Гніздо',
      heroSubtitle: 'Gnizdo',
      heroDesc: 'Платформа для FPV дронів, змагань та навчання пілотів',
      introTitle: 'Гніздо — це всеукраїнська асоціація та платформа для розвитку FPV дронів в Україні',
      introPara1: '<strong>Гніздо (Gnizdo)</strong> об\'єднує пілотів FPV дронів, організаторів змагань та власників треків. Ми створили цифрову екосистему для безпечних тренувань, професійних змагань та навчання нових пілотів.',
      introPara2: 'Наша платформа забезпечує <strong>повний цикл організації змагань</strong>: від реєстрації учасників та управління геозонами до автоматичного суддівства та побудови рейтингів. Система телеметрії в реальному часі дозволяє відстежувати кожен політ, аналізувати траєкторії та покращувати навички пілотування.',
      introConclusion: 'Diwave розробляє технологічну основу для найбільшої спільноти FPV пілотів в Україні.',
      gallery: [
        { title: 'FPV Racing', desc: 'Швидкість, адреналін, точність', alt: 'FPV дрон у польоті' },
        { title: 'Професійні треки', desc: 'Сертифіковані локації для змагань', alt: 'Трек для змагань з дронів' },
        { title: 'Навчання пілотів', desc: 'Від початківця до професіонала', alt: 'Пілот під час змагань' },
        { title: 'Спільнота', desc: 'Тисячі пілотів по всій Україні', alt: 'Спільнота Гніздо' }
      ],
      featuresTitle: 'Функціональність платформи',
      features: [
        { icon: '🗺️', title: 'Управління треками', desc: 'Реєстрація локацій, геозони безпеки, розклад тренувань та змагань. Карта всіх треків України.' },
        { icon: '🏆', title: 'Організація змагань', desc: 'Реєстрація учасників, сітка турніру, автоматичне суддівство, трансляції, результати в реальному часі.' },
        { icon: '📊', title: 'Телеметрія польотів', desc: 'Запис траєкторій, швидкості, висоти, нахилів. Аналіз помилок та покращення техніки пілотування.' },
        { icon: '⭐', title: 'Рейтингова система', desc: 'Єдиний національний рейтинг пілотів. Очки за перемоги, категорії майстерності, топ-100 України.' },
        { icon: '🎓', title: 'Школи пілотування', desc: 'Онлайн-курси, відеоуроки, симуляторні тренування. Від основ до просунутих трюків.' },
        { icon: '👥', title: 'Спільнота', desc: 'Форум, чат, новини, events. Об\'єднання пілотів, обмін досвідом, пошук команд для змагань.' }
      ],
      statsTitle: 'Гніздо в цифрах',
      stats: [
        { metric: '500+', label: 'Активних пілотів', desc: 'По всій Україні' },
        { metric: '50+', label: 'Треків', desc: 'Сертифіковані локації' },
        { metric: '100+', label: 'Змагань', desc: 'Щорічно' },
        { metric: '24/7', label: 'Підтримка', desc: 'Онлайн-спільнота' }
      ],
      techStackTitle: 'Технологічний стек',
      techBackend: 'Backend',
      techFrontend: 'Frontend',
      techIntegrations: 'Інтеграції',
      techBackendItems: ['Node.js / Laravel', 'PostgreSQL + PostGIS (геодані)', 'WebSocket (real-time)', 'Redis (кешування)'],
      techFrontendItems: ['React / Next.js', 'Mapbox (інтерактивні карти)', 'Chart.js (телеметрія)', 'Tailwind CSS'],
      techIntegrationsItems: ['GPS-трекери (телеметрія)', 'Відеостріми (YouTube/Twitch)', 'Telegram бот', 'Платіжні системи'],
      benefitsTitle: 'Переваги для спільноти',
      benefits: [
        { icon: '🛡️', title: 'Безпека польотів', desc: 'Геозони, попередження про перешкоди, координація з іншими пілотами' },
        { icon: '⚖️', title: 'Прозоре суддівство', desc: 'Автоматичний підрахунок часу, аналіз проходження гейтів, чесні результати' },
        { icon: '📈', title: 'Прогрес та аналітика', desc: 'Відстеження власного розвитку, порівняння з топовими пілотами' },
        { icon: '🌍', title: 'Національна мережа', desc: 'Доступ до всіх треків України, подорожі на змагання, нові знайомства' }
      ],
      ctaTitle: 'Приєднуйтесь до спільноти Гніздо',
      ctaDesc: 'Станьте частиною найбільшої FPV спільноти в Україні. Навчання, тренування, змагання — все в одній платформі.',
      ctaButton1: 'Зареєструвати трек',
      ctaButton2: 'Організувати змагання',
      ctaFooter: 'Безкоштовна реєстрація • Навчальні матеріали • Підтримка спільноти',
      navProjects: '← До каталогу Проєктів',
      navSolutions: 'Рішення для дронів',
      navContact: 'Зв\'язатись з нами'
    },
    en: {
      title: 'Gnizdo — FPV Drone Racing and Competition Platform | Diwave Solutions',
      description: 'FPV track management system, competition organization, flight telemetry, and pilot rating system for drone enthusiasts.',
      badge: 'FPV Racing Platform',
      heroTitle: 'Гніздо',
      heroSubtitle: 'Gnizdo',
      heroDesc: 'Platform for FPV Drones, Competitions, and Pilot Training',
      introTitle: 'Gnizdo is a nationwide association and platform for FPV drone development in Ukraine',
      introPara1: '<strong>Gnizdo</strong> unites FPV drone pilots, competition organizers, and track owners. We created a digital ecosystem for safe training, professional competitions, and training new pilots.',
      introPara2: 'Our platform provides the <strong>complete competition lifecycle</strong>: from participant registration and geofence management to automated judging and rating systems. Real-time telemetry allows tracking every flight, analyzing trajectories, and improving piloting skills.',
      introConclusion: 'Diwave develops the technological foundation for the largest FPV pilot community in Ukraine.',
      gallery: [
        { title: 'FPV Racing', desc: 'Speed, adrenaline, precision', alt: 'FPV drone in flight' },
        { title: 'Professional Tracks', desc: 'Certified competition locations', alt: 'Drone racing track' },
        { title: 'Pilot Training', desc: 'From beginner to professional', alt: 'Pilot during competition' },
        { title: 'Community', desc: 'Thousands of pilots across Ukraine', alt: 'Gnizdo community' }
      ],
      featuresTitle: 'Platform Features',
      features: [
        { icon: '🗺️', title: 'Track Management', desc: 'Location registration, safety geofences, training and competition schedules. Map of all Ukrainian tracks.' },
        { icon: '🏆', title: 'Competition Organization', desc: 'Participant registration, tournament brackets, automated judging, broadcasts, real-time results.' },
        { icon: '📊', title: 'Flight Telemetry', desc: 'Recording trajectories, speed, altitude, angles. Error analysis and piloting technique improvement.' },
        { icon: '⭐', title: 'Rating System', desc: 'Unified national pilot ranking. Points for wins, skill categories, Ukraine\'s top-100.' },
        { icon: '🎓', title: 'Flight Schools', desc: 'Online courses, video tutorials, simulator training. From basics to advanced tricks.' },
        { icon: '👥', title: 'Community', desc: 'Forum, chat, news, events. Pilot networking, experience sharing, team building for competitions.' }
      ],
      statsTitle: 'Gnizdo in Numbers',
      stats: [
        { metric: '500+', label: 'Active Pilots', desc: 'Across Ukraine' },
        { metric: '50+', label: 'Tracks', desc: 'Certified locations' },
        { metric: '100+', label: 'Competitions', desc: 'Annually' },
        { metric: '24/7', label: 'Support', desc: 'Online community' }
      ],
      techStackTitle: 'Technology Stack',
      techBackend: 'Backend',
      techFrontend: 'Frontend',
      techIntegrations: 'Integrations',
      techBackendItems: ['Node.js / Laravel', 'PostgreSQL + PostGIS (geodata)', 'WebSocket (real-time)', 'Redis (caching)'],
      techFrontendItems: ['React / Next.js', 'Mapbox (interactive maps)', 'Chart.js (telemetry)', 'Tailwind CSS'],
      techIntegrationsItems: ['GPS trackers (telemetry)', 'Video streams (YouTube/Twitch)', 'Telegram bot', 'Payment systems'],
      benefitsTitle: 'Community Benefits',
      benefits: [
        { icon: '🛡️', title: 'Flight Safety', desc: 'Geofences, obstacle warnings, coordination with other pilots' },
        { icon: '⚖️', title: 'Transparent Judging', desc: 'Automatic time tracking, gate passage analysis, fair results' },
        { icon: '📈', title: 'Progress & Analytics', desc: 'Track personal development, compare with top pilots' },
        { icon: '🌍', title: 'National Network', desc: 'Access to all Ukrainian tracks, travel to competitions, new connections' }
      ],
      ctaTitle: 'Join the Gnizdo Community',
      ctaDesc: 'Become part of Ukraine\'s largest FPV community. Training, practice, competitions — all in one platform.',
      ctaButton1: 'Register Track',
      ctaButton2: 'Organize Competition',
      ctaFooter: 'Free Registration • Training Materials • Community Support',
      navProjects: '← Back to Projects',
      navSolutions: 'Drone Solutions',
      navContact: 'Contact Us'
    }
  };

  const t = content[locale];
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/projects/drones`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Гніздо (Gnizdo) — FPV Drone Platform',
      description: locale === 'uk'
        ? 'Платформа для управління FPV-треками, організації змагань та навчання пілотів дронів'
        : 'Platform for FPV track management, competition organization, and drone pilot training',
      applicationCategory: 'SportsApplication',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={t.title} description={t.description} url={url} image={`${baseUrl}/images/projects/drones/cover.jpg`} locale={locale} jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(34,211,238,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              <span className="text-lg">🚁</span>
              <span className="text-sm text-purple-300 font-medium">{t.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              {t.heroTitle}<br /><span className="text-purple-400">{t.heroSubtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {t.heroDesc}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur">
              <SmartImage
                srcFolder="/images/projects/drones"
                alt={locale === 'uk' ? 'Гніздо — платформа для FPV дронів' : 'Gnizdo — FPV drone platform'}
                className="w-full h-[500px]"
                imgClassName="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Main Description */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl text-white font-semibold">
                {t.introTitle}
              </p>
              <p dangerouslySetInnerHTML={{ __html: t.introPara1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.introPara2 }} />
              <p className="text-white font-semibold">
                {t.introConclusion}
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {t.gallery.map((item, i) => {
              const images = [
                '3361D8C0-36B5-44B3-90F7-0B2A7D558300_1_105_c.jpeg',
                '741ADB82-E672-4F57-95E6-790CD07D8C92_1_105_c.jpeg',
                'hero.jpeg',
                '3696655F-B429-4D7B-BC47-A9E554ABDC70_4_5005_c.jpeg'
              ];
              return (
                <div key={i} className="relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition" />
                  <img
                    src={`/images/projects/drones/${images[i]}`}
                    alt={item.alt}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.featuresTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-purple-500/30 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.statsTitle}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {t.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">{stat.metric}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t.techStackTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  {t.techBackend}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.techBackendItems.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  {t.techFrontend}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.techFrontendItems.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  {t.techIntegrations}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {t.techIntegrationsItems.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Community */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.benefitsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-6 backdrop-blur">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-white font-semibold text-lg mb-2">{benefit.title}</div>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-12 text-center backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t.ctaDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`${locale === 'en' ? '/en' : ''}/contact`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-purple-500 text-white font-semibold hover:bg-purple-600 transition shadow-lg shadow-purple-500/25 text-lg"
              >
                <span>🚁</span>
                {t.ctaButton1}
              </a>
              <a
                href={`${locale === 'en' ? '/en' : ''}/contact`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold"
              >
                <span>🏆</span>
                {t.ctaButton2}
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                {t.ctaFooter}
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`${locale === 'en' ? '/en' : ''}/projects`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              {t.navProjects}
            </a>
            <a href={`${locale === 'en' ? '/en' : ''}/solutions/drones`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              {t.navSolutions}
            </a>
            <a href={`${locale === 'en' ? '/en' : ''}/contact`} className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-white hover:bg-purple-500/30">
              📧 {t.navContact}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
