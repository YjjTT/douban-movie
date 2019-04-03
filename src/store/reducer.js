import { combineReducers } from 'redux'
import { reducer as headReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as moreReducer } from '../pages/more/store'
import { reducer as chartReducer } from '../pages/chart/store'
import { reducer as top250Reducer } from '../pages/top250/store'

const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    more: moreReducer,
    chart: chartReducer,
    top250: top250Reducer
})

export default reducer