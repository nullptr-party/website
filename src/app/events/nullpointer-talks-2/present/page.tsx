'use client';

import { useState, useEffect, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';

type Partner = { name: string; logo?: string };

const partners: Partner[] = [
  { name: 'Almaty Java Community', logo: '/partners/almaty-java.jpg' },
  { name: 'Bereke Bank', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Макс (добрый)', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'per malī ad astra', logo: '/partners/maliastra.jpg' },
  { name: 'Pavel Korolev. Потяжелее', logo: '/partners/pavel-korolev.jpg' },
  { name: 'Android Hours', logo: '/partners/android-hours.png' },
];

export const talks3Partners: Partner[] = [
  { name: 'MOST', logo: '/partners/most.svg' },
  { name: 'Bereke Bank', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Макс (добрый)', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'per malī ad astra', logo: '/partners/maliastra.jpg' },
  { name: 'Almaty Java Community', logo: '/partners/almaty-java.jpg' },
  { name: 'GDG Almaty', logo: '/partners/gdg-almaty.jpg' },
  { name: 'devs.kz', logo: '/partners/devs-kz.png' },
  { name: 'Startup Chaihona', logo: '/partners/startup-chaihona.png' },
];

function SlideBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    />
  );
}

function MostLogo() {
  return <img src="/present/most-logo.png" alt="MOST IT Hub" className="absolute bottom-8 right-8 hidden w-52 h-52 opacity-80 lg:block" />;
}

function WhiteQR({ value, className }: { value: string; className?: string }) {
  return (
    <QRCodeSVG
      value={value}
      size={1}
      level="M"
      bgColor="transparent"
      fgColor="#ffffff"
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

const QR_CLASS = 'w-[min(40vw,20vh)] h-[min(40vw,20vh)] lg:w-[50vh] lg:h-[50vh]';

function SlideWifi({ showMostLogo }: { showMostLogo: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#2e2e2e] flex items-center justify-center">
      <SlideBackground />
      {showMostLogo && <MostLogo />}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-[4vh] lg:gap-[8vw] w-full px-4 lg:px-[6vw]">
        <div className="flex flex-col items-center gap-[1vh] lg:gap-[2vh]">
          <h2 className="font-[var(--font-press-start)] text-white text-base lg:text-[4vh]">WiFi</h2>
          <div className={QR_CLASS}><WhiteQR value="WIFI:T:WPA;S:Most IT Hub;P:123most123;;" /></div>
          <p className="font-[var(--font-press-start)] text-white text-xs lg:text-[4.5vh]">Most IT Hub</p>
          <p className="font-[var(--font-press-start)] text-white/80 text-xs lg:text-[3.5vh]">123most123</p>
        </div>
        <div className="flex flex-col items-center gap-[1vh] lg:gap-[2vh]">
          <h2 className="font-[var(--font-press-start)] text-white text-base lg:text-[4vh] invisible">_</h2>
          <div className={QR_CLASS}><WhiteQR value="https://t.me/+60NkAf4EsJ8xYWJi" /></div>
          <p className="font-[var(--font-press-start)] text-white text-xs lg:text-[4.5vh]">Мы в Telegram</p>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center gap-[0.5vh]">
      <div className="w-[min(21vw,11vh)] h-[min(21vw,11vh)] lg:w-[20vh] lg:h-[20vh] overflow-hidden rounded-md bg-[#3a3a3a] border border-[#4a4a4a] flex items-center justify-center p-2">
        {partner.logo ? (
          <img src={partner.logo} alt={partner.name} className="object-contain w-full h-full" />
        ) : (
          <span className="text-white text-center font-[var(--font-press-start)] text-[1.8vh] leading-relaxed">{partner.name}</span>
        )}
      </div>
      <span className="font-[var(--font-press-start)] text-[clamp(8px,2vw,11px)] lg:text-[1.4vh] text-center text-white/80 leading-tight max-w-[21vw] lg:max-w-[18vh]">{partner.name}</span>
    </div>
  );
}

function SlidePartners({ partners: slidePartners, eventIndex }: { partners: Partner[]; eventIndex: number }) {
  const left = slidePartners.slice(0, Math.ceil(slidePartners.length / 2));
  const right = slidePartners.slice(Math.ceil(slidePartners.length / 2));

  return (
    <div className="relative w-full h-full bg-[#2e2e2e]">
      <SlideBackground />
      {eventIndex === 2 && <MostLogo />}
      <div className="relative z-10 w-full h-full flex flex-col">
        <h2 className="mt-6 px-3 font-[var(--font-press-start)] text-yellow-400 text-[clamp(10px,2.8vw,16px)] lg:mt-[7vh] lg:text-[5vh] text-center">Информационные партнёры</h2>
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-[4vw] lg:-mt-[8vh] px-3 pb-16 lg:p-0">
          <div className="hidden lg:grid grid-cols-2 gap-[2vh]">
            {left.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}
          </div>
          <div className="order-first w-[min(32vw,14vh)] h-[min(32vw,14vh)] lg:order-none lg:w-[45vh] lg:h-[45vh]">
            <WhiteQR value={`https://nullptr.party/events/nullpointer-talks-${eventIndex}`} />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-[2vh]">
            {right.map((partner, index) => (
              <div key={partner.name} className={eventIndex === 3 && index === right.length - 1 && right.length % 2 === 1 ? 'col-start-2' : undefined}>
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 lg:hidden">
            {slidePartners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideClosing({ feedbackUrl = 'https://forms.gle/pFS4uaErfrKuJW6D8', showMostLogo }: { feedbackUrl?: string | null; showMostLogo: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#2e2e2e] flex items-center justify-center">
      <SlideBackground />
      {showMostLogo && <MostLogo />}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-[4vh] lg:gap-[8vw] w-full px-4 lg:px-[6vw]">
        <div className="flex flex-col items-center gap-[1vh] lg:gap-[2vh]">
          <div className={QR_CLASS}><WhiteQR value="https://t.me/+60NkAf4EsJ8xYWJi" /></div>
          <p className="font-[var(--font-press-start)] text-white text-xs lg:text-[4.5vh]">Мы в Telegram</p>
        </div>
        {feedbackUrl && (
          <div className="flex flex-col items-center gap-[1vh] lg:gap-[2vh]">
            <div className={QR_CLASS}><WhiteQR value={feedbackUrl} /></div>
            <p className="font-[var(--font-press-start)] text-white text-xs lg:text-[4.5vh]">Обратная связь</p>
          </div>
        )}
      </div>
    </div>
  );
}

const slideIds = ['wifi', 'partners', 'closing'];

function getInitialSlide() {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.replace('#', '');
  const idx = slideIds.indexOf(hash);
  return idx >= 0 ? idx : 0;
}

export function Presentation({ partners: slidePartners, eventIndex, feedbackUrl }: { partners: Partner[]; eventIndex: number; feedbackUrl?: string | null }) {
  const [current, setCurrent] = useState(getInitialSlide);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(slideIds.length - 1, idx));
    setCurrent(clamped);
    window.location.hash = slideIds[clamped];
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = slideIds.indexOf(hash);
      if (idx >= 0) setCurrent(idx);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goTo(current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, goTo]);

  const Slide = current === 0 ? <SlideWifi showMostLogo={eventIndex === 2} /> : current === 1
    ? <SlidePartners partners={slidePartners} eventIndex={eventIndex} />
    : <SlideClosing feedbackUrl={feedbackUrl} showMostLogo={eventIndex === 2} />;

  return (
    <div className="relative w-screen h-dvh overflow-hidden cursor-auto lg:cursor-none select-none">
      {Slide}
      <nav aria-label="Навигация по слайдам" className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-[#232323]/95 px-5 py-3 text-white lg:hidden">
        <button type="button" aria-label="Предыдущий слайд" disabled={current === 0} onClick={() => goTo(current - 1)} className="min-w-12 text-2xl disabled:opacity-30">←</button>
        <span className="font-[var(--font-press-start)] text-xs">{current + 1} / {slideIds.length}</span>
        <button type="button" aria-label="Следующий слайд" disabled={current === slideIds.length - 1} onClick={() => goTo(current + 1)} className="min-w-12 text-2xl disabled:opacity-30">→</button>
      </nav>
    </div>
  );
}

export default function PresentPage() {
  return <Presentation partners={partners} eventIndex={2} />;
}
