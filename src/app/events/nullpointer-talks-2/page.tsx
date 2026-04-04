'use client';

import Link from 'next/link';

const EVENT_DATE = '2026-04-03';

const speakers = [
  {
    name: 'Дмитрий Михальченков',
    role: 'Senior Android Engineer, inDrive',
    topic: 'Код-ревью: как перестать мучить команду',
    description: 'Максимально холиварная тема, о которую разбили ЧСВ многих разрабов и которую боятся не меньше бизнесов.',
    slides: '/events/slides/mikhalchenkov-code-review.pdf',
  },
  {
    name: 'Алексей Орехов',
    role: 'Android Engineer, ДНЧВПСТиО',
    topic: 'Почему в 2026 нужно уходить из энтерпрайза и нырять в ИИ',
    description: 'Хайп? Выгорание? Расчётливый эпатаж для повышения продаж своих курсов? Приходите, узнаем вместе.',
    slides: '/events/slides/orekhov-enterprise-to-ai.pdf',
  },
  {
    name: 'Даурен Кассен',
    role: 'Android/KMP-разработчик, QIC digital hub (Катар)',
    topic: 'Compose Multiplatform — пет-проект который приносит денюжки',
    description: 'Как использовать Kotlin не только для Android, но и для iOS и веба. Советы, антипримеры, подводные камни.',
    slides: '/events/slides/kassen-compose-multiplatform.pdf',
  },
  {
    name: 'Иван Луценко',
    role: 'Android Tech Lead, Bereke Bank',
    topic: 'Эволюция анализа крешей: от Crashlytics до мультиагентского пайплайна',
    description: 'Gemini, Claude Desktop, собственный плагин для Claude Code с субагентами. Live-демо: агенты разбирают случайный креш.',
    slides: 'https://ivan.nullptr.party/res/crashlytics-talk',
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

export default function NullpointerTalks2Page() {
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
          {/* Event poster */}
          <div className="mb-6 sm:mb-8 overflow-hidden rounded-sm border border-[#FFD700]/20" style={{ aspectRatio: '1 / 1' }}>
            <img
              src="/events/talks-2.jpg"
              alt="nullptr.talks[2]"
              width={1200}
              height={1200}
              className="w-full h-auto"
            />
          </div>

          {/* Title */}
          <h1 className="font-pixel text-white text-lg xs:text-xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            nullptr.talks<span className="text-[#FFD700]">[</span>2<span className="text-[#FFD700]">]</span>
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
              <span className="font-body text-sm sm:text-base text-white/90">3 апреля 2026, 19:00</span>
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

          {/* CTA buttons — only before/on event day */}
          {new Date() <= new Date(EVENT_DATE + 'T23:59:59') ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://forms.gle/yn8JrbU1Axij3j2R6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-xs sm:text-sm uppercase bg-[#FFD700] text-[#232323] px-6 py-3 border-4 border-yellow-300 shadow-[4px_4px_0_#111] transition hover:scale-105 hover:shadow-[0_0_0_4px_#ffe066,0_0_12px_2px_#ffe066aa] active:bg-yellow-500 text-center"
              >
                Регистрация
              </a>
              <a
                href="https://t.me/+qJ99IVcC_EY5NTRi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-pixel text-xs sm:text-sm uppercase bg-transparent text-white px-6 py-3 border-4 border-gray-400 shadow-[4px_4px_0_#1a1a1a] transition hover:bg-gray-700 text-center"
              >
                Чат мероприятия
              </a>
            </div>
          ) : (
            <div className="font-pixel text-[10px] sm:text-xs text-[#666] uppercase tracking-wider border border-[#363636] px-4 py-2.5 inline-block">
              Мероприятие завершено
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
                {speaker.slides && (
                  <a
                    href={speaker.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-pixel text-[9px] sm:text-[10px] text-[#FFD700]/80 hover:text-[#FFD700] transition-colors mt-3 uppercase tracking-wider"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                      <polygon points="10,8 10,14 15,11" fill="currentColor" stroke="none" />
                    </svg>
                    Презентация
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
