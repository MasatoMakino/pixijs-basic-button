"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicClickButton = void 0;
var pixi_js_1 = require("pixi.js");
var pixijs_cache_util_1 = require("pixijs-cache-util");
var BasicButtonState_1 = require("./BasicButtonState");
var ButtonMaterialSet_1 = require("./ButtonMaterialSet");
/**
 * 基本ボタンクラス。
 * 選択状態を持たず、クリックした時点で結果が反映されるタイプのボタンです。
 *
 * 正常動作のために、stageにenableMouseOverを実行する必要があります。
 * stageのインスタンス化のタイミングで実行してください。
 *  stage.enableMouseOver();
 */
var BasicClickButton = /** @class */ (function (_super) {
    __extends(BasicClickButton, _super);
    /**
     * コンストラクタ
     * @param {ButtonMaterialSet} materials 状態セット
     */
    function BasicClickButton(materials) {
        var _this = _super.call(this) || this;
        _this.isDisable = false; //ボタンが使用不可状態か否か
        _this.isPressed = false; //ボタンが押されているか否か
        _this.isOver = false; //マウスオーバーしているか否か
        /**
         * ボタンの凍結状態。
         * trueに設定すると、ボタンの状態と外見を維持したまま、マウス操作を無視する。
         */
        _this._frozen = false;
        _this._buttonValue = null; //このボタンに割り当てられた値
        /*ボタンラベル*/
        _this._labelField = []; //ラベル表示用のテキストフィールド
        _this.labelColors = []; //ラベルの色のセット。各状態のラベルの文字色を格納する。
        _this.interactive = true;
        _this.buttonMode = true;
        _this.setMouseEvents();
        if (materials)
            _this.initMaterial(materials);
        return _this;
    }
    /**
     * ボタンに対するマウスハンドリングを開始する。
     */
    BasicClickButton.prototype.setMouseEvents = function () {
        var _this = this;
        this.on("pointerdown", function (e) {
            _this.pressButton(e);
        });
        this.on("pointerup", function (e) {
            _this.releaseButton(e);
        });
        this.on("pointerover", function (e) {
            _this.overButton(e);
        });
        this.on("pointerout", function (e) {
            _this.outButton(e);
        });
    };
    /**
     * ボタンに状態マテリアルを設定する。
     * @param materials
     */
    BasicClickButton.prototype.initMaterial = function (materials) {
        var _this = this;
        //すでにmaterialが設定済みの場合、以前のマテリアルを削除する。
        if (this.material) {
            ButtonMaterialSet_1.ButtonMaterialSet.remove(this.material);
            this.material = null;
        }
        this.material = materials;
        ButtonMaterialSet_1.ButtonMaterialSet.addChild(this, materials);
        this.updateMaterialVisible(this.getButtonState());
        //テキストラベルがあったら最前線に。
        this._labelField.forEach(function (label) {
            _this.removeChild(label);
            _this.addChild(label);
        });
    };
    /**
     * 状態表示およびラベル文字色を、状態に応じて更新する。
     * @param state
     */
    BasicClickButton.prototype.updateMaterialVisible = function (state) {
        var _this = this;
        ButtonMaterialSet_1.ButtonMaterialSet.updateVisible(this.material, state);
        this._labelField.forEach(function (label, index) {
            ButtonMaterialSet_1.ButtonLabelColorSet.update(label, _this.labelColors[index], state);
        });
    };
    /**
     * ボタン上でマウスダウンした際の処理。
     * 状態と表示を更新する。
     * @param evt
     */
    BasicClickButton.prototype.pressButton = function (evt) {
        if (!this.checkActivity())
            return;
        this.isPressed = true;
        this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL_DOWN);
    };
    /**
     * ボタン上でマウスアップした際の処理。
     * 状態と表示を更新する。
     * @param {createjs.InteractionEvent} evt
     */
    BasicClickButton.prototype.releaseButton = function (evt) {
        if (!this.checkActivity())
            return;
        if (!this.isPressed)
            return;
        this.isPressed = false;
        var state = this.isOver
            ? BasicButtonState_1.BasicButtonState.NORMAL_OVER
            : BasicButtonState_1.BasicButtonState.NORMAL;
        this.updateMaterialVisible(state);
    };
    /**
     * ボタンにマウスオーバーした際の処理。
     * 状態と表示を更新する。
     * @param {createjs.InteractionEvent} evt
     */
    BasicClickButton.prototype.overButton = function (evt) {
        this.isOver = true;
        if (!this.checkActivity())
            return;
        this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL_OVER);
    };
    /**
     * ボタンからマウスアウトした際の処理。
     * 状態と表示を更新する。
     * @param evt
     */
    BasicClickButton.prototype.outButton = function (evt) {
        this.isOver = false;
        this.isPressed = false;
        if (!this.checkActivity())
            return;
        this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL);
    };
    /**
     * ボタンを非活性化する
     */
    BasicClickButton.prototype.disableButton = function () {
        this.isDisable = true;
        this.updateMouseEnabled();
        this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.DISABLE);
    };
    /**
     * ボタンを活性化する
     */
    BasicClickButton.prototype.enableButton = function () {
        this.isDisable = false;
        this.updateMouseEnabled();
        this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL);
    };
    Object.defineProperty(BasicClickButton.prototype, "frozen", {
        get: function () {
            return this._frozen;
        },
        set: function (value) {
            this._frozen = value;
            this.updateMouseEnabled();
        },
        enumerable: false,
        configurable: true
    });
    BasicClickButton.prototype.updateMouseEnabled = function () {
        this.interactive = !this.isDisable && !this._frozen;
    };
    /**
     * 現在のボタンの有効、無効状態を取得する
     * @return    ボタンが有効か否か
     */
    BasicClickButton.prototype.checkActivity = function () {
        return !this.isDisable && !this._frozen && this.interactive;
    };
    /**
     * 現在のボタンの状態を取得する
     * @returns {BasicButtonState}
     */
    BasicClickButton.prototype.getButtonState = function () {
        if (this.isDisable)
            return BasicButtonState_1.BasicButtonState.DISABLE;
        else
            return BasicButtonState_1.BasicButtonState.NORMAL;
    };
    /**
     * ボタンラベルを追加する。
     * @param x ラベル位置
     * @param y ラベル位置
     * @param label ラベルに表示する文言
     * @param style
     * @param color
     * @return テキストフィールドのインデックス値
     */
    BasicClickButton.prototype.addLabel = function (x, y, label, style, color) {
        this.labelColors.push(color);
        style.fill = color.normal;
        style.textBaseline = "ideographic";
        var field = new pixi_js_1.Text(label, style);
        this._labelField.push(field);
        field.x = x;
        field.y = y;
        field.cacheAsBitmap = true;
        field.interactive = field.interactiveChildren = false;
        this.addChild(field);
        return this._labelField.indexOf(field);
    };
    /**
     * ボタンラベルに表示されている文言を取得する。
     * @returns {string}
     */
    BasicClickButton.prototype.getLabel = function (index) {
        if (!this._labelField)
            return null;
        return this._labelField[index].text;
    };
    /**
     * ボタンラベルの文言を更新する。
     * @param index
     * @param value
     */
    BasicClickButton.prototype.setLabel = function (index, value) {
        if (this._labelField.length === 0) {
            console.warn("BasicButton : " +
                "ボタンラベルが初期化されていませんが、ラベルの文言が指定されました。" +
                "文言を指定する前にラベルの初期化をaddLabel関数で行ってください。");
            return;
        }
        if (this._labelField[index] === undefined) {
            console.warn("BasicButton : " + ("\u6307\u5B9A\u3055\u308C\u305Findex : " + index + "\u306B\u30E9\u30D9\u30EB\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"));
            return;
        }
        var field = this._labelField[index];
        if (field.text === value)
            return;
        pixijs_cache_util_1.PixiJSCacheUtil.updateText({ target: field, text: value });
    };
    BasicClickButton.prototype.getLabelField = function (index) {
        return this._labelField[index];
    };
    Object.defineProperty(BasicClickButton.prototype, "buttonValue", {
        get: function () {
            return this._buttonValue;
        },
        set: function (value) {
            if (this._buttonValue != value) {
                this._buttonValue = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return BasicClickButton;
}(pixi_js_1.Container));
exports.BasicClickButton = BasicClickButton;
