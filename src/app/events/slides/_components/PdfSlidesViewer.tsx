'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { TouchEvent } from 'react';
import { decks, slideImage } from '../_decks';
import type { DeckId } from '../_decks';

const zoomLevels = [1, 1.5, 2];

export function PdfSlidesViewer({ id }: { id: DeckId }) {
  const deck = decks[id];
  const [page, setPage] = useState(1);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const scrollArea = useRef<HTMLElement>(null);
  const pdfUrl = `/events/slides/${id}.pdf`;

  useEffect(() => {
    if (page >= deck.pages) return;
    const next = new Image();
    next.src = slideImage(id, page + 1);
  }, [id, page, deck.pages]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        setPage(current => Math.min(current + 1, deck.pages));
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        setPage(current => Math.max(current - 1, 1));
      } else if (event.key === 'Escape') {
        setZoomIndex(0);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [deck.pages]);

  useEffect(() => {
    setImageError(false);
    scrollArea.current?.scrollTo(0, 0);
  }, [page]);

  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || zoomIndex !== 0) return;
    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY) * 1.5) return;
    setPage(current => Math.max(1, Math.min(deck.pages, current + (deltaX < 0 ? 1 : -1))));
  };

  return (
    <div className="flex h-dvh min-h-[420px] flex-col bg-[#202124] text-white">
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
        <Link href={`/events/nullpointer-talks-${deck.event}/`} className="shrink-0 font-pixel text-[10px] text-[#FFD700] hover:text-white">← talks[{deck.event}]</Link>
        <div className="min-w-0 text-center">
          <h1 className="truncate font-body text-sm font-semibold sm:text-base">{deck.title}</h1>
          <p className="hidden font-body text-xs text-white/50 sm:block">{deck.speaker}</p>
        </div>
        <a href={pdfUrl} download className="shrink-0 font-body text-xs text-[#FFD700] underline underline-offset-4 hover:text-white" aria-label="Скачать исходный PDF">Скачать PDF</a>
      </header>

      <main
        ref={scrollArea}
        className={`min-h-0 flex-1 overflow-auto p-2 sm:p-5 ${zoomIndex === 0 ? 'flex items-start justify-center sm:items-center' : ''}`}
        onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
        onTouchEnd={onTouchEnd}
        aria-label="Страница презентации"
      >
        {imageError ? (
          <p className="m-auto max-w-md text-center font-body text-sm text-white/75">Не удалось загрузить страницу. <a href={pdfUrl} className="text-[#FFD700] underline">Открыть исходный PDF</a></p>
        ) : (
          <img
            key={page}
            src={slideImage(id, page)}
            alt={`Слайд ${page} из ${deck.pages}: ${deck.title}`}
            className={zoomIndex === 0 ? 'max-h-full max-w-full object-contain shadow-xl' : 'max-w-none shadow-xl'}
            style={zoomIndex === 0 ? undefined : { width: `${zoomLevels[zoomIndex] * 100}%` }}
            onError={() => setImageError(true)}
            draggable={false}
          />
        )}
      </main>

      <nav aria-label="Управление презентацией" className="flex shrink-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 px-3 py-3 sm:gap-x-6">
        <button type="button" disabled={page === 1} onClick={() => setPage(current => current - 1)} className="min-h-11 min-w-11 rounded border border-white/20 px-3 font-body text-sm hover:border-[#FFD700] disabled:opacity-30" aria-label="Предыдущий слайд">←</button>
        <span className="min-w-20 text-center font-body text-sm tabular-nums" aria-live="polite">{page} / {deck.pages}</span>
        <button type="button" disabled={page === deck.pages} onClick={() => setPage(current => current + 1)} className="min-h-11 min-w-11 rounded border border-white/20 px-3 font-body text-sm hover:border-[#FFD700] disabled:opacity-30" aria-label="Следующий слайд">→</button>
        <span className="hidden h-7 w-px bg-white/15 sm:block" aria-hidden="true" />
        <div className="flex items-center gap-2">
          <button type="button" disabled={zoomIndex === 0} onClick={() => setZoomIndex(current => current - 1)} className="min-h-11 min-w-11 rounded border border-white/20 font-body text-lg hover:border-[#FFD700] disabled:opacity-30" aria-label="Уменьшить">−</button>
          <span className="min-w-11 text-center font-body text-xs tabular-nums">{Math.round(zoomLevels[zoomIndex] * 100)}%</span>
          <button type="button" disabled={zoomIndex === zoomLevels.length - 1} onClick={() => setZoomIndex(current => current + 1)} className="min-h-11 min-w-11 rounded border border-white/20 font-body text-lg hover:border-[#FFD700] disabled:opacity-30" aria-label="Увеличить">+</button>
        </div>
      </nav>
    </div>
  );
}
