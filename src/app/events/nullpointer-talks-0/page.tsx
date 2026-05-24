import { getEventGallery } from '@/app/_lib/gallery';
import EventContent from './_components/EventContent';

export default async function Page() {
  const photos = await getEventGallery('talks-0', '/events/nullpointer-talks-0/thumbs', {
    featuredPhoto: 'IMG_7763.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-0/thumbs-small',
  });
  return <EventContent photos={photos} />;
}
