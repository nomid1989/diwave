import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function SamwashQRProject() {
  const title = 'Кейс Samwash: QR-оплата послуг автомийки | Diwave Solutions';
  const description =
    'Впровадження QR-оплати: скан — вибір послуги — оплата зі смартфона. Менше черг, більше безготівкових платежів, стабільність під пікові навантаження.';
  const url = `${baseUrl}/projects/samwash-qr`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Кейс Samwash: QR-оплата послуг автомийки',
      description:
        'Проєкт впровадження мобільної QR-оплати: оплата зі смартфона, автоматична адаптація до локації, інтеграція з обладнанням.',
      author: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      inLanguage: ['uk', 'en'],
      url
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/projects/samwash-qr/cover.jpg`}
        locale="uk"
        alternates={[{ hrefLang: 'uk', href: url }]}
        jsonLd={jsonLd}
      />

      {/* Background gradient + blur */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Кейс Samwash: QR‑оплата послуг автомийки
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/solutions/samwash-qr"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  Перейти до рішення
                </a>
                <a
                  href="#results"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Результати
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">-40%</div>
                  <div className="text-xs text-gray-300">час обслуговування</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">+30%</div>
                  <div className="text-xs text-gray-300">безготівкові платежі</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl text-white font-semibold">99.9%</div>
                  <div className="text-xs text-gray-300">аптайм</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/projects/samwash-qr"
                  alt="Кейс Samwash — мобільна QR-оплата на автомийці"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Goals / Implementation */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Мета</h2>
              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                <li>Скоротити час обслуговування і зменшити черги.</li>
                <li>Підвищити частку безготівкових платежів.</li>
                <li>Масштабувати мережу без збільшення витрат на термінали.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Реалізація</h2>
              <ol className="mt-3 list-decimal list-inside text-gray-300 space-y-1">
                <li>UX потік: скан QR → вибір послуги → оплата.</li>
                <li>Інтеграція платіжних провайдерів і синхронізація з обладнанням.</li>
                <li>AI‑адаптація контенту за регіоном + двомовність.</li>
                <li>Моніторинг, логування, SLA.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Результати</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { m: '-40%', t: 'час обслуговування' },
                { m: '+30%', t: 'частка безготівкових платежів' },
                { m: '99.9%', t: 'стабільність під навантаженням' }
              ].map((r) => (
                <div key={r.t} className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                  <div className="text-2xl text-white font-semibold">{r.m}</div>
                  <div className="text-xs text-gray-300">{r.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official links */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Офіційні посилання Samwash</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="https://ism-wash.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Старий сайт: ism-wash.com</a></li>
                <li><a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Новий сайт: samwash.ua</a></li>
                <li><a href="https://shop.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Інтернет‑магазин: shop.samwash.ua</a></li>
                <li><a href="https://app.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Система оплати/керування: app.samwash.ua</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Соцмережі Samwash</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="https://www.facebook.com/samwashcarwash/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Facebook</a></li>
                <li><a href="https://www.instagram.com/samwash_carwash/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Instagram</a></li>
                <li><a href="https://www.youtube.com/@samwash" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">YouTube</a></li>
                <li><a href="https://www.tiktok.com/@samwash.official" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">TikTok</a></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Партнери та друзі</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="https://plantpol.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Plantpol — інтернет‑магазин квіткового господарства</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/plantpol_ukraina/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/plantpol.ukraine/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.youtube.com/@plantpol_ukraina" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">YouTube</a>
                </li>
                <li>
                  <a href="https://lembergflowers.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Lemberg Flowers — партнер</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/lembergflowers/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/lembergflowers.ltd/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
                <li>
                  <a href="https://rozkriy.com.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Rozkriy — фрезерна порізка матеріалів</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/rozkriy.com.ua/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
                <li>
                  <a href="https://gnizdoteam.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">ГНІЗДО — УАПД “Гніздо”</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.instagram.com/gnizdoteam/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Instagram</a>
                  <span className="text-gray-400"> · </span>
                  <a href="https://www.facebook.com/gnizdoteam/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Made from scratch & roles */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Що зроблено з нуля та моя роль</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Discovery та вимоги:</b> інтерв’ю зі стейкхолдерами, формування KPI (частка безготівкових оплат, швидкість обслуговування, аптайм, SLA).</li>
              <li><b>Співпраця з дизайном:</b> UX-флоу “скан → вибір → оплата”, прототипи, контент і мікрокопі для високої конверсії.</li>
              <li><b>Архітектура:</b> інтеграція з IoT/SCADA, брокер подій, безпечні вебхуки; масштабування під пікові навантаження.</li>
              <li><b>Платежі та фіскалізація:</b> підключення платіжних провайдерів (картки, Apple/Google Pay, QR), фіскальна звітність за потреби.</li>
              <li><b>Розробка:</b> фронтенд (PWA/SPA) і бекенд API, синхронізація з обладнанням (мийка/пилосос/робот), авторизація, логування.</li>
              <li><b>DevOps і безпека:</b> CI/CD, Docker, моніторинг, алерти, резервування, WAF/CDN, керування секретами.</li>
              <li><b>Запуск і підтримка:</b> гейміфікація/лояльність, ретеншн-кампанії, аналітика, A/B‑тести, контент (YouTube/TikTok/IG/FB).</li>
            </ul>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Технічний стек</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Frontend:</b> TypeScript, React 18, Tailwind, PWA, i18n.</li>
              <li><b>Backend:</b> Node.js/PHP, REST/GraphQL API, інтеграції з платіжними сервісами та обладнанням.</li>
              <li><b>Інтеграції:</b> платіжні провайдери, CRM/лояльність, телеметрія.</li>
              <li><b>Інфраструктура:</b> Docker, CI/CD, об’єктне логування, моніторинг, CDN/WAF, резервування.</li>
            </ul>
          </div>
        </section>

        {/* Research-based insights (kept) */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Що показує аналіз відкритих джерел</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Samwash — мережа автомийок самообслуговування; активний розвиток цифрових каналів і новий сайт; широка присутність у соцмережах.</li>
              <li>Plantpol — виробництво і продаж рослин (онлайн та офлайн), активні Instagram і Facebook.</li>
              <li>Lemberg Flowers — опт/роздріб, озеленення “під ключ”, активні Instagram і Facebook.</li>
              <li>Rozkriy — порізка/фрезерування матеріалів без нагару, комунікації через Facebook.</li>
              <li>ГНІЗДО — асоціація пілотів дронів, ком’юніті та навчальні ініціативи.</li>
            </ul>
          </div>
        </section>

        {/* CTA / Links */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              ← До каталогу Проєктів
            </a>
            <a
              href="/solutions/samwash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Рішення Samwash QR
            </a>
            <a
              href="/industries/automotive/car-wash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Для індустрій
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
