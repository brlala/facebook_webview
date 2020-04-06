import { CHANGE_PAGE_STATE } from './types'

// Setting page state for home button
export const setPage = (currentPage) => dispatch => {
  dispatch({
    type: CHANGE_PAGE_STATE,
    payload: currentPage,
  })
}