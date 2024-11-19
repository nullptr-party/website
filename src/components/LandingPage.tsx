import React, {FC} from 'react';

interface LandingPageProps {
  domain: string;
  telegramLink?: string;
}

const PixelLandingPage: FC<LandingPageProps> = ({domain, telegramLink}) => {
  return (
    <div className="min-h-screen bg-[#2E2E2E] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Grid - More subtle */}
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

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center relative z-10 space-y-4">
        {/* Offline Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 px-3 py-1 text-black text-sm pixel-perfect">
            OFFLINE
          </div>
        </div>

        {/* Domain Name */}
        <h1 className="text-4xl font-bold text-white tracking-wider pixel-perfect leading-relaxed">
          {domain.toUpperCase()}
        </h1>

        {/* Separator Line */}
        <div className="flex items-center justify-center my-8 space-x-2">
          <div className="w-2 h-2 bg-yellow-400" />
          <div className="h-px bg-yellow-400 w-96" />
          <div className="w-2 h-2 bg-yellow-400" />
        </div>

        {/* Loading Text */}
        <p className="text-yellow-400 text-xl opacity-80 animate-ping pixel-perfect">
          Loading next event...
        </p>

        {/* Telegram Button - Only if link exists */}
        {telegramLink && (
          <div className="mt-8">
            <a
              href={telegramLink}
              className="hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN TELEGRAM
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PixelLandingPage;
