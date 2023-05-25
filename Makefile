.PHONY: tinygo grain rust zig

tinygo:
	tinygo build -o TinyGo/main.wasm -target wasi TinyGo/main.go

grain:
	cd Grain && grain compile --release --elide-type-info -o main.wasm main.gr

as:
	npm --prefix ./AssemblyScript/ run build

rust:
	cd Rust && cargo build --target wasm32-wasi

zig:
	cd Zig && zig build-exe -O ReleaseSmall -target wasm32-wasi src/main.zig

inspect:
	@find . -name "main.wasm" -exec echo {} \; -exec wasmer inspect {} \;
