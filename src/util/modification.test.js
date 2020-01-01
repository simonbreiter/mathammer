/* eslint-env jest */
import { modification } from './modification'

test('function exists', () => {
  expect(modification).toBeDefined()
})

test('modification', () => {
  expect(modification(4, 1)).toBeCloseTo(3)
})

test('modification <2', () => {
  expect(modification(4, 3)).toBeCloseTo(2)
})

test('modification negative', () => {
  expect(modification(4, 5)).toBeCloseTo(2)
})
