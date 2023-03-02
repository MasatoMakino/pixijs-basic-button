import { EventEmitter } from "@pixi/utils";
import { BasicButtonContext } from "./BasicButtonContext";

export interface BasicButtonSelectionEventType {
  selected: (e: BasicButtonContext) => void;
  unselected: (e: BasicButtonContext) => void;
}

export class SelectionState extends EventEmitter<BasicButtonSelectionEventType> {
  public isSelected: boolean = false;
  constructor(isSelected: boolean = false) {
    super();
    this.isSelected = isSelected;
  }
}
