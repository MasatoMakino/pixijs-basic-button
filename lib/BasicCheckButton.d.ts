import { BasicClickButton } from "./BasicClickButton";
import { BasicButtonState } from "./BasicButtonState";
import InteractionEvent = PIXI.interaction.InteractionEvent;
/**
 * 選択状態を持つボタンクラス。
 */
export declare class BasicCheckButton extends BasicClickButton {
  protected _isSelect: boolean;
  pressButton(evt?: InteractionEvent): void;
  releaseButton(evt?: InteractionEvent): void;
  overButton(evt?: InteractionEvent): void;
  outButton(evt?: InteractionEvent): void;
  /**
   * ボタンを選択する。
   * @param evt
   */
  selectButton(evt?: InteractionEvent): void;
  /**
   * ボタンの選択を解除する。
   * @param { InteractionEvent} evt
   */
  deselectButton(evt?: InteractionEvent): void;
  enableButton(): void;
  getButtonState(): BasicButtonState;
  /**
   * 選択状態を取得する。
   * @returns {boolean}
   */
  get selection(): boolean;
}
//# sourceMappingURL=BasicCheckButton.d.ts.map
