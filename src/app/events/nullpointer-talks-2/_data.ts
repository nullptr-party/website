import type { TalksEvent, TalksPartner } from '@/app/events/_components/TalksEventPage';

const speakers = [
  {
    name: 'Дмитрий Михальченков',
    role: 'Senior Android Engineer, inDrive',
    topic: 'Код-ревью: как перестать мучить команду',
    description: 'Максимально холиварная тема, о которую разбили ЧСВ многих разрабов и которую боятся не меньше бизнесов.',
    slides: '/events/slides/mikhalchenkov-code-review.pdf',
    video: 'https://youtu.be/ArS-_FquUNg',
  },
  {
    name: 'Алексей Орехов',
    role: 'Android Engineer, ДНЧВПСТиО',
    topic: 'Почему в 2026 нужно уходить из энтерпрайза и нырять в ИИ',
    description: 'Хайп? Выгорание? Расчётливый эпатаж для повышения продаж своих курсов? Приходите, узнаем вместе.',
    slides: '/events/slides/orekhov-enterprise-to-ai.pdf',
    video: 'https://youtu.be/l5D4-7AdyJY',
  },
  {
    name: 'Даурен Кассен',
    role: 'Android/KMP-разработчик, QIC digital hub (Катар)',
    topic: 'Compose Multiplatform — пет-проект который приносит денюжки',
    description: 'Как использовать Kotlin не только для Android, но и для iOS и веба. Советы, антипримеры, подводные камни.',
    slides: '/events/slides/kassen-compose-multiplatform.pdf',
    video: 'https://youtu.be/leD-VVZhU8c',
  },
  {
    name: 'Иван Луценко',
    role: 'Android Tech Lead, Bereke Bank',
    topic: 'Эволюция анализа крешей: от Crashlytics до мультиагентского пайплайна',
    description: 'Gemini, Claude Desktop, собственный плагин для Claude Code с субагентами. Live-демо: агенты разбирают случайный креш.',
    slides: 'https://ivan.nullptr.party/res/crashlytics-talk',
    video: 'https://youtu.be/vQ5SkC84eYM',
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
  number: 2,
  date: '2026-04-03',
  dateLabel: '3 апреля 2026, 19:00',
  venueLabel: 'MOST IT Hub, БЦ Fortis, Ходжанова 2/2',
  venueUrl: 'https://go.2gis.com/aPpbN',
  format: '4 доклада по 20-25 мин + Q&A',
  poster: '/events/talks-2.jpg',
  playlist: 'https://www.youtube.com/playlist?list=PL1rdjlpSaYF3Tz3NZx-8HdpViWOcOOBVC',
  registration: 'https://forms.gle/yn8JrbU1Axij3j2R6',
  chat: 'https://t.me/+qJ99IVcC_EY5NTRi',
  speakers,
  partners,
} satisfies TalksEvent;

