import { actionTypes } from './index'

const defaultState = {
    newMovieInfo: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_NEW_MOVIE_INFO:
            return {
                ...state,
                newMovieInfo: action.data
            }
        
        default:
            return state
    }
}