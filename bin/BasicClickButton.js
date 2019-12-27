import { Container, Text } from "pixi.js";
import { BasicButtonState } from "./BasicButtonState";
import { ButtonMaterialSet, ButtonLabelColorSet } from "./ButtonMaterialSet";
/**
 * 基本ボタンクラス。
 * 選択状態を持たず、クリックした時点で結果が反映されるタイプのボタンです。
 *
 * 正常動作のために、stageにenableMouseOverを実行する必要があります。
 * stageのインスタンス化のタイミングで実行してください。
 *  stage.enableMouseOver();
 */
export class BasicClickButton extends Container {
    /**
     * コンストラクタ
     * @param {ButtonMaterialSet} materials 状態セット
     */
    constructor(materials) {
        super();
        this.isDisable = false; //ボタンが使用不可状態か否か
        this.isPressed = false; //ボタンが押されているか否か
        this.isOver = false; //マウスオーバーしているか否か
        /**
         * ボタンの凍結状態。
         * trueに設定すると、ボタンの状態と外見を維持したまま、マウス操作を無視する。
         */
        this._frozen = false;
        this._buttonValue = null; //このボタンに割り当てられた値
        /*ボタンラベル*/
        this._labelField = []; //ラベル表示用のテキストフィールド
        this.labelColors = []; //ラベルの色のセット。各状態のラベルの文字色を格納する。
        this.interactive = true;
        this.buttonMode = true;
        this.setMouseEvents();
        if (materials)
            this.initMaterial(materials);
    }
    /**
     * ボタンに対するマウスハンドリングを開始する。
     */
    setMouseEvents() {
        this.on("mousedown", (e) => {
            this.pressButton(e);
        });
        this.on("mouseup", (e) => {
            this.releaseButton(e);
        });
        this.on("mouseover", (e) => {
            this.overButton(e);
        });
        this.on("mouseout", (e) => {
            this.outButton(e);
        });
    }
    /**
     * ボタンに状態マテリアルを設定する。
     * @param materials
     */
    initMaterial(materials) {
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
     * @param state
     */
    updateMaterialVisible(state) {
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
    pressButton(evt) {
        if (!this.checkActivity())
            return;
        this.isPressed = true;
        this.updateMaterialVisible(BasicButtonState.NORMAL_DOWN);
    }
    /**
     * ボタン上でマウスアップした際の処理。
     * 状態と表示を更新する。
     * @param {createjs.InteractionEvent} evt
     */
    releaseButton(evt) {
        if (!this.checkActivity())
            return;
        if (!this.isPressed)
            return;
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
    overButton(evt) {
        this.isOver = true;
        if (!this.checkActivity())
            return;
        this.updateMaterialVisible(BasicButtonState.NORMAL_OVER);
    }
    /**
     * ボタンからマウスアウトした際の処理。
     * 状態と表示を更新する。
     * @param evt
     */
    outButton(evt) {
        this.isOver = false;
        this.isPressed = false;
        if (!this.checkActivity())
            return;
        this.updateMaterialVisible(BasicButtonState.NORMAL);
    }
    /**
     * ボタンを非活性化する
     */
    disableButton() {
        this.isDisable = true;
        this.updateMouseEnabled();
        this.updateMaterialVisible(BasicButtonState.DISABLE);
    }
    /**
     * ボタンを活性化する
     */
    enableButton() {
        this.isDisable = false;
        this.updateMouseEnabled();
        this.updateMaterialVisible(BasicButtonState.NORMAL);
    }
    get frozen() {
        return this._frozen;
    }
    set frozen(value) {
        this._frozen = value;
        this.updateMouseEnabled();
    }
    updateMouseEnabled() {
        this.interactive = !this.isDisable && !this._frozen;
    }
    /**
     * 現在のボタンの有効、無効状態を取得する
     * @return    ボタンが有効か否か
     */
    checkActivity() {
        return !this.isDisable && !this._frozen && this.interactive;
    }
    /**
     * 現在のボタンの状態を取得する
     * @returns {BasicButtonState}
     */
    getButtonState() {
        if (this.isDisable)
            return BasicButtonState.DISABLE;
        else
            return BasicButtonState.NORMAL;
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
    addLabel(x, y, label, style, color) {
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
    getLabel(index) {
        if (!this._labelField)
            return null;
        return this._labelField[index].text;
    }
    /**
     * ボタンラベルの文言を更新する。
     * @param index
     * @param value
     */
    setLabel(index, value) {
        if (this._labelField.length === 0) {
            console.warn("BasicButton : " +
                "ボタンラベルが初期化されていませんが、ラベルの文言が指定されました。" +
                "文言を指定する前にラベルの初期化をaddLabel関数で行ってください。");
            return;
        }
        const field = this._labelField[index];
        if (field.text === value)
            return;
        field.text = value;
        field.cacheAsBitmap = false;
        field.cacheAsBitmap = true;
    }
    getLabelField(index) {
        return this._labelField[index];
    }
    get buttonValue() {
        return this._buttonValue;
    }
    set buttonValue(value) {
        if (this._buttonValue != value) {
            this._buttonValue = value;
        }
    }
}
