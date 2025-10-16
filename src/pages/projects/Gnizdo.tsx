import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function GnizdoProject() {
  const title = 'Асоціація Пілотів Дронів GNIZDO | Diwave Solutions';
  const description = 'Веб-платформа для спортивної асоціації пілотів дронів. Спільнота, спорт, розробники, інвестори.';
  const url = `${baseUrl}/projects/gnizdo`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Асоціація Пілотів Дронів GNIZDO</h1>
          <p className="text-xl text-gray-300 mb-8">
            Цифрова екосистема для нішевої спільноти пілотів дронів
          </p>
          
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Про проєкт</h2>
            <p className="text-gray-300 mb-4">
              Створення веб-сайту для Спортивної асоціації пілотів дронів «Гніздо» як початок розбудови великої мережі платформ для спільноти.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Платформа для спортивних змагань</li>
              <li>✓ Об'єднання розробників та інвесторів</li>
              <li>✓ База для розширення мережі</li>
              <li>✓ Цифрова екосистема спільноти</li>
            </ul>
          </div>
        </section>

        {/* Team Photos Gallery */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Команда Гніздо (UAPD)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/team-work.jpeg" alt="Gnizdo Team Work" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/team-meeting.jpeg" alt="Gnizdo Team Meeting" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/fpv-team-work.jpeg" alt="FPV Team Work" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/fpv-chilling.jpeg" alt="FPV Team Chilling" className="w-full h-64 object-cover" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 text-center">Пілоти та розробники</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur text-center p-4">
              <img src="/images/gnizdo-team/dmytro-kravets.jpg" alt="Dmytro Kravets" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
              <p className="text-white font-semibold">Дмитро Кравець</p>
              <p className="text-cyan-300 text-sm">Організатор & CTO</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur text-center p-4">
              <img src="/images/gnizdo-team/alex-sasin.jpeg" alt="Alex Sasin" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
              <p className="text-white font-semibold">Олександр Сасін</p>
              <p className="text-cyan-300 text-sm">Пілот & Тренер</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur text-center p-4">
              <img src="/images/gnizdo-team/oleksandr-mazur.jpeg" alt="Oleksandr Mazur" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
              <p className="text-white font-semibold">Олександр Мазур</p>
              <p className="text-cyan-300 text-sm">Пілот FPV</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur text-center p-4">
              <img src="/images/gnizdo-team/team-vader.jpeg" alt="Vader" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
              <p className="text-white font-semibold">Vader</p>
              <p className="text-cyan-300 text-sm">Freestyle Pilot</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur text-center p-4">
              <img src="/images/gnizdo-team/olexiy-samytov.jpeg" alt="Olexiy Samytov" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
              <p className="text-white font-semibold">Олексій Самітов</p>
              <p className="text-cyan-300 text-sm">Розробник</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-6 text-center">FPV Розробка та Тестування</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/fpv-crafting.jpeg" alt="FPV Crafting" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/fpv-build.26.39.jpeg" alt="FPV Build" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/fpv-11.jpeg" alt="FPV Racing" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src="/images/gnizdo-team/dji-mavic-4.jpeg" alt="DJI Mavic" className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
            ← До каталогу Проєктів
          </a>
        </section>
      </main>
    </>
  );
}
