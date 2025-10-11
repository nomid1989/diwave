import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { trackPageVisit } from './lib/pageHistory';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  // Track page visits for better client communication context
  useEffect(() => {
    const title = document.title;
    const fullPath = location.pathname + location.search + location.hash;
    trackPageVisit(fullPath, title);
  }, [location]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
