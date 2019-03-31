import { actionTypes } from './index'

const defaultState = {
    theraterList: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.GET_THEATER_LIST:
        const data = [
            [action.data[0], action.data[1], action.data[2], action.data[3], action.data[4]],
            [action.data[5], action.data[6], action.data[7], action.data[8], action.data[9]]]

            return {
                // theraterList: action.data
                theraterList: data
            }
        default:
            return state
    }
}