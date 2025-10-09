import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageVisit } from '@/lib/pageHistory';

export function usePageTracking(pageTitle?: string) {
  const location = useLocation();

  useEffect(() => {
    // Track page visit when component mounts or location changes
    const title = pageTitle || document.title;
    trackPageVisit(location.pathname + location.search + location.hash, title);
  }, [location, pageTitle]);
}
