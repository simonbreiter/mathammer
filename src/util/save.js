function save (enemySave, AP, enemySaveModifier, enemyInvSave) {
  if (
    enemySave + AP - enemySaveModifier > enemyInvSave &&
    enemyInvSave === 0 &&
    enemySave + AP - enemySaveModifier > 6
  ) {
    return 1
  } else if (
    enemySave + AP - enemySaveModifier <= enemyInvSave ||
    enemyInvSave === 0
  ) {
    return 1 - (6 - (enemySave + AP - enemySaveModifier) + 1) / 6
  } else {
    return 1 - (6 - enemyInvSave + 1) / 6
  }
}
export { save }
