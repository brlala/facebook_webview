import {
    GET_CATEGORY,
    CATEGORY_ERROR,
    GET_SUBCATEGORY, SUBCATEGORY_ERROR,
} from '../actions/types'

const initialState = {
    categories: null,
    loading: true,
    error: {},
    sendToGateway: false
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case GET_SUBCATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false,
                sendToGateway: true
            }
        case SUBCATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        default:
            return state
    }
}
