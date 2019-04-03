import { actionTypes } from './index'

const defaultState = {
    top250MovieInfo: {},
}


export default (state = defaultState, action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.GET_TOP250_MOVIE_INFO:
            return {
                ...state,
                top250MovieInfo: action.data
            }
        default:
            return state
    }
}