import type { TalksEvent, TalksPartner } from '@/app/events/_components/TalksEventPage';

const speakers = [
  {
    name: 'Виктор Гордиенко',
    role: 'Senior iOS Engineer, inDrive',
    topic: 'Агентные процессы и оркестрация в iOS-разработке',
    description: 'Как построить проверяемый цикл работы AI-агентов в iOS-проекте: сократить шум сборки, наладить тесты и разделить задачи скриптов и модели.',
    profile: 'https://www.linkedin.com/in/viktor-gordienko/',
    slides: '/events/slides/view/gordienko-agent-orchestration-ios/',
    video: 'https://youtu.be/mrr9OTFbQ58',
  },
  {
    name: 'Арыстан Тельбай',
    role: 'Android Developer, ForteBank',
    topic: 'Агент, сделай проект. Не делай ошибок',
    description: 'Пять связок моделей и инструментов получили одно ТЗ на Android-приложение для тренировок. Сравниваем результаты по функциям, архитектуре, тестам и времени разработки.',
    profile: 'https://www.linkedin.com/in/atelbay/',
    slides: '/events/slides/telbay-agent-project/',
    video: 'https://youtu.be/Z4lBenX2GTU',
  },
  {
    name: 'Павел Королёв',
    role: 'Android Tech Lead, AI Adoption Lead, QazCode',
    topic: 'Я навайбкодил систему для производства квизов',
    description: 'Как пет-проект для создания пакетов SIGame вырос в редактор квизов и YouTube-канал. Разбираем, как агенты помогали строить редактор, базу данных и экспорт.',
    profile: 'https://www.linkedin.com/in/pavelkorolevxyz/',
    slides: 'https://pavelkorolev.xyz/talks/2026-09-24-nullptr-talks-3/',
    video: 'https://youtu.be/mC4r_HApvB4',
  },
];

const partners: TalksPartner[] = [
  { name: 'MOST', logo: '/partners/most.svg', link: 'https://t.me/moststartupchannel', scale: '85%' },
  { name: 'Bereke Bank', logo: '/partners/bereke-bank.svg', link: 'https://t.me/+28iZdN5jgzBiZWM6' },
  { name: 'KZ IT Events', logo: '/partners/kz-it-events.jpg', link: 'https://t.me/kz_it_events' },
  { name: 'Макс (добрый)', logo: '/partners/max-dobry.jpg', link: 'https://t.me/mgorbatyuk_dev' },
  { name: 'Mobile Dev KZ', logo: '/partners/mobile-dev-kz.svg', link: 'https://t.me/mobile_dev_kz/27493' },
  { name: 'per malī ad astra', logo: '/partners/maliastra.jpg', link: 'https://t.me/maliastra' },
  { name: 'Almaty Java Community', logo: '/partners/almaty-java.jpg', link: 'https://t.me/AlmatyJavaCommunity/118', textSize: 'text-[10px] sm:text-xs' },
  { name: 'GDG Almaty', logo: '/partners/gdg-almaty.jpg', link: 'https://t.me/gdgalmatynew' },
  { name: 'devs.kz', logo: '/partners/devs-kz.png', link: 'https://t.me/devs_kz' },
  { name: 'Startup Chaihona', logo: '/partners/startup-chaihona.png', link: 'https://t.me/startupchoyxona' },
];

export const event = {
  number: 3,
  date: '2026-09-24',
  dateLabel: '24 сентября 2026, 19:00',
  venueLabel: 'MOST IT Hub, Алматы · только офлайн',
  venueUrl: 'https://go.2gis.com/aPpbN',
  intro: 'Говорили про AI-агентов без лишнего оптимизма, сурово привязывая их к гайдлайнам и жёстко ограничивая. Все мы немного Арыстан, поэтому наши гайдлайны — «агент сделай фичу, не допускай ошибок». Докладчики рассказали о том, как жонглировать агентами, какие агенты более агентные и как с агентами сделать большой продукт.',
  completed: true,
  playlist: 'https://www.youtube.com/playlist?list=PLQkeCVMOa2Jc',
  footerLinks: [
    { label: 'Канал nullptr.party', url: 'https://t.me/nullptr_party' },
    { label: 'Чат nullptr.party', url: 'https://t.me/almaty_nullptr_party' },
  ],
  speakers,
  partners,
} satisfies TalksEvent;
