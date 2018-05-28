import { errorRange, errorType } from '../src/util/error'

test('RangeError', () => {
    expect(() => { errorRange() }).toThrow(RangeError)
})

test('TypeError', () => {
  expect(() => { errorType() }).toThrow(TypeError)
})