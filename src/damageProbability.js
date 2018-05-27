/**
 * Calculate damage probability
 * @param {object} props - property object
 * @param {object} props.enemy - enemy object
 * @param {number} props.enemy.save - enemy save
 * @param {number} props.enemy.invulnerableSave - enemy invulnerable save
 * @param {object} props.woundProbability - wound probability object
 * @param {number} props.woundProbability.melee - melee wound probability
 * @param {number} props.woundProbability.ballistic - ballistic wound probability
 * @returns {object} damageProbabilityReturn
 */
function damageProbability (props) {
  /**
   * @namespace
   * @property {object} damageProbabilityReturn - damageProbability return object
   * @property {number} damageProbabilityReturn.melee - melee damage probability
   * @property {number} damageProbabilityReturn.ballistic - ballistic damage probability
   */
  return {}
}

export { damageProbability }
