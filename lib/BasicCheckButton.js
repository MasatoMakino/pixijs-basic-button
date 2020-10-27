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
exports.BasicCheckButton = void 0;
var BasicButtonContext_1 = require("./BasicButtonContext");
var BasicButtonState_1 = require("./BasicButtonState");
var BasicClickButton_1 = require("./BasicClickButton");
/**
 * 選択状態を持つボタンクラス。
 */
var BasicCheckButton = /** @class */ (function (_super) {
    __extends(BasicCheckButton, _super);
    function BasicCheckButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isSelect = false;
        return _this;
    }
    BasicCheckButton.prototype.pressButton = function (evt) {
        if (!this.checkActivity())
            return;
        this.isPressed = true;
        var state = this._isSelect
            ? BasicButtonState_1.BasicButtonState.SELECT_DOWN
            : BasicButtonState_1.BasicButtonState.NORMAL_DOWN;
        this.updateMaterialVisible(state);
    };
    BasicCheckButton.prototype.releaseButton = function (evt) {
        if (!this.checkActivity())
            return;
        if (!this.isPressed)
            return;
        this.isPressed = false;
        if (this._isSelect)
            this.deselectButton(evt);
        else
            this.selectButton(evt);
    };
    BasicCheckButton.prototype.overButton = function (evt) {
        _super.prototype.overButton.call(this, evt);
        if (!this.checkActivity())
            return;
        var state = this._isSelect
            ? BasicButtonState_1.BasicButtonState.SELECT_OVER
            : BasicButtonState_1.BasicButtonState.NORMAL_OVER;
        this.updateMaterialVisible(state);
    };
    BasicCheckButton.prototype.outButton = function (evt) {
        _super.prototype.outButton.call(this, evt);
        if (!this.isDisable) {
            var state = this._isSelect
                ? BasicButtonState_1.BasicButtonState.SELECT
                : BasicButtonState_1.BasicButtonState.NORMAL;
            this.updateMaterialVisible(state);
        }
        if (!this.checkActivity())
            return;
    };
    /**
     * ボタンを選択する。
     * @param evt
     */
    BasicCheckButton.prototype.selectButton = function (evt) {
        if (this._isSelect)
            return;
        this._isSelect = true;
        if (!this.isDisable) {
            var state = this.isOver
                ? BasicButtonState_1.BasicButtonState.SELECT_OVER
                : BasicButtonState_1.BasicButtonState.SELECT;
            this.updateMaterialVisible(state);
        }
        var buttonEvt = new BasicButtonContext_1.BasicButtonContext(this, this.buttonValue);
        this.emit(BasicButtonContext_1.BasicButtonEventType.SELECTED, buttonEvt);
    };
    /**
     * ボタンの選択を解除する。
     * @param { InteractionEvent} evt
     */
    BasicCheckButton.prototype.deselectButton = function (evt) {
        if (!this._isSelect)
            return;
        if (!this.isDisable) {
            var state = this.isOver
                ? BasicButtonState_1.BasicButtonState.NORMAL_OVER
                : BasicButtonState_1.BasicButtonState.NORMAL;
            this.updateMaterialVisible(state);
        }
        this._isSelect = false;
        var buttonEvt = new BasicButtonContext_1.BasicButtonContext(this, this.buttonValue);
        this.emit(BasicButtonContext_1.BasicButtonEventType.UNSELECTED, buttonEvt);
    };
    BasicCheckButton.prototype.enableButton = function () {
        _super.prototype.enableButton.call(this);
        var state = this._isSelect
            ? BasicButtonState_1.BasicButtonState.SELECT
            : BasicButtonState_1.BasicButtonState.NORMAL;
        this.updateMaterialVisible(state);
    };
    BasicCheckButton.prototype.getButtonState = function () {
        if (this.isDisable)
            return BasicButtonState_1.BasicButtonState.DISABLE;
        else {
            if (this._isSelect)
                return BasicButtonState_1.BasicButtonState.SELECT;
            else
                return BasicButtonState_1.BasicButtonState.NORMAL;
        }
    };
    Object.defineProperty(BasicCheckButton.prototype, "selection", {
        /**
         * 選択状態を取得する。
         * @returns {boolean}
         */
        get: function () {
            return this._isSelect;
        },
        enumerable: false,
        configurable: true
    });
    return BasicCheckButton;
}(BasicClickButton_1.BasicClickButton));
exports.BasicCheckButton = BasicCheckButton;
