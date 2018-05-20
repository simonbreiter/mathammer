import {divide} from '../src/divide'

test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2)
  })

test('divide 5 / 0 equal Error', () => {
    expect(divide(5, 0)).toBe('Error')
  })

test('if a,b is String show Error', () => {
    expect(divide ('eins', 0)).toEqual('Error')
    expect(divide (5, 'eins')).toEqual('Error')
    expect(divide ('eins', 'eins')).toEqual('Error')
  })