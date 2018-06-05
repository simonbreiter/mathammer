import { errorRange, errorHitType } from '../src/util/error'

/**
 * Calculate hit probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {object} props.model.melee - melee object
 * @param {number} props.model.melee.skill - melee skill
 * @param {object} props.model.ballistic - model object
 * @param {number} props.model.ballistic.skill - model object
 * @param {object} [props.hitReroll] - hit reroll object
 * @param {string} [props.hitReroll.melee] - hit reroll option for melee attacks
 * @param {string} [props.hitReroll.ballistic] - hit reroll option for ballistic attacks
 * @returns {object} hitProbabilityReturn
 */
function hitProbability (props) {
  let meleeProbability = 0
  let ballisticProbability = 0
  let meleeBasic = (6 - props.model.melee.skill + 1) / 6
  let ballisticBasic = (6 - props.model.ballistic.skill + 1) / 6

  if (
    props.model.melee.skill < 2 ||
    props.model.melee.skill > 6 ||
    props.model.ballistic.skill < 2 ||
    props.model.ballistic.skill > 6
  ) {
    errorRange()
  }

  if (props.hitReroll.melee === 'reroll-none') {
    meleeProbability = meleeBasic
  } else if (props.hitReroll.melee === 'reroll-1') {
    meleeProbability = meleeBasic + 1 / 6 * meleeBasic
  } else {
    meleeProbability = meleeBasic + (1 - meleeBasic) * meleeBasic
  }

  if (props.hitReroll.ballistic === 'reroll-none') {
    ballisticProbability = ballisticBasic
  } else if (props.hitReroll.ballistic === 'reroll-1') {
    ballisticProbability = ballisticBasic + 1 / 6 * ballisticBasic
  } else {
    ballisticProbability =
      ballisticBasic + (1 - ballisticBasic) * ballisticBasic
  }

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

export { hitProbability }
