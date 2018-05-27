/**
 * Calculate hit probability
 * @param {object} props - the property object
 * @param {object} props.model - model object
 * @param {object} props.model.melee - melee object
 * @param {number} props.model.melee.skill - melee skill
 * @param {object} props.model.ballistic - model object
 * @param {number} props.model.ballistic.skill - model object
 * @param {object} [props.reroll] - reroll object
 * @param {string} [props.reroll.melee] - reroll option for melee attacks
 * @param {string} [props.reroll.ballistic] - reroll option for ballistic attacks
 * @returns {object} hitProbabilityReturn
 */
function hitProbability (props) {
  /**
   * @namespace
   * @property {object} hitProbabilityReturn - the hitProbability return object
   * @property {number} hitProbabilityReturn.melee - the melee hit probability
   * @property {number} hitProbabilityReturn.ballistic - the ballistic hit probability
   */
  return {}
}

export { hitProbability }
