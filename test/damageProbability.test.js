/* eslint-env jest */
import { damageProbability } from '../src/damageProbability'
import { propsFactory } from '../src/util/propsFactory'

const expectedFactory = (expectMelee, expectBallistic) => {
  return {
    melee: expectMelee,
    ballistic: expectBallistic
  }
}

test('function exists', () => {
  expect(damageProbability).toBeDefined()
})

test('Damage No AP Dmg 1,2', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 0,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 0,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.11111, 0.22222)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage 1,2 AP Dmg 1, Save 3', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.16667, 0.22222)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage -1,-2 AP Dmg 1, Save 3', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: -1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: -2,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.16667, 0.22222)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage 3,4 AP Dmg 1, Save 3', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 3,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 4,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.27777, 0.33333)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage 1,2 AP Dmg 1, Save 3 InvulnerarbleSafe 4', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 4,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.3333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.16667, 0.16667)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage 1,2 AP Dmg 1, Save 3 InvulnerarbleSafe 4nwound reroll-1 and reroll-all and hit reroll-1 ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-1',
    hitProbabilityMelee: 0.7777,
    hitProbabilityBallistic: 0.7777,
    woundProbabilityMelee: 0.4537,
    woundProbabilityBallistic: 0.58333
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.22685, 0.29166)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Damage 1,2 AP Dmg 1, Save 3 InvulnerarbleSafe 4 wound reroll-1 and reroll-all and hit reroll-all ', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 4,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-all',
    hitRerollBallistic: 'reroll-all',
    hitProbabilityMelee: 0.8888,
    hitProbabilityBallistic: 0.8888,
    woundProbabilityMelee: 0.51852,
    woundProbabilityBallistic: 0.66667
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.25926, 0.33333)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('wound reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 1,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-1',
    woundRerollBallistic: 'reroll-all',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.6666,
    woundProbabilityMelee: 0.3888,
    woundProbabilityBallistic: 0.4995
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.19444, 0.24975)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('hit reroll-1 and reroll-all', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 1,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-1',
    hitRerollBallistic: 'reroll-all',
    hitProbabilityMelee: 0.7777,
    hitProbabilityBallistic: 0.8888,
    woundProbabilityMelee: 0.3888,
    woundProbabilityBallistic: 0.4444
  }
  const props = propsFactory(config)
  const expected = expectedFactory(0.19444, 0.2222)

  expect(damageProbability(props).melee).toBeCloseTo(expected.melee)
  expect(damageProbability(props).ballistic).toBeCloseTo(expected.ballistic)
})

test('Error Type Damage', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 'Senf',
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 1,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Type AP', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 'Senf',
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 1,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Type AP', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 2,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 'Senf',
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Type AP', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 2,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 7,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})

test('Error Type AP', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 7,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 3,
    ballisticDamage: 1,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})

test('Error Type Damage', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 2,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 'Senf',
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Type Save', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 2,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 'Senf',
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Type Save', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 2,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 'Senf',
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(TypeError)
})

test('Error Range Damage', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: -1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})

test('Error Range Damage', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: -2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})

test('Error Range Save', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: -3,
    enemyInvulnerableSave: 0,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})

test('Error Range Save', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 1,
    ballisticSkill: 3,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: -10,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
  }
  const props = propsFactory(config)

  expect(() => {
    damageProbability(props)
  }).toThrow(RangeError)
})
