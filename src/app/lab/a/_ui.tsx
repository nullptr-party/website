import Link from 'next/link';
import type { ReactNode } from 'react';

// Variant A shared shell: graphite, one yellow, pixel face only large.
export const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD60A]';
export const btnPrimary = `inline-flex min-h-12 items-center justify-center bg-[#FFD60A] px-6 text-base font-semibold text-[#141414] transition-colors hover:bg-[#FFE55C] ${focus}`;
export const btnSecondary = `inline-flex min-h-12 items-center justify-center border border-[#666] px-6 text-base font-medium text-[#F2F2F2] transition-colors hover:border-[#F2F2F2] ${focus}`;
export const textLink = `underline decoration-[#555] underline-offset-4 hover:text-[#F2F2F2] hover:decoration-[#FFD60A] ${focus}`;

export function Shell({ lang = 'ru', children }: { lang?: string; children: ReactNode }) {
  return (
    <div lang={lang} className="lab min-h-screen bg-[#1F1F1F] font-body text-[#F2F2F2] selection:bg-[#FFD60A] selection:text-[#141414]">
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-8 sm:pt-10">
        <nav>
          <Link href="/lab/a/" className={`inline-flex min-h-11 items-center font-pixel text-sm ${focus}`}>
            nullptr<span className="text-[#FFD60A]">.</span>party
          </Link>
        </nav>
        {children}
        <footer className="mt-16 flex flex-wrap justify-between gap-2 border-t border-[#333] pt-5 text-sm text-[#9E9E9E]">
          <span>nullptr.party — сообщество разработчиков, Алматы</span>
          <Link href="/lab/a/rules/" className={`inline-flex min-h-11 items-center ${textLink}`}>Правила чата</Link>
        </footer>
      </div>
    </div>
  );
}
