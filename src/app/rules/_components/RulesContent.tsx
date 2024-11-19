// app/rules/_components/RulesContent.tsx
import { RuleTranslations } from '../_data/translations';
import Link from 'next/link';

interface RulesContentProps {
  content: RuleTranslations;
  currentLang: string;
}

const PixelRulesContent = ({ content, currentLang }: RulesContentProps) => {
  return (
    <div className="min-h-screen bg-[#2E2E2E] p-8 font-mono relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 w-full h-full opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(75, 75, 75) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(75, 75, 75) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          {/* Offline Badge */}
          <div className="bg-yellow-400 px-2 py-0.5 text-black text-sm">
            OFFLINE
          </div>

          {/* Language Switcher */}
          <div className="flex gap-2">
            <Link
              href="/rules"
              className={`px-3 py-1 ${
                currentLang === 'en'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#3E3E3E] text-yellow-400 hover:bg-[#4E4E4E]'
              }`}
            >
              EN
            </Link>
            <Link
              href="/rules/ru"
              className={`px-3 py-1 ${
                currentLang === 'ru'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#3E3E3E] text-yellow-400 hover:bg-[#4E4E4E]'
              }`}
            >
              RU
            </Link>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-400 tracking-wider mb-8">
          {content.title.toUpperCase()}
        </h1>

        {/* Separator */}
        <div className="flex items-center justify-start space-x-2 my-8">
          <div className="w-2 h-2 bg-yellow-400"/>
          <div className="h-px bg-yellow-400 w-full"/>
          <div className="w-2 h-2 bg-yellow-400"/>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white">
          <p className="text-lg">{content.intro}</p>

          <ol className="list-none space-y-4">
            {content.rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-400 mr-4">{`[${index + 1}]`}</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <h2 className="text-2xl text-yellow-400 mb-6">
              {content.prohibited.title}
            </h2>
            <ul className="list-none space-y-4">
              {content.prohibited.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-4">[!]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="text-lg italic text-yellow-400">
              {content.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelRulesContent;
