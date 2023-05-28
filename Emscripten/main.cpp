#include <stdio.h>
#include <emscripten.h>

#define EXTERN extern "C"

int main() {
  return 0;
}

EMSCRIPTEN_KEEPALIVE EXTERN
void hello() {
  printf("Hello, Emscripten!\n");
}
