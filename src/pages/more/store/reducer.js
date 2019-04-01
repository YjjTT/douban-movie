import { actionTypes } from './index'

const defaultState = {
    tagList: []
}

export default (state = defaultState, action) => {

    
    switch(action.type) {
        case actionTypes.TAG_LIST:
            return {
                tagList: action.data
            }
        default:
            return state
    }
}