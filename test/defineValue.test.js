import { defineValue } from "../src/util/defineValue";

test("function exists", () => {
  expect(defineValue).toBeDefined();
});

test("undefined", () => {
  expect(defineValue()).toBeCloseTo(0);
});

test("defined-all", () => {
  expect(defineValue(4)).toBeCloseTo(4);
});
