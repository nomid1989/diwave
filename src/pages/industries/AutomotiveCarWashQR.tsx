import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function AutomotiveCarWashQR() {
  const title = 'QR-оплата для індустрії автомийок і автомотиву | Diwave Solutions';
  const description =
    'Безтермінальна QR-оплата для мереж автомийок: AI-адаптація за регіоном, двомовність, масштабованість та інтеграції. Єдиний стандарт із локальними налаштуваннями.';
  const url = `${baseUrl}/industries/automotive/car-wash-qr`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'QR-оплата для індустрії автомийок',
      description:
        'QR-оплата без терміналів, AI-адаптація контенту за регіоном, двомовність, відповідність і безпека, масштабованість для мереж.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      audience: { '@type': 'BusinessAudience', name: 'Car wash networks' },
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
        image={`${baseUrl}/images/industries/car-wash-qr/cover.jpg`}
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
                QR‑оплата для індустрії автомийок і автомотиву
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
                  href="/projects/samwash-qr"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Дивитися кейс
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/industries/car-wash-qr"
                  alt="QR-оплата для індустрії автомийок"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Зниження витрат', d: 'Менше обладнання — менше сервісу і амортизації.' },
              { t: 'Єдиний стандарт', d: 'Одна платформа з локальними налаштуваннями за регіоном.' },
              { t: 'Масштабованість', d: 'Легке розгортання на нові точки мережі.' }
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Scenarios + Compliance */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Сценарії використання</h2>
              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                <li>Самообслуговування без касира та терміналів.</li>
                <li>Партнерські майданчики з різними платіжними методами.</li>
                <li>Мережеві інсталяції з централізованим контролем.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-white text-xl font-semibold">Відповідність і безпека</h2>
              <p className="mt-3 text-gray-300">
                Відповідаємо кращим практикам безпеки та приватності, забезпечуємо стабільність під навантаженням,
                журналювання і моніторинг для аудиту.
              </p>
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
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research-based insights */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Що показує аналіз відкритих джерел</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>Samwash — активне розгортання QR‑оплат і digital‑каналів; новий сайт та соцмережі слугують ключовими точками взаємодії.</li>
              <li>Plantpol — виробництво/продаж рослин, офлайн садовий центр та онлайн‑магазин; Instagram/FB як ключові канали.</li>
              <li>Lemberg Flowers — асортимент для озеленення та сервіси під ключ; Instagram/FB як вітрина.</li>
              <li>Rozkriy — порізка/фрезерування широкого спектра матеріалів; Facebook для комунікацій.</li>
              <li>ГНІЗДО — ком’юніті пілотів дронів; інформаційні та навчальні активності.</li>
            </ul>
          </div>
        </section>

        {/* CTA / Links */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              ← До каталогу Індустрій
            </a>
            <a
              href="/solutions/samwash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Рішення Samwash QR
            </a>
            <a
              href="/projects/samwash-qr"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Кейс Samwash
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
