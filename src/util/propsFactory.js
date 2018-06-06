import { hitProbability as hitProb } from '../hitProbability'
import { woundProbability as woundProb } from '../woundProbability'

const propsFactory = config => {
  const model = {
    model: {
      melee: {
        skill: config.meleeSkill,
        strength: config.meleeStrength,
        attackPower: config.meleeAP,
        damage: config.meleeDamage
      },
      ballistic: {
        skill: config.ballisticSkill,
        strength: config.ballisticStrength,
        attackPower: config.ballisticAP || 0,
        damage: config.ballisticDamage
      }
    }
  }
  const enemy = {
    enemy: {
      toughness: config.enemyToughness,
      save: config.enemySave,
      invulnerableSave: config.enemyInvulnerableSave
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
  const woundProbability = {
    woundProbability: woundProb(
      Object.assign({}, model, enemy, woundReroll, hitProbability)
    )
  }

  return Object.assign({}, model, enemy, hitProbability, woundProbability)
}

export { propsFactory }
