import 'server-only';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

export interface GalleryPhoto {
  src: string;
  thumb: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
}

export const THUMB_WIDTH = 1000;
const THUMB_QUALITY = 84;

export async function listEventPhotos(event: string): Promise<string[]> {
  const dir = join(process.cwd(), 'public', 'events', event);
  const entries = await readdir(dir);
  return entries
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export async function getEventGallery(event: string, thumbBaseUrl: string): Promise<GalleryPhoto[]> {
  const photos = await listEventPhotos(event);
  const dir = join(process.cwd(), 'public', 'events', event);

  return Promise.all(
    photos.map(async (file) => {
      const meta = await sharp(join(dir, file)).metadata();
      const w = meta.width ?? 0;
      const h = meta.height ?? 0;
      const tw = w > THUMB_WIDTH ? THUMB_WIDTH : w;
      const th = w > THUMB_WIDTH ? Math.round((h * THUMB_WIDTH) / w) : h;
      return {
        src: `/events/${event}/${file}`,
        thumb: `${thumbBaseUrl}/${file}`,
        width: w,
        height: h,
        thumbWidth: tw,
        thumbHeight: th,
      };
    }),
  );
}

export async function generateThumbnail(event: string, photo: string) {
  const srcPath = join(process.cwd(), 'public', 'events', event, photo);
  return sharp(srcPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
    .toBuffer();
}
