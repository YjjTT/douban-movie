import { actionTypes } from './index'

const defaultState = {
    newMovieInfo: {},
    weeklyMovieInfo: {},
    usBoxMovieInfo: {},
    top250MovieInfo: {}
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
            
        case actionTypes.GET_TOP250_MOVIE_INFO:
            return {
                ...state,
                top250MovieInfo: action.data
            }
        
        default:
            return state
    }
}