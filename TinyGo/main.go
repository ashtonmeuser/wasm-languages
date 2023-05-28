package main

func main() {}

// This is a Wasm module export
//
//export hello
func hello(a, b int64) int64 {
	println("Hello, TinyGo!")
	return a + b
}
