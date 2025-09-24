# pixijs-basic-button

> Interactive button library for pixi.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![CI](https://github.com/MasatoMakino/pixijs-basic-button/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/pixijs-basic-button/actions/workflows/ci_main.yml)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=pixijs-basic-button)](https://github.com/MasatoMakino/pixijs-basic-button)

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
npm install @masatomakino/pixijs-basic-button.git --save-dev
```

### Import

pixijs-basic-button is composed of ES6 modules and TypeScript d.ts files.

At first, import classes.

```js
import { BasicClickButton } from "@masatomakino/pixijs-basic-button";
```

### Add to stage

```js
import { Assets, Sprite } form "pixi.js"

await Assets.load(bitmapURL);
const button = new BasicClickButton({
  normal: Sprite.form(bitmapURL),
});
stage.addChild(button);
```

[API documents](https://masatomakino.github.io/pixijs-basic-button/api/)

## License

[MIT licensed](LICENSE).
