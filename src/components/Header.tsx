import React, { useState, useEffect, useRef } from 'react';
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

  // Swipe gesture refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    // Swipe left (>75px) or right (>75px) - close menu
    if (Math.abs(swipeDistance) > 75) {
      setMobileOpen(false);
    }
  };

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
    <header className="sticky top-0 z-40 border-b border-cyan-400/20 dark:border-cyan-400/20 light:border-blue-200/40 bg-black/30 dark:bg-black/30 light:bg-white/60 backdrop-blur-xl backdrop-saturate-150 transition-colors shadow-lg shadow-black/5 dark:shadow-black/5 light:shadow-blue-500/5">
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        {locale === 'en' ? 'Skip to main content' : 'Перейти до контенту'}
      </a>
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
        <>
          {/* Frosted Glass Full-Screen Overlay - iOS 26 Style */}
          <div
            className="mobile-menu-overlay fixed inset-0 z-50 md:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Menu Content - центрований по вертикалі */}
            <div
              className="mobile-menu-content w-full max-w-md px-6 py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-3">
                {NAV.map((item) => {
                  const href = makeLink(item.to, locale);
                  const active = pathname === href;
                  return (
                    <Link
                      key={item.to}
                      to={href}
                      onClick={() => setMobileOpen(false)}
                      className={classNames(
                        'mobile-menu-item relative flex items-center px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300',
                        active
                          ? 'mobile-menu-item-active'
                          : 'text-white dark:text-white light:text-gray-900'
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  );
                })}

                {/* CTA Button in Mobile Menu */}
                <Link
                  to={makeLink('/contact', locale)}
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 flex items-center justify-center px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-500 dark:to-cyan-500 light:from-blue-600 light:to-indigo-600 text-white font-bold text-lg shadow-2xl shadow-emerald-500/30 dark:shadow-emerald-500/30 light:shadow-blue-500/30 hover:shadow-emerald-500/50 dark:hover:shadow-emerald-500/50 light:hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 active:scale-95 backdrop-blur-xl border border-white/20"
                >
                  {t('cta.discuss')}
                </Link>

                {/* Підказка про закриття */}
                <div className="mt-8 text-center text-sm text-gray-400 dark:text-gray-400 light:text-white/70">
                  {locale === 'en' ? 'Tap anywhere to close' : 'Торкніться будь-де щоб закрити'}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
