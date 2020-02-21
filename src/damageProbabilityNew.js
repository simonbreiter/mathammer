/**
 * Calculate damage probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {number} props.model.damage - damage
 * @param {number} props.model.armourPenetration - ap
 * @param {object} props.enemy - enemy object
 * @param {number} props.enemy.save - saves
 * @param {number} props.enemy.invulnerableSave - inv saves
 * @param {number} props.enemy.feelNoPain - feel no pain
 * @param {object} props.modifier - modifier object
 * @param {object} props.modifier.save
 * @param {object} props.woundProbability - wounds object
 * @param {number} props.woundProbability.wounds wounds
 * @param {number} props.woundProbability.mortalWounds mortal wounds
 * @returns {object} hitProbabilityReturn
 */

function damageProbability ({ model, enemy, modifier, woundProbability }) {
  const ap =
    model.armourPenetration < 0
      ? -model.armourPenetration
      : model.armourPenetration

  const save = enemy.save + ap > 6 ? 7 : enemy.save + ap
  const modifiedSave = modifier.save ? save - modifier.save : save
  const invulnerableSave = enemy.invulnerableSave ? enemy.invulnerableSave : 7

  const saveProbability =
    1 -
    (6 -
      (modifiedSave <= invulnerableSave ? modifiedSave : invulnerableSave) +
      1) /
      6

  const feelNoPain = enemy.feelNoPain ? 1 - (6 - enemy.feelNoPain + 1) / 6 : 1

  const damage =
    (saveProbability * woundProbability.wounds * model.damage +
      woundProbability.mortalWounds) *
    feelNoPain

  /**
   * @namespace
   * @property {object} damageProbabilityReturn - damageProbability return object
   * @property {number} damageReturn.hits - damage
   **/

  return {
    damage
  }
}

export { damageProbability }
