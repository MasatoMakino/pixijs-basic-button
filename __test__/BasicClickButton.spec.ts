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
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);
    // expect(mat.over.visible).toBeTruthy();

    button.emit("pointerout");
    expect(mat.normal.visible).toBeTruthy();

    button.emit("pointerdown");
    expect(mat.down.visible).toBeTruthy();

    //pointerOut後にupした場合はnormal
    button.emit("pointerup");
    expect(mat.normal.visible).toBeTruthy();
    expect(mat.over.visible).toBeFalsy();
  });

  test("change state : mouse over", () => {
    button.emit("pointerover");
    button.emit("pointerdown");
    //pointerOver中にupした場合はover
    button.emit("pointerup");
    expect(mat.normal.visible).toBe(false);
    expect(mat.over.visible).toBe(true);
  });

  test("change state : disable", () => {
    button.disableButton();
    button.emit("pointerover");
    expect(mat.normal.visible).toBe(false);
    expect(mat.disable.visible).toBe(true);
    button.emit("pointerout");
    expect(mat.normal.visible).toBe(false);
    expect(mat.disable.visible).toBe(true);
    button.emit("pointerdown");
    expect(mat.normal.visible).toBe(false);
    expect(mat.disable.visible).toBe(true);
    button.emit("pointerup");
    expect(mat.normal.visible).toBe(false);
    expect(mat.disable.visible).toBe(true);
    button.enableButton();
    expect(mat.normal.visible).toBe(true);
    expect(mat.disable.visible).toBe(false);
  });

  test("change state : frozen", () => {
    button.emit("pointerout");
    button.frozen = true;

    button.emit("pointerover");
    expect(mat.normal.visible).toBe(true);
    expect(mat.over.visible).toBe(false);
    button.emit("pointerout");
    expect(mat.normal.visible).toBe(true);
    button.emit("pointerdown");
    expect(mat.normal.visible).toBe(true);
    expect(mat.down.visible).toBe(false);
    button.emit("pointerup");
    expect(mat.normal.visible).toBe(true);
    expect(mat.disable.visible).toBe(false);

    button.frozen = false;
    expect(mat.normal.visible).toBe(true);
    expect(mat.disable.visible).toBe(false);
  });
});
