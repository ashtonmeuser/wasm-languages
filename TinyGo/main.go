package main

func main() {
	println("adding two numbers:", add(2, 3))
}

// This is a Wasm module import
//
//export add
func add(x, y int) int

// This is a Wasm module export
//
//export multiply
func multiply(x, y int) int {
	return x * y
}
