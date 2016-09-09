'use strict';

const jpg = require('jpeg-turbo');

function extractCrop(buffer, x, y, width, height) {
  const pixelSize = 3;
  const rowWidth = buffer.width;
  const rawData = buffer.data;

  const pixelRows = Array(height);
  for (let row = y; row < y + height; row++) {
    const startPosition = (row * rowWidth * pixelSize) + (x * pixelSize);
    const endPosition = startPosition + (width * pixelSize);
    pixelRows[row - y] = rawData.slice(startPosition, endPosition);
  }

  const cropData = Buffer.concat(pixelRows, width * pixelSize * height);
  return cropData;
}

function crop(buffer, cropData, quality = 100) {
  const cropList = Array.isArray(cropData) ? cropData : [cropData];

  const decrompressedJpg = jpg.decompressSync(buffer, {
    format: jpg.FORMAT_RGB
  });

  const results = cropList.map((data) => {
    const { x, y, width, height } = data;
    const extractedCrop = extractCrop(decrompressedJpg, x, y, width, height);
    return jpg.compressSync(extractedCrop, {
      format: jpg.FORMAT_RGB,
      width,
      height,
      quality
    });
  });
  return results.length === 1 ? results[0] : results;
}

module.exports = {
  crop
};
