import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 py-6 text-center text-sm text-gray-300">
      <div className="flex flex-col gap-2 items-center">
        <div>
          <a href="tel:+380505923772" className="hover:text-white text-cyan-300">+380 50 592 3772</a>
          <span className="mx-2 text-gray-500">•</span>
          <a href="mailto:kravets.lviv@gmail.com" className="hover:text-white text-cyan-300">kravets.lviv@gmail.com</a>
        </div>
        <div className="flex gap-3">
          <a href="tg://resolve?phone=380505923772" className="text-cyan-300 hover:text-white" title="Telegram">Telegram</a>
          <span className="text-gray-500">•</span>
          <a href="https://wa.me/380505923772" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-white" title="WhatsApp">WhatsApp</a>
          <span className="text-gray-500">•</span>
          <a href="viber://chat?number=%2B380505923772" className="text-purple-300 hover:text-white" title="Viber">Viber</a>
        </div>
        <div className="text-gray-400">© Diwave, Lviv</div>
      </div>
    </footer>
  );
};

export default Footer;
