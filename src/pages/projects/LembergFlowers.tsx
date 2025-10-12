import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function LembergFlowersProject() {
  const title = 'Lemberg Flowers — Високошвидкісний сайт | Diwave Solutions';
  const description =
    'Презентація виробництва горщикових квітів. Google Speedtest оптимізація, Vue.js, Telegram інтеграція для швидкої лідогенерації.';
  const url = `${baseUrl}/projects/lemberg-flowers`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс: Lemberg Flowers',
      description:
        'Високопродуктивний презентаційний веб-сайт для виробництва квітів з фокусом на швидкість та Core Web Vitals',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/lembergflowers.png`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(34,211,238,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
                <span className="text-lg">🌺</span>
                <span className="text-sm text-purple-300 font-medium">Кейс: Lemberg Flowers</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Презентація виробництва з виняткovou швидкістю
              </h1>
              <p className="mt-4 text-gray-300 text-lg">
                <strong className="text-white">Lemberg Flowers</strong> — виробник горщикових квітів з потребою
                в швидкому, високопродуктивному веб-сайті для ефективної презентації та лідогенерації.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">Vue.js</div>
                  <div className="text-xs text-gray-400 mt-1">Технологія</div>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">⚡</div>
                  <div className="text-xs text-gray-400 mt-1">Швидкість</div>
                </div>
                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">100</div>
                  <div className="text-xs text-gray-400 mt-1">Speed Score</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#details" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-purple-500/90 text-white font-medium hover:bg-purple-500 transition">Детальніше про кейс</a>
                <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">
                  lembergflowers.com.ua →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-400/20 to-cyan-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur">
                <SmartImage
                  sources={['/images/projects/lembergflowers.png']}
                  alt="Lemberg Flowers сайт"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Details */}
        <section id="details" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🌺</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Кейс Lemberg Flowers: Швидкість як Конкурентна Перевага
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Проблема</h3>
                <p className="text-gray-300">
                  Створення якісної онлайн-презентації виробництва горщикових квітів з вимогою виняткової швидкості завантаження.
                  Клієнт потребував сайт, який би миттєво відображав контент та ефективно конвертував відвідувачів у лідів.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6">Рішення та Технології</h3>
                <p className="text-gray-300">
                  Розроблено високопродуктивний презентаційний веб-сайт на базі <strong className="text-white">Vue.js</strong>,
                  орієнтований на чистий, статичний контент.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span><strong className="text-white">Google Speedtest Optimization</strong> та Core Web Vitals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span><strong className="text-white">Статична генерація</strong> для максимальної швидкості</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span><strong className="text-white">Telegram/Email інтеграція</strong> для миттєвої лідогенерації</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Оптимізація зображень та lazy loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Мінімізація JavaScript та CSS</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Результат</h3>
                <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-6 text-center">
                  <div className="text-5xl font-bold text-purple-400 mb-2">⚡</div>
                  <div className="text-white font-semibold mb-2">Виняткова швидкість завантаження</div>
                  <div className="text-gray-300 text-sm">Google PageSpeed Score: 95+</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400">&lt; 1s</div>
                    <div className="text-sm text-gray-300 mt-1">Time to Interactive</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-300 mt-1">Мобільна адаптація</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-white font-semibold mb-2">💡 Ключові досягнення</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>✓ Миттєва доставка запитів через Telegram</li>
                    <li>✓ Ефективна презентація продукції</li>
                    <li>✓ Висока конверсія відвідувачів у ліди</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 text-sm mb-6">
                <strong className="text-white">Професійна оцінка:</strong> Lemberg Flowers отримав інструмент,
                який не тільки швидко працює, але й ефективно конвертує відвідувачів.
                Інтеграція миттєвих повідомлень через Telegram забезпечує швидку реакцію на запити клієнтів.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Технологічний стек</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Frontend & Performance
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Vue.js 3</strong> — реактивний UI framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Vite</strong> — швидка збірка та HMR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Static Site Generation</strong> — для максимальної швидкості</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span><strong className="text-white">Image Optimization</strong> — WebP, lazy loading</span>
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
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">Telegram Bot API</strong> — миттєві сповіщення</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">Email SMTP</strong> — відправка форм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span><strong className="text-white">CDN</strong> — глобальна доставка контенту</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-12 text-center backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Потрібен швидкий та ефективний сайт?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ми створимо високопродуктивний веб-сайт, що забезпечить відмінний користувацький досвід та високу конверсію
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-purple-500 text-white font-semibold hover:bg-purple-600 transition shadow-lg shadow-purple-500/25 text-lg"
              >
                <span>🚀</span>
                Замовити розробку
              </a>
              <a
                href="/solutions/web-development"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 transition text-lg font-semibold"
              >
                <span>📊</span>
                Дізнатись більше
              </a>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              ← До каталогу Проєктів
            </a>
            <a href="/projects/ecommerce" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              E-commerce рішення
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
