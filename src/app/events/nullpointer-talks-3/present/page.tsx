'use client';

import { Presentation, talks3Partners } from '../../nullpointer-talks-2/present/page';

export default function PresentPage() {
  return <Presentation partners={talks3Partners} eventIndex={3} feedbackUrl="https://forms.gle/5GJCvS7DjJEGHkck8" />;
}
