import { Container, Text, Rectangle } from "pixi.js";

import { BasicButtonState } from "./BasicButtonState";
import { ButtonMaterialSet, ButtonLabelColorSet } from "./ButtonMaterialSet";
import InteractionEvent = PIXI.interaction.InteractionEvent;

/**
 * 基本ボタンクラス。
 * 選択状態を持たず、クリックした時点で結果が反映されるタイプのボタンです。
 *
 * 正常動作のために、stageにenableMouseOverを実行する必要があります。
 * stageのインスタンス化のタイミングで実行してください。
 *  stage.enableMouseOver();
 */

export class BasicClickButton extends Container {
  protected isDisable: boolean = false; //ボタンが使用不可状態か否か
  protected isPressed: boolean = false; //ボタンが押されているか否か
  protected isOver: boolean = false; //マウスオーバーしているか否か
  /**
   * ボタンの凍結状態。
   * trueに設定すると、ボタンの状態と外見を維持したまま、マウス操作を無視する。
   */
  private _frozen: boolean = false;

  protected _buttonValue: any = null; //このボタンに割り当てられた値
  protected material!: ButtonMaterialSet; //状態マテリアル 状態によって表示が切り替わるもの。

  /*ボタンラベル*/
  protected _labelField: Text[] = []; //ラベル表示用のテキストフィールド
  protected labelColors: ButtonLabelColorSet[] = []; //ラベルの色のセット。各状態のラベルの文字色を格納する。

  /**
   * コンストラクタ
   * @param {ButtonMaterialSet} materials 状態セット
   */
  constructor(materials?: ButtonMaterialSet) {
    super();

    this.interactive = true;
    this.buttonMode = true;
    this.setMouseEvents();

    if (materials) this.initMaterial(materials);
  }

  /**
   * ボタンに対するマウスハンドリングを開始する。
   */
  private setMouseEvents(): void {
    this.on("mousedown", (e: any) => {
      this.pressButton(e as InteractionEvent);
    });
    this.on("mouseup", (e: any) => {
      this.releaseButton(e as InteractionEvent);
    });
    this.on("mouseover", (e: any) => {
      this.overButton(e as InteractionEvent);
    });
    this.on("mouseout", (e: any) => {
      this.outButton(e as InteractionEvent);
    });
  }

  /**
   * ボタンに状態マテリアルを設定する。
   * @param {ButtonMaterialSet} materials
   */
  public initMaterial(materials: ButtonMaterialSet): void {
    //すでにmaterialが設定済みの場合、以前のマテリアルを削除する。
    if (this.material) {
      ButtonMaterialSet.remove(this.material);
      this.material = null;
    }

    this.material = materials;
    ButtonMaterialSet.addChild(this, materials);
    this.updateMaterialVisible(this.getButtonState());

    //テキストラベルがあったら最前線に。
    this._labelField.forEach(label => {
      this.removeChild(label);
      this.addChild(label);
    });
  }

  /**
   * 状態表示およびラベル文字色を、状態に応じて更新する。
   * @param {BasicButtonState} state
   */
  protected updateMaterialVisible(state: BasicButtonState) {
    ButtonMaterialSet.updateVisible(this.material, state);
    this._labelField.forEach((label, index) => {
      ButtonLabelColorSet.update(label, this.labelColors[index], state);
    });
  }

  /**
   * ボタン上でマウスダウンした際の処理。
   * 状態と表示を更新する。
   * @param {createjs.MouseEvent} evt
   */
  public pressButton(evt?: InteractionEvent): void {
    if (!this.checkActivity()) return;
    this.isPressed = true;
    this.updateMaterialVisible(BasicButtonState.NORMAL_DOWN);
  }

  /**
   * ボタン上でマウスアップした際の処理。
   * 状態と表示を更新する。
   * @param {createjs.InteractionEvent} evt
   */
  public releaseButton(evt?: InteractionEvent): void {
    if (!this.checkActivity()) return;
    if (!this.isPressed) return;

    this.isPressed = false;

    const state = this.isOver
      ? BasicButtonState.NORMAL_OVER
      : BasicButtonState.NORMAL;
    this.updateMaterialVisible(state);
  }

