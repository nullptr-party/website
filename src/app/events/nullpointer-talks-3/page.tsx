import { getEventGallery } from '@/app/_lib/gallery';
import { TalksEventPage } from '@/app/events/_components/TalksEventPage';
import { event } from './_data';

export const metadata = { title: `nullptr.talks[${event.number}] — ${event.dateLabel}`, description: event.intro };

export default async function Page() {
  const photos = await getEventGallery('talks-3', '/events/nullpointer-talks-3/thumbs', {
    featuredPhoto: 'it-080.jpg',
    smallThumbBaseUrl: '/events/nullpointer-talks-3/thumbs-small',
  });
  return <TalksEventPage event={event} photos={photos} />;
}
