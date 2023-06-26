// wasi_snapshot_preview1.fd_write
export function fd_write(): void {
  console.log("Test fd_write");
}

// wasi_snapshot_preview1.proc_exit
export function proc_exit(code: i64): void {
  process.exit(i32(code));
}

// wasi_snapshot_preview1.args_get
export function args_get(): i64 {
  for (let i = 0; i < process.argv.length; i++) console.log(process.argv[i]);
  return process.argv.length;
}

// wasi_snapshot_preview1.environ_get
// NOTE: Not supported; environment always empty
export function environ_get(): i64 {
  return process.env.size; // Should always be zero
}

// wasi_snapshot_preview1.random_get
export function random_get(): i64 {
  let buffer = new Uint8Array(1);
  crypto.getRandomValues(buffer);
  return buffer[0];
}

// wasi_snapshot_preview1.clock_time_get
export function clock_time_get(): i64 {
  return Date.now();
}
