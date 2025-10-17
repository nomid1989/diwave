import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

export default function AreasCodeProject() {
  const title = 'AreasCode — Custom Software Development | Diwave Solutions';
  const description = 'Співпраця з AreasCode у розробці кастомного програмного забезпечення. Digitalization strategy, бізнес-автоматизація, MVP прототипування.';
  const url = `${baseUrl}/projects/areascode`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        locale="uk"
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/projects/areascode` },
          { hrefLang: 'en', href: `${baseUrl}/en/projects/areascode` },
          { hrefLang: 'x-default', href: `${baseUrl}/projects/areascode` }
        ]}
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.25),transparent)]" />
      </div>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/images/AreAsCode/Areas%20Logo/Areas%20Logo/Areas_Logo_Red_Thin_152.png"
              alt="AreasCode Logo"
              className="h-12 w-auto"
              decoding="async"
              loading="lazy"
              fetchpriority="low"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AreasCode — Custom Software Development Partnership</h1>
          <p className="text-xl text-gray-300 mb-8">
            Стратегічне партнерство у розробці складних кастомних рішень для Healthcare, Energy, Industry 4.0 та Logistics
          </p>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Про Компанію</h2>
            <p className="text-gray-300 mb-6">
              AreasCode — компанія зі створення кастомного програмного забезпечення та цифрової стратегії з офісами
              в Old Bridge, NJ (США) та Таллінні (Естонія). Diwave співпрацює з AreasCode у реалізації складних проєктів.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Експертиза Партнерства</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✓ Custom Software Development (Web & Mobile)</li>
              <li>✓ Digitalization Strategy & Consulting</li>
              <li>✓ Software Architecture & MVP Prototyping</li>
              <li>✓ Business Process Automation</li>
              <li>✓ UI/UX Design & Testing/QA</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Індустрії</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Healthcare</span>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Energy</span>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Industry 4.0</span>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Logistics</span>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Manufacturing</span>
              </div>
              <div className="p-3 rounded-lg border border-white/10 bg-white/5">
                <span className="text-cyan-400 font-semibold">Property Tech</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Технічний Стек</h3>
              <p className="text-gray-300 text-sm mb-4">
                Full-cycle розробка з використанням перевірених технологій та підходів
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Web Development</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Mobile Apps</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">Cloud</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">DevOps</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Ключові Переваги</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Досвід у strategy, growth, tech processes</li>
                <li>• Два офіси: США та Європа</li>
                <li>• Повний цикл розробки від ідеї до підтримки</li>
                <li>• Project Management та Code Review</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Результати Співпраці</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Реалізація складних enterprise-проєктів</li>
              <li>✓ Цифрова трансформація бізнес-процесів</li>
              <li>✓ Створення масштабованих архітектурних рішень</li>
              <li>✓ Впровадження best practices у розробці</li>
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
