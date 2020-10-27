/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo.js":
/*!*************************!*\
  !*** ./demoSrc/demo.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.Application({\n    width: 800,\n    height: 600\n  });\n  document.body.appendChild(app.view);\n  initButton(app.stage);\n  initCheckButton(app.stage);\n  initRadioButton(app.stage);\n  initRadioMarkerButton(app.stage);\n};\n\nconst initButton = stage => {\n  const button = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicClickButton(getMaterialSet());\n  button.x = button.y = 36;\n  const index = addLabel(button);\n  button.setLabel(index, \"Abcあ\");\n  stage.addChild(button);\n};\n\nconst initCheckButton = stage => {\n  const buttonSelect = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicCheckButton(getMaterialSet());\n  buttonSelect.y = 36;\n  buttonSelect.x = 36 + 128 + 36;\n  addLabel(buttonSelect);\n  buttonSelect.buttonValue = \"__button__val__test\";\n  stage.addChild(buttonSelect);\n  buttonSelect.on(_lib__WEBPACK_IMPORTED_MODULE_0__.BasicButtonEventType.SELECTED, e => {\n    console.log(e);\n  });\n};\n\nconst initRadioButton = stage => {\n  const manager = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicRadioButtonManager();\n  const n = 4;\n\n  for (let i = 0; i < n; i++) {\n    const buttonRadio = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicRadioButton(getMaterialSet());\n    buttonRadio.y = 128;\n    buttonRadio.x = 36 + (128 + 36) * i;\n    addLabel(buttonRadio);\n    buttonRadio.buttonValue = \"__button__val__test__\" + i;\n    stage.addChild(buttonRadio);\n    manager.add(buttonRadio);\n  }\n\n  manager.selected = manager.buttons[0];\n  manager.on(_lib__WEBPACK_IMPORTED_MODULE_0__.BasicButtonEventType.SELECTED, e => {\n    console.log(e);\n  });\n};\n\nconst initRadioMarkerButton = stage => {\n  const manager = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicRadioButtonManager();\n  const n = 4;\n\n  for (let i = 0; i < n; i++) {\n    const buttonRadio = new _lib__WEBPACK_IMPORTED_MODULE_0__.BasicRadioButton(getMaterialSet(true));\n    buttonRadio.y = 196;\n    buttonRadio.x = 36 + (128 + 36) * i;\n    addLabel(buttonRadio);\n    buttonRadio.buttonValue = \"__button__val__test__\" + i;\n    stage.addChild(buttonRadio);\n    manager.add(buttonRadio);\n  }\n\n  manager.selected = manager.buttons[0];\n  manager.on(_lib__WEBPACK_IMPORTED_MODULE_0__.BasicButtonEventType.SELECTED, e => {\n    console.log(e);\n  });\n};\n\nconst getMaterialSet = (hasMarker = false) => {\n  const mat = {\n    normal: getRect(0xff00ff),\n    over: getRect(0xff66ff),\n    down: getRect(0xffffff),\n    selectNormal: getRect(0x330033),\n    selectOver: getRect(0x442244),\n    selectDown: getRect(0x333333)\n  };\n\n  if (hasMarker) {\n    console.log(hasMarker);\n    mat.selectMarker = getMarker();\n  }\n\n  return mat;\n};\n\nconst getRect = color => {\n  const gra = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.Graphics();\n  gra.beginFill(color).drawRect(0, 0, 128, 32).endFill();\n  return gra;\n};\n\nconst addLabel = btn => {\n  return btn.addLabel(0, 0, \"Abcdefghijklあ\", {\n    fontSize: 16\n  }, {\n    normal: 0xffffff,\n    over: 0xff00ff,\n    down: 0x000000,\n    selectNormal: 0xffff33,\n    selectOver: 0x00ff00,\n    selectDown: 0x999999\n  });\n};\n\nconst getMarker = () => {\n  const g = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.Graphics();\n  g.beginFill(0xff0000).drawCircle(0, 0, 8).endFill();\n  return g;\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack://pixijs-basic-button/./demoSrc/demo.js?");

/***/ }),

/***/ "./lib/BasicButtonContext.js":
/*!***********************************!*\
  !*** ./lib/BasicButtonContext.js ***!
  \***********************************/
