import { dice } from "../src/util/dice";

test("function exists", () => {
  expect(dice).toBeDefined();
});

test("dice 2", () => {
  expect(dice(9, 4)).toBeCloseTo(2);
});

test("dice 3", () => {
  expect(dice(4, 3)).toBeCloseTo(3);
});

test("dice 4", () => {
  expect(dice(4, 4)).toBeCloseTo(4);
});

test("dice 5", () => {
  expect(dice(4, 5)).toBeCloseTo(5);
});

test("dice 6", () => {
  expect(dice(4, 8)).toBeCloseTo(6);
});
