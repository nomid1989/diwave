import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function CarWashProject() {
  const title = 'Diwave Proactive Maintenance Platform — IoT для автомийок | Diwave Solutions';
  const description =
    'Перетворюємо непередбачувані поломки на прогнозоване обслуговування. IoT/SCADA платформа з 24/7 телеметрією, моніторингом обладнання та проактивним запобіганням простоям.';
  const url = `${baseUrl}/projects/car-wash`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Diwave Proactive Maintenance Platform',
      description:
        'IoT/SCADA платформа для моніторингу та технічного обслуговування автомийок самообслуговування',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/car-wash/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-lg">📡</span>
              <span className="text-sm text-cyan-300 font-medium">IoT/SCADA Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Diwave Proactive<br />Maintenance Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Технічний ROI вашого обладнання
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur">
              <SmartImage
                srcFolder="/images/projects/car-wash"
                alt="Diwave Proactive Maintenance Platform"
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
                Ми перетворюємо непередбачувані поломки на прогнозоване обслуговування.
              </p>
              <p>
                Наша <strong className="text-white">IoT/SCADA платформа</strong> забезпечує <strong className="text-cyan-400">24/7 телеметрію</strong> кожного елемента автомийки.
                Система автоматично відстежує напрацьовані години насосів для своєчасної заміни мастила та фіксує критичні показники,
                як-от якість води чи рівень хімічних засобів.
              </p>
              <p>
                Всі дані доступні власнику та обслуговуючому персоналу <strong className="text-white">в режимі реального часу на мобільному телефоні</strong>,
                дозволяючи оперативно вводити історію поломок та обслуговування. Це не просто звітність — це проактивна система запобігання простоям,
                яка гарантує максимальний термін служби обладнання та стабільний прибуток.
              </p>
              <p className="text-white font-semibold">
                Diwave дає вам повний контроль, щоб ваш бізнес працював бездоганно.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Ключові функції платформи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Моніторинг в реальному часі',
                desc: 'Відстежування стану всього обладнання автомийки 24/7. Температура, тиск, вібрація, споживання електроенергії.'
              },
              {
                icon: '⚙️',
                title: 'Облік напрацювання',
                desc: 'Години роботи насосів, компресорів, двигунів. Автоматичні сповіщення про потребу заміни масла та витратних матеріалів.'
              },
              {
                icon: '🚨',
                title: 'Раннє виявлення несправностей',
                desc: 'Погана якість води, зниження тиску, закінчення хімії — система миттєво реагує та попереджає команду.'
              },
              {
                icon: '📱',
                title: 'Мобільні сповіщення',
                desc: 'Push-нотифікації, Telegram, SMS. Власник та техперсонал завжди в курсі подій, незалежно від місцезнаходження.'
              },
              {
                icon: '📝',
                title: 'Історія обслуговування',
                desc: 'Повна база даних поломок, ремонтів, замін деталей. Кожен інцидент документується для подальшої аналітики.'
              },
              {
                icon: '📈',
                title: 'Аналітика та прогнози',
                desc: 'Графіки використання постів, статистика по програмах, прогнозування технічного обслуговування на основі ML.'
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-500/30 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Технологічний стек</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Backend & IoT
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">Laravel / Node.js</strong> — API та бізнес-логіка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">MQTT</strong> — real-time обмін даними з контролерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">Modbus TCP/IP</strong> — комунікація з промисловими PLC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">PostgreSQL / TimescaleDB</strong> — зберігання телеметрії</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">Redis</strong> — кешування та черги повідомлень</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  Frontend & Mobile
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">React / Vue</strong> — адміністративна панель</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Tailwind CSS</strong> — адаптивний UI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Recharts / Chart.js</strong> — візуалізація даних</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">PWA</strong> — мобільний застосунок без установки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Telegram Bot API</strong> — інстант-нотифікації</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  Апаратна платформа
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▸</span>
                    <span><strong className="text-white">Raspberry Pi</strong> — edge computing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▸</span>
                    <span><strong className="text-white">Schneider PLC</strong> — промислові контролери</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▸</span>
                    <span><strong className="text-white">SamWash Controller</strong> — власні контролери автомийок</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  Інтеграції
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span><strong className="text-white">REST API</strong> — зовнішні системи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span><strong className="text-white">Email SMTP</strong> — звітність</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span><strong className="text-white">Diwave Cloud</strong> — єдина екосистема</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Переваги для бізнесу</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                metric: '30–50%',
                label: 'Зменшення простоїв',
                desc: 'Проактивне обслуговування запобігає аварійним зупинкам та втратам виручки'
              },
              {
                metric: '100%',
                label: 'Прогнозування ТО',
                desc: 'Плануйте заміну деталей заздалегідь на основі реальних даних напрацювання'
              },
              {
                metric: '↑',
                label: 'Якість сервісу',
                desc: 'Завжди справне обладнання = щасливі клієнти та позитивні відгуки'
              },
              {
                metric: '⏱',
                label: 'Економія часу',
                desc: 'Персонал отримує алерти миттєво, без потреби фізичного контролю локацій'
              }
            ].map((benefit, i) => (
              <div key={i} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 backdrop-blur">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{benefit.metric}</div>
                <div className="text-white font-semibold text-lg mb-2">{benefit.label}</div>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration with SamWash Ecosystem */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔗</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Повна сумісність з екосистемою Diwave
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-2">SamWash QR</h3>
                <p className="text-gray-300 text-sm">Безготівкові платежі та лояльність інтегровані з моніторингом обладнання</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-2">SmartVac</h3>
                <p className="text-gray-300 text-sm">Вакуумні пилососи з телеметрією та віддаленим керуванням</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold mb-2">Diwave Cloud</h3>
                <p className="text-gray-300 text-sm">Централізована платформа для управління всіма локаціями та обладнанням</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готові підключити вашу автомийку?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Отримайте безкоштовну консультацію та дізнайтесь, як Diwave Proactive Maintenance Platform може збільшити ROI вашого обладнання
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25 text-lg"
              >
                <span>🚀</span>
                Підключити автомийку
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold"
              >
                <span>📊</span>
                Отримати демо
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Підтримка 24/7 • Безкоштовна інтеграція • Навчання персоналу
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
            <a href="/solutions/car-washes" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              Рішення для автомийок
            </a>
            <a href="/solutions/iot-scada" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              IoT & SCADA
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