/*! flagged exports */
/*! export BasicButtonContext [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BasicButtonEventType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicButtonEventType = exports.BasicButtonContext = void 0;\n\nvar BasicButtonContext =\n/** @class */\nfunction () {\n  function BasicButtonContext(target, value) {\n    this.buttonValue = null;\n    this.target = target;\n    this.buttonValue = value;\n  }\n\n  return BasicButtonContext;\n}();\n\nexports.BasicButtonContext = BasicButtonContext;\nvar BasicButtonEventType;\n\n(function (BasicButtonEventType) {\n  BasicButtonEventType[\"SELECTED\"] = \"button_event_select\";\n  BasicButtonEventType[\"UNSELECTED\"] = \"button_event_unselected\";\n})(BasicButtonEventType = exports.BasicButtonEventType || (exports.BasicButtonEventType = {}));\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicButtonContext.js?");

/***/ }),

/***/ "./lib/BasicButtonState.js":
/*!*********************************!*\
  !*** ./lib/BasicButtonState.js ***!
  \*********************************/
/*! flagged exports */
/*! export BasicButtonState [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicButtonState = void 0;\n/**\n * ボタン状態を表す定数\n */\n\nvar BasicButtonState;\n\n(function (BasicButtonState) {\n  BasicButtonState[\"NORMAL\"] = \"normal\";\n  BasicButtonState[\"NORMAL_OVER\"] = \"normal_over\";\n  BasicButtonState[\"NORMAL_DOWN\"] = \"normal_down\";\n  BasicButtonState[\"DISABLE\"] = \"disable\";\n  BasicButtonState[\"SELECT\"] = \"select\";\n  BasicButtonState[\"SELECT_OVER\"] = \"select_over\";\n  BasicButtonState[\"SELECT_DOWN\"] = \"select_down\";\n})(BasicButtonState = exports.BasicButtonState || (exports.BasicButtonState = {}));\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicButtonState.js?");

/***/ }),

/***/ "./lib/BasicCheckButton.js":
/*!*********************************!*\
  !*** ./lib/BasicCheckButton.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicCheckButton = void 0;\n\nvar BasicButtonContext_1 = __webpack_require__(/*! ./BasicButtonContext */ \"./lib/BasicButtonContext.js\");\n\nvar BasicButtonState_1 = __webpack_require__(/*! ./BasicButtonState */ \"./lib/BasicButtonState.js\");\n\nvar BasicClickButton_1 = __webpack_require__(/*! ./BasicClickButton */ \"./lib/BasicClickButton.js\");\n/**\n * 選択状態を持つボタンクラス。\n */\n\n\nvar BasicCheckButton =\n/** @class */\nfunction (_super) {\n  __extends(BasicCheckButton, _super);\n\n  function BasicCheckButton() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n\n    _this._isSelect = false;\n    return _this;\n  }\n\n  BasicCheckButton.prototype.pressButton = function (evt) {\n    if (!this.checkActivity()) return;\n    this.isPressed = true;\n    var state = this._isSelect ? BasicButtonState_1.BasicButtonState.SELECT_DOWN : BasicButtonState_1.BasicButtonState.NORMAL_DOWN;\n    this.updateMaterialVisible(state);\n  };\n\n  BasicCheckButton.prototype.releaseButton = function (evt) {\n    if (!this.checkActivity()) return;\n    if (!this.isPressed) return;\n    this.isPressed = false;\n    if (this._isSelect) this.deselectButton(evt);else this.selectButton(evt);\n  };\n\n  BasicCheckButton.prototype.overButton = function (evt) {\n    _super.prototype.overButton.call(this, evt);\n\n    if (!this.checkActivity()) return;\n    var state = this._isSelect ? BasicButtonState_1.BasicButtonState.SELECT_OVER : BasicButtonState_1.BasicButtonState.NORMAL_OVER;\n    this.updateMaterialVisible(state);\n  };\n\n  BasicCheckButton.prototype.outButton = function (evt) {\n    _super.prototype.outButton.call(this, evt);\n\n    if (!this.isDisable) {\n      var state = this._isSelect ? BasicButtonState_1.BasicButtonState.SELECT : BasicButtonState_1.BasicButtonState.NORMAL;\n      this.updateMaterialVisible(state);\n    }\n\n    if (!this.checkActivity()) return;\n  };\n  /**\n   * ボタンを選択する。\n   * @param evt\n   */\n\n\n  BasicCheckButton.prototype.selectButton = function (evt) {\n    if (this._isSelect) return;\n    this._isSelect = true;\n\n    if (!this.isDisable) {\n      var state = this.isOver ? BasicButtonState_1.BasicButtonState.SELECT_OVER : BasicButtonState_1.BasicButtonState.SELECT;\n      this.updateMaterialVisible(state);\n    }\n\n    var buttonEvt = new BasicButtonContext_1.BasicButtonContext(this, this.buttonValue);\n    this.emit(BasicButtonContext_1.BasicButtonEventType.SELECTED, buttonEvt);\n  };\n  /**\n   * ボタンの選択を解除する。\n   * @param { InteractionEvent} evt\n   */\n\n\n  BasicCheckButton.prototype.deselectButton = function (evt) {\n    if (!this._isSelect) return;\n\n    if (!this.isDisable) {\n      var state = this.isOver ? BasicButtonState_1.BasicButtonState.NORMAL_OVER : BasicButtonState_1.BasicButtonState.NORMAL;\n      this.updateMaterialVisible(state);\n    }\n\n    this._isSelect = false;\n    var buttonEvt = new BasicButtonContext_1.BasicButtonContext(this, this.buttonValue);\n    this.emit(BasicButtonContext_1.BasicButtonEventType.UNSELECTED, buttonEvt);\n  };\n\n  BasicCheckButton.prototype.enableButton = function () {\n    _super.prototype.enableButton.call(this);\n\n    var state = this._isSelect ? BasicButtonState_1.BasicButtonState.SELECT : BasicButtonState_1.BasicButtonState.NORMAL;\n    this.updateMaterialVisible(state);\n  };\n\n  BasicCheckButton.prototype.getButtonState = function () {\n    if (this.isDisable) return BasicButtonState_1.BasicButtonState.DISABLE;else {\n      if (this._isSelect) return BasicButtonState_1.BasicButtonState.SELECT;else return BasicButtonState_1.BasicButtonState.NORMAL;\n    }\n  };\n\n  Object.defineProperty(BasicCheckButton.prototype, \"selection\", {\n    /**\n     * 選択状態を取得する。\n     * @returns {boolean}\n     */\n    get: function () {\n      return this._isSelect;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return BasicCheckButton;\n}(BasicClickButton_1.BasicClickButton);\n\nexports.BasicCheckButton = BasicCheckButton;\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicCheckButton.js?");

