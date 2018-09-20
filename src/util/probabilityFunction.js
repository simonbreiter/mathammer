function probability (prop, factor) {
  if (prop * factor < 0) {
    return 0
  } else {
    return prop * factor
  }
}

export { probability }
