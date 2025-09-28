import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 py-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Diwave. All rights reserved.
    </footer>
  );
};

export default Footer;
