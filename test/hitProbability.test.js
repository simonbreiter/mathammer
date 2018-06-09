/* eslint-env jest */
import { hitProbability } from '../src/hitProbability'
import { propsFactory } from '../src/util/propsFactory'

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
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.667, 0.667)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with melee reroll-1', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    hitRerollMelee: 'reroll-1'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.77777, 0.667)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with ballistic reroll-1', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    hitRerollBallistic: 'reroll-1'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.667, 0.77777)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit probability with melee reroll-all + ball reroll-1', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    hitRerollMelee: 'reroll-all',
    hitRerollBallistic: 'reroll-1'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.8888888, 0.77777)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Error < 2', () => {
  const config = {
    meleeSkill: 1,
    ballisticSkill: 3
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrow(RangeError)
})

test('Error > 6', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 7
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('value Error', () => {
  const config = {
    meleeSkill: 'Senf',
    ballisticSkill: 3
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrowError(TypeError)
})

test('Error > 6 String', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: '7'
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('Error > 6', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: -7
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})

test('Error = 0', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 0
  }
  const props = propsFactory(config)

  expect(() => {
    hitProbability(props)
  }).toThrowError(RangeError)
})
