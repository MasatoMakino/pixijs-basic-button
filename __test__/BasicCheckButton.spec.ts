import { BasicButtonState, BasicCheckButton } from "../src";
import { testMaterialVisible } from "./ButtonMaterialSet.spec";
import { getTestMaterialSet } from "./TestMaterial";

describe("BasicCheckButton", () => {
  const mat = getTestMaterialSet();
  const button = new BasicCheckButton(mat);

  test("constructor", () => {
    expect(button).toBeTruthy();
    expect(button.frozen).toBe(false);
    expect(button.selection).toBeFalsy();
  });

  test("change state : enable + deselect", () => {
    button.deselectButton();
    expect(button.getButtonState()).toBe(BasicButtonState.NORMAL);

    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);

    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL_DOWN);

    //pointerOut後にupした場合はBasicButtonState.SELECT
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.SELECT);

    //pointerUpが多重しても状態は変わらない
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.SELECT);
  });

  test("change state : enable + select", () => {
    button.selectButton();
    expect(button.getButtonState()).toBe(BasicButtonState.SELECT);

    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.SELECT_OVER);
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.SELECT);

    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.SELECT_DOWN);

    //pointerOut後にupした場合はBasicButtonState.SELECT
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : disable", () => {
    button.deselectButton();
    button.disableButton();
    expect(button.getButtonState()).toBe(BasicButtonState.DISABLE);

    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.DISABLE);

    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.DISABLE);

    //pointerOut後にupした場合はBasicButtonState.SELECT
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
  });

  test("change state : disable to enable", () => {
    button.enableButton();
    expect(button.getButtonState()).toBe(BasicButtonState.NORMAL);

    button.selectButton();
    button.enableButton();
    expect(button.getButtonState()).toBe(BasicButtonState.SELECT);

    button.deselectButton();
  });

  test("change state : deselect to select to deselect", () => {
    button.deselectButton();
    expect(button.getButtonState()).toBe(BasicButtonState.NORMAL);

    button.emit("pointerover");
    button.deselectButton();
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);

    button.selectButton();
    testMaterialVisible(mat, BasicButtonState.SELECT_OVER);

    button.emit("pointerout");
    button.deselectButton();
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });
});