  /**
   * ボタンにマウスオーバーした際の処理。
   * 状態と表示を更新する。
   * @param {createjs.InteractionEvent} evt
   */
  public overButton(evt?: InteractionEvent): void {
    this.isOver = true;

    if (!this.checkActivity()) return;
    this.updateMaterialVisible(BasicButtonState.NORMAL_OVER);
  }

  /**
   * ボタンからマウスアウトした際の処理。
   * 状態と表示を更新する。
   * @param evt
   */
  public outButton(evt?: InteractionEvent): void {
    this.isOver = false;
    this.isPressed = false;

    if (!this.checkActivity()) return;
    this.updateMaterialVisible(BasicButtonState.NORMAL);
  }

  /**
   * ボタンを非活性化する
   */
  public disableButton(): void {
    this.isDisable = true;
    this.updateMouseEnabled();
    this.updateMaterialVisible(BasicButtonState.DISABLE);
  }

  /**
   * ボタンを活性化する
   */
  public enableButton(): void {
    this.isDisable = false;
    this.updateMouseEnabled();
    this.updateMaterialVisible(BasicButtonState.NORMAL);
  }

  get frozen(): boolean {
    return this._frozen;
  }

  set frozen(value: boolean) {
    this._frozen = value;
    this.updateMouseEnabled();
  }

  private updateMouseEnabled() {
    this.interactive = !this.isDisable && !this._frozen;
  }

  /**
   * 現在のボタンの有効、無効状態を取得する
   * @return    ボタンが有効か否か
   */
  protected checkActivity(): boolean {
    return !this.isDisable && !this._frozen && this.interactive;
  }

  /**
   * 現在のボタンの状態を取得する
   * @returns {BasicButtonState}
   */
  public getButtonState(): BasicButtonState {
    if (this.isDisable) return BasicButtonState.DISABLE;
    else return BasicButtonState.NORMAL;
  }

  /**
   * ボタンラベルを追加する。
   * @param x ラベル位置
   * @param y ラベル位置
   * @param label ラベルに表示する文言
   * @param font フォント設定 createjs.Textのfont指定に準じる。
   * @param color
   * @param textAlign
   * @return テキストフィールドのインデックス値
   */
  // public addLabel(
  //   x: number,
  //   y: number,
  //   label: string,
  //   font: string,
  //   color: ButtonLabelColorSet,
  //   textAlign?: string
  // ): number {
  //   this.labelColors.push(color);
  //   const field = new createjs.Text("", font, color.normal);
  //   this._labelField.push(field);
  //   field.x = x;
  //   field.y = y;
  //   if (textAlign) field.textAlign = textAlign;
  //   field.textBaseline = "alphabetic";
  //   field.mouseEnabled = false;
  //   CreatejsCacheUtil.cacheText(field, label);
  //   this.addChild(field);
  //   return this._labelField.indexOf(field);
  // }

  /**
   * ボタンラベルに表示されている文言を取得する。
   * @returns {string}
   */
  public getLabel(index): string | null {
    if (!this._labelField) return null;
    return this._labelField[index].text;
  }

  /**
   * ボタンラベルの文言を更新する。
   * @param index
   * @param value
   */
  public setLabel(index: number, value: string) {
    if (this._labelField.length === 0) {
      console.warn(
        "BasicButton : " +
          "ボタンラベルが初期化されていませんが、ラベルの文言が指定されました。" +
          "文言を指定する前にラベルの初期化をaddLabel関数で行ってください。"
      );
      return;
    }

    this._labelField[index].text = value;
  }

  public getLabelField(index: number): Text {
    return this._labelField[index];
  }

  get buttonValue(): any {
    return this._buttonValue;
  }
  set buttonValue(value: any) {
    if (this._buttonValue != value) {
      this._buttonValue = value;
    }
  }

  /**
   * 当たり判定の矩形を指定する。
   * @param x
   * @param y
   * @param w
   * @param h
   */
  public initHitRect(x: number, y: number, w: number, h: number): void {
    this.hitArea = new Rectangle(x, y, w, h);
  }
}
