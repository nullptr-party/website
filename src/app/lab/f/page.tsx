import Link from 'next/link';
import { ALMATY_CHAT, TELEGRAM, MONTHS, byYear, latestTalks, parts, stats, talks, venueOf, years, type CommunityEvent } from '../_shared';
import { Kind, Shell, btnGhost, btnPrimary, textLink } from './_ui';

function Card({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className={`flex flex-col overflow-hidden rounded-2xl bg-[var(--card)] ${isTalks ? 'ring-2 ring-[var(--y)] sm:col-span-2' : ''}`}>
      {e.image && <img src={e.image} alt="" loading="lazy" className={`w-full object-cover ${isTalks ? 'aspect-[21/9]' : 'aspect-[16/10]'}`} />}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Kind talks={isTalks} cancelled={e.cancelled} />
          <time dateTime={e.date} className="text-sm tabular-nums text-[var(--dim)]">{p.d} {MONTHS[p.m]}</time>
        </div>
        <h4 className={`disp mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] ${e.cancelled ? 'line-through decoration-2 text-[var(--dim)]' : ''}`}>{e.title}</h4>
        {venue && (venue.url
          ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className={`mt-1 self-start text-[15px] text-[var(--dim)] ${textLink}`}>{venue.name}</a>
          : <p className="mt-1 text-[15px] text-[var(--dim)]">{venue.name}</p>)}
        {e.speakers && (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {e.speakers.map((s) => (
              <li key={s.name} className="text-[15px] leading-snug"><span className="font-semibold">{s.topic}</span><span className="block text-sm text-[var(--dim)]">{s.name}</span></li>
            ))}
          </ul>
        )}
        {e.topics && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {e.topics.map((t) => <li key={t} className="rounded-full border border-[var(--rule)] px-3 py-1 text-sm text-[var(--fg)]">{t}</li>)}
          </ul>
        )}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {e.talksIndex !== undefined && <Link href={`/lab/f/talks/${e.talksIndex}/`} className={btnPrimary}>Программа и слайды</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className={btnGhost}>Записи</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DirectionF() {
  const lt = parts(latestTalks.date);
  return (
    <Shell back={false}>
      <header className="pb-16 pt-12 sm:pt-20">
        <h1 className="disp rise text-[clamp(2.6rem,11vw,8.5rem)] font-black uppercase leading-[0.9] tracking-[-0.035em]">
          <span>Код,</span> <span>люди</span> <span className="text-[var(--y)]">и</span> <span>Алматы</span>
        </h1>
        <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="max-w-[36ch] text-lg leading-relaxed text-[var(--dim)] sm:text-xl">
              <span className="text-[var(--fg)]">nullptr.party — сообщество разработчиков в Алматы.</span> Регулярные митапы и конференция nullptr.talks.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Telegram-канал</a>
              <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className={btnGhost}>Чат Алматы</a>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-6 sm:gap-10">
            {[[stats.meetups, 'митапа'], [stats.talks, 'конференции'], ['2024', 'с этого года']].map(([n, l]) => (
              <div key={l as string}><dd className="disp text-3xl font-bold tabular-nums sm:text-5xl">{n}</dd><dt className="mt-1 text-sm text-[var(--dim)]">{l}</dt></div>
            ))}
          </dl>
        </div>
      </header>

      <section aria-labelledby="talks" className="border-t border-[var(--rule)] pt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="talks" className="disp text-3xl font-bold tracking-[-0.02em] sm:text-5xl">nullptr.talks</h2>
          <p className="text-[15px] text-[var(--dim)]">Последняя — {lt.d} {MONTHS[lt.m]} {lt.y}</p>
        </div>
        <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {[...talks].reverse().map((t) => {
            const p = parts(t.date);
            const latest = t.id === latestTalks.id;
            return (
              <li key={t.id}>
                <Link href={`/lab/f/talks/${t.talksIndex}/`} className={`group flex aspect-[4/5] flex-col justify-between rounded-2xl p-4 transition-colors sm:p-5 ${latest ? 'bg-[var(--y)] text-[var(--ink)]' : 'bg-[var(--card)] hover:bg-[#262436]'}`}>
                  <span className="text-sm font-semibold">{latest ? 'Свежая' : `${p.d} ${MONTHS[p.m]}`}{latest ? '' : ` ${p.y}`}</span>
                  <span className="disp text-[clamp(3rem,13vw,6.5rem)] font-black leading-none tracking-[-0.05em]">[{t.talksIndex}]</span>
                  <span className={`text-sm ${latest ? 'font-semibold' : 'text-[var(--dim)] group-hover:text-[var(--fg)]'}`}>{latest ? `${p.d} ${MONTHS[p.m]} ${p.y}` : 'Доклады →'}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="all" className="mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="all" className="disp text-3xl font-bold tracking-[-0.02em] sm:text-5xl">Все встречи</h2>
          <p className="flex gap-5"><Kind talks /><Kind talks={false} /></p>
        </div>
        {years.map((y) => (
          <div key={y} className="mt-14">
            <h3 className="disp text-[clamp(4rem,18vw,11rem)] font-black leading-[0.8] tracking-[-0.05em] text-[var(--card)] [-webkit-text-stroke:2px_var(--v)]">{y}</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">{byYear[y].map((e) => <Card key={e.id} e={e} />)}</ol>
          </div>
        ))}
      </section>
    </Shell>
  );
}
