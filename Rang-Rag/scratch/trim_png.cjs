const fs = require('fs');
const zlib = require('zlib');

function trimPNG(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath);
  let pos = 8;
  let width, height, bitDepth, colorType;
  const idatChunks = [];

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      width = buf.readUInt32BE(pos + 8);
      height = buf.readUInt32BE(pos + 12);
      bitDepth = buf.readUInt8(pos + 16);
      colorType = buf.readUInt8(pos + 17);
    } else if (type === 'IDAT') {
      idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
    } else if (type === 'IEND') {
      break;
    }
    pos += 12 + len;
  }

  const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
  const bpp = 4; // RGBA 8-bit
  const stride = width * bpp;
  const raw = Buffer.alloc(width * height * bpp);

  let srcPos = 0;
  let dstPos = 0;

  function paeth(a, b, c) {
    const p = a + b - c;
    const pa = Math.abs(p - a);
    const pb = Math.abs(p - b);
    const pc = Math.abs(p - c);
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
  }

  for (let y = 0; y < height; y++) {
    const filter = decompressed[srcPos++];
    const prevRow = y > 0 ? dstPos - stride : null;

    for (let x = 0; x < stride; x++) {
      const b = prevRow !== null ? raw[prevRow + x] : 0;
      const a = x >= bpp ? raw[dstPos - bpp] : 0;
      const c = (prevRow !== null && x >= bpp) ? raw[prevRow + x - bpp] : 0;
      const val = decompressed[srcPos++];

      let recon = 0;
      if (filter === 0) recon = val;
      else if (filter === 1) recon = (val + a) & 0xff;
      else if (filter === 2) recon = (val + b) & 0xff;
      else if (filter === 3) recon = (val + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) recon = (val + paeth(a, b, c)) & 0xff;

      raw[dstPos++] = recon;
    }
  }

  // Find bounding box of non-transparent pixels (alpha > 10)
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = raw[(y * width + x) * 4 + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log({ minX, maxX, minY, maxY, origW: width, origH: height });
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log('Crop size:', cropW, 'x', cropH);

  // Add small padding (e.g. 20px)
  const pad = 20;
  const newW = cropW + pad * 2;
  const newH = cropH + pad * 2;

  // Build new PNG
  const newStride = newW * 4;
  const scanlines = Buffer.alloc(newH * (1 + newStride));
  let scanPos = 0;

  for (let y = 0; y < newH; y++) {
    scanlines[scanPos++] = 0; // Filter None
    const origY = minY - pad + y;
    for (let x = 0; x < newW; x++) {
      const origX = minX - pad + x;
      if (origY >= 0 && origY < height && origX >= 0 && origX < width) {
        const p = (origY * width + origX) * 4;
        scanlines[scanPos++] = raw[p];
        scanlines[scanPos++] = raw[p + 1];
        scanlines[scanPos++] = raw[p + 2];
        scanlines[scanPos++] = raw[p + 3];
      } else {
        scanlines[scanPos++] = 0;
        scanlines[scanPos++] = 0;
        scanlines[scanPos++] = 0;
        scanlines[scanPos++] = 0;
      }
    }
  }

  const deflated = zlib.deflateSync(scanlines);

  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  function calcCRC(buf, start, len) {
    let c = 0xffffffff;
    for (let i = start; i < start + len; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const chunk = Buffer.alloc(12 + data.length);
    chunk.writeUInt32BE(data.length, 0);
    chunk.write(type, 4, 4, 'ascii');
    data.copy(chunk, 8);
    const crc = calcCRC(chunk, 4, 4 + data.length);
    chunk.writeUInt32BE(crc, 8 + data.length);
    return chunk;
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(newW, 0);
  ihdr.writeUInt32BE(newH, 4);
  ihdr.writeUInt8(8, 8); // bit depth
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const finalBuf = Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(outputPath, finalBuf);
  console.log('Saved cropped logo to:', outputPath);
}

trimPNG('c:/Rangrag-final/raj-web/Rang-Rag/public/img/logo.png', 'c:/Rangrag-final/raj-web/Rang-Rag/public/img/logo-clean.png');
