const propsFactory = ({
  meleeSkill = 3,
  meleeStrength = 4,
  meleeAP = 0,
  meleeDamage = 1,
  ballisticSkill = 3,
  ballisticStrength = 4,
  ballisticAP = 0,
  ballisticDamage = 1,
  enemyToughness = 4,
  enemySave = 3,
  enemyInvulnerableSave = 0,
  enemySaveModifier = 0,
  woundRerollMelee = 'reroll-none',
  woundRerollBallistic = 'reroll-none',
  hitRerollMelee = 'reroll-none',
  hitRerollBallistic = 'reroll-none',
  meleeHitModifier = 0,
  ballisticHitModifier = 0,
  meleeWoundModifier = 0,
  ballisticWoundModifier = 0,
  hitProbabilityMelee = 1,
  hitProbabilityBallistic = 1,
  woundProbabilityMelee = 1,
  woundProbabilityBallistic = 1
}) => {
  const model = {
    model: {
      melee: {
        skill: meleeSkill,
        strength: meleeStrength,
        attackPower: meleeAP,
        damage: meleeDamage
      },
      ballistic: {
        skill: ballisticSkill,
        strength: ballisticStrength,
        attackPower: ballisticAP,
        damage: ballisticDamage
      }
    }
  }
  const enemy = {
    enemy: {
      toughness: enemyToughness,
      save: enemySave,
      invulnerableSave: enemyInvulnerableSave,
      saveModifier: enemySaveModifier
    }
  }
  const woundReroll = {
    woundReroll: {
      melee: woundRerollMelee,
      ballistic: woundRerollBallistic
    }
  }
  const hitReroll = {
    hitReroll: {
      melee: hitRerollMelee,
      ballistic: hitRerollBallistic
    }
  }
  const hitModifier = {
    hitModifier: {
      melee: meleeHitModifier,
      ballistic: ballisticHitModifier
    }
  }
  const woundModifier = {
    woundModifier: {
      melee: meleeWoundModifier,
      ballistic: ballisticWoundModifier
    }
  }
  const hitProbability = {
    hitProbability: {
      melee: hitProbabilityMelee,
      ballistic: hitProbabilityBallistic
    }
  }
  const woundProbability = {
    woundProbability: {
      melee: woundProbabilityMelee,
      ballistic: woundProbabilityBallistic
    }
  }

  return Object.assign(
    {},
    model,
    enemy,
    woundReroll,
    hitReroll,
    hitModifier,
    woundModifier,
    hitProbability,
    woundProbability
  )
}

export { propsFactory }
