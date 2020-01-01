import { notDefined } from './notDefined'

test('function exists', () => {
  expect(notDefined).toBeDefined()
})

test('5', () => {
  expect(notDefined(5)).toBeCloseTo(5)
})

test('value Error', () => {
  expect(() => {
    notDefined(props)
  }).toThrowError(ReferenceError)
})
