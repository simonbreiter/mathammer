import { errorRange, errorHitType } from '../src/util/error'
import { modification } from '../src/util/modification'
import { basicFront } from '../src/util/basicFrontModifier'
import { reroll } from '../src/util/reroll'
import { probability } from '../src/util/probabilityFunction'
import { defineValue } from '../src/util/defineValue'
import { defineReroll } from '../src/util/defineReroll'

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
  if (!props.model.melee.skill && !props.model.ballistic.skill) {
    errorValue()
  } else {
    if (
      props.model.melee.skill < 2 ||
      props.model.melee.skill > 6 ||
      props.model.ballistic.skill < 2 ||
      props.model.ballistic.skill > 6
    ) {
      errorRange()
    }
    const hitRerollMelee = defineReroll(props.hitReroll.melee)
    const hitRerollBallistic = defineReroll(props.hitReroll.ballistic)
    const hitModifierMelee = defineValue(props.hitModifier.melee)
    const hitModifierBallistic = defineValue(props.hitModifier.ballistic)

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
      errorHitType()
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
