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
function errorSave () {
  throw new RangeError('Values are not in range, use a value between 2 and 6.')
}
function errorSaveType () {
  throw new TypeError('Please use a value between 2 and 6.')
}
function errorAP () {
  throw new RangeError('Values are not in range, use a value between 0 and 6.')
}
function errorAPType () {
  throw new TypeError('Please use a value between 0 and 6.')
}
function errorDamage () {
  throw new RangeError('Values are not in range, use a value between 1 and 6.')
}
function errorDamageType () {
  throw new TypeError('Please use a value between 1 and 6.')
}
function errorValue () {
  throw new ReferenceError('Please insert a value')
}
export {
  errorRange,
  errorHitType,
  errorStrength,
  errorStrengthType,
  errorToughness,
  errorToughnessType,
  errorSave,
  errorSaveType,
  errorAP,
  errorAPType,
  errorDamage,
  errorDamageType,
  errorValue
}
