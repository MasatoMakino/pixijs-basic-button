import { BasicButtonState } from "./BasicButtonState";
import { PixiJSCacheUtil } from "pixijs-cache-util";
class ButtonOptionSet {
  /**
   * stateに対応するオプション値を取り出す
   * @param set
   * @param state
   */
  static getMaterial(set, state) {
    var _a, _b, _c, _d, _e, _f;
    switch (state) {
      case BasicButtonState.DISABLE:
        return (
          (_a = set.disable), _a !== null && _a !== void 0 ? _a : set.normal
        );
      case BasicButtonState.NORMAL_OVER:
        return (_b = set.over), _b !== null && _b !== void 0 ? _b : set.normal;
      case BasicButtonState.NORMAL_DOWN:
        return (_c = set.down), _c !== null && _c !== void 0 ? _c : set.normal;
      case BasicButtonState.SELECT:
        return (
          (_d = set.selectNormal),
          _d !== null && _d !== void 0 ? _d : set.normal
        );
      case BasicButtonState.SELECT_OVER:
        return (
          (_e = set.selectOver), _e !== null && _e !== void 0 ? _e : set.normal
        );
      case BasicButtonState.SELECT_DOWN:
        return (
          (_f = set.selectDown), _f !== null && _f !== void 0 ? _f : set.normal
        );
      default:
        return set.normal;
    }
  }
}
/**
 * ボタンの状態に応じて表示されるDisplayObjectを格納するクラス。
 */
export class ButtonMaterialSet extends ButtonOptionSet {
  /**
   * ボタン上に状態パーツを配置する
   * @param {BasicClickButton} button
   * @param {ButtonMaterialSet} material
   */
  static addChild(button, material) {
    this.remove(material);
    const materials = this.getMaterialArray(material);
    for (let mat of materials) {
      if (mat != null) button.addChild(mat);
    }
  }
  /**
   * この状態セットに含まれるパーツを表示ツリー上から削除する。
   * @param {ButtonMaterialSet} material
   */
  static remove(material) {
    const materials = this.getMaterialArray(material);
    for (let mat of materials) {
      if (mat && mat.parent) mat.parent.removeChild(mat);
    }
  }
  /**
   * 全ての表示パーツを配列として取得する。
   * @param {ButtonMaterialSet} materials
   * @returns {createjs.DisplayObject[]}
   */
  static getMaterialArray(materials) {
    return [
      materials.normal,
      materials.over,
      materials.down,
      materials.disable,
      materials.selectNormal,
      materials.selectOver,
      materials.selectDown,
      materials.selectMarker
    ];
  }
  /**
   * 可視状態をstateに合わせて更新する
   * @param {ButtonMaterialSet} material
   * @param {BasicButtonState} state
   */
  static updateVisible(material, state) {
    this.invisibleAll(material);
    this.getMaterial(material, state).visible = true;
    if (material.selectMarker) {
      const isSelect =
        state === BasicButtonState.SELECT ||
        state === BasicButtonState.SELECT_OVER ||
        state === BasicButtonState.SELECT_DOWN;
      material.selectMarker.visible = isSelect;
    }
  }
  /**
   * 全てのパーツを不可視にする。
   * @param {ButtonMaterialSet} material
   */
  static invisibleAll(material) {
    const materials = this.getMaterialArray(material);
    for (let mat of materials) {
      if (mat != null) mat.visible = false;
    }
  }
}
/**
 * テキストラベルの色についてのオプション。
 * 各ボタンのaddLabel関数でインスタンスに渡す。
 */
export class ButtonLabelColorSet extends ButtonOptionSet {
  /**
   * ラベル文字色をボタン状態に応じて更新する。
   * @param {Text} field 更新対象ラベル
   * @param {ButtonLabelColorSet} colors 状態文字色セット
   * @param {BasicButtonState} state ボタン状態
   */
  static update(field, colors, state) {
    if (field == null) return;
    PixiJSCacheUtil.updateText({
      target: field,
      style: { fill: this.getMaterial(colors, state) }
    });
  }
}
