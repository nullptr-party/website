import Link from 'next/link';
import { talksByNumber, talksParams, talksPhotos, talksEvents } from '../../../_talks';
import { Shell, btnGhost, btnPrimary, textLink } from '../../_ui';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

export default async function TalksF({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const event = talksByNumber(n);
  const photos = await talksPhotos(event.number);
  const isPast = new Date() > new Date(`${event.date}T23:59:59`);
  const done = event.completed || (event.playlist && isPast);
  const ext = (u: string) => (u.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' });

  return (
    <Shell>
      <header className="grid gap-10 pb-14 pt-12 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-14 sm:pt-16">
        <p aria-hidden className="disp text-[clamp(7rem,34vw,17rem)] font-black leading-[0.78] tracking-[-0.06em] text-[var(--y)]">[{event.number}]</p>
        <div>
          <h1 className="disp text-4xl font-bold leading-none tracking-[-0.03em] sm:text-6xl">nullptr.talks[{event.number}]</h1>
          <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-[17px]">
            <dt className="text-[var(--dim)]">Когда</dt><dd>{event.dateLabel}</dd>
            <dt className="text-[var(--dim)]">Где</dt><dd><a href={event.venueUrl} target="_blank" rel="noopener noreferrer" className={textLink}>{event.venueLabel}</a></dd>
            {event.format && <><dt className="text-[var(--dim)]">Формат</dt><dd>{event.format}</dd></>}
          </dl>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {done ? (
              <>
                <span className="inline-flex min-h-12 items-center text-[15px] font-semibold text-[var(--dim)]">Мероприятие прошло</span>
                {event.playlist && <a href={event.playlist} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Смотреть записи</a>}
              </>
            ) : (
              <>
                {event.registration && <a href={event.registration} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Регистрация</a>}
                {event.chat && <a href={event.chat} target="_blank" rel="noopener noreferrer" className={btnGhost}>Чат мероприятия</a>}
              </>
            )}
          </div>
        </div>
      </header>

      {event.intro && <p className="max-w-[60ch] border-t border-[var(--rule)] pt-10 text-xl leading-relaxed sm:text-2xl">{event.intro}</p>}

      {photos.length > 0 ? (
        <section aria-label="Фотографии" className="mt-14">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {photos.slice(0, 12).map((ph, i) => (
              <li key={ph.src} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
                <a href={ph.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl">
                  <img src={ph.thumb} alt="" loading={i < 3 ? 'eager' : 'lazy'} width={ph.thumbWidth} height={ph.thumbHeight} className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-[var(--dim)]">
            Фото: Карина (<a href="https://instagram.com/unikarinaa" target="_blank" rel="noopener noreferrer" className={textLink}>@unikarinaa</a>)
            {photos.length > 12 && ` · показаны 12 из ${photos.length}`}
          </p>
        </section>
      ) : event.poster ? (
        <img src={event.poster} alt={`Афиша nullptr.talks[${event.number}]`} width={1200} height={1200} className="mt-14 w-full max-w-xl rounded-2xl" />
      ) : null}

      <section aria-labelledby="sp" className="mt-24">
        <h2 id="sp" className="disp text-3xl font-bold tracking-[-0.02em] sm:text-5xl">Спикеры</h2>
        <ol className="mt-8 grid gap-4 lg:grid-cols-2">
          {event.speakers.map((s) => (
            <li key={s.name} className="flex flex-col rounded-2xl bg-[var(--card)] p-6 sm:p-8">
              <h3 className="disp text-xl font-bold leading-snug tracking-[-0.01em] text-[var(--y)] sm:text-2xl">{s.topic}</h3>
              <p className="mt-4 text-[17px] font-semibold">
                {s.profile ? <a href={s.profile} target="_blank" rel="noopener noreferrer" className={textLink}>{s.name}</a> : s.name}
              </p>
              <p className="text-[15px] text-[var(--dim)]">{s.role}</p>
              {s.description && <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[var(--dim)]">{s.description}</p>}
              {(s.slides || s.video) && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {s.slides && <a href={s.slides} {...ext(s.slides)} className={btnGhost}>Презентация</a>}
                  {s.video && <a href={s.video} target="_blank" rel="noopener noreferrer" className={btnGhost}>Запись доклада</a>}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="pt" className="mt-24">
        <h2 id="pt" className="disp text-3xl font-bold tracking-[-0.02em] sm:text-5xl">Информационные партнёры</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {event.partners.map((p) => {
            const inner = (
              <>
                <span className="flex aspect-square items-center justify-center rounded-xl bg-[#F3F1EA] p-4">
                  <img src={p.logo} alt="" className="max-h-full max-w-full object-contain" style={{ maxWidth: p.scale, maxHeight: p.scale }} />
                </span>
                <span className="mt-3 block text-[15px] font-semibold">{p.name}</span>
              </>
            );
            return <li key={p.name}>{p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" className="block rounded-2xl p-2 hover:bg-[var(--card)]">{inner}</a> : <div className="p-2">{inner}</div>}</li>;
          })}
        </ul>
      </section>

      {event.footerLinks && (
        <ul className="mt-14 flex flex-wrap gap-x-6">
          {event.footerLinks.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center text-[15px] font-semibold ${textLink}`}>{l.label}</a></li>)}
        </ul>
      )}

      <nav aria-label="Другие nullptr.talks" className="mt-16 flex flex-wrap items-center gap-2 border-t border-[var(--rule)] pt-8">
        <span className="mr-2 text-[15px] text-[var(--dim)]">Другие выпуски:</span>
        {talksEvents.map((t) => (
          <Link key={t.number} href={`/lab/f/talks/${t.number}/`} aria-current={t.number === event.number ? 'page' : undefined}
            className={`disp inline-flex min-h-11 min-w-14 items-center justify-center rounded-full px-4 font-bold ${t.number === event.number ? 'bg-[var(--y)] text-[var(--ink)]' : 'border-2 border-[var(--rule)] hover:border-[var(--v)]'}`}>
            [{t.number}]
          </Link>
        ))}
      </nav>
    </Shell>
  );
}
