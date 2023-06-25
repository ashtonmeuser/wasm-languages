use std::env;

#[no_mangle]
pub fn args_get() -> i64 {
  let args: Vec<String> = env::args().collect();
  for arg in &args {
    println!("{}", arg);
  }
  return args.len() as i64;
}
