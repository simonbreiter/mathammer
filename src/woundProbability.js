import {
  errorStrength,
  errorStrengthType,
  errorToughness,
  errorToughnessType,
  errorValue
} from '../src/util/error'
import { dice } from '../src/util/dice'
import { modification } from '../src/util/modification'
import { basicFront } from '../src/util/basicFrontModifier'
import { reroll } from '../src/util/reroll'
import { probability } from '../src/util/probabilityFunction'
import { defineReroll } from '../src/util/defineReroll'
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
  if (!props.hasOwnProperty('model') || !props.hasOwnProperty('enemy')) {
    errorValue()
  } else if (
    props.model.hasOwnProperty('melee') &&
    !props.model.hasOwnProperty('ballistic')
  ) {
    const meleeStrength = props.model.melee.strength
    const enemyToughness = props.enemy.toughness
    const hitProbMelee = props.hitProbability.melee
    const meleeStrengthType = meleeStrength * 1
    const enemyToughnessType = enemyToughness * 1
    const woundRerollMelee = defineReroll(props.woundReroll.melee)
    let woundModifierMelee = 0
    if (props.hasOwnProperty('woundModifier')) {
      woundModifierMelee = props.woundModifier.melee
    } else {
      woundModifierMelee = 0
    }

    if (isNaN(enemyToughnessType)) {
      errorToughnessType()
    }
    if (isNaN(meleeStrengthType)) {
      errorStrengthType()
    }
    if (meleeStrength < 1) {
      errorStrength()
    }
    if (enemyToughness < 1 || enemyToughness > 8) {
      errorToughness()
    }

    const meleeDice = dice(meleeStrength, enemyToughness)
    const meleeModification = modification(meleeDice, woundModifierMelee)
    const meleeBasic = (6 - meleeDice + 1) / 6
    const meleeModifiedBasic = (6 - meleeModification + 1) / 6
    const meleeBasicFront = basicFront(
      woundModifierMelee,
      meleeBasic,
      meleeModifiedBasic
    )
    const meleeBasicBack = meleeModifiedBasic
    const meleeWound = reroll(
      woundRerollMelee,
      meleeModifiedBasic,
      meleeBasicFront,
      meleeBasicBack,
      meleeBasic
    )
    const meleeWoundProbability = probability(hitProbMelee, meleeWound)
    const ballisticWoundProbability = 0
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
  } else if (
    !props.model.hasOwnProperty('melee') &&
    props.model.hasOwnProperty('ballistic')
  ) {
    const ballisticStrength = props.model.ballistic.strength
    const enemyToughness = props.enemy.toughness
    const hitProbBallistic = props.hitProbability.ballistic
    const ballisticStrengthType = ballisticStrength * 1
    const enemyToughnessType = enemyToughness * 1
    const woundRerollBallistic = defineReroll(props.woundReroll.ballistic)
    let woundModifierBallistic = 0
    if (props.hasOwnProperty('woundModifier')) {
      woundModifierBallistic = props.woundModifier.ballistic
    } else {
      woundModifierBallistic = 0
    }

    if (isNaN(enemyToughnessType)) {
      errorToughnessType()
    }
    if (isNaN(ballisticStrengthType)) {
      errorStrengthType()
    }
    if (ballisticStrength < 1) {
      errorStrength()
    }
    if (enemyToughness < 1 || enemyToughness > 8) {
      errorToughness()
    }
    const ballisticDice = dice(ballisticStrength, enemyToughness)
    const ballisticModification = modification(
      ballisticDice,
      woundModifierBallistic
    )
    const ballisticBasic = (6 - ballisticDice + 1) / 6
    const ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
    const ballisticBasicFront = basicFront(
      woundModifierBallistic,
      ballisticBasic,
      ballisticModifiedBasic
    )
    const ballisticBasicBack = ballisticModifiedBasic
    const ballisticWound = reroll(
      woundRerollBallistic,
      ballisticModifiedBasic,
      ballisticBasicFront,
      ballisticBasicBack,
      ballisticBasic
    )
    const meleeWoundProbability = 0
    const ballisticWoundProbability = probability(
      hitProbBallistic,
      ballisticWound
    )
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
  } else {
    const meleeStrength = props.model.melee.strength
    const ballisticStrength = props.model.ballistic.strength
    const enemyToughness = props.enemy.toughness
    const hitProbMelee = props.hitProbability.melee
    const hitProbBallistic = props.hitProbability.ballistic
    const meleeStrengthType = meleeStrength * 1
    const ballisticStrengthType = ballisticStrength * 1
    const enemyToughnessType = enemyToughness * 1
    const woundRerollMelee = defineReroll(props.woundReroll.melee)
    const woundRerollBallistic = defineReroll(props.woundReroll.ballistic)
    let woundModifierMelee = 0
    if (props.hasOwnProperty('woundModifier')) {
      woundModifierMelee = props.woundModifier.melee
    } else {
      woundModifierMelee = 0
    }
    let woundModifierBallistic = 0
    if (props.hasOwnProperty('woundModifier')) {
      woundModifierBallistic = props.woundModifier.ballistic
    } else {
      woundModifierBallistic = 0
    }

    if (isNaN(enemyToughnessType)) {
      errorToughnessType()
    }
    if (isNaN(meleeStrengthType) || isNaN(ballisticStrengthType)) {
      errorStrengthType()
    }
    if (meleeStrength < 1 || ballisticStrength < 1) {
      errorStrength()
    }
    if (enemyToughness < 1 || enemyToughness > 8) {
      errorToughness()
    }

    const meleeDice = dice(meleeStrength, enemyToughness)
    const meleeModification = modification(meleeDice, woundModifierMelee)
    const meleeBasic = (6 - meleeDice + 1) / 6
    const meleeModifiedBasic = (6 - meleeModification + 1) / 6
    const meleeBasicFront = basicFront(
      woundModifierMelee,
      meleeBasic,
      meleeModifiedBasic
    )
    const meleeBasicBack = meleeModifiedBasic
    const meleeWound = reroll(
      woundRerollMelee,
      meleeModifiedBasic,
      meleeBasicFront,
      meleeBasicBack,
      meleeBasic
    )
    const ballisticDice = dice(ballisticStrength, enemyToughness)
    const ballisticModification = modification(
      ballisticDice,
      woundModifierBallistic
    )
    const ballisticBasic = (6 - ballisticDice + 1) / 6
    const ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
    const ballisticBasicFront = basicFront(
      woundModifierBallistic,
      ballisticBasic,
      ballisticModifiedBasic
    )
    const ballisticBasicBack = ballisticModifiedBasic
    const ballisticWound = reroll(
      woundRerollBallistic,
      ballisticModifiedBasic,
      ballisticBasicFront,
      ballisticBasicBack,
      ballisticBasic
    )
    const meleeWoundProbability = probability(hitProbMelee, meleeWound)
    const ballisticWoundProbability = probability(
      hitProbBallistic,
      ballisticWound
    )
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
}
export { woundProbability }
