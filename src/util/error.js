function errorRange () {
  throw new RangeError('Values are not in range, use a value between 2 and 6.')
}
function errorType () {
  throw new TypeError('Please use a value between 2 and 6.')
}

export { errorRange, errorType }
