import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Shell, focus } from '../_ui';

export function RulesA({ lang }: { lang: 'ru' | 'en' }) {
  const c = translations[lang];
  const tab = (l: 'ru' | 'en', label: string, href: string) => (
    <Link href={href} aria-current={l === lang ? 'page' : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-sm font-semibold ${l === lang ? 'bg-[#FFD60A] text-[#141414]' : 'border border-[#666] text-[#F2F2F2] hover:border-[#F2F2F2]'} ${focus}`}>{label}</Link>
  );
  return (
    <Shell lang={lang}>
      <header className="mt-10 flex flex-wrap items-start justify-between gap-4 sm:mt-14">
        <h1 className="font-pixel text-[22px] leading-tight sm:text-4xl">{c.title}</h1>
        <div className="flex gap-2">{tab('ru', 'RU', '/lab/a/rules/')}{tab('en', 'EN', '/lab/a/rules/en/')}</div>
      </header>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-[#D0D0D0]">{c.intro}</p>
      <ol className="mt-10">
        {c.rules.map((r, i) => (
          <li key={i} className="grid grid-cols-[2.5rem_1fr] border-t border-[#333] py-4 text-base leading-relaxed">
            <span className="tabular-nums text-[#9E9E9E]">{i + 1}.</span><span className="max-w-[62ch]">{r}</span>
          </li>
        ))}
      </ol>
      <section className="mt-12 border border-[#8F8F8F] p-5 sm:p-6">
        <h2 className="font-pixel text-base">{c.prohibited.title}</h2>
        <ul className="mt-4 space-y-3">
          {c.prohibited.items.map((p) => (
            <li key={p} className="flex gap-3 text-base leading-relaxed">
              <span aria-hidden className="mt-[9px] h-2.5 w-2.5 shrink-0 bg-[#FFD60A]" />{p}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10 max-w-[62ch] text-base leading-relaxed text-[#B3B3B3]">{c.conclusion}</p>
    </Shell>
  );
}
