import {
  errorValueInRange,
  errorStringValue,
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
      apMelee = parseInt(props.model.melee.attackPower)
    } else {
      apMelee = 0
    }
    const meleeAP = positive(apMelee)
    const damageMelee = parseInt(props.model.melee.damage)
    const enemySave = parseInt(props.enemy.save)
    let enemyInvSave = 0
    if (props.enemy.hasOwnProperty('invulnerableSave')) {
      enemyInvSave = parseInt(props.enemy.invulnerableSave)
    } else {
      enemyInvSave = 0
    }
    let enemySaveModifier = 0
    if (props.enemy.hasOwnProperty('saveModifier')) {
      enemySaveModifier = parseInt(props.enemy.saveModifier)
    } else {
      enemySaveModifier = 0
    }

    if (
      damageMelee < 1 ||
      damageMelee > 6 ||
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6 ||
      meleeAP > 6
    ) {
      errorValueInRange()
    }
    if (
      isNaN(damageMelee) ||
      isNaN(enemySave) ||
      isNaN(enemyInvSave) ||
      isNaN(meleeAP)
    ) {
      errorStringValue()
    }

    const saveMelee = save(enemySave, meleeAP, enemySaveModifier, enemyInvSave)
    const averageDamageMelee =
      props.woundProbability.melee * saveMelee * damageMelee
    /**
     * @namespace
     * @property {object} averageDamage - averageDamage return object
     * @property {number} averageDamage.melee - average melee damage
     * @property {number} averageDamage.ballistic - average ballistic damage
     */
    return {
      melee: averageDamageMelee
    }
  } else if (
    !props.model.hasOwnProperty('melee') &&
    props.model.hasOwnProperty('ballistic')
  ) {
    let apBallistic = 0
    if (props.model.ballistic.hasOwnProperty('attackPower')) {
      apBallistic = parseInt(props.model.ballistic.attackPower)
    } else {
      apBallistic = 0
    }
    const ballisticAP = positive(apBallistic)
    const damageBallistic = parseInt(props.model.ballistic.damage)
    const enemySave = parseInt(props.enemy.save)
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
      damageBallistic < 1 ||
      damageBallistic > 6 ||
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6 ||
      ballisticAP > 6
    ) {
      errorValueInRange()
    }
    if (
      isNaN(damageBallistic) ||
      isNaN(enemySave) ||
      isNaN(enemyInvSave) ||
      isNaN(ballisticAP)
    ) {
      errorStringValue()
    }

    const saveBallistic = save(
      enemySave,
      ballisticAP,
      enemySaveModifier,
      enemyInvSave
    )
    const averageDamageBallistic =
      props.woundProbability.ballistic * saveBallistic * damageBallistic
    /**
     * @namespace
     * @property {object} averageDamage - averageDamage return object
     * @property {number} averageDamage.melee - average melee damage
     * @property {number} averageDamage.ballistic - average ballistic damage
     */
    return {
      ballistic: averageDamageBallistic
    }
  } else {
    let apMelee = 0
    if (props.model.melee.hasOwnProperty('attackPower')) {
      apMelee = parseInt(props.model.melee.attackPower)
    } else {
      apMelee = 0
    }
    const meleeAP = positive(apMelee)
    let apBallistic = 0
    if (props.model.ballistic.hasOwnProperty('attackPower')) {
      apBallistic = parseInt(props.model.ballistic.attackPower)
    } else {
      apBallistic = 0
    }
    const ballisticAP = positive(apBallistic)
    const damageMelee = parseInt(props.model.melee.damage)
    const damageBallistic = parseInt(props.model.ballistic.damage)
    const enemySave = parseInt(props.enemy.save)
    let enemyInvSave = 0
    if (props.enemy.hasOwnProperty('invulnerableSave')) {
      enemyInvSave = parseInt(props.enemy.invulnerableSave)
    } else {
      enemyInvSave = 0
    }
    let enemySaveModifier = 0
    if (props.enemy.hasOwnProperty('saveModifier')) {
      enemySaveModifier = parseInt(props.enemy.saveModifier)
    } else {
      enemySaveModifier = 0
    }

    if (
      damageMelee < 1 ||
      damageMelee > 6 ||
      damageBallistic < 1 ||
      damageBallistic > 6 ||
      enemySave < 1 ||
      enemySave > 6 ||
      enemyInvSave < 0 ||
      enemyInvSave > 6 ||
      meleeAP > 6 ||
      ballisticAP > 6
    ) {
      errorValueInRange()
    }

    if (
      isNaN(damageMelee) ||
      isNaN(damageBallistic) ||
      isNaN(enemySave) ||
      isNaN(enemyInvSave) ||
      isNaN(meleeAP) ||
      isNaN(ballisticAP)
    ) {
      errorStringValue()
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
