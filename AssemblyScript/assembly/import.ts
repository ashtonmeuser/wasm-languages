declare function test_import(i: i32): void

export function callback(): void {
  test_import(123);
}
