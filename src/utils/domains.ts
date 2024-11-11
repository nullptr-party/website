export interface DomainConfig {
  domain: string;
  telegramLink?: string;
}

export const getDomainConfig = (host: string): DomainConfig => {
  // Remove port if it exists
  const hostname = host.split(':')[0];

  switch (hostname) {
    case 'almaty.nullptr.party':
      return {
        domain: 'almaty.nullptr.party',
        telegramLink: 'https://t.me/+PBPAEVveNuc5YmEy'
      };
    case 'nullptr.party':
    default:
      return {
        domain: 'nullptr.party'
      };
  }
};
