import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function SamwashQR() {
  const title = 'Автоматизація оплати послуг мережі автомийок Samwash через QR-код | Diwave Solutions';
  const description =
    'Оплата зі смартфона без терміналів: Samwash QR — AI-адаптація за регіоном, двомовність, швидка інтеграція. Система автоматично враховує локацію та синхронізується з обладнанням.';
  const url = `${baseUrl}/solutions/samwash-qr`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Samwash: QR-оплата на автомийках',
      description:
        'Оплата послуг автомийки зі смартфона без терміналів. AI-адаптація контенту за регіоном, двомовність, автоматична синхронізація з обладнанням.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
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
        image={`${baseUrl}/images/solutions/samwash-qr/cover.jpg`}
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
                QR‑оплата Samwash для мереж автомийок
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  Замовити демо
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="/projects/samwash-qr"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Дивитися кейс
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
                  <div className="text-2xl text-white font-semibold">24/7</div>
                  <div className="text-xs text-gray-300">робота під навантаженням</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/samwash-qr"
                  alt="Samwash QR — мобільна оплата на автомийці"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'AI‑адаптація', d: 'Контент і способи оплати під регіон клієнта.' },
              { t: 'Двомовність', d: 'UA/EN інтерфейси для різних аудиторій.' },
              { t: 'Швидка інтеграція', d: 'Впровадження як модуль/віджет або окреме рішення.' }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Як це працює</h2>
            <ol className="grid md:grid-cols-3 gap-4 list-decimal list-inside text-gray-200 mb-6">
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">Скануєте QR‑код на локації.</li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">Обираєте послугу і оплачуєте зі смартфона.</li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">Система запускає програму на обладнанні.</li>
            </ol>

            {/* Video Tutorial */}
            <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📱</span>
                <h3 className="text-white font-semibold text-lg">Відео інструкція</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Дивіться коротке відео про те, як користуватись додатком SamWash для оплати послуг автомийки через QR-код
              </p>
              <a
                href="https://vm.tiktok.com/ZMAP3rGX8/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium hover:from-pink-600 hover:to-cyan-600 transition shadow-lg"
              >
                🎥 Дивитись на TikTok
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            📸 Скріншоти додатку SamPay
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/5582F1D0-BC9B-4D6A-8B1D-389DB639C31A_1_201_a.jpeg"
                alt="SamPay додаток"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/95319261-59A2-4791-9199-C5B6C2658E21_1_201_a.jpeg"
                alt="SamPay оплата"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/9C63F51B-23FC-42EB-8A15-B0FD19ED9646_1_201_a.jpeg"
                alt="SamPay функції"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/9FB083C6-DCF4-414C-A4CC-C676C7CB3908_1_201_a.jpeg"
                alt="SamPay інтерфейс"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/A94E3411-7E20-40F9-B58A-CFB7B7174069_1_201_a.jpeg"
                alt="SamPay QR код"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/C634410E-48EE-48D5-98F9-35D3199297C5_1_201_a.jpeg"
                alt="SamPay мобільна версія"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/samwash-qr/EEA41C16-78E2-4CC5-8F5D-278338A9F065_1_201_a.jpeg"
                alt="SamPay система"
                className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* CTA / Links */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              ← До каталогу Рішень
            </a>
            <a
              href="/projects/samwash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Кейс Samwash
            </a>
            <a
              href="/industries/automotive/car-wash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Для індустрій
            </a>
          </div>
        </section>

        {/* Official links */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white font-semibold">Офіційні посилання Samwash</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="https://ism-wash.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Старий вебсайт: ism-wash.com</a>
                </li>
                <li>
                  <a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Новий вебсайт: samwash.ua</a>
                </li>
                <li>
                  <a href="https://shop.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Інтернет‑магазин: shop.samwash.ua</a>
                </li>
                <li>
                  <a href="https://app.samwash.ua" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Система оплати послуг автомийки самообслуговування, робот мийки та пилососа: app.samwash.ua</a>
                </li>
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
              <li><b>Комунікація та постановка задач:</b> зібрав вимоги, узгодив KPI та GTM.</li>
              <li><b>Дизайн і UX:</b> побудував разом із дизайнерами зручний потік оплати, контент і двомовність.</li>
              <li><b>Архітектура та інтеграції:</b> IoT/SCADA, платіжні провайдери, телеметрія, захищені вебхуки.</li>
              <li><b>Розробка:</b> фронтенд/бекенд, синхронізація з мийкою/роботом/пилососом, кабінет клієнта.</li>
              <li><b>Інфраструктура:</b> CI/CD, контейнеризація, логування, моніторинг, SLA.</li>
              <li><b>Запуск і маркетинг:</b> контент та рекламні кампанії, аналітика, оптимізація конверсій.</li>
            </ul>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Технічний стек</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li><b>Frontend:</b> TypeScript, React 18, Tailwind, i18n.</li>
              <li><b>Backend:</b> Node.js/PHP, REST API, інтеграції з платіжними сервісами та обладнанням.</li>
              <li><b>Інтеграції:</b> платежі, CRM/лояльність, телеметрія.</li>
              <li><b>DevOps:</b> Docker, CI/CD, моніторинг/алерти, CDN/WAF, бекапи.</li>
            </ul>
          </div>
        </section>

        {/* Research-based insights (kept) */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Що показує аналіз відкритих джерел</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Samwash — мережа автомийок самообслуговування, що мігрувала на новий сайт samwash.ua; активно веде соцмережі та має широку географію локацій.</li>
              <li>Plantpol — квіткове господарство із садовим центром та онлайн‑магазином; комунікації ведуться через Instagram та Facebook.</li>
              <li>Lemberg Flowers — роздріб/опт рослин, озеленення інтер’єрів; активна присутність у Instagram та Facebook.</li>
              <li>Rozkriy — фігурна порізка/фрезерування різних матеріалів із чистими краями без нагару; присутність у Facebook.</li>
              <li>ГНІЗДО — об’єднання пілотів дронів; інформаційна платформа та навчальна/спільнотна діяльність.</li>
            </ul>
          </div>
        </section>

        {/* Contact anchor */}
        <section id="contact" className="mx-auto max-w-3xl px-6 pb-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center">
            <h3 className="text-white text-lg font-semibold">Готові спробувати?</h3>
            <p className="text-gray-300 mt-1">Залиште контакт — допоможемо обрати конфігурацію та швидко впровадити.</p>
            <a
              href="mailto:kravets.lviv@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white"
            >
              Написати
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
