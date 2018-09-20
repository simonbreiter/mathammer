import { defineReroll } from "../src/util/defineReroll";

test("function exists", () => {
  expect(defineReroll).toBeDefined();
});

test("undefined", () => {
  expect(defineReroll()).toMatch(/reroll-none/);
});

test("defined-all", () => {
  expect(defineReroll("reroll-all")).toMatch(/reroll-all/);
});

test("defined-1", () => {
  expect(defineReroll("reroll-1")).toMatch(/reroll-1/);
});
