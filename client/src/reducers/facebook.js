import {FB_PSID_LOADED, CLOSE_WINDOW} from '../actions/types'

const initialState = {
    loading: true,
    error: {},
    closeWindow: false
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case FB_PSID_LOADED:
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
