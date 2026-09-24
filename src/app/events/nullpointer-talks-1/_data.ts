import type { TalksEvent, TalksPartner } from '@/app/events/_components/TalksEventPage';

const speakers = [
  {
    name: 'Алексей Орехов',
    role: 'Android Engineer, izi',
    topic: 'Лебедь, рак и щука (современная интерпретация)',
    description: 'Как взять существующее приложение и аккуратно встроить его в другой продукт, не превратив всё в монстра? Реальный кейс интеграции «приложения внутри приложения»: архитектура, боли, неожиданные ловушки.',
    video: 'https://www.youtube.com/watch?v=3TJi7RrYwcs',
  },
  {
    name: 'Амин Бенариеб',
    role: 'iOS Engineer, Welltory',
    topic: 'Как мы превратили iPhone в лабораторный микроскоп',
    description: 'Проект на стыке мобильной разработки и медицины. Съёмка крови через оптику, связь по BLE с устройством и AI, работающий прямо на телефоне. Чем такой продукт отличается от привычного приложения из стора.',
    video: 'https://www.youtube.com/watch?v=AP_goouS7P4',
  },
  {
    name: 'Алихан Байшоланов',
    role: 'Android Engineer, BCC HUB',
    topic: 'Запуск Dart кода через нативку',
    description: 'Flutter-приложение, внутрь него встраивают нативный SDK с нативным экраном, и поверх него снова нужно показать Flutter-экран. Как запускать Dart-код из нативного SDK и строить мосты между Kotlin и Flutter.',
    video: 'https://www.youtube.com/watch?v=xcpktzX3XRE',
  },
];

const partners: TalksPartner[] = [
  { name: 'MOST', link: 'https://t.me/moststartupchannel', logo: '/partners/most.svg', scale: '85%' },
  { name: 'Bereke Bank', link: 'https://t.me/+28iZdN5jgzBiZWM6', logo: '/partners/bereke-bank.svg' },
  { name: 'KZ IT Events', link: 'https://t.me/kz_it_events', logo: '/partners/kz-it-events.jpg' },
  { name: 'Altel Digital', link: 'https://t.me/altel_digital', logo: '/partners/altel-digital.jpg' },
  { name: 'Макс (добрый)', link: 'https://t.me/mgorbatyuk_dev', logo: '/partners/max-dobry.jpg' },
  { name: 'Mobile Dev KZ', link: 'https://t.me/mobile_dev_kz', logo: '/partners/mobile-dev-kz.svg' },
  { name: 'QazCode', link: 'https://t.me/qazcode_tech', logo: '/partners/qazcode.jpg' },
  { name: 'per malī ad astra', link: 'https://t.me/maliastra', logo: '/partners/maliastra.jpg' },
  { name: 'Almaty Java Community', link: 'https://t.me/AlmatyJavaCommunity', logo: '/partners/almaty-java.jpg', textSize: 'text-[10px] sm:text-xs' },
];

export const event = {
  number: 1,
  date: '2025-12-12',
  dateLabel: '12 декабря 2025, 19:00',
  venueLabel: 'MOST IT Hub, БЦ Fortis, Ходжанова 2/2',
  venueUrl: 'https://go.2gis.com/aPpbN',
  format: '4 доклада по 20-25 мин + Q&A',
  poster: '/events/talks-1.jpg',
  playlist: 'https://youtube.com/playlist?list=PL1rdjlpSaYF2yDvXse4ZF8EeZ0TmpkWjZ',
  registration: 'https://forms.gle/6HD8yDUEWLNU2iZr6',
  speakers,
  partners,
} satisfies TalksEvent;

