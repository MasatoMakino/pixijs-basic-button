import { BasicButtonState, ButtonMaterialSet } from "../src";
import { getTestMaterialSet } from "./TestMaterial";

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
  });
});

const testMaterialVisible = (
  mat: ButtonMaterialSet,
  state: BasicButtonState
) => {
  expect(mat.normal.visible).toBe(state === BasicButtonState.NORMAL);
  expect(mat.over.visible).toBe(state === BasicButtonState.NORMAL_OVER);
  expect(mat.down.visible).toBe(state === BasicButtonState.NORMAL_DOWN);
  expect(mat.disable.visible).toBe(state === BasicButtonState.DISABLE);

  expect(mat.selectNormal.visible).toBe(state === BasicButtonState.SELECT);
  expect(mat.selectDown.visible).toBe(state === BasicButtonState.SELECT_DOWN);
  expect(mat.selectOver.visible).toBe(state === BasicButtonState.SELECT_OVER);
};
