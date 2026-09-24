import { getEventGallery } from '@/app/_lib/gallery';
import { TalksEventPage } from '@/app/events/_components/TalksEventPage';
import { event } from './_data';

export default async function Page() {
  const photos = await getEventGallery('talks-0', '/events/nullpointer-talks-0/thumbs', {
    featuredPhoto: 'IMG_7763.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-0/thumbs-small',
  });
  return <TalksEventPage event={event} photos={photos} />;
}
