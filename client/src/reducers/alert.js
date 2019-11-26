import { REMOVE_ALERT, SET_ALERT } from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action
  
  switch (type) {
    case SET_ALERT:
      return [...state, payload] // if there's already alert in there, copy and append
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload)
    default:
      return state
  }
}