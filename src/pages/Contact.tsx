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
        title="Diwave — Contact"
        description="Get in touch with Diwave."
        url={url}
        image={`${baseUrl}/images/contacts/1D55D514-B7F2-4D0E-BAD2-65604AA99AF2_1_105_c.jpg`}
        locale={locale}
        alternates={[
          { hrefLang: 'uk', href: `${baseUrl}/contact` },
          { hrefLang: 'en', href: `${baseUrl}/en/contact` }
        ]}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact — Diwave',
            url
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}${locale === 'en' ? '/en' : ''}` },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: url }
            ]
          }
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f3a] to-[#0f1419]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_80%_20%,rgba(236,72,153,0.12),transparent),radial-gradient(800px_400px_at_50%_80%,rgba(56,189,248,0.08),transparent)]" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}} aria-hidden />
        <div className="mx-auto max-w-7xl px-6 py-16 relative">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-300 glass rounded-xl p-6 border border-cyan-400/20 bg-black/40">
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href={`${locale === 'en' ? '/en' : ''}/book`}
                  className="inline-flex items-center rounded-md px-4 py-2 bg-white text-black font-semibold hover:bg-white/90 transition"
                >
                  {locale === 'en' ? 'Book a call' : 'Записатися в календар'}
                </a>
              </div>
              <p className="mb-3"><a href="tel:+380505923772" className="hover:text-white text-cyan-300">Phone: +380 50 592 3772</a></p>
              <p className="mb-3"><a href="mailto:kravets.lviv@gmail.com" className="hover:text-white text-cyan-300">E‑mail: kravets.lviv@gmail.com</a></p>
              <div className="mb-3 flex flex-wrap gap-3 text-sm">
                <a href="tg://resolve?phone=380505923772" className="inline-flex items-center px-3 py-1.5 rounded-md border border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10" title="Open Telegram">
                  Telegram
                </a>
                <a href="https://wa.me/380505923772?text=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%20Diwave!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B8%20%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82." target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md border border-emerald-400/30 text-emerald-200 hover:bg-emerald-400/10">
                  WhatsApp
                </a>
                <a href="viber://chat?number=%2B380505923772" className="inline-flex items-center px-3 py-1.5 rounded-md border border-purple-400/30 text-purple-200 hover:bg-purple-400/10" title="Open Viber">
                  Viber
                </a>
              </div>
              <p className="mb-3"><a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">LinkedIn: /in/dmytrokravets</a></p>
              <p className="mb-3"><a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">Upwork: /freelancers/stevark</a></p>
              <p className="opacity-70 text-sm">Або скористайтеся формою — повідомлення потрапить на e‑mail і в наш Telegram‑бот.</p>
            </div>
            <div className="glass rounded-xl p-6 border border-cyan-400/20 bg-black/40">
              <ContactForm />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1771845266857!2d23.993652976756956!3d49.83846027148373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7e6e3d3a3d3%3A0x3d3b3e3f3f3f3f3f!2z0LLRg9C70LjRhtGPINCS0LXQvdC40YfQtdC90LrQsCwgMzAsINCb0YzQstC40LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sen!2sua!4v1234567890123!5m2!1sen!2sua"
              width="100%"
              height="400"
              style={{border:0}}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diwave Office Location - вул. Венiченка 30, Львів"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
