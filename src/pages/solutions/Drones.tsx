import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function Drones() {
  const title = 'Гніздо - Українська асоціація пілотів FPV дронів | Diwave Solutions';
  const description =
    'Громадська організація українських пілотів FPV дронів. Виробництво дронів, організація змагань, навчальні школи в Україні та Польщі, підтримка ЗСУ.';
  const url = `${baseUrl}/solutions/drones`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Гніздо - Українська асоціація пілотів FPV дронів',
      description:
        'Громадська організація, група компаній: виробництво FPV дронів, організація міжнародних змагань, навчальні школи, підтримка України.',
      provider: { '@type': 'Organization', name: 'Diwave Solutions', url: baseUrl },
      areaServed: ['UA', 'PL', 'GB', 'EU'],
      inLanguage: ['uk', 'en', 'pl'],
      url
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/solutions/drones/cover.jpg`}
        locale="uk"
        alternates={[{ hrefLang: 'uk', href: url }]}
        jsonLd={jsonLd}
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent),radial-gradient(1000px_500px_at_90%_10%,rgba(168,85,247,0.18),transparent)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
                <span>🇺🇦</span>
                Українська асоціація пілотів FPV дронів
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Гніздо</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Громадська організація та група компаній, що об'єднує виробництво FPV дронів, організацію міжнародних змагань, навчальні школи та підтримку захисників України.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-blue-400">Спорт</div>
                  <div className="text-sm text-gray-300">Змагання та тренування</div>
                </div>
                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-yellow-400">Оборона</div>
                  <div className="text-sm text-gray-300">Підтримка ЗСУ</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://gnizdoteam.com/ua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition shadow-lg shadow-blue-500/30"
                >
                  Офіційний сайт Гніздо
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-400/30 via-cyan-400/20 to-purple-400/30 blur-3xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm shadow-2xl">
                <img
                  src="/images/solutions/drones/hero.png"
                  alt="Гніздо - Українська асоціація пілотів FPV дронів"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Organization */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Про <span className="text-blue-400">Гніздо</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Гніздо</strong> — це більше ніж організація. Це екосистема, яка об'єднує волонтерів, спортсменів, військових та виробників FPV дронів навколо спільної мети.
                </p>
                <p>
                  Ми працюємо одночасно в кількох напрямках: від організації міжнародних змагань з FPV дронів у Великобританії до виробництва дронів для захисників України.
                </p>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Наш досвід та попит у світі роблять цю тему надзвичайно актуальною. Ми поєднуємо спортивні досягнення з військовою необхідністю, адже в умовах війни проти Росії кожен дрон може врятувати життя.
                </p>
                <p>
                  Маємо власні тренувальні площадки, зокрема у Львівській області, де організовуємо змагання та тренування.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Directions */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Напрямки діяльності
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="text-white font-semibold mb-2">Виробництво дронів</h3>
              <p className="text-gray-300 text-sm">
                Проєктування та виробництво FPV дронів для спортивних змагань та військових потреб
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-white font-semibold mb-2">Організація змагань</h3>
              <p className="text-gray-300 text-sm">
                Міжнародні турніри FPV дронів у Великобританії та інших країнах Європи
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-white font-semibold mb-2">Навчальні школи</h3>
              <p className="text-gray-300 text-sm">
                Школи пілотів FPV дронів в Україні та Польщі з підготовкою операторів
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 backdrop-blur">
              <div className="text-4xl mb-3">🇺🇦</div>
              <h3 className="text-white font-semibold mb-2">Підтримка ЗСУ</h3>
              <p className="text-gray-300 text-sm">
                Допомога Збройним Силам України дронами та навчанням операторів
              </p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Партнери та представництва
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Site */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇺🇦</span>
                <h3 className="text-white font-semibold text-lg">Україна</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Головний офіс та виробництво. Організація змагань та тренувальні площадки у Львівській області.
              </p>
              <a
                href="https://gnizdoteam.com/ua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                gnizdoteam.com/ua
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Poland */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇵🇱</span>
                <h3 className="text-white font-semibold text-lg">Польща</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                <strong className="text-white">Dronarium Birds</strong> — навчальний центр операторів безпілотних систем. Підготовка пілотів FPV дронів.
              </p>
              <a
                href="https://www.dronariumbirds.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                dronariumbirds.pl
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* UK */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇬🇧</span>
                <h3 className="text-white font-semibold text-lg">Великобританія</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                <strong className="text-white">Gnizdo Ltd</strong> — український технологічний хаб. Організація змагань, навчання, підтримка військових технологій.
              </p>
              <a
                href="https://gnizdoltd.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                gnizdoltd.co.uk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why Important */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
              Чому це важливо
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Досвід і попит</div>
                    <div className="text-gray-300 text-sm">
                      Український досвід використання FPV дронів став еталоном у світі. Наші технології та методики затребувані глобально.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚔️</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Військова необхідність</div>
                    <div className="text-gray-300 text-sm">
                      Війна проти Росії вимагає постійних інновацій. FPV дрони — критично важлива технологія для захисту України.
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Спортивні досягнення</div>
                    <div className="text-gray-300 text-sm">
                      Українські пілоти беруть участь у міжнародних змаганнях, демонструючи високий рівень майстерності.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Об'єднання зусиль</div>
                    <div className="text-gray-300 text-sm">
                      Волонтери, спортсмени та військові працюють разом, поєднуючи спортивний розвиток з обороною країни.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            📸 Галерея
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/drones/3361D8C0-36B5-44B3-90F7-0B2A7D558300_1_105_c.jpeg"
                alt="FPV дрони Гніздо"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/drones/741ADB82-E672-4F57-95E6-790CD07D8C92_1_105_c.jpeg"
                alt="FPV дрони Гніздо"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/drones/C23FC16A-3AB2-466E-A477-E7407FC5ACFB_1_105_c.jpeg"
                alt="FPV дрони Гніздо"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/drones/3696655F-B429-4D7B-BC47-A9E554ABDC70_4_5005_c.jpeg"
                alt="FPV дрони Гніздо"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur col-span-2">
              <img
                src="/images/solutions/drones/img.png"
                alt="FPV дрони Гніздо"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 md:p-12 backdrop-blur text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Приєднуйтесь до <span className="text-blue-400">Гніздо</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Станьте частиною спільноти українських пілотів FPV дронів. Навчання, змагання, підтримка України.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://gnizdoteam.com/ua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
              >
                Офіційний сайт Гніздо
              </a>
              <a
                href="https://www.dronariumbirds.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
              >
                Школа в Польщі
              </a>
              <a
                href="https://gnizdoltd.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
              >
                Представництво UK
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Рішень</a>
            <a href="/industries" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Індустрії</a>
          </div>
        </section>
      </main>
    </>
  );
}
