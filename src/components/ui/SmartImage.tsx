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
  sizes?: string; // responsive sizes for <img>
  width?: number; // intrinsic width to reduce CLS
  height?: number; // intrinsic height to reduce CLS
};

/**
 * SmartImage tries a list of file name candidates in srcFolder and renders the first that loads successfully.
 * It prefers modern formats when available. Works with public/ assets.
 * Example: srcFolder="/images/home" or provide explicit `sources`.
 */
const defaultCandidates = [
  // Common hero/cover names
  'hero.avif',
  'hero.webp',
  'hero.jpg',
  'hero-background.avif',
  'hero-background.webp',
  'hero-background.jpg',
  'header-bg.jpg',
  'header-bg_1.jpg',
  'header-bg-mobile.jpg',
  'cover.avif',
  'cover.webp',
  'cover.jpg',
  'main.avif',
  'main.webp',
  'main.jpg',
  'index.avif',
  'index.webp',
  'index.jpg',
  // Diwave home known filenames
  'design.avif',
  'design.webp',
  'design.jpg',
  'design2.avif',
  'design2.webp',
  'design2.jpg',
  'design3.avif',
  'design3.webp',
  'design3.jpg',
  'equipment.avif',
  'equipment.webp',
  'equipment.jpg',
  'vacuum-main.webp',
  'vacuum-main.jpg',
  'vacuum-2.webp',
  'vacuum-2.jpg',
  'team.webp',
  'desing1.jpg',
  // Generic fallbacks
  '01.jpg',
  '1.jpg',
  'image.jpg',
  'banner.jpg',
  // Known team image in repo (ensures real photo shows up)
  'dmytro.avif',
  'dmytro.webp',
  'dmytro.jpg'
];

function probe(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error('404'));
    img.src = url;
  });
}

const SmartImage: React.FC<SmartImageProps> = ({
  srcFolder,
  sources,
  alt,
  className,
  imgClassName,
  priority = false,
  asBackground = false,
  sizes,
  width,
  height
}) => {
  const candidates = useMemo(() => {
    const list = sources && sources.length > 0 ? sources : defaultCandidates.map((n) => (srcFolder ? `${srcFolder}/${n}` : n));
    // Remove duplicates
    return Array.from(new Set(list));
  }, [srcFolder, sources]);

  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [variants, setVariants] = useState<{ avif?: string; webp?: string; base?: string } | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      // Find the first candidate that exists
      for (const c of candidates) {
        try {
          const ok = await probe(c);
          if (cancelled) return;
          setLoadedSrc(ok);

          // Derive siblings (avif/webp) for <picture> or image-set
          const m = ok.match(/^(.*)\.(avif|webp|jpe?g|png|gif|svg)$/i);
          if (m) {
            const base = m[1];
            const ext = m[2].toLowerCase();
            const v: { avif?: string; webp?: string; base?: string } = {};
            // Try higher-quality first
            try { v.avif = await probe(`${base}.avif`); } catch {}
            try { v.webp = await probe(`${base}.webp`); } catch {}
            // Base (the one that worked)
            v.base = ok;
            // If neither avif/webp available, keep base only
            setVariants(v);
          } else {
            setVariants({ base: ok });
          }
          return;
        } catch {
          continue;
        }
      }
      if (!cancelled) {
        setLoadedSrc(null);
        setVariants(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [candidates]);

  if (!loadedSrc) {
    // graceful placeholder gradient + dev notice
    if ((import.meta as any).env?.DEV) {
      // eslint-disable-next-line no-console
      console.warn('SmartImage: no image found for', { srcFolder, sources, tried: candidates });
    }
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
    // For backgrounds, use the best available variant that we actually probed.
    const bg = variants?.avif || variants?.webp || loadedSrc;
    return (
      <motion.div
        initial={{ opacity: 0.0, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={className}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain', // Повне відображення без обрізання
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-label={alt}
        role="img"
      />
    );
  }

  // Render with <picture> when we have modern variants
  // iOS 26 glassmorphism + Google Gemini Material Design 3
  return (
    <picture className="relative block w-full h-full">
      {variants?.avif && <source srcSet={variants.avif} type="image/avif" />}
      {variants?.webp && <source srcSet={variants.webp} type="image/webp" />}
      <motion.img
        initial={{ opacity: 0.0, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={loadedSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-ignore fetchpriority is valid in modern browsers
        fetchpriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        width={width}
        height={height}
        className={imgClassName || className}
      />
    </picture>
  );
};

export default SmartImage;
