import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Shell } from '../_ui';

export function RulesF({ lang }: { lang: 'ru' | 'en' }) {
  const c = translations[lang];
  return (
    <Shell lang={lang}>
      <div className="flex items-center justify-end gap-2 pt-8" role="group" aria-label="Language">
        {(['ru', 'en'] as const).map((l) => (
          <Link key={l} href={l === 'ru' ? '/lab/f/rules/' : '/lab/f/rules/en/'} aria-current={l === lang ? 'page' : undefined}
            className={`inline-flex min-h-11 min-w-14 items-center justify-center rounded-full px-4 text-sm font-bold uppercase ${l === lang ? 'bg-[var(--y)] text-[var(--ink)]' : 'border-2 border-[var(--rule)] hover:border-[var(--v)]'}`}>{l}</Link>
        ))}
      </div>
      <header className="pb-12 pt-8">
        <h1 className="disp rise text-[clamp(2.4rem,9vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.035em]">{c.title.split(' ').map((w, i) => <span key={i}>{w} </span>)}</h1>
        <p className="mt-8 max-w-[48ch] text-xl leading-relaxed text-[var(--dim)] sm:text-2xl">{c.intro}</p>
      </header>
      <ol className="border-t border-[var(--rule)]">
        {c.rules.map((r, i) => (
          <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[var(--rule)] py-6 sm:grid-cols-[6rem_1fr]">
            <span className="disp text-2xl font-bold tabular-nums text-[var(--v)] sm:text-4xl">{i + 1}</span>
            <p className="max-w-[65ch] text-[17px] leading-relaxed sm:text-lg">{r}</p>
          </li>
        ))}
      </ol>
      <section aria-labelledby="no" className="mt-16 rounded-2xl bg-[var(--card)] p-6 ring-2 ring-[var(--y)] sm:p-10">
        <h2 id="no" className="disp text-2xl font-bold text-[var(--y)] sm:text-4xl">{c.prohibited.title}</h2>
        <ul className="mt-6 space-y-4">
          {c.prohibited.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-[17px] leading-relaxed"><span aria-hidden className="disp font-black text-[var(--y)]">×</span><span className="max-w-[65ch]">{it}</span></li>
          ))}
        </ul>
      </section>
      <p className="mt-12 max-w-[60ch] text-lg leading-relaxed text-[var(--dim)]">{c.conclusion}</p>
    </Shell>
  );
}
