import { Container, FederatedPointerEvent, Text, TextStyle } from "pixi.js";
import { BasicButtonState, ButtonLabelColorSet, ButtonMaterialSet } from "./";

/**
 * 基本ボタンクラス。
 * 選択状態を持たず、クリックした時点で結果が反映されるタイプのボタンです。
 *
 * 正常動作のために、stageにenableMouseOverを実行する必要があります。
 * stageのインスタンス化のタイミングで実行してください。
 *  stage.enableMouseOver();
 */

export class BasicClickButton<T = any> extends Container {
  protected isDisable: boolean = false; //ボタンが使用不可状態か否か
  protected isPressed: boolean = false; //ボタンが押されているか否か
  protected isOver: boolean = false; //マウスオーバーしているか否か
  /**
   * ボタンの凍結状態。
   * trueに設定すると、ボタンの状態と外見を維持したまま、マウス操作を無視する。
   */
  private _frozen: boolean = false;

  protected _buttonValue?: T = undefined; //このボタンに割り当てられた値
  protected material?: ButtonMaterialSet; //状態マテリアル 状態によって表示が切り替わるもの。

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
    this.cursor = "pointer";
    this.setMouseEvents();

    if (materials) this.initMaterial(materials);
  }

  /**
   * ボタンに対するマウスハンドリングを開始する。
   */
  private setMouseEvents(): void {
    this.on("pointerdown", (e) => {
      this.pressButton(e);
    });
    this.on("pointerup", (e) => {
      this.releaseButton(e);
    });
    this.on("pointerover", (e) => {
      this.overButton(e);
    });
    this.on("pointerout", (e) => {
      this.outButton(e);
    });
  }

  /**
   * ボタンに状態マテリアルを設定する。
   * @param materials
   */
  public initMaterial(materials: ButtonMaterialSet): void {
    //すでにmaterialが設定済みの場合、以前のマテリアルを削除する。
    if (this.material) {
      ButtonMaterialSet.remove(this.material);
      this.material = undefined;
    }

    this.material = materials;
    ButtonMaterialSet.addChild(this, materials);
    this.updateMaterialVisible(this.getButtonState());

    //テキストラベルがあったら最前線に。
    this._labelField.forEach((label) => {
      this.removeChild(label);
      this.addChild(label);
    });
  }

  /**
   * 状態表示およびラベル文字色を、状態に応じて更新する。
   * @param state
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
   * @param evt
   */
  public pressButton(evt?: FederatedPointerEvent): void {
    if (!this.checkActivity()) return;
    this.isPressed = true;
    this.updateMaterialVisible("normal_down");
  }

  /**
   * ボタン上でマウスアップした際の処理。
   * 状態と表示を更新する。
   * @param evt
   */
  public releaseButton(evt?: FederatedPointerEvent): void {
    if (!this.checkActivity()) return;
    if (!this.isPressed) return;

    this.isPressed = false;

    this.updateMaterialVisible(this.isOver ? "normal_over" : "normal");
  }

  /**
   * ボタンにマウスオーバーした際の処理。
   * 状態と表示を更新する。
   * @param evt
   */
  public overButton(evt?: FederatedPointerEvent): void {
    this.isOver = true;

    if (!this.checkActivity()) return;
    this.updateMaterialVisible("normal_over");
  }

  /**
   * ボタンからマウスアウトした際の処理。
   * 状態と表示を更新する。
   * @param evt
   */
  public outButton(evt?: FederatedPointerEvent): void {
    this.isOver = false;
    this.isPressed = false;

    if (!this.checkActivity()) return;
    this.updateMaterialVisible("normal");
  }

  /**
   * ボタンを非活性化する
   */
  public disableButton(): void {
    this.isDisable = true;
    this.updateMouseEnabled();
    this.updateMaterialVisible("disable");
  }

  /**
   * ボタンを活性化する
   */
  public enableButton(): void {
    this.isDisable = false;
    this.updateMouseEnabled();
    this.updateMaterialVisible("normal");
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
    if (this.isDisable) return "disable";
    else return "normal";
  }

  /**
   * ボタンラベルを追加する。
   * @param x ラベル位置
   * @param y ラベル位置
   * @param label ラベルに表示する文言
   * @param style
   * @param color
   * @return テキストフィールドのインデックス値
   */
  public addLabel(
    x: number,
    y: number,
    label: string,
    style: TextStyle,
    color: ButtonLabelColorSet
  ): number {
    this.labelColors.push(color);
    style.fill = color.normal;
    style.textBaseline = "ideographic";

    const field = new Text(label, style);
    this._labelField.push(field);
    field.x = x;
    field.y = y;
    field.cacheAsBitmap = true;
    field.interactive = field.interactiveChildren = false;

    this.addChild(field);
    return this._labelField.indexOf(field);
  }

  /**
   * ボタンラベルに表示されている文言を取得する。
   * @returns {string}
   */
  public getLabel(index: number): string | undefined {
    if (!this._labelField) return undefined;
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

    if (this._labelField[index] === undefined) {
      console.warn(
        "BasicButton : " + `指定されたindex : ${index}にラベルが存在しません。`
      );
      return;
    }

    const field = this._labelField[index];

    if (field.text === value) return;
    field.text = value;
  }

  public getLabelField(index: number): Text {
    return this._labelField[index];
  }

  get buttonValue(): T | undefined {
    return this._buttonValue;
  }
  set buttonValue(value: T | undefined) {
    if (this._buttonValue != value) {
      this._buttonValue = value;
    }
  }
}
