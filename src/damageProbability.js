/**
 * Calculate damage probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {object} props.model.melee - melee object
 * @param {number} props.model.melee.damage- melee damage
 * @param {number} props.model.melee.attackPower - melee attackPower
 * @param {object} props.model.ballistic - ballistic object
 * @param {number} props.model.ballistic.damage - ballistic damage
 * @param {number} props.model.ballistic.attackPower - ballistic attackPower
 * @param {object} props.enemy - enemy object
 * @param {number} props.enemy.save - enemy save
 * @param {number} props.enemy.invulnerableSave - enemy invulnerable save
 * @param {object} props.woundProbability - wound probability object
 * @param {number} props.woundProbability.melee - melee wound probability
 * @param {number} props.woundProbability.ballistic - ballistic wound probability
 * @returns {object} averageDamage
 */
function damageProbability (props) {
  /**
   * @namespace
   * @property {object} averageDamage - averageDamage return object
   * @property {number} averageDamage.melee - average melee damage
   * @property {number} averageDamage .ballistic - average ballistic damage
   */
  return {}
}

export { damageProbability }
