import { BasicButtonState } from "./BasicButtonState";
import { BasicClickButton } from "./BasicClickButton";
import { DisplayObject, Text } from "pixi.js";

class ButtonOptionSet<T> {
  normal!: T;
  over?: T;
  down?: T;
  disable?: T;
  selectNormal?: T;
  selectOver?: T;
  selectDown?: T;

  /**
   * stateに対応するオプション値を取り出す
   * @param set
   * @param state
   */
  public static getMaterial<T>(
    set: ButtonOptionSet<T>,
    state: BasicButtonState
  ): T {
    switch (state) {
      case BasicButtonState.DISABLE:
        return set.disable ?? set.normal;
      case BasicButtonState.NORMAL_OVER:
        return set.over ?? set.normal;
      case BasicButtonState.NORMAL_DOWN:
        return set.down ?? set.normal;
      case BasicButtonState.SELECT:
        return set.selectNormal ?? set.normal;
      case BasicButtonState.SELECT_OVER:
        return set.selectOver ?? set.normal;
      case BasicButtonState.SELECT_DOWN:
        return set.selectDown ?? set.normal;
      default:
        return set.normal;
    }
  }
}

/**
 * ボタンの状態に応じて表示されるDisplayObjectを格納するクラス。
 */
export class ButtonMaterialSet extends ButtonOptionSet<DisplayObject> {
  selectMarker?: DisplayObject;

  /**
   * ボタン上に状態パーツを配置する
   * @param {BasicClickButton} button
   * @param {ButtonMaterialSet} material
   */
  public static addChild(
    button: BasicClickButton,
    material: ButtonMaterialSet
  ): void {
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
  public static remove(material: ButtonMaterialSet): void {
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
  private static getMaterialArray(
    materials: ButtonMaterialSet
  ): DisplayObject[] {
    return [
      materials.normal,
      materials.over,
      materials.down,
      materials.disable,
      materials.selectNormal,
      materials.selectOver,
      materials.selectDown,
      materials.selectMarker,
    ];
  }

  /**
   * 可視状態をstateに合わせて更新する
   * @param {ButtonMaterialSet} material
   * @param {BasicButtonState} state
   */
  public static updateVisible(
    material: ButtonMaterialSet,
    state: BasicButtonState
  ): void {
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
  private static invisibleAll(material: ButtonMaterialSet): void {
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
export class ButtonLabelColorSet extends ButtonOptionSet<number> {
  /**
   * ラベル文字色をボタン状態に応じて更新する。
   * @param {Text} field 更新対象ラベル
   * @param {ButtonLabelColorSet} colors 状態文字色セット
   * @param {BasicButtonState} state ボタン状態
   */
  public static update(
    field: Text,
    colors: ButtonLabelColorSet,
    state: BasicButtonState
  ): void {
    if (field == null) return;
    field.style.fill = this.getMaterial(colors, state);
  }
}
