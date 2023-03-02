import { FederatedPointerEvent } from "pixi.js";
import { ButtonMaterialSet } from "./ButtonMaterialSet";
import { BasicButtonContext } from "./BasicButtonContext";
import { BasicButtonState } from "./BasicButtonState";
import { BasicCheckButton } from "./BasicCheckButton";

/**
 * 排他的に選択可能なボタン。ラジオボタンのセットはBasicRadioButtonManagerで設定する。
 */
export class BasicRadioButton extends BasicCheckButton {
  constructor(materials?: ButtonMaterialSet) {
    super(materials);

    this._selectionState.on("selected", () => {
      this.cursor = "auto";
    });
    this._selectionState.on("unselected", () => {
      this.cursor = "pointer";
    });
  }

  /**
   * ボタンを選択する。
   * @param evt
   */
  public selectButton(evt?: FederatedPointerEvent): void {
    if (this._selectionState.isSelected) return;

    this._selectionState.isSelected = true;
    if (!this.isDisable) {
      //ラジオボタンは選択した時点で操作不可となる。そのためSELECT_OVERには遷移しない。
      this.updateMaterialVisible("select");
    }

    const buttonEvt = new BasicButtonContext(this, this.buttonValue);
    this._selectionState.emit("selected", buttonEvt);
  }

  /**
   * 現在のボタンの有効、無効状態を取得する。
   * ラジオボタンは選択中も操作が無効となる。
   * @return    ボタンが有効か否か
   */
  protected checkActivity(): boolean {
    if (this._selectionState.isSelected) return false;
    return super.checkActivity();
  }
}
