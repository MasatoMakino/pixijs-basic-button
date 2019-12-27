import { BasicButtonState } from "./BasicButtonState";
import { BasicClickButton } from "./BasicClickButton";
import { DisplayObject, Text } from "pixi.js";
declare class ButtonOptionSet<T> {
    normal: T;
    over?: T;
    down?: T;
    disable?: T;
    selectNormal?: T;
    selectOver?: T;
    selectDown?: T;
    /**
     * stateに対応するオプション値を取り出す
     * @param set
     * @param state
     */
    static getMaterial<T>(set: ButtonOptionSet<T>, state: BasicButtonState): T;
}
/**
 * ボタンの状態に応じて表示されるDisplayObjectを格納するクラス。
 */
export declare class ButtonMaterialSet extends ButtonOptionSet<DisplayObject> {
    selectMarker?: DisplayObject;
    /**
     * ボタン上に状態パーツを配置する
     * @param {BasicClickButton} button
     * @param {ButtonMaterialSet} material
     */
    static addChild(button: BasicClickButton, material: ButtonMaterialSet): void;
    /**
     * この状態セットに含まれるパーツを表示ツリー上から削除する。
     * @param {ButtonMaterialSet} material
     */
    static remove(material: ButtonMaterialSet): void;
    /**
     * 全ての表示パーツを配列として取得する。
     * @param {ButtonMaterialSet} materials
     * @returns {createjs.DisplayObject[]}
     */
    private static getMaterialArray;
    /**
     * 可視状態をstateに合わせて更新する
     * @param {ButtonMaterialSet} material
     * @param {BasicButtonState} state
     */
    static updateVisible(material: ButtonMaterialSet, state: BasicButtonState): void;
    /**
     * 全てのパーツを不可視にする。
     * @param {ButtonMaterialSet} material
     */
    private static invisibleAll;
}
/**
 * テキストラベルの色についてのオプション。
 * 各ボタンのaddLabel関数でインスタンスに渡す。
 */
export declare class ButtonLabelColorSet extends ButtonOptionSet<number> {
    /**
     * ラベル文字色をボタン状態に応じて更新する。
     * @param {Text} field 更新対象ラベル
     * @param {ButtonLabelColorSet} colors 状態文字色セット
     * @param {BasicButtonState} state ボタン状態
     */
    static update(field: Text, colors: ButtonLabelColorSet, state: BasicButtonState): void;
}
export {};
//# sourceMappingURL=ButtonMaterialSet.d.ts.map