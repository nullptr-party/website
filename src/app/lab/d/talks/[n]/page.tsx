import Link from 'next/link';
import { talksByNumber, talksParams, talksPhotos } from '../../../_talks';
import { Footer, Masthead, SectionHead, Shell, focus, grid, link } from '../../_ui';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

export default async function TalksPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const event = talksByNumber(n);
  const photos = await talksPhotos(event.number);
  const done = event.completed || (!!event.playlist && new Date() > new Date(`${event.date}T23:59:59`));
  const facts: [string, React.ReactNode][] = [
    ['Когда', event.dateLabel],
    ['Где', <a key="v" href={event.venueUrl} target="_blank" rel="noopener noreferrer" className={link}>{event.venueLabel}</a>],
    ...(event.format ? [['Формат', event.format] as [string, React.ReactNode]] : []),
  ];

  return (
    <Shell>
      <Masthead right={<Link href="/lab/d/" className={`inline-flex min-h-11 items-center ${link}`}>← Все встречи</Link>} />

      <header className={`${grid} pt-14 sm:pt-20`}>
        <p className="col-span-4 text-[15px] font-medium text-[#1F3BFF] sm:col-span-12">Конференция nullptr.party</p>
        <h1 className="col-span-4 mt-3 text-[52px] font-semibold leading-none tracking-[-0.04em] sm:col-span-12 sm:text-[120px]">
          nullptr.talks<span className="tabular-nums text-[#1F3BFF]">[{event.number}]</span>
        </h1>
        <dl className="col-span-4 mt-10 border-t border-[#111] sm:col-span-5">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#D4D4CF] py-3 text-[16px]">
              <dt className="text-[#555]">{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="col-span-4 mt-10 sm:col-span-6 sm:col-start-7">
          {event.intro && <p className="max-w-[60ch] text-lg leading-relaxed text-[#222]">{event.intro}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {done ? (
              <>
                <p className="w-full text-[15px] text-[#555] sm:w-auto sm:pr-3">Мероприятие завершено.</p>
                {event.playlist && <a href={event.playlist} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center bg-[#1F3BFF] px-6 font-medium text-white hover:bg-[#1128D6] ${focus}`}>Смотреть записи ↗</a>}
              </>
            ) : (
              <>
                {event.registration && <a href={event.registration} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center bg-[#1F3BFF] px-6 font-medium text-white hover:bg-[#1128D6] ${focus}`}>Регистрация</a>}
                {event.chat && <a href={event.chat} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center border border-[#111] px-6 font-medium hover:bg-[#111] hover:text-white ${focus}`}>Чат мероприятия</a>}
              </>
            )}
          </div>
        </div>
      </header>

      {photos.length > 0 ? (
        <section aria-label="Фотографии" className="mt-16 sm:mt-24">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-3">
            {photos.slice(0, 12).map((ph, i) => (
              <li key={ph.src} className={i === 0 ? 'col-span-2 row-span-2 sm:col-span-4' : 'sm:col-span-2'}>
                <a href={ph.src} target="_blank" rel="noopener noreferrer" className={`block ${focus}`}>
                  <img src={ph.thumb} alt="" loading={i < 3 ? 'eager' : 'lazy'} width={ph.thumbWidth} height={ph.thumbHeight} className="aspect-[3/2] h-full w-full object-cover" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[15px] text-[#555]">Фото: <a href="https://instagram.com/unikarinaa" target="_blank" rel="noopener noreferrer" className={link}>Карина</a>{photos.length > 12 && ` · показаны 12 из ${photos.length}`}</p>
        </section>
      ) : event.poster ? (
        <img src={event.poster} alt={`Постер nullptr.talks[${event.number}]`} width={1200} height={1200} className="mt-16 w-full max-w-xl" />
      ) : null}

      <section aria-labelledby="sp">
        <SectionHead id="sp" title="Спикеры" aside={<>{event.speakers.length} доклада</>} />
        <ol className="mt-2">
          {event.speakers.map((s, i) => (
            <li key={s.name} className={`${grid} border-b border-[#D4D4CF] py-8`}>
              <span className="col-span-4 text-[40px] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[#1F3BFF] sm:col-span-1">{i + 1}</span>
              <div className="col-span-4 mt-3 sm:col-span-4 sm:mt-0">
                <h3 className="text-[20px] font-semibold leading-tight">{s.profile ? <a href={s.profile} target="_blank" rel="noopener noreferrer" className={link}>{s.name}</a> : s.name}</h3>
                <p className="mt-1 text-[15px] text-[#555]">{s.role}</p>
              </div>
              <div className="col-span-4 mt-4 sm:col-span-7 sm:mt-0">
                <p className="text-[24px] font-medium leading-snug tracking-[-0.015em]">{s.topic}</p>
                {s.description && <p className="mt-3 max-w-[62ch] text-[16px] leading-relaxed text-[#333]">{s.description}</p>}
                {(s.slides || s.video) && (
                  <div className="mt-3 flex flex-wrap gap-x-6 text-[15px] font-medium">
                    {s.slides && <a href={s.slides} {...(s.slides.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className={`inline-flex min-h-11 items-center text-[#1F3BFF] ${link}`}>Презентация →</a>}
                    {s.video && <a href={s.video} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center ${link}`}>Запись доклада ↗</a>}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="pt">
        <SectionHead id="pt" title="Информационные партнёры" />
        <ul className="mt-6 grid grid-cols-2 border-l border-t border-[#D4D4CF] sm:grid-cols-4">
          {event.partners.map((p) => {
            const inner = (
              <>
                <span className="flex aspect-[3/2] items-center justify-center p-4">
                  <img src={p.logo} alt="" className="max-h-full max-w-full object-contain" style={{ maxWidth: p.scale ?? '80%', maxHeight: p.scale ?? '80%' }} />
                </span>
                <span className="block px-4 pb-4 text-[15px] font-medium">{p.name}</span>
              </>
            );
            return (
              <li key={p.name} className="border-b border-r border-[#D4D4CF]">
                {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" className={`block h-full hover:bg-[#F0F0EA] ${focus}`}>{inner}</a> : inner}
              </li>
            );
          })}
        </ul>
        {event.footerLinks && (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {event.footerLinks.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center ${link}`}>{l.label}</a></li>)}
          </ul>
        )}
      </section>

      <Footer />
    </Shell>
  );
}
