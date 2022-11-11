export class DummyPointerEvent {
  static generate() {
    return {
      pointerId: 0,
      width: 0,
      height: 0,
      isPrimary: false,
      pointerType: "",
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      detail: 0,
    };
  }
}
