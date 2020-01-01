/* eslint-env jest */
import { positive } from './positive'

test('function exists', () => {
  expect(positive).toBeDefined()
})

test('positive', () => {
  expect(positive(2)).toBeCloseTo(2)
})

test('negative', () => {
  expect(positive(-2)).toBeCloseTo(2)
})

test('zero', () => {
  expect(positive(0)).toBeCloseTo(0)
})
