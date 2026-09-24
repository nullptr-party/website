import { getEventGallery } from '@/app/_lib/gallery';
import { TalksEventPage } from '@/app/events/_components/TalksEventPage';
import { event } from './_data';

export default async function Page() {
  const photos = await getEventGallery('talks-1', '/events/nullpointer-talks-1/thumbs', {
    featuredPhoto: 'it-001.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-1/thumbs-small',
  });
  return <TalksEventPage event={event} photos={photos} />;
}
