# kroppa

node module to crop jpeg files. Depends on jpeg-turbo which needs [yasm](http://yasm.tortall.net/) to be installed.


## Usage
Installation:

```
npm install kroppa
```

## Usage

### Single crop
```
const kroppa = require('kroppa');

const cropParameters = {
  x: 40,
  y: 40,
  width: 100,
  height: 200
};

const croppedImageData = kroppa.crop(imageBuffer, cropParameters);
```

### Multiple crops at once
```
const kroppa = require('kroppa');

const cropParameters = [
  { x: 40, y: 40, width: 100, height: 200 },
  { x: 80, y: 80, width: 200, height: 500 }
];

const croppedImageData = kroppa.crop(imageBuffer, cropParameters);
```

## LICENSE
MIT © Daniel Lundin 2016
