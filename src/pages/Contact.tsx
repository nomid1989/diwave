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
        image={`${baseUrl}/images/contacts/cover.jpg`}
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
      <section className="relative overflow-hidden">
        <SmartImage srcFolder="/images/contacts" alt="Contact Diwave" asBackground className="absolute inset-0 opacity-30" />
        <div className="mx-auto max-w-7xl px-6 py-16 relative">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Contact</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-300 glass rounded-xl p-6 border border-cyan-400/20 bg-black/40">
              <p className="mb-3"><a href="tel:+380505923772" className="hover:text-white text-cyan-300">Phone: +380 50 592 3772</a></p>
              <p className="mb-3"><a href="mailto:kravets.lviv@gmail.com" className="hover:text-white text-cyan-300">E‑mail: kravets.lviv@gmail.com</a></p>
              <p className="mb-3"><a href="https://linkedin.com/in/dmytrokravets" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">LinkedIn: /in/dmytrokravets</a></p>
              <p className="mb-3"><a href="https://upwork.com/freelancers/stevark" target="_blank" rel="noopener noreferrer" className="hover:text-white text-cyan-300">Upwork: /freelancers/stevark</a></p>
              <p className="opacity-70 text-sm">Або скористайтеся формою — повідомлення потрапить у наш Telegram‑бот.</p>
            </div>
            <div className="glass rounded-xl p-6 border border-cyan-400/20 bg-black/40">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
