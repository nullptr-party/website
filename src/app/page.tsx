// app/page.tsx
import LandingPage from '../components/LandingPage';

const config = {
  domain: 'nullptr.party',
  telegramChannelLink: 'https://t.me/+1-aB-cGCv4pkMDAy',
  cityLinks: [
    {name: 'Almaty', link: 'https://t.me/+YgE_vglZYnkxMWVi'}
  ],
};

export default function Home() {
  return <LandingPage {...config} />;
}
