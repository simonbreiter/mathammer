/* eslint-env jest */
import { propsFactory } from '../src/util/propsFactory'

test('factory test', () => {
  const config = {
    meleeSkill: 3,
    meleeStrength: 4,
    meleeAP: 1,
    meleeDamage: 2,
    ballisticSkill: 5,
    ballisticStrength: 4,
    ballisticAP: 2,
    ballisticDamage: 2,
    enemyToughness: 4,
    enemySave: 3,
    enemyInvulnerableSave: 6,
    enemySaveModifier: 1,
    enemyInvSaveModifier: 1,
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none',
    meleeHitModifier: -1,
    ballisticHitModifier: 1,
    meleeWoundModifier: 1,
    ballisticWoundModifier: 1,
    hitProbabilityMelee: 0.6666,
    hitProbabilityBallistic: 0.3333,
    woundProbabilityMelee: 0.3333,
    woundProbabilityBallistic: 0.1666
  }
  const model = {
    model: {
      melee: {
        skill: 3,
        strength: 4,
        attackPower: 1,
        damage: 2
      },
      ballistic: {
        skill: 5,
        strength: 4,
        attackPower: 2,
        damage: 2
      }
    }
  }
  const enemy = {
    enemy: {
      toughness: 4,
      save: 3,
      invulnerableSave: 6,
      saveModifier: 1,
      invSaveModifier: 1
    }
  }
  const woundReroll = {
    woundReroll: {
      melee: 'reroll-none',
      ballistic: 'reroll-none'
    }
  }
  const hitReroll = {
    hitReroll: {
      melee: 'reroll-none',
      ballistic: 'reroll-none'
    }
  }
  const hitModifier = {
    hitModifier: {
      melee: -1,
      ballistic: 1
    }
  }
  const woundModifier = {
    woundModifier: {
      melee: 1,
      ballistic: 1
    }
  }
  const hitProbability = {
    hitProbability: {
      melee: 0.6666,
      ballistic: 0.3333
    }
  }
  const woundProbability = {
    woundProbability: {
      melee: 0.3333,
      ballistic: 0.1666
    }
  }
  const expected = Object.assign({}, model, enemy, woundReroll, hitReroll, hitModifier, woundModifier, hitProbability, woundProbability)

  expect(propsFactory(config)).toEqual(expected)
})
