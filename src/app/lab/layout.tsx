import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'nullptr.party — design lab', robots: { index: false, follow: false } };

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
