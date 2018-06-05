/* eslint-env jest */
import { woundProbability } from '../src/woundProbability'
import { hitProbability as hitProb } from '../src/hitProbability'

const propsFactory = (config) => {
  const model = {
    model: {
      melee: {
        skill: config.meleeSkill,
        strength: config.meleeStrength
      },
      ballistic: {
        skill: config.ballisticSkill,
        strength: config.ballisticStrength
      }
    }
  }
  const enemy = {
    enemy: {
      toughness: config.enemyToughness
    }
  }
  const woundReroll = {
    woundReroll: {
      melee: config.woundRerollMelee || 'reroll-none',
      ballistic: config.woundRerollBallistic || 'reroll-none'
    }
  }
  const hitReroll = {
    hitReroll: {
      melee: config.hitRerollMelee || 'reroll-none',
      ballistic: config.hitRerollBallistic || 'reroll-none'
    }
  }
  const hitProbability = {
    hitProbability: hitProb(Object.assign({}, model, hitReroll))
  }

  return Object.assign({}, model, enemy, woundReroll, hitProbability)
}
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.3888, 0.3888)

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
    woundRerollMelee: 'reroll-all',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
    hitRerollBallistic: 'reroll-1'
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
    hitRerollBallistic: 'reroll-all'
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.51852, 0.66667)

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
