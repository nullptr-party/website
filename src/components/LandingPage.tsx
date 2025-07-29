import React, { FC } from "react";

interface LandingPageProps {
  domain: string;
  telegramLink?: string;
  cityLinks?: Array<{ name: string; link: string }>;
}

const LandingPage: FC<LandingPageProps> = ({ domain, telegramLink, cityLinks }) => {
  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center justify-center px-3 sm:px-8 py-4 relative overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15 sm:opacity-10 bg-[linear-gradient(to_right,#353535_1px,transparent_1px),linear-gradient(to_bottom,#353535_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px]" />

      {/* Title: centered, just slightly wider than content, scrollable if needed */}
      <div className="w-full flex justify-center mb-2 sm:mb-6">
        <div className="max-w-lg sm:max-w-xl w-full px-2 sm:px-4 overflow-x-auto">
          <h1
            className="
              font-pixel
              text-white
              uppercase
              tracking-wide
              leading-none
              whitespace-nowrap
              text-base xs:text-lg sm:text-2xl md:text-4xl
              text-center
              sm:scrollbar-hide
            "
            tabIndex={0}
          >
            {domain}
          </h1>
        </div>
      </div>

      {/* Main content container (narrow, centered) */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-8">
        {/* Pixel-art divider */}
        <div className="flex items-center justify-center w-full mb-2 sm:mb-6">
          <span className="w-2 h-2 bg-yellow-400 block rounded-sm mr-2" />
          <span className="flex-1 h-1 bg-yellow-400 block" />
          <span className="w-2 h-2 bg-yellow-400 block rounded-sm ml-2" />
        </div>

        {/* Telegram channel button */}
        {telegramLink && (
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-pixel
              text-base xs:text-lg sm:text-xl
              uppercase
              bg-yellow-400
              text-black
              px-4 xs:px-8 sm:px-12
              py-3 xs:py-4 sm:py-5
              border-4
              border-yellow-300
              shadow-[4px_4px_0_#111]
              transition
              hover:scale-105
              hover:shadow-[0_0_0_4px_#ffe066,0_0_12px_2px_#ffe066aa]
              active:bg-yellow-500
              w-full
              max-w-xs
              sm:max-w-none
            "
          >
            Telegram Channel
          </a>
        )}

        {/* City chats section */}
        {cityLinks && cityLinks.length > 0 && (
          <div className="w-full">
            <div className="mb-2 sm:mb-4 font-pixel text-yellow-400 text-xs uppercase tracking-widest">
              City Chats
            </div>
            <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center">
              {cityLinks.map((city) => (
                <a
                  key={city.name}
                  href={city.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-pixel
                    text-xs xs:text-sm sm:text-base
                    uppercase
                    bg-transparent
                    text-white
                    px-4 xs:px-5 sm:px-8
                    py-2 xs:py-2.5 sm:py-3
                    border-4
                    border-gray-400
                    shadow-[4px_4px_0_#1a1a1a]
                    transition
                    hover:bg-gray-700
                    w-full
                    xs:w-auto
                    text-center
                  "
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
