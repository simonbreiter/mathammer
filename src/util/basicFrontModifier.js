function basicFront (woundModifier, basic, modifiedBasic) {
  if (woundModifier >= 0) {
    return basic
  } else {
    return modifiedBasic
  }
}

export { basicFront }
