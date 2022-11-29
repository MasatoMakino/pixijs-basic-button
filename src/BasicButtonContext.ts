import { BasicClickButton } from "./BasicClickButton";

export class BasicButtonContext {
  public index!: number;
  public buttonValue: any = null;
  public target: BasicClickButton;

  constructor(target: BasicClickButton, value: any) {
    this.target = target;
    this.buttonValue = value;
  }
}
