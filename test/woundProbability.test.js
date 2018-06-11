/* eslint-env jest */
import { woundProbability } from '../src/woundProbability'
import { propsFactory } from '../src/util/propsFactory'

const expectedFactory = (expectMelee, expectBallistic) => {
  return {
    melee: expectMelee,
    ballistic: expectBallistic
  }
}

test('function exists', () => {
  expect(woundProbability).toBeDefined()
})

test('wound probability double toughness', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 8,
    ballisticSkill: 3,
    ballisticStrength: 8,
    enemyToughness: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.55555, 0.55555)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability higher than toughness', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 5,
    ballisticSkill: 3,
    ballisticStrength: 5,
    enemyToughness: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.44444, 0.44444)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with no reroll', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 5,
    ballisticStrength: 4,
    enemyToughness: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.33333, 0.1666)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability smaller than toughness', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 3,
    ballisticSkill: 3,
    ballisticStrength: 3,
    enemyToughness: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.22222, 0.22222)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability half toughness', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 2,
    ballisticSkill: 3,
    ballisticStrength: 2,
    enemyToughness: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.11111, 0.11111)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with reroll-1', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-1',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.3888, 0.3888)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-all',
    woundRerollBallistic: 'reroll-all',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.4995, 0.4995)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.3888, 0.4995)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with reroll-1 and reroll-all and hit reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-1',
    hitProbabilityMelee: 0.7777,
    hitProbabilityBallistic: 0.7777
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.4537, 0.58333)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound probability with reroll-1 and reroll-all and hit reroll-all ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-all',
    hitRerollBallistic: 'reroll-all',
    hitProbabilityMelee: 0.8888,
    hitProbabilityBallistic: 0.8888
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.51852, 0.66667)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier +1,-1 equal toughness', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.2222, 0.4444)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier <2, >6 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 2,
    ballisticSkill: 3,
    ballisticStrength: 8,
    enemyToughness: 4,
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0.5555)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier +1,-1 equal toughness reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-1',
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.2592, 0.4074)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier +1,-1 equal toughness reroll-all ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-all',
    woundRerollBallistic: 'reroll-all',
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.3333, 0.55555)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier +4,-4 equal toughness reroll-all ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-all',
    woundRerollBallistic: 'reroll-all',
    meleeWoundModifier: -4,
    ballisticWoundModifier: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0.6111)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier +4,-4 equal toughness reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 4,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-1',
    meleeWoundModifier: -4,
    ballisticWoundModifier: 4,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0.42592)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier <2 >6 reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 2,
    ballisticSkill: 3,
    ballisticStrength: 8,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-1',
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0.64814)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound modifier <2 >6 reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 2,
    ballisticSkill: 3,
    ballisticStrength: 8,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-all',
    woundRerollBallistic: 'reroll-all',
    meleeWoundModifier: -1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0, 0.64814)

  expect(woundProbability(props).melee).toBeCloseTo(expected.melee)
  expect(woundProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Error Strength < 0', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 'Senf',
    ballisticSkill: 3,
    ballisticStrength: 5,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    woundProbability(props)
  }).toThrow(TypeError)
})

test('Error Strength < 0', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: -2,
    enemyToughness: 4,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    woundProbability(props)
  }).toThrow(RangeError)
})

test('Error Toughness < 0', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 2,
    enemyToughness: -4,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    woundProbability(props)
  }).toThrow(RangeError)
})

test('Error Toughness Type', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    ballisticSkill: 3,
    ballisticStrength: 5,
    enemyToughness: 'Senf',
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    woundProbability(props)
  }).toThrow(TypeError)
})
