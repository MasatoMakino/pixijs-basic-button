import { BasicRadioButton, BasicRadioButtonManager } from "../src";
import { getTestMaterialSet } from "./TestMaterial";

describe("BasicRadioButtonManager", () => {
  const values = [0, "", null, { x: 0 }];
  const manager = new BasicRadioButtonManager();
  values.forEach((val) => {
    manager.add(getRadioButton(val));
  });

  test("constructor", () => {
    expect(manager).toBeTruthy();
    expect(manager.selected).toBeNull();
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
  manager.deselectAllButtons();
}
