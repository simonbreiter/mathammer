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
  let meleeMultiplierHalf = 1 / 6
  let meleeMultiplierSmaller = 1 / 3
  let meleeMultiplierEqual = 1 / 2
  let meleeMultiplierHigher = 2 / 3
  let meleeMultiplierDouble = 5 / 6
  let ballisticMultiplierHalf = 1 / 6
  let ballisticMultiplierSmaller = 1 / 3
  let ballisticMultiplierEqual = 1 / 2
  let ballisticMultiplierHigher = 2 / 3
  let ballisticMultiplierDouble = 5 / 6

  let meleeWoundProbability = 0
  let ballisticWoundProbability = 0
  let meleeStrength = props.model.melee.strength
  let ballisticStrength = props.model.ballistic.strength
  let enemyToughness = props.enemy.toughness
  let hitProbMelee = props.hitProbability.melee
  let hitProbBallistic = props.hitProbability.ballistic

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

  if (props.woundReroll.melee === 'reroll-1') {
    meleeMultiplierHalf = 7 / 36
    meleeMultiplierSmaller = 7 / 18
    meleeMultiplierEqual = 7 / 12
    meleeMultiplierHigher = 7 / 9
    meleeMultiplierDouble = 35 / 36
  } else if (props.woundReroll.melee === 'reroll-all') {
    meleeMultiplierHalf = 11 / 36
    meleeMultiplierSmaller = 5 / 9
    meleeMultiplierEqual = 3 / 4
    meleeMultiplierHigher = 8 / 9
    meleeMultiplierDouble = 35 / 36
  }

  if (props.woundReroll.ballistic === 'reroll-1') {
    ballisticMultiplierHalf = 7 / 36
    ballisticMultiplierSmaller = 7 / 18
    ballisticMultiplierEqual = 7 / 12
    ballisticMultiplierHigher = 7 / 9
    ballisticMultiplierDouble = 35 / 36
  } else if (props.woundReroll.ballistic === 'reroll-all') {
    ballisticMultiplierHalf = 11 / 36
    ballisticMultiplierSmaller = 5 / 9
    ballisticMultiplierEqual = 3 / 4
    ballisticMultiplierHigher = 8 / 9
    ballisticMultiplierDouble = 35 / 36
  }

  if (meleeStrength >= 2 * enemyToughness) {
    meleeWoundProbability = hitProbMelee * meleeMultiplierDouble
  } else if (
    meleeStrength > enemyToughness &&
    meleeStrength < 2 * enemyToughness
  ) {
    meleeWoundProbability = hitProbMelee * meleeMultiplierHigher
  } else if (meleeStrength === enemyToughness) {
    meleeWoundProbability = hitProbMelee * meleeMultiplierEqual
  } else if (
    meleeStrength < enemyToughness &&
    meleeStrength > enemyToughness / 2
  ) {
    meleeWoundProbability = hitProbMelee * meleeMultiplierSmaller
  } else {
    meleeWoundProbability = hitProbMelee * meleeMultiplierHalf
  }

  if (ballisticStrength >= 2 * enemyToughness) {
    ballisticWoundProbability = hitProbBallistic * ballisticMultiplierDouble
  } else if (
    ballisticStrength > enemyToughness &&
    ballisticStrength < 2 * enemyToughness
  ) {
    ballisticWoundProbability = hitProbBallistic * ballisticMultiplierHigher
  } else if (ballisticStrength === enemyToughness) {
    ballisticWoundProbability = hitProbBallistic * ballisticMultiplierEqual
  } else if (
    ballisticStrength < enemyToughness &&
    ballisticStrength > enemyToughness / 2
  ) {
    ballisticWoundProbability = hitProbBallistic * ballisticMultiplierSmaller
  } else {
    ballisticWoundProbability = hitProbBallistic * ballisticMultiplierHalf
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
