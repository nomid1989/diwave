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
              streetAddress: 'вул. Венiченка 30',
              addressLocality: 'Львів',
              addressCountry: 'UA'
            },
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
      <section className="contact-page-section relative overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419] dark:from-[#0a0f1c] dark:via-[#1a1f3a] dark:to-[#0f1419] light:from-gray-50 light:via-white light:to-gray-100">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)] dark:bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)] light:bg-none" />
        <div className="absolute inset-0 opacity-30 dark:opacity-30 light:opacity-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}} aria-hidden />
        <div className="mx-auto max-w-7xl px-6 py-20 relative">
          <h1 className="text-3xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-12 text-center">
            {locale === 'en' ? 'Contact Us' : 'Контакти'}
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left card - Contact Info with Photo */}
            <div className="contact-card rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-2xl shadow-xl">
              <SmartImage
                srcFolder="/images/team"
                alt="Dmytro Kravets — Founder, Diwave"
                className="rounded-xl w-full h-72 mb-6"
                imgClassName="rounded-xl w-full h-72 object-cover"
              />
              <div className="mt-6">
                <div className="text-white dark:text-white light:text-gray-900 font-bold text-xl mb-3">
                  Dmytro Kravets — {locale === 'en' ? 'Founder, Diwave' : 'Засновник, Diwave'}
                </div>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-base leading-relaxed mb-6">
                  {locale === 'en'
                    ? 'We combine hardware solutions, software, and analytics: car washes, vending machines, drones, e-commerce, payments, loyalty programs, and energy. We automate processes with AI to make businesses work more efficiently.'
                    : 'Ми поєднуємо апаратні рішення, програмне забезпечення та аналітику: автомийки, вендинг, дрони, e‑commerce, платежі, лояльність та енергетику. Автоматизуємо процеси за допомогою AI, щоб бізнес працював ефективніше.'
                  }
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href={`${locale === 'en' ? '/en' : ''}/book`}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 font-bold shadow-lg hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105"
                  >
                    <span className="text-white">{locale === 'en' ? 'Book a call' : 'Записатися в календар'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right card - Contact Details */}
            <div className="contact-card rounded-2xl border border-white/10 dark:border-white/10 light:border-gray-200 bg-white/3 dark:bg-white/3 light:bg-white/80 p-8 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-white dark:text-white light:text-gray-900 font-bold text-2xl mb-6">
                  {locale === 'en' ? 'Get in Touch' : 'Зв\'яжіться з нами'}
                </h3>
                <ul className="text-gray-300 dark:text-gray-300 light:text-gray-700 space-y-4 mb-6">
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
                  <li className="flex items-center gap-3 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-cyan-400 dark:text-cyan-400 light:text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium">Ukraine & EU</span>
                  </li>
                </ul>

                {/* Messengers */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-3 font-medium">
                    {locale === 'en' ? 'Or message us:' : 'Або напишіть у месенджер:'}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="tg://resolve?phone=380505923772" className="inline-flex items-center px-4 py-2.5 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-100 border border-cyan-400/50 dark:border-cyan-400/50 light:border-blue-400 text-cyan-100 dark:text-cyan-100 light:text-blue-800 hover:bg-cyan-400/20 dark:hover:bg-cyan-400/20 light:hover:bg-blue-200 transition-all font-semibold shadow-sm hover:shadow-md" title="Open Telegram">
                      <span className="light:text-blue-800">Telegram</span>
                    </a>
                    <a href={locale === 'en'
                      ? "https://wa.me/380505923772?text=Hello%20Diwave!%20I%20want%20to%20discuss%20a%20project."
                      : "https://wa.me/380505923772?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%20Diwave!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82."
                    } target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-100 border border-emerald-400/50 dark:border-emerald-400/50 light:border-emerald-500 text-emerald-100 dark:text-emerald-100 light:text-emerald-800 hover:bg-emerald-400/20 dark:hover:bg-emerald-400/20 light:hover:bg-emerald-200 transition-all font-semibold shadow-sm hover:shadow-md">
                      <span className="light:text-emerald-800">WhatsApp</span>
                    </a>
                    <a href="viber://chat?number=%2B380505923772" className="inline-flex items-center px-4 py-2.5 rounded-lg bg-purple-500/10 dark:bg-purple-500/10 light:bg-purple-100 border border-purple-400/50 dark:border-purple-400/50 light:border-purple-500 text-purple-100 dark:text-purple-100 light:text-purple-800 hover:bg-purple-400/20 dark:hover:bg-purple-400/20 light:hover:bg-purple-200 transition-all font-semibold shadow-sm hover:shadow-md" title="Open Viber">
                      <span className="light:text-purple-800">Viber</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-6">
                <h4 className="text-white dark:text-white light:text-gray-900 font-semibold text-lg mb-4">
                  {locale === 'en' ? 'Or leave a message' : 'Або залиште повідомлення'}
                </h4>
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
              title={locale === 'en' ? 'Diwave Office Location - Venychenka St 30, Lviv' : 'Офіс Diwave - вул. Венiченка 30, Львів'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
