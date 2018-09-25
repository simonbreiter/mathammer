function defineReroll (reroll) {
  if (typeof reroll === 'undefined') {
    return 'reroll-none'
  } else {
    return reroll
  }
}

export { defineReroll }
