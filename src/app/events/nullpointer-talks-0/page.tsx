import { getEventGallery } from '@/app/_lib/gallery';
import EventContent from './_components/EventContent';

export default async function Page() {
  const photos = await getEventGallery('talks-0', '/events/nullpointer-talks-0/thumbs');
  return <EventContent photos={photos} />;
}
