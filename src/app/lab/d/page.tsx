import Link from 'next/link';
import { ALMATY_CHAT, TELEGRAM, MONTHS, byYear, events, latestTalks, parts, stats, talks, venueOf, years, type CommunityEvent } from '../_shared';
import { Footer, Masthead, SectionHead, Shell, focus, grid, link } from './_ui';

function Row({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className={`${grid} border-t border-[#D4D4CF] py-6`}>
      <time dateTime={e.date} className="col-span-4 text-[15px] tabular-nums text-[#555] sm:col-span-2 sm:pt-1">
        {p.d} {MONTHS[p.m]}
      </time>
      <div className="col-span-4 mt-1 sm:col-span-2 sm:mt-0 sm:pt-1">
        <span className={`inline-flex items-center gap-2 text-sm font-medium ${isTalks ? 'text-[#1F3BFF]' : 'text-[#111]'}`}>
          {isTalks ? <span aria-hidden className="h-3 w-3 rounded-full bg-[#1F3BFF]" /> : <span aria-hidden className="h-3 w-3 rounded-full border-[1.5px] border-[#111]" />}
          {isTalks ? 'Конференция' : 'Митап'}
        </span>
      </div>
      <div className="col-span-4 mt-2 min-w-0 sm:col-span-6 sm:mt-0">
        <h3 className={`text-[22px] font-semibold leading-tight tracking-[-0.015em] ${e.cancelled ? 'text-[#555] line-through' : ''}`}>
          {e.eventPage ? <Link href={`/lab/d/talks/${e.talksIndex}/`} className={`hover:text-[#1F3BFF] ${focus}`}>{e.title}</Link> : e.title}
          {e.cancelled && <span className="ml-3 align-middle text-sm font-medium no-underline">(отменён)</span>}
        </h3>
        {venue && (venue.url
          ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className={`mt-1 inline-block text-[15px] text-[#444] ${link}`}>{venue.name}</a>
          : <p className="mt-1 text-[15px] text-[#444]">{venue.name}</p>)}
        {e.speakers && (
          <ul className="mt-4 divide-y divide-[#E4E4DF] border-y border-[#E4E4DF]">
            {e.speakers.map((s) => (
              <li key={s.name} className="grid gap-1 py-2.5 sm:grid-cols-[1fr_14rem] sm:gap-6">
                <span className="text-[16px] leading-snug">{s.topic}</span>
                <span className="text-[15px] text-[#555]">{s.name}</span>
              </li>
            ))}
          </ul>
        )}
        {e.topics && <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#333]">{e.topics.join(' — ')}</p>}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-3 flex flex-wrap gap-x-6 text-[15px] font-medium">
            {e.eventPage && <Link href={`/lab/d/talks/${e.talksIndex}/`} className={`inline-flex min-h-11 items-center text-[#1F3BFF] ${link}`}>Программа и слайды →</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center ${link}`}>Записи на YouTube ↗</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DirectionD() {
  const lt = parts(latestTalks.date);
  return (
    <Shell>
      <Masthead right={<Link href="/lab/d/rules/" className={`inline-flex min-h-11 items-center ${link}`}>Правила</Link>} />

      <header className={`${grid} pt-14 sm:pt-24`}>
        <h1 className="col-span-4 text-[44px] font-semibold leading-[1.02] tracking-[-0.035em] sm:col-span-9 sm:text-[88px]">
          Сообщество разработчиков в&nbsp;Алматы
        </h1>
        <p className="col-span-4 mt-6 max-w-[40ch] text-lg leading-snug text-[#333] sm:col-span-5 sm:col-start-1 sm:mt-10 sm:text-xl">
          Регулярные митапы и конференция nullptr.talks.
        </p>
        <div className="col-span-4 mt-8 flex flex-col gap-3 sm:col-span-5 sm:col-start-8 sm:mt-10 sm:flex-row sm:justify-end">
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center bg-[#1F3BFF] px-6 text-base font-medium text-white hover:bg-[#1128D6] ${focus}`}>Telegram-канал</a>
          <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center border border-[#111] px-6 text-base font-medium hover:bg-[#111] hover:text-white ${focus}`}>Чат Алматы</a>
        </div>
      </header>

      <dl className={`${grid} mt-16 border-t border-[#111] sm:mt-24`}>
        {[[stats.meetups, 'митапы'], [stats.talks, 'конференции'], ['2024', 'год основания']].map(([n, l], i) => (
          <div key={l as string} className={`col-span-4 flex items-baseline justify-between border-b border-[#D4D4CF] py-4 sm:col-span-4 sm:block sm:border-b-0 sm:py-6 ${i ? 'sm:border-l sm:pl-6' : ''}`}>
            <dd className="order-2 text-[48px] font-semibold leading-none tabular-nums tracking-[-0.03em] sm:text-[96px]">{n}</dd>
            <dt className="order-1 text-[15px] text-[#555] sm:mt-3">{l}</dt>
          </div>
        ))}
      </dl>

      <section aria-labelledby="talks">
        <SectionHead id="talks" title="nullptr.talks" aside={<>Последняя — {lt.d} {MONTHS[lt.m]} {lt.y}</>} />
        <ol className={`${grid} mt-6 gap-y-4`}>
          {[...talks].reverse().map((t) => {
            const p = parts(t.date);
            const latest = t.id === latestTalks.id;
            return (
              <li key={t.id} className="col-span-2 sm:col-span-3">
                <Link href={`/lab/d/talks/${t.talksIndex}/`} className={`group flex h-full flex-col justify-between gap-10 border-t-2 pt-3 ${latest ? 'border-[#1F3BFF]' : 'border-[#111]'} ${focus}`}>
                  <span className="text-[56px] font-semibold leading-none tabular-nums tracking-[-0.04em] group-hover:text-[#1F3BFF] sm:text-[80px]">{t.talksIndex}</span>
                  <span className="text-[15px] text-[#444]">{p.d} {MONTHS[p.m]} {p.y}{latest && <span className="mt-1 block font-medium text-[#1F3BFF]">последняя</span>}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="all">
        <SectionHead id="all" title="Все встречи" aside={<>{events.length} событий с 2024 года</>} />
        {years.map((y) => (
          <div key={y} className={`${grid} mt-10`}>
            <h3 className="col-span-4 text-[40px] font-semibold leading-none tabular-nums tracking-[-0.03em] sm:sticky sm:top-6 sm:col-span-2 sm:self-start sm:text-5xl">{y}</h3>
            <ol className="col-span-4 mt-4 sm:col-span-10 sm:mt-0 sm:[&>li]:grid-cols-10">{byYear[y].map((e) => <Row key={e.id} e={e} />)}</ol>
          </div>
        ))}
      </section>

      <Footer />
    </Shell>
  );
}
