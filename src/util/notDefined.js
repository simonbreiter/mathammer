import { errorValue } from '../util/error'

function notDefined (value) {
  if (!value) {
    errorValue()
  } else {
    return value
  }
}

export { notDefined }
