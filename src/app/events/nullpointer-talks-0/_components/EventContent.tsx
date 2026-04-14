'use client';

import Link from 'next/link';
import type { GalleryPhoto } from '@/app/_lib/gallery';
import { PhotoGallery } from '@/components/PhotoGallery';
import { PhotoCredit } from '@/components/PhotoCredit';

const EVENT_DATE = '2025-09-12';

const speakers = [
  {
    name: 'Дмитрий Бузулуцкий',
    role: 'iOS Tech Lead, Bereke Bank',
    topic: 'Быть или не быть мобильным разработчиком в 2026 году?',
    description: '2022 год показал: даже в IT перемены могут прийти внезапно. За 12 лет Дмитрий видел мобильную разработку со всех сторон — от первых приложений до управления командами. Как меняется профессия, куда движется рынок, и что нас ждёт впереди.',
    video: 'https://www.youtube.com/watch?v=xEgcnV6LquU',
  },
  {
    name: 'Илья Гуля',
    role: 'Developer Productivity Engineer, inDrive',
    topic: 'Вайбкодинг — блажь или благо?',
    description: 'Нейросети, Cursor, Claude Code — всё обещает сделать жизнь разработчика легче, но так ли это? Реальные кейсы: когда доверять ИИ, а когда лучше положиться на собственный опыт.',
    video: 'https://www.youtube.com/watch?v=1CFaLRVv76M',
  },
  {
    name: 'Дмитрий Михальченков',
    role: 'Senior Android Engineer, inDrive',
    topic: 'Фича-тогглы: друг или враг вашего дедлайна?',
    description: 'Фича-тогглы звучат как универсальное решение для гибких релизов, но на практике часто добавляют хаоса. Как их использовать во благо: что работает, что ломает процессы, и как не утонуть в техдолге.',
    video: 'https://www.youtube.com/watch?v=rGr8va9WKxk',
  },
  {
    name: 'Данияр Амангельды',
    role: 'Senior Android Developer',
    topic: 'Android hours — тегін воркшоп. Қалай сонда?',
    description: 'Почему я решил проводить бесплатные воркшопы по Android, какие бонусы и неожиданные открытия это принесло. Как обучение других меняет твой собственный взгляд на профессию.',
    video: 'https://www.youtube.com/watch?v=zZag7ayvDow',
  },
];

