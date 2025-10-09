import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function CarWashes() {
  const title = 'SamWash: Автомийки Самообслуговування з EBITDA 70% | Обладнання під Ключ | Diwave';
  const description =
    'Комплексна система автомийок SamWash від Diwave: виробництво обладнання, IoT/SCADA управління, QR-платежі, телеметрія та CRM. Бізнес з EBITDA 70%, що працює 24/7 без персоналу. Понад 120+ локацій в Україні та ЄС.';
  const url = `${baseUrl}/solutions/car-washes`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Автомийки самообслуговування SamWash - рішення під ключ',
      description:
        'Повний цикл від виробництва обладнання до IoT/SCADA систем управління. QR-оплата, телеметрія, енергоефективність, віддалене керування через MySamWash. Рентабельність EBITDA до 70%.',
      provider: {
        '@type': 'Organization',
        name: 'Diwave Solutions',
        url: baseUrl,
        sameAs: [
          'https://www.facebook.com/samwashcarwash',
          'https://www.instagram.com/samwash_carwash/',
          'https://www.youtube.com/@samwash',
          'https://www.tiktok.com/@samwash.official'
        ]
      },
      areaServed: ['UA', 'EU'],
      inLanguage: ['uk', 'en'],
      url,
      serviceType: 'Self-Service Car Wash Equipment & IoT Solutions',
      offers: {
        '@type': 'Offer',
        description: 'Автомийки самообслуговування під ключ з обладнанням італійського виробництва',
        priceCurrency: 'EUR',
        priceRange: '€6,200 - €14,000',
        availability: 'https://schema.org/InStock'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Яка рентабельність бізнесу автомийок самообслуговування SamWash?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Бізнес-модель SamWash забезпечує EBITDA до 70%. Це досягається за рахунок відсутності постійного персоналу, енергоефективних технологій, віддаленого управління через IoT/SCADA систему MySamWash та оптимізованих операційних витрат.'
          }
        },
        {
          '@type': 'Question',
          name: 'Що входить в рішення автомийки під ключ від SamWash?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Комплексне рішення включає: обладнання італійського виробництва з компонентами від Schneider Electric, Omron, Ebara; систему IoT/SCADA для віддаленого управління; QR-платежі та безконтактні платіжні системи; телеметрію в реальному часі; CRM та аналітику; проєктну документацію; авторський нагляд; 2 роки гарантії та технічну підтримку.'
          }
        },
        {
          '@type': 'Question',
          name: 'Скільки коштує відкрити автомийку самообслуговування?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Вартість одного мийного поста варіюється від €6,200 до €14,000 залежно від конфігурації та дизайну. SamWash пропонує 6 різних варіантів дизайну та можливість лізингу під 10% річних до 3 років.'
          }
        },
        {
          '@type': 'Question',
          name: 'Чи потрібен персонал для роботи автомийки SamWash?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ні, автомийки SamWash працюють в режимі повного самообслуговування 24/7 без постійного персоналу. Всі процеси автоматизовані, управління та моніторинг здійснюються віддалено через систему MySamWash.'
          }
        },
        {
          '@type': 'Question',
          name: 'Які технології використовує система MySamWash?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'MySamWash - це хмарна IoT/SCADA платформа для віддаленого управління мережами автомийок. Система забезпечує телеметрію в реальному часі, діагностику обладнання, контроль платежів, енергоменеджмент, CRM та детальну аналітику по кожній локації.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Обладнання для автомийок самообслуговування SamWash',
      description: 'Італійське обладнання для автомийок самообслуговування з інтегрованою IoT/SCADA системою управління',
      brand: {
        '@type': 'Brand',
        name: 'SamWash'
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'SamWash / Diwave Solutions',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kulparkivska St, 108',
          addressLocality: 'Lviv',
          addressRegion: 'Lviv Oblast',
          postalCode: '79000',
          addressCountry: 'UA'
        }
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: '6200',
        highPrice: '14000',
        offerCount: '6',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '120'
      }
    }
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        image={`${baseUrl}/images/solutions/car-washes/cover.jpg`}
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                EBITDA до 70%
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Автомийки Самообслуговування <span className="text-cyan-400">SamWash</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Повний цикл від виробництва обладнання до IoT/SCADA управління. Бізнес, що працює 24/7 без персоналу з рентабельністю до 70%.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition">
                  Сайт SamWash →
                </a>
                <a href="https://app.samwash.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">
                  MySamWash Додаток
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border border-white/30 text-white hover:bg-white/10 transition">
                  Замовити консультацію
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img
                    src="/images/industries/samwash/66D5DCD7-862F-4C47-BE60-E608374543E8_1_105_c.jpg"
                    alt="Автомийка SamWash вночі з яскравим освітленням"
                    className="w-full h-52 object-cover rounded-xl"
                  />
                  <img
                    src="/images/industries/samwash/58893A62-49CC-468A-8975-D507C930BC0C_1_105_c.jpg"
                    alt="Мийні пости з сучасним дизайном"
                    className="w-full h-52 object-cover rounded-xl"
                  />
                  <img
                    src="/images/solutions/car-washes/heroy-main-block.jpeg"
                    alt="Панорама автомийки самообслуговування"
                    className="col-span-2 w-full h-44 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '70%', label: 'EBITDA', desc: 'Чиста рентабельність бізнесу' },
              { number: '120+', label: 'Локацій', desc: 'В Україні та ЄС' },
              { number: '24/7', label: 'Робота', desc: 'Без персоналу' },
              { number: '€6.2K+', label: 'Від', desc: 'Вартість обладнання' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center">
                <div className="text-4xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-white font-medium mt-2">{stat.label}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About SamWash */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Хто такі <span className="text-cyan-400">SamWash</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">SamWash</strong> — український виробник обладнання для автомийок самообслуговування з штаб-квартирою у Львові. Компанія працює з <strong className="text-white">2013 року</strong> і є одним з лідерів ринку в Україні та країнах ЄС.
                </p>
                <p>
                  Унікальність SamWash полягає в повному циклі: компанія не просто продає обладнання, а сама експлуатує понад <strong className="text-white">120 власних локацій</strong>, що дозволяє постійно вдосконалювати технології на основі реального досвіду.
                </p>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Всі проєкти реалізуються з <strong className="text-white">обладнанням італійського виробництва</strong> та компонентами від світових лідерів: <strong className="text-white">Schneider Electric</strong>, <strong className="text-white">Omron</strong>, <strong className="text-white">Ebara</strong>.
                </p>
                <p>
                  Diwave розробила для SamWash повну IoT/SCADA екосистему <strong className="text-white">MySamWash</strong> для віддаленого управління, телеметрії, платежів та аналітики.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculation */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 text-center">
              💰 Скільки коштує відкрити автомийку самообслуговування?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Давайте розрахуємо вартість на прикладі мінімальної мийки з <strong className="text-white">3 мийних постів</strong>. Це базова комплектація для старту бізнесу.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Step 1 - Equipment */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔧</span>
                  <h3 className="text-white font-semibold">Обладнання</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>1 пост:</span>
                    <span className="text-white">€9,800-13,000</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-semibold border-t border-white/10 pt-2">
                    <span>3 пости:</span>
                    <span>€39,000</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2">
                    Італійське обладнання преміум. <strong className="text-white">Не економте!</strong>
                  </div>
                </div>
              </div>

              {/* Step 2 - Canopy */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏗️</span>
                  <h3 className="text-white font-semibold">Накриття</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>1 пост:</span>
                    <span className="text-white">€6,800-14,500</span>
                  </div>
                  <div className="flex justify-between text-cyan-400 font-semibold border-t border-white/10 pt-2">
                    <span>3 пости:</span>
                    <span>€43,500</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2">
                    6 варіантів дизайну. Ціна: Marchello Lite
                  </div>
                </div>
              </div>

              {/* Step 3 - Vacuum */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🧹</span>
                  <h3 className="text-white font-semibold">Пилосос</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">Двопостовий</div>
                  <div className="text-gray-300">Сенсорний екран 19"</div>
                  <div className="flex justify-between text-blue-400 font-semibold border-t border-white/10 pt-2">
                    <span>Всього:</span>
                    <span>€7,000</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2">
                    Ступінь захисту IP65
                  </div>
                </div>
              </div>

              {/* Step 4 - Terminal & Accessories */}
              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 backdrop-blur">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">💳</span>
                  <h3 className="text-white font-semibold">Термінал + доп</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Термінал:</span>
                    <span className="text-white">€7,000</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Аксесуари:</span>
                    <span className="text-white">€5,000</span>
                  </div>
                  <div className="flex justify-between text-purple-400 font-semibold border-t border-white/10 pt-2">
                    <span>Всього:</span>
                    <span>€12,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur mb-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Технічні вимоги на 1 мийний пост
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Електроенергія</div>
                  <div className="text-gray-300">6 кВт (з запасом)</div>
                  <div className="text-xs text-gray-400 mt-1">Трифазне підключення</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Водопостачання</div>
                  <div className="text-gray-300">15 л/хв (з запасом)</div>
                  <div className="text-xs text-gray-400 mt-1">+ каналізація</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Пилосос</div>
                  <div className="text-gray-300">6 кВт на 2 пости</div>
                  <div className="text-xs text-gray-400 mt-1">19" сенсорний екран</div>
                </div>
              </div>
            </div>

            {/* Premium Additional Equipment */}
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 backdrop-blur mb-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Преміум додаткове обладнання (+€50,000)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-cyan-400 font-semibold mb-2">🧹 Додаткові пилососи</div>
                  <div className="text-gray-300 text-xs">2-й двопостовий пилосос з розширеним функціоналом</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-cyan-400 font-semibold mb-2">✨ Хімчистка салонів</div>
                  <div className="text-gray-300 text-xs">Обладнання для професійної хімчистки інтер'єру авто</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-cyan-400 font-semibold mb-2">🍫 Торговельна зона</div>
                  <div className="text-gray-300 text-xs">Автомати з снеками, кавою, чаєм, алкоголем</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-cyan-400 font-semibold mb-2">🤖 Робот-мийка</div>
                  <div className="text-gray-300 text-xs">Повністю автоматична мийка без участі водія</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-400 text-center">
                * Додаткове обладнання значно збільшує дохід та окупність бізнесу
              </div>
            </div>

            {/* Total Equipment Price */}
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 backdrop-blur">
              <div className="text-center mb-6">
                <div className="text-gray-300 text-lg mb-2">💰 Вартість обладнання на 3 пости</div>
                <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-2">€101,500</div>
                <div className="text-gray-400 text-sm mb-1">тільки обладнання</div>
                <div className="text-emerald-400 text-sm">~4,060,000 грн</div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm text-gray-400 mb-2">Що входить:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>✓ Обладнання 3 пости:</span>
                      <span className="text-white font-medium">€39,000</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>✓ Накриття Marchello Lite:</span>
                      <span className="text-white font-medium">€43,500</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>✓ Пилосос (2 пости, IP65):</span>
                      <span className="text-white font-medium">€7,000</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>✓ Термінал оплати:</span>
                      <span className="text-white font-medium">€7,000</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>✓ Аксесуари:</span>
                      <span className="text-white font-medium">€5,000</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                  <div className="text-sm text-gray-400 mb-2">Додатково розраховується:</div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">+</span>
                      <span><strong className="text-white">Будівництво</strong> — після готового проєкту</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">+</span>
                      <span><strong className="text-white">Земельна ділянка</strong> — додається до загальної вартості</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">+</span>
                      <span><strong className="text-white">Преміум обладнання</strong> — хімчистка, снеки, робот-мийка (~€50K)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-sm text-gray-300">
                    <strong className="text-white">Важливо:</strong> Фінальна вартість розраховується індивідуально після огляду ділянки та вибору комплектації. Ціни можуть змінюватись залежно від курсу валют, локації та додаткових опцій. <strong className="text-white">Не економте на обладнанні</strong> — це те, що заробляє вам гроші!
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-amber-500 text-white font-medium hover:bg-amber-600 transition">
                  Отримати детальний розрахунок →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Examples */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            📸 Приклади реалізованих проєктів
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Понад <strong className="text-white">120 локацій</strong> по Україні та ЄС. Різні дизайни, конфігурації та розміри мийок — від компактних 3-постових до великих комплексів.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { src: '/images/solutions/car-washes/heroy-main-block.jpeg', alt: 'Автомийка SamWash з сучасним освітленням' },
              { src: '/images/industries/samwash/66D5DCD7-862F-4C47-BE60-E608374543E8_1_105_c.jpg', alt: 'Нічна панорама автомийки' },
              { src: '/images/industries/samwash/58893A62-49CC-468A-8975-D507C930BC0C_1_105_c.jpg', alt: 'Мийні пости з яскравим освітленням' },
              { src: '/images/solutions/car-washes/26138E0C-961F-4B85-865D-7A30D2EAEEF2_1_105_c.jpeg', alt: 'Мийний пост зблизька' },
              { src: '/images/solutions/car-washes/2F00D20A-A2AE-46A7-875B-EF2CDB18B66E_1_105_c.jpeg', alt: 'Нічна підсвітка автомийки' },
              { src: '/images/industries/samwash/13184412-0D70-4B8A-9311-A5CDBB5246CE_1_105_c.jpg', alt: 'Автомийка вдень' },
              { src: '/images/solutions/car-washes/58893A62-49CC-468A-8975-D507C930BC0C_1_105_c.jpeg', alt: 'Панорама автомийки' },
              { src: '/images/industries/samwash/B38D163F-478B-4466-9C73-408450CB075C_1_105_c.jpg', alt: 'Сучасний дизайн з LED' },
              { src: '/images/solutions/car-washes/9D0CF040-8563-4496-973D-017996A96567_1_105_c.jpeg', alt: 'Дизайн постів з підсвіткою' },
              { src: '/images/industries/samwash/E87C52A5-2C74-402F-9D19-99E909040399_1_105_c.jpg', alt: 'Великий мийний комплекс' },
              { src: '/images/industries/samwash/AE37BCB5-F6CA-40FA-BE1F-C73BE60EAE78_1_105_c.jpg', alt: 'Пости в роботі' },
              { src: '/images/industries/self-car-wash/21E9D965-8E84-4B6A-AB8E-C081A1769BD3_1_105_c.jpeg', alt: 'Мийка самообслуговування в ЄС' }
            ].map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400/20 to-fuchsia-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition"
            >
              📍 Знайти на карті
            </a>
            <a
              href="https://www.instagram.com/samwash_carwash/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition"
            >
              📸 Instagram @samwash_carwash
            </a>
          </div>
        </section>

        {/* Business Model */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Бізнес-модель: <span className="text-emerald-400">EBITDA 70%</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏗️',
                title: 'Виробництво обладнання',
                desc: 'SamWash сама виробляє та постачає повний комплекс обладнання для мийок самообслуговування італійського рівня якості'
              },
              {
                icon: '🏢',
                title: 'Будівництво "під ключ"',
                desc: 'Повний цикл від проєктування до запуску: будівництво мийних комплексів для інвесторів з гарантією 2 роки'
              },
              {
                icon: '🌐',
                title: 'Власна мережа',
                desc: 'Понад 120 власних локацій по Україні та ЄС. Реальний досвід експлуатації = постійне вдосконалення продукту'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Чому EBITDA досягає 70%?</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>✅ <strong className="text-white">Без персоналу:</strong> Повна автоматизація процесів, робота 24/7</li>
                  <li>✅ <strong className="text-white">Низькі витрати:</strong> Енергоефективне обладнання, оптимізація споживання води та електрики</li>
                  <li>✅ <strong className="text-white">Віддалене управління:</strong> MySamWash IoT платформа для контролю всіх локацій з телефону</li>
                  <li>✅ <strong className="text-white">Масштабованість:</strong> Одна система керує десятками локацій без додаткових витрат</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Технологічний стек від <span className="text-cyan-400">Diwave</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'IoT/SCADA MySamWash',
                features: [
                  'Телеметрія в реальному часі',
                  'Віддалена діагностика та управління',
                  'Автоматичні оповіщення про несправності',
                  'Енергоменеджмент та оптимізація'
                ]
              },
              {
                title: 'Платіжна система',
                features: [
                  'QR-платежі через додаток',
                  'Apple Pay / Google Pay',
                  'Банківські картки (безконтактні)',
                  'Готівка (опціонально)'
                ]
              },
              {
                title: 'CRM & Аналітика',
                features: [
                  'Звіти по виручці кожної локації',
                  'Аналіз відвідуваності та завантаження',
                  'Контроль SLA та uptim',
                  'Прогнозування та планування'
                ]
              }
            ].map((tech) => (
              <div key={tech.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-white font-semibold text-lg mb-4">{tech.title}</h3>
                <ul className="space-y-2">
                  {tech.features.map((feature) => (
                    <li key={feature} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 text-center">
            Пакети обладнання та ціни
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            6 варіантів дизайну автомийок від найбюджетнішого до преміум класу. Всі комплекти включають італійське обладнання, IoT систему MySamWash та 2 роки гарантії.
          </p>

          {/* Important Pricing Info */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur mb-12 max-w-4xl mx-auto">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Важлива інформація про ціни
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Обладнання:</strong> €9,800-13,000 за 1 мийний пост</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Накриття:</strong> €6,800-14,500 за 1 пост</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Пилосос:</strong> €7,000 (на 2 пости, IP65)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Термінал:</strong> €7,000 + аксесуари €5,000</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Будівництво</strong> розраховується після проєкту</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">•</span>
                  <span><strong className="text-white">Земля</strong> додається до вартості проєкту</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-300 text-center">
              Фінальна вартість розраховується індивідуально після огляду ділянки та вибору комплектації
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Smart',
                price: '€6,800',
                popular: false,
                badge: 'Найдоступніший',
                badgeColor: 'bg-gray-500/10 border-gray-500/20 text-gray-400',
                description: 'Накриття для економ-класу',
                features: [
                  'Базовий дизайн, функціональність',
                  'Італійське обладнання + Schneider Electric',
                  'Платіжний термінал (QR, NFC, карти)',
                  'IoT система MySamWash',
                  'LED освітлення',
                  'Система водопідготовки',
                  'Промисловий пилосос',
                  'Автохімія на старт',
                  '2 роки гарантії'
                ]
              },
              {
                name: 'Pixel',
                price: '€7,200',
                popular: false,
                badge: 'Популярний в ЄС',
                badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                description: 'Сучасний дизайн, популярний в Європі',
                features: [
                  'Сучасний пікселізований дизайн',
                  'Італійське обладнання преміум',
                  'Платіжна система + Apple/Google Pay',
                  'IoT/SCADA MySamWash Pro',
                  'Розумне LED освітлення',
                  'Система очищення води з рециркуляцією',
                  'Пилосос для сухого/вологого прибирання',
                  'Преміум автохімія',
                  '2 роки гарантії + підтримка'
                ]
              },
              {
                name: 'Marco Banner',
                price: '€7,700',
                popular: true,
                badge: 'Хіт продажів',
                badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
                description: 'Додатковий дохід від реклами',
                features: [
                  'Рекламні банери високої якості',
                  'Додатковий дохід від реклами',
                  'Італійське обладнання + брендинг',
                  'Повна платіжна система',
                  'MySamWash з модулем реклами',
                  'Яскраве LED освітлення з підсвіткою',
                  'Водоочистка + рециркуляція',
                  'Професійний пилосос',
                  '2 роки гарантії + маркетинг підтримка'
                ]
              },
              {
                name: 'Marko Glass',
                price: '€8,200',
                popular: false,
                badge: 'Преміум дизайн',
                badgeColor: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                description: 'Лаконічний скляний дизайн',
                features: [
                  'Скляні панелі, мінімалістичний стиль',
                  'Італійське обладнання топ-класу',
                  'Преміум платіжна система',
                  'MySamWash з розширеною аналітикою',
                  'Динамічне LED освітлення',
                  'Системи фільтрації та рециркуляції',
                  'Потужні промислові пилососи',
                  'Преміум хімія (Італія/Німеччина)',
                  '2 роки гарантії + VIP підтримка'
                ]
              },
              {
                name: 'Ufo',
                price: '€13,500',
                popular: false,
                badge: 'Унікальний',
                badgeColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
                description: 'Круглий каркас з нержавіючої сталі',
                features: [
                  'Унікальний круглий дизайн (нерж. сталь)',
                  'Італійське обладнання + кастомізація',
                  'Преміум платіжні рішення',
                  'MySamWash з AI аналітикою',
                  'Архітектурне LED освітлення',
                  'Промислові системи водоочистки',
                  'Професійні пилососи (2 шт)',
                  'Топова автохімія + запас',
                  '2 роки гарантії + персональний менеджер'
                ]
              },
              {
                name: 'Marchello Lite',
                price: '€14,500',
                popular: false,
                badge: 'Топ-сегмент',
                badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
                description: 'Повністю у нержавіючій сталі',
                features: [
                  'Повне покриття нержавіючою сталлю',
                  'Італійське обладнання ексклюзив',
                  'Платіжна система преміум + криптовалюти',
                  'MySamWash Enterprise з AI та Big Data',
                  'Розумне освітлення з адаптацією',
                  'Багатоступенева водоочистка',
                  'Преміум пилососи (3 шт)',
                  'Ексклюзивна автохімія + річний запас',
                  '3 роки гарантії + 24/7 підтримка'
                ]
              }
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border backdrop-blur p-6 relative ${
                  pkg.popular
                    ? 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 scale-105'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-sm font-semibold">
                    ⭐ Найпопулярніший
                  </div>
                )}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${pkg.badgeColor}`}>
                  {pkg.badge}
                </div>
                <h3 className="text-white font-bold text-2xl mb-1">{pkg.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`block text-center rounded-full px-4 py-2.5 font-medium transition ${
                    pkg.popular
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Замовити консультацію
                </a>
              </div>
            ))}
          </div>

          {/* Additional Options */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-white font-semibold text-2xl mb-6 text-center">
              Додаткові опції та послуги
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <span className="text-2xl">🏗️</span>
                  Будівництво
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Проєктна документація</li>
                  <li>• Будівництво під ключ</li>
                  <li>• Авторський нагляд</li>
                  <li>• Юридичний супровід</li>
                  <li>• Отримання дозволів</li>
                  <li>• Пуско-налагодження</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  Додаткове обладнання
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Додаткові мийні пости</li>
                  <li>• Системи відеоспостереження</li>
                  <li>• Опалення та кондиціонування</li>
                  <li>• Системи безпеки</li>
                  <li>• Розширені системи освітлення</li>
                  <li>• Станції детейлінгу</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  Фінансування
                </h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Лізинг до 3 років (10% річних)</li>
                  <li>• Розстрочка платежу</li>
                  <li>• Допомога в отриманні кредиту</li>
                  <li>• Гнучкі умови оплати</li>
                  <li>• Бізнес-план для інвесторів</li>
                  <li>• Консультації по ROI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Price Comparison Note */}
          <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div className="space-y-2">
                <h4 className="text-white font-semibold text-lg">Важлива інформація про ціни</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Всі ціни вказані за <strong className="text-white">1 мийний пост</strong> (типова мийка має 4-6 постів)</li>
                  <li>• Вартість <strong className="text-white">повної мийки під ключ</strong> (4 пости) від ~€30,000 до €70,000 залежно від пакету</li>
                  <li>• В Україні мінімальна вартість автомийки <strong className="text-white">від 1,100,000 грн</strong> (включаючи будівництво)</li>
                  <li>• Ціни можуть змінюватись залежно від курсу валют, локації, додаткових опцій</li>
                  <li>• Фінальна вартість розраховується індивідуально після огляду ділянки та вибору комплектації</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator with Real Numbers */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-12 backdrop-blur">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
              📊 Розрахуйте окупність вашої мийки
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Scenario 1 - Top Location */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 backdrop-blur">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">6-8 міс</div>
                  <div className="text-sm text-gray-400">окупність</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Виручка/міс:</span>
                    <span className="text-white">€20,000</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>EBITDA 70%:</span>
                    <span className="text-emerald-400 font-medium">€14,000</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                    Топова локація, висока завантаженість
                  </div>
                </div>
              </div>

              {/* Scenario 2 - Good Location */}
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 backdrop-blur">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">12-15 міс</div>
                  <div className="text-sm text-gray-400">окупність</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Виручка/міс:</span>
                    <span className="text-white">€10,000</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>EBITDA 70%:</span>
                    <span className="text-cyan-400 font-medium">€7,000</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                    Хороша локація, середній трафік
                  </div>
                </div>
              </div>

              {/* Scenario 3 - Average Location */}
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6 backdrop-blur">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">18-24 міс</div>
                  <div className="text-sm text-gray-400">окупність</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Виручка/міс:</span>
                    <span className="text-white">€6,000</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>EBITDA 70%:</span>
                    <span className="text-blue-400 font-medium">€4,200</span>
                  </div>
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                    Середня локація, помірний трафік
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold text-lg mb-4">Що включає бізнес-план?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 text-lg mt-0.5">✓</span>
                    <div className="text-gray-300">
                      <strong className="text-white">Аналіз локації</strong> — трафік, видимість, конкуренти
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 text-lg mt-0.5">✓</span>
                    <div className="text-gray-300">
                      <strong className="text-white">Прогноз виручки</strong> — на основі реальних даних з 120+ локацій
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 text-lg mt-0.5">✓</span>
                    <div className="text-gray-300">
                      <strong className="text-white">Розрахунок ROI</strong> — детальна окупність інвестицій
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 text-lg mt-0.5">✓</span>
                    <div className="text-gray-300">
                      <strong className="text-white">Оптимізація витрат</strong> — як збільшити прибутковість
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">EBITDA 70%</div>
                  <div className="text-white font-medium mb-1">Чиста рентабельність</div>
                  <div className="text-gray-400 text-sm">без персоналу, робота 24/7</div>
                </div>
                <div className="space-y-3 text-sm text-gray-300 mb-6">
                  <div>✓ Автоматизація всіх процесів</div>
                  <div>✓ Віддалений моніторинг MySamWash</div>
                  <div>✓ Енергоефективне обладнання</div>
                  <div>✓ Мінімальні операційні витрати</div>
                </div>
                <a
                  href="/contact"
                  className="block text-center rounded-full px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                >
                  Отримати бізнес-план
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Базується на реальних даних:</strong> Всі розрахунки окупності базуються на фактичній виручці з наших 120+ власних локацій в Україні та ЄС.
              </p>
            </div>
          </div>
        </section>

        {/* Real Cases with Revenue */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            💰 Реальні кейси та виручка
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Ми не просто продаємо обладнання — ми самі експлуатуємо понад <strong className="text-white">120 власних локацій</strong>. Ось реальні показники найкращих мийок у топових локаціях.
          </p>

          {/* Top Revenue Cases */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🏆</span>
                <h3 className="text-white font-semibold text-lg">Топова локація</h3>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-bold text-emerald-400 mb-1">€250,000+</div>
                <div className="text-sm text-gray-400">виручка на рік</div>
                <div className="text-xs text-emerald-400 mt-1">~10,000,000 грн</div>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>EBITDA 70%:</span>
                  <span className="text-emerald-400 font-semibold">€175,000/рік</span>
                </div>
                <div className="flex justify-between">
                  <span>На місяць:</span>
                  <span className="text-white">€20,800</span>
                </div>
                <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                  Київ, центральна локація, 6 постів
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">⭐</span>
                <h3 className="text-white font-semibold text-lg">Сильна локація</h3>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-bold text-cyan-400 mb-1">€150,000+</div>
                <div className="text-sm text-gray-400">виручка на рік</div>
                <div className="text-xs text-cyan-400 mt-1">~6,000,000 грн</div>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>EBITDA 70%:</span>
                  <span className="text-cyan-400 font-semibold">€105,000/рік</span>
                </div>
                <div className="flex justify-between">
                  <span>На місяць:</span>
                  <span className="text-white">€12,500</span>
                </div>
                <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                  Львів, спальний район, 4 пости
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">✨</span>
                <h3 className="text-white font-semibold text-lg">Середня локація</h3>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-bold text-blue-400 mb-1">€80,000+</div>
                <div className="text-sm text-gray-400">виручка на рік</div>
                <div className="text-xs text-blue-400 mt-1">~3,200,000 грн</div>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>EBITDA 70%:</span>
                  <span className="text-blue-400 font-semibold">€56,000/рік</span>
                </div>
                <div className="flex justify-between">
                  <span>На місяць:</span>
                  <span className="text-white">€6,600</span>
                </div>
                <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
                  Обласний центр, 3 пости
                </div>
              </div>
            </div>
          </div>

          {/* Key Success Factors */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur mb-12">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Що впливає на виручку?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Локація:</strong> трафік, видимість, доступність</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Кількість постів:</strong> 3-6 оптимально</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Якість обладнання:</strong> надійність = виручка</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Додаткові сервіси:</strong> пилососи, хімчистка, снеки</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Маркетинг:</strong> реклама та зручний додаток</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span><strong className="text-white">Обслуговування:</strong> чистота та технічна справність</span>
              </div>
            </div>
          </div>

          {/* Locations Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">🇺🇦 Україна</h3>
                <p className="text-gray-300 mb-4">
                  Понад <strong className="text-white">120 локацій</strong> по всій Україні: Київ, Львів, Одеса, Дніпро, Харків, Івано-Франківськ та інші міста. Найкращі мийки у топових локаціях заробляють <strong className="text-emerald-400">€250,000+ (10 млн грн) на рік</strong>.
                </p>
                <a
                  href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                >
                  📍 Знайти мийку на Google Maps →
                </a>
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">🇪🇺 Європа</h3>
                <p className="text-gray-300 mb-4">
                  Обладнання SamWash успішно працює в країнах Євросоюзу. Понад <strong className="text-white">500 станцій</strong> на базі італійських технологій відкрито в Європі за останні 5 років. Середня виручка в ЄС: <strong className="text-cyan-400">€100,000-300,000/рік</strong>.
                </p>
                <a
                  href="https://sam-wash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                >
                  🌍 Міжнародний сайт →
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-white font-semibold text-xl mb-4">📱 Мобільний додаток MySamWash</h3>
              <p className="text-gray-300 mb-4">
                Користувачі можуть оплачувати миття через зручний мобільний додаток <strong className="text-white">MySamWash</strong>: QR-код, геолокація найближчих мийок, історія платежів, бонуси та знижки.
              </p>
              <a
                href="https://app.samwash.ua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
              >
                Відкрити додаток →
              </a>
            </div>
          </div>
        </section>

        {/* Social Media & Contact */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Соціальні мережі та підтримка
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">📱 Соціальні мережі SamWash</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.tiktok.com/@samwash.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">🎵</span>
                    <div>
                      <div className="font-medium">TikTok</div>
                      <div className="text-sm text-gray-400">@samwash.official</div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@samwash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">📺</span>
                    <div>
                      <div className="font-medium">YouTube</div>
                      <div className="text-sm text-gray-400">@samwash</div>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/samwashcarwash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">👥</span>
                    <div>
                      <div className="font-medium">Facebook</div>
                      <div className="text-sm text-gray-400">@samwashcarwash</div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/samwash_carwash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">📸</span>
                    <div>
                      <div className="font-medium">Instagram</div>
                      <div className="text-sm text-gray-400">@samwash_carwash</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">💬 Зв'язок та підтримка</h3>
                <div className="space-y-3">
                  <a
                    href="https://t.me/+380975794930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-medium">Telegram</div>
                      <div className="text-sm text-gray-400">+380 97 579 49 30</div>
                    </div>
                  </a>
                  <a
                    href="viber://chat?number=%2B380975794930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">💜</span>
                    <div>
                      <div className="font-medium">Viber</div>
                      <div className="text-sm text-gray-400">+380 97 579 49 30</div>
                    </div>
                  </a>
                  <a
                    href="https://chat.whatsapp.com/K6WC6sOS5KACVz83hwV0lX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">💬</span>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-gray-400">Група підтримки</div>
                    </div>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-gray-300 hover:text-white"
                  >
                    <span className="text-2xl">🗺️</span>
                    <div>
                      <div className="font-medium">Google Business</div>
                      <div className="text-sm text-gray-400">Львів, вул. Кульпарківська 108</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-white font-semibold text-lg mb-4">🌐 Офіційні веб-ресурси</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-center text-gray-300 hover:text-white">
                  <div className="font-medium">samwash.ua</div>
                  <div className="text-xs text-gray-400 mt-1">Головний сайт</div>
                </a>
                <a href="https://app.samwash.ua" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-center text-gray-300 hover:text-white">
                  <div className="font-medium">app.samwash.ua</div>
                  <div className="text-xs text-gray-400 mt-1">Мобільний додаток</div>
                </a>
                <a href="https://sam-wash.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-center text-gray-300 hover:text-white">
                  <div className="font-medium">sam-wash.com</div>
                  <div className="text-xs text-gray-400 mt-1">Міжнародний</div>
                </a>
                <a href="https://pro.sam-wash.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition text-center text-gray-300 hover:text-white">
                  <div className="font-medium">pro.sam-wash.com</div>
                  <div className="text-xs text-gray-400 mt-1">Для бізнесу</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            Часті питання
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Яка рентабельність бізнесу автомийок самообслуговування SamWash?',
                a: 'Бізнес-модель SamWash забезпечує EBITDA до 70%. Це досягається за рахунок відсутності постійного персоналу, енергоефективних технологій, віддаленого управління через IoT/SCADA систему MySamWash та оптимізованих операційних витрат.'
              },
              {
                q: 'Що входить в рішення автомийки під ключ від SamWash?',
                a: 'Комплексне рішення включає: обладнання італійського виробництва з компонентами від Schneider Electric, Omron, Ebara; систему IoT/SCADA для віддаленого управління; QR-платежі та безконтактні платіжні системи; телеметрію в реальному часі; CRM та аналітику; проєктну документацію; авторський нагляд; 2 роки гарантії та технічну підтримку.'
              },
              {
                q: 'Скільки коштує відкрити автомийку самообслуговування?',
                a: 'Вартість одного мийного поста варіюється від €6,200 до €14,000 залежно від конфігурації та дизайну. SamWash пропонує 6 різних варіантів дизайну та можливість лізингу під 10% річних до 3 років.'
              },
              {
                q: 'Чи потрібен персонал для роботи автомийки SamWash?',
                a: 'Ні, автомийки SamWash працюють в режимі повного самообслуговування 24/7 без постійного персоналу. Всі процеси автоматизовані, управління та моніторинг здійснюються віддалено через систему MySamWash.'
              },
              {
                q: 'Які технології використовує система MySamWash?',
                a: 'MySamWash - це хмарна IoT/SCADA платформа для віддаленого управління мережами автомийок. Система забезпечує телеметрію в реальному часі, діагностику обладнання, контроль платежів, енергоменеджмент, CRM та детальну аналітику по кожній локації.'
              }
            ].map((faq, i) => (
              <details key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden group">
                <summary className="p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-12 backdrop-blur text-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Готові почати бізнес з <span className="text-cyan-400">EBITDA 70%</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Diwave допоможе реалізувати ваш проєкт автомийки самообслуговування під ключ: від обладнання до IoT систем управління.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition">
                Замовити консультацію
              </a>
              <a href="https://samwash.ua" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition">
                Сайт SamWash →
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition">
                Дивитись інші кейси
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/solutions" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">← До каталогу Рішень</a>
            <a href="/industries" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Індустрії</a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">Контакти</a>
          </div>
        </section>
      </main>
    </>
  );
}
