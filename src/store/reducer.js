import { combineReducers } from 'redux'
import { reducer as headReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as moreReducer } from '../pages/more/store'
import { reducer as chartReducer } from '../pages/chart/store'
import { reducer as top250Reducer } from '../pages/top250/store'
import { reducer as movieDetailReducer } from '../pages/movieDetail/store'
import { reducer as allCommentsReducer } from '../pages/allComments/store'
import { reducer as allReviewssReducer } from '../pages/allReviews/store'
import { reducer as actorInfoReducer } from '../pages/actorDetail/store'
import { reducer as comingReducer } from '../pages/coming/store'


const reducer = combineReducers({
    header: headReducer,
    home: homeReducer,
    more: moreReducer,
    chart: chartReducer,
    top250: top250Reducer,
    movieDetail: movieDetailReducer,
    comments: allCommentsReducer,
    reviews: allReviewssReducer,
    actorInfo: actorInfoReducer,
    coming: comingReducer
})

export default reducer