import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import underwriting from './underwriting'

export default combineReducers({
  alert,
  auth,
  underwriting
})
