function defineReroll (reroll) {
  if (reroll === undefined) {
    return 'reroll-none'
  } else {
    return reroll
  }
}

export { defineReroll }
