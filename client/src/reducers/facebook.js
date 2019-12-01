import {FB_PSID_LOGIN_SUCCESS, CLOSE_WINDOW} from '../actions/types'

const initialState = {
    loading: true,
    error: {},
    closeWindow: false
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case FB_PSID_LOGIN_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false
            }
        case CLOSE_WINDOW:
            return {
                ...state,
                closeWindow: true
            }
        default:
            return state
    }
}
