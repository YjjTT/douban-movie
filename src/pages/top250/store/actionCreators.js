import axios from 'axios'
import { actionTypes } from './index'

export const getTop250MovieInfo = (page_start) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/openApi/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${page_start}&count=25`
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.GET_TOP250_MOVIE_INFO,
                    data: res.data
                }
                dispatch(action)
            }
        }).catch(error => {

        })
    }
}
