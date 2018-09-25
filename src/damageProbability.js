import {
  errorDamage,
  errorDamageType,
  errorSave,
  errorSaveType,
  errorAP,
  errorAPType,
  errorValue
} from '../src/util/error'
import { positive } from '../src/util/positive'
import { save } from '../src/util/save'
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
  if (!props.hasOwnProperty('model') || !props.hasOwnProperty('enemy')) {
    errorValue()
  } else if (
    props.model.hasOwnProperty('melee') &&
    !props.model.hasOwnProperty('ballistic')
  ) {
    let apMelee = 0
    if (props.model.melee.hasOwnProperty('attackPower')) {
      apMelee = props.model.melee.attackPower
    } else {
      apMelee = 0
    }
    const meleeAP = positive(apMelee)
    const damageMelee = props.model.melee.damage
    const enemySave = props.enemy.save
    let enemyInvSave = 0
    if (props.enemy.hasOwnProperty('invulnerableSave')) {
      enemyInvSave = props.enemy.invulnerableSave
    } else {
      enemyInvSave = 0
    }
    let enemySaveModifier = 0
    if (props.enemy.hasOwnProperty('saveModifier')) {
      enemySaveModifier = props.enemy.saveModifier
    } else {
      enemySaveModifier = 0
    }
    if (damageMelee < 1 || damageMelee > 6) {
      errorDamage()
    }
    if (
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6
    ) {
      errorSave()
    }
    if (meleeAP > 6) {
      errorAP()
    }
    if (isNaN(damageMelee * 1)) {
      errorDamageType()
    }
    if (isNaN(enemySave * 1) || isNaN(enemyInvSave * 1)) {
      errorSaveType()
    }
    // Typeof Test, da AP in der Formel addiert wird und es zu einem Fehler kommt
    if (typeof meleeAP === 'string') {
      errorAPType()
    }

    const saveMelee = save(enemySave, meleeAP, enemySaveModifier, enemyInvSave)
    const averageDamageMelee =
      props.woundProbability.melee * saveMelee * damageMelee
    const averageDamageBallistic = 0
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
  } else if (
    !props.model.hasOwnProperty('melee') &&
    props.model.hasOwnProperty('ballistic')
  ) {
    let apBallistic = 0
    if (props.model.ballistic.hasOwnProperty('attackPower')) {
      apBallistic = props.model.ballistic.attackPower
    } else {
      apBallistic = 0
    }
    const ballisticAP = positive(apBallistic)
    const damageBallistic = props.model.ballistic.damage
    const enemySave = props.enemy.save
    let enemyInvSave = 0
    if (props.enemy.hasOwnProperty('invulnerableSave')) {
      enemyInvSave = props.enemy.invulnerableSave
    } else {
      enemyInvSave = 0
    }
    let enemySaveModifier = 0
    if (props.enemy.hasOwnProperty('saveModifier')) {
      enemySaveModifier = props.enemy.saveModifier
    } else {
      enemySaveModifier = 0
    }

    if (damageBallistic < 1 || damageBallistic > 6) {
      errorDamage()
    }
    if (
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6
    ) {
      errorSave()
    }
    if (ballisticAP > 6) {
      errorAP()
    }
    if (isNaN(damageBallistic * 1)) {
      errorDamageType()
    }
    if (isNaN(enemySave * 1) || isNaN(enemyInvSave * 1)) {
      errorSaveType()
    }
    // Typeof Test, da AP in der Formel addiert wird und es zu einem Fehler kommt
    if (typeof ballisticAP === 'string') {
      errorAPType()
    }

    const saveBallistic = save(
      enemySave,
      ballisticAP,
      enemySaveModifier,
      enemyInvSave
    )
    const averageDamageMelee = 0
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
  } else {
    let apMelee = 0
    if (props.model.melee.hasOwnProperty('attackPower')) {
      apMelee = props.model.melee.attackPower
    } else {
      apMelee = 0
    }
    const meleeAP = positive(apMelee)
    let apBallistic = 0
    if (props.model.ballistic.hasOwnProperty('attackPower')) {
      apBallistic = props.model.ballistic.attackPower
    } else {
      apBallistic = 0
    }
    const ballisticAP = positive(apBallistic)
    const damageMelee = props.model.melee.damage
    const damageBallistic = props.model.ballistic.damage
    const enemySave = props.enemy.save
    let enemyInvSave = 0
    if (props.enemy.hasOwnProperty('invulnerableSave')) {
      enemyInvSave = props.enemy.invulnerableSave
    } else {
      enemyInvSave = 0
    }
    let enemySaveModifier = 0
    if (props.enemy.hasOwnProperty('saveModifier')) {
      enemySaveModifier = props.enemy.saveModifier
    } else {
      enemySaveModifier = 0
    }

    if (
      damageMelee < 1 ||
      damageMelee > 6 ||
      damageBallistic < 1 ||
      damageBallistic > 6
    ) {
      errorDamage()
    }
    if (
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6
    ) {
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

    const saveMelee = save(enemySave, meleeAP, enemySaveModifier, enemyInvSave)
    const saveBallistic = save(
      enemySave,
      ballisticAP,
      enemySaveModifier,
      enemyInvSave
    )
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
}
export { damageProbability }
