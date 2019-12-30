import {
  BasicRadioButton,
  BasicClickButton,
  BasicCheckButton,
  BasicButtonEventType,
  BasicRadioButtonManager
} from "../bin/index";
import { Application, Graphics } from "pixi.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 800, height: 600 });
  document.body.appendChild(app.view);

  initButton(app.stage);
  initCheckButton(app.stage);
  initRadioButton(app.stage);
  initRadioMarkerButton(app.stage);
};

const initButton = stage => {
  const button = new BasicClickButton(getMaterialSet());
  button.x = button.y = 36;
  const index = addLabel(button);
  button.setLabel(index, "Abcあ");
  stage.addChild(button);
};

const initCheckButton = stage => {
  const buttonSelect = new BasicCheckButton(getMaterialSet());
  buttonSelect.y = 36;
  buttonSelect.x = 36 + 128 + 36;
  addLabel(buttonSelect);
  buttonSelect.buttonValue = "__button__val__test";

  stage.addChild(buttonSelect);

  buttonSelect.on(BasicButtonEventType.SELECTED, e => {
    console.log(e);
  });
};

const initRadioButton = stage => {
  const manager = new BasicRadioButtonManager();

  const n = 4;
  for (let i = 0; i < n; i++) {
    const buttonRadio = new BasicRadioButton(getMaterialSet());
    buttonRadio.y = 128;
    buttonRadio.x = 36 + (128 + 36) * i;
    addLabel(buttonRadio);
    buttonRadio.buttonValue = "__button__val__test__" + i;
    stage.addChild(buttonRadio);
    manager.add(buttonRadio);
  }

  manager.selected = manager.buttons[0];
  manager.on(BasicButtonEventType.SELECTED, e => {
    console.log(e);
  });
};

const initRadioMarkerButton = stage => {
  const manager = new BasicRadioButtonManager();

  const n = 4;
  for (let i = 0; i < n; i++) {
    const buttonRadio = new BasicRadioButton(getMaterialSet(true));
    buttonRadio.y = 196;
    buttonRadio.x = 36 + (128 + 36) * i;
    addLabel(buttonRadio);
    buttonRadio.buttonValue = "__button__val__test__" + i;
    stage.addChild(buttonRadio);
    manager.add(buttonRadio);
  }

  manager.selected = manager.buttons[0];
  manager.on(BasicButtonEventType.SELECTED, e => {
    console.log(e);
  });
};

const getMaterialSet = (hasMarker = false) => {
  const mat = {
    normal: getRect(0xff00ff),
    over: getRect(0xff66ff),
    down: getRect(0xffffff),
    selectNormal: getRect(0x330033),
    selectOver: getRect(0x442244),
    selectDown: getRect(0x333333)
  };
  if (hasMarker) {
    console.log(hasMarker);
    mat.selectMarker = getMarker();
  }
  return mat;
};

const getRect = color => {
  const gra = new Graphics();
  gra
    .beginFill(color)
    .drawRect(0, 0, 128, 32)
    .endFill();
  return gra;
};

const addLabel = btn => {
  return btn.addLabel(
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

const getMarker = () => {
  const g = new Graphics();
  g.beginFill(0xff0000)
    .drawCircle(0, 0, 8)
    .endFill();
  return g;
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
