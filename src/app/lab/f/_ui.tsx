import Link from 'next/link';
import { Unbounded, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';

// Direction F — «ночная афиша»: чернильно-синий фон, огромный Unbounded, текст Manrope.
// Акценты — жёлтый и сирень: оба светлые, различаются и по светлоте, и по форме/подписи.

export const display = Unbounded({ subsets: ['latin', 'cyrillic'], weight: ['500', '700', '900'], variable: '--f-display' });
export const text = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--f-text' });

const css = `
.lf{--bg:#12111A;--card:#1B1A26;--fg:#F3F1EA;--dim:#B4B0C4;--rule:#34324A;--y:#FFD60A;--v:#B9A8FF;--ink:#12111A}
.lf ::selection{background:var(--v);color:var(--ink)}
.lf a:focus-visible{outline:3px solid var(--v);outline-offset:4px;border-radius:2px}
.lf .disp{font-family:var(--f-display),system-ui,sans-serif}
.lf .rise>span{display:inline-block;animation:lf-rise .9s cubic-bezier(.16,1,.3,1) backwards}
.lf .rise>span:nth-child(2){animation-delay:.08s}.lf .rise>span:nth-child(3){animation-delay:.16s}.lf .rise>span:nth-child(4){animation-delay:.24s}
@keyframes lf-rise{from{opacity:0;transform:translateY(.45em);filter:blur(6px)}}
@media (prefers-reduced-motion:reduce){.lf .rise>span{animation:none}}
html:has(.lf){background:#12111A;scrollbar-color:#34324A #12111A}
`;

export const btnPrimary = 'inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--y)] px-7 text-base font-bold text-[var(--ink)] transition-colors hover:bg-[#FFE55C]';
export const btnGhost = 'inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--v)] px-7 text-base font-bold text-[var(--fg)] transition-colors hover:bg-[var(--v)] hover:text-[var(--ink)]';
export const textLink = 'underline decoration-[var(--rule)] decoration-2 underline-offset-[5px] hover:decoration-[var(--v)]';

export function Shell({ children, lang = 'ru', back = true }: { children: ReactNode; lang?: string; back?: boolean }) {
  return (
    <div lang={lang} className={`lab lf ${display.variable} ${text.variable} min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--fg)]`} style={{ fontFamily: 'var(--f-text), system-ui, sans-serif' }}>
      <style>{css}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <nav className="flex min-h-16 items-center justify-between border-b border-[var(--rule)]">
          <Link href="/lab/f/" className="inline-flex min-h-11 items-center font-pixel text-xs leading-none sm:text-sm">
            nullptr<span className="text-[var(--y)]">.</span>party
          </Link>
          {back && <Link href="/lab/f/" className={`inline-flex min-h-11 items-center text-sm font-semibold text-[var(--dim)] hover:text-[var(--fg)]`}>{lang === 'en' ? '← Home' : '← На главную'}</Link>}
        </nav>
        {children}
        <footer className="mt-24 flex flex-col gap-3 border-t border-[var(--rule)] py-8 text-sm text-[var(--dim)] sm:flex-row sm:items-center sm:justify-between">
          <span>nullptr.party — {lang === 'en' ? 'developer community, Almaty' : 'сообщество разработчиков, Алматы'}</span>
          <Link href={lang === 'en' ? '/lab/f/rules/en/' : '/lab/f/rules/'} className={`inline-flex min-h-11 items-center font-semibold text-[var(--fg)] ${textLink}`}>{lang === 'en' ? 'Community rules' : 'Правила сообщества'}</Link>
        </footer>
      </div>
    </div>
  );
}

/** Talks marker: filled square + word; meetup: ring + word. Never colour alone. */
export function Kind({ talks, cancelled }: { talks: boolean; cancelled?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em]">
      {talks
        ? <span aria-hidden className="h-2.5 w-2.5 bg-[var(--y)]" />
        : <span aria-hidden className="h-2.5 w-2.5 rounded-full border-2 border-[var(--v)]" />}
      <span className={talks ? 'text-[var(--y)]' : 'text-[var(--v)]'}>{talks ? 'Конференция' : 'Митап'}</span>
      {cancelled && <span className="rounded-full border border-[var(--dim)] px-2 py-0.5 text-[var(--fg)]">отменён</span>}
    </span>
  );
}
