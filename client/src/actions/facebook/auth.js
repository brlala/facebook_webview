import axios from 'axios'

import {
    FB_PSID_LOAD_FAIL,
    FB_PSID_LOADED, LOGIN_FAIL, LOGIN_SUCCESS
} from '../types'
import {setAlert} from "../alert";
import {loadUser} from "../auth";

// Get categories list
export const facebookLogin = fbPayload => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const body = JSON.stringify(fbPayload)

    try {
        const res = await axios.post('/api/auth/facebook', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })

        dispatch(loadUser())
    } catch (e) {
        const errors = e.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL,
        })
    }
}
