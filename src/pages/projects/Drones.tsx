import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function DronesProject() {
  const title = 'Гніздо (Gnizdo) — платформа для FPV дронів та змагань | Diwave Solutions';
  const description =
    'Система управління FPV-треками, організації змагань, телеметрії польотів та рейтингової системи для пілотів дронів.';
  const url = `${baseUrl}/projects/drones`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Гніздо (Gnizdo) — FPV Drone Platform',
      description:
        'Платформа для управління FPV-треками, організації змагань та навчання пілотів дронів',
      applicationCategory: 'SportsApplication',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/drones/cover.jpg`} locale="uk" jsonLd={jsonLd} />
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
              <span className="text-sm text-purple-300 font-medium">FPV Racing Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Гніздо<br /><span className="text-purple-400">Gnizdo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Платформа для FPV дронів, змагань та навчання пілотів
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur">
              <SmartImage
                srcFolder="/images/projects/drones"
                alt="Гніздо — платформа для FPV дронів"
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
                Гніздо — це всеукраїнська асоціація та платформа для розвитку FPV дронів в Україні
              </p>
              <p>
                <strong className="text-white">Гніздо (Gnizdo)</strong> об'єднує пілотів FPV дронів, організаторів змагань та власників треків.
                Ми створили цифрову екосистему для безпечних тренувань, професійних змагань та навчання нових пілотів.
              </p>
              <p>
                Наша платформа забезпечує <strong className="text-purple-400">повний цикл організації змагань</strong>: від реєстрації учасників
                та управління геозонами до автоматичного суддівства та побудови рейтингів. Система телеметрії в реальному часі дозволяє
                відстежувати кожен політ, аналізувати траєкторії та покращувати навички пілотування.
              </p>
              <p className="text-white font-semibold">
                Diwave розробляє технологічну основу для найбільшої спільноти FPV пілотів в Україні.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition" />
              <img
                src="/images/projects/drones/3361D8C0-36B5-44B3-90F7-0B2A7D558300_1_105_c.jpeg"
                alt="FPV дрон у польоті"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold">FPV Racing</p>
                <p className="text-gray-300 text-sm">Швидкість, адреналін, точність</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition" />
              <img
                src="/images/projects/drones/741ADB82-E672-4F57-95E6-790CD07D8C92_1_105_c.jpeg"
                alt="Трек для змагань з дронів"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold">Професійні треки</p>
                <p className="text-gray-300 text-sm">Сертифіковані локації для змагань</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition" />
              <img
                src="/images/projects/drones/C23FC16A-3AB2-466E-A477-E7407FC5ACFB_1_105_c.jpeg"
                alt="Пілот під час змагань"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold">Навчання пілотів</p>
                <p className="text-gray-300 text-sm">Від початківця до професіонала</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition" />
              <img
                src="/images/projects/drones/3696655F-B429-4D7B-BC47-A9E554ABDC70_4_5005_c.jpeg"
                alt="Спільнота Гніздо"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white font-semibold">Спільнота</p>
                <p className="text-gray-300 text-sm">Тисячі пілотів по всій Україні</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Функціональність платформи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🗺️',
                title: 'Управління треками',
                desc: 'Реєстрація локацій, геозони безпеки, розклад тренувань та змагань. Карта всіх треків України.'
              },
              {
                icon: '🏆',
                title: 'Організація змагань',
                desc: 'Реєстрація учасників, сітка турніру, автоматичне суддівство, трансляції, результати в реальному часі.'
              },
              {
                icon: '📊',
                title: 'Телеметрія польотів',
                desc: 'Запис траєкторій, швидкості, висоти, нахилів. Аналіз помилок та покращення техніки пілотування.'
              },
              {
                icon: '⭐',
                title: 'Рейтингова система',
                desc: 'Єдиний національний рейтинг пілотів. Очки за перемоги, категорії майстерності, топ-100 України.'
              },
              {
                icon: '🎓',
                title: 'Школи пілотування',
                desc: 'Онлайн-курси, відеоуроки, симуляторні тренування. Від основ до просунутих трюків.'
              },
              {
                icon: '👥',
                title: 'Спільнота',
                desc: 'Форум, чат, новини, events. Об\'єднання пілотів, обмін досвідом, пошук команд для змагань.'
              }
            ].map((feature, i) => (
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Гніздо в цифрах</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: '500+', label: 'Активних пілотів', desc: 'По всій Україні' },
                { metric: '50+', label: 'Треків', desc: 'Сертифіковані локації' },
                { metric: '100+', label: 'Змагань', desc: 'Щорічно' },
                { metric: '24/7', label: 'Підтримка', desc: 'Онлайн-спільнота' }
              ].map((stat, i) => (
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Технологічний стек</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Node.js / Laravel</li>
                  <li>• PostgreSQL + PostGIS (геодані)</li>
                  <li>• WebSocket (real-time)</li>
                  <li>• Redis (кешування)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• React / Next.js</li>
                  <li>• Mapbox (інтерактивні карти)</li>
                  <li>• Chart.js (телеметрія)</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Інтеграції
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• GPS-трекери (телеметрія)</li>
                  <li>• Відеостріми (YouTube/Twitch)</li>
                  <li>• Telegram бот</li>
                  <li>• Платіжні системи</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Community */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Переваги для спільноти</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '🛡️',
                title: 'Безпека польотів',
                desc: 'Геозони, попередження про перешкоди, координація з іншими пілотами'
              },
              {
                icon: '⚖️',
                title: 'Прозоре суддівство',
                desc: 'Автоматичний підрахунок часу, аналіз проходження гейтів, чесні результати'
              },
              {
                icon: '📈',
                title: 'Прогрес та аналітика',
                desc: 'Відстеження власного розвитку, порівняння з топовими пілотами'
              },
              {
                icon: '🌍',
                title: 'Національна мережа',
                desc: 'Доступ до всіх треків України, подорожі на змагання, нові знайомства'
              }
            ].map((benefit, i) => (
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
              Приєднуйтесь до спільноти Гніздо
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Станьте частиною найбільшої FPV спільноти в Україні. Навчання, тренування, змагання — все в одній платформі.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-purple-500 text-white font-semibold hover:bg-purple-600 transition shadow-lg shadow-purple-500/25 text-lg"
              >
                <span>🚁</span>
                Зареєструвати трек
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold"
              >
                <span>🏆</span>
                Організувати змагання
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Безкоштовна реєстрація • Навчальні матеріали • Підтримка спільноти
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              ← До каталогу Проєктів
            </a>
            <a href="/solutions/drones" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              Рішення для дронів
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-white hover:bg-purple-500/30">
              📧 Зв'язатись з нами
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
