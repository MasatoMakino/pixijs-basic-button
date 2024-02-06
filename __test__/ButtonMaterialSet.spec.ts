import { describe, test, expect } from "vitest";
import { ButtonMaterialSet } from "../src/index.js";
import {
  getTestMaterialSet,
  getTestMaterialSetNormalOnly,
  testMaterialVisible,
} from "./TestMaterial.js";

describe("ButtonMaterialSet", () => {
  const mat = getTestMaterialSet();

  test("constructor", () => {
    expect(mat).toBeTruthy();
  });

  test("change state", () => {
    ButtonMaterialSet.updateVisible(mat, "normal");
    testMaterialVisible(mat, "normal");
    ButtonMaterialSet.updateVisible(mat, "normal_over");
    testMaterialVisible(mat, "normal_over");
    ButtonMaterialSet.updateVisible(mat, "normal_down");
    testMaterialVisible(mat, "normal_down");

    ButtonMaterialSet.updateVisible(mat, "select");
    testMaterialVisible(mat, "select");
    ButtonMaterialSet.updateVisible(mat, "select_over");
    testMaterialVisible(mat, "select_over");
    ButtonMaterialSet.updateVisible(mat, "select_down");
    testMaterialVisible(mat, "select_down");

    ButtonMaterialSet.updateVisible(mat, "disable");
    testMaterialVisible(mat, "disable");

    ButtonMaterialSet.updateVisible(mat, "unexpected value" as any);
    testMaterialVisible(mat, "normal");
  });

  test("change state : normal only", () => {
    const matNormalOnly = getTestMaterialSetNormalOnly();

    ButtonMaterialSet.updateVisible(matNormalOnly, "normal");
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(matNormalOnly, "normal_over");
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(matNormalOnly, "normal_down");
    expect(matNormalOnly.normal.visible).toBe(true);

    ButtonMaterialSet.updateVisible(matNormalOnly, "disable");
    expect(matNormalOnly.normal.visible).toBe(true);

    ButtonMaterialSet.updateVisible(matNormalOnly, "select");
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(matNormalOnly, "select_over");
    expect(matNormalOnly.normal.visible).toBe(true);
    ButtonMaterialSet.updateVisible(matNormalOnly, "select_down");
    expect(matNormalOnly.normal.visible).toBe(true);
  });
});
