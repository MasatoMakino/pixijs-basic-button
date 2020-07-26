import { DisplayObject, Graphics } from "pixi.js";
import { ButtonLabelColorSet, ButtonMaterialSet } from "../src";

/**
 * テスト用の共通マテリアルを生成する
 */

export enum TestMaterialColor {
  normal,
  down,
  over,
  disable,
  selectNormal,
  selectDown,
  selectOver,
  selectMarker,
}

export function getTestMaterialSetNormalOnly() {
  const mat = new ButtonMaterialSet();
  mat.normal = getRect(TestMaterialColor.normal);
  return mat;
}

export function getTestMaterialSet() {
  const mat = getTestMaterialSetNormalOnly();
  mat.down = getRect(TestMaterialColor.down);
  mat.over = getRect(TestMaterialColor.over);
  mat.disable = getRect(TestMaterialColor.disable);

  mat.selectNormal = getRect(TestMaterialColor.selectNormal);
  mat.selectDown = getRect(TestMaterialColor.selectDown);
  mat.selectOver = getRect(TestMaterialColor.selectOver);

  mat.selectMarker = getRect(TestMaterialColor.selectMarker);

  return mat;
}

function getRect(color: number, alpha: number = 1.0): DisplayObject {
  const g = new Graphics();
  g.beginFill(color).drawRect(0, 0, 128, 32).endFill();
  g.alpha = alpha;
  return g;
}

export function getTestLabelColorSet() {
  const mat = new ButtonLabelColorSet();
  mat.down = TestMaterialColor.down;
  mat.over = TestMaterialColor.over;
  mat.disable = TestMaterialColor.disable;

  mat.selectNormal = TestMaterialColor.selectNormal;
  mat.selectDown = TestMaterialColor.selectDown;
  mat.selectOver = TestMaterialColor.selectOver;

  return mat;
}
