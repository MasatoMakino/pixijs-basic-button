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
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL_DOWN);

    //pointerOut後にupした場合はnormal
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
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
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.enableButton();
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : frozen", () => {
    button.emit("pointerout");
    button.frozen = true;

    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);

    button.frozen = false;
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });
});
