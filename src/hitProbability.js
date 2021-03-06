import {
  errorValueInRange,
  errorStringValue,
  errorValue
} from '../src/util/error'
import { modification } from '../src/util/modification'
import { basicFront } from '../src/util/basicFrontModifier'
import { reroll } from '../src/util/reroll'
import { probability } from '../src/util/probabilityFunction'

/**
 * Calculate hit probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {object} props.model.melee - melee object
 * @param {number} props.model.melee.skill - melee skill
 * @param {object} props.model.ballistic - model object
 * @param {number} props.model.ballistic.skill - model object
 * @param {object} props.hitModifier - hit modifier object
 * @param {number} props.hitModifier.melee - hit modifier for melee attacks
 * @param {number} props.hitModifier.ballistic - hit modifier for ballistic attacks
 * @param {object} [props.hitReroll] - hit reroll object
 * @param {string} [props.hitReroll.melee] - hit reroll option for melee attacks
 * @param {string} [props.hitReroll.ballistic] - hit reroll option for ballistic attacks
 * @returns {object} hitProbabilityReturn
 */
function hitProbability (props) {
  if (!props.hasOwnProperty('model')) {
    errorValue()
  } else if (
    props.model.hasOwnProperty('melee') &&
    !props.model.hasOwnProperty('ballistic')
  ) {
    if (props.model.melee.skill < 2 || props.model.melee.skill > 6) {
      errorValueInRange()
    }
    let hitRerollMelee = 0
    if (props.hasOwnProperty('hitReroll')) {
      hitRerollMelee = props.hitReroll.melee
    } else {
      hitRerollMelee = 'reroll-none'
    }

    let hitModifierMelee = 0
    if (props.hasOwnProperty('hitModifier')) {
      hitModifierMelee = props.hitModifier.melee
    } else {
      hitModifierMelee = 0
    }

    const meleeBasic = (6 - props.model.melee.skill + 1) / 6
    const meleeModification = modification(
      props.model.melee.skill,
      hitModifierMelee
    )
    const meleeModifiedBasic = (6 - meleeModification + 1) / 6
    const meleeBasicFront = basicFront(
      hitModifierMelee,
      meleeBasic,
      meleeModifiedBasic
    )
    const meleeBasicBack = meleeModifiedBasic
    const meleeValue = reroll(
      hitRerollMelee,
      meleeModifiedBasic,
      meleeBasicFront,
      meleeBasicBack,
      meleeBasic
    )
    const meleeProbability = probability(meleeValue, 1)

    if (isNaN(meleeProbability)) {
      errorStringValue()
    }
    /**
     * @namespace
     * @property {object} hitProbabilityReturn - hitProbability return object
     * @property {number} hitProbabilityReturn.melee - melee hit probability
     * @property {number} hitProbabilityReturn.ballistic - ballistic hit probability
     */
    return {
      melee: meleeProbability
    }
  } else if (
    !props.model.hasOwnProperty('melee') &&
    props.model.hasOwnProperty('ballistic')
  ) {
    if (props.model.ballistic.skill < 2 || props.model.ballistic.skill > 6) {
      errorValueInRange()
    }
    let hitRerollBallistic = 0
    if (props.hasOwnProperty('hitReroll')) {
      hitRerollBallistic = props.hitReroll.ballistic
    } else {
      hitRerollBallistic = 'reroll-none'
    }
    let hitModifierBallistic = 0
    if (props.hasOwnProperty('hitModifier')) {
      hitModifierBallistic = props.hitModifier.ballistic
    } else {
      hitModifierBallistic = 0
    }

    const ballisticBasic = (6 - props.model.ballistic.skill + 1) / 6
    const ballisticModification = modification(
      props.model.ballistic.skill,
      hitModifierBallistic
    )
    const ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
    const ballisticBasicFront = basicFront(
      hitModifierBallistic,
      ballisticBasic,
      ballisticModifiedBasic
    )
    const ballisticBasicBack = ballisticModifiedBasic

    const ballisticValue = reroll(
      hitRerollBallistic,
      ballisticModifiedBasic,
      ballisticBasicFront,
      ballisticBasicBack,
      ballisticBasic
    )
    const ballisticProbability = probability(ballisticValue, 1)

    if (isNaN(ballisticProbability)) {
      errorStringValue()
    }
    /**
     * @namespace
     * @property {object} hitProbabilityReturn - hitProbability return object
     * @property {number} hitProbabilityReturn.melee - melee hit probability
     * @property {number} hitProbabilityReturn.ballistic - ballistic hit probability
     */
    return {
      ballistic: ballisticProbability
    }
  } else {
    if (
      props.model.melee.skill < 2 ||
      props.model.melee.skill > 6 ||
      props.model.ballistic.skill < 2 ||
      props.model.ballistic.skill > 6
    ) {
      errorValueInRange()
    }
    let hitRerollMelee = 0
    if (props.hasOwnProperty('hitReroll')) {
      hitRerollMelee = props.hitReroll.melee
    } else {
      hitRerollMelee = 'reroll-none'
    }
    let hitRerollBallistic = 0
    if (props.hasOwnProperty('hitReroll')) {
      hitRerollBallistic = props.hitReroll.ballistic
    } else {
      hitRerollBallistic = 'reroll-none'
    }
    let hitModifierMelee = 0
    if (props.hasOwnProperty('hitModifier')) {
      hitModifierMelee = props.hitModifier.melee
    } else {
      hitModifierMelee = 0
    }
    let hitModifierBallistic = 0
    if (props.hasOwnProperty('hitModifier')) {
      hitModifierBallistic = props.hitModifier.ballistic
    } else {
      hitModifierBallistic = 0
    }

    const meleeBasic = (6 - props.model.melee.skill + 1) / 6
    const meleeModification = modification(
      props.model.melee.skill,
      hitModifierMelee
    )
    const meleeModifiedBasic = (6 - meleeModification + 1) / 6
    const ballisticBasic = (6 - props.model.ballistic.skill + 1) / 6
    const ballisticModification = modification(
      props.model.ballistic.skill,
      hitModifierBallistic
    )
    const ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
    const meleeBasicFront = basicFront(
      hitModifierMelee,
      meleeBasic,
      meleeModifiedBasic
    )
    const meleeBasicBack = meleeModifiedBasic
    const ballisticBasicFront = basicFront(
      hitModifierBallistic,
      ballisticBasic,
      ballisticModifiedBasic
    )
    const ballisticBasicBack = ballisticModifiedBasic
    const meleeValue = reroll(
      hitRerollMelee,
      meleeModifiedBasic,
      meleeBasicFront,
      meleeBasicBack,
      meleeBasic
    )
    const ballisticValue = reroll(
      hitRerollBallistic,
      ballisticModifiedBasic,
      ballisticBasicFront,
      ballisticBasicBack,
      ballisticBasic
    )
    const meleeProbability = probability(meleeValue, 1)
    const ballisticProbability = probability(ballisticValue, 1)

    if (isNaN(meleeProbability) || isNaN(ballisticProbability)) {
      errorStringValue()
    }
    /**
     * @namespace
     * @property {object} hitProbabilityReturn - hitProbability return object
     * @property {number} hitProbabilityReturn.melee - melee hit probability
     * @property {number} hitProbabilityReturn.ballistic - ballistic hit probability
     */
    return {
      melee: meleeProbability,
      ballistic: ballisticProbability
    }
  }
}

export { hitProbability }
