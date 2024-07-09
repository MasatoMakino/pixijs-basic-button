import { describe, test, expect, vi } from "vitest";
import { TextStyle, TextStyleOptions } from "pixi.js";
import { BasicClickButton } from "../src/index.js";
import { getTestLabelColorSet, getTestMaterialSet } from "./TestMaterial.js";

describe("BasicClickButton", () => {
  const mat = getTestMaterialSet();
  const labelColor = getTestLabelColorSet();
  const button = new BasicClickButton(mat);

  let index: number;

  const spyWarn = vi.spyOn(console, "warn");
  spyWarn.mockImplementation((x) => x);

  test("before init", () => {
    button.setLabel(Number.MAX_VALUE, "updated label");
    expect(spyWarn).toBeCalled();
    spyWarn.mockClear();
  });

  test("init label", () => {
    index = button.addLabel(0, 0, "test", new TextStyle(), labelColor);
    expect(button.getLabel(index)).toBeTruthy();
  });

  test("init label with options", () => {
    index = button.addLabel(0, 0, "test", { fill: 0xff0000 }, labelColor);
    expect(button.getLabel(index)).toBeTruthy();
  });

  test("set label text", () => {
    const labelString = "updated label";
    button.setLabel(index, labelString);
    expect(button.getLabel(index)).toBe(labelString);
  });

  test("set not exists label text", () => {
    button.setLabel(Number.MAX_VALUE, "updated label");
    expect(spyWarn).toBeCalled();
    spyWarn.mockClear();
  });
});
