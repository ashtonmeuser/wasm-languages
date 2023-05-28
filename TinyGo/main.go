package main

func main() {}

// This is a Wasm module export
//
//export hello
func hello() {
	println("Hello, TinyGo!")
}
