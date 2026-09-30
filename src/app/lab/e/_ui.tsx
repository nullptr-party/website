import Link from 'next/link';
import { Martian_Mono } from 'next/font/google';

// Direction E — «Game Boy / LCD»: четыре тона одного зелёного, смысл держится только на светлоте.
// Текст — всегда самый тёмный тон на светлом экране (≥6:1) или наоборот; средние тона — только рамки.

export const pixelify = Martian_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-pixelify-e', axes: ['wdth'] });

export const C = { ink: '#0F380F', ink2: '#1E4A1E', mid: '#306230', lcd: '#8BAC0F', screen: '#9BBC0F', shell: '#2B2D2A' };

export const focus = 'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0F380F]';
export const btnInk = `inline-flex min-h-12 items-center justify-center border-2 border-[#0F380F] bg-[#0F380F] px-5 text-[15px] text-[#9BBC0F] hover:bg-[#306230] ${focus}`;
export const btnLine = `inline-flex min-h-12 items-center justify-center border-2 border-[#0F380F] px-5 text-[15px] text-[#0F380F] hover:bg-[#8BAC0F] ${focus}`;
export const link = `underline decoration-2 underline-offset-4 hover:bg-[#0F380F] hover:text-[#9BBC0F] ${focus}`;

const css = `
.lab-e ::selection{background:#0F380F;color:#9BBC0F}
.lab-e img{image-rendering:auto}
@keyframes e-blink{0%,49%{opacity:1}50%,100%{opacity:0}}
.e-cursor{animation:e-blink 1.2s steps(1) infinite}
@media (prefers-reduced-motion: reduce){.e-cursor{animation:none}}
.e-photo{filter:grayscale(1) contrast(1.05);mix-blend-mode:multiply}
`;

export function Screen({ children, lang = 'ru', back }: { children: React.ReactNode; lang?: string; back?: boolean }) {
  return (
    <div lang={lang} className={`lab lab-e ${pixelify.variable} min-h-screen bg-[#9BBC0F] text-[#0F380F] sm:bg-[#2B2D2A] sm:px-6 sm:py-10`} style={{ fontFamily: 'var(--font-pixelify-e), monospace' }}>
      <style>{css}</style>
      <div className="mx-auto max-w-3xl sm:rounded-[14px] sm:bg-[#C9C7BE] sm:p-5 sm:pb-8">
        <div className="bg-[#9BBC0F] sm:border-[6px] sm:border-[#0F380F] sm:shadow-[inset_0_0_0_2px_#306230]">
          {back && (
            <nav className="border-b-2 border-[#306230] px-4 py-2 sm:px-8">
              <Link href="/lab/e/" className={`inline-flex min-h-11 items-center gap-2 font-pixel text-xs ${focus}`}><Arrow />nullptr.party</Link>
            </nav>
          )}
          <div className="px-4 pb-12 pt-8 sm:px-8 sm:pt-10">{children}</div>
        </div>
        <p aria-hidden className="mt-4 hidden text-center font-pixel text-[12px] tracking-widest text-[#4A4A45] sm:block">NULLPTR · PARTY</p>
      </div>
    </div>
  );
}

export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h2 id={id} className="mb-5 border-b-2 border-[#0F380F] pb-2 font-pixel text-base leading-relaxed">{children}</h2>;
}

export function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#0F380F] pt-4 text-[16px]">
      <span>nullptr.party — сообщество разработчиков, Алматы</span>
      <Link href="/lab/e/rules/" className={link}>Правила</Link>
    </footer>
  );
}

export function Arrow() {
  return (
    <svg aria-hidden width="12" height="12" viewBox="0 0 6 6" shapeRendering="crispEdges" fill="currentColor">
      <rect x="0" y="2" width="6" height="2" /><rect x="1" y="1" width="1" height="4" /><rect x="2" y="0" width="1" height="6" />
    </svg>
  );
}
