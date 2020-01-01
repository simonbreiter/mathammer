/* eslint-env jest */
import { errorValueInRange, errorStringValue, errorValue } from './error'

test('Test Hit Value Range', () => {
  expect(() => {
    errorValueInRange()
  }).toThrow('Please use a Value in range.')
})

test('Test Hit Value Type', () => {
  expect(() => {
    errorStringValue()
  }).toThrow('Please insert a Number, not a String')
})

test('Value', () => {
  expect(() => {
    errorValue()
  }).toThrow('Please insert a value')
})
