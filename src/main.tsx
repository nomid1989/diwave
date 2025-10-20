import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './styles.css';
import './i18n';
import { router } from './router';

// Prevent layout shift and ensure smooth initial render
function AppWrapper() {
  useEffect(() => {
    // Remove loading state after initial render
    const root = document.getElementById('root');
    if (root) {
      root.style.opacity = '1';
    }

    // Ensure images have loaded class for smooth transitions
    const handleImageLoad = (e: Event) => {
      const img = e.target as HTMLImageElement;
      img.classList.add('loaded');
      img.setAttribute('data-loaded', 'true');
    };

    // Add listeners to all images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add('loaded');
        img.setAttribute('data-loaded', 'true');
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);

  return (
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>
  );
}

const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(<AppWrapper />);
