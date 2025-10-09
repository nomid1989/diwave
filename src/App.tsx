import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-black dark:bg-black light:bg-gradient-to-b light:from-[#f8f9fa] light:to-[#e9ecef] transition-colors duration-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
