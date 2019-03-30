import { combineReducers } from 'redux'
import { reducer as headReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'

const reducer = combineReducers({
    header: headReducer,
    home: homeReducer
})

export default reducer