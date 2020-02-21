/* eslint-env jest */
import { errorNotInRange } from './error'

test('Test Hit Value Range', () => {
  expect(() => {
    errorNotInRange()
  }).toThrow('Please use a Value in range.')
})
