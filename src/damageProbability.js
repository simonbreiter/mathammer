import {
  errorDamage,
  errorDamageType,
  errorSave,
  errorSaveType,
  errorAP,
  errorAPType
} from '../src/util/error'
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
  let meleeAP = props.model.melee.attackPower
  let ballisticAP = props.model.ballistic.attackPower
  let damageMelee = props.model.melee.damage
  let damageBallistic = props.model.ballistic.damage
  let enemySave = props.enemy.save
  let enemyInvSave = props.enemy.invulnerableSave
  let enemySaveModifier = props.enemy.saveModifier
  let saveMelee = 0
  let saveBallistic = 0

  if (
    damageMelee < 1 ||
    damageMelee > 6 ||
    damageBallistic < 1 ||
    damageBallistic > 6
  ) {
    errorDamage()
  }
  if (enemySave < 1 || enemySave > 6 || enemyInvSave < 0 || enemyInvSave > 6) {
    errorSave()
  }
  if (meleeAP > 6 || ballisticAP > 6) {
    errorAP()
  }
  if (isNaN(damageMelee * 1) || isNaN(damageBallistic * 1)) {
    errorDamageType()
  }
  if (isNaN(enemySave * 1) || isNaN(enemyInvSave * 1)) {
    errorSaveType()
  }
  // Typeof Test, da AP in der Formel addiert wird und es zu einem Fehler kommt
  if (typeof meleeAP === 'string' || typeof ballisticAP === 'string') {
    errorAPType()
  }

  if (meleeAP < 0) {
    meleeAP = meleeAP * -1
  }
  if (ballisticAP < 0) {
    ballisticAP = ballisticAP * -1
  }

  if (
    enemySave + meleeAP - enemySaveModifier > enemyInvSave &&
    enemyInvSave === 0 &&
    enemySave + meleeAP - enemySaveModifier > 6
  ) {
    saveMelee = 1
  } else if (
    enemySave + meleeAP - enemySaveModifier <= enemyInvSave ||
    enemyInvSave === 0
  ) {
    saveMelee = 1 - (6 - (enemySave + meleeAP - enemySaveModifier) + 1) / 6
  } else {
    saveMelee = 1 - (6 - enemyInvSave + 1) / 6
  }
  if (
    enemySave + ballisticAP - enemySaveModifier > enemyInvSave &&
    enemyInvSave === 0 &&
    enemySave + ballisticAP - enemySaveModifier > 6
  ) {
    saveBallistic = 1
  } else if (
    enemySave + ballisticAP - enemySaveModifier < enemyInvSave ||
    enemyInvSave === 0
  ) {
    saveBallistic =
      1 - (6 - (enemySave + ballisticAP - enemySaveModifier) + 1) / 6
  } else {
    saveBallistic = 1 - (6 - enemyInvSave + 1) / 6
  }

  const averageDamageMelee =
    props.woundProbability.melee * saveMelee * damageMelee
  const averageDamageBallistic =
    props.woundProbability.ballistic * saveBallistic * damageBallistic
  /**
   * @namespace
   * @property {object} averageDamage - averageDamage return object
   * @property {number} averageDamage.melee - average melee damage
   * @property {number} averageDamage.ballistic - average ballistic damage
   */
  return {
    melee: averageDamageMelee,
    ballistic: averageDamageBallistic
  }
}

export { damageProbability }
