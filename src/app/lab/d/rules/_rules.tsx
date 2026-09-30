import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Footer, Masthead, Shell, focus, grid } from '../_ui';

export function Rules({ lang }: { lang: 'ru' | 'en' }) {
  const c = translations[lang];
  const sw = (code: 'ru' | 'en', href: string) => (
    <Link href={href} aria-current={lang === code ? 'page' : undefined} className={`inline-flex min-h-11 min-w-11 items-center justify-center border px-3 text-[15px] font-medium ${lang === code ? 'border-[#111] bg-[#111] text-white' : 'border-[#111] hover:bg-[#EDEDE7]'} ${focus}`}>{code.toUpperCase()}</Link>
  );
  return (
    <Shell lang={lang}>
      <Masthead right={<div className="flex gap-2" aria-label={lang === 'ru' ? 'Язык' : 'Language'}>{sw('ru', '/lab/d/rules/')}{sw('en', '/lab/d/rules/en/')}</div>} />
      <header className={`${grid} pt-14 sm:pt-20`}>
        <h1 className="col-span-4 text-[48px] font-semibold leading-none tracking-[-0.035em] sm:col-span-8 sm:text-[96px]">{c.title}</h1>
        <p className="col-span-4 mt-6 max-w-[48ch] text-lg leading-snug text-[#333] sm:col-span-6 sm:mt-10 sm:text-xl">{c.intro}</p>
      </header>
      <ol className="mt-14 border-t border-[#111] sm:mt-20">
        {c.rules.map((r, i) => (
          <li key={i} className={`${grid} border-b border-[#D4D4CF] py-5`}>
            <span className="col-span-1 text-[28px] font-semibold leading-none tabular-nums tracking-[-0.02em] text-[#1F3BFF] sm:col-span-2 sm:text-[40px]">{String(i + 1).padStart(2, '0')}</span>
            <p className="col-span-3 max-w-[64ch] text-[17px] leading-relaxed sm:col-span-8">{r}</p>
          </li>
        ))}
      </ol>
      <section className={`${grid} mt-20 border-t-2 border-[#111] pt-5`} aria-labelledby="no">
        <h2 id="no" className="col-span-4 text-[28px] font-semibold tracking-[-0.02em] sm:col-span-2 sm:text-3xl">{c.prohibited.title}</h2>
        <ul className="col-span-4 mt-4 sm:col-span-8 sm:col-start-3 sm:mt-0">
          {c.prohibited.items.map((it) => (
            <li key={it} className="flex gap-4 border-b border-[#D4D4CF] py-4 text-[17px] leading-relaxed">
              <span aria-hidden className="mt-[0.7em] h-[2px] w-4 shrink-0 bg-[#111]" />{it}
            </li>
          ))}
        </ul>
      </section>
      <p className={`mt-16 max-w-[56ch] text-xl font-medium leading-snug`}>{c.conclusion}</p>
      <Footer />
    </Shell>
  );
}
