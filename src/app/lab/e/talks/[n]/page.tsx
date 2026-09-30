import { talksByNumber, talksParams, talksPhotos, type TalksEvent } from '../../../_talks';
import { Footer, H2, Screen, btnInk, btnLine, focus, link } from '../../_ui';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

function Speaker({ s, i }: { s: TalksEvent['speakers'][number]; i: number }) {
  const ext = (u: string) => (u.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' });
  return (
    <li className="border-2 border-[#0F380F]">
      <div className="flex items-center justify-between gap-3 border-b-2 border-[#0F380F] px-3 py-2">
        <span className="font-pixel text-[12px]">ДОКЛАД {i + 1}</span>
      </div>
      <div className="px-3 py-4">
        <h3 className="font-pixel text-[14px] leading-[1.7] sm:text-base">{s.topic}</h3>
        <p className="mt-3 text-[16px]">
          {s.profile ? <a href={s.profile} target="_blank" rel="noopener noreferrer" className={link}>{s.name}</a> : s.name}
        </p>
        <p className="text-[16px]">{s.role}</p>
        {s.description && <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed">{s.description}</p>}
        {(s.slides || s.video) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {s.slides && <a href={s.slides} {...ext(s.slides)} className={btnLine}>Презентация</a>}
            {s.video && <a href={s.video} target="_blank" rel="noopener noreferrer" className={btnLine}>Смотреть запись</a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default async function TalksE({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const e = talksByNumber(n);
  const photos = await talksPhotos(e.number);
  const isPast = new Date() > new Date(`${e.date}T23:59:59`);
  const done = e.completed || (e.playlist && isPast);
  return (
    <Screen back>
      <header>
        <h1 className="font-pixel text-[24px] leading-tight sm:text-[36px]">talks[{e.number}]</h1>
        <p className="mt-2 text-[15px]">nullptr.talks от nullptr.party</p>
        <dl className="mt-6 grid gap-x-4 gap-y-2 text-[16px] sm:grid-cols-[7rem_1fr]">
          <dt className="font-pixel text-[12px] leading-[2.2]">КОГДА</dt><dd>{e.dateLabel}</dd>
          <dt className="font-pixel text-[12px] leading-[2.2]">ГДЕ</dt>
          <dd><a href={e.venueUrl} target="_blank" rel="noopener noreferrer" className={link}>{e.venueLabel}</a></dd>
          {e.format && <><dt className="font-pixel text-[12px] leading-[2.2]">ФОРМАТ</dt><dd>{e.format}</dd></>}
        </dl>
        {e.intro && <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed">{e.intro}</p>}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {done ? (
            <>
              <p className="inline-flex min-h-12 items-center border-2 border-dashed border-[#0F380F] px-5 text-[15px]">Мероприятие завершено</p>
              {e.playlist && <a href={e.playlist} target="_blank" rel="noopener noreferrer" className={btnInk}>Смотреть записи</a>}
            </>
          ) : (
            <>
              {e.registration && <a href={e.registration} target="_blank" rel="noopener noreferrer" className={btnInk}>Регистрация</a>}
              {e.chat && <a href={e.chat} target="_blank" rel="noopener noreferrer" className={btnLine}>Чат мероприятия</a>}
            </>
          )}
        </div>
      </header>

      {photos.length > 0 ? (
        <section aria-labelledby="ph" className="mt-12">
          <H2 id="ph">ФОТО · {photos.length}</H2>
          <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {photos.slice(0, 13).map((p, i) => (
              <li key={p.src} className={i === 0 ? 'col-span-3 sm:col-span-2 sm:row-span-2' : ''}>
                <a href={p.src} target="_blank" rel="noopener noreferrer" className={`block h-full border-2 border-[#0F380F] bg-[#8BAC0F] ${focus}`}>
                  <img src={p.thumb} alt={`Фото ${i + 1}`} loading="lazy" className="e-photo aspect-square h-full w-full object-cover" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[16px]">Фото: Карина, <a href="https://instagram.com/unikarinaa" target="_blank" rel="noopener noreferrer" className={link}>@unikarinaa</a>{photos.length > 13 && ` · показаны 13 из ${photos.length}`}</p>
        </section>
      ) : e.poster ? (
        <img src={e.poster} alt={`Постер nullptr.talks[${e.number}]`} className="mt-10 w-full max-w-md border-2 border-[#0F380F]" />
      ) : null}

      <section aria-labelledby="sp" className="mt-12">
        <H2 id="sp">СПИКЕРЫ</H2>
        <ol className="space-y-4">{e.speakers.map((s, i) => <Speaker key={s.name} s={s} i={i} />)}</ol>
      </section>

      <section aria-labelledby="pa" className="mt-12">
        <H2 id="pa">ИНФОПАРТНЁРЫ</H2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {e.partners.map((p) => {
            const inner = (
              <>
                <span className="flex aspect-[3/2] items-center justify-center border-b-2 border-[#0F380F] bg-[#F2F4E6] p-3">
                  <img src={p.logo} alt="" className="max-h-full max-w-full object-contain" style={{ maxWidth: p.scale ?? '100%', maxHeight: p.scale ?? '100%' }} />
                </span>
                <span className="block px-2 py-2 text-center text-[16px]">{p.name}</span>
              </>
            );
            return (
              <li key={p.name} className="border-2 border-[#0F380F]">
                {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" className={`block hover:bg-[#8BAC0F] ${focus}`}>{inner}</a> : inner}
              </li>
            );
          })}
        </ul>
        {e.footerLinks && (
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {e.footerLinks.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={link}>{l.label}</a>)}
          </p>
        )}
      </section>
      <Footer />
    </Screen>
  );
}
