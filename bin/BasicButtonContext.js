export class BasicButtonContext {
    constructor(value) {
        this.buttonValue = null;
        this.buttonValue = value;
    }
}
export var BasicButtonEventType;
(function (BasicButtonEventType) {
    BasicButtonEventType["SELECTED"] = "button_event_select";
    BasicButtonEventType["UNSELECTED"] = "button_event_unselected";
})(BasicButtonEventType || (BasicButtonEventType = {}));
