import { utils } from "@pixi/core";
import { BasicButtonContext } from "./BasicButtonContext";

export interface BasicButtonSelectionEventType {
  selected: BasicButtonContext;
  unselected: BasicButtonContext;
}

export class SelectionState extends utils.EventEmitter<BasicButtonSelectionEventType> {
  public isSelected: boolean = false;
  constructor(isSelected: boolean = false) {
    super();
    this.isSelected = isSelected;
  }
}
