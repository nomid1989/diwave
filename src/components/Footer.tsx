import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 dark:border-cyan-400/20 light:border-gray-200 py-6 text-center text-sm text-gray-300 dark:text-gray-300 light:text-gray-600 bg-transparent dark:bg-transparent light:bg-white/80">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <a href="tel:+380505923772" className="hover:text-white dark:hover:text-white light:hover:text-blue-700 text-cyan-300 dark:text-cyan-300 light:text-blue-600 transition">+380 50 592 3772</a>
          <span className="mx-2 text-gray-500 dark:text-gray-500 light:text-gray-400">•</span>
          <a href="mailto:kravets.lviv@gmail.com" className="hover:text-white dark:hover:text-white light:hover:text-blue-700 text-cyan-300 dark:text-cyan-300 light:text-blue-600 transition">kravets.lviv@gmail.com</a>
        </div>
        <div className="flex gap-3">
          <a href="tg://resolve?phone=380505923772" className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 hover:text-white dark:hover:text-white light:hover:text-blue-700 transition" title="Telegram">Telegram</a>
          <span className="text-gray-500 dark:text-gray-500 light:text-gray-400">•</span>
          <a href="https://wa.me/380505923772" target="_blank" rel="noopener noreferrer" className="text-emerald-300 dark:text-emerald-300 light:text-emerald-600 hover:text-white dark:hover:text-white light:hover:text-emerald-700 transition" title="WhatsApp">WhatsApp</a>
          <span className="text-gray-500 dark:text-gray-500 light:text-gray-400">•</span>
          <a href="viber://chat?number=%2B380505923772" className="text-purple-300 dark:text-purple-300 light:text-purple-600 hover:text-white dark:hover:text-white light:hover:text-purple-700 transition" title="Viber">Viber</a>
        </div>
        <div className="text-gray-400 dark:text-gray-400 light:text-gray-500">© Diwave, Lviv</div>
      </div>
    </footer>
  );
};

export default Footer;
