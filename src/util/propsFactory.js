import { hitProbability as hitProb } from '../hitProbability'

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
        attackPower: config.ballisticAP,
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

  return Object.assign({}, model, enemy, woundReroll, hitProbability)
}

export { propsFactory }
