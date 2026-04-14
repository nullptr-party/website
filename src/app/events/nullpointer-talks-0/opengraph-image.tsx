import { generateEventOgImage, ogSize } from '@/app/_lib/event-og-image';

export const dynamic = 'force-static';
export const alt = 'nullptr.talks[0]';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return generateEventOgImage('/events/talks-0.jpg');
}
