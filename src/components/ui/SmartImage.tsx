import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type SmartImageProps = {
  srcFolder?: string; // e.g. "/images/home"
  sources?: string[]; // explicit sources if provided (absolute or relative to public root)
  alt: string;
  className?: string; // wrapper class
  imgClassName?: string; // image element class
  priority?: boolean; // if true, loads eager
  asBackground?: boolean; // render as background
};

/**
 * SmartImage tries a list of file name candidates in srcFolder and renders the first that loads successfully.
 * Useful when exact file names can differ across environments, but folder is known.
 * Works with public/ assets. Example: srcFolder="/images/home"
 */
const defaultCandidates = [
  'hero.avif',
  'hero.webp',
  'hero.jpg',
  'header-bg.jpg',
  'header-bg_1.jpg',
  'header-bg-mobile.jpg',
  'cover.avif',
  'cover.webp',
  'cover.jpg',
  '01.jpg',
  '1.jpg',
  'image.jpg',
  'banner.jpg'
];

const SmartImage: React.FC<SmartImageProps> = ({
  srcFolder,
  sources,
  alt,
  className,
  imgClassName,
  priority = false,
  asBackground = false
}) => {
  const candidates = useMemo(() => {
    const list = sources && sources.length > 0 ? sources : defaultCandidates.map((n) => (srcFolder ? `${srcFolder}/${n}` : n));
    // Remove duplicates
    return Array.from(new Set(list));
  }, [srcFolder, sources]);

  const [index, setIndex] = useState(0);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const tryLoad = (i: number) => {
      if (i >= candidates.length) {
        if (!cancelled) setLoadedSrc(null);
        return;
      }
      const test = new Image();
      test.onload = () => {
        if (!cancelled) setLoadedSrc(candidates[i]);
      };
      test.onerror = () => {
        if (!cancelled) {
          setIndex(i + 1);
          tryLoad(i + 1);
        }
      };
      test.src = candidates[i];
    };

    tryLoad(index);

    return () => {
      cancelled = true;
    };
  }, [candidates, index]);

  if (!loadedSrc) {
    // graceful placeholder gradient with subtle shimmer
    return (
      <div
        className={className}
        aria-label={alt}
        role="img"
        style={{
          background:
            'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(16,185,129,0.10) 40%, rgba(0,0,0,0.35) 100%)'
        }}
      />
    );
  }

  if (asBackground) {
    return (
      <motion.div
        initial={{ opacity: 0.0, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={className}
        style={{
          backgroundImage: `url(${loadedSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <motion.img
      initial={{ opacity: 0.0, scale: 1.01 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      src={loadedSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={imgClassName || className}
    />
  );
};

export default SmartImage;
