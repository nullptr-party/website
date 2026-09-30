import { Shell, Prompt } from '../../_ui';
import { talksByNumber, talksParams, talksPhotos } from '../../../_talks';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const linkCls = 'inline-flex min-h-11 items-center text-[var(--link)] underline underline-offset-4';

export default async function TalksPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const e = talksByNumber(n);
  const photos = await talksPhotos(e.number);
  const isPast = new Date() > new Date(`${e.date}T23:59:59`);
  const done = e.completed || (e.playlist && isPast);

  return (
    <Shell back>
      <header>
        <h1 className="font-pixel text-[22px] leading-tight sm:text-[34px]">nullptr.talks<span className="text-[var(--amber)]">[</span>{e.number}<span className="text-[var(--amber)]">]</span></h1>
        <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-y-2 border-y border-[var(--rule)] py-3 text-[15px]">
          <dt className="text-[var(--dim)]">когда</dt><dd>{e.dateLabel}</dd>
          <dt className="text-[var(--dim)]">где</dt>
          <dd><a href={e.venueUrl} {...ext} className="underline decoration-[var(--dim)] underline-offset-4 hover:text-[var(--link)]">{e.venueLabel}</a></dd>
          {e.format && <><dt className="text-[var(--dim)]">формат</dt><dd>{e.format}</dd></>}
          <dt className="text-[var(--dim)]">статус</dt><dd>{done ? 'завершено' : 'скоро'}</dd>
        </dl>
        {e.intro && <p className="mt-6 max-w-[65ch] font-body text-[16px] leading-relaxed">{e.intro}</p>}
        <div className="mt-6 flex flex-wrap gap-3 text-[15px] font-bold">
          {done && e.playlist && <a href={e.playlist} {...ext} className="inline-flex min-h-12 flex-1 items-center justify-center bg-[var(--amber)] px-5 text-[var(--on-amber)] sm:flex-none">Смотреть записи ↗</a>}
          {!done && e.registration && <a href={e.registration} {...ext} className="inline-flex min-h-12 flex-1 items-center justify-center bg-[var(--amber)] px-5 text-[var(--on-amber)] sm:flex-none">Регистрация ↗</a>}
          {!done && e.chat && <a href={e.chat} {...ext} className="inline-flex min-h-12 flex-1 items-center justify-center border border-[var(--fg)] px-5 sm:flex-none">Чат мероприятия ↗</a>}
        </div>
      </header>

      {photos.length > 0 ? (
        <section aria-label="Фото" className="mt-12">
          <Prompt>ls photos/ <span className="text-[var(--dim)]">— {photos.length} файлов</span></Prompt>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {photos.slice(0, 12).map((p, i) => (
              <li key={p.src} className={i === 0 ? 'col-span-2 sm:row-span-2' : ''}>
                <a href={p.src} {...ext} className="block">
                  <img src={p.thumb} alt={`Фото ${i + 1}`} loading={i < 3 ? 'eager' : 'lazy'} width={p.thumbWidth} height={p.thumbHeight} className="aspect-[4/3] h-full w-full object-cover" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[13px] text-[var(--dim)]">фото: Карина — <a href="https://instagram.com/unikarinaa" {...ext} className="text-[var(--link)] underline underline-offset-4">@unikarinaa</a></p>
        </section>
      ) : e.poster ? (
        <img src={e.poster} alt={`Постер nullptr.talks[${e.number}]`} width={1200} height={1200} className="mt-12 w-full max-w-md" />
      ) : null}

      <section aria-labelledby="sp" className="mt-14">
        <Prompt id="sp">cat speakers.txt</Prompt>
        <ol>
          {e.speakers.map((s, i) => (
            <li key={s.name} className="grid grid-cols-1 gap-y-1 border-t border-[var(--rule)] py-5 first:mt-3 sm:grid-cols-[3rem_1fr] sm:gap-x-4">
              <span className="text-[13px] tabular-nums text-[var(--dim)] sm:pt-1">#{i + 1}</span>
              <div className="min-w-0">
                <h3 className="font-body text-[18px] font-semibold leading-snug">{s.topic}</h3>
                <p className="mt-1 text-[14px]">
                  {s.profile ? <a href={s.profile} {...ext} className="underline decoration-[var(--dim)] underline-offset-4 hover:text-[var(--link)]">{s.name}</a> : s.name}
                  <span className="text-[var(--dim)]"> — {s.role}</span>
                </p>
                {s.description && <p className="mt-2 max-w-[65ch] font-body text-[15px] leading-relaxed text-[var(--dim)]">{s.description}</p>}
                {(s.slides || s.video) && (
                  <div className="mt-1 flex flex-wrap gap-x-5 text-[14px]">
                    {s.slides && <a href={s.slides} {...(s.slides.startsWith('/') ? {} : ext)} className={linkCls}>слайды {s.slides.startsWith('/') ? '→' : '↗'}</a>}
                    {s.video && <a href={s.video} {...ext} className={linkCls}>запись ↗</a>}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {e.partners.length > 0 && (
        <section aria-labelledby="pt" className="mt-14">
          <Prompt id="pt">cat partners.txt</Prompt>
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {e.partners.map((p) => {
              const inner = (
                <>
                  <span className="flex aspect-[3/2] items-center justify-center bg-white p-3">
                    <img src={p.logo} alt="" className="max-h-full max-w-full object-contain" style={{ maxWidth: p.scale, maxHeight: p.scale }} />
                  </span>
                  <span className="block px-2 py-2 text-[13px]">{p.name}{p.link ? ' ↗' : ''}</span>
                </>
              );
              return (
                <li key={p.name} className="border border-[var(--rule)]">
                  {p.link ? <a href={p.link} {...ext} className="block hover:bg-[var(--rule)]">{inner}</a> : inner}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {e.footerLinks && (
        <div className="mt-10 flex flex-wrap gap-x-5 text-[14px]">
          {e.footerLinks.map((l) => <a key={l.url} href={l.url} {...ext} className={linkCls}>{l.label} ↗</a>)}
        </div>
      )}
    </Shell>
  );
}
