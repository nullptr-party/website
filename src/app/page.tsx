// app/page.tsx
import LandingPage from '../components/LandingPage';

interface SiteConfig {
  domain: string;
  telegramLink?: string;
}

const siteConfigs: Record<string, SiteConfig> = {
  'nullptr.party': {
    domain: 'nullptr.party',
  },
  'almaty.nullptr.party': {
    domain: 'almaty.nullptr.party',
    telegramLink: 'https://t.me/+PBPAEVveNuc5YmEy',
  },
};

export default function Home() {
  const domain = process.env.SITE_DOMAIN as string;
  const config = siteConfigs[domain];

  return <LandingPage {...config} />;
}
