const partners: Array<{
  name: string;
  link: string | null;
  logo: string;
  invert?: boolean;
  scale?: string;
}> = [
  { name: 'MOST', link: 'https://t.me/moststartupchannel', logo: '/partners/most.svg', scale: '85%' },
  { name: 'Almaty Java Community', link: 'https://t.me/AlmatyJavaCommunity', logo: '/partners/almaty-java.jpg' },
  { name: 'Bereke Bank', link: 'https://t.me/+28iZdN5jgzBiZWM6', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', link: 'https://t.me/kz_it_events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Макс (добрый)', link: 'https://t.me/mgorbatyuk_dev', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', link: 'https://t.me/mobile_dev_kz', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'per malī ad astra', link: 'https://t.me/maliastra', logo: '/partners/maliastra.jpg' },
  { name: 'Android Hours', link: 'https://www.linkedin.com/in/amangeldy/', logo: '/partners/android-hours.png' },
];

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  const content = (
    <div className="group flex flex-col items-center gap-3 p-4 sm:p-5 bg-[#3a3a3a] border border-[#4a4a4a] hover:border-yellow-400/60 transition-all duration-200 hover:bg-[#404040]">
      <div className="w-full aspect-square rounded-sm overflow-hidden bg-[#2a2a2a] flex items-center justify-center p-3">
        <img
          src={partner.logo}
          alt={partner.name}
          className={`object-contain${partner.invert ? ' invert brightness-0 invert' : ''}`}
          style={{
            maxWidth: partner.scale ?? '100%',
            maxHeight: partner.scale ?? '100%',
            ...(partner.invert ? { filter: 'invert(1)' } : {}),
          }}
        />
      </div>
      <span className="font-[var(--font-press-start)] text-[10px] sm:text-xs text-center text-white/90 group-hover:text-yellow-400 transition-colors leading-relaxed min-h-[3em] flex items-center">
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
    <div className="min-h-screen bg-[#333] relative overflow-hidden flex flex-col">
      {/* Background Grid */}
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

      <div className="max-w-3xl w-full mx-auto relative z-10 px-6 sm:px-10 py-12 sm:py-16 flex-1">
        {/* Event Title */}
        <h1 className="font-[var(--font-press-start)] text-white text-base xs:text-xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-3 break-all">
          nullptr.talks<span className="text-yellow-400">[</span>2<span className="text-yellow-400">]</span>
        </h1>

        {/* Presented by */}
        <a
          href="https://nullptr.party"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 group"
        >
          <span className="font-[var(--font-press-start)] text-white/30 text-[8px] sm:text-[10px] uppercase tracking-widest">
            presented by
          </span>
          <div className="flex items-center gap-3 mt-2">
            <img
              src="/partners/nullptr-party.svg"
              alt="nullptr.party"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm"
            />
            <span className="font-[var(--font-press-start)] text-yellow-400 text-sm sm:text-lg group-hover:text-white transition-colors">
              nullptr.party
            </span>
          </div>
        </a>

        {/* Date & Location */}
        <p className="font-[var(--font-press-start)] text-white/80 text-sm sm:text-base mb-2">
          3 апреля 19:00
        </p>
        <p className="font-[var(--font-press-start)] text-white/50 text-xs sm:text-sm mb-12">
          MOST IT Hub, БЦ Fortis, Ходжанова 2/2
        </p>

        {/* Separator */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-2 h-2 bg-yellow-400" />
          <div className="h-px bg-yellow-400/40 flex-1" />
          <div className="w-2 h-2 bg-yellow-400" />
        </div>

        {/* Partners Section */}
        <section>
          <h2 className="font-[var(--font-press-start)] text-yellow-400 text-base sm:text-lg mb-8">
            Информационные партнёры
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
