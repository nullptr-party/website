import Link from 'next/link';
import { Shell } from './_ui';
import { ALMATY_CHAT, TELEGRAM, byYear, latestTalks, parts, stats, talks, venueOf, years, type CommunityEvent } from '../_shared';

// Direction B — «лог»: одна моноширинная гарнитура, события как строки журнала.
// Янтарь + голубой из палитры Okabe–Ito: пара различима при любом типе дальтонизма.
// Светлая тема через prefers-color-scheme.


function Row({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className="grid grid-cols-1 gap-y-1 border-t border-[var(--rule)] py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-x-6">
      <time dateTime={e.date} className="text-[13px] tabular-nums text-[var(--dim)] sm:pt-[2px]">{p.dd}.{p.mm}</time>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3">
          {isTalks
            ? <span className="bg-[var(--amber)] px-1.5 text-[15px] font-bold text-[var(--on-amber)]">talks[{e.talksIndex}]</span>
            : <span className={`text-[15px] font-bold ${e.cancelled ? 'line-through text-[var(--dim)]' : ''}`}>meetup #{e.number}</span>}
          {e.cancelled && <span className="text-[13px] text-[var(--dim)]">// отменён</span>}
          {venue && (venue.url
            ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--dim)] underline decoration-[var(--rule)] underline-offset-4 hover:text-[var(--fg)]">@ {venue.name}</a>
            : <span className="text-[13px] text-[var(--dim)]">@ {venue.name}</span>)}
        </div>
        {e.speakers && (
          <ul className="mt-2 space-y-1.5 font-body text-[15px] leading-snug">
            {e.speakers.map((s) => (
              <li key={s.name}>{s.topic} <span className="text-[var(--dim)]">— {s.name}</span></li>
            ))}
          </ul>
        )}
        {e.topics && <p className="mt-1.5 max-w-[65ch] font-body text-[15px] leading-relaxed text-[var(--dim)]">{e.topics.join(', ')}</p>}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-2 flex flex-wrap gap-x-5 text-[14px]">
            {e.eventPage && <Link href={`/lab/b/talks/${e.talksIndex}/`} className="inline-flex min-h-11 items-center text-[var(--link)] underline underline-offset-4">программа →</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[var(--link)] underline underline-offset-4">записи ↗</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DirectionB() {
  return (
    <Shell>
        <header>
          <h1 className="font-pixel text-[22px] leading-none sm:text-[34px]">nullptr<span className="text-[var(--amber)]">.</span>party</h1>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-[var(--dim)]">
            <span className="text-[var(--fg)]">Сообщество разработчиков в Алматы.</span> Регулярные митапы и конференция nullptr.talks.
          </p>
          <dl className="mt-6 grid max-w-md grid-cols-3 border-y border-[var(--rule)] py-3 text-[13px]">
            <div><dt className="text-[var(--dim)]">meetups</dt><dd className="text-xl font-bold tabular-nums">{stats.meetups}</dd></div>
            <div><dt className="text-[var(--dim)]">talks</dt><dd className="text-xl font-bold tabular-nums">{stats.talks}</dd></div>
            <div><dt className="text-[var(--dim)]">since</dt><dd className="text-xl font-bold tabular-nums">2024</dd></div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3 text-[15px] font-bold">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center bg-[var(--amber)] px-5 text-[var(--on-amber)] sm:flex-none">Telegram-канал</a>
            <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 flex-1 items-center justify-center border border-[var(--fg)] px-5 sm:flex-none">Чат Алматы</a>
          </div>
        </header>

        <section aria-labelledby="t" className="mt-14">
          <h2 id="t" className="text-[13px] text-[var(--dim)]">$ ls talks/</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {talks.map((t) => {
              const p = parts(t.date);
              const latest = t.id === latestTalks.id;
              return (
                <li key={t.id}>
                  <Link href={`/lab/b/talks/${t.talksIndex}/`} className={`inline-flex min-h-11 items-baseline gap-2 border px-3 py-2 text-[15px] ${latest ? 'border-[var(--amber)]' : 'border-[var(--rule)] hover:border-[var(--dim)]'}`}>
                    <b>[{t.talksIndex}]</b><span className="text-[13px] tabular-nums text-[var(--dim)]">{p.dd}.{p.mm}.{p.y.slice(2)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="log" className="mt-14">
          <h2 id="log" className="text-[13px] text-[var(--dim)]">$ tail events.log</h2>
          {years.map((y) => (
            <div key={y} className="mt-8">
              <h3 className="sticky top-0 z-10 bg-[var(--bg)] py-2 text-lg font-bold">{y} <span className="text-[13px] font-normal text-[var(--dim)]">{byYear[y].length} записей</span></h3>
              <ol>{byYear[y].map((e) => <Row key={e.id} e={e} />)}</ol>
            </div>
          ))}
        </section>

    </Shell>
  );
}
