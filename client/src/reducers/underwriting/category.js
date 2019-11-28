import {GET_CATEGORY, CATEGORY_ERROR} from "../../actions/types";

const initialState = {
    categories: null,
    loading: true,
    error: {}
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
        default:
            return state
    }
}
