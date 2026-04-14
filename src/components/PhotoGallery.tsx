'use client';

import { useState, useRef, useEffect } from 'react';
import { Gallery, Item, useGallery } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import type { GalleryPhoto } from '@/app/_lib/gallery';

const HERO_HEIGHT = 480;
const THUMB_HEIGHT = 60;

export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <Gallery
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
  const { open } = useGallery();
  const active = photos[activeIndex];

  // Auto-scroll strip to keep active visible
  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(`[data-idx="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeIndex]);

  return (
    <>
      {/* Big active photo — fixed height, aspect-ratio preserved */}
      <button
        onClick={() => open(activeIndex)}
        className="block w-full bg-[#1e1e1e] rounded-sm border border-[#FFD700]/20 overflow-hidden cursor-zoom-in"
        style={{ height: HERO_HEIGHT }}
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
                    src={p.thumb}
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
