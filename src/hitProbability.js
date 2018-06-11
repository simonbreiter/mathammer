import { errorRange, errorHitType } from '../src/util/error'

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
  let meleeProbability = 0
  let ballisticProbability = 0
  let meleeBasic = (6 - props.model.melee.skill + 1) / 6
  let meleeModification = props.model.melee.skill - props.hitModifier.melee
  if (meleeModification < 2) {
    meleeModification = 2
  }
  let meleeModifiedBasic = (6 - meleeModification + 1) / 6
  let meleeBasicFront = 0
  let meleeBasicBack = 0
  let ballisticBasic = (6 - props.model.ballistic.skill + 1) / 6
  let ballisticModification =
    props.model.ballistic.skill - props.hitModifier.ballistic
  if (ballisticModification < 2) {
    ballisticModification = 2
  }
  let ballisticModifiedBasic = (6 - ballisticModification + 1) / 6
  let ballisticBasicFront = 0
  let ballisticBasicBack = 0

  if (
    props.model.melee.skill < 2 ||
    props.model.melee.skill > 6 ||
    props.model.ballistic.skill < 2 ||
    props.model.ballistic.skill > 6
  ) {
    errorRange()
  }

  if (props.hitModifier.melee >= 0) {
    meleeBasicFront = meleeBasic
    meleeBasicBack = meleeModifiedBasic
  } else {
    meleeBasicFront = meleeModifiedBasic
    meleeBasicBack = meleeModifiedBasic
  }

  if (props.hitModifier.ballistic >= 0) {
    ballisticBasicFront = ballisticBasic
    ballisticBasicBack = ballisticModifiedBasic
  } else {
    ballisticBasicFront = ballisticModifiedBasic
    ballisticBasicBack = ballisticModifiedBasic
  }

  if (props.hitReroll.melee === 'reroll-none') {
    meleeProbability = meleeModifiedBasic
  } else if (props.hitReroll.melee === 'reroll-1') {
    meleeProbability = meleeBasicFront + 1 / 6 * meleeBasicBack
  } else {
    meleeProbability = meleeBasicFront + (1 - meleeBasic) * meleeBasicBack
  }

  if (props.hitReroll.ballistic === 'reroll-none') {
    ballisticProbability = ballisticModifiedBasic
  } else if (props.hitReroll.ballistic === 'reroll-1') {
    ballisticProbability = ballisticBasicFront + 1 / 6 * ballisticBasicBack
  } else {
    ballisticProbability =
      ballisticBasicFront + (1 - ballisticBasic) * ballisticBasicBack
  }

  if (meleeProbability < 0) {
    meleeProbability = 0
  }
  if (ballisticProbability < 0) {
    ballisticProbability = 0
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
