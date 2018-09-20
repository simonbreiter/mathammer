/* eslint-env jest */
import {
  errorRange,
  errorHitType,
  errorStrength,
  errorStrengthType,
  errorToughness,
  errorToughnessType,
  errorSave,
  errorSaveType,
  errorAP,
  errorAPType,
  errorDamage,
  errorDamageType,
  errorValue
} from "../src/util/error";

test("Test Hit Value Range", () => {
  expect(() => {
    errorRange();
  }).toThrow("Values are not in range, use a value between 2 and 6.");
});

test("Test Hit Value Type", () => {
  expect(() => {
    errorHitType();
  }).toThrow("Please use a value between 2 and 6.");
});

test("Negativ Strength Error", () => {
  expect(() => {
    errorStrength();
  }).toThrow("Values are not in range, use a value > 0.");
});

test("Test Strength Value Type", () => {
  expect(() => {
    errorStrengthType();
  }).toThrow("Please use a value > 0.");
});

test("Negativ Toughness Error", () => {
  expect(() => {
    errorToughness();
  }).toThrow("Values are not in range, use a value between 2 and 8.");
});

test("Test Toughness Value Type", () => {
  expect(() => {
    errorToughnessType();
  }).toThrow("Please use a value between 2 and 8.");
});

test("Save + invulnerable Safe Error", () => {
  expect(() => {
    errorSave();
  }).toThrow("Values are not in range, use a value between 2 and 6.");
});

test("Test Save + invulnerable Safe Value Type", () => {
  expect(() => {
    errorSaveType();
  }).toThrow("Please use a value between 2 and 6.");
});

test("Test AP Error", () => {
  expect(() => {
    errorAP();
  }).toThrow("Values are not in range, use a value between 0 and 6.");
});

test("Test AP Type", () => {
  expect(() => {
    errorAPType();
  }).toThrow("Please use a value between 0 and 6.");
});
test("Test DMG Error", () => {
  expect(() => {
    errorDamage();
  }).toThrow("Values are not in range, use a value between 1 and 6.");
});

test("Test DMG Type", () => {
  expect(() => {
    errorDamageType();
  }).toThrow("Please use a value between 1 and 6.");
});

test("Value", () => {
  expect(() => {
    errorValue();
  }).toThrow("Please insert a value");
});
