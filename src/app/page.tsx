// app/page.tsx
import {headers} from 'next/headers';
import LandingPage from '../components/LandingPage';
import {getDomainConfig} from '@/utils/domains';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || 'nullptr.party';
  const config = getDomainConfig(host);

  return <LandingPage {...config} />;
}
