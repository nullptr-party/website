import RulesContent from './_components/RulesContent';
import { translations } from './_data/translations';

export default function RulesPage() {
  return <RulesContent content={translations.en} currentLang="en" />;
}
