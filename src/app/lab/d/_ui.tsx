import Link from 'next/link';
import { Golos_Text } from 'next/font/google';

// Direction D — «швейцарская сетка»: белая бумага, чёрная краска, один кобальтовый акцент.
// Строгая 12-колоночная сетка, волосяные линейки, крупные табличные цифры.

export const golos = Golos_Text({ subsets: ['latin', 'cyrillic'], variable: '--font-golos' });

export const INK = '#111111';
export const ACCENT = '#1F3BFF'; // 6.4:1 на #FAFAF7

export const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3BFF]';
export const grid = 'grid grid-cols-4 gap-x-4 sm:grid-cols-12 sm:gap-x-6';
export const link = `underline decoration-1 underline-offset-4 hover:text-[#1F3BFF] hover:decoration-2 ${focus}`;

export function Shell({ children, lang = 'ru' }: { children: React.ReactNode; lang?: string }) {
  return (
    <div lang={lang} className={`lab ${golos.variable} min-h-screen bg-[#FAFAF7] text-[#111] antialiased selection:bg-[#1F3BFF] selection:text-white`} style={{ fontFamily: 'var(--font-golos), system-ui, sans-serif' }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-10">{children}</div>
    </div>
  );
}

export function Masthead({ right }: { right?: React.ReactNode }) {
  return (
    <div className={`${grid} items-center border-b border-[#111] py-5`}>
      <Link href="/lab/d/" className={`col-span-2 font-pixel text-[13px] leading-none sm:col-span-4 sm:text-base ${focus}`}>
        nullptr<span className="text-[#1F3BFF]">.</span>party
      </Link>
      <div className="col-span-2 flex justify-end gap-5 text-[15px] sm:col-span-8">{right}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={`${grid} mt-24 border-t border-[#111] py-6 text-[15px]`}>
      <p className="col-span-4 sm:col-span-6">nullptr.party — сообщество разработчиков, Алматы</p>
      <nav className="col-span-4 mt-3 flex gap-6 sm:col-span-6 sm:mt-0 sm:justify-end">
        <Link href="/lab/d/" className={link}>Главная</Link>
        <Link href="/lab/d/rules/" className={link}>Правила чата</Link>
      </nav>
    </footer>
  );
}

export function SectionHead({ id, title, aside }: { id: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className={`${grid} mt-20 items-baseline border-t border-[#111] pt-4 sm:mt-28`}>
      <h2 id={id} className="col-span-4 text-[28px] font-semibold leading-tight tracking-[-0.02em] sm:col-span-6 sm:text-4xl">{title}</h2>
      {aside && <div className="col-span-4 mt-2 text-[15px] text-[#555] sm:col-span-6 sm:mt-0 sm:text-right">{aside}</div>}
    </div>
  );
}
