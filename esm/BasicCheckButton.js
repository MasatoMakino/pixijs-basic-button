import { BasicButtonContext, BasicButtonEventType } from "./BasicButtonContext";
import { BasicButtonState } from "./BasicButtonState";
import { BasicClickButton } from "./BasicClickButton";
/**
 * 選択状態を持つボタンクラス。
 */
export class BasicCheckButton extends BasicClickButton {
    constructor() {
        super(...arguments);
        this._isSelect = false;
    }
    pressButton(evt) {
        if (!this.checkActivity())
            return;
        this.isPressed = true;
        const state = this._isSelect
            ? BasicButtonState.SELECT_DOWN
            : BasicButtonState.NORMAL_DOWN;
        this.updateMaterialVisible(state);
    }
    releaseButton(evt) {
        if (!this.checkActivity())
            return;
        if (!this.isPressed)
            return;
        this.isPressed = false;
        if (this._isSelect)
            this.deselectButton(evt);
        else
            this.selectButton(evt);
    }
    overButton(evt) {
        super.overButton(evt);
        if (!this.checkActivity())
            return;
        const state = this._isSelect
            ? BasicButtonState.SELECT_OVER
            : BasicButtonState.NORMAL_OVER;
        this.updateMaterialVisible(state);
    }
    outButton(evt) {
        super.outButton(evt);
        if (!this.isDisable) {
            const state = this._isSelect
                ? BasicButtonState.SELECT
                : BasicButtonState.NORMAL;
            this.updateMaterialVisible(state);
        }
        if (!this.checkActivity())
            return;
    }
    /**
     * ボタンを選択する。
     * @param evt
     */
    selectButton(evt) {
        if (this._isSelect)
            return;
        this._isSelect = true;
        if (!this.isDisable) {
            const state = this.isOver
                ? BasicButtonState.SELECT_OVER
                : BasicButtonState.SELECT;
            this.updateMaterialVisible(state);
        }
        const buttonEvt = new BasicButtonContext(this, this.buttonValue);
        this.emit(BasicButtonEventType.SELECTED, buttonEvt);
    }
    /**
     * ボタンの選択を解除する。
     * @param { InteractionEvent} evt
     */
    deselectButton(evt) {
        if (!this._isSelect)
            return;
        if (!this.isDisable) {
            const state = this.isOver
                ? BasicButtonState.NORMAL_OVER
                : BasicButtonState.NORMAL;
            this.updateMaterialVisible(state);
        }
        this._isSelect = false;
        const buttonEvt = new BasicButtonContext(this, this.buttonValue);
        this.emit(BasicButtonEventType.UNSELECTED, buttonEvt);
    }
    enableButton() {
        super.enableButton();
        const state = this._isSelect
            ? BasicButtonState.SELECT
            : BasicButtonState.NORMAL;
        this.updateMaterialVisible(state);
    }
    getButtonState() {
        if (this.isDisable)
            return BasicButtonState.DISABLE;
        else {
            if (this._isSelect)
                return BasicButtonState.SELECT;
            else
                return BasicButtonState.NORMAL;
        }
    }
    /**
     * 選択状態を取得する。
     * @returns {boolean}
     */
    get selection() {
        return this._isSelect;
    }
}
