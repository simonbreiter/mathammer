import { add } from '../src/add'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds 2 + (-2) to equal 0', () => {
  expect(add(2, -2)).toBe(0)
})

test('adds 0 + (-2) to equal -2', () => {
  expect(add(0, -2)).toBe(-2)
})
