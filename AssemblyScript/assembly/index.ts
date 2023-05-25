import { Vector } from "./vector";

export function add(a: i32, b: i32): i32 {
  const v1 = new Vector(a, 0);
  const v2 = new Vector(0, b);
  // const v3 = v1 + v2; // TS linter error
  return a + b;
}

let top = add(1, 2);

add2(45);

export function add2(a: i32): i32 {
  return a + top;
}

console.log("log test");
console.debug("debug test");
console.error("error test");
console.info("info test");
console.warn("warn test");
