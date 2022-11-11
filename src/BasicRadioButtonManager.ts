import { BasicRadioButton } from "./BasicRadioButton";
import { BasicButtonContext, BasicButtonEventType } from "./BasicButtonContext";
import { EventEmitter } from "@pixi/utils";
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

export class BasicRadioButtonManager extends EventEmitter {
  protected _buttons: BasicRadioButton[] = [];
  protected _selected?: BasicRadioButton = null;

  /**
   * ラジオボタンのグループにボタンを追加する。
   * @param {BasicRadioButton} button
   */
  public add(button: BasicRadioButton): void {
    this._buttons.push(button);
    // @ts-ignore
    button.on(BasicButtonEventType.SELECTED, (e: any) => {
      const ctx = e as BasicButtonContext;
      this.deselectOthers(ctx.target as BasicRadioButton);
    });
  }

  /**
   * ボタンを選択する。
   * nullを引数に取ると全ての選択を解除する。
   * @param {BasicRadioButton} selectedButton
   */
  set selected(selectedButton: BasicRadioButton) {
    this._selected = selectedButton;

    if (selectedButton == null) {
      this.deselectAllButtons();
      return;
    }

    //選択されたボタンがこのインスタンスの管理下か確認する。
    const index = this._buttons.indexOf(selectedButton);
    if (index === -1) {
      console.warn(
        "BasicRadioButtonManager : " +
          "選択対象として指定されたボタンが、BasicRadioButtonManagerの管理下にありません。" +
          "指定を行う前にaddButton関数でボタンをBasicRadioButtonManagerに登録してください。"
      );
      return;
    }

    selectedButton.selectButton();
  }

  /**
   * 選択済みのボタンを取得する。
   * 選択されていない場合はnullを返す。
   * @returns {BasicRadioButton | null}
   */
  get selected(): BasicRadioButton | null {
    return this._selected;
  }

  /**
   * 指定されたボタン以外の選択を解除し、BasicRadioButtonManagerからSELECTEDイベントを発行する。
   * @param {BasicRadioButton} selectedButton
   * @param {boolean} isDispatchSelectEvent
   */
  protected deselectOthers(
    selectedButton: BasicRadioButton,
    isDispatchSelectEvent: boolean = true
  ): void {
    this._selected = selectedButton;

    for (let btn of this._buttons) {
      if (btn != selectedButton) {
        btn.deselectButton();
      }
    }

    if (isDispatchSelectEvent) {
      const evt: BasicButtonContext = new BasicButtonContext(
        this._selected,
        this._selected.buttonValue
      );
      evt.index = this._buttons.indexOf(this._selected);
      this.emit(BasicButtonEventType.SELECTED, evt);
    }
  }

  /**
   * 管理下の全てのボタンの選択を解除する。
   */
  public deselectAllButtons(): void {
    this._selected = null;
    for (let btn of this._buttons) {
      btn.deselectButton();
    }

    const evt: BasicButtonContext = new BasicButtonContext(null, null);
    // @ts-ignore
    this.emit(BasicButtonEventType.UNSELECTED, evt);
  }

  public disableAll(): void {
    for (let btn of this._buttons) {
      btn.disableButton();
    }
  }

  public disableMouseAll(): void {
    for (let btn of this._buttons) {
      btn.interactive = false;
    }
  }

  public enableAll(): void {
    for (let btn of this._buttons) {
      btn.enableButton();
    }
  }

  public enableMouseAll(): void {
    for (let btn of this._buttons) {
      btn.interactive = true;
    }
  }

  /**
   * 現在選択されているボタンのbuttonValueを取得する。
   * 選択されたボタンがない場合はnullを返す。
   * @returns {any}
   */
  get selectedButtonValue(): any {
    const btn = this.selected;
    if (btn) {
      return btn.buttonValue;
    }
    return null;
  }

  /**
   * このインスタンスで管理をしているラジオボタンの配列を取得する。
   * @returns {BasicRadioButton[]}
   */
  get buttons(): BasicRadioButton[] {
    return this._buttons;
  }

  /**
   * buttonValueを検索キーとして、該当するボタンを取得する。
   * 該当するボタンがない場合はnullを返す。
   *
   * @param value
   * @returns {BasicRadioButton | null}
   */
  public getButton(value: any): BasicRadioButton | null {
    for (let btn of this._buttons) {
      if (btn.buttonValue === value && btn.buttonValue != null) {
        return btn;
      }
    }
    return null;
  }
}
