import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';

// Shared shell for direction B: mono face, CSS-variable themes (dark default, light via prefers-color-scheme).
const mono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jb' });

const css = `
.lb{--bg:#111210;--fg:#E8E6DF;--dim:#A3A198;--rule:#2C2D29;--amber:#F5A623;--link:#56B4E9;--on-amber:#111210}
@media (prefers-color-scheme: light){.lb{--bg:#F7F6F2;--fg:#1A1A17;--dim:#5E5C55;--rule:#DDDBD3;--amber:#9A5B00;--link:#0060A8;--on-amber:#FFFFFF}}
.lb ::selection{background:var(--amber);color:var(--on-amber)}
.lb a:focus-visible{outline:2px solid var(--link);outline-offset:3px}
`;

export function Shell({ children, lang = 'ru', back }: { children: React.ReactNode; lang?: string; back?: boolean }) {
  return (
    <div lang={lang} className={`lab lb ${mono.variable} min-h-screen bg-[var(--bg)] text-[var(--fg)]`} style={{ fontFamily: 'var(--font-jb), monospace' }}>
      <style>{css}</style>
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
        {back && (
          <nav className="-mt-4 mb-6">
            <Link href="/lab/b/" className="inline-flex min-h-11 items-center text-[14px] text-[var(--link)] underline underline-offset-4">cd ~/nullptr.party</Link>
          </nav>
        )}
        {children}
        <footer className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-[var(--rule)] pt-5 text-[13px] text-[var(--dim)]">
          <span>nullptr.party — сообщество разработчиков, Алматы</span>
          <Link href="/lab/b/rules/" className="inline-flex min-h-11 items-center text-[var(--link)] underline underline-offset-4">правила чатов</Link>
        </footer>
      </div>
    </div>
  );
}

export const Prompt = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-[13px] text-[var(--dim)]">$ {children}</h2>
);
