'use client';

import { useState, useRef, useEffect } from 'react';
import type { PointerEvent } from 'react';
import { Gallery, Item, useGallery } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import type { GalleryPhoto } from '@/app/_lib/gallery';
import type PhotoSwipe from 'photoswipe';

const HERO_HEIGHT = 480;
const THUMB_HEIGHT = 60;
const SWIPE_MIN_DISTANCE = 45;
const SWIPE_AXIS_RATIO = 1.25;
const PHOTO_GALLERY_HISTORY_KEY = '__nullptrPhotoGallery';

function objectState(state: unknown): Record<string, unknown> {
  return state && typeof state === 'object' ? { ...state } : {};
}

function isGalleryHistoryState(state: unknown) {
  return Boolean(state && typeof state === 'object' && PHOTO_GALLERY_HISTORY_KEY in state);
}

function bindGalleryHistory(photoswipe: PhotoSwipe) {
  if (typeof window === 'undefined') {
    return;
  }

  let closingFromPopState = false;
  let restoringHistory = false;

  window.history.pushState(
    {
      ...objectState(window.history.state),
      [PHOTO_GALLERY_HISTORY_KEY]: true,
    },
    '',
    window.location.href,
  );

  const onPopState = () => {
    if (restoringHistory) {
      return;
    }
    closingFromPopState = true;
    photoswipe.close();
  };

  const cleanup = () => {
    window.removeEventListener('popstate', onPopState);
  };

  window.addEventListener('popstate', onPopState);

  photoswipe.on('close', () => {
    if (!closingFromPopState && isGalleryHistoryState(window.history.state)) {
      restoringHistory = true;
      window.history.back();
    }
  });

  photoswipe.on('destroy', cleanup);
}

export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <Gallery
      onOpen={bindGalleryHistory}
      options={{
        bgOpacity: 0.95,
        showHideAnimationType: 'zoom',
        zoomAnimationDuration: 300,
        imageClickAction: 'close',
        tapAction: 'close',
        bgClickAction: 'close',
      }}
    >
      <GalleryInner photos={photos} />
    </Gallery>
  );
}

function GalleryInner({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const suppressClickRef = useRef(false);
  const suppressClickTimerRef = useRef<number | null>(null);
  const { open } = useGallery();
  const active = photos[activeIndex];

  const showPhoto = (nextIndex: number) => {
    setActiveIndex((nextIndex + photos.length) % photos.length);
  };

  const handleHeroPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    suppressClickRef.current = false;
  };

  const handleHeroPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;

    if (!start || photos.length < 2) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= SWIPE_MIN_DISTANCE &&
      Math.abs(deltaX) > Math.abs(deltaY) * SWIPE_AXIS_RATIO;

    if (!isHorizontalSwipe) {
      return;
    }

    suppressClickRef.current = true;
    if (suppressClickTimerRef.current !== null) {
      window.clearTimeout(suppressClickTimerRef.current);
    }
    suppressClickTimerRef.current = window.setTimeout(() => {
      suppressClickRef.current = false;
      suppressClickTimerRef.current = null;
    }, 350);
    showPhoto(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
  };

  const handleHeroPointerCancel = () => {
    pointerStartRef.current = null;
  };

  const handleHeroClick = () => {
    if (suppressClickRef.current) {
      if (suppressClickTimerRef.current !== null) {
        window.clearTimeout(suppressClickTimerRef.current);
        suppressClickTimerRef.current = null;
      }
      suppressClickRef.current = false;
      return;
    }

    open(activeIndex);
  };

  // Auto-scroll strip to keep active visible
  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(`[data-idx="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (suppressClickTimerRef.current !== null) {
        window.clearTimeout(suppressClickTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Big active photo — fixed height, aspect-ratio preserved */}
      <button
        onClick={handleHeroClick}
        onPointerDown={handleHeroPointerDown}
        onPointerUp={handleHeroPointerUp}
        onPointerCancel={handleHeroPointerCancel}
        className="block w-full bg-[#1e1e1e] rounded-sm border border-[#FFD700]/20 overflow-hidden cursor-zoom-in"
        style={{ height: HERO_HEIGHT, touchAction: 'pan-y' }}
        aria-label="Open fullscreen"
      >
        <img
          key={active.src}
          src={active.thumb}
          alt=""
          className="w-full h-full object-contain"
        />
      </button>

      {/* Thumbnail strip — each thumb is a PhotoSwipe Item (for ref/animation), click selects active */}
      <div
        ref={stripRef}
        className="mt-2 flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#444 transparent' }}
      >
        {photos.map((p, i) => {
          const aspect = p.width / p.height;
          const w = Math.round(THUMB_HEIGHT * aspect);
          return (
            <Item
              key={p.src}
              original={p.src}
              thumbnail={p.thumb}
              width={p.width}
              height={p.height}
            >
              {({ ref }) => (
                <button
                  ref={ref as React.Ref<HTMLButtonElement>}
                  data-idx={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
                    i === activeIndex
                      ? 'border-[#FFD700]'
                      : 'border-transparent opacity-50 hover:opacity-100 hover:border-[#FFD700]/40'
                  }`}
                  style={{ width: w, height: THUMB_HEIGHT }}
                  aria-label={`Photo ${i + 1}`}
                >
                  <img
                    src={p.smallThumb ?? p.thumb}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </Item>
          );
        })}
      </div>
    </>
  );
}
