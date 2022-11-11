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
    // @ts-ignore
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);
    // @ts-ignore
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    // @ts-ignore
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL_DOWN);

    //pointerOut後にupした場合はnormal
    // @ts-ignore
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : mouse over", () => {
    // @ts-ignore
    button.emit("pointerover");
    // @ts-ignore
    button.emit("pointerdown");
    //pointerOver中にupした場合はover
    // @ts-ignore
    button.emit("pointerup");
    expect(mat.normal.visible).toBe(false);
    expect(mat.over.visible).toBe(true);
  });

  test("change state : disable", () => {
    button.disableButton();
    // @ts-ignore
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    // @ts-ignore
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    // @ts-ignore
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    // @ts-ignore
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.DISABLE);
    button.enableButton();
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : frozen", () => {
    // @ts-ignore
    button.emit("pointerout");
    button.frozen = true;

    // @ts-ignore
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    // @ts-ignore
    button.emit("pointerout");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    // @ts-ignore
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    // @ts-ignore
    button.emit("pointerup");
    testMaterialVisible(mat, BasicButtonState.NORMAL);

    button.frozen = false;
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });
});
