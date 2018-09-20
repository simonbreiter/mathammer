import { basicFront } from "../src/util/basicFrontModifier";

test("function exists", () => {
  expect(basicFront).toBeDefined();
});

test("> 0", () => {
  expect(basicFront(3, 4, 5)).toBeCloseTo(4);
});

test("=== 0", () => {
  expect(basicFront(0, 4, 5)).toBeCloseTo(4);
});

test("< 0", () => {
  expect(basicFront(-2, 4, 5)).toBeCloseTo(5);
});
