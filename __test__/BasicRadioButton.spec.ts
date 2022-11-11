import { BasicButtonState, BasicRadioButton } from "../src";
import { getTestMaterialSet, testMaterialVisible } from "./TestMaterial";

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

    // @ts-ignore
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);

    button.selectButton();
    testMaterialVisible(mat, BasicButtonState.SELECT);
    //多重セレクトは無視する
    button.selectButton();
    testMaterialVisible(mat, BasicButtonState.SELECT);
  });

  test("select and over", () => {
    resetButton(button);

    // @ts-ignore
    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);

    //セレクト中はdownできない
    button.selectButton();
    // @ts-ignore
    button.emit("pointerdown");
    testMaterialVisible(mat, BasicButtonState.SELECT);
  });

  test("disable", () => {
    resetButton(button);

    button.disableButton();
    button.selectButton();
    testMaterialVisible(mat, BasicButtonState.DISABLE);
  });
});

function resetButton(btn: BasicRadioButton): void {
  btn.deselectButton();
  btn.enableButton();
  // @ts-ignore
  btn.emit("pointerout");
}
