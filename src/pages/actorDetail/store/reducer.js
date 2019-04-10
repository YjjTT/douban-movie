import { actionTypes } from './index'

const defaultState = {
    actorInfo: {}
}

export default (state = defaultState, action) => {
    
    switch(action.type) {
        case actionTypes.GET_ACTOR_INFO:
            return {
                ...state,
                actorInfo: action.data
            }
        default:
            return state
    }
}