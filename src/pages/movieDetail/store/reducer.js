import { actionTypes } from './index'

const defaultState = {
    movieDetail: {}
}

export default (state = defaultState, action) => {
    
    switch(action.type) {
        case actionTypes.GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.data
            }
        default:
            return state
    }
}