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

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <a href="/projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/10">
            ← До каталогу Проєктів
          </a>
        </section>
      </main>
    </>
  );
}
