import Link from 'next/link';
import { Onest } from 'next/font/google';
import { ALMATY_CHAT, TELEGRAM, MONTHS, MONTHS_SHORT, byYear, latestTalks, parts, stats, talks, venueOf, years, type CommunityEvent } from '../_shared';

// Direction C — «афиша»: светлая бумага, чёрная краска, жёлтый только как подложка
// под чёрным текстом. Смысл никогда не держится на цвете. Пиксельный шрифт — штамп логотипа.

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest' });
const focus = 'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#141414]';

function Entry({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className={`grid grid-cols-[3.5rem_1fr] gap-x-4 border-t-2 border-[#141414] py-6 sm:grid-cols-[5.5rem_1fr_16rem] sm:gap-x-8 ${isTalks ? 'bg-[#FFD60A] -mx-4 px-4 sm:-mx-6 sm:px-6' : ''}`}>
      <time dateTime={e.date} className="leading-none">
        <span className="block text-[34px] font-black tabular-nums tracking-[-0.03em] sm:text-[52px]">{p.d}</span>
        <span className="mt-1 block text-sm font-semibold uppercase tracking-wide">{MONTHS_SHORT[p.m]}</span>
      </time>
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide">
          {isTalks ? 'Конференция' : 'Митап'}{e.cancelled && ' — отменён'}
        </p>
        <h3 className={`mt-1 text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[28px] ${e.cancelled ? 'line-through decoration-2' : ''}`}>{e.title}</h3>
        {venue && (venue.url
          ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className={`mt-1 inline-block text-base underline decoration-1 underline-offset-4 hover:decoration-2 ${focus}`}>{venue.name}</a>
          : <p className="mt-1 text-base">{venue.name}</p>)}
        {e.speakers && (
          <ul className="mt-4 space-y-3">
            {e.speakers.map((s) => (
              <li key={s.name} className="text-[17px] leading-snug"><span className="font-semibold">{s.topic}</span><span className="block text-[15px] text-[#3D3A33]">{s.name}{s.role ? `, ${s.role}` : ''}</span></li>
            ))}
          </ul>
        )}
        {e.topics && <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed text-[#3D3A33]">{e.topics.join(' / ')}</p>}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {e.eventPage && <Link href={`/lab/c/talks/${e.talksIndex}/`} className={`inline-flex min-h-12 items-center bg-[#141414] px-5 font-semibold text-[#F4F1EA] hover:bg-[#333] ${focus}`}>Программа и слайды</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center border-2 border-[#141414] px-5 font-semibold hover:bg-[#141414] hover:text-[#F4F1EA] ${focus}`}>Записи</a>}
          </div>
        )}
      </div>
      {e.image && <img src={e.image} alt="" loading="lazy" className="col-span-2 mt-4 aspect-[4/3] w-full object-cover grayscale-[15%] sm:col-span-1 sm:mt-0" />}
    </li>
  );
}

export default function DirectionC() {
  const lt = parts(latestTalks.date);
  return (
    <div lang="ru" className={`lab ${onest.variable} min-h-screen bg-[#F4F1EA] text-[#141414] selection:bg-[#141414] selection:text-[#FFD60A]`} style={{ fontFamily: 'var(--font-onest), system-ui, sans-serif' }}>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <header className="grid gap-10 border-b-[6px] border-[#141414] pb-10 sm:grid-cols-[1.3fr_1fr] sm:items-end">
          <div>
            <p className="inline-block bg-[#141414] px-3 py-2 font-pixel text-sm leading-none text-[#FFD60A] sm:text-base">nullptr.party</p>
            <h1 className="mt-6 text-[44px] font-black leading-[0.95] tracking-[-0.035em] sm:text-[80px]">Разработчики Алматы собираются здесь</h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-14 items-center justify-center bg-[#FFD60A] px-7 text-lg font-bold ring-2 ring-inset ring-[#141414] hover:bg-[#141414] hover:text-[#FFD60A] ${focus}`}>Telegram-канал</a>
              <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-14 items-center justify-center px-7 text-lg font-bold underline decoration-2 underline-offset-[6px] hover:bg-[#141414]/5 ${focus}`}>Чат Алматы</a>
            </div>
          </div>
          <Link href={`/lab/c/talks/${latestTalks.talksIndex}/`} className={`group block bg-[#141414] p-6 text-[#F4F1EA] ${focus}`}>
            <span className="text-sm font-semibold uppercase tracking-wide text-[#D9D4C7]">Последняя конференция</span>
            <span className="mt-3 block font-pixel text-2xl leading-tight text-[#FFD60A] sm:text-3xl">talks[{latestTalks.talksIndex}]</span>
            <span className="mt-3 block text-lg">{lt.d} {MONTHS[lt.m]} {lt.y} · {venueOf(latestTalks)?.name}</span>
            <span className="mt-6 block font-semibold underline underline-offset-4 group-hover:decoration-[#FFD60A]">Доклады и слайды →</span>
          </Link>
        </header>

        <section aria-label="Цифры" className="grid grid-cols-3 border-b-2 border-[#141414] py-6 text-center sm:text-left">
          {[[stats.meetups, 'митапа'], [stats.talks, 'конференции'], ['2024', 'год основания']].map(([n, l]) => (
            <div key={l as string}><span className="block text-3xl font-black tabular-nums sm:text-5xl">{n}</span><span className="text-sm font-medium sm:text-base">{l}</span></div>
          ))}
        </section>

        <nav aria-label="Все nullptr.talks" className="flex flex-wrap items-center gap-2 border-b-2 border-[#141414] py-5">
          <span className="mr-2 font-semibold">Все nullptr.talks:</span>
          {talks.map((t) => (
            <Link key={t.id} href={`/lab/c/talks/${t.talksIndex}/`} className={`inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-[#141414] px-3 font-pixel text-sm hover:bg-[#FFD60A] ${focus}`}>[{t.talksIndex}]</Link>
          ))}
        </nav>

        {years.map((y) => (
          <section key={y} aria-labelledby={`y${y}`} className="mt-14">
            <h2 id={`y${y}`} className="text-[64px] font-black leading-none tracking-[-0.04em] sm:text-[120px]">{y}</h2>
            <ol className="mt-4">{byYear[y].map((e) => <Entry key={e.id} e={e} />)}</ol>
          </section>
        ))}

        <footer className="mt-16 border-t-[6px] border-[#141414] pt-5 text-base font-medium flex flex-wrap justify-between gap-4"><span>nullptr.party — сообщество разработчиков, Алматы</span><Link href="/lab/c/rules/" className={`inline-flex min-h-11 items-center underline underline-offset-4 ${focus}`}>Правила сообщества</Link></footer>
      </div>
    </div>
  );
}
