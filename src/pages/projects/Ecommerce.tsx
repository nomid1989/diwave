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
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">E‑commerce інтеграції</h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/solutions/ecommerce" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition">Перейти до рішення</a>
                <a href="#results" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">Результати</a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage srcFolder="/images/projects/ecommerce" alt="Кейс: e‑commerce" className="w-full h-[420px]" imgClassName="w-full h-[420px] object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section id="results" className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { m: '↑', t: 'Конверсії' },
                { m: '↑', t: 'Швидкодія' },
                { m: '↓', t: 'Вартість підтримки' }
              ].map((r) => (
                <div key={r.t} className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                  <div className="text-2xl text-white font-semibold">{r.m}</div>
                  <div className="text-xs text-gray-300">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Plantpol Case Study */}
        <section className="mx-auto max-w-7xl px-6 py-12">
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
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Професійна оцінка:</strong> Plantpol проявив себе як інноваційний лідер у традиційній сфері агротехнологій.
                Рішення інвестувати у складний B2B-портал замість постійного найму персоналу було стратегічним і далекоглядним кроком.
              </p>
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
          </div>
        </section>

        {/* Other Partners */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Інші партнери</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Lemberg Flowers — роздріб/опт рослин, озеленення інтер'єрів</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                <span className="text-gray-400"> · </span>
                <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Деталі реалізації e‑commerce з нуля</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Discovery та KPI:</b> спільно з клієнтом — скорочення витрат на підтримку, підвищення конверсії та AOV.</li>
              <li><b>Каталог і пошук:</b> швидке фільтрування, варіанти, залишки, оптові прайси.</li>
              <li><b>Кошик і чек‑аут:</b> мінімум кроків, застосунок промокодів, різні способи оплати.</li>
              <li><b>ERP/CRM інтеграції:</b> синхронізація замовлень, клієнтів і складу; нотифікації.</li>
              <li><b>SEO/перформанс:</b> швидкі сторінки, структуровані дані, мікророзмітка, кешування.</li>
              <li><b>Операції:</b> звіти, ролі/права, SLA, журнал подій, підтримка без простоїв.</li>
              <li><b>Маркетинг:</b> email/SMS, ремаркетинг, UTM‑аналітика, контент, партнерські інтеграції.</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Технічний стек та інтеграції</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Frontend:</b> React 18, TypeScript, Tailwind, i18n.</li>
              <li><b>Backend:</b> Node.js/PHP, REST/GraphQL, кеші та черги.</li>
              <li><b>Платежі:</b> картки, Apple/Google Pay, безпечні вебхуки та звірка.</li>
              <li><b>ERP/CRM:</b> двобічна синхронізація, оновлення статусів, антифрод‑правила.</li>
              <li><b>DevOps:</b> Docker, CI/CD, моніторинг, алерти, CDN/WAF, бекапи.</li>
            </ul>
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
