import axios from 'axios'

import {GET_CATEGORY, CATEGORY_ERROR} from "../types";

// Get current users profile
export const getCategories = () => async dispatch => {
    try {
        const res = await axios.get('/api/underwriting')
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: CATEGORY_ERROR,
            payload: {msg: e.response.statusText, status: e.response.status}
        })
    }
}
