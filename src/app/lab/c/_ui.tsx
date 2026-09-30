import Link from 'next/link';
import { Onest } from 'next/font/google';
import type { ReactNode } from 'react';

// Direction C tokens: paper, ink, yellow only as backing under ink.
export const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest' });
export const INK = '#141414';
export const focus = 'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#141414]';
export const btnInk = `inline-flex min-h-12 items-center justify-center bg-[#141414] px-5 font-semibold text-[#F4F1EA] hover:bg-[#333] ${focus}`;
export const btnOutline = `inline-flex min-h-12 items-center justify-center border-2 border-[#141414] px-5 font-semibold hover:bg-[#141414] hover:text-[#F4F1EA] ${focus}`;
export const btnYellow = `inline-flex min-h-14 items-center justify-center bg-[#FFD60A] px-7 text-lg font-bold ring-2 ring-inset ring-[#141414] hover:bg-[#141414] hover:text-[#FFD60A] ${focus}`;

export function Paper({ lang = 'ru', children }: { lang?: string; children: ReactNode }) {
  return (
    <div lang={lang} className={`lab ${onest.variable} min-h-screen bg-[#F4F1EA] text-[#141414] selection:bg-[#141414] selection:text-[#FFD60A]`} style={{ fontFamily: 'var(--font-onest), system-ui, sans-serif' }}>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">{children}</div>
    </div>
  );
}

export function TopBar({ right }: { right?: ReactNode }) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 border-b-[6px] border-[#141414] pb-5">
      <Link href="/lab/c/" className={`inline-flex min-h-11 items-center bg-[#141414] px-3 font-pixel text-sm leading-none text-[#FFD60A] ${focus}`}>
        <span aria-hidden className="mr-2">←</span>nullptr.party
      </Link>
      {right}
    </nav>
  );
}

export function Footer({ children }: { children?: ReactNode }) {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-[6px] border-[#141414] pt-5 text-base font-medium">
      <span>nullptr.party — сообщество разработчиков, Алматы</span>
      {children}
    </footer>
  );
}
