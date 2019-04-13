import { actionTypes } from './index'

const defaultState = {
    comingInfo: {}
}


export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_COMING_DATA_INFO:
            return {
                ...state,
                comingInfo: action.data
            }
        default:
            return state
    }
}
