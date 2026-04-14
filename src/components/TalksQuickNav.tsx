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
    <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-12">
      <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
        <span className="h-px bg-[#FFD700]/20 flex-1 max-w-[60px]" />
        <span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase tracking-[0.3em]">
          nullptr.talks
        </span>
        <span className="h-px bg-[#FFD700]/20 flex-1 max-w-[60px]" />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {talks.map((talk) => {
          const d = formatDate(talk.date);
          return (
            <Link
              key={talk.id}
              href={talk.eventPage!}
              className="group relative flex flex-col items-center justify-center p-3 sm:p-4 bg-[#2a2a2a] border border-[#363636] hover:border-[#FFD700] hover:bg-[#303030] transition-all duration-200 rounded-sm"
            >
              <div className="font-pixel text-xl sm:text-2xl text-white group-hover:text-[#FFD700] transition-colors leading-none mb-1.5 sm:mb-2">
                <span className="text-[#FFD700]/70 group-hover:text-[#FFD700]">[</span>
                {talk.talksIndex}
                <span className="text-[#FFD700]/70 group-hover:text-[#FFD700]">]</span>
              </div>
              <div className="font-pixel text-[8px] sm:text-[9px] text-[#888] group-hover:text-white/90 uppercase tracking-wider transition-colors text-center leading-relaxed">
                {d.day} {d.month}
                <div className="text-[#555] group-hover:text-[#888] mt-0.5">{d.year}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
