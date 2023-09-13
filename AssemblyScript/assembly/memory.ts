export let offset: usize = heap.alloc(1024); // Allocate some space and export offset

export function store_byte(d: i64, o: i64): void {
  store<u8>(offset + usize(o), u8(d));
}

export function load_byte(o: i64): i64 {
  return load<u8>(offset + usize(o));
}

export function resize(size: i64): i64 {
  offset = heap.realloc(offset, usize(size));
  return offset;
}

export function ascii_sum(): i64 {
  // Godot's default string marshalling prepends a 32-bit (4-byte) string length
  // Following length, Godot encodes the string as ASCII
  // We'll interpret the ASCII as UTF8 since UTF8 is a superset
  // See https://docs.godotengine.org/en/stable/classes/class_streampeer.html#class-streampeer-method-put-string
  let l = load<u32>(offset); // String length
  let s = String.UTF8.decodeUnsafe(offset + 4, l); // Stored string value
  let sum = 0; // Holds sum of ASCII characters
  for (let i: u32 = 0; i < l; i++) sum += s.codePointAt(i); // Compute sum
  return sum;
}
