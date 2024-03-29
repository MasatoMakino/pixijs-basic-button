import { describe, test, expect, vi } from "vitest";
import { BasicRadioButton, BasicRadioButtonManager } from "../src/index.js";
import { getTestMaterialSet } from "./TestMaterial.js";

describe("BasicRadioButtonManager", () => {
  const spyWarn = vi.spyOn(console, "warn");
  spyWarn.mockImplementation((x) => x);

  const values = [0, "", null, { x: 0 }, undefined];
  const manager = new BasicRadioButtonManager<any>();
  values.forEach((val) => {
    manager.add(generateRadioButton(val));
  });

  test("constructor", () => {
    expect(manager).toBeTruthy();
    expect(manager.selected).toBeUndefined();
    expect(manager.selectedButtonValue).toBeUndefined();
  });

  test("select button", () => {
    resetManager(manager);
    const buttonIndex = 0;
    manager.selected = manager.buttons[buttonIndex];
    expect(manager.selectedButtonValue).toBe(values[buttonIndex]);

    manager.buttons.forEach((btn, index) => {
      expect(btn.selection).toBe(buttonIndex === index);
    });
  });

  test("select button : undefined", () => {
    resetManager(manager);
    manager.selected = undefined;
    expect(manager.selected).toBeUndefined();
  });

  test("select button : unmanaged button", () => {
    resetManager(manager);
    const btn = generateRadioButton(null);
    manager.selected = btn;
    expect(spyWarn).toBeCalled();
    spyWarn.mockClear();
  });

  test("disable all", () => {
    resetManager(manager);
    manager.disableAll();
    manager.buttons.forEach((btn) => {
      expect(btn.getButtonState()).toBe("disable");
    });
  });

  test("enable all", () => {
    resetManager(manager);
    manager.enableAll();
    manager.buttons.forEach((btn) => {
      expect(btn.getButtonState()).toBe("normal");
    });
  });

  test("disable mouse all", () => {
    resetManager(manager);
    manager.disableMouseAll();
    manager.buttons.forEach((btn) => {
      expect(btn.eventMode).toBe("none");
    });
  });

  test("enable mouse all", () => {
    resetManager(manager);
    manager.enableMouseAll();
    manager.buttons.forEach((btn) => {
      expect(btn.eventMode).toBe("static");
    });
  });

  test("get button with value", () => {
    resetManager(manager);
    const buttonIndex = 0;
    const btn = manager.getButton(values[buttonIndex]);
    expect(btn).toBe(manager.buttons[buttonIndex]);
  });

  test("get button : undefined", () => {
    resetManager(manager);
    const btn = manager.getButton({ unexpect: true });
    expect(btn).toBeNull();
  });
});

function generateRadioButton(value?: any): BasicRadioButton {
  const mat = getTestMaterialSet();
  const btn = new BasicRadioButton(mat);
  if (value !== undefined) {
    btn.buttonValue = value;
  }
  return btn;
}

function resetManager(manager: BasicRadioButtonManager) {
  manager.enableAll();
  manager.enableMouseAll();
  manager.deselectAllButtons();
}
