#include <stdio.h>
#include <emscripten.h>

#define EXTERN extern "C"

int main() {
  return 0;
}

EMSCRIPTEN_KEEPALIVE EXTERN
int64_t hello(int64_t x, int64_t y) {
  printf("Hello, Emscripten!\n");
  return x + y;
}
