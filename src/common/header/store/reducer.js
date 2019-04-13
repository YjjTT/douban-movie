import { actionTypes } from './index'
const defaultState = {
    searchData: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_SEARCH_DATA:
            return {
                ...state,
                searchData: action.data
            }
        default:
            return state
    }
}