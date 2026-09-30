import { events, venues, getEventsByYear, type CommunityEvent } from '@/app/_data/events';

export const TELEGRAM = 'https://t.me/+1-aB-cGCv4pkMDAy';
export const ALMATY_CHAT = 'https://t.me/+YgE_vglZYnkxMWVi';

export const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const MONTHS_SHORT = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

export function parts(iso: string) {
  const [y, m, d] = iso.split('-');
  return { y, m: parseInt(m, 10) - 1, d: parseInt(d, 10), mm: m, dd: d };
}

export const venueOf = (e: CommunityEvent) => (e.venueId ? venues[e.venueId] : undefined);

export const talks = events.filter((e) => e.type === 'talks' && e.eventPage).sort((a, b) => a.talksIndex! - b.talksIndex!);
export const latestTalks = talks[talks.length - 1];
export const stats = {
  meetups: events.filter((e) => e.type === 'meetup').length,
  talks: events.filter((e) => e.type === 'talks').length,
};
export const byYear = getEventsByYear(events);
export const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));
export { events };
export type { CommunityEvent };
