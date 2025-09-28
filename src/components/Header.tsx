import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

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

  const switchLocale = (target: 'uk' | 'en') => {
    if (target === locale) return;
    const segs = pathname.split('/').filter(Boolean);
    const pathWoLocale = locale === 'en' ? '/' + segs.slice(1).join('/') : pathname;
    const nextPath = target === 'en' ? '/en' + (pathWoLocale === '/' ? '' : pathWoLocale) : pathWoLocale;
    i18n.changeLanguage(target);
    navigate(nextPath || '/', { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/20 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to={makeLink('/', locale)} className="text-cyan-300 font-bold tracking-wide text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
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
                  active ? 'text-white' : 'text-gray-300 hover:text-white'
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to={makeLink('/contact', locale)}
            className="px-3 py-2 rounded-md bg-emerald-500 text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.5)] hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(16,185,129,0.7)] transition-all"
          >
            {t('cta.discuss')}
          </Link>
          <div className="flex rounded-md overflow-hidden border border-cyan-400/30">
            <button
              aria-label="UA"
              onClick={() => switchLocale('uk')}
              className={classNames(
                'px-2 py-1 text-sm',
                locale === 'uk' ? 'bg-cyan-500 text-black' : 'text-cyan-300 hover:bg-cyan-400/10'
              )}
            >
              UA
            </button>
            <button
              aria-label="EN"
              onClick={() => switchLocale('en')}
              className={classNames(
                'px-2 py-1 text-sm',
                locale === 'en' ? 'bg-cyan-500 text-black' : 'text-cyan-300 hover:bg-cyan-400/10'
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
