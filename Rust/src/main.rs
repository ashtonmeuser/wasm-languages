pub fn main() {}

#[no_mangle]
pub fn hello(a: i64, b: i64) -> i64 {
  println!("Hello, Rust!");
  return a + b;
}

