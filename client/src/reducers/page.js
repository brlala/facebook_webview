import {CHANGE_PAGE_STATE} from '../actions/types'

const initialState = {
    pageName: null
}

export default function (state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case CHANGE_PAGE_STATE:
            return {
                ...state,
                pageName: payload,
            }
        default:
            return state
    }
}
