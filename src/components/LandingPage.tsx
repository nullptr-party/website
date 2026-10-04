import React, { FC } from "react";
import Link from "next/link";
import EventTimeline from "./EventTimeline";
import { TalksQuickNav } from "./TalksQuickNav";

interface LandingPageProps {
  domain: string;
  telegramChannelLink?: string;
  cityLinks?: Array<{ name: string; link: string }>;
}

const LandingPage: FC<LandingPageProps> = ({ domain, telegramChannelLink, cityLinks }) => {
  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center px-3 sm:px-8 py-6 sm:py-10 relative overflow-hidden">
      {/* Pixel grid background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15 sm:opacity-10 bg-[linear-gradient(to_right,#353535_1px,transparent_1px),linear-gradient(to_bottom,#353535_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px]" />

      {/* Hero section */}
      <header className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center mb-8 sm:mb-14">
        {/* Title */}
        <div className="w-full flex justify-center mb-3 sm:mb-5">
          <h1
            className="
              font-pixel
              text-white
              uppercase
              tracking-wide
              leading-none
              text-base xs:text-lg sm:text-2xl md:text-4xl
              text-center
            "
          >
            {domain}
          </h1>
        </div>

        {/* Pixel-art divider */}
        <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-yellow-400 block rounded-sm mr-2" />
          <span className="flex-1 h-1 bg-yellow-400 block" />
          <span className="w-2 h-2 bg-yellow-400 block rounded-sm ml-2" />
        </div>

        {/* Buttons row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-xl">
          {/* Telegram channel button */}
          {telegramChannelLink && (
            <a
              href={telegramChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-body font-semibold
                text-sm sm:text-base
                bg-yellow-400
                text-black
                px-4 xs:px-6 sm:px-8
                py-2.5 xs:py-3 sm:py-3.5
                border-4
                border-yellow-300
                shadow-[4px_4px_0_#111]
                transition-colors motion-reduce:transition-none
                hover:bg-yellow-300
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400
                active:bg-yellow-500
                w-full
                sm:flex-1
                text-center
              "
            >
              Канал Telegram
            </a>
          )}

          {/* City chats */}
          {cityLinks && cityLinks.map((city) => (
            <a
              key={city.name}
              href={city.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-body font-semibold
                text-sm sm:text-base
                bg-transparent
                text-white
                px-4 xs:px-6 sm:px-8
                py-2.5 xs:py-3 sm:py-3.5
                border-4
                border-gray-400
                shadow-[4px_4px_0_#1a1a1a]
                transition-colors motion-reduce:transition-none
                hover:bg-gray-700
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400
                w-full
                sm:flex-1
                text-center
              "
            >
              Чат {city.name.toLowerCase() === "almaty" ? "Алматы" : city.name}
            </a>
          ))}
        </div>
        <Link
          href="/rules/ru"
          className="mt-4 inline-flex min-h-11 items-center font-body text-sm text-[#bbb] underline underline-offset-4 hover:text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          Правила сообщества
        </Link>
      </header>

      {/* Quick-access to nullptr.talks events */}
      <TalksQuickNav />

      {/* Events timeline */}
      <main className="relative z-10 w-full">
        <EventTimeline />
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-2xl mx-auto mt-12 sm:mt-16 pt-4 border-t border-[#303030]">
        <div className="font-body text-xs text-[#999] text-center">
          nullptr.party — developer community, Almaty
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