/***/ }),

/***/ "./lib/BasicClickButton.js":
/*!*********************************!*\
  !*** ./lib/BasicClickButton.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicClickButton = void 0;\n\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\nvar pixijs_cache_util_1 = __webpack_require__(/*! pixijs-cache-util */ \"./node_modules/pixijs-cache-util/esm/index.js\");\n\nvar BasicButtonState_1 = __webpack_require__(/*! ./BasicButtonState */ \"./lib/BasicButtonState.js\");\n\nvar ButtonMaterialSet_1 = __webpack_require__(/*! ./ButtonMaterialSet */ \"./lib/ButtonMaterialSet.js\");\n/**\n * 基本ボタンクラス。\n * 選択状態を持たず、クリックした時点で結果が反映されるタイプのボタンです。\n *\n * 正常動作のために、stageにenableMouseOverを実行する必要があります。\n * stageのインスタンス化のタイミングで実行してください。\n *  stage.enableMouseOver();\n */\n\n\nvar BasicClickButton =\n/** @class */\nfunction (_super) {\n  __extends(BasicClickButton, _super);\n  /**\n   * コンストラクタ\n   * @param {ButtonMaterialSet} materials 状態セット\n   */\n\n\n  function BasicClickButton(materials) {\n    var _this = _super.call(this) || this;\n\n    _this.isDisable = false; //ボタンが使用不可状態か否か\n\n    _this.isPressed = false; //ボタンが押されているか否か\n\n    _this.isOver = false; //マウスオーバーしているか否か\n\n    /**\n     * ボタンの凍結状態。\n     * trueに設定すると、ボタンの状態と外見を維持したまま、マウス操作を無視する。\n     */\n\n    _this._frozen = false;\n    _this._buttonValue = null; //このボタンに割り当てられた値\n\n    /*ボタンラベル*/\n\n    _this._labelField = []; //ラベル表示用のテキストフィールド\n\n    _this.labelColors = []; //ラベルの色のセット。各状態のラベルの文字色を格納する。\n\n    _this.interactive = true;\n    _this.buttonMode = true;\n\n    _this.setMouseEvents();\n\n    if (materials) _this.initMaterial(materials);\n    return _this;\n  }\n  /**\n   * ボタンに対するマウスハンドリングを開始する。\n   */\n\n\n  BasicClickButton.prototype.setMouseEvents = function () {\n    var _this = this;\n\n    this.on(\"pointerdown\", function (e) {\n      _this.pressButton(e);\n    });\n    this.on(\"pointerup\", function (e) {\n      _this.releaseButton(e);\n    });\n    this.on(\"pointerover\", function (e) {\n      _this.overButton(e);\n    });\n    this.on(\"pointerout\", function (e) {\n      _this.outButton(e);\n    });\n  };\n  /**\n   * ボタンに状態マテリアルを設定する。\n   * @param materials\n   */\n\n\n  BasicClickButton.prototype.initMaterial = function (materials) {\n    var _this = this; //すでにmaterialが設定済みの場合、以前のマテリアルを削除する。\n\n\n    if (this.material) {\n      ButtonMaterialSet_1.ButtonMaterialSet.remove(this.material);\n      this.material = null;\n    }\n\n    this.material = materials;\n    ButtonMaterialSet_1.ButtonMaterialSet.addChild(this, materials);\n    this.updateMaterialVisible(this.getButtonState()); //テキストラベルがあったら最前線に。\n\n    this._labelField.forEach(function (label) {\n      _this.removeChild(label);\n\n      _this.addChild(label);\n    });\n  };\n  /**\n   * 状態表示およびラベル文字色を、状態に応じて更新する。\n   * @param state\n   */\n\n\n  BasicClickButton.prototype.updateMaterialVisible = function (state) {\n    var _this = this;\n\n    ButtonMaterialSet_1.ButtonMaterialSet.updateVisible(this.material, state);\n\n    this._labelField.forEach(function (label, index) {\n      ButtonMaterialSet_1.ButtonLabelColorSet.update(label, _this.labelColors[index], state);\n    });\n  };\n  /**\n   * ボタン上でマウスダウンした際の処理。\n   * 状態と表示を更新する。\n   * @param evt\n   */\n\n\n  BasicClickButton.prototype.pressButton = function (evt) {\n    if (!this.checkActivity()) return;\n    this.isPressed = true;\n    this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL_DOWN);\n  };\n  /**\n   * ボタン上でマウスアップした際の処理。\n   * 状態と表示を更新する。\n   * @param {createjs.InteractionEvent} evt\n   */\n\n\n  BasicClickButton.prototype.releaseButton = function (evt) {\n    if (!this.checkActivity()) return;\n    if (!this.isPressed) return;\n    this.isPressed = false;\n    var state = this.isOver ? BasicButtonState_1.BasicButtonState.NORMAL_OVER : BasicButtonState_1.BasicButtonState.NORMAL;\n    this.updateMaterialVisible(state);\n  };\n  /**\n   * ボタンにマウスオーバーした際の処理。\n   * 状態と表示を更新する。\n   * @param {createjs.InteractionEvent} evt\n   */\n\n\n  BasicClickButton.prototype.overButton = function (evt) {\n    this.isOver = true;\n    if (!this.checkActivity()) return;\n    this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL_OVER);\n  };\n  /**\n   * ボタンからマウスアウトした際の処理。\n   * 状態と表示を更新する。\n   * @param evt\n   */\n\n\n  BasicClickButton.prototype.outButton = function (evt) {\n    this.isOver = false;\n    this.isPressed = false;\n    if (!this.checkActivity()) return;\n    this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL);\n  };\n  /**\n   * ボタンを非活性化する\n   */\n\n\n  BasicClickButton.prototype.disableButton = function () {\n    this.isDisable = true;\n    this.updateMouseEnabled();\n    this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.DISABLE);\n  };\n  /**\n   * ボタンを活性化する\n   */\n\n\n  BasicClickButton.prototype.enableButton = function () {\n    this.isDisable = false;\n    this.updateMouseEnabled();\n    this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.NORMAL);\n  };\n\n  Object.defineProperty(BasicClickButton.prototype, \"frozen\", {\n    get: function () {\n      return this._frozen;\n    },\n    set: function (value) {\n      this._frozen = value;\n      this.updateMouseEnabled();\n    },\n    enumerable: false,\n    configurable: true\n  });\n\n  BasicClickButton.prototype.updateMouseEnabled = function () {\n    this.interactive = !this.isDisable && !this._frozen;\n  };\n  /**\n   * 現在のボタンの有効、無効状態を取得する\n   * @return    ボタンが有効か否か\n   */\n\n\n  BasicClickButton.prototype.checkActivity = function () {\n    return !this.isDisable && !this._frozen && this.interactive;\n  };\n  /**\n   * 現在のボタンの状態を取得する\n   * @returns {BasicButtonState}\n   */\n\n\n  BasicClickButton.prototype.getButtonState = function () {\n    if (this.isDisable) return BasicButtonState_1.BasicButtonState.DISABLE;else return BasicButtonState_1.BasicButtonState.NORMAL;\n  };\n  /**\n   * ボタンラベルを追加する。\n   * @param x ラベル位置\n   * @param y ラベル位置\n   * @param label ラベルに表示する文言\n   * @param style\n   * @param color\n   * @return テキストフィールドのインデックス値\n   */\n\n\n  BasicClickButton.prototype.addLabel = function (x, y, label, style, color) {\n    this.labelColors.push(color);\n    style.fill = color.normal;\n    style.textBaseline = \"ideographic\";\n    var field = new pixi_js_1.Text(label, style);\n\n    this._labelField.push(field);\n\n    field.x = x;\n    field.y = y;\n    field.cacheAsBitmap = true;\n    field.interactive = field.interactiveChildren = false;\n    this.addChild(field);\n    return this._labelField.indexOf(field);\n  };\n  /**\n   * ボタンラベルに表示されている文言を取得する。\n   * @returns {string}\n   */\n\n\n  BasicClickButton.prototype.getLabel = function (index) {\n    if (!this._labelField) return null;\n    return this._labelField[index].text;\n  };\n  /**\n   * ボタンラベルの文言を更新する。\n   * @param index\n   * @param value\n   */\n\n\n  BasicClickButton.prototype.setLabel = function (index, value) {\n    if (this._labelField.length === 0) {\n      console.warn(\"BasicButton : \" + \"ボタンラベルが初期化されていませんが、ラベルの文言が指定されました。\" + \"文言を指定する前にラベルの初期化をaddLabel関数で行ってください。\");\n      return;\n    }\n\n    if (this._labelField[index] === undefined) {\n      console.warn(\"BasicButton : \" + (\"\\u6307\\u5B9A\\u3055\\u308C\\u305Findex : \" + index + \"\\u306B\\u30E9\\u30D9\\u30EB\\u304C\\u5B58\\u5728\\u3057\\u307E\\u305B\\u3093\\u3002\"));\n      return;\n    }\n\n    var field = this._labelField[index];\n    if (field.text === value) return;\n    pixijs_cache_util_1.PixiJSCacheUtil.updateText({\n      target: field,\n      text: value\n    });\n  };\n\n  BasicClickButton.prototype.getLabelField = function (index) {\n    return this._labelField[index];\n  };\n\n  Object.defineProperty(BasicClickButton.prototype, \"buttonValue\", {\n    get: function () {\n      return this._buttonValue;\n    },\n    set: function (value) {\n      if (this._buttonValue != value) {\n        this._buttonValue = value;\n      }\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return BasicClickButton;\n}(pixi_js_1.Container);\n\nexports.BasicClickButton = BasicClickButton;\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicClickButton.js?");

