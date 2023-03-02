import { DummyPointerEvent } from "./DummyPointerEvent";
import { BasicCheckButton } from "../src";
import { getTestMaterialSet, testMaterialVisible } from "./TestMaterial";

describe("BasicCheckButton", () => {
  const mat = getTestMaterialSet();
  const button = new BasicCheckButton<string>(mat);
  button.buttonValue = "test check button value";

  test("constructor", () => {
    expect(button).toBeTruthy();
    expect(button.frozen).toBe(false);
    expect(button.selection).toBeFalsy();
  });

  test("change state : enable + deselect", () => {
    button.deselectButton();
    expect(button.getButtonState()).toBe("normal");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "normal_over");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "normal");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "normal_down");

    //pointerOut後にupした場合はBasicButtonState.SELECT
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "select");

    //pointerUpが多重しても状態は変わらない
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "select");
  });

  test("change state : enable + select", () => {
    button.selectButton();
    expect(button.getButtonState()).toBe("select");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "select_over");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "select");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "select_down");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "normal");
  });

  test("change state : disable", () => {
    button.deselectButton();
    button.disableButton();
    expect(button.getButtonState()).toBe("disable");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "disable");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "disable");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "disable");

    //pointerOut後にupした場合はBasicButtonState.SELECT
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "disable");
  });

  test("change state : disable to enable", () => {
    button.enableButton();
    expect(button.getButtonState()).toBe("normal");

    button.selectButton();
    button.enableButton();
    expect(button.getButtonState()).toBe("select");

    button.deselectButton();
  });

  test("change state : deselect to select to deselect", () => {
    button.deselectButton();
    expect(button.getButtonState()).toBe("normal");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    button.deselectButton();
    testMaterialVisible(mat, "normal_over");

    button.selectButton();
    testMaterialVisible(mat, "select_over");

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    button.deselectButton();
    testMaterialVisible(mat, "normal");
  });
});
