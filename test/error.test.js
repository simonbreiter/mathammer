/* eslint-env jest */
import { errorRange, errorHitType, errorStrength, errorStrengthType, errorToughness, errorToughnessType } from '../src/util/error'

test('Test Hit Value Range', () => {
  expect(() => { errorRange() }).toThrow('Values are not in range, use a value between 2 and 6.')
})

test('Test Hit Value Type', () => {
  expect(() => { errorHitType() }).toThrow('Please use a value between 2 and 6.')
})

test('Negativ Strength Error', () => {
  expect(() => { errorStrength() }).toThrow('Values are not in range, use a value > 0.')
})

test('Test Strength Value Type', () => {
  expect(() => { errorStrengthType() }).toThrow('Please use a value > 0.')
})

test('Negativ Toughness Error', () => {
  expect(() => { errorToughness() }).toThrow('Values are not in range, use a value between 2 and 8.')
})

test('Test Toughness Value Type', () => {
  expect(() => { errorToughnessType() }).toThrow('Please use a value between 2 and 8.')
})
