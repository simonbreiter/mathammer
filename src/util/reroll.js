function reroll (woundReroll, modifiedBasic, basicFront, basicBack, basic) {
  if (woundReroll === 'reroll-none') {
    return modifiedBasic
  } else if (woundReroll === 'reroll-1') {
    return basicFront + 1 / 6 * basicBack
  } else {
    return basicFront + (1 - basic) * basicBack
  }
}

export { reroll }