/***/ }),

/***/ "./lib/BasicRadioButton.js":
/*!*********************************!*\
  !*** ./lib/BasicRadioButton.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicRadioButton = void 0;\n\nvar BasicButtonContext_1 = __webpack_require__(/*! ./BasicButtonContext */ \"./lib/BasicButtonContext.js\");\n\nvar BasicButtonState_1 = __webpack_require__(/*! ./BasicButtonState */ \"./lib/BasicButtonState.js\");\n\nvar BasicCheckButton_1 = __webpack_require__(/*! ./BasicCheckButton */ \"./lib/BasicCheckButton.js\");\n/**\n * 排他的に選択可能なボタン。ラジオボタンのセットはBasicRadioButtonManagerで設定する。\n */\n\n\nvar BasicRadioButton =\n/** @class */\nfunction (_super) {\n  __extends(BasicRadioButton, _super);\n\n  function BasicRadioButton() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  /**\n   * ボタンを選択する。\n   * @param evt\n   */\n\n\n  BasicRadioButton.prototype.selectButton = function (evt) {\n    if (this._isSelect) return;\n    this._isSelect = true;\n\n    if (!this.isDisable) {\n      //ラジオボタンは選択した時点で操作不可となる。そのためSELECT_OVERには遷移しない。\n      this.updateMaterialVisible(BasicButtonState_1.BasicButtonState.SELECT);\n    }\n\n    var buttonEvt = new BasicButtonContext_1.BasicButtonContext(this, this.buttonValue);\n    this.emit(BasicButtonContext_1.BasicButtonEventType.SELECTED, buttonEvt);\n  };\n  /**\n   * 現在のボタンの有効、無効状態を取得する。\n   * ラジオボタンは選択中も操作が無効となる。\n   * @return    ボタンが有効か否か\n   */\n\n\n  BasicRadioButton.prototype.checkActivity = function () {\n    if (this._isSelect) return false;\n    return _super.prototype.checkActivity.call(this);\n  };\n\n  return BasicRadioButton;\n}(BasicCheckButton_1.BasicCheckButton);\n\nexports.BasicRadioButton = BasicRadioButton;\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicRadioButton.js?");

