/**
 * Calculate wound probability
 * @param {object} props - property object
 * @param {object} props.model - model object
 * @param {number} props.model.strength - model strength
 * @param {object} props.enemy - enemy object
 * @param {object} props.enemy.toughness - enemy toughness
 * @param {object} props.reroll- reroll object
 * @param {string} props.reroll.wound - wound reroll
 * @param {object} props.modifier - modifier object
 * @param {number} props.modifier.wound - wound modifier
 * @param {object} props.abilities - ability object
 * @param {number} props.abilities.mortalWounds mortal wounds
 * @param {object} props.hitProbability - probability object
 * @param {number} props.hitProbability.hits successful hits
 * @returns {object} hitProbabilityReturn
 */

function woundProbability ({
  model,
  enemy,
  reroll,
  modifier,
  abilities,
  hitProbability
}) {
  const dice =
    model.strength > enemy.toughness
      ? model.strength >= enemy.toughness * 2
        ? 2
        : 3
      : model.strength == enemy.toughness
      ? 4
      : model.strength * 2 <= enemy.toughness
      ? 6
      : 5

  const modifiedDice =
    dice - modifier.wound > 6
      ? 7
      : dice - modifier.wound < 2
      ? 2
      : dice - modifier.wound

  const probability = (6 - dice + 1) / 6

  const modifiedProbability = (6 - modifiedDice + 1) / 6

  const mortalProbability = abilities.mortalWounds
    ? (6 - abilities.mortalWounds + 1) / 6
    : 0

  const rerollWound = {
    'reroll-one': 1 / 6,
    'reroll-all': 1 - probability,
    'reroll-none': 0
  }

  const fixWounds = rerollWound[reroll.wound]
    ? modifier.wound < 0
      ? modifiedProbability * hitProbability.hits
      : probability * hitProbability.hits
    : modifiedProbability * hitProbability.hits

  const rerollWounds =
    modifiedProbability * hitProbability.hits * rerollWound[reroll.wound]

  const wounds = fixWounds + rerollWounds
  const mortalWounds =
    mortalProbability * hitProbability.hits +
    mortalProbability * hitProbability.hits * rerollWound[reroll.wound]
  /**
   * @namespace
   * @property {object} woundProbabilityReturn - hitProbability return object
   * @property {number} woundProbabilityReturn.wounds - hits
   * @property {number} woundProbabilityReturn.mortalWounds - mortal wounds
   **/
  return {
    wounds,
    mortalWounds
  }
}

export { woundProbability }
