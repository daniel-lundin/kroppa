'use strict';

const jpg = require('jpeg-turbo');

function crop(buffer, x, y, cropWidth, cropHeight) {
  const decrompressedJpg = jpg.decompressSync(buffer, {
    format: jpg.FORMAT_RGB
  });

  const pixelSize = 3;
  const rowWidth = decrompressedJpg.width;
  const rawData = decrompressedJpg.data;

  const pixelRows = Array(cropHeight);
  for (let row = y; row < y + cropHeight; row++) {
    const startPosition = (row * rowWidth * pixelSize) + (x * pixelSize);
    const endPosition = startPosition + (cropWidth * pixelSize);
    pixelRows[row - y] = rawData.slice(startPosition, endPosition);
  }

  const cropData = Buffer.concat(pixelRows, cropWidth * pixelSize * cropHeight);

  const output = jpg.compressSync(cropData, {
    format: jpg.FORMAT_RGB,
    width: cropWidth,
    height: cropHeight,
    quality: 100
  });

  return output;
}

module.exports = {
  crop
};
