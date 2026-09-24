import Link from 'next/link';

const speakers = [
  { name: 'Виктор Гордиенко', role: 'Senior iOS Engineer, inDrive', topic: 'Агентные процессы и оркестрация в iOS-разработке', link: 'https://www.linkedin.com/in/viktor-gordienko/' },
  { name: 'Арыстан Тельбай', role: 'Android Developer, ForteBank', topic: 'Агент, сделай проект. Не делай ошибок', link: 'https://www.linkedin.com/in/atelbay/' },
  { name: 'Павел Королёв', role: 'Android Tech Lead, QazCode', topic: 'Я навайбкодил систему для производства квизов', link: 'https://www.linkedin.com/in/pavelkorolevxyz/' },
];

const partners = [
  { name: 'MOST', logo: '/partners/most.svg', link: 'https://t.me/moststartupchannel' },
  { name: 'Bereke Bank', logo: '/partners/bereke-bank.svg', link: 'https://t.me/+28iZdN5jgzBiZWM6' },
  { name: 'KZ IT Events', logo: '/partners/kz-it-events.jpg', link: 'https://t.me/kz_it_events' },
  { name: 'Макс (добрый)', logo: '/partners/max-dobry.jpg', link: 'https://t.me/mgorbatyuk_dev' },
  { name: 'Mobile Dev KZ', logo: '/partners/mobile-dev-kz.svg', link: 'https://t.me/mobile_dev_kz/27493' },
  { name: 'per malī ad astra', logo: '/partners/maliastra.jpg', link: 'https://t.me/maliastra' },
  { name: 'Almaty Java Community', logo: '/partners/almaty-java.jpg', link: 'https://t.me/AlmatyJavaCommunity/118' },
  { name: 'GDG Almaty', logo: '/partners/gdg-almaty.jpg', link: 'https://t.me/gdgalmatynew' },
  { name: 'devs.kz', logo: '/partners/devs-kz.png', link: 'https://t.me/devs_kz' },
  { name: 'Startup Chaihona', logo: '/partners/startup-chaihona.png', link: 'https://t.me/startupchoyxona' },
];

const divider = <div className="flex items-center gap-2 mb-10 sm:mb-12"><div className="w-2 h-2 bg-[#FFD700]" /><div className="h-px bg-[#FFD700]/20 flex-1" /><div className="w-2 h-2 bg-[#FFD700]" /></div>;

export default function Page() {
  return (
    <div className="min-h-screen bg-[#232323] relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15 sm:opacity-10 bg-[linear-gradient(to_right,#353535_1px,transparent_1px),linear-gradient(to_bottom,#353535_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px]" />
      <nav className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8">
        <Link href="/" className="font-pixel text-[10px] sm:text-xs text-[#666] hover:text-[#FFD700] transition-colors uppercase tracking-wider">&larr; nullptr.party</Link>
      </nav>

      <main className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12 flex-1">
        <header className="mb-10 sm:mb-14">
          <h1 className="font-pixel text-white text-lg xs:text-xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            nullptr.talks<span className="text-[#FFD700]">[</span>3<span className="text-[#FFD700]">]</span>
          </h1>
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <img src="/partners/nullptr-party.svg" alt="nullptr.party" className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm" />
            <span><span className="block font-pixel text-[8px] text-[#555] uppercase tracking-widest">presented by</span><span className="block font-pixel text-[#FFD700] text-xs sm:text-sm group-hover:text-white transition-colors">nullptr.party</span></span>
          </Link>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3"><span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase w-14 sm:w-16 flex-shrink-0">Когда</span><span className="font-body text-sm sm:text-base text-white/90">24 сентября 2026, 19:00</span></div>
            <div className="flex items-center gap-3"><span className="font-pixel text-[9px] sm:text-[10px] text-[#666] uppercase w-14 sm:w-16 flex-shrink-0">Где</span><a href="https://go.2gis.com/aPpbN" target="_blank" rel="noopener noreferrer" className="font-body text-sm sm:text-base text-white/90 hover:text-[#FFD700] transition-colors underline decoration-[#444] underline-offset-4">MOST IT Hub, Алматы · только офлайн</a></div>
          </div>
          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed mb-6">Будем говорить про AI-агентов без лишнего оптимизма, сурово привязывая их к гайдлайнам и жёстко ограничивая. Все мы немного Арыстан, поэтому наши гайдлайны — «агент сделай фичу, не допускай ошибок». Докладчики расскажут о том, как жонглировать агентами, какие агенты более агентные и как с агентами сделать большой продукт.</p>
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <a href="https://forms.gle/unm14KD1CQWhrnh77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-pixel text-xs sm:text-sm uppercase bg-[#FFD700] text-[#232323] px-6 py-3 border-4 border-yellow-300 shadow-[4px_4px_0_#111] transition hover:scale-105 hover:shadow-[0_0_0_4px_#ffe066,0_0_12px_2px_#ffe066aa] active:bg-yellow-500 text-center">Регистрация</a>
            <a href="https://t.me/+qJ99IVcC_EY5NTRi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-pixel text-xs sm:text-sm uppercase bg-transparent text-white px-6 py-3 border-4 border-gray-400 shadow-[4px_4px_0_#1a1a1a] transition hover:bg-gray-700 text-center">Чат мероприятия</a>
          </div>
        </header>

        {divider}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-pixel text-[#FFD700] text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">Спикеры</h2>
          <div className="space-y-6 sm:space-y-8">
            {speakers.map((speaker, i) => (
              <article key={speaker.name} className="border border-[#FFD700]/15 bg-[#FFD700]/[0.02] p-4 sm:p-5 rounded-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-pixel text-[#FFD700]/40 text-lg sm:text-xl leading-none mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <a href={speaker.link} target="_blank" rel="noopener noreferrer" className="block font-body text-base sm:text-lg text-white/95 hover:text-[#FFD700] font-medium mb-0.5">{speaker.name}</a>
                    <p className="font-body text-[11px] sm:text-xs text-[#888] mb-2">{speaker.role}</p>
                  </div>
                </div>
                <h3 className="font-pixel text-[10px] sm:text-xs text-[#FFD700]/80 mb-2 leading-relaxed">{speaker.topic}</h3>
              </article>
            ))}
          </div>
        </section>

        {divider}
        <section className="mb-12">
          <h2 className="font-pixel text-[#FFD700] text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">Информационные партнёры</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {partners.map((partner) => (
              <a key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 p-3 bg-[#2a2a2a] border border-[#363636] hover:border-[#FFD700]/40 transition-all duration-200 hover:bg-[#303030] h-full rounded-sm">
                <span className="w-full aspect-square overflow-hidden bg-[#1e1e1e] flex items-center justify-center p-2 rounded-sm"><img src={partner.logo} alt={partner.name} className="object-contain max-w-full max-h-full" /></span>
                <span className="font-pixel text-[10px] sm:text-sm text-center text-white/80 group-hover:text-[#FFD700] transition-colors leading-snug min-h-[2em] flex items-center justify-center">{partner.name}</span>
              </a>
            ))}
          </div>
        </section>
        <div className="flex flex-wrap gap-4 font-body text-xs text-[#888]">
          <a href="https://t.me/nullptr_party" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">Канал nullptr.party</a>
          <a href="https://t.me/almaty_nullptr_party" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700]">Чат nullptr.party</a>
        </div>
      </main>
      <footer className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-8 pb-8"><div className="pt-4 border-t border-[#303030] font-body text-[11px] text-[#555] text-center">nullptr.party — developer community, Almaty</div></footer>
    </div>
  );
}
