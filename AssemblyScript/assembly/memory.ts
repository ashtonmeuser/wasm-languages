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
