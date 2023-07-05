#[no_mangle]
pub fn multi_return(a: i64, b: i64) -> (i64, i64) {
  (b, a)
}
