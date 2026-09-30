import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Screen, focus } from './_ui';

export function Rules({ lang }: { lang: 'ru' | 'en' }) {
  const t = translations[lang];
  const tab = (l: 'ru' | 'en', href: string) => (
    <Link href={href} aria-current={l === lang ? 'page' : undefined} className={`inline-flex min-h-11 min-w-12 items-center justify-center border-2 border-[#0F380F] px-3 font-pixel text-[12px] ${l === lang ? 'bg-[#0F380F] text-[#9BBC0F]' : 'hover:bg-[#8BAC0F]'} ${focus}`}>{l.toUpperCase()}</Link>
  );
  return (
    <Screen back lang={lang}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-pixel text-[20px] leading-snug sm:text-[28px]">{t.title}</h1>
        <div className="flex gap-2">{tab('ru', '/lab/e/rules/')}{tab('en', '/lab/e/rules/en/')}</div>
      </div>
      <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed">{t.intro}</p>
      <ol className="mt-8 space-y-3">
        {t.rules.map((r, i) => (
          <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 border-2 border-[#0F380F] p-3 text-[15px] leading-relaxed">
            <span className="font-pixel text-[12px] leading-[2.2]">{String(i + 1).padStart(2, '0')}</span>
            <span>{r}</span>
          </li>
        ))}
      </ol>
      <section className="mt-10 border-2 border-[#0F380F] bg-[#0F380F] p-4 text-[#9BBC0F]">
        <h2 className="font-pixel text-base">{t.prohibited.title}</h2>
        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
          {t.prohibited.items.map((it) => <li key={it} className="grid grid-cols-[1.25rem_1fr] gap-2"><span aria-hidden className="mt-[9px] h-2.5 w-2.5 bg-[#9BBC0F]" />{it}</li>)}
        </ul>
      </section>
      <p className="mt-8 max-w-[62ch] text-[16px] leading-relaxed">{t.conclusion}</p>
    </Screen>
  );
}

