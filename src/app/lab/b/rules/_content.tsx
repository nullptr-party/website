import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Shell, Prompt } from '../_ui';

export function Rules({ lang }: { lang: 'ru' | 'en' }) {
  const t = translations[lang];
  const tab = (l: 'ru' | 'en', href: string) => (
    <Link href={href} aria-current={l === lang ? 'page' : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center border px-3 text-[14px] font-bold ${l === lang ? 'border-[var(--amber)] bg-[var(--amber)] text-[var(--on-amber)]' : 'border-[var(--rule)] text-[var(--link)] underline underline-offset-4'}`}>
      {l.toUpperCase()}
    </Link>
  );
  return (
    <Shell lang={lang} back>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-pixel text-[18px] leading-tight sm:text-[26px]">{t.title}</h1>
        <nav aria-label="Language" className="flex gap-2">{tab('ru', '/lab/b/rules/')}{tab('en', '/lab/b/rules/en/')}</nav>
      </div>
      <p className="mt-5 max-w-[65ch] font-body text-[16px] leading-relaxed text-[var(--dim)]">{t.intro}</p>
      <section className="mt-10">
        <Prompt>cat rules.txt</Prompt>
        <ol className="mt-3">
          {t.rules.map((r, i) => (
            <li key={i} className="grid grid-cols-[2.5rem_1fr] border-t border-[var(--rule)] py-4">
              <span className="text-[13px] tabular-nums text-[var(--dim)] pt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <p className="max-w-[65ch] font-body text-[16px] leading-relaxed">{r}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-10 border border-[var(--amber)] p-4 sm:p-5">
        <h2 className="text-[15px] font-bold"><span className="bg-[var(--amber)] px-1.5 text-[var(--on-amber)]">✕ {t.prohibited.title}</span></h2>
        <ul className="mt-3 space-y-3">
          {t.prohibited.items.map((it, i) => (
            <li key={i} className="grid grid-cols-[1.5rem_1fr] font-body text-[16px] leading-relaxed"><span aria-hidden className="font-mono text-[var(--dim)]">—</span>{it}</li>
          ))}
        </ul>
      </section>
      <p className="mt-10 max-w-[65ch] font-body text-[16px] leading-relaxed">{t.conclusion}</p>
    </Shell>
  );
}
