# Wasm Languages

Experiments with several languages targeting WebAssembly

## Building Modules

The Makefile defines targets for several languages that can be run via, for example, `make tinygo`.

## Running Modules

Included in the _Runner_ directory is a simple program using the Wasmtime runtime.
Build and run the runner via `make runner`.
You can specify the Wasm module that will be loaded by the runner via, for example, `make runner RUN=tinygo`.
