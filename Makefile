.PHONY: tinygo grain rust zig

tinygo:
	tinygo build -o TinyGo/main.wasm -target wasi TinyGo/main.go

grain:
	cd Grain && grain compile main.gr --release --use-start-section -o main.wasm

as:
	cd AssemblyScript && npm run build

rust:
	cd Rust && cargo build --target wasm32-wasi

zig:
	cd Zig && zig build-exe -O ReleaseSmall -target wasm32-wasi src/main.zig

inspect:
	@find . -name "main.wasm" -exec echo {} \; -exec wasmer inspect {} \;
