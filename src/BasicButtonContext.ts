import { BasicClickButton } from "./";

export class BasicButtonContext<T = any> {
  public index!: number;
  public buttonValue: T = null;
  public target: BasicClickButton<T>;

  constructor(target: BasicClickButton<T>, value: T) {
    this.target = target;
    this.buttonValue = value;
  }
}
