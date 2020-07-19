"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicButtonEventType = exports.BasicButtonContext = void 0;
var BasicButtonContext = /** @class */ (function () {
    function BasicButtonContext(target, value) {
        this.buttonValue = null;
        this.target = target;
        this.buttonValue = value;
    }
    return BasicButtonContext;
}());
exports.BasicButtonContext = BasicButtonContext;
var BasicButtonEventType;
(function (BasicButtonEventType) {
    BasicButtonEventType["SELECTED"] = "button_event_select";
    BasicButtonEventType["UNSELECTED"] = "button_event_unselected";
})(BasicButtonEventType = exports.BasicButtonEventType || (exports.BasicButtonEventType = {}));
