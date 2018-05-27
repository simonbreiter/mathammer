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
  /**
   * @namespace
   * @property {object} woundProbabilityReturn - woundProbability return object
   * @property {number} woundProbabilityReturn.melee - melee wound probability
   * @property {number} woundProbabilityReturn.ballistic - ballistic wound probability
   */
  return {}
}

export { woundProbability }
