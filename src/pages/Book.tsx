import React from 'react';
import SEO from '@/components/SEO';

const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;
const bookingUrl = (import.meta.env.VITE_BOOKING_URL as string | undefined) || '';

type Props = { locale?: 'uk' | 'en' };

const Book: React.FC<Props> = ({ locale = 'uk' }) => {
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/book`;
  const hasBooking = typeof bookingUrl === 'string' && bookingUrl.length > 5;

  return (
    <>
      <SEO
        title={locale === 'en' ? 'Book a call — Diwave' : 'Запис у календар — Diwave'}
        description={locale === 'en' ? 'Pick a time that works for you.' : 'Оберіть зручний для вас час.'}
        url={url}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'ScheduleAction',
          name: locale === 'en' ? 'Book a call' : 'Запис у календар',
          url
        }]}
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white text-center">
          {locale === 'en' ? 'Book a call' : 'Запис у календар'}
        </h1>
        {!hasBooking ? (
          <div className="mt-6 text-gray-300 text-center">
            <p>
              {locale === 'en'
                ? 'Booking link is not configured yet.'
                : 'Посилання для запису поки що не налаштовано.'}
            </p>
            <p className="mt-2 text-sm opacity-80">
              {locale === 'en'
                ? 'Set VITE_BOOKING_URL in .env to a Google Calendar Appointments or Calendly link.'
                : 'Вкажіть VITE_BOOKING_URL у .env як посилання Google Calendar Appointments або Calendly.'}
            </p>
          </div>
        ) : (
          <div className="mt-8">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
              <iframe
                src={bookingUrl}
                title="Booking"
                className="w-full h-[70vh]"
                loading="lazy"
              />
            </div>
            <div className="text-center mt-4">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md px-5 py-2 border border-white/20 text-white hover:bg-white/10 transition">
                {locale === 'en' ? 'Open in new tab' : 'Відкрити в новій вкладці'}
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Book;
