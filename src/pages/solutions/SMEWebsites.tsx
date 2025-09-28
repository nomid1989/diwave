import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function SMEWebsites() {
  const title =
    'Сайти для локальних сервісів і малих бізнесів (GEO‑SEO, ліди) | Diwave Solutions';
  const description =
    'Швидкі сайти з GEO‑SEO та лідогенерацією для сантехніків, електриків, меблярів, плиточників, будівельників, аграріїв, баз відпочинку та інших SMB. Пакети під ключ: від Discovery і дизайну до реклами й аналітики.';
  const url = `${baseUrl}/solutions/sme-websites`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Вебсайти для локальних сервісів і SMB',
      description:
        'Розробка сайтів із GEO‑SEO і системою лідів для невеликих сервісних бізнесів та самозайнятих.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'EU'],
      audience: { '@type': 'BusinessAudience', name: 'Small & Local Services' },
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
        image={`${baseUrl}/images/solutions/sme-websites/cover.jpg`}
        locale="uk"
        jsonLd={jsonLd}
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Сайти для локальних сервісів і SMB
              </h1>
              <p className="mt-4 text-gray-300">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/industries/home-services"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition"
                >
                  Для яких ніш
                </a>
                <a
                  href="/projects/ecommerce"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Дивитись кейси
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <SmartImage
                  srcFolder="/images/solutions/sme-websites"
                  alt="Локальні сервіси — сайти та лідогенерація"
                  className="w-full h-[420px]"
                  imgClassName="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'GEO‑SEO', d: 'Під локальні запити, карти, відгуки, каталоги.' },
              { t: 'Ліди', d: 'Форми, чат‑боти, мессенджери, кол‑трекінг.' },
              { t: 'Швидкий запуск', d: 'Пакети під ключ з яких легко стартувати.' }
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="text-white font-medium">{f.t}</div>
                <div className="text-gray-300 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Кому підійде</h2>
            <p className="text-gray-300 text-sm mt-2">
              Сантехніки, електрики, плиточники, меблярі, ремонт квартир і будівництво, аграрії,
              бази/комплекси відпочинку, клінінг, майстри з ремонту техніки, фотографи та інші
              самозайняті.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Пакети</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <b>Start:</b> лендінг + форма/месенджер + базове SEO + підключення карт і відгуків.
              </li>
              <li>
                <b>Pro:</b> багатосторінковий сайт + портфоліо + блог + розширене SEO/GEO‑SEO +
                аналітика + кол‑трекінг.
              </li>
              <li>
                <b>Growth:</b> сайт + реклама (Google/Meta) + CRM для лідів + автоворонки +
                звітність по заявках/ROI.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-white text-xl font-semibold">Технічний стек</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-200">
              <li>
                <b>Frontend:</b> React 18, TypeScript, Tailwind, i18n.
              </li>
              <li>
                <b>Backend/CMS:</b> Node.js/PHP, headless CMS або традиційні CMS за потреби.
              </li>
              <li>
                <b>Інтеграції:</b> Google Business Profile, карти, відгуки, мессенджери, CRM.
              </li>
              <li>
                <b>Аналітика:</b> GA4, GTM, конверсії, кол‑трекінг, звіти.
              </li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              ← До каталогу Рішень
            </a>
            <a
              href="/industries/home-services"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10"
            >
              Домашні та будівельні послуги
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/90 text-black hover:bg-white"
            >
              Замовити консультацію
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
