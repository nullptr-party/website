import { talksByNumber, talksParams, talksPhotos } from '../../../_talks';
import { Shell, btnPrimary, btnSecondary, focus, textLink } from '../../_ui';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

export default async function TalksA({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const e = talksByNumber(n);
  const photos = await talksPhotos(e.number);
  const isPast = e.completed || new Date() > new Date(`${e.date}T23:59:59`);

  return (
    <Shell>
      <header className="mt-10 sm:mt-14">
        <h1 className="font-pixel text-[26px] leading-tight tracking-tight sm:text-5xl">
          nullptr.talks<span className="text-[#FFD60A]">[{e.number}]</span>
        </h1>
        <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-base">
          <dt className="text-[#9E9E9E]">Когда</dt><dd>{e.dateLabel}</dd>
          <dt className="text-[#9E9E9E]">Где</dt>
          <dd><a href={e.venueUrl} target="_blank" rel="noopener noreferrer" className={textLink}>{e.venueLabel}</a></dd>
          {e.format && <><dt className="text-[#9E9E9E]">Формат</dt><dd className="text-[#D0D0D0]">{e.format}</dd></>}
        </dl>
        {e.intro && <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-[#D0D0D0]">{e.intro}</p>}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          {isPast ? (
            <>
              <p className="inline-flex min-h-12 items-center gap-2 text-base text-[#B3B3B3]">
                <span aria-hidden className="h-3 w-3 border-2 border-[#8F8F8F]" />Мероприятие прошло
              </p>
              {e.playlist && <a href={e.playlist} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Записи на YouTube</a>}
            </>
          ) : (
            <>
              {e.registration && <a href={e.registration} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Зарегистрироваться</a>}
              {e.chat && <a href={e.chat} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Чат мероприятия</a>}
            </>
          )}
        </div>
      </header>

      {photos.length > 0 ? (
        <section aria-label="Фотографии" className="mt-12">
          <ul className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {photos.slice(0, 9).map((p, i) => (
              <li key={p.src} className={`w-[70%] shrink-0 snap-start sm:w-auto ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                <a href={p.src} target="_blank" rel="noopener noreferrer" className={`block ${focus}`}>
                  <img src={p.thumb} alt="" loading={i < 3 ? 'eager' : 'lazy'} width={p.thumbWidth} height={p.thumbHeight} className="aspect-[4/3] h-full w-full rounded-[4px] object-cover" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-[#9E9E9E]">{photos.length} фото · автор Карина (<a href="https://instagram.com/unikarinaa" target="_blank" rel="noopener noreferrer" className={textLink}>@unikarinaa</a>)</p>
        </section>
      ) : e.poster ? (
        <img src={e.poster} alt={`Постер nullptr.talks[${e.number}]`} width={1200} height={1200} className="mt-12 w-full max-w-md rounded-[4px]" />
      ) : null}

      <section aria-labelledby="speakers" className="mt-16">
        <h2 id="speakers" className="font-pixel text-base">Доклады</h2>
        <ol className="mt-4">
          {e.speakers.map((s) => (
            <li key={s.name} className="border-t border-[#333] py-6">
              <h3 className="max-w-[40ch] text-xl font-semibold leading-snug">{s.topic}</h3>
              <p className="mt-2 text-base">
                {s.profile ? <a href={s.profile} target="_blank" rel="noopener noreferrer" className={textLink}>{s.name}</a> : s.name}
                <span className="text-[#9E9E9E]"> · {s.role}</span>
              </p>
              {s.description && <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#B3B3B3]">{s.description}</p>}
              {(s.slides || s.video) && (
                <div className="mt-2 flex flex-wrap gap-x-5 text-[15px] font-medium">
                  {s.slides && <a href={s.slides} {...(s.slides.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} className={`inline-flex min-h-11 items-center text-[#FFD60A] underline underline-offset-4 ${focus}`}>Слайды</a>}
                  {s.video && <a href={s.video} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center underline decoration-[#666] underline-offset-4 hover:decoration-[#FFD60A] ${focus}`}>Видео</a>}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="partners" className="mt-14">
        <h2 id="partners" className="font-pixel text-base">Информационные партнёры</h2>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {e.partners.map((p) => {
            const inner = (
              <>
                <span className="flex aspect-[3/2] items-center justify-center rounded-[4px] bg-[#F2F2F2] p-3">
                  <img src={p.logo} alt="" loading="lazy" className="max-h-full max-w-full object-contain" style={{ maxWidth: p.scale, maxHeight: p.scale }} />
                </span>
                <span className="mt-2 block text-sm leading-snug">{p.name}</span>
              </>
            );
            return (
              <li key={p.name}>
                {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" className={`block hover:underline hover:decoration-[#FFD60A] hover:underline-offset-4 ${focus}`}>{inner}</a> : inner}
              </li>
            );
          })}
        </ul>
      </section>

      {e.footerLinks && (
        <ul className="mt-12 flex flex-wrap gap-x-5 text-[15px]">
          {e.footerLinks.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center text-[#B3B3B3] ${textLink}`}>{l.label}</a></li>)}
        </ul>
      )}
    </Shell>
  );
}
