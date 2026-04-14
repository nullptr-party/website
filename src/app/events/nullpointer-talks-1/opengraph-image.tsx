import { generateEventOgImage, ogSize } from '@/app/_lib/event-og-image';

export const dynamic = 'force-static';
export const alt = 'nullptr.talks[1]';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return generateEventOgImage('/events/talks-1.jpg');
}
