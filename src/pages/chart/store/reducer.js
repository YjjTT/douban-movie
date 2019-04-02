import { actionTypes } from './index'

const defaultState = {
    newMovieInfo: {},
    weeklyMovieInfo: {},
    usBoxMovieInfo: {}
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_NEW_MOVIE_INFO:
            return {
                ...state,
                newMovieInfo: action.data
            }
        
        case actionTypes.GET_WEEKLY_MOVIE_INFO:
            return {
                ...state,
                weeklyMovieInfo: action.data
            }
        
        case actionTypes.GET_UXBOX_MOVIE_INFO:
            return {
                ...state,
                usBoxMovieInfo: action.data
            }
        
        default:
            return state
    }
}