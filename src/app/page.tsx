// app/page.tsx
import LandingPage from '../components/LandingPage';

interface CityTelegramLink {
  cityName: string;
  link: string;
}

interface SiteConfig {
  domain: string;
  telegramLink?: string;
  cityTelegramLinks?: CityTelegramLink[];
}

const siteConfigs: Record<string, SiteConfig> = {
  'nullptr.party': {
    domain: 'nullptr.party',
    cityTelegramLinks: [
      { cityName: 'Almaty', link: 'https://t.me/almaty_nullptr_party' },
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
