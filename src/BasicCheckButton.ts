import { FederatedPointerEvent } from "pixi.js";
import {
  BasicButtonContext,
  BasicButtonState,
  ButtonMaterialSet,
  SelectionState,
} from "./";
//参照順序ミスが発生するため、indexではなくBasicClickButtonからインポートする。
import { BasicClickButton } from "./BasicClickButton";

/**
 * 選択状態を持つボタンクラス。
 */
export class BasicCheckButton<T = any> extends BasicClickButton<T> {
  get selectionState(): SelectionState<T> {
    return this._selectionState;
  }
  protected _selectionState: SelectionState<T>;

  constructor(materials?: ButtonMaterialSet) {
    super(materials);
    this._selectionState = new SelectionState<T>();
  }

  public pressButton(evt?: FederatedPointerEvent): void {
    if (!this.checkActivity()) return;
    this.isPressed = true;

    this.updateMaterialVisible(
      this._selectionState.isSelected ? "select_down" : "normal_down"
    );
  }

  public releaseButton(evt?: FederatedPointerEvent): void {
    if (!this.checkActivity()) return;

    if (!this.isPressed) return;
    this.isPressed = false;

    if (this._selectionState.isSelected) this.deselectButton(evt);
    else this.selectButton(evt);
  }

  public overButton(evt?: FederatedPointerEvent): void {
    super.overButton(evt);

    if (!this.checkActivity()) return;
    this.updateMaterialVisible(
      this._selectionState.isSelected ? "select_over" : "normal_over"
    );
  }

  public outButton(evt?: FederatedPointerEvent): void {
    super.outButton(evt);

    if (!this.isDisable) {
      this.updateMaterialVisible(
        this._selectionState.isSelected ? "select" : "normal"
      );
    }
    if (!this.checkActivity()) return;
  }

  /**
   * ボタンを選択する。
   * @param evt
   */
  public selectButton(evt?: FederatedPointerEvent): void {
    if (this._selectionState.isSelected) return;

    this._selectionState.isSelected = true;
    if (!this.isDisable) {
      this.updateMaterialVisible(this.isOver ? "select_over" : "select");
    }

    const buttonEvt = new BasicButtonContext(this, this.buttonValue);
    this._selectionState.emit("selected", buttonEvt);
  }

  /**
   * ボタンの選択を解除する。
   * @param evt
   */
  public deselectButton(evt?: FederatedPointerEvent): void {
    if (!this._selectionState.isSelected) return;

    if (!this.isDisable) {
      this.updateMaterialVisible(this.isOver ? "normal_over" : "normal");
    }
    this._selectionState.isSelected = false;

    const buttonEvt = new BasicButtonContext(this, this.buttonValue);
    this._selectionState.emit("unselected", buttonEvt);
  }

  public enableButton(): void {
    super.enableButton();
    this.updateMaterialVisible(
      this._selectionState.isSelected ? "select" : "normal"
    );
  }

  public getButtonState(): BasicButtonState {
    if (this.isDisable) return "disable";
    else {
      if (this._selectionState?.isSelected) return "select";
      else return "normal";
    }
  }

  /**
   * 選択状態を取得する。
   * @returns {boolean}
   */
  get selection(): boolean {
    return this.selectionState.isSelected;
  }
}
