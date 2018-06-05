/* eslint-env jest */
import { hitProbability } from '../src/hitProbability'

const propsFactory = (meleeSkill, ballisticSkill, rerollMelee, rerollBallistic) => {
  return {
    model: {
      melee: {
        skill: meleeSkill
      },
      ballistic: {
        skill: ballisticSkill
      }
    },
    hitReroll: {
      melee: rerollMelee || 'reroll-none',
      ballistic: rerollBallistic || 'reroll-none'
    }
  }
}

const expectedFactory = (expectMelee, expectBallistic) => {
  return {
    melee: expectMelee,
    ballistic: expectBallistic
  }
}

test('function exists', () => {
  expect(hitProbability).toBeDefined()
})

test('hit probability with no reroll', () => {
  const props = propsFactory(3, 3)
  const expected = expectedFactory(0.667, 0.667)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with melee reroll-1', () => {
  const props = propsFactory(3, 3, 'reroll-1')
  const expected = expectedFactory(0.77777, 0.667)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with ballistic reroll-1', () => {
  const props = propsFactory(3, 3, 'reroll-none', 'reroll-1')
  const expected = expectedFactory(0.667, 0.77777)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with melee reroll-all + ball reroll-1', () => {
  const props = propsFactory(3, 3, 'reroll-all', 'reroll-1')
  const expected = expectedFactory(0.8888888, 0.77777)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Error < 2', () => {
  const props = propsFactory(1, 3)

  expect(() => {
    hitProbability(props)
  }).toThrow(RangeError)
})

test('Error > 6', () => {
  const props = propsFactory(3, 7)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('value Error', () => {
  const props = propsFactory('Senf', 4)

  expect(() => {
    hitProbability(props)
  }).toThrowError(TypeError)
})

test('Error > 6 String', () => {
  const props = propsFactory(3, '7')

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('Error > 6', () => {
  const props = propsFactory(3, -7)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('Error > 6', () => {
  const props = propsFactory(3, 0)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})
