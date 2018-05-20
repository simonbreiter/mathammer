function divide (a, b) {
  if (b == 0) {
    return 'Error'
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return 'Error'
  }

  return a / b
}

export { divide }
