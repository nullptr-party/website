import Link from 'next/link';

// Index of design-lab directions. On the design-lab Netlify alias this page is also served at "/".

const variants = [
  { id: 'a', name: 'Пиксель как акцент', note: 'Текущий графит и жёлтый. Пиксельный шрифт только крупно, текст — Inter.', bg: '#1F1F1F', fg: '#F2F2F2', accent: '#FFD60A' },
  { id: 'b', name: 'Терминал / лог', note: 'Моноширинный JetBrains Mono, события как строки журнала. Светлая и тёмная тема.', bg: '#111210', fg: '#E8E6DF', accent: '#F5A623' },
  { id: 'c', name: 'Афиша', note: 'Светлая бумага, чёрная краска, жёлтый как подложка. Крупные даты и фото.', bg: '#F4F1EA', fg: '#141414', accent: '#FFD60A' },
  { id: 'd', name: 'Швейцарская сетка', note: 'Строгая сетка, Golos Text, один кобальтовый акцент вместо жёлтого.', bg: '#FAFAF7', fg: '#141414', accent: '#1F3BFF' },
  { id: 'e', name: 'Game Boy / LCD', note: 'Четыре тона LCD-экрана, пиксельная идентичность на максимум.', bg: '#9BBC0F', fg: '#0F380F', accent: '#0F380F' },
  { id: 'f', name: 'Ночная афиша', note: 'Тёмный фон, огромный Unbounded, жёлтый и сирень.', bg: '#12111A', fg: '#F2F0FA', accent: '#FFD60A' },
];

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD60A]';

export default function LabIndex() {
  return (
    <div lang="ru" className="lab min-h-screen bg-[#1F1F1F] font-body text-[#F2F2F2] selection:bg-[#FFD60A] selection:text-[#141414]">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-8 sm:pt-16">
        <h1 className="font-pixel text-[22px] leading-none sm:text-4xl">nullptr<span className="text-[#FFD60A]">.</span>party</h1>
        <p className="mt-5 max-w-[48ch] text-lg leading-snug text-[#D0D0D0]">
          Шесть направлений редизайна. В каждом — главная, страницы nullptr.talks и правила. Откройте на телефоне тоже.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {variants.map((v) => (
            <li key={v.id} className="flex flex-col rounded-[4px] border border-[#3A3A3A] transition-colors hover:border-[#8F8F8F]">
              <Link href={`/lab/${v.id}/`} className={`group block flex-1 p-5 pb-3 ${focus}`}>
                <div aria-hidden className="flex h-24 items-end justify-between rounded-[3px] p-4 ring-1 ring-inset ring-white/15" style={{ background: v.bg, color: v.fg }}>
                  <span className="font-pixel text-lg">[{v.id.toUpperCase()}]</span>
                  <span className="h-4 w-10" style={{ background: v.accent }} />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{v.id.toUpperCase()}. {v.name}</h2>
                <p className="mt-1 text-[15px] leading-relaxed text-[#B3B3B3]">{v.note}</p>
                <p className="mt-3 flex flex-wrap gap-x-4 text-sm text-[#D0D0D0]">
                  <span className="underline decoration-[#666] underline-offset-4 group-hover:decoration-[#FFD60A]">Открыть</span>
                </p>
              </Link>
              <p className="flex gap-5 border-t border-[#333] px-5 text-sm">
                <Link href={`/lab/${v.id}/talks/2/`} className={`inline-flex min-h-11 items-center text-[#B3B3B3] underline decoration-[#555] underline-offset-4 hover:text-[#F2F2F2] ${focus}`}>talks[2]</Link>
                <Link href={`/lab/${v.id}/rules/`} className={`inline-flex min-h-11 items-center text-[#B3B3B3] underline decoration-[#555] underline-offset-4 hover:text-[#F2F2F2] ${focus}`}>правила</Link>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-12 border-t border-[#333] pt-5 text-sm text-[#9E9E9E]">
          Текущий сайт: <a href="https://nullptr.party" className={`underline underline-offset-4 hover:text-[#F2F2F2] ${focus}`}>nullptr.party</a>
        </p>
      </div>
    </div>
  );
}
