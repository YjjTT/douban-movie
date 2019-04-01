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
            let data = action.isSwitchTag ? [] : state.dataList
            return {
                ...state,
                // dataList: action.data,
                dataList: data.concat(action.data)
            }
    
        case actionTypes.CHANGE_TAG_INDEX:
            return {
                ...state,
                currentTagIndex: action.data
            }
        
            case actionTypes.CHANGE_PAGE_START:
                return {
                    ...state,
                    page_start: action.data
                }
        default:
            return state
    }
}