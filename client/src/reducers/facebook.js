import {FB_PSID_LOADED} from '../actions/types'

const initialState = {
    loading: true,
    error: {},
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
        default:
            return state
    }
}
