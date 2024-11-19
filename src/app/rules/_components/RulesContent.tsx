// app/rules/_components/RulesContent.tsx
import { RuleTranslations } from '../_data/translations';
import Link from 'next/link';

interface RulesContentProps {
  content: RuleTranslations;
  currentLang: string;
}

const PixelRulesContent = ({ content, currentLang }: RulesContentProps) => {
  return (
    <div className="min-h-screen bg-[#2E2E2E] p-8 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          {/* Offline Badge */}
          <div className="bg-yellow-400 px-2 py-1 text-black text-sm font-[var(--font-press-start)] pixel-perfect">
            OFFLINE
          </div>

          {/* Language Switcher */}
          <div className="flex gap-2">
            <Link
              href="/rules"
              className={`px-3 py-1 font-[var(--font-press-start)] ${
                currentLang === 'en'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#3E3E3E] text-yellow-400'
              }`}
            >
              EN
            </Link>
            <Link
              href="/rules/ru"
              className={`px-3 py-1 font-[var(--font-press-start)] ${
                currentLang === 'ru'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-[#3E3E3E] text-yellow-400'
              }`}
            >
              RU
            </Link>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-[var(--font-press-start)] text-yellow-400 mb-8 leading-relaxed pixel-perfect">
          {content.title}
        </h1>

        {/* Separator */}
        <div className="flex items-center space-x-2 my-8">
          <div className="w-2 h-2 bg-yellow-400"/>
          <div className="h-px bg-yellow-400 flex-1"/>
          <div className="w-2 h-2 bg-yellow-400"/>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white">
          <p className="text-lg font-[var(--font-inter)] leading-relaxed">
            {content.intro}
          </p>

          <ol className="list-none space-y-6">
            {content.rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-yellow-400 font-[var(--font-press-start)] pixel-perfect shrink-0">
                  [{index + 1}]
                </span>
                <span className="font-[var(--font-inter)] leading-relaxed">{rule}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <h2 className="text-2xl text-yellow-400 mb-6 font-[var(--font-press-start)] pixel-perfect">
              {content.prohibited.title}
            </h2>
            <ul className="list-none space-y-6">
              {content.prohibited.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-yellow-400 font-[var(--font-press-start)] pixel-perfect shrink-0">
                    [!]
                  </span>
                  <span className="font-[var(--font-inter)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <p className="text-lg italic text-yellow-400 font-[var(--font-inter)] leading-relaxed">
              {content.conclusion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelRulesContent;
