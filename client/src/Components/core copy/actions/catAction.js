import * as CONSTANTS from "../constants"

export const addList = (category) => {
  return({
    type: CONSTANTS.ADD_LIST,
    payload: category
  })
}

export const addRange = (range) => {
  return({
    type: CONSTANTS.ADD_RANGE,
    payload: range
  })
}