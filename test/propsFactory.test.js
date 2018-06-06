/* eslint-env jest */
import { hitProbability as hitProb } from '../src/hitProbability'
import { woundProbability as woundProb } from '../src/woundProbability'
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
    woundRerollMelee: 'reroll-none',
    woundRerollBallistic: 'reroll-none',
    hitRerollMelee: 'reroll-none',
    hitRerollBallistic: 'reroll-none'
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
      invulnerableSave: 6
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
  const hitProbability = {
    hitProbability: hitProb(Object.assign({}, model, hitReroll))
  }
  const woundProbability = {
    woundProbability: woundProb(Object.assign({}, model, enemy, woundReroll, hitProbability))
  }
  const expected = Object.assign({}, model, enemy, hitProbability, woundProbability)

  expect(propsFactory(config)).toEqual(expected)
})
