import { getEventGallery } from '@/app/_lib/gallery';
import EventContent from './_components/EventContent';

export default async function Page() {
  const photos = await getEventGallery('talks-2', '/events/nullpointer-talks-2/thumbs', {
    featuredPhoto: 'DSCF4954.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-2/thumbs-small',
  });
  return <EventContent photos={photos} />;
}
