import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import category from './underwriting/category'

export default combineReducers({
  alert,
  auth,
  category
})
