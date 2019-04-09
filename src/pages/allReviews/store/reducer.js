import { actionTypes } from './index'

const defaultState = {
    allReviewsInfo: {},
    start: 0
}

export default (state = defaultState, action) => {    
    switch(action.type) {
        case actionTypes.GET_ALLREVIEWS_LIST:
            return {
                ...state,
                allReviewsInfo: action.data
            }
        case actionTypes.CHANGE_START:
            return {
                ...state,
                start: action.data
            }
        default:
            return state
    }
}