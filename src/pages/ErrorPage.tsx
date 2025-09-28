import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import SmartImage from '@/components/ui/SmartImage';

type Props = { locale: 'uk' | 'en' };

const ErrorPage: React.FC<Props> = ({ locale }) => {
  const error = useRouteError();
  let status = 500;
  let message = '';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.statusText || '';
  } else if (error instanceof Error) {
    message = error.message;
  }

  const is404 = status === 404;
  const prefix = locale === 'en' ? '/en' : '';

  const dict = {
    uk: {
      overline: is404 ? '404 NOT FOUND' : '500 SERVER ERROR',
      title: is404 ? 'Сторінку не знайдено' : 'Сталася помилка',
      subtitle: is404
        ? 'Здається, ви перейшли за некоректним посиланням або сторінка була переміщена.'
        : 'Ми вже працюємо над тим, щоб усе запрацювало як слід.',
      home: 'На головну',
      solutions: 'Рішення',
      contact: 'Звʼязатись'
    },
    en: {
      overline: is404 ? '404 NOT FOUND' : '500 SERVER ERROR',
      title: is404 ? 'Page not found' : 'Something went wrong',
      subtitle: is404
        ? 'The link may be incorrect or the page was moved.'
        : 'We are working to fix this.',
      home: 'Go home',
      solutions: 'Solutions',
      contact: 'Contact'
    }
  }[locale];

  return (
    <main className="relative min-h-[75vh] overflow-hidden">
      {/* Subtle background image + iOS-like gradients */}
      <SmartImage
        srcFolder="/images/home"
        alt="Background"
        asBackground
        className="absolute inset-0 opacity-25"
      />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_520px_at_10%_-10%,rgba(34,211,238,0.22),transparent),radial-gradient(900px_480px_at_90%_0%,rgba(168,85,247,0.18),transparent)]" />
      <div className="absolute inset-0 backdrop-blur-[1.5px]" aria-hidden />

      <section className="relative mx-auto max-w-3xl px-6 py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <div className="text-xs tracking-widest text-gray-400">
            {dict.overline}
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
            {dict.title}
          </h1>
          <p className="mt-3 text-gray-300">
            {dict.subtitle}
            {message ? <span className="block opacity-70 mt-2">{message}</span> : null}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${prefix}/`}
              className="inline-flex items-center rounded-md px-5 py-2 bg-white text-black font-semibold hover:bg-white/90 transition"
            >
              {dict.home}
            </a>
            <a
              href={`${prefix}/solutions`}
              className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition"
            >
              {dict.solutions}
            </a>
            <a
              href={`${prefix}/contact`}
              className="inline-flex items-center rounded-md px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition"
            >
              {dict.contact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