/***/ }),

/***/ "./lib/BasicRadioButtonManager.js":
/*!****************************************!*\
  !*** ./lib/BasicRadioButtonManager.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:16-20 */
/*! CommonJS bailout: this is used directly at 27:22-26 */
/*! CommonJS bailout: this is used directly at 40:25-29 */
/*! CommonJS bailout: this is used directly at 49:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BasicRadioButtonManager = void 0;\n\nvar BasicButtonContext_1 = __webpack_require__(/*! ./BasicButtonContext */ \"./lib/BasicButtonContext.js\");\n\nvar PIXI = __importStar(__webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\"));\n/**\n * 排他的に選択されるボタンを制御するクラスです。\n *\n * メンバーのBasicRadioButtonが変更されると、このクラスに変更内容が通知されます。\n * このクラスは変更通知に応じ、他のBasicRadioButtonオブジェクトの選択状態を変更します。\n * また、このクラスは変更内容をEventとして発信します。\n *\n * 利用する際には以下のような手順でインスタンス化してください。\n *\n * let btn:BasicRadioButton = new BasicRadioButton(...);\n * let manager:BasicRadioButtonManager = new BasicRadioButtonManager(); //インスタンス化\n * manager.addButton(btn);\n * manager.selected = btn; //デフォルトで選択されているボタンを指定\n */\n\n\nvar BasicRadioButtonManager =\n/** @class */\nfunction (_super) {\n  __extends(BasicRadioButtonManager, _super);\n\n  function BasicRadioButtonManager() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n\n    _this._buttons = [];\n    _this._selected = null;\n    return _this;\n  }\n  /**\n   * ラジオボタンのグループにボタンを追加する。\n   * @param {BasicRadioButton} button\n   */\n\n\n  BasicRadioButtonManager.prototype.add = function (button) {\n    var _this = this;\n\n    this._buttons.push(button);\n\n    button.on(BasicButtonContext_1.BasicButtonEventType.SELECTED, function (e) {\n      var ctx = e;\n\n      _this.deselectOthers(ctx.target);\n    });\n  };\n\n  Object.defineProperty(BasicRadioButtonManager.prototype, \"selected\", {\n    /**\n     * 選択済みのボタンを取得する。\n     * 選択されていない場合はnullを返す。\n     * @returns {BasicRadioButton | null}\n     */\n    get: function () {\n      return this._selected;\n    },\n\n    /**\n     * ボタンを選択する。\n     * nullを引数に取ると全ての選択を解除する。\n     * @param {BasicRadioButton} selectedButton\n     */\n    set: function (selectedButton) {\n      this._selected = selectedButton;\n\n      if (selectedButton == null) {\n        this.deselectAllButtons();\n        return;\n      } //選択されたボタンがこのインスタンスの管理下か確認する。\n\n\n      var index = this._buttons.indexOf(selectedButton);\n\n      if (index === -1) {\n        console.warn(\"BasicRadioButtonManager : \" + \"選択対象として指定されたボタンが、BasicRadioButtonManagerの管理下にありません。\" + \"指定を行う前にaddButton関数でボタンをBasicRadioButtonManagerに登録してください。\");\n        return;\n      }\n\n      selectedButton.selectButton();\n    },\n    enumerable: false,\n    configurable: true\n  });\n  /**\n   * 指定されたボタン以外の選択を解除し、BasicRadioButtonManagerからSELECTEDイベントを発行する。\n   * @param {BasicRadioButton} selectedButton\n   * @param {boolean} isDispatchSelectEvent\n   */\n\n  BasicRadioButtonManager.prototype.deselectOthers = function (selectedButton, isDispatchSelectEvent) {\n    if (isDispatchSelectEvent === void 0) {\n      isDispatchSelectEvent = true;\n    }\n\n    this._selected = selectedButton;\n\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n\n      if (btn != selectedButton) {\n        btn.deselectButton();\n      }\n    }\n\n    if (isDispatchSelectEvent) {\n      var evt = new BasicButtonContext_1.BasicButtonContext(this._selected, this._selected.buttonValue);\n      evt.index = this._buttons.indexOf(this._selected);\n      this.emit(BasicButtonContext_1.BasicButtonEventType.SELECTED, evt);\n    }\n  };\n  /**\n   * 管理下の全てのボタンの選択を解除する。\n   */\n\n\n  BasicRadioButtonManager.prototype.deselectAllButtons = function () {\n    this._selected = null;\n\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n      btn.deselectButton();\n    }\n\n    var evt = new BasicButtonContext_1.BasicButtonContext(null, null);\n    this.emit(BasicButtonContext_1.BasicButtonEventType.UNSELECTED, evt);\n  };\n\n  BasicRadioButtonManager.prototype.disableAll = function () {\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n      btn.disableButton();\n    }\n  };\n\n  BasicRadioButtonManager.prototype.disableMouseAll = function () {\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n      btn.interactive = false;\n    }\n  };\n\n  BasicRadioButtonManager.prototype.enableAll = function () {\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n      btn.enableButton();\n    }\n  };\n\n  BasicRadioButtonManager.prototype.enableMouseAll = function () {\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n      btn.interactive = true;\n    }\n  };\n\n  Object.defineProperty(BasicRadioButtonManager.prototype, \"selectedButtonValue\", {\n    /**\n     * 現在選択されているボタンのbuttonValueを取得する。\n     * 選択されたボタンがない場合はnullを返す。\n     * @returns {any}\n     */\n    get: function () {\n      var btn = this.selected;\n\n      if (btn) {\n        return btn.buttonValue;\n      }\n\n      return null;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(BasicRadioButtonManager.prototype, \"buttons\", {\n    /**\n     * このインスタンスで管理をしているラジオボタンの配列を取得する。\n     * @returns {BasicRadioButton[]}\n     */\n    get: function () {\n      return this._buttons;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  /**\n   * buttonValueを検索キーとして、該当するボタンを取得する。\n   * 該当するボタンがない場合はnullを返す。\n   *\n   * @param value\n   * @returns {BasicRadioButton | null}\n   */\n\n  BasicRadioButtonManager.prototype.getButton = function (value) {\n    for (var _i = 0, _a = this._buttons; _i < _a.length; _i++) {\n      var btn = _a[_i];\n\n      if (btn.buttonValue === value && btn.buttonValue != null) {\n        return btn;\n      }\n    }\n\n    return null;\n  };\n\n  return BasicRadioButtonManager;\n}(PIXI.utils.EventEmitter);\n\nexports.BasicRadioButtonManager = BasicRadioButtonManager;\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/BasicRadioButtonManager.js?");

