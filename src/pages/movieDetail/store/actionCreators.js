import axios from 'axios'
import { actionTypes } from './index'

export const getMovieDetail = (id) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/openApi/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        }).then(res => {
            if (res.status === 200) {
                const data = res.data
                const action = {
                    type: actionTypes.GET_MOVIE_DETAIL,
                    data
                }
                dispatch(action)
            }
        }).catch(error => {

        }) 
    }
}