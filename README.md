# pixijs-basic-button

Interactive button library for pixi.js

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/53987c65647c8bb04eba/maintainability)](https://codeclimate.com/github/MasatoMakino/pixijs-basic-button/maintainability)

[Github repository](https://github.com/MasatoMakino/pixijs-basic-button)

## Demo

[Demo Page](https://masatomakino.github.io/pixijs-basic-button/demo/)

## Getting Started

### Install

pixijs-basic-button depend on [pixi.js](https://github.com/pixijs/pixi.js)

```bash
npm install pixi.js --save-dev
```

and

```bash
npm install https://github.com/MasatoMakino/pixijs-basic-button.git --save-dev
```

### Import

pixijs-basic-button is composed of ES6 modules and TypeScript d.ts files.

At first, import classes.

```js
import { BasicClickButton } from "pixijs-basic-button";
```

### Add to stage

```js
const button = new BasicClickButton({
  normal: new PIXI.Sprite(Texture.from(bitmapURL))
});
stage.addChild(button);
```

[API documents](https://masatomakino.github.io/pixijs-basic-button/api/)

## License

pixijs-basic-button is [MIT licensed](LICENSE).
