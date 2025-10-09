import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 dark:border-cyan-400/20 light:border-gray-200 py-8 text-sm bg-transparent dark:bg-transparent light:bg-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          {/* Photo & Name */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/30 dark:border-cyan-400/30 light:border-blue-400/40">
              <img
                src="/images/team/dmytro.jpg"
                alt="Dmytro Kravets"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white dark:text-white light:text-gray-900 font-semibold">Dmytro Kravets</div>
              <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">CTO & Founder</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs mb-1">Контакти</div>
            <div>
              <a href="tel:+380505923772" className="hover:text-white dark:hover:text-white light:hover:text-blue-700 text-cyan-300 dark:text-cyan-300 light:text-blue-600 transition">+380 50 592 3772</a>
            </div>
            <div>
              <a href="mailto:kravets.lviv@gmail.com" className="hover:text-white dark:hover:text-white light:hover:text-blue-700 text-cyan-300 dark:text-cyan-300 light:text-blue-600 transition">kravets.lviv@gmail.com</a>
            </div>
          </div>

          {/* Messengers */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs mb-1">Месенджери</div>
            <div className="flex gap-3">
              <a href="tg://resolve?phone=380505923772" className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 hover:text-white dark:hover:text-white light:hover:text-blue-700 transition" title="Telegram">Telegram</a>
              <a href="https://wa.me/380505923772" target="_blank" rel="noopener noreferrer" className="text-emerald-300 dark:text-emerald-300 light:text-emerald-600 hover:text-white dark:hover:text-white light:hover:text-emerald-700 transition" title="WhatsApp">WhatsApp</a>
              <a href="viber://chat?number=%2B380505923772" className="text-purple-300 dark:text-purple-300 light:text-purple-600 hover:text-white dark:hover:text-white light:hover:text-purple-700 transition" title="Viber">Viber</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-gray-200 text-center text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs">
          © {new Date().getFullYear()} Diwave Solutions, Lviv • Всі права захищені
        </div>
      </div>
    </footer>
  );
};

export default Footer;
