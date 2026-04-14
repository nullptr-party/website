import { getEventGallery } from '@/app/_lib/gallery';
import EventContent from './_components/EventContent';

export default async function Page() {
  const photos = await getEventGallery('talks-1', '/events/nullpointer-talks-1/thumbs');
  return <EventContent photos={photos} />;
}
