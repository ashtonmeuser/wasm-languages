const std = @import("std");

pub fn main() !void {}

export fn hello(a: i64, b: i64) i64 {
    const stdout = std.io.getStdOut().writer();
    stdout.print("Hello, Zig!", .{}) catch return 1;
    return a + b;
}
