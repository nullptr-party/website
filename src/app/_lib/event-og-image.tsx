import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const ogSize = { width: 1200, height: 630 };

export async function generateEventOgImage(posterPath: string) {
  const data = await readFile(join(process.cwd(), 'public', posterPath));
  const base64 = data.toString('base64');
  const src = `data:image/jpeg;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#232323',
        }}
      >
        {/* Full poster scaled to fit height */}
        <img
          src={src}
          width={630}
          height={630}
        />
      </div>
    ),
    { ...ogSize },
  );
}
