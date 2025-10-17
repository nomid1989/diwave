import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Lightweight YouTube embed with privacy (youtube-nocookie.com),
 * Shorts/watch URL normalization, lazy activation on click, and
 * responsive aspect ratio (defaults to 9:16 for Shorts).
 */
export type YouTubeEmbedProps = {
  url?: string;
  videoId?: string;
  title?: string;
  className?: string;
  portrait?: boolean; // true: 9/16 (Shorts), false: 16/9
  maxHeight?: number | string; // optional max-height for the embed container
};

function extractVideoId(input?: string): string | null {
  if (!input) return null;
  try {
    // Support raw ID
    if (/^[A-Za-z0-9_-]{6,}$/.test(input) && !input.includes('/')) return input;

    const u = new URL(input);
    // shorts
    const shorts = u.pathname.match(/\/shorts\/([A-Za-z0-9_-]{6,})/);
    if (shorts) return shorts[1];
    // watch?v=
    const v = u.searchParams.get('v');
    if (v) return v;
    // youtu.be/<id>
    const m = u.pathname.match(/^\/(?:embed\/)?([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
    return null;
  } catch {
    return null;
  }
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, videoId, title = 'YouTube video', className, portrait = true, maxHeight }) => {
  const vid = videoId || extractVideoId(url || '') || '';
  const [activated, setActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [thumbIdx, setThumbIdx] = useState(0);
  const thumbCandidates = useMemo(() => vid ? [
    `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${vid}/hq720.jpg`,
    `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${vid}/sddefault.jpg`
  ] : [], [vid]);
  const currentThumb = thumbCandidates[thumbIdx] || '';

  // Preload on intersection (optional optimization)
  useEffect(() => {
    if (!containerRef.current || activated) return;
    const el = containerRef.current;
    const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // We could preconnect here if needed
          io.disconnect();
        }
      });
    }, { rootMargin: '200px' }) : null;
    if (io) io.observe(el);
    return () => io && io.disconnect();
  }, [activated]);

  const embedSrc = vid ? `https://www.youtube-nocookie.com/embed/${vid}?rel=0&modestbranding=1&playsinline=1` : '';
  // thumbnails are resolved via candidates
  if (!vid) {
    return (
      <div className={className}>
        <div className={`relative w-full ${portrait ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden rounded-xl border border-white/10 bg-black/20`} aria-label="Video unavailable" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <div className={`relative w-full ${portrait ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden rounded-xl border border-white/10 bg-black/20 md:max-h-[560px]`} style={maxHeight ? { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight } : undefined}>
        {!activated && (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-0"
            aria-label={`Play: ${title}`}
          >
            <img
              src={currentThumb}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
              onError={() => setThumbIdx((i) => Math.min(i + 1, thumbCandidates.length - 1))}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white font-semibold shadow-xl group-hover:scale-105 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Play</span>
              </div>
            </div>
          </button>
        )}
        {activated && (
          <iframe
            title={title}
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
