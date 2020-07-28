import {
  BasicButtonState,
  BasicRadioButton,
  BasicRadioButtonManager,
} from "../src";
import { getTestMaterialSet } from "./TestMaterial";

describe("BasicRadioButtonManager", () => {
  const spyWarn = jest.spyOn(console, "warn");
  spyWarn.mockImplementation((x) => x);

  const values = [0, "", null, { x: 0 }, undefined];
  const manager = new BasicRadioButtonManager();
  values.forEach((val) => {
    manager.add(getRadioButton(val));
  });

  test("constructor", () => {
    expect(manager).toBeTruthy();
    expect(manager.selected).toBeNull();
    expect(manager.selectedButtonValue).toBeNull();
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

  test("select button : null", () => {
    resetManager(manager);
    manager.selected = null;
    expect(manager.selected).toBeNull();
  });

  test("select button : undefined", () => {
    resetManager(manager);
    manager.selected = undefined;
    expect(manager.selected).toBeNull();
  });

  test("select button : unmanaged button", () => {
    resetManager(manager);
    const btn = getRadioButton(null);
    manager.selected = btn;
    expect(spyWarn).toBeCalled();
    spyWarn.mockClear();
  });

  test("disable all", () => {
    resetManager(manager);
    manager.disableAll();
    manager.buttons.forEach((btn) => {
      expect(btn.getButtonState()).toBe(BasicButtonState.DISABLE);
    });
  });

  test("enable all", () => {
    resetManager(manager);
    manager.enableAll();
    manager.buttons.forEach((btn) => {
      expect(btn.getButtonState()).toBe(BasicButtonState.NORMAL);
    });
  });

  test("disable mouse all", () => {
    resetManager(manager);
    manager.disableMouseAll();
    manager.buttons.forEach((btn) => {
      expect(btn.interactive).toBe(false);
    });
  });

  test("enable mouse all", () => {
    resetManager(manager);
    manager.enableMouseAll();
    manager.buttons.forEach((btn) => {
      expect(btn.interactive).toBe(true);
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

function getRadioButton(value?: any): BasicRadioButton {
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
