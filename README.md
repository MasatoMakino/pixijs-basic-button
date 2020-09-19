# pixijs-basic-button

> Interactive button library for pixi.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![Build Status](https://travis-ci.com/MasatoMakino/pixijs-basic-button.svg?branch=master)](https://travis-ci.com/MasatoMakino/pixijs-basic-button)
[![Maintainability](https://api.codeclimate.com/v1/badges/53987c65647c8bb04eba/maintainability)](https://codeclimate.com/github/MasatoMakino/pixijs-basic-button/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/53987c65647c8bb04eba/test_coverage)](https://codeclimate.com/github/MasatoMakino/pixijs-basic-button/test_coverage)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=pixijs-basic-button&show_owner=true)](https://github.com/MasatoMakino/pixijs-basic-button)

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
  normal: new PIXI.Sprite(Texture.from(bitmapURL)),
});
stage.addChild(button);
```

[API documents](https://masatomakino.github.io/pixijs-basic-button/api/)

## License

[MIT licensed](LICENSE).
