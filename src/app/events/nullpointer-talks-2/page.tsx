import { getEventGallery } from '@/app/_lib/gallery';
import { TalksEventPage } from '@/app/events/_components/TalksEventPage';
import { event } from './_data';

export default async function Page() {
  const photos = await getEventGallery('talks-2', '/events/nullpointer-talks-2/thumbs', {
    featuredPhoto: 'DSCF4954.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-2/thumbs-small',
  });
  return <TalksEventPage event={event} photos={photos} />;
}
