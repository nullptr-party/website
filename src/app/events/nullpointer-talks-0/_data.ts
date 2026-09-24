import type { TalksEvent, TalksPartner } from '@/app/events/_components/TalksEventPage';

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

const partners: TalksPartner[] = [
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

export const event = {
  number: 0,
  date: '2025-09-12',
  dateLabel: '12 сентября 2025, 19:00',
  venueLabel: 'MOST IT Hub, БЦ Fortis, Ходжанова 2/2',
  venueUrl: 'https://go.2gis.com/aPpbN',
  format: '4 доклада по 20-25 мин + Q&A',
  poster: '/events/talks-0.jpg',
  playlist: 'https://www.youtube.com/playlist?list=PL1rdjlpSaYF1Hz2docBwkHZ1IY_AkRqOn',
  registration: 'https://forms.gle/CvsRbb89vtjd98PM7',
  speakers,
  partners,
} satisfies TalksEvent;

