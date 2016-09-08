# kroppa

node module to crop jpeg files. Depends on jpeg-turbo which needs [yasm](http://yasm.tortall.net/) to be installed.


## Usage
Installation:

```
npm install kroppa
```

## Usage

```
const kroppa = require('kroppa');

const croppedImageData = kropps.crop(imageBuffer, x, y, width, height);
```

## LICENSE
MIT © Daniel Lundin 2016
