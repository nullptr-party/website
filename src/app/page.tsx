// app/page.tsx
import LandingPage from '../components/LandingPage';

interface SiteConfig {
  domain: string;
  telegramLink?: string;
  cityLinks?: Array<{name: string; link: string}>;
}

const siteConfigs: Record<string, SiteConfig> = {
  'nullptr.party': {
    domain: 'nullptr.party',
    telegramLink: 'https://t.me/+1-aB-cGCv4pkMDAy',
    cityLinks: [
      {name: 'Almaty', link: 'https://t.me/+YgE_vglZYnkxMWVi'}
    ],
  },
  'almaty.nullptr.party': {
    domain: 'almaty.nullptr.party',
    telegramLink: 'https://t.me/almaty_nullptr_party',
  },
};

export default function Home() {
  const domain = process.env.SITE_DOMAIN as string;
  const config = siteConfigs[domain];

  return <LandingPage {...config} />;
}
