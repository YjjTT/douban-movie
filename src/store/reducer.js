import { combineReducers } from 'redux'
import { reducer as headReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as moreReducer } from '../pages/more/store'
import { reducer as chartReducer } from '../pages/chart/store'
import { reducer as top250Reducer } from '../pages/top250/store'
import { reducer as movieDetailReducer } from '../pages/movieDetail/store'

const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    more: moreReducer,
    chart: chartReducer,
    top250: top250Reducer,
    movieDetail: movieDetailReducer
})

export default reducer