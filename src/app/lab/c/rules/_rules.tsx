import Link from 'next/link';
import { translations } from '@/app/rules/_data/translations';
import { Footer, Paper, TopBar, focus } from '../_ui';

export function Rules({ lang }: { lang: 'ru' | 'en' }) {
  const t = translations[lang];
  const sw = (l: 'ru' | 'en', label: string) => (
    <Link href={l === 'ru' ? '/lab/c/rules/' : '/lab/c/rules/en/'} aria-current={lang === l ? 'page' : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-[#141414] px-3 font-semibold ${lang === l ? 'bg-[#141414] text-[#F4F1EA]' : 'hover:bg-[#FFD60A]'} ${focus}`}>{label}</Link>
  );
  return (
    <Paper lang={lang}>
      <TopBar right={<span className="flex gap-2">{sw('ru', 'RU')}{sw('en', 'EN')}</span>} />
      <header className="border-b-2 border-[#141414] py-10">
        <h1 className="text-[48px] font-black leading-[0.95] tracking-[-0.035em] sm:text-[88px]">{t.title}</h1>
        <p className="mt-6 max-w-[55ch] text-xl leading-relaxed">{t.intro}</p>
      </header>
      <ol className="mt-4">
        {t.rules.map((r, i) => (
          <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 border-b-2 border-[#141414] py-5 sm:grid-cols-[5rem_1fr]">
            <span className="text-3xl font-black tabular-nums leading-none sm:text-4xl">{i + 1}</span>
            <p className="max-w-[65ch] text-lg leading-relaxed">{r}</p>
          </li>
        ))}
      </ol>
      <section aria-labelledby="pr" className="mt-12 bg-[#FFD60A] p-6 ring-2 ring-inset ring-[#141414] sm:p-8">
        <h2 id="pr" className="text-3xl font-black tracking-[-0.03em] sm:text-5xl">{t.prohibited.title}</h2>
        <ul className="mt-5 space-y-3">
          {t.prohibited.items.map((it) => (
            <li key={it} className="flex gap-3 text-lg leading-relaxed"><span aria-hidden className="font-black">×</span><span>{it}</span></li>
          ))}
        </ul>
      </section>
      <p className="mt-10 max-w-[60ch] text-xl font-semibold leading-relaxed">{t.conclusion}</p>
      <Footer />
    </Paper>
  );
}
