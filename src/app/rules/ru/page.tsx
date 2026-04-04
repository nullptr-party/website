import RulesContent from '@/app/rules/_components/RulesContent';
import { translations } from '@/app/rules/_data/translations';

export default function RulesRuPage() {
  return <RulesContent content={translations.ru} currentLang="ru" />;
}
