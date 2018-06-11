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

test('-1 hit and +1 hit modifier(eg. heavy weapon moving) with no reroll', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    meleeHitModifier: -1,
    ballisticHitModifier: 1
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.5, 0.8333)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier(eg. heavy weapon moving) reroll-all', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 4,
    meleeHitModifier: -1,
    ballisticHitModifier: -1,
    hitRerollMelee: 'reroll-all',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.6667, 0.5)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier(eg. heavy weapon moving) reroll-1', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 4,
    meleeHitModifier: -1,
    ballisticHitModifier: -1,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-1'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.5833, 0.3888)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier(eg. heavy weapon moving) with no reroll and 6', () => {
  const config = {
    meleeSkill: 6,
    ballisticSkill: 6,
    meleeHitModifier: -1,
    ballisticHitModifier: -2
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('-1 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 6,
    ballisticSkill: 6,
    meleeHitModifier: -1,
    ballisticHitModifier: -1,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('1 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    meleeHitModifier: 1,
    ballisticHitModifier: 1,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.8055, 0.9444)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 2 1 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 2,
    ballisticSkill: 2,
    meleeHitModifier: 1,
    ballisticHitModifier: 1,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.9722, 0.9722)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 2 1 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    ballisticSkill: 3,
    meleeHitModifier: 2,
    ballisticHitModifier: 2,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.8055, 0.9444)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 5 2 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 5,
    ballisticSkill: 5,
    meleeHitModifier: 2,
    ballisticHitModifier: 2,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.4444, 0.7777)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 5 2 hit modifier reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 5,
    ballisticSkill: 5,
    meleeHitModifier: 4,
    ballisticHitModifier: 4,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.4722, 0.8888)

  expect(hitProbability(props).melee).toBeCloseTo(expected.melee)
  expect(hitProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('skill 2 reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 2,
    ballisticSkill: 2,
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.9722, 0.9722)

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
