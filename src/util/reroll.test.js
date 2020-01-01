/* eslint-env jest */
import { reroll } from './reroll'

test('function exists', () => {
  expect(reroll).toBeDefined()
})

test('reroll-all', () => {
  expect(reroll('reroll-all', 2, 2, 2, 2)).toBeCloseTo(0)
})

test('reroll-1', () => {
  expect(reroll('reroll-1', 2, 2, 2, 2)).toBeCloseTo(2.333)
})

test('reroll-none', () => {
  expect(reroll('reroll-none', 4, 2, 2, 2)).toBeCloseTo(4)
})
