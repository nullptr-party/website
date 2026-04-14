import { generateThumbnail, listEventPhotos } from '@/app/_lib/gallery';

export const dynamic = 'force-static';

const EVENT = 'talks-1';

export async function generateStaticParams() {
  const photos = await listEventPhotos(EVENT);
  return photos.map((photo) => ({ photo }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ photo: string }> }) {
  const { photo } = await params;
  const buffer = await generateThumbnail(EVENT, photo);
  return new Response(new Uint8Array(buffer), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
}
