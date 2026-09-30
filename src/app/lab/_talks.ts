import 'server-only';
import { getEventGallery, type GalleryPhoto } from '@/app/_lib/gallery';
import type { TalksEvent } from '@/app/events/_components/TalksEventPage';
import { event as t0 } from '@/app/events/nullpointer-talks-0/_data';
import { event as t1 } from '@/app/events/nullpointer-talks-1/_data';
import { event as t2 } from '@/app/events/nullpointer-talks-2/_data';
import { event as t3 } from '@/app/events/nullpointer-talks-3/_data';

// Data for design-lab secondary pages: /lab/<variant>/talks/<n>/
export const talksEvents: TalksEvent[] = [t0, t1, t2, t3];
export const talksParams = () => talksEvents.map((e) => ({ n: String(e.number) }));
export const talksByNumber = (n: string) => talksEvents.find((e) => String(e.number) === n)!;

const galleries: Record<number, [string, string]> = {
  0: ['talks-0', 'IMG_7763.jpg'],
  1: ['talks-1', 'it-001.jpg'],
  2: ['talks-2', 'DSCF4954.jpg'],
};

export async function talksPhotos(n: number): Promise<GalleryPhoto[]> {
  const g = galleries[n];
  if (!g) return [];
  return getEventGallery(g[0], `/events/nullpointer-talks-${n}/thumbs`, {
    featuredPhoto: g[1],
    smallThumbBaseUrl: `/events/nullpointer-talks-${n}/thumbs-small`,
  });
}
export type { TalksEvent, GalleryPhoto };
