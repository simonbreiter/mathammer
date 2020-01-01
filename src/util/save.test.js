/* eslint-env jest */
import { save } from './save'

test('function exists', () => {
  expect(save).toBeDefined()
})

test('no save', () => {
  expect(save(6, 1, 0, 0)).toBeCloseTo(1)
})

test('no inv save', () => {
  expect(save(3, 2, 1, 0)).toBeCloseTo(0.5)
})

test('inv save is higher', () => {
  expect(save(3, 2, 1, 6)).toBeCloseTo(0.5)
})

test('inv save', () => {
  expect(save(5, 0, 0, 4)).toBeCloseTo(0.5)
})
