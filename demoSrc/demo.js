import { BasicClickButton } from "../bin/index";
import { Application, Graphics } from "pixi.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 640, height: 480 });
  document.body.appendChild(app.view);

  const button = new BasicClickButton({
    normal: getRect(0xff00ff),
    over: getRect(0xff66ff),
    down: getRect(0xffffff)
  });

  app.stage.addChild(button);
};

const getRect = color => {
  const gra = new Graphics();
  gra
    .beginFill(color)
    .drawRect(0, 0, 32, 32)
    .endFill();
  return gra;
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