const partners: Array<{
  name: string;
  link: string | null;
  logo: string;
  scale?: string;
  textSize?: string;
}> = [
  { name: 'MOST', link: 'https://t.me/moststartupchannel', logo: '/partners/most.svg', scale: '85%' },
  { name: 'Almaty Java Community', link: 'https://t.me/AlmatyJavaCommunity', logo: '/partners/almaty-java.jpg', textSize: 'text-[10px] sm:text-xs' },
  { name: 'Bereke Bank', link: 'https://t.me/+28iZdN5jgzBiZWM6', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', link: 'https://t.me/kz_it_events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Макс (добрый)', link: 'https://t.me/mgorbatyuk_dev', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', link: 'https://t.me/mobile_dev_kz', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'per malī ad astra', link: 'https://t.me/maliastra', logo: '/partners/maliastra.jpg' },
  { name: 'Pavel Korolev. Потяжелее', link: 'https://t.me/pavelkorolevxyz_channel', logo: '/partners/pavel-korolev.jpg', textSize: 'text-[10px] sm:text-xs' },
  { name: 'Android Hours', link: 'https://www.linkedin.com/in/amangeldy/', logo: '/partners/android-hours.png' },
];

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  const content = (
    <div className="group flex flex-col items-center gap-2 p-3 bg-[#2a2a2a] border border-[#363636] hover:border-[#FFD700]/40 transition-all duration-200 hover:bg-[#303030] h-full rounded-sm">
      <div className="w-full aspect-square overflow-hidden bg-[#1e1e1e] flex items-center justify-center p-2 rounded-sm">
        <img
          src={partner.logo}
          alt={partner.name}
          className="object-contain"
          style={{
            maxWidth: partner.scale ?? '100%',
            maxHeight: partner.scale ?? '100%',
          }}
        />
      </div>
      <span className={`font-pixel ${partner.textSize ?? 'text-[10px] sm:text-sm'} text-center text-white/80 group-hover:text-[#FFD700] transition-colors leading-snug min-h-[2em] flex items-center justify-center`}>
        {partner.name}
      </span>
    </div>
  );

  if (partner.link) {
    return (
      <a href={partner.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

export default function EventContent({ photos }: { photos: GalleryPhoto[] }) {
  const isPast = new Date() > new Date(EVENT_DATE + 'T23:59:59');

  return (
    <div className="min-h-screen bg-[#232323] relative overflow-hidden flex flex-col">
      {/* Pixel grid background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15 sm:opacity-10 bg-[linear-gradient(to_right,#353535_1px,transparent_1px),linear-gradient(to_bottom,#353535_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px]" />

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8">
        <Link
          href="/"
          className="font-pixel text-[10px] sm:text-xs text-[#666] hover:text-[#FFD700] transition-colors uppercase tracking-wider"
        >
          &larr; nullptr.party
        </Link>
      </nav>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex-1">
        {/* Hero */}
        <header className="mb-10 sm:mb-14">
          {/* Event hero: gallery if photos exist, else poster */}
          {photos.length > 0 ? (
            <div className="mb-6 sm:mb-8">
              <PhotoGallery photos={photos} />
              <PhotoCredit name="Карина" instagram="unikarinaa" />
            </div>
          ) : (
            <div className="mb-6 sm:mb-8 overflow-hidden rounded-sm border border-[#FFD700]/20" style={{ aspectRatio: '1 / 1' }}>
              <img
                src="/events/talks-0.jpg"
                alt="nullptr.talks[0]"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="font-pixel text-white text-lg xs:text-xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            nullptr.talks<span className="text-[#FFD700]">[</span>0<span className="text-[#FFD700]">]</span>
          </h1>

          {/* Presented by */}
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <img
              src="/partners/nullptr-party.svg"
              alt="nullptr.party"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm"
            />
            <div>
              <div className="font-pixel text-[8px] text-[#555] uppercase tracking-widest">presented by</div>
              <div className="font-pixel text-[#FFD700] text-xs sm:text-sm group-hover:text-white transition-colors">
                nullptr.party
              </div>
            </div>
          </Link>

          {/* Date & Location */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase w-14 sm:w-16 flex-shrink-0">Когда</span>
              <span className="font-body text-sm sm:text-base text-white/90">12 сентября 2025, 19:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase w-14 sm:w-16 flex-shrink-0">Где</span>
              <a
                href="https://go.2gis.com/aPpbN"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm sm:text-base text-white/90 hover:text-[#FFD700] transition-colors underline decoration-[#444] underline-offset-4"
              >
                MOST IT Hub, БЦ Fortis, Ходжанова 2/2
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase w-14 sm:w-16 flex-shrink-0">Формат</span>
              <span className="font-body text-sm sm:text-base text-white/70">4 доклада по 20-25 мин + Q&A</span>
            </div>
          </div>

          {isPast ? (
            <div className="flex flex-wrap gap-3">
              <div className="font-pixel text-[10px] sm:text-xs text-[#666] uppercase tracking-wider border border-[#363636] px-4 py-2.5 inline-block">
                Мероприятие завершено
              </div>
              <a
                href="https://www.youtube.com/playlist?list=PL1rdjlpSaYF1Hz2docBwkHZ1IY_AkRqOn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-[10px] sm:text-xs uppercase bg-[#FFD700] text-[#232323] px-4 py-2.5 hover:bg-[#ffe066] transition-colors tracking-wider inline-flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Смотреть записи
              </a>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://forms.gle/CvsRbb89vtjd98PM7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-xs sm:text-sm uppercase bg-[#FFD700] text-[#232323] px-6 py-3 border-4 border-yellow-300 shadow-[4px_4px_0_#111] transition hover:scale-105 hover:shadow-[0_0_0_4px_#ffe066,0_0_12px_2px_#ffe066aa] active:bg-yellow-500 text-center"
              >
                Регистрация
              </a>
            </div>
          )}
        </header>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-10 sm:mb-12">
          <div className="w-2 h-2 bg-[#FFD700]" />
          <div className="h-px bg-[#FFD700]/20 flex-1" />
          <div className="w-2 h-2 bg-[#FFD700]" />
        </div>

        {/* Speakers */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-pixel text-[#FFD700] text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">
            Спикеры
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="border border-[#FFD700]/15 bg-[#FFD700]/[0.02] p-4 sm:p-5 rounded-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-pixel text-[#FFD700]/40 text-lg sm:text-xl leading-none mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-body text-base sm:text-lg text-white/95 font-medium mb-0.5">
                      {speaker.name}
                    </h3>
                    <p className="font-body text-[11px] sm:text-xs text-[#888] mb-2">
                      {speaker.role}
                    </p>
                  </div>
                </div>
                <h4 className="font-pixel text-[10px] sm:text-xs text-[#FFD700]/80 mb-2 leading-relaxed">
                  {speaker.topic}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#999] leading-relaxed">
                  {speaker.description}
                </p>
                {speaker.video && (
                  <a
                    href={speaker.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-pixel text-[9px] sm:text-[10px] text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/30 hover:bg-[#FFD700]/20 transition-colors mt-3 px-3 py-1.5 uppercase tracking-wider"
                  >
                    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Смотреть запись
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-10 sm:mb-12">
          <div className="w-2 h-2 bg-[#FFD700]" />
          <div className="h-px bg-[#FFD700]/20 flex-1" />
          <div className="w-2 h-2 bg-[#FFD700]" />
        </div>

        {/* Partners */}
        <section className="mb-12">
          <h2 className="font-pixel text-[#FFD700] text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">
            Информационные партнёры
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 pb-8">
        <div className="pt-4 border-t border-[#303030]">
          <div className="font-body text-[11px] text-[#555] text-center">
            nullptr.party — developer community, Almaty
          </div>
        </div>
      </footer>
    </div>
  );
}
