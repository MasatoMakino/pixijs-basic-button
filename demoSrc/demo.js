import {
  BasicClickButton,
  BasicCheckButton,
  BasicButtonEventType
} from "../bin/index";
import { Application, Graphics } from "pixi.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 640, height: 480 });
  document.body.appendChild(app.view);

  const addLabel = btn => {
    btn.addLabel(
      0,
      0,
      "Abcdefghijklあ",
      { fontSize: 16 },
      {
        normal: 0xffffff,
        over: 0xff00ff,
        down: 0x000000,
        selectNormal: 0xffff33,
        selectOver: 0x00ff00,
        selectDown: 0x999999
      }
    );
  };
  const button = new BasicClickButton({
    normal: getRect(0xff00ff),
    over: getRect(0xff66ff),
    down: getRect(0xffffff)
  });
  button.x = button.y = 36;
  addLabel(button);

  const buttonSelect = new BasicCheckButton({
    normal: getRect(0xff00ff),
    over: getRect(0xff66ff),
    down: getRect(0xffffff),
    selectNormal: getRect(0x330033),
    selectOver: getRect(0x442244),
    selectDown: getRect(0x333333)
  });
  buttonSelect.y = 36;
  buttonSelect.x = 36 + 128 + 36;
  addLabel(buttonSelect);
  buttonSelect.buttonValue = "__button__val__test";

  app.stage.addChild(button);
  app.stage.addChild(buttonSelect);

  buttonSelect.on(BasicButtonEventType.SELECTED, e => {
    console.log(e);
  });
};

const getRect = color => {
  const gra = new Graphics();
  gra
    .beginFill(color)
    .drawRect(0, 0, 128, 32)
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
