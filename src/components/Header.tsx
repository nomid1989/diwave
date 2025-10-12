import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import ThemeToggle from './ThemeToggle';

// Scroll to top helper
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const NAV = [
  { to: '/', key: 'nav.home' },
  { to: '/solutions', key: 'nav.solutions' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/industries', key: 'nav.industries' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' }
];

function useLocale() {
  const { pathname } = useLocation();
  return pathname.startsWith('/en') ? 'en' : 'uk';
}

function makeLink(href: string, locale: 'uk' | 'en') {
  const base = href === '/' ? '' : href;
  return locale === 'en' ? `/en${base}` : base || '/';
}

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const switchLocale = (target: 'uk' | 'en') => {
    if (target === locale) return;
    const segs = pathname.split('/').filter(Boolean);
    const pathWoLocale = locale === 'en' ? '/' + segs.slice(1).join('/') : pathname;
    const nextPath = target === 'en' ? '/en' + (pathWoLocale === '/' ? '' : pathWoLocale) : pathWoLocale;
    i18n.changeLanguage(target);
    navigate(nextPath || '/', { replace: true });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(makeLink('/', locale));
    scrollToTop();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-200/40 bg-black/50 dark:bg-black/50 light:bg-white/80 backdrop-blur transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to={makeLink('/', locale)}
          onClick={handleLogoClick}
          className="text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-bold tracking-wide text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] dark:hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] light:hover:text-blue-700 transition-colors cursor-pointer"
        >
          {t('brand')}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => {
            const href = makeLink(item.to, locale);
            const active = pathname === href;
            return (
              <Link
                key={item.to}
                to={href}
                className={classNames(
                  'transition-colors',
                  active ? 'text-white dark:text-white light:text-blue-700 font-semibold' : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-blue-600'
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to={makeLink('/contact', locale)}
            className="hidden md:inline-block px-3 py-2 rounded-md bg-emerald-500 dark:bg-emerald-500 light:bg-blue-600 text-white font-semibold shadow-[0_0_16px_rgba(16,185,129,0.5)] dark:shadow-[0_0_16px_rgba(16,185,129,0.5)] light:shadow-[0_0_16px_rgba(37,99,235,0.5)] hover:bg-emerald-400 dark:hover:bg-emerald-400 light:hover:bg-blue-700 hover:shadow-[0_0_24px_rgba(16,185,129,0.7)] dark:hover:shadow-[0_0_24px_rgba(16,185,129,0.7)] light:hover:shadow-[0_0_24px_rgba(37,99,235,0.7)] transition-all"
          >
            {t('cta.discuss')}
          </Link>
          <div className="flex rounded-md overflow-hidden border border-cyan-400/30 dark:border-cyan-400/30 light:border-blue-300">
            <button
              aria-label="UA"
              onClick={() => switchLocale('uk')}
              className={classNames(
                'px-2 py-1 text-sm font-medium transition',
                locale === 'uk'
                  ? 'bg-cyan-500 dark:bg-cyan-500 light:bg-blue-600 text-white'
                  : 'text-cyan-300 dark:text-cyan-300 light:text-blue-600 hover:bg-cyan-400/10 dark:hover:bg-cyan-400/10 light:hover:bg-blue-50'
              )}
            >
              UA
            </button>
            <button
              aria-label="EN"
              onClick={() => switchLocale('en')}
              className={classNames(
                'px-2 py-1 text-sm font-medium transition',
                locale === 'en'
                  ? 'bg-cyan-500 dark:bg-cyan-500 light:bg-blue-600 text-white'
                  : 'text-cyan-300 dark:text-cyan-300 light:text-blue-600 hover:bg-cyan-400/10 dark:hover:bg-cyan-400/10 light:hover:bg-blue-50'
              )}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-cyan-400/30 dark:border-cyan-400/30 light:border-blue-300 text-cyan-300 dark:text-cyan-300 light:text-blue-600 hover:text-white dark:hover:text-white light:hover:text-blue-700 hover:bg-cyan-400/10 dark:hover:bg-cyan-400/10 light:hover:bg-blue-50 transition"
            aria-label="Меню"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {/* Іконка бургер/хрестик */}
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.75 5.75A.75.75 0 014.5 5h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6A.75.75 0 014.5 11h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6A.75.75 0 014.5 17h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-200 bg-black/60 dark:bg-black/60 light:bg-white/95 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            {NAV.map((item) => {
              const href = makeLink(item.to, locale);
              const active = pathname === href;
              return (
                <Link
                  key={item.to}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className={classNames(
                    'rounded-md px-3 py-2 transition-colors',
                    active
                      ? 'bg-white/10 dark:bg-white/10 light:bg-blue-100 text-white dark:text-white light:text-blue-700 font-semibold'
                      : 'text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-blue-600 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-blue-50'
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
