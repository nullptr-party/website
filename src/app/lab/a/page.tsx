import Link from 'next/link';
import { ALMATY_CHAT, TELEGRAM, MONTHS, byYear, latestTalks, parts, stats, talks, venueOf, years, type CommunityEvent } from '../_shared';

// Direction A — «пиксель как акцент»: тот же графит и жёлтый, пиксельный шрифт только крупно,
// всё остальное — Inter; тип события различается формой и словом, а не яркостью.

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD60A]';

function Marker({ talks }: { talks: boolean }) {
  return talks
    ? <span aria-hidden className="mt-[7px] h-3 w-3 shrink-0 bg-[#FFD60A]" />
    : <span aria-hidden className="mt-[7px] h-3 w-3 shrink-0 border-2 border-[#8F8F8F]" />;
}

function EventRow({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-3 border-t border-[#333] py-5 sm:grid-cols-[7rem_auto_1fr] sm:gap-x-4">
      <time dateTime={e.date} className="col-span-2 mb-1 text-sm tabular-nums text-[#B3B3B3] sm:col-span-1 sm:mb-0 sm:pt-[3px]">
        {p.d} {MONTHS[p.m]}
      </time>
      <Marker talks={isTalks} />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className={`text-[17px] font-semibold ${e.cancelled ? 'text-[#8F8F8F] line-through' : 'text-[#F2F2F2]'}`}>
            {e.title}
          </h3>
          {isTalks && <span className="bg-[#FFD60A] px-1.5 py-px text-xs font-semibold text-[#141414]">Конференция</span>}
          {e.cancelled && <span className="border border-[#8F8F8F] px-1.5 py-px text-xs text-[#D0D0D0]">Отменён</span>}
        </div>
        {venue && (
          venue.url
            ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className={`mt-0.5 inline-block text-[15px] text-[#B3B3B3] underline decoration-[#555] underline-offset-4 hover:text-[#F2F2F2] hover:decoration-[#FFD60A] ${focus}`}>{venue.name}</a>
            : <p className="mt-0.5 text-[15px] text-[#B3B3B3]">{venue.name}</p>
        )}
        {e.speakers && (
          <ul className="mt-3 space-y-2">
            {e.speakers.map((s) => (
              <li key={s.name} className="text-[15px] leading-snug">
                <span className="text-[#F2F2F2]">{s.topic}</span>
                <span className="block text-sm text-[#9E9E9E]">{s.name}</span>
              </li>
            ))}
          </ul>
        )}
        {e.topics && <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-[#B3B3B3]">{e.topics.join(' · ')}</p>}
        {e.image && (
          <img src={e.image} alt="" loading="lazy" className="mt-3 aspect-[16/9] w-full max-w-md rounded-[4px] object-cover" />
        )}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
            {e.eventPage && <Link href={`/lab/a/talks/${e.talksIndex}/`} className={`inline-flex min-h-11 items-center text-[#FFD60A] underline underline-offset-4 ${focus}`}>Программа и слайды</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center text-[#F2F2F2] underline decoration-[#666] underline-offset-4 hover:decoration-[#FFD60A] ${focus}`}>Записи на YouTube</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DirectionA() {
  const lt = parts(latestTalks.date);
  return (
    <div lang="ru" className="lab min-h-screen bg-[#1F1F1F] font-body text-[#F2F2F2] selection:bg-[#FFD60A] selection:text-[#141414]">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
        <header>
          <h1 className="font-pixel text-[22px] leading-none tracking-tight sm:text-4xl">nullptr<span className="text-[#FFD60A]">.</span>party</h1>
          <p className="mt-5 max-w-[34ch] text-lg leading-snug text-[#D0D0D0] sm:text-xl">
            Сообщество разработчиков в Алматы. Регулярные митапы и конференция nullptr.talks.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center bg-[#FFD60A] px-6 text-base font-semibold text-[#141414] transition-colors hover:bg-[#FFE55C] ${focus}`}>
              Telegram-канал
            </a>
            <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center border border-[#666] px-6 text-base font-medium text-[#F2F2F2] transition-colors hover:border-[#F2F2F2] ${focus}`}>
              Чат Алматы
            </a>
          </div>
          <p className="mt-6 text-sm tabular-nums text-[#9E9E9E]">{stats.meetups} митапа · {stats.talks} конференции · с 2024 года</p>
        </header>

        <section aria-labelledby="talks" className="mt-14">
          <h2 id="talks" className="font-pixel text-base">nullptr.talks</h2>
          <ol className="-mx-4 mt-5 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
            {[...talks].reverse().map((t) => {
              const p = parts(t.date);
              const latest = t.id === latestTalks.id;
              return (
                <li key={t.id} className="w-[42%] shrink-0 snap-start sm:w-auto">
                  <Link href={`/lab/a/talks/${t.talksIndex}/`} className={`group flex h-full flex-col justify-between gap-6 rounded-[4px] border p-4 transition-colors ${latest ? 'border-[#FFD60A]' : 'border-[#3A3A3A] hover:border-[#8F8F8F]'} ${focus}`}>
                    <span className="font-pixel text-2xl">[{t.talksIndex}]</span>
                    <span className="text-sm leading-tight text-[#B3B3B3]">{p.d} {MONTHS[p.m]}<br />{p.y}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
          <p className="mt-3 text-sm text-[#9E9E9E]">Последняя — nullptr.talks[{latestTalks.talksIndex}], {lt.d} {MONTHS[lt.m]} {lt.y}.</p>
        </section>

        <section aria-labelledby="timeline" className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="timeline" className="font-pixel text-base">Все встречи</h2>
            <p className="flex items-center gap-4 text-sm text-[#B3B3B3]">
              <span className="inline-flex items-center gap-1.5"><span aria-hidden className="h-2.5 w-2.5 bg-[#FFD60A]" />конференция</span>
              <span className="inline-flex items-center gap-1.5"><span aria-hidden className="h-2.5 w-2.5 border-2 border-[#8F8F8F]" />митап</span>
            </p>
          </div>
          {years.map((y) => (
            <div key={y} className="mt-10">
              <h3 className="font-pixel text-xl text-[#FFD60A]">{y}</h3>
              <ol className="mt-4">{byYear[y].map((e) => <EventRow key={e.id} e={e} />)}</ol>
            </div>
          ))}
        </section>

        <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-[#333] pt-5 text-sm text-[#9E9E9E]"><span>nullptr.party — сообщество разработчиков, Алматы</span><Link href="/lab/a/rules/" className="inline-flex min-h-11 items-center underline decoration-[#555] underline-offset-4 hover:text-[#F2F2F2]">Правила чата</Link></footer>
      </div>
    </div>
  );
}
