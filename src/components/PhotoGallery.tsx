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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef<HTMLButtonElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const suppressClickRef = useRef(false);
  const suppressClickTimerRef = useRef<number | null>(null);
  const animationTimerRef = useRef<number | null>(null);
  const { open } = useGallery();
  const active = photos[activeIndex];
  const previousPhoto = photos[(activeIndex - 1 + photos.length) % photos.length];
  const nextPhoto = photos[(activeIndex + 1) % photos.length];

  const showPhoto = (nextIndex: number) => {
    setActiveIndex((nextIndex + photos.length) % photos.length);
  };

  const clearSuppressClick = () => {
    if (suppressClickTimerRef.current !== null) {
      window.clearTimeout(suppressClickTimerRef.current);
      suppressClickTimerRef.current = null;
    }
    suppressClickRef.current = false;
  };

  const scheduleSuppressClickReset = () => {
    if (suppressClickTimerRef.current !== null) {
      window.clearTimeout(suppressClickTimerRef.current);
    }
    suppressClickTimerRef.current = window.setTimeout(() => {
      suppressClickRef.current = false;
      suppressClickTimerRef.current = null;
    }, 350);
  };

  const clearAnimation = () => {
    if (animationTimerRef.current !== null) {
      window.clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }
  };

  const finishSwipe = (direction: 1 | -1) => {
    const heroWidth = heroRef.current?.clientWidth ?? 0;
    clearAnimation();
    suppressClickRef.current = true;
    scheduleSuppressClickReset();

    if (heroWidth <= 0) {
      showPhoto(activeIndex + direction);
      setDragOffset(0);
      return;
    }

    setIsDragging(false);
    setIsAnimating(true);
    setDragOffset(direction === 1 ? -heroWidth : heroWidth);

    animationTimerRef.current = window.setTimeout(() => {
      showPhoto(activeIndex + direction);
      setIsAnimating(false);
      setDragOffset(0);
      animationTimerRef.current = null;
    }, 180);
  };

  const cancelSwipe = () => {
    clearAnimation();
    setIsDragging(false);
    setIsAnimating(true);
    setDragOffset(0);

    animationTimerRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      animationTimerRef.current = null;
    }, 180);
  };

  const handleHeroPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (isAnimating) {
      return;
    }

    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    clearSuppressClick();
    clearAnimation();
    setIsDragging(false);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleHeroPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;

    if (!start || photos.length < 2) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontal =
      Math.abs(deltaX) > 8 &&
      Math.abs(deltaX) > Math.abs(deltaY) * SWIPE_AXIS_RATIO;

    if (!isDragging && !isHorizontal) {
      return;
    }

    const heroWidth = heroRef.current?.clientWidth ?? 0;
    const maxOffset = heroWidth > 0 ? heroWidth * 0.92 : Math.abs(deltaX);
    const boundedOffset = Math.max(-maxOffset, Math.min(maxOffset, deltaX));

    setIsDragging(true);
    setDragOffset(boundedOffset);
  };

  const handleHeroPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);

    if (!start || photos.length < 2) {
      return;
    }

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) >= SWIPE_MIN_DISTANCE &&
      Math.abs(deltaX) > Math.abs(deltaY) * SWIPE_AXIS_RATIO;

    if (!isHorizontalSwipe) {
      if (isDragging) {
        cancelSwipe();
      }
      return;
    }

    finishSwipe(deltaX < 0 ? 1 : -1);
  };

  const handleHeroPointerCancel = (event: PointerEvent<HTMLButtonElement>) => {
    pointerStartRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (isDragging) {
      cancelSwipe();
    }
  };

  const handleHeroClick = () => {
    if (suppressClickRef.current) {
      clearSuppressClick();
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
      clearAnimation();
    };
  }, []);

  return (
    <>
      {/* Big active photo — fixed height, aspect-ratio preserved */}
      <button
        ref={heroRef}
        onClick={handleHeroClick}
        onPointerDown={handleHeroPointerDown}
        onPointerMove={handleHeroPointerMove}
        onPointerUp={handleHeroPointerUp}
        onPointerCancel={handleHeroPointerCancel}
        className="relative block w-full bg-[#1e1e1e] rounded-sm border border-[#FFD700]/20 overflow-hidden cursor-zoom-in"
        style={{ height: HERO_HEIGHT, touchAction: 'pan-y' }}
        aria-label="Open fullscreen"
      >
        {[
          { photo: previousPhoto, position: -1 },
          { photo: active, position: 0 },
          { photo: nextPhoto, position: 1 },
        ].map(({ photo, position }) => (
          <img
            key={`${photo.src}-${position}`}
            src={photo.thumb}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain select-none"
            style={{
              transform: `translateX(calc(${position * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : isAnimating ? 'transform 180ms ease-out' : 'none',
            }}
          />
        ))}
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
