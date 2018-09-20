function dice (strength, toughness) {
  if (strength >= 2 * toughness) {
    return 2
  } else if (strength > toughness && strength < 2 * toughness) {
    return 3
  } else if (strength === toughness) {
    return 4
  } else if (strength < toughness && strength > toughness / 2) {
    return 5
  } else {
    return 6
  }
}

export { dice }
