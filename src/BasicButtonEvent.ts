export class BasicButtonContext {
  public index!: number;
  public buttonValue: any = null;

  constructor(value: any) {
    this.buttonValue = value;
  }
}

export enum BasicButtonEventType {
  SELECTED = "button_event_select",
  UNSELECTED = "button_event_unselected"
}
