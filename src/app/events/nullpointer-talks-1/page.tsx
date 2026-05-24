import { getEventGallery } from '@/app/_lib/gallery';
import EventContent from './_components/EventContent';

export default async function Page() {
  const photos = await getEventGallery('talks-1', '/events/nullpointer-talks-1/thumbs', {
    featuredPhoto: 'it-001.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-1/thumbs-small',
  });
  return <EventContent photos={photos} />;
}
