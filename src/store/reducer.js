import { combineReducers } from 'redux'
import { reducer as headReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as moreReducer } from '../pages/more/store'

const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    more: moreReducer
})

export default reducer