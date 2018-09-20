import { probability } from "../src/util/probabilityFunction";

test("function exists", () => {
  expect(probability).toBeDefined();
});

test("negativ", () => {
  expect(probability(3, -2)).toBeCloseTo(0);
});

test("positiv", () => {
  expect(probability(3, 5)).toBeCloseTo(15);
});
