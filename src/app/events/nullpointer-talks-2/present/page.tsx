'use client';

import { useState, useEffect, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const partners = [
  { name: 'Almaty Java Community', logo: '/partners/almaty-java.jpg' },
  { name: 'Bereke Bank', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Макс (добрый)', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'per malī ad astra', logo: '/partners/maliastra.jpg' },
  { name: 'Pavel Korolev. Потяжелее', logo: '/partners/pavel-korolev.jpg' },
  { name: 'Android Hours', logo: '/partners/android-hours.png' },
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
  return (
    <img
      src="/present/most-logo.png"
      alt="MOST IT Hub"
      className="absolute bottom-8 right-8 w-52 h-52 opacity-80"
    />
  );
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

const QR_CLASS = 'w-[50vh] h-[50vh]';

function SlideWifi() {
  return (
    <div className="relative w-full h-full bg-[#2e2e2e] flex items-center justify-center">
      <SlideBackground />
      <MostLogo />

      <div className="relative z-10 flex items-start justify-center gap-[8vw] w-full px-[6vw]">
        {/* WiFi */}
        <div className="flex flex-col items-center gap-[2vh]">
          <h2 className="font-[var(--font-press-start)] text-white text-[4vh]">WiFi</h2>
          <div className={QR_CLASS}>
            <WhiteQR value="WIFI:T:WPA;S:Most IT Hub;P:123most123;;" />
          </div>
          <p className="font-[var(--font-press-start)] text-white text-[4.5vh]">Most IT Hub</p>
          <p className="font-[var(--font-press-start)] text-white/80 text-[3.5vh]">123most123</p>
        </div>

        {/* Telegram */}
        <div className="flex flex-col items-center gap-[2vh]">
          <h2 className="font-[var(--font-press-start)] text-white text-[4vh] invisible">_</h2>
          <div className={QR_CLASS}>
            <WhiteQR value="https://t.me/+60NkAf4EsJ8xYWJi" />
          </div>
          <p className="font-[var(--font-press-start)] text-white text-[4.5vh]">Мы в Telegram</p>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex flex-col items-center gap-[0.5vh]">
      <div className="w-[20vh] h-[20vh] overflow-hidden rounded-md bg-[#3a3a3a] border border-[#4a4a4a] flex items-center justify-center p-2">
        <img
          src={partner.logo}
          alt={partner.name}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="font-[var(--font-press-start)] text-[1.4vh] text-center text-white/80 leading-tight max-w-[18vh]">
        {partner.name}
      </span>
    </div>
  );
}

function SlidePartners() {
  const left = partners.slice(0, 4);
  const right = partners.slice(4, 8);

  return (
    <div className="relative w-full h-full bg-[#2e2e2e]">
      <SlideBackground />
      <MostLogo />

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Title */}
        <h2 className="mt-[7vh] font-[var(--font-press-start)] text-yellow-400 text-[5vh] text-center">
          Информационные партнёры
        </h2>

        <div className="flex-1 flex items-center justify-center gap-[4vw] -mt-[8vh]">
          {/* Left column */}
          <div className="grid grid-cols-2 gap-[2vh]">
            {left.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>

          {/* Central QR */}
          <div className="w-[45vh] h-[45vh]">
            <WhiteQR value="https://nullptr.party/events/nullpointer-talks-2" />
          </div>

          {/* Right column */}
          <div className="grid grid-cols-2 gap-[2vh]">
            {right.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideClosing() {
  return (
    <div className="relative w-full h-full bg-[#2e2e2e] flex items-center justify-center">
      <SlideBackground />
      <MostLogo />

      <div className="relative z-10 flex items-start justify-center gap-[8vw] w-full px-[6vw]">
        {/* Telegram */}
        <div className="flex flex-col items-center gap-[2vh]">
          <div className={QR_CLASS}>
            <WhiteQR value="https://t.me/+60NkAf4EsJ8xYWJi" />
          </div>
          <p className="font-[var(--font-press-start)] text-white text-[4.5vh]">Мы в Telegram</p>
        </div>

        {/* Feedback */}
        <div className="flex flex-col items-center gap-[2vh]">
          <div className={QR_CLASS}>
            <WhiteQR value="https://forms.gle/pFS4uaErfrKuJW6D8" />
          </div>
          <p className="font-[var(--font-press-start)] text-white text-[4.5vh]">Обратная связь</p>
        </div>
      </div>
    </div>
  );
}

const slides = [
  { id: 'wifi', component: SlideWifi },
  { id: 'partners', component: SlidePartners },
  { id: 'closing', component: SlideClosing },
];

function getInitialSlide() {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash.replace('#', '');
  const idx = slides.findIndex((s) => s.id === hash);
  return idx >= 0 ? idx : 0;
}

export default function PresentPage() {
  const [current, setCurrent] = useState(getInitialSlide);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, idx));
    setCurrent(clamped);
    window.location.hash = slides[clamped].id;
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = slides.findIndex((s) => s.id === hash);
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

  const Slide = slides[current].component;

  return (
    <div className="w-screen h-screen overflow-hidden cursor-none select-none">
      <Slide />
    </div>
  );
}
