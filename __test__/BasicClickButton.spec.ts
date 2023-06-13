import { BasicClickButton } from "../src";
import { DummyPointerEvent } from "./DummyPointerEvent";
import { getTestMaterialSet, testMaterialVisible } from "./TestMaterial";

describe("BasicClickButton", () => {
  const mat = getTestMaterialSet();
  const dummyMat = getTestMaterialSet();
  const button = new BasicClickButton<string>(dummyMat);
  button.initMaterial(mat);
  button.buttonValue = "test button value";

  test("constructor", () => {
    expect(button).toBeTruthy();
    expect(button.frozen).toBe(false);
  });

  test("change state : enable", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "normal_over");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "normal");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "normal_down");

    //pointerOut後にupした場合はnormal
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "normal");
  });

  test("change state : mouse over", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    //pointerOver中にupした場合はover
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    expect(mat.normal.visible).toBe(false);
    expect(mat.over?.visible).toBe(true);
  });

  test("change state : disable", () => {
    button.disableButton();
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "disable");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "disable");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "disable");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "disable");
    button.enableButton();
    testMaterialVisible(mat, "normal");
  });

  test("change state : frozen", () => {
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    button.frozen = true;

    DummyPointerEvent.emitDummyPointerEvent(button, "pointerover");
    testMaterialVisible(mat, "normal");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerout");
    testMaterialVisible(mat, "normal");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerdown");
    testMaterialVisible(mat, "normal");
    DummyPointerEvent.emitDummyPointerEvent(button, "pointerup");
    testMaterialVisible(mat, "normal");

    button.frozen = false;
    testMaterialVisible(mat, "normal");
  });
});
