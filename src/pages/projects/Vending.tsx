import React from 'react';
import SEO from '@/components/SEO';
import SmartImage from '@/components/ui/SmartImage';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function VendingProject() {
  const title = 'Двопостовий пилосос SamWash: промислове обладнання для автомийок | Diwave';
  const description =
    'Потужний двопостовий пилосос з сенсорним екраном, 3 кВт, ступінь захисту IP65. 10 років служби турбіни. Розробка та виробництво SamWash.';
  const url = `${baseUrl}/projects/vending`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Двопостовий пилосос SamWash',
      description:
        'Промисловий пилосос для автомийок самообслуговування з сенсорним екраном 19", потужність 3 кВт, турбіна 10,000 год',
      brand: { '@type': 'Brand', name: 'SamWash' },
      manufacturer: { '@type': 'Organization', name: 'SamWash / Diwave Solutions', url: baseUrl },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: '7000',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
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
        image={`${baseUrl}/images/projects/vending/cover.jpg`}
        locale="uk"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
                <span>🏭</span>
                Власне виробництво SamWash
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Двопостовий пилосос <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SamWash</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Промислове обладнання з сенсорним екраном 19", потужністю 3 кВт та терміном служби турбіни <strong className="text-white">10 років</strong>. Розробка від ідеї до впровадження — 2 роки.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4 backdrop-blur">
                  <div className="text-3xl font-bold text-cyan-400">3 кВт</div>
                  <div className="text-sm text-gray-300">Потужність</div>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur">
                  <div className="text-3xl font-bold text-emerald-400">10 років</div>
                  <div className="text-sm text-gray-300">Служби турбіни</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://samwash.ua/vacuume-for-car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition shadow-lg shadow-cyan-500/30"
                >
                  Детальніше на samwash.ua
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@samwash/shorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition backdrop-blur"
                >
                  <span>📺</span>
                  YouTube
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-blue-400/20 to-purple-400/30 blur-3xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm shadow-2xl">
                <img
                  src="/images/solutions/self-vacuum-cleaner/32FA9911-4DA5-47EB-AB4C-C84D9893B96B_1_105_c.jpeg"
                  alt="Двопостовий пилосос SamWash"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '3 кВт', label: 'Потужність', desc: '3 фази, 380В' },
              { number: '10,000 год', label: 'Турбіна', desc: 'або 10 років служби' },
              { number: '385 кг', label: 'Вага', desc: 'Промислова конструкція' },
              { number: '2 роки', label: 'Розробка', desc: 'Від ідеї до впровадження' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center">
                <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-white font-medium mt-2">{stat.label}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Product */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
              Про <span className="text-cyan-400">пилосос SamWash</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Двопостовий пилосос SamWash</strong> — це результат кропіткої роботи нашої команди. Тривалість розробки від моменту ідеї до впровадження склав <strong className="text-white">два роки</strong>.
                </p>
                <p>
                  Всі передові технології впроваджені в цьому пилососі. Корпус виконаний з <strong className="text-white">нержавіючої сталі AI 304</strong>, що гарантує довговічність та стійкість до зовнішніх факторів.
                </p>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Промисловий контролер <strong className="text-white">HP</strong> забезпечує надійну роботу обладнання. Подібні пилососи знаходяться в експлуатації по всій мережі автомийок SamWash вже <strong className="text-white">10 років</strong>.
                </p>
                <p>
                  Вартість двопостового пилососа: <strong className="text-emerald-400">€7,000</strong> (~280,000 грн)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Client Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            👤 Для клієнта
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Touch Screen */}
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📱</span>
                <h3 className="text-white font-semibold text-lg">Сенсорний екран 19"</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                <strong className="text-cyan-400">Дефолтні програми:</strong>
              </p>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Пилосос</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Обдув під тиском</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Чорніння гуми та пластику</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 italic">
                * Можна додати інші програми або змінити комплектацію
              </p>
            </div>

            {/* Payment Systems */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💳</span>
                <h3 className="text-white font-semibold text-lg">Системи оплати</h3>
              </div>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">▸</span>
                  <span>Жетоноприймач</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">▸</span>
                  <span>Монетоприймач</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">▸</span>
                  <span>Сканер карти лояльності</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">▸</span>
                  <span>Безконтактна оплата NFC, Apple/Google Pay</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">▸</span>
                  <span>QR-код</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-4 italic">
                * Комплектація та ціна можуть бути змінені
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Side Panels */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔫</span>
                <h3 className="text-white font-semibold">Бічні панелі</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <strong className="text-white">Пістолет #1:</strong> Обдув повітрям під тиском
                </div>
                <div>
                  <strong className="text-white">Пістолет #2:</strong> Чорніння шин — надає вишуканого вигляду
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛡️</span>
                <h3 className="text-white font-semibold">Безпека</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <strong className="text-white">Аварійна зупинка</strong> — кнопка для безпечного користування
                </div>
                <div>
                  <strong className="text-white">Бокс для сміття</strong> — на передній панелі для зручності
                </div>
              </div>
            </div>

            {/* Holder */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📏</span>
                <h3 className="text-white font-semibold">Холдер 3 метри</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>Запобігає попаданню води та створенню болота у фільтрі</div>
                <div>Закінчується пружиною для збільшення терміну експлуатації рукава</div>
              </div>
            </div>
          </div>
        </section>

        {/* For Owner Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            💼 Для власника
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-white font-semibold text-lg">Моніторинг та аналітика</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <p className="mb-4">
                  Всі дані про використання пилососа відображаються у додатку на телефоні <strong className="text-white">Android, iOS</strong> та на <strong className="text-white">сайті</strong>:
                </p>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Час напрацьованих годин</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Скільки коштів приніс за добу</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Детальна статистика використання</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Віддалене управління та налаштування</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚙️</span>
                <h3 className="text-white font-semibold text-lg">Технічна досконалість</h3>
              </div>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">▸</span>
                  <span><strong className="text-white">Корпус:</strong> Нержавіюча сталь AI 304</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">▸</span>
                  <span><strong className="text-white">Контролер:</strong> Промисловий HP</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">▸</span>
                  <span><strong className="text-white">Баки-пилозбірники:</strong> 2 шт, нержавіюча сталь AI 304</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">▸</span>
                  <span><strong className="text-white">Фільтр:</strong> Рекомендована заміна раз на півроку</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power Unit */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-12 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
              ⚡ Силова установка
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-cyan-400 font-semibold mb-2">2 силові установки</div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>• Живлення: <strong className="text-white">3 фази, 380 вольт</strong></div>
                    <div>• Потужність: <strong className="text-white">3 кВт кожна</strong></div>
                    <div>• Охолодження: жалюзі для відведення гарячого повітря</div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-emerald-400 font-semibold mb-2">Вакуумна турбіна</div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>• Термін експлуатації: <strong className="text-white">10,000 годин</strong></div>
                    <div>• Або <strong className="text-white">10 років</strong> активного використання</div>
                    <div>• Створює <strong className="text-white">високий вакуум</strong></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-purple-400 font-semibold mb-2">Характеристики</div>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Загальна вага:</span>
                      <span className="text-white font-medium">385 кг</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Захист:</span>
                      <span className="text-white font-medium">IP65</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Кількість постів:</span>
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Екран:</span>
                      <span className="text-white font-medium">19" тачскрін</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="text-amber-400 font-semibold mb-2">💰 Вартість</div>
                  <div className="text-center py-2">
                    <div className="text-3xl font-bold text-white">€7,000</div>
                    <div className="text-sm text-gray-400 mt-1">~280,000 грн</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            💡 Рекомендації при покупці
          </h2>
          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8 md:p-12 backdrop-blur">
            <p className="text-gray-300 mb-6">
              На що звернути увагу при покупці пилососа для мийок самообслуговування:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Силова установка</div>
                    <div className="text-gray-300 text-sm">
                      Повинна живитись <strong className="text-white">трьома фазами</strong> і мати потужність <strong className="text-white">3 кіловати</strong>. Це гарантує надійність промислового користування.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Висота холдера</div>
                    <div className="text-gray-300 text-sm">
                      Холдери з висотою <strong className="text-white">менше півтора метра</strong> завжди будуть мати мокрі фільтра та болото в пилозбірнику. Оптимально — <strong className="text-white">3 метри</strong>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Уникайте побутових</div>
                    <div className="text-gray-300 text-sm">
                      Пилосос з <strong className="text-red-400">1 фазою і 220 вольт</strong> та колекторними двигунами не створює достатнього вакууму. Термін експлуатації побутового двигуна — <strong className="text-red-400">лише пів року</strong>.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <div className="text-white font-semibold mb-1">Пластмасовий корпус</div>
                    <div className="text-gray-300 text-sm">
                      Силова установка (турбіни) має бути виготовлена з <strong className="text-white">металу</strong>, ні в якому разі не з пластмаси. Пластмасовий корпус — характерна риса <strong className="text-red-400">побутових пилососів</strong>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-300 text-lg">
                Ставши власником пилососа SamWash, ви переконаєтесь в <strong className="text-white">якості і надійності</strong> нашого обладнання. Подібні пилососи працюють по всій мережі автомийок SamWash вже <strong className="text-emerald-400">10 років</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Results / Why Choose */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            🏆 Чому обирають SamWash?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '⏱️',
                title: '10 років служби',
                desc: 'Турбіна працює 10,000 годин або 10 років активного використання'
              },
              {
                icon: '🔧',
                title: 'Промислова якість',
                desc: 'Нержавіюча сталь AI 304, промисловий контролер HP, 3 фази 380В'
              },
              {
                icon: '📱',
                title: 'IoT моніторинг',
                desc: 'Відстеження роботи, виручки та стану обладнання через додаток'
              },
              {
                icon: '🛡️',
                title: 'IP65 захист',
                desc: 'Повний захист від пилу та водяних струменів'
              },
              {
                icon: '💳',
                title: 'Гнучка оплата',
                desc: 'Жетони, монети, картки лояльності з бонусами'
              },
              {
                icon: '✅',
                title: 'Перевірено часом',
                desc: 'У експлуатації на 120+ локаціях SamWash вже 10 років'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8 text-center">
            📸 Фото пилососа
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/0D836EDC-DDF3-49DC-A654-BC4BB803C72C_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/105DEE60-D221-4830-8E0C-373A99548764_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/22B1B692-DB4B-41CB-9738-DFD3507F6708_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/2E82D060-D258-42B7-AB2A-9508D20FF771_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/32FA9911-4DA5-47EB-AB4C-C84D9893B96B_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/69388334-71AF-43DB-9DE1-6DC3EE5E93E4_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/6E3ABC39-111F-4815-A5D9-D76EB69E3D76_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/6F6E356D-C461-4940-A259-6E0313BFF143_4_5005_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/932826DD-75BE-4583-8EB9-24A2F6C2BEFB_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/A590E1BB-BF72-42CC-BE35-57983CA73528_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/B132E3BC-36FF-491F-8AC2-D3E5C511B5FA_4_5005_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/images/solutions/self-vacuum-cleaner/DA0E0B29-B0D3-4439-9127-3BD05CE88349_1_105_c.jpeg"
                alt="Пилосос SamWash"
                className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 md:p-12 backdrop-blur text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Готові замовити пилосос <span className="text-cyan-400">SamWash</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Зв'яжіться з нами для детальної консультації та розрахунку вартості з доставкою та встановленням.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
              >
                Замовити консультацію
              </a>
              <a
                href="https://samwash.ua/vacuume-for-car"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
              >
                samwash.ua/vacuume-for-car →
              </a>
              <a
                href="/solutions/car-washes"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/30 text-white hover:bg-white/10 transition"
              >
                Автомийки самообслуговування
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-center gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              ← До каталогу Проєктів
            </a>
            <a href="/solutions/car-washes" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              Автомийки самообслуговування
            </a>
            <a href="/industries/automotive" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
              Індустрія Automotive
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
