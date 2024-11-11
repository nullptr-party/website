// components/LandingPage.tsx
import {FC} from 'react';

interface LandingPageProps {
  domain: string;
  telegramLink?: string;
}

export const LandingPage: FC<LandingPageProps> = ({domain, telegramLink}) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {domain}
          </h1>

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8"/>

          <p className="text-gray-400 text-lg md:text-xl animate-pulse">
            Something is emerging from the void...
          </p>


          {telegramLink && (
            <div className="mt-8 animate-bounce">
              <a
                href={telegramLink}
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our Telegram
              </a>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} nullptr.party
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
