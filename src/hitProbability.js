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
  /**
   * @namespace
   * @property {object} hitProbabilityReturn - hitProbability return object
   * @property {number} hitProbabilityReturn.melee - melee hit probability
   * @property {number} hitProbabilityReturn.ballistic - ballistic hit probability
   */
  return {}
}

export { hitProbability }
