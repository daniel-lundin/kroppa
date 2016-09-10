'use strict';

const cropper = require('./index.js');
const fs = require('fs');

fs.readFile('./bild.jpg', (readErr, data) => {
  const cropData = [
    {
      x: 10,
      y: 10,
      width: 500,
      height: 500
    },
    {
      x: 100,
      y: 100,
      width: 1000,
      height: 1000
    },
    {
      x: 400,
      y: 400,
      width: 1000,
      height: 1000
    },
    {
      x: 800,
      y: 800,
      width: 1000,
      height: 1200
    }
  ];
  const crops = cropper.crop(data, cropData);
  crops.map((crop, index) => {
    fs.writeFile(`./output${index}.jpg`, crop, (writeErr) => {
      console.log('image saved, err: ', writeErr);
    });
  });
});

fs.readFile('./bild.jpg', (readErr, data) => {
  const cropData = {
    x: 10,
    y: 10,
    width: 500,
    height: 500
  }

  const crop = cropper.crop(data, cropData);
  fs.writeFile(`./output-single.jpg`, crop, (writeErr) => {
    console.log('image saved, err: ', writeErr);
  });
});

