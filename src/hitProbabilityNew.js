import { errorNotInRange } from '../src/util/error'
/**
 * Calculate hit probability
 * @param {object} props - property object
 * @param {number} props.unitSize - unit size object
 * @param {object} props.model - model object
 * @param {number} props.model.attacks - attack object
 * @param {number} props.model.skill - skill object
 * @param {number} props.model.alwaysHitOn - guaranteed hit on
 * @param {object} props.reroll- reroll object
 * @param {string} props.reroll.hit - hit reroll object
 * @param {object} props.modifier - modifier object
 * @param {number} props.modifier.hit - hit modifier object
 * @param {object} props.abilities - ability object
 * @param {number} props.abilities.extraHitOn - extra hit modifier
 * @param {number} props.abilities.extraHitRollOn - extra hit Roll modifier
 * @param {number} props.abilities.extraAttacks - extra attacks object
 * @returns {object} hitProbabilityReturn
 */

function hitProbability ({ model, reroll, modifier, abilities, unitSize }) {
  if (model.skill < 2 || model.skill > 6) {
    errorNotInRange()
  }
  const attacks = (model.attacks + abilities.extraAttacks) * unitSize

  const skill = model.skill

  const modifiedSkill =
    skill - modifier.hit < 2
      ? 2
      : skill - modifier.hit >= 7
      ? 7
      : skill - modifier.hit

  const alwaysHit = model.alwaysHitOn ? model.alwaysHitOn : 7

  const probability =
    skill > alwaysHit ? (6 - alwaysHit + 1) / 6 : (6 - skill + 1) / 6

  const modifiedProbability =
    modifiedSkill > alwaysHit
      ? (6 - alwaysHit + 1) / 6
      : (6 - modifiedSkill + 1) / 6

  const rerollHit = {
    'reroll-one': 1 / 6,
    'reroll-all': 1 - probability,
    'reroll-none': 0
  }

  const generatedHits = abilities.extraHitOn
    ? ((6 - abilities.extraHitOn + 1) / 6) * attacks +
      ((6 - abilities.extraHitOn + 1) / 6) * attacks * rerollHit[reroll.hit]
    : 0

  const fixHits = rerollHit[reroll.hit]
    ? modifier.hit < 0
      ? attacks * modifiedProbability
      : attacks * probability
    : attacks * modifiedProbability

  const rerollHits = attacks * rerollHit[reroll.hit] * modifiedProbability

  const extraHit = abilities.extraHitRollOn
    ? attacks / abilities.extraHitRollOn +
      (attacks * rerollHit[reroll.hit]) / abilities.extraHitRollOn
    : 0

  const fixExtraHits = rerollHit[reroll.hit]
    ? modifier.hit < 0
      ? extraHit * modifiedProbability
      : extraHit * probability
    : extraHit * modifiedProbability

  const rerollExtraHits = extraHit * modifiedProbability * rerollHit[reroll.hit]

  const hits =
    fixHits + rerollHits + fixExtraHits + rerollExtraHits + generatedHits
  /**
   * @namespace
   * @property {object} hitProbabilityReturn - hitProbability return object
   * @property {number} hitProbabilityReturn.hits - hits
   **/

  return {
    hits
  }
}

export { hitProbability }
