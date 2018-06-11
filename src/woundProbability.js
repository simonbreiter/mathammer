import {
  errorStrength,
  errorStrengthType,
  errorToughness,
  errorToughnessType
} from '../src/util/error'
/**
 * Calculate wound probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {object} props.model.melee - melee object
 * @param {number} props.model.melee.strength - melee strength
 * @param {object} props.model.ballistic - model object
 * @param {number} props.model.ballistic.strength - model strength
 * @param {object} props.enemy - enemy object
 * @param {number} props.enemy.thoughness - enemy thoughness
 * @param {object} props.hitProbability - hit probability object
 * @param {number} props.hitProbability.melee - melee hit probability
 * @param {number} props.hitProbability.ballistic - ballistic hit probability
 * @param {object} [props.woundReroll] - wound reroll object
 * @param {string} [props.woundReroll.melee] - wound reroll option for melee attacks
 * @param {string} [props.woundReroll.ballistic] - wound reroll option for ballistic attacks
 * @returns {object} woundProbabilityReturn
 */
function woundProbability (props) {
  let meleeWoundProbability = 0
  let ballisticWoundProbability = 0
  let meleeWound = 0
  let ballisticWound = 0
  let meleeStrength = props.model.melee.strength
  let ballisticStrength = props.model.ballistic.strength
  let enemyToughness = props.enemy.toughness
  let hitProbMelee = props.hitProbability.melee
  let hitProbBallistic = props.hitProbability.ballistic

  let meleeDice = 0
  let ballisticDice = 0

  let meleeStrengthTyp = meleeStrength * 1
  let ballisticStrengthTyp = ballisticStrength * 1
  let enemyToughnessTyp = enemyToughness * 1

  if (isNaN(enemyToughnessTyp)) {
    errorToughnessType()
  }
  if (isNaN(meleeStrengthTyp) || isNaN(ballisticStrengthTyp)) {
    errorStrengthType()
  }
  if (meleeStrength < 1 || ballisticStrength < 1) {
    errorStrength()
  }
  if (enemyToughness < 1 || enemyToughness > 8) {
    errorToughness()
  }

  if (meleeStrength >= 2 * enemyToughness) {
    meleeDice = 2
  } else if (
    meleeStrength > enemyToughness &&
    meleeStrength < 2 * enemyToughness
  ) {
    meleeDice = 3
  } else if (meleeStrength === enemyToughness) {
    meleeDice = 4
  } else if (
    meleeStrength < enemyToughness &&
    meleeStrength > enemyToughness / 2
  ) {
    meleeDice = 5
  } else {
    meleeDice = 6
  }
  let meleeModification = meleeDice - props.woundModifier.melee
  if (meleeModification < 2) {
    meleeModification = 2
  }
  let meleeBasic = (6 - meleeDice + 1) / 6
  let meleeModifiedBasic = (6 - meleeModification + 1) / 6
  let meleeBasicFront = 0
  let meleeBasicBack = 0

  if (props.woundModifier.melee >= 0) {
    meleeBasicFront = meleeBasic
    meleeBasicBack = meleeModifiedBasic
  } else {
    meleeBasicFront = meleeModifiedBasic
    meleeBasicBack = meleeModifiedBasic
  }

  if (props.woundReroll.melee === 'reroll-none') {
    meleeWound = meleeModifiedBasic
  } else if (props.woundReroll.melee === 'reroll-1') {
    meleeWound = meleeBasicFront + 1 / 6 * meleeBasicBack
  } else {
    meleeWound = meleeBasicFront + (1 - meleeBasic) * meleeBasicBack
  }

  if (ballisticStrength >= 2 * enemyToughness) {
    ballisticDice = 2
  } else if (
    ballisticStrength > enemyToughness &&
    ballisticStrength < 2 * enemyToughness
  ) {
    ballisticDice = 3
  } else if (ballisticStrength === enemyToughness) {
    ballisticDice = 4
  } else if (
    ballisticStrength < enemyToughness &&
    ballisticStrength > enemyToughness / 2
  ) {
    ballisticDice = 5
  } else {
    ballisticDice = 6
  }
  let ballisticModification = ballisticDice - props.woundModifier.ballistic
  if (ballisticModification < 2) {
    ballisticModification = 2
  }
  let ballisticBasic = (6 - ballisticDice + 1) / 6
  let ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
  let ballisticBasicFront = 0
  let ballisticBasicBack = 0

  if (props.woundModifier.ballistic >= 0) {
    ballisticBasicFront = ballisticBasic
    ballisticBasicBack = ballisticModifiedBasic
  } else {
    ballisticBasicFront = ballisticModifiedBasic
    ballisticBasicBack = ballisticModifiedBasic
  }
  if (props.woundReroll.ballistic === 'reroll-none') {
    ballisticWound = ballisticModifiedBasic
  } else if (props.woundReroll.ballistic === 'reroll-1') {
    ballisticWound = ballisticBasicFront + 1 / 6 * ballisticBasicBack
  } else {
    ballisticWound =
      ballisticBasicFront + (1 - ballisticBasic) * ballisticBasicBack
  }

  meleeWoundProbability = hitProbMelee * meleeWound
  ballisticWoundProbability = hitProbBallistic * ballisticWound

  if (meleeWoundProbability < 0) {
    meleeWoundProbability = 0
  }
  if (ballisticWoundProbability < 0) {
    ballisticWoundProbability = 0
  }

  /**
   * @namespace
   * @property {object} woundProbabilityReturn - woundProbability return object
   * @property {number} woundProbabilityReturn.melee - melee wound probability
   * @property {number} woundProbabilityReturn.ballistic - ballistic wound probability
   */
  return {
    melee: meleeWoundProbability,
    ballistic: ballisticWoundProbability
  }
}
export { woundProbability }
