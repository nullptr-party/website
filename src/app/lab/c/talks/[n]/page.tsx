import { talksByNumber, talksParams, talksPhotos } from '../../../_talks';
import { Footer, Paper, TopBar, btnInk, btnOutline, btnYellow, focus } from '../../_ui';

export const dynamicParams = false;
export const generateStaticParams = talksParams;

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const linkProps = (url: string) => (url.startsWith('/') ? {} : ext);

export default async function TalksPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const e = talksByNumber(n);
  const photos = await talksPhotos(e.number);
  const isPast = new Date() > new Date(`${e.date}T23:59:59`);
  const done = e.completed || (e.playlist && isPast);
  const [hero, ...rest] = photos;

  return (
    <Paper>
      <TopBar right={<span className="text-sm font-semibold uppercase tracking-wide">{done ? 'Прошла' : 'Скоро'}</span>} />

      <header className="grid gap-8 border-b-2 border-[#141414] py-10 sm:grid-cols-[1.2fr_1fr] sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide">Конференция nullptr.party</p>
          <h1 className="mt-3 text-[48px] font-black leading-[0.95] tracking-[-0.035em] sm:text-[88px]">
            nullptr.talks<span className="bg-[#FFD60A] px-1">[{e.number}]</span>
          </h1>
          {e.intro && <p className="mt-6 max-w-[60ch] text-lg leading-relaxed">{e.intro}</p>}
        </div>
        <dl className="grid gap-4 border-2 border-[#141414] p-5 text-lg">
          <div><dt className="text-sm font-semibold uppercase tracking-wide">Когда</dt><dd className="font-bold">{e.dateLabel}</dd></div>
          <div><dt className="text-sm font-semibold uppercase tracking-wide">Где</dt><dd><a href={e.venueUrl} {...ext} className={`font-bold underline decoration-2 underline-offset-4 ${focus}`}>{e.venueLabel}</a></dd></div>
          {e.format && <div><dt className="text-sm font-semibold uppercase tracking-wide">Формат</dt><dd>{e.format}</dd></div>}
        </dl>
      </header>

      <div className="flex flex-col gap-3 border-b-2 border-[#141414] py-6 sm:flex-row sm:flex-wrap sm:items-center">
        {done ? (
          <>
            <p className="font-semibold"><span className="bg-[#141414] px-2 py-1 text-[#F4F1EA]">Мероприятие завершено</span></p>
            {e.playlist && <a href={e.playlist} {...ext} className={btnYellow}>Смотреть записи</a>}
          </>
        ) : (
          <>
            {e.registration && <a href={e.registration} {...ext} className={btnYellow}>Регистрация</a>}
            {e.chat && <a href={e.chat} {...ext} className={btnOutline}>Чат мероприятия</a>}
          </>
        )}
      </div>

      {hero ? (
        <section aria-label="Фотографии" className="mt-10">
          <a href={hero.src} {...ext} className={`block ${focus}`}>
            <img src={hero.thumb} alt={`nullptr.talks[${e.number}], фото`} width={hero.thumbWidth} height={hero.thumbHeight} className="aspect-[3/2] w-full object-cover" />
          </a>
          {rest.length > 0 && (
            <ul className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {rest.map((p) => (
                <li key={p.src}><a href={p.src} {...ext} className={`block ${focus}`}><img src={p.smallThumb ?? p.thumb} alt="" loading="lazy" className="aspect-square w-full object-cover" /></a></li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-sm">Фото: Карина, <a href="https://instagram.com/unikarinaa" {...ext} className={`underline underline-offset-4 ${focus}`}>@unikarinaa</a></p>
        </section>
      ) : e.poster ? (
        <img src={e.poster} alt={`Постер nullptr.talks[${e.number}]`} width={1200} height={1200} className="mt-10 w-full max-w-xl border-2 border-[#141414]" />
      ) : null}

      <section aria-labelledby="sp" className="mt-14">
        <h2 id="sp" className="text-[56px] font-black leading-none tracking-[-0.04em] sm:text-[96px]">Доклады</h2>
        <ol className="mt-6">
          {e.speakers.map((s) => (
            <li key={s.name} className="grid gap-4 border-t-2 border-[#141414] py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
              <div>
                {s.profile
                  ? <a href={s.profile} {...ext} className={`text-xl font-bold underline decoration-2 underline-offset-4 ${focus}`}>{s.name}</a>
                  : <p className="text-xl font-bold">{s.name}</p>}
                <p className="mt-1 text-[15px] text-[#3D3A33]">{s.role}</p>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-[30px]">{s.topic}</h3>
                {s.description && <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-[#3D3A33]">{s.description}</p>}
                {(s.slides || s.video) && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {s.slides && <a href={s.slides} {...linkProps(s.slides)} className={btnInk}>Презентация</a>}
                    {s.video && <a href={s.video} {...ext} className={btnOutline}>Смотреть запись</a>}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="pt" className="mt-14 border-t-[6px] border-[#141414] pt-8">
        <h2 id="pt" className="text-3xl font-black tracking-[-0.03em] sm:text-5xl">Информационные партнёры</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {e.partners.map((p) => {
            const inner = (
              <>
                <span className="flex aspect-square items-center justify-center bg-white p-4">
                  <img src={p.logo} alt="" className="object-contain" style={{ maxWidth: p.scale ?? '100%', maxHeight: p.scale ?? '100%' }} />
                </span>
                <span className="block border-t-2 border-[#141414] px-3 py-2 font-semibold">{p.name}</span>
              </>
            );
            return (
              <li key={p.name} className="border-2 border-[#141414]">
                {p.link ? <a href={p.link} {...ext} className={`block hover:bg-[#FFD60A] ${focus}`}>{inner}</a> : inner}
              </li>
            );
          })}
        </ul>
      </section>

      <Footer>
        {e.footerLinks && (
          <span className="flex flex-wrap gap-x-5">
            {e.footerLinks.map((l) => <a key={l.url} href={l.url} {...ext} className={`inline-flex min-h-11 items-center underline underline-offset-4 ${focus}`}>{l.label}</a>)}
          </span>
        )}
      </Footer>
    </Paper>
  );
}
