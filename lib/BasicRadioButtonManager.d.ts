import { BasicRadioButton } from "./BasicRadioButton";
import * as PIXI from "pixi.js";
/**
 * 排他的に選択されるボタンを制御するクラスです。
 *
 * メンバーのBasicRadioButtonが変更されると、このクラスに変更内容が通知されます。
 * このクラスは変更通知に応じ、他のBasicRadioButtonオブジェクトの選択状態を変更します。
 * また、このクラスは変更内容をEventとして発信します。
 *
 * 利用する際には以下のような手順でインスタンス化してください。
 *
 * let btn:BasicRadioButton = new BasicRadioButton(...);
 * let manager:BasicRadioButtonManager = new BasicRadioButtonManager(); //インスタンス化
 * manager.addButton(btn);
 * manager.selected = btn; //デフォルトで選択されているボタンを指定
 */
export declare class BasicRadioButtonManager extends PIXI.utils.EventEmitter {
  protected _buttons: BasicRadioButton[];
  protected _selected?: BasicRadioButton;
  /**
   * ラジオボタンのグループにボタンを追加する。
   * @param {BasicRadioButton} button
   */
  add(button: BasicRadioButton): void;
  /**
   * ボタンを選択する。
   * nullを引数に取ると全ての選択を解除する。
   * @param {BasicRadioButton} selectedButton
   */
  set selected(selectedButton: BasicRadioButton);
  /**
   * 選択済みのボタンを取得する。
   * 選択されていない場合はnullを返す。
   * @returns {BasicRadioButton | null}
   */
  get selected(): BasicRadioButton | null;
  /**
   * 指定されたボタン以外の選択を解除し、BasicRadioButtonManagerからSELECTEDイベントを発行する。
   * @param {BasicRadioButton} selectedButton
   * @param {boolean} isDispatchSelectEvent
   */
  protected deselectOthers(
    selectedButton: BasicRadioButton,
    isDispatchSelectEvent?: boolean
  ): void;
  /**
   * 管理下の全てのボタンの選択を解除する。
   */
  deselectAllButtons(): void;
  disableAll(): void;
  disableMouseAll(): void;
  enableAll(): void;
  enableMouseAll(): void;
  /**
   * 現在選択されているボタンのbuttonValueを取得する。
   * 選択されたボタンがない場合はnullを返す。
   * @returns {any}
   */
  get selectedButtonValue(): any;
  /**
   * このインスタンスで管理をしているラジオボタンの配列を取得する。
   * @returns {BasicRadioButton[]}
   */
  get buttons(): BasicRadioButton[];
  /**
   * buttonValueを検索キーとして、該当するボタンを取得する。
   * 該当するボタンがない場合はnullを返す。
   *
   * @param value
   * @returns {BasicRadioButton | null}
   */
  getButton(value: any): BasicRadioButton | null;
}
//# sourceMappingURL=BasicRadioButtonManager.d.ts.map
