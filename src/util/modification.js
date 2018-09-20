function modification (dice, modifier) {
  const modification = dice - modifier
  if (modification < 2) {
    return 2
  } else {
    return modification
  }
}

export { modification }
