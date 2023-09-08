import { EventEmitter } from "@pixi/utils";
import { BasicButtonContext } from "./index.js";

export interface BasicButtonSelectionEventType<T = any> {
  selected: (e: BasicButtonContext<T>) => void;
  unselected: (e: BasicButtonContext<T>) => void;
}

export class SelectionState<T = any> extends EventEmitter<
  BasicButtonSelectionEventType<T>
> {
  public isSelected: boolean = false;
  constructor(isSelected: boolean = false) {
    super();
    this.isSelected = isSelected;
  }
}
