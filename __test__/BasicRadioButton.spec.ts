import { BasicButtonState, BasicRadioButton } from "../src";
import { getTestMaterialSet, testMaterialVisible } from "./TestMaterial";
import { DummyPointerEvent } from "./DummyPointerEvent";

describe("BasicRadioButton", () => {
  const mat = getTestMaterialSet();
  const button = new BasicRadioButton(mat);

  test("constructor", () => {
    expect(button).toBeTruthy();
    expect(button.frozen).toBe(false);
    expect(button.selection).toBeFalsy();
  });
  test("select", () => {
    resetButton(button);

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "normal_over");

    button.selectButton();
    testMaterialVisible(mat, "select");
    //多重セレクトは無視する
    button.selectButton();
    testMaterialVisible(mat, "select");
  });

  test("select and over", () => {
    resetButton(button);

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "normal_over");

    //セレクト中はdownできない
    button.selectButton();

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "select");
  });

  test("disable", () => {
    resetButton(button);

    button.disableButton();
    button.selectButton();
    testMaterialVisible(mat, "disable");
  });
});

function resetButton(button: BasicRadioButton): void {
  button.deselectButton();
  button.enableButton();

  DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
}
