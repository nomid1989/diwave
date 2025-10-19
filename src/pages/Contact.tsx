import React from 'react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import SmartImage from '@/components/ui/SmartImage';

type Props = { locale: 'uk' | 'en' };
const baseUrl = (import.meta.env.VITE_SITE_URL as string) || window.location.origin;

const Contact: React.FC<Props> = ({ locale }) => {
  const url = `${baseUrl}${locale === 'en' ? '/en' : ''}/contact`;
  return (
    <>
      <SEO
        title={locale === 'en' ? 'Contact Diwave — Get in Touch' : 'Контакти Diwave — Зв\'яжіться з нами'}
        description={locale === 'en'
          ? 'Contact Diwave for IoT solutions, hardware integration, AI automation, e-commerce, car washes, vending machines, drones. We combine hardware, software, and analytics. Located in Lviv, Ukraine and EU.'
          : 'Контакти Diwave для IoT рішень, інтеграції обладнання, автоматизації з AI, e-commerce, автомийок, вендингових автоматів, дронів. Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику. Офіс у Львові, Україна та ЄС.'
        }
        url={url}
        image={`${baseUrl}/images/contacts/1D55D514-B7F2-4D0E-BAD2-65604AA99AF2_1_105_c.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/contact` },
          { hrefLang: 'en', href: `${baseUrl}/en/contact` },
          { hrefLang: 'x-default', href: `${baseUrl}/contact` }
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: locale === 'en' ? 'Contact — Diwave' : 'Контакти — Diwave',
            description: locale === 'en'
              ? 'Contact page for Diwave - IoT solutions, hardware, AI automation'
              : 'Сторінка контактів Diwave - IoT рішення, обладнання, AI автоматизація',
            url,
            inLanguage: locale
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Diwave',
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+380505923772',
              contactType: 'customer service',
              email: 'info@diwave.company',
              areaServed: ['UA', 'EU'],
              availableLanguage: ['Ukrainian', 'English']
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'вул. Винниченка 30',
              addressLocality: 'Львів',
              addressCountry: 'UA'
            },
            sameAs: [
              'https://www.facebook.com/DiWave.company',
              'https://www.instagram.com/diwave.company/',
              'https://www.youtube.com/@DigitalWaveAI'
            ],
            founder: {
              '@type': 'Person',
              name: 'Dmytro Kravets',
              jobTitle: 'Founder & CEO'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: locale === 'en' ? 'Home' : 'Головна', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
              { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'Contact' : 'Контакти', item: url }
            ]
          }
        ]}
      />
      <section className="contact-page-section relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419] dark:from-[#0a0f1c] dark:via-[#1a1f3a] dark:to-[#0f1419] light:from-white light:via-gray-50 light:to-blue-50/30">
        {/* Gemini AI-style animated gradient mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/20 light:bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/15 dark:bg-cyan-500/15 light:bg-cyan-400/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}} />
        </div>
        {/* iOS 26 grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)', backgroundSize: '48px 48px'}} aria-hidden />
        <div className="mx-auto max-w-5xl px-6 py-16 relative">
          {/* Mercedes-Benz inspired triple diamond header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg className="w-8 h-8 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 12l4 10 4-10z" opacity="0.6" />
            </svg>
            <svg className="w-10 h-10 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 12l4 10 4-10z" />
            </svg>
            <svg className="w-8 h-8 text-cyan-400 dark:text-cyan-400 light:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 12l4 10 4-10z" opacity="0.6" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 light:from-blue-600 light:via-indigo-600 light:to-purple-600 bg-clip-text text-transparent">
            {locale === 'en' ? 'Contact Us' : 'Контакти'}
          </h1>
          <p className="text-center text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Get in touch with Diwave. We combine hardware, software, and analytics to automate your business.'
              : 'Зв\'яжіться з Diwave. Ми поєднуємо апаратні рішення, ПЗ та аналітику для автоматизації вашого бізнесу.'
            }
          </p>

          {/* Main contact card - iOS 26 ultra glassmorphism */}
          <div className="relative rounded-3xl border border-white/10 dark:border-white/10 light:border-gray-200/60 backdrop-blur-3xl overflow-hidden shadow-2xl mb-8">
            {/* Ultra transparent iOS 26 background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] dark:from-white/[0.05] dark:via-white/[0.02] dark:to-white/[0.05] light:from-white/95 light:via-white/90 light:to-white/95 backdrop-saturate-[200%]" />

            {/* Gemini-style mesh gradient overlay */}
            <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-transparent blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/30 to-transparent blur-2xl" />
            </div>

            <div className="relative p-8 md:p-10">
              {/* Top section with photo and basic info */}
              <div className="grid md:grid-cols-5 gap-8 mb-10">
                {/* Photo */}
                <div className="md:col-span-2">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 dark:border-white/20 light:border-blue-200 shadow-xl group">
                    <SmartImage
                      sources={["/images/team/dmytro.jpg"]}
                      alt="Dmytro Kravets — Founder, Diwave"
                      className="w-full aspect-[4/3]"
                      sizes="(min-width:768px) 40vw, 100vw"
                      imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h2 className="text-white dark:text-white light:text-gray-900 font-bold text-3xl mb-2">
                      Dmytro Kravets
                    </h2>
                    <p className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-semibold text-lg mb-4">
                      {locale === 'en' ? 'Founder & CTO, Diwave' : 'Засновник і CTO, Diwave'}
                    </p>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-base leading-relaxed">
                    {locale === 'en'
                      ? 'We combine hardware solutions, software, and analytics: car washes, vending machines, drones, e-commerce, payments, loyalty programs, and energy. We automate processes with AI to make businesses work more efficiently.'
                      : 'Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки, вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо процеси за допомогою AI, щоб бізнес працював ефективніше.'
                    }
                  </p>
                </div>
              </div>

              {/* Contact methods in 2 columns */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left column - Contact info */}
                <div className="space-y-3">
                  <h3 className="text-white dark:text-white light:text-gray-900 font-bold text-xl mb-4">
                    {locale === 'en' ? 'Contact Info' : 'Контактна інформація'}
                  </h3>
                  <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+380505923772" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">+380 50 592 3772</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@diwave.company" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">info@diwave.company</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">/in/dmytrokravets</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                    </svg>
                    <a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">/freelancers/stevark</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-orange-400 dark:text-orange-400 light:text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <a href="https://clutch.co/profile/diwave" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-white light:hover:text-blue-600 text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-medium">Clutch Reviews</a>
                  </li>

                  {/* Social Profiles */}
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <a href="https://www.facebook.com/DiWave.company" target="_blank" rel="noopener noreferrer" className="hover:text-white text-blue-300 font-medium" aria-label={locale === 'en' ? 'Facebook — Diwave' : 'Facebook — Diwave'}>Facebook</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <a href="https://www.instagram.com/diwave.company/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-pink-300 font-medium" aria-label={locale === 'en' ? 'Instagram — Diwave' : 'Instagram — Diwave'}>Instagram</a>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <a href="https://www.youtube.com/@DigitalWaveAI" target="_blank" rel="noopener noreferrer" className="hover:text-white text-red-300 font-medium" aria-label={locale === 'en' ? 'YouTube — DigitalWaveAI' : 'YouTube — DigitalWaveAI'}>YouTube</a>
                  </li>

                  <li className="flex items-center gap-3 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">Ukraine & EU</span>
                  </li>
                </ul>
                </div>

                {/* Right column - Messengers + Social */}
                <div className="space-y-4">
                  <h3 className="text-white dark:text-white light:text-gray-900 font-bold text-xl mb-4">
                    {locale === 'en' ? 'Messengers' : 'Месенджери'}
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a href="tg://resolve?phone=380505923772" className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-50 border border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-200 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 light:hover:bg-blue-100 transition-all">
                      <span className="text-cyan-300 dark:text-cyan-300 light:text-blue-700 text-sm font-semibold">Telegram</span>
                    </a>
                    <a href={locale === 'en' ? "https://wa.me/380505923772?text=Hello%20Diwave!%20I%20want%20to%20discuss%20a%20project." : "https://wa.me/380505923772?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%20Diwave!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82."} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-50 border border-emerald-400/20 dark:border-emerald-400/20 light:border-emerald-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/20 light:hover:bg-emerald-100 transition-all">
                      <span className="text-emerald-300 dark:text-emerald-300 light:text-emerald-700 text-sm font-semibold">WhatsApp</span>
                    </a>
                    <a href="viber://chat?number=%2B380505923772" className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-50 border border-purple-400/20 dark:border-purple-400/20 light:border-purple-300 hover:bg-purple-500/20 dark:hover:bg-purple-500/20 light:hover:bg-purple-100 transition-all">
                      <span className="text-purple-300 dark:text-purple-300 light:text-purple-700 text-sm font-semibold">Viber</span>
                    </a>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <a href="https://www.facebook.com/DiWave.company" target="_blank" rel="noopener noreferrer" className="flex-1 text-center p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                      <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs font-medium">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/diwave.company/" target="_blank" rel="noopener noreferrer" className="flex-1 text-center p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                      <span className="text-pink-400 dark:text-pink-400 light:text-pink-600 text-xs font-medium">Instagram</span>
                    </a>
                    <a href="https://www.youtube.com/@DigitalWaveAI" target="_blank" rel="noopener noreferrer" className="flex-1 text-center p-2 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-100 transition-colors">
                      <span className="text-red-400 dark:text-red-400 light:text-red-600 text-xs font-medium">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-10">
                <h3 className=" dark:text-white light:text-gray-900 font-bold text-2xl mb-6 text-center">
                  {locale === 'en' ? 'Send us a message' : 'Напишіть нам'}
                </h3>
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 backdrop-blur-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1771845266857!2d23.993652976756956!3d49.83846027148373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7e6e3d3a3d3%3A0x3d3b3e3f3f3f3f3f!2z0LLRg9C70LjRhtGPINCS0LXQvdC40YfQtdC90LrQsCwgMzAsINCb0YzQstC40LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sen!2sua!4v1234567890123!5m2!1sen!2sua"
              width="100%"
              height="400"
              style={{border:0}}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={locale === 'en' ? 'Diwave Office Location - Vynnychenko St 30, Lviv' : 'Офіс Diwave - вул. Винниченка 30, Львів'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
