import { ImageResponse } from 'next/og';
import { iconElement } from '@/app/_lib/icon-element';

export const dynamic = 'force-static';

const sizes = [16, 32, 48];

async function renderPng(s: number): Promise<Buffer> {
  const res = new ImageResponse(iconElement(s), { width: s, height: s });
  return Buffer.from(await res.arrayBuffer());
}

function packIco(images: Buffer[], sizes: number[]): Buffer {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);             // reserved
  header.writeUInt16LE(1, 2);             // type = ICO
  header.writeUInt16LE(images.length, 4); // image count

  // Directory entries: 16 bytes each
  let dataOffset = 6 + images.length * 16;
  const dirs: Buffer[] = [];
  for (let i = 0; i < images.length; i++) {
    const dir = Buffer.alloc(16);
    const s = sizes[i];
    dir.writeUInt8(s < 256 ? s : 0, 0);     // width
    dir.writeUInt8(s < 256 ? s : 0, 1);     // height
    dir.writeUInt8(0, 2);                    // color palette
    dir.writeUInt8(0, 3);                    // reserved
    dir.writeUInt16LE(1, 4);                // color planes
    dir.writeUInt16LE(32, 6);               // bits per pixel
    dir.writeUInt32LE(images[i].length, 8); // image data size
    dir.writeUInt32LE(dataOffset, 12);      // data offset
    dataOffset += images[i].length;
    dirs.push(dir);
  }

  return Buffer.concat([header, ...dirs, ...images]);
}

export async function GET() {
  const images = await Promise.all(sizes.map(renderPng));
  const ico = packIco(images, sizes);

  return new Response(ico, {
    headers: { 'Content-Type': 'image/x-icon' },
  });
}
