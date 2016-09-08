'use strict';

const cropper = require('./index.js');
const fs = require('fs');

fs.readFile('./bild.jpg', (readErr, data) => {
  cropper.jpegInfo(data);
  const crop = cropper.crop(data, 10, 10, 1000, 1000);

  fs.writeFile('./output.jpg', crop, (writeErr) => {
    console.log('image saved, err: ', writeErr);
  });
});

