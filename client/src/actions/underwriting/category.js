import axios from 'axios'

import {
  GET_CATEGORY,
  CATEGORY_ERROR,
  GET_SUBCATEGORY,
  SUBCATEGORY_ERROR,
  SEND_SELECTION_SUCCESSFUL,
  SEND_SELECTION_FAIL,
  CLOSE_WINDOW,
} from '../types'

// Get categories list
export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get('/api/underwriting')
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    })
  } catch (e) {
    console.log(e)
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: e.statusText, status: e.status },
    })
  }
}

// Get selected category
export const getSubcategories = subcategory => async dispatch => {
  try {
    const res = await axios.get(`/api/underwriting/${subcategory}`)
    dispatch({
      type: GET_SUBCATEGORY,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: SUBCATEGORY_ERROR,
      payload: { msg: e.statusText, status: e.status },
    })
  }
}

// post data to gateway
export const postSubcategory = (userID, subcategory) => async dispatch => {
  const flowName = 'Microapp Underwriting - Guide'

  try {
    // Getting required information
    let res = await axios.get(`/api/flows/${flowName}`)
    const flowID = res.data._id

    // Initializing Content
    const body = {
      'object': 'page',
      'entry': [
        {
          'messaging': [
            {
              'sender': { 'id': userID },
              'postback': { 'payload': `${flowID}_${subcategory}` },
            }],
        }],
    }

    // Posting to Gateway
    await axios.post(`/gateway/facebook`, body)
    dispatch({
      type: SEND_SELECTION_SUCCESSFUL,
    })
  } catch (e) {
    dispatch({
      type: SEND_SELECTION_FAIL,
      payload: { msg: e.statusText, status: e.status },
    })
  }
}
