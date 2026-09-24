import { notFound } from 'next/navigation';
import { PdfSlidesViewer } from '../../_components/PdfSlidesViewer';
import { decks, slideImage } from '../../_decks';
import type { DeckId } from '../../_decks';

export function generateStaticParams() {
  return Object.keys(decks).map(deck => ({ deck }));
}

export default async function Page({ params }: { params: Promise<{ deck: string }> }) {
  const { deck } = await params;
  if (!(deck in decks)) notFound();
  const id = deck as DeckId;
  return (
    <>
      <link rel="preload" as="image" href={slideImage(id, 1)} />
      <PdfSlidesViewer id={id} />
    </>
  );
}
