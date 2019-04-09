import { actionTypes } from './index'

const defaultState = {
    allCommentsInfo: {},
    start: 0
}

export default (state = defaultState, action) => {
    
    switch(action.type) {
        case actionTypes.GET_ALLCOMMENTS_LIST:
            return {
                ...state,
                allCommentsInfo: action.data
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