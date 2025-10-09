import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function EcommerceProject() {
  const title = 'E‑commerce інтеграції — кейс | Diwave Solutions';
  const description =
    'Каталог, кошик, чек‑аут, ERP, аналітика. Платформа для B2B/B2C з фокусом на швидкодію і конверсії.';
  const url = `${baseUrl}/projects/ecommerce`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс: E‑commerce інтеграції',
      description:
        'Впровадження e‑commerce з глибокими інтеграціями, аналітикою та оптимізацією конверсій.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO title={title} description={description} url={url} image={`${baseUrl}/images/projects/ecommerce/cover.jpg`} locale="uk" jsonLd={jsonLd} />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-lg">🌱</span>
                <span className="text-sm text-emerald-300 font-medium">Кейс: Plantpol</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                B2B-портал для гіганта агротехнологій
              </h1>
              <p className="mt-4 text-gray-300 text-lg">
                <strong className="text-white">Plantpol</strong> — один з найбільших українських дистриб'юторів насіння, ЗЗР та агрохімії.
                Ми створили B2B-портал з інтеграцією 1С, що автоматизував роботу з <strong className="text-emerald-400">5000+ SKU</strong> та скоротив операційні витрати на <strong className="text-emerald-400">75%</strong>.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">5000+</div>
                  <div className="text-xs text-gray-400 mt-1">SKU в каталозі</div>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">-75%</div>
                  <div className="text-xs text-gray-400 mt-1">витрат на штат</div>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">автоматизація</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#plantpol-details" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500/90 text-white font-medium hover:bg-emerald-500 transition">Детальніше про кейс</a>
                <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">
                  plantpol.com.ua →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 bg-white/5 backdrop-blur">
                <img src="/images/projects/plantpol.png" alt="Plantpol B2B портал" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Plantpol Case Study - Detailed */}
        <section id="plantpol-details" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🌱</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Кейс Plantpol: ROI-оптимізація в Агротехнологіях
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Виклик</h3>
                <p className="text-gray-300">
                  Створення B2B-порталу на Angular/Laravel для <strong className="text-white">5000+ SKU</strong>, повністю інтегрованого з 1С бухгалтерією.
                  Компанія мала 20 менеджерів для обробки складних річних замовлень на палетах з плануванням на 1-2 роки.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6">Рішення</h3>
                <p className="text-gray-300">
                  Замість найму додаткових 20+ менеджерів, наше рішення автоматизувало обробку складних замовлень:
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Автоматизована логіка замовлень на палетах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Планування на 1-2 роки наперед</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Повна ERP-інтеграція з 1С</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>5000+ SKU з автоматичним оновленням</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Результат</h3>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <div className="text-5xl font-bold text-emerald-400 mb-2">75%</div>
                  <div className="text-white font-semibold mb-2">Скорочення штату менеджерів</div>
                  <div className="text-gray-300 text-sm">З 20 до 5 менеджерів</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400">ДО</div>
                    <div className="text-sm text-gray-300 mt-1">20 менеджерів</div>
                    <div className="text-xs text-gray-400">Ручна обробка</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-400">ПІСЛЯ</div>
                    <div className="text-sm text-gray-300 mt-1">5 менеджерів</div>
                    <div className="text-xs text-gray-400">Автоматизація</div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-white font-semibold mb-2">💰 Економія</p>
                  <p className="text-gray-300 text-sm">
                    Мільйони гривень збережених коштів на операційних витратах + можливість масштабування без найму
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 text-sm mb-6">
                <strong className="text-white">Професійна оцінка:</strong> Plantpol проявив себе як інноваційний лідер у традиційній сфері агротехнологій.
                Рішення інвестувати у складний B2B-портал замість постійного найму персоналу було стратегічним і далекоглядним кроком.
              </p>

              {/* CTA for similar projects */}
              <div className="rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 p-6 text-center">
                <p className="text-white font-semibold mb-3">Хочете подібний результат для вашого бізнесу?</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition text-sm">
                    Отримати безкоштовну консультацію
                  </a>
                  <a href="/solutions/ecommerce" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition text-sm">
                    Дізнатись більше про рішення
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-xl overflow-hidden border border-emerald-500/20">
                <img src="/images/projects/plantpol.png" alt="Plantpol B2B портал" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Plantpol</strong> — лідер у сфері агротехнологій з інноваційним підходом до автоматизації B2B-процесів.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    plantpol.com.ua →
                  </a>
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    Facebook
                  </a>
                  <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Trends 2025 */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚀</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Тренди E-commerce 2025: Наше Бачення
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-white font-semibold text-lg">AI-персоналізація</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Штучний інтелект аналізує поведінку клієнтів у реальному часі, пропонуючи персональні рекомендації, динамічне ціноутворення
                  та прогнозування попиту. Це не просто "схожі товари" — це повноцінний AI-помічник для кожного клієнта.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎙️</span>
                  <h3 className="text-white font-semibold text-lg">Голосова комерція</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Voice Commerce стає нормою. Клієнти замовляють товари через Alexa, Google Assistant, Siri.
                  Інтеграція з голосовими асистентами та оптимізація для voice search — must-have для B2C.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-white font-semibold text-lg">Headless Commerce</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Роз'єднання frontend і backend дозволяє створювати унікальні користувацькі інтерфейси для різних каналів продажу:
                  веб, мобільні додатки, IoT-пристрої, навіть AR/VR. Швидкість розробки та гнучкість на новому рівні.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-white font-semibold text-lg">Сталий розвиток</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Sustainability стає ключовим фактором при виборі. Клієнти хочуть бачити carbon footprint товарів,
                  екологічну упаковку, можливість вторинної переробки. E-commerce має бути "зеленим".
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔐</span>
                  <h3 className="text-white font-semibold text-lg">Web3 & Blockchain</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Децентралізовані маркетплейси, NFT-товари, криптовалютні платежі. Blockchain забезпечує прозорість ланцюга постачання
                  та автентичність товарів. Web3 створює нову економіку власності.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-white font-semibold text-lg">Predictive Analytics</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Прогнозна аналітика передбачає попит, оптимізує запаси, персоналізує маркетинг.
                  Machine Learning моделі аналізують мільйони data points для прийняття бізнес-рішень у реальному часі.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-white font-semibold mb-2">💡 Наш підхід</p>
              <p className="text-gray-300 text-sm">
                В Diwave ми не просто стежимо за трендами — ми їх створюємо. Наші рішення для e-commerce вже сьогодні використовують AI,
                headless architecture та predictive analytics. Ми допомагаємо бізнесу бути на крок попереду конкурентів.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-8 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">Готові створити свій e-commerce проєкт?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Отримайте детальну консультацію від нашої команди. Ми допоможемо підібрати оптимальне рішення для вашого бізнесу та розрахуємо ROI.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/25">
                  <span>📧</span>
                  Замовити консультацію
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition">
                  <span>💬</span>
                  Обговорити проєкт
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Details & Tech Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Implementation Details */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold mb-4">Як ми реалізуємо e‑commerce</h2>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">Discovery та KPI:</b> спільно з клієнтом — скорочення витрат, підвищення конверсії та AOV.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">Каталог і пошук:</b> швидке фільтрування, варіанти, залишки, оптові прайси.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">Кошик і чек‑аут:</b> мінімум кроків, промокоди, різні способи оплати.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">ERP/CRM інтеграції:</b> синхронізація замовлень, клієнтів і складу; нотифікації.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">SEO/перформанс:</b> швидкі сторінки, структуровані дані, мікророзмітка.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▸</span>
                  <div><b className="text-white">Маркетинг:</b> email/SMS, ремаркетинг, UTM‑аналітика, контент.</div>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold mb-4">Технічний стек</h2>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div><b className="text-white">Frontend:</b> React 18, Angular, TypeScript, Tailwind, i18n.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div><b className="text-white">Backend:</b> Node.js, PHP (Laravel), REST/GraphQL, кеші та черги.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div><b className="text-white">Платежі:</b> картки, Apple/Google Pay, безпечні вебхуки та звірка.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div><b className="text-white">ERP/CRM:</b> 1С інтеграція, двобічна синхронізація, антифрод‑правила.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div><b className="text-white">DevOps:</b> Docker, CI/CD, моніторинг, алерти, CDN/WAF, бекапи.</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Partners */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold mb-4">Наші партнери в e-commerce</h2>
            <div className="space-y-4">
              {/* Plantpol */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌱</span>
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-emerald-300">
                    Plantpol
                  </a>
                </div>
                <p className="text-gray-300 text-sm mb-2">Агротехнології: насіння, ЗЗР, агрохімія. B2B-портал з 5000+ SKU та інтеграцією 1С.</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                  <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">YouTube</a>
                </div>
              </div>

              {/* Lemberg Flowers */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌺</span>
                  <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-cyan-300">
                    Lemberg Flowers
                  </a>
                </div>
                <p className="text-gray-300 text-sm mb-2">Роздріб/опт рослин, озеленення інтер'єрів. B2C e-commerce з каталогом та доставкою.</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Проєктів</a>
            <a href="/solutions/ecommerce" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Пов’язане рішення</a>
          </div>
        </section>
      </main>
    </>
  );
}
