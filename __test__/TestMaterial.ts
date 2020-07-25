import { DisplayObject, Graphics } from "pixi.js";
import { ButtonMaterialSet } from "../src";

/**
 * テスト用の共通マテリアルを生成する
 */

export enum TestMaterialAlpha {
  normal = 1.0,
  down = 0.91,
  over = 0.92,
  disable = 0.93,
  selectNormal = 0.8,
  selectDown = 0.81,
  selectOver = 0.82,
}
export function getTestMaterialSet() {
  const mat = new ButtonMaterialSet();

  mat.normal = getRect(0x00ff00, TestMaterialAlpha.normal);
  mat.down = getRect(0x00ff00, TestMaterialAlpha.down);
  mat.over = getRect(0x00ff00, TestMaterialAlpha.over);
  mat.disable = getRect(0x00ff00, TestMaterialAlpha.disable);

  mat.selectNormal = getRect(0x00ff00, TestMaterialAlpha.selectNormal);
  mat.selectDown = getRect(0x00ff00, TestMaterialAlpha.selectDown);
  mat.selectOver = getRect(0x00ff00, TestMaterialAlpha.selectOver);

  return mat;
}

function getRect(color: number, alpha: number): DisplayObject {
  const g = new Graphics();
  g.beginFill(color).drawRect(0, 0, 128, 32).endFill();
  g.alpha = alpha;
  return g;
}
