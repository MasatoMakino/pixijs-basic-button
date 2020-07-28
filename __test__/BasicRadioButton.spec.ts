import { BasicButtonState, BasicRadioButton } from "../src";
import { testMaterialVisible } from "./ButtonMaterialSet.spec";
import { getTestMaterialSet } from "./TestMaterial";

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

    button.emit("pointerover");
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);

    //セレクト中はdownできない
    button.selectButton();
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
  btn.emit("pointerout");
}
