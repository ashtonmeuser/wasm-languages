use std::env;
use std::thread::sleep;
use std::time::{Duration, Instant};
use wasmtime::*;
use wasmtime_wasi::{sync::WasiCtxBuilder};

fn main() {
    let args: Vec<String> = env::args().collect();
    let mut name = "as";
    if args.len() > 1 { name = &args[1]; }
    let filename = format!("./{}.wasm", name);

    let engine = Engine::default();

    let module = Module::from_file(&engine, filename).unwrap();

    let mut linker = Linker::new(&engine);

    wasmtime_wasi::add_to_linker(&mut linker, |cx| cx).unwrap();

    let wasi = WasiCtxBuilder::new().inherit_stdio().build();

    let mut store = Store::new(&engine, wasi);

    let link = linker.instantiate(&mut store, &module).unwrap();

    let hello_fn = link.get_typed_func::<(), ()>(&mut store, "hello").unwrap();

    let interval = Duration::from_secs(1);
    let mut next_time = Instant::now() + interval;

    loop {
        hello_fn.call(&mut store, ()).unwrap();
        sleep(next_time - Instant::now());
        next_time += interval;
    }
}
