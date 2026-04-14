import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/app/_lib/load-google-font';

export const dynamic = 'force-static';
export const alt = 'nullptr.party — developer community, Almaty';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const title = 'nullptr.party';
const subtitle = 'developer community, Almaty';

export default async function OgImage() {
  const fontData = await loadGoogleFont('Press Start 2P', title + subtitle);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#232323',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        {Array.from({ length: 32 }, (_, i) => (
          <div
            key={`h${i}`}
            style={{
              position: 'absolute',
              top: i * 20,
              left: 0,
              width: 1200,
              height: 1,
              background: '#353535',
              opacity: 0.6,
            }}
          />
        ))}
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={`v${i}`}
            style={{
              position: 'absolute',
              left: i * 20,
              top: 0,
              width: 1,
              height: 630,
              background: '#353535',
              opacity: 0.6,
            }}
          />
        ))}

        {/* Corner squares */}
        <div style={{ position: 'absolute', top: 32, left: 32, width: 16, height: 16, background: '#FFD700' }} />
        <div style={{ position: 'absolute', top: 32, right: 32, width: 16, height: 16, background: '#FFD700' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 32, width: 16, height: 16, background: '#FFD700' }} />
        <div style={{ position: 'absolute', bottom: 32, right: 32, width: 16, height: 16, background: '#FFD700' }} />

        {/* Border frame */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: '2px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
          }}
        />

        {/* Title */}
        <div
          style={{
            fontFamily: '"Press Start 2P"',
            fontSize: 48,
            color: '#FFFFF0',
            display: 'flex',
            marginBottom: 16,
          }}
        >
          nullptr<span style={{ color: '#FFD700' }}>.</span>party
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: '"Press Start 2P"',
            fontSize: 18,
            color: '#888',
            display: 'flex',
            letterSpacing: '0.1em',
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Press Start 2P',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
}
