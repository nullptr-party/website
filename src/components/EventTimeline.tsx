'use client';

import React, { useEffect, useRef } from 'react';
import { CommunityEvent, events, venues, getEventsByYear } from '@/app/_data/events';
import { imageDimensions } from '@/app/_data/imageDimensions';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

function EventImage({ src, alt, isTalks }: { src: string; alt: string; isTalks: boolean }) {
  const dims = imageDimensions[src];
  return (
    <div
      className={`
        mb-2 overflow-hidden rounded-sm border
        ${isTalks ? 'border-[#FFD700]/20' : 'border-[#363636]'}
      `}
      style={dims ? { aspectRatio: `${dims.w} / ${dims.h}` } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={dims?.w}
        height={dims?.h}
        className="w-full h-auto"
      />
    </div>
  );
}

function EventCard({ event, index }: { event: CommunityEvent; index: number }) {
  const isTalks = event.type === 'talks';

  return (
    <div
      className="timeline-event opacity-0 translate-y-2 transition-[opacity,transform] duration-snap ease-md-decelerate"
      style={{ transitionDelay: `${Math.min(index * 20, 80)}ms` }}
    >
      <div className="flex gap-3 sm:gap-4">
        {/* Timeline dot */}
        <div className="flex flex-col items-center flex-shrink-0 w-6 sm:w-8">
          <div
            className={`
              w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm flex-shrink-0 mt-[3px]
              ${isTalks ? 'bg-[#FFD700] shadow-[0_0_8px_#FFD70066]' : 'bg-[#FFD700]/60'}
            `}
          />
          <div className="w-px flex-1 bg-[#353535]" />
        </div>

        {/* Card content */}
        <div
          className={`
            flex-1 mb-4 sm:mb-6 pb-4 sm:pb-6
            ${isTalks
              ? 'border border-[#FFD700]/30 bg-[#FFD700]/[0.03] p-3 sm:p-4 rounded-sm'
              : 'border-b border-[#303030]'
            }
          `}
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
            <span
              className={`
                font-pixel text-[10px] sm:text-xs uppercase tracking-wide
                ${isTalks ? 'text-[#FFD700]' : 'text-[#FFD700]/80'}
              `}
            >
              {event.title}
            </span>
            <span className="font-body text-[11px] sm:text-xs text-[#666] tabular-nums">
              {formatDate(event.date)}
            </span>
            {isTalks && (
              <span className="font-pixel text-[8px] sm:text-[9px] bg-[#FFD700] text-[#232323] px-1.5 py-0.5 uppercase tracking-wider">
                conf
              </span>
            )}
            {event.cancelled && (
              <span className="font-pixel text-[8px] sm:text-[9px] bg-red-900/50 text-red-400 px-1.5 py-0.5 uppercase tracking-wider">
                cancelled
              </span>
            )}
          </div>

          {/* Location */}
          {event.venueId && venues[event.venueId] && (
            venues[event.venueId].url ? (
              <a
                href={venues[event.venueId].url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs sm:text-sm text-[#999] hover:text-[#FFD700] transition-colors mb-2 block"
              >
                {venues[event.venueId].name}
              </a>
            ) : (
              <div className="font-body text-xs sm:text-sm text-[#999] mb-2">
                {venues[event.venueId].name}
              </div>
            )
          )}

          {/* Event image */}
          {event.image && (
            <EventImage src={event.image} alt={event.title} isTalks={isTalks} />
          )}

          {/* Speakers (for talks) */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="space-y-1.5 mb-2">
              {event.speakers.map((speaker, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2">
                  <span className="font-body text-xs sm:text-sm text-white/90">
                    {speaker.name}
                  </span>
                  <span className="font-body text-[11px] sm:text-xs text-[#FFD700]/70 leading-snug">
                    {speaker.topic}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Topics */}
          {event.topics && event.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {event.topics.map((topic, i) => (
                <span
                  key={i}
                  className="font-body text-[10px] sm:text-[11px] text-[#aaa] bg-[#2a2a2a] border border-[#363636] px-1.5 py-0.5 rounded-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Links row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            {event.eventPage && (
              <a
                href={event.eventPage}
                className="font-pixel text-[9px] sm:text-[10px] uppercase bg-[#FFD700] text-[#232323] px-3 py-1.5 hover:bg-[#ffe066] transition-colors tracking-wider"
              >
                Подробнее &rarr;
              </a>
            )}
            {event.youtubePlaylist && (
              <a
                href={event.youtubePlaylist}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-[11px] sm:text-xs text-[#FFD700]/80 hover:text-[#FFD700] transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Смотреть записи
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function YearMarker({ year }: { year: string }) {
  return (
    <div className="timeline-event opacity-0 translate-y-2 transition-[opacity,transform] duration-snap ease-md-decelerate flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div className="flex flex-col items-center flex-shrink-0 w-6 sm:w-8">
        <div className="w-2 h-2 bg-[#FFD700] rounded-full" />
      </div>
      <div className="flex items-center gap-3 flex-1">
        <span className="font-pixel text-sm sm:text-base text-[#FFD700] tracking-wider">{year}</span>
        <div className="flex-1 h-px bg-[#FFD700]/20" />
      </div>
    </div>
  );
}


export default function EventTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' }
    );

    container.querySelectorAll('.timeline-event').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const grouped = getEventsByYear(events);
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  const totalMeetups = events.filter(e => e.type === 'meetup').length;
  const totalTalks = events.filter(e => e.type === 'talks').length;

  return (
    <section className="w-full max-w-2xl mx-auto px-3 sm:px-6">
      {/* Stats bar */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mb-8 sm:mb-12 py-3 border-y border-[#353535]">
        <span className="font-pixel text-[9px] sm:text-[10px] text-[#888] uppercase tracking-wider">
          <span className="text-[#FFD700] text-xs sm:text-sm">{totalMeetups}</span> meetups
        </span>
        <span className="text-[#353535]">/</span>
        <span className="font-pixel text-[9px] sm:text-[10px] text-[#888] uppercase tracking-wider">
          <span className="text-[#FFD700] text-xs sm:text-sm">{totalTalks}</span> talks
        </span>
        <span className="text-[#353535]">/</span>
        <span className="font-pixel text-[9px] sm:text-[10px] text-[#888] uppercase tracking-wider">
          since <span className="text-[#FFD700] text-xs sm:text-sm">2024</span>
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <span className="font-pixel text-xs sm:text-sm text-[#FFD700] uppercase tracking-widest">Timeline</span>
        <div className="flex-1 h-px bg-[#353535]" />
        <span className="font-body text-[11px] text-[#555]">{events.length} events logged</span>
      </div>

      {/* Timeline */}
      <div ref={containerRef}>
        {years.map((year) => {
          const yearEvents = grouped[year];
          return (
            <div key={year}>
              <YearMarker year={year} />
              {yearEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          );
        })}

      </div>
    </section>
  );
}