/***/ }),

/***/ "./lib/ButtonMaterialSet.js":
/*!**********************************!*\
  !*** ./lib/ButtonMaterialSet.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:16-20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ButtonLabelColorSet = exports.ButtonMaterialSet = void 0;\n\nvar BasicButtonState_1 = __webpack_require__(/*! ./BasicButtonState */ \"./lib/BasicButtonState.js\");\n\nvar pixijs_cache_util_1 = __webpack_require__(/*! pixijs-cache-util */ \"./node_modules/pixijs-cache-util/esm/index.js\");\n\nvar ButtonOptionSet =\n/** @class */\nfunction () {\n  function ButtonOptionSet() {}\n  /**\n   * stateに対応するオプション値を取り出す\n   * @param set\n   * @param state\n   */\n\n\n  ButtonOptionSet.getMaterial = function (set, state) {\n    var _a, _b, _c, _d, _e, _f;\n\n    switch (state) {\n      case BasicButtonState_1.BasicButtonState.DISABLE:\n        return (_a = set.disable) !== null && _a !== void 0 ? _a : set.normal;\n\n      case BasicButtonState_1.BasicButtonState.NORMAL_OVER:\n        return (_b = set.over) !== null && _b !== void 0 ? _b : set.normal;\n\n      case BasicButtonState_1.BasicButtonState.NORMAL_DOWN:\n        return (_c = set.down) !== null && _c !== void 0 ? _c : set.normal;\n\n      case BasicButtonState_1.BasicButtonState.SELECT:\n        return (_d = set.selectNormal) !== null && _d !== void 0 ? _d : set.normal;\n\n      case BasicButtonState_1.BasicButtonState.SELECT_OVER:\n        return (_e = set.selectOver) !== null && _e !== void 0 ? _e : set.normal;\n\n      case BasicButtonState_1.BasicButtonState.SELECT_DOWN:\n        return (_f = set.selectDown) !== null && _f !== void 0 ? _f : set.normal;\n\n      default:\n        return set.normal;\n    }\n  };\n\n  return ButtonOptionSet;\n}();\n/**\n * ボタンの状態に応じて表示されるDisplayObjectを格納するクラス。\n */\n\n\nvar ButtonMaterialSet =\n/** @class */\nfunction (_super) {\n  __extends(ButtonMaterialSet, _super);\n\n  function ButtonMaterialSet() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  /**\n   * ボタン上に状態パーツを配置する\n   * @param {BasicClickButton} button\n   * @param {ButtonMaterialSet} material\n   */\n\n\n  ButtonMaterialSet.addChild = function (button, material) {\n    this.remove(material);\n    var materials = this.getMaterialArray(material);\n\n    for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {\n      var mat = materials_1[_i];\n      if (mat != null) button.addChild(mat);\n    }\n  };\n  /**\n   * この状態セットに含まれるパーツを表示ツリー上から削除する。\n   * @param {ButtonMaterialSet} material\n   */\n\n\n  ButtonMaterialSet.remove = function (material) {\n    var materials = this.getMaterialArray(material);\n\n    for (var _i = 0, materials_2 = materials; _i < materials_2.length; _i++) {\n      var mat = materials_2[_i];\n      if (mat && mat.parent) mat.parent.removeChild(mat);\n    }\n  };\n  /**\n   * 全ての表示パーツを配列として取得する。\n   * @param {ButtonMaterialSet} materials\n   * @returns {createjs.DisplayObject[]}\n   */\n\n\n  ButtonMaterialSet.getMaterialArray = function (materials) {\n    return [materials.normal, materials.over, materials.down, materials.disable, materials.selectNormal, materials.selectOver, materials.selectDown, materials.selectMarker];\n  };\n  /**\n   * 可視状態をstateに合わせて更新する\n   * @param {ButtonMaterialSet} material\n   * @param {BasicButtonState} state\n   */\n\n\n  ButtonMaterialSet.updateVisible = function (material, state) {\n    this.invisibleAll(material);\n    this.getMaterial(material, state).visible = true;\n\n    if (material.selectMarker) {\n      var isSelect = state === BasicButtonState_1.BasicButtonState.SELECT || state === BasicButtonState_1.BasicButtonState.SELECT_OVER || state === BasicButtonState_1.BasicButtonState.SELECT_DOWN;\n      material.selectMarker.visible = isSelect;\n    }\n  };\n  /**\n   * 全てのパーツを不可視にする。\n   * @param {ButtonMaterialSet} material\n   */\n\n\n  ButtonMaterialSet.invisibleAll = function (material) {\n    var materials = this.getMaterialArray(material);\n\n    for (var _i = 0, materials_3 = materials; _i < materials_3.length; _i++) {\n      var mat = materials_3[_i];\n      if (mat != null) mat.visible = false;\n    }\n  };\n\n  return ButtonMaterialSet;\n}(ButtonOptionSet);\n\nexports.ButtonMaterialSet = ButtonMaterialSet;\n/**\n * テキストラベルの色についてのオプション。\n * 各ボタンのaddLabel関数でインスタンスに渡す。\n */\n\nvar ButtonLabelColorSet =\n/** @class */\nfunction (_super) {\n  __extends(ButtonLabelColorSet, _super);\n\n  function ButtonLabelColorSet() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n  /**\n   * ラベル文字色をボタン状態に応じて更新する。\n   * @param {Text} field 更新対象ラベル\n   * @param {ButtonLabelColorSet} colors 状態文字色セット\n   * @param {BasicButtonState} state ボタン状態\n   */\n\n\n  ButtonLabelColorSet.update = function (field, colors, state) {\n    if (field == null) return;\n    pixijs_cache_util_1.PixiJSCacheUtil.updateText({\n      target: field,\n      style: {\n        fill: this.getMaterial(colors, state)\n      }\n    });\n  };\n\n  return ButtonLabelColorSet;\n}(ButtonOptionSet);\n\nexports.ButtonLabelColorSet = ButtonLabelColorSet;\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/ButtonMaterialSet.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 3:22-26 */
/*! CommonJS bailout: this is used directly at 16:19-23 */
/*! CommonJS bailout: exports is used directly at 24:44-51 */
/*! CommonJS bailout: exports is used directly at 26:46-53 */
/*! CommonJS bailout: exports is used directly at 28:44-51 */
/*! CommonJS bailout: exports is used directly at 30:45-52 */
/*! CommonJS bailout: exports is used directly at 32:44-51 */
/*! CommonJS bailout: exports is used directly at 34:44-51 */
/*! CommonJS bailout: exports is used directly at 36:51-58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./BasicClickButton */ \"./lib/BasicClickButton.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./BasicButtonContext */ \"./lib/BasicButtonContext.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./BasicButtonState */ \"./lib/BasicButtonState.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./ButtonMaterialSet */ \"./lib/ButtonMaterialSet.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./BasicCheckButton */ \"./lib/BasicCheckButton.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./BasicRadioButton */ \"./lib/BasicRadioButton.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./BasicRadioButtonManager */ \"./lib/BasicRadioButtonManager.js\"), exports);\n\n//# sourceURL=webpack://pixijs-basic-button/./lib/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpixijs_basic_button"] = self["webpackChunkpixijs_basic_button"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;