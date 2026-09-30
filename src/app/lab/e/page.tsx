import Link from 'next/link';
import { ALMATY_CHAT, TELEGRAM, MONTHS, byYear, events, parts, stats, talks, latestTalks, venueOf, years, type CommunityEvent } from '../_shared';
import { Footer, H2, Screen, btnInk, btnLine, focus } from './_ui';

function Entry({ e }: { e: CommunityEvent }) {
  const p = parts(e.date);
  const isTalks = e.type === 'talks';
  const venue = venueOf(e);
  return (
    <li className={`border-2 border-[#0F380F] ${isTalks ? 'bg-[#0F380F] text-[#9BBC0F]' : ''}`}>
      <div className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b-2 px-3 py-2 ${isTalks ? 'border-[#9BBC0F]' : 'border-[#0F380F]'}`}>
        <span className="inline-flex items-center gap-2 font-pixel text-[12px] leading-relaxed"><span aria-hidden className={`h-3 w-3 border-2 border-current ${isTalks ? 'bg-current' : ''}`} />{isTalks ? 'КОНФЕРЕНЦИЯ' : 'МИТАП'}{e.cancelled ? ' · ОТМЕНЁН' : ''}</span>
        <time dateTime={e.date} className="text-[16px] tabular-nums">{p.d} {MONTHS[p.m]}</time>
      </div>
      <div className="px-3 py-3">
        <h3 className={`font-pixel text-base leading-relaxed ${e.cancelled ? 'line-through decoration-2' : ''}`}>{e.title}</h3>
        {venue && (venue.url
          ? <a href={venue.url} target="_blank" rel="noopener noreferrer" className={`mt-1 inline-block text-[15px] underline decoration-2 underline-offset-4 ${focus}`}>{venue.name}</a>
          : <p className="mt-1 text-[15px]">{venue.name}</p>)}
        {e.speakers && (
          <ul className="mt-3 space-y-2 text-[15px] leading-snug">
            {e.speakers.map((s) => <li key={s.name}>{s.topic}<span className="block text-[15px] opacity-90">{s.name}</span></li>)}
          </ul>
        )}
        {e.topics && <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed">{e.topics.join(' · ')}</p>}
        {e.image && <img src={e.image} alt="" loading="lazy" className="e-photo mt-3 aspect-[16/9] w-full max-w-md border-2 border-[#0F380F] object-cover" />}
        {(e.eventPage || e.youtubePlaylist) && (
          <div className="mt-3 flex flex-wrap gap-3">
            {e.eventPage && <Link href={`/lab/e/talks/${e.talksIndex}/`} className={`inline-flex min-h-11 items-center border-2 border-[#9BBC0F] bg-[#9BBC0F] px-4 text-[15px] text-[#0F380F] hover:bg-[#8BAC0F] ${focus} focus-visible:outline-[#9BBC0F]`}>Программа и слайды</Link>}
            {e.youtubePlaylist && <a href={e.youtubePlaylist} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center border-2 border-current px-4 text-[15px] ${focus} focus-visible:outline-[#9BBC0F]`}>Записи на YouTube</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function DirectionE() {
  return (
    <Screen>
      <header>
        <h1 className="font-pixel text-[22px] leading-tight sm:text-[34px]">nullptr.party<span aria-hidden className="e-cursor">_</span></h1>
        <p className="mt-5 max-w-[36ch] text-lg leading-snug">Сообщество разработчиков в Алматы. Регулярные митапы и конференция nullptr.talks.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={btnInk}>Telegram-канал</a>
          <a href={ALMATY_CHAT} target="_blank" rel="noopener noreferrer" className={btnLine}>Чат Алматы</a>
        </div>
        <dl className="mt-8 grid grid-cols-3 border-2 border-[#0F380F] text-center">
          {[['МИТАПЫ', stats.meetups], ['TALKS', stats.talks], ['С ГОДА', 2024]].map(([l, n], i) => (
            <div key={l} className={`px-2 py-3 ${i ? 'border-l-2 border-[#0F380F]' : ''}`}>
              <dt className="font-pixel text-[12px]">{l}</dt>
              <dd className="mt-2 font-pixel text-xl tabular-nums sm:text-2xl">{n}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section aria-labelledby="sel" className="mt-12">
        <H2 id="sel">ВЫБЕРИ talks</H2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[...talks].reverse().map((t) => {
            const p = parts(t.date);
            const latest = t.id === latestTalks.id;
            return (
              <li key={t.id}>
                <Link href={`/lab/e/talks/${t.talksIndex}/`} className={`group flex h-full flex-col gap-3 border-2 border-[#0F380F] p-3 ${latest ? 'bg-[#0F380F] text-[#9BBC0F]' : 'hover:bg-[#8BAC0F]'} ${focus}`}>
                  <span className="font-pixel text-xl">[{t.talksIndex}]</span>
                  <span className="text-[16px] leading-tight">{p.d} {MONTHS[p.m]} {p.y}{latest && <><br />последняя</>}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="log" className="mt-12">
        <H2 id="log">ВСЕ ВСТРЕЧИ · {events.length}</H2>
        {years.map((y) => (
          <div key={y} className="mt-8 first:mt-0">
            <h3 className="mb-4 inline-block bg-[#0F380F] px-3 py-2 font-pixel text-base text-[#9BBC0F]">{y}</h3>
            <ol className="space-y-4">{byYear[y].map((e) => <Entry key={e.id} e={e} />)}</ol>
          </div>
        ))}
      </section>
      <Footer />
    </Screen>
  );
}
