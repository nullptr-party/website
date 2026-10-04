import Link from 'next/link';
import { events } from '@/app/_data/events';

const MONTHS_RU = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return { day: d, month: MONTHS_RU[parseInt(m, 10) - 1], year: y };
}

export function TalksQuickNav() {
  const talks = events
    .filter((e) => e.type === 'talks' && e.eventPage)
    .sort((a, b) => a.talksIndex! - b.talksIndex!);

  if (talks.length === 0) return null;

  return (
    <nav aria-label="События nullptr.talks" className="relative z-10 w-full max-w-2xl mx-auto mb-8 sm:mb-12">
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
        <span className="h-px bg-[#FFD700]/20 flex-1 max-w-[60px]" />
        <span className="font-pixel text-xs text-[#aaa] uppercase tracking-wide">
          nullptr.talks
        </span>
        <span className="h-px bg-[#FFD700]/20 flex-1 max-w-[60px]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
        {talks.map((talk) => {
          const d = formatDate(talk.date);
          return (
            <Link
              key={talk.id}
              href={talk.eventPage!}
              className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-[#2a2a2a] border border-[#363636] hover:border-[#FFD700] hover:bg-[#303030] transition-colors duration-200 motion-reduce:transition-none rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]"
            >
              <span className="font-body text-xs text-[#bbb] mb-2">nullptr.talks</span>
              <div className="font-pixel text-xl sm:text-2xl text-white group-hover:text-[#FFD700] leading-none mb-1.5 sm:mb-2">
                <span className="text-[#FFD700]/70 group-hover:text-[#FFD700]">[</span>
                {talk.talksIndex}
                <span className="text-[#FFD700]/70 group-hover:text-[#FFD700]">]</span>
              </div>
              <div className="font-body text-xs text-[#bbb] group-hover:text-white text-center leading-relaxed tabular-nums">
                {d.day} {d.month}
                <div className="text-[#aaa] group-hover:text-[#ccc] mt-0.5">{d.year}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
