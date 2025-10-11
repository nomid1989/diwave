import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function LassoAiProject() {
  const title = 'Lasso.ai — Email SaaS Platform | Diwave Solutions';
  const description = 'Високо навантажена платформа SaaS для email-розсилок. Досвід створення комунікаційних систем.';
  const url = `${baseUrl}/projects/lasso-ai`;

  return (
    <>
      <SEO title={title} description={description} url={url} locale="uk" />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Lasso.ai — Платформа SaaS для Email-розсилок</h1>
          <p className="text-xl text-gray-300 mb-8">
            Участь у програмуванні високо навантаженого сервісу для масових email-кампаній
          </p>
          
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Експертиза</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Створення високо навантажених платформ</li>
              <li>✓ Розуміння механізмів email-маркетингу</li>
              <li>✓ SaaS архітектура та масштабування</li>
              <li>✓ Системи черг та обробки великих об'ємів даних</li>
            </ul>

            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold mb-2">Технології</h3>
              <p className="text-gray-300 text-sm">SaaS, Email Marketing, High-load, Queue Systems, Real-time Analytics</p>
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
