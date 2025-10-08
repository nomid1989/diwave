import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-black dark:bg-black light:bg-gradient-to-br light:from-gray-50 light:via-blue-50/30 light:to-purple-50/20 transition-colors duration-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
