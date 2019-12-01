import axios from 'axios'

import {
    FB_PSID_LOGIN_FAIL,
    FB_PSID_LOGIN_SUCCESS
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
            type: FB_PSID_LOGIN_SUCCESS,
            payload: res.data,
        })

        dispatch(loadUser())
    } catch (e) {
        const errors = e.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: FB_PSID_LOGIN_FAIL,
        })
    }
}
