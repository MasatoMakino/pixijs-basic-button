# pixijs-basic-button

> Interactive button library for pixi.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@masatomakino/pixijs-basic-button.svg?style=flat)](https://www.npmjs.com/package/@masatomakino/pixijs-basic-button)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github&style=flat)](https://github.com/MasatoMakino/pixijs-basic-button)
[![CI](https://github.com/MasatoMakino/pixijs-basic-button/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/pixijs-basic-button/actions/workflows/ci_main.yml)

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
import { Assets, Sprite } from "pixi.js";

await Assets.load(bitmapURL);
const button = new BasicClickButton({
  normal: Sprite.from(bitmapURL),
});
stage.addChild(button);
```

[API documents](https://masatomakino.github.io/pixijs-basic-button/api/)

## License

[MIT licensed](LICENSE).
