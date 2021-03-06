import { BasicButtonState, ButtonMaterialSet } from "../src";
import {
  getTestMaterialSet,
  getTestMaterialSetNormalOnly,
  testMaterialVisible,
} from "./TestMaterial";

describe("ButtonMaterialSet", () => {
  const mat = getTestMaterialSet();

  test("constructor", () => {
    expect(mat).toBeTruthy();
  });

  test("change state", () => {
    ButtonMaterialSet.updateVisible(mat, BasicButtonState.NORMAL);
    testMaterialVisible(mat, BasicButtonState.NORMAL);
    ButtonMaterialSet.updateVisible(mat, BasicButtonState.NORMAL_OVER);
    testMaterialVisible(mat, BasicButtonState.NORMAL_OVER);
    ButtonMaterialSet.updateVisible(mat, BasicButtonState.NORMAL_DOWN);
    testMaterialVisible(mat, BasicButtonState.NORMAL_DOWN);

    ButtonMaterialSet.updateVisible(mat, BasicButtonState.SELECT);
    testMaterialVisible(mat, BasicButtonState.SELECT);
    ButtonMaterialSet.updateVisible(mat, BasicButtonState.SELECT_OVER);
    testMaterialVisible(mat, BasicButtonState.SELECT_OVER);
    ButtonMaterialSet.updateVisible(mat, BasicButtonState.SELECT_DOWN);
    testMaterialVisible(mat, BasicButtonState.SELECT_DOWN);

    ButtonMaterialSet.updateVisible(mat, BasicButtonState.DISABLE);
    testMaterialVisible(mat, BasicButtonState.DISABLE);

    ButtonMaterialSet.updateVisible(mat, "unexpected value" as any);
    testMaterialVisible(mat, BasicButtonState.NORMAL);
  });

  test("change state : normal only", () => {
    const matNormalOnly = getTestMaterialSetNormalOnly();

    ButtonMaterialSet.updateVisible(matNormalOnly, BasicButtonState.NORMAL);
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(
      matNormalOnly,
      BasicButtonState.NORMAL_OVER
    );
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(
      matNormalOnly,
      BasicButtonState.NORMAL_DOWN
    );
    expect(matNormalOnly.normal.visible).toBe(true);

    ButtonMaterialSet.updateVisible(matNormalOnly, BasicButtonState.DISABLE);
    expect(matNormalOnly.normal.visible).toBe(true);

    ButtonMaterialSet.updateVisible(matNormalOnly, BasicButtonState.SELECT);
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(
      matNormalOnly,
      BasicButtonState.SELECT_OVER
    );
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(
      matNormalOnly,
      BasicButtonState.SELECT_DOWN
    );
    expect(matNormalOnly.normal.visible).toBe(true);
  });
});
