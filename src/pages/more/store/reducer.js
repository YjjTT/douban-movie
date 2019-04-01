import { actionTypes } from './index'

const defaultState = {
    tagList: [],
    dataList: [],
    page_limit: 20,
    page_start: 0,
    currentTagIndex: 0
}

export default (state = defaultState, action) => {

    
    switch(action.type) {
        case actionTypes.TAG_LIST:
            return {
                ...state,
                tagList: action.data
            }
        
        case actionTypes.DATA_LIST:
            return {
                ...state,
                dataList: action.data
            }
    
        case actionTypes.CHANGE_TAG_INDEX:
            return {
                ...state,
                currentTagIndex: action.data
            }
        default:
            return state
    }
}