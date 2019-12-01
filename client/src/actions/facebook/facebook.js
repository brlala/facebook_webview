import axios from 'axios'

import {
    FB_PSID_LOAD_FAIL,
    FB_PSID_LOADED
} from '../types'

// Get categories list
export const getUserId = () => async dispatch => {
    try {
        const res = await axios.post('/api/auth/facebook')
        dispatch({
            type: FB_PSID_LOADED,
            payload: res.data,
        })
    } catch (e) {
        dispatch({
            type: FB_PSID_LOAD_FAIL,
            payload: { msg: e.response.statusText, status: e.response.status },
        })
    }
}
