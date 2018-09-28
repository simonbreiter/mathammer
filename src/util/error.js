function errorValueInRange () {
  throw new RangeError('Please use a Value in range.')
}
function errorStringValue () {
  throw new TypeError('Please insert a Number, not a String')
}
function errorValue () {
  throw new RangeError('Please insert a value')
}
export { errorValueInRange, errorStringValue, errorValue }
