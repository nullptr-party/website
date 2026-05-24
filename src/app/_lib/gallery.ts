import 'server-only';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

export interface GalleryPhoto {
  src: string;
  thumb: string;
  smallThumb?: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
}

export const THUMB_WIDTH = 1000;
export const SMALL_THUMB_WIDTH = 180;
const THUMB_QUALITY = 84;

export async function listEventPhotos(event: string): Promise<string[]> {
  const dir = join(process.cwd(), 'public', 'events', event);
  const entries = await readdir(dir);
  return entries
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

export interface EventGalleryOptions {
  smallThumbBaseUrl?: string;
  featuredPhoto?: string;
}

function prioritizePhoto(photos: string[], featuredPhoto?: string) {
  if (!featuredPhoto || !photos.includes(featuredPhoto)) {
    return photos;
  }
  return [featuredPhoto, ...photos.filter((photo) => photo !== featuredPhoto)];
}

export async function getEventGallery(
  event: string,
  thumbBaseUrl: string,
  options: EventGalleryOptions = {},
): Promise<GalleryPhoto[]> {
  const photos = prioritizePhoto(await listEventPhotos(event), options.featuredPhoto);
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
        smallThumb: options.smallThumbBaseUrl ? `${options.smallThumbBaseUrl}/${file}` : undefined,
        width: w,
        height: h,
        thumbWidth: tw,
        thumbHeight: th,
      };
    }),
  );
}

export async function generateThumbnail(event: string, photo: string) {
  return generateResizedThumbnail(event, photo, THUMB_WIDTH);
}

export async function generateSmallThumbnail(event: string, photo: string) {
  return generateResizedThumbnail(event, photo, SMALL_THUMB_WIDTH);
}

async function generateResizedThumbnail(event: string, photo: string, width: number) {
  const srcPath = join(process.cwd(), 'public', 'events', event, photo);
  return sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: THUMB_QUALITY, mozjpeg: true })
    .toBuffer();
}
