const std = @import("std");

pub fn main() !void {}

export fn hello() void {
    const stdout = std.io.getStdOut().writer();
    stdout.print("Hello, Zig!", .{}) catch return;
}
