import { BasicClickButton } from "./";

export class BasicButtonContext<T = any> {
  public index!: number;

  constructor(public target?: BasicClickButton<T>, public buttonValue?: T) {}
}
