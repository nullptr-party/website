// app/rules/_components/RulesContent.tsx
import { RuleTranslations } from '../_data/translations';
import Link from 'next/link';

interface RulesContentProps {
  content: RuleTranslations;
  currentLang: string;
}

export default function RulesContent({ content, currentLang }: RulesContentProps) {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {content.title}
          </h1>

          <div className="flex gap-2">
            <Link
              href="/rules"
              className={`px-3 py-1 rounded ${
                currentLang === 'en'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              EN
            </Link>
            <Link
              href="/rules/ru"
              className={`px-3 py-1 rounded ${
                currentLang === 'ru'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              RU
            </Link>
          </div>
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">{content.intro}</p>

          <ol className="list-decimal list-inside space-y-2 pl-4">
            {content.rules.map((rule, index) => (
              <li key={index} className="text-gray-300">
                {rule}
              </li>
            ))}
          </ol>

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              {content.prohibited.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              {content.prohibited.items.map((item, index) => (
                <li key={index} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg italic">
            {content.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
}
