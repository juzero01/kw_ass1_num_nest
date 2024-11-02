const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test("prime(7) should be true", () => {
    expect(lib.prime(7)).toBe(true);
});
test("prime(10) should be false", () => {
    expect(lib.prime(10)).toBe(false);
});
test("prime(1) should be false", () => {
    expect(lib.prime(1)).toBe(false);
});

// Test for factorial function
test("factorial(5) should be 120", () => {
    expect(lib.factorial(5)).toBe(120);
});
test("factorial(0) should be 1", () => {
    expect(lib.factorial(0)).toBe(1);
});
test("factorial(16) should be -1 (as it's over the limit)", () => {
    expect(lib.factorial(16)).toBe(-1);
});