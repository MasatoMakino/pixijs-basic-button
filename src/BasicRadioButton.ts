import { FederatedPointerEvent } from "pixi.js";
import { BasicButtonContext, BasicButtonEventType } from "./BasicButtonContext";
import { BasicButtonState } from "./BasicButtonState";
import { BasicCheckButton } from "./BasicCheckButton";

/**
 * 排他的に選択可能なボタン。ラジオボタンのセットはBasicRadioButtonManagerで設定する。
 */
export class BasicRadioButton extends BasicCheckButton {
  /**
   * ボタンを選択する。
   * @param evt
   */
  public selectButton(evt?: FederatedPointerEvent): void {
    if (this._isSelect) return;

    this._isSelect = true;
    if (!this.isDisable) {
      //ラジオボタンは選択した時点で操作不可となる。そのためSELECT_OVERには遷移しない。
      this.updateMaterialVisible(BasicButtonState.SELECT);
    }

    const buttonEvt = new BasicButtonContext(this, this.buttonValue);
    // @ts-ignore
    this.emit(BasicButtonEventType.SELECTED, buttonEvt);
  }

  /**
   * 現在のボタンの有効、無効状態を取得する。
   * ラジオボタンは選択中も操作が無効となる。
   * @return    ボタンが有効か否か
   */
  protected checkActivity(): boolean {
    if (this._isSelect) return false;
    return super.checkActivity();
  }
}
