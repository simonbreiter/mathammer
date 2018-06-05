function errorRange () {
  throw new RangeError('Values are not in range, use a value between 2 and 6.')
}
function errorHitType () {
  throw new TypeError('Please use a value between 2 and 6.')
}
function errorStrength () {
  throw new RangeError('Values are not in range, use a value > 0.')
}
function errorStrengthType () {
  throw new TypeError('Please use a value > 0.')
}
function errorToughness () {
  throw new RangeError('Values are not in range, use a value between 2 and 8.')
}
function errorToughnessType () {
  throw new TypeError('Please use a value between 2 and 8.')
}
export {
  errorRange,
  errorHitType,
  errorStrength,
  errorStrengthType,
  errorToughness,
  errorToughnessType
}
