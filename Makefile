.PHONY: tinygo grain rust zig runner

RUN?=as

tinygo:
	cd TinyGo && tinygo build -o ../Runner/tinygo.wasm -target wasi main.go

grain:
	cd Grain && grain compile main.gr --release --use-start-section -o ../Runner/grain.wasm

as:
	cd AssemblyScript && npm run build
	cp AssemblyScript/build/main.wasm Runner/as.wasm

rust:
	cd Rust && RUSTFLAGS="-C link-arg=-s -C target-feature=+multivalue" cargo build --release --target wasm32-wasi
	cp Rust/target/wasm32-wasi/release/main.wasm Runner/rust.wasm

zig:
	cd Zig && zig build-exe -O ReleaseSmall -target wasm32-wasi src/main.zig
	cp Zig/main.wasm Runner/zig.wasm

emcc:
	cd Emscripten && emcc main.cpp -O3 -o ../Runner/emcc.wasm

runner:
	cd Runner && cargo run "$(RUN)"

shrink:
	wasm-opt --enable-bulk-memory -O -o Runner/$(RUN).wasm Runner/$(RUN).wasm
