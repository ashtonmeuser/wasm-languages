export class Vector {
  constructor(public x: f64, public y: f64) { }

  @operator("+")
  static add(a: Vector, b: Vector): Vector {
    return new Vector(a.x + b.x, a.y + b.y);
  }

  @operator("-")
  static sub(a: Vector, b: Vector): Vector {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  @operator("*")
  static mul(a: Vector, b: Vector): Vector {
    return new Vector(a.x * b.x, a.y * b.y);
  }

  @operator("/")
  static div(a: Vector, b: Vector): Vector {
    return new Vector(a.x / b.x, a.y / b.y);
  }

  @operator("==")
  static equals(a: Vector, b: Vector): bool {
    return a.x == b.x && a.y == b.y;
  }

  @operator("!=")
  static notEquals(a: Vector, b: Vector): bool {
    return a.x != b.x && a.y != b.y;
  }
}
