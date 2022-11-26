import { DummyPointerEvent } from "./DummyPointerEvent";
import { BasicButtonState, BasicClickButton } from "../src";
import { getTestMaterialSet, testMaterialVisible } from "./TestMaterial";

describe("BasicClickButton", () => {
  const mat = getTestMaterialSet();
  const dummyMat = getTestMaterialSet();
  const button = new BasicClickButton(dummyMat);
  button.initMaterial(mat);

  test("constructor", () => {
    expect(button).toBeTruthy();
    expect(button.frozen).toBe(false);
  });

  test("change state : enable", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL_DOWN);

    //pointerOut後にupした場合はnormal
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : mouse over", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    //pointerOver中にupした場合はover
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    expect(mat.normal.visible).toBe(false);
    expect(mat.over.visible).toBe(true);
  });

  test("change state : disable", () => {
    button.disableButton();
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.enableButton();
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : frozen", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    button.frozen = true;

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);

    button.frozen = false;
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });
});
