
import axios from 'axios'
import { actionTypes } from './index'

export const getNewMovieInfo = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/openApi/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
           if (res.status === 200) {
               const action = {
                   type: actionTypes.GET_NEW_MOVIE_INFO,
                   data: res.data
               }
               dispatch(action)
           }
        })
    }
}

export const getWeeklyMonvieInfo = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/openApi/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
           if (res.status === 200) {
               const action = {
                   type: actionTypes.GET_WEEKLY_MOVIE_INFO,
                   data: res.data
               }
               dispatch(action)
           }
        })
    }
}

export const getUsBoxMonvieInfo = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/openApi/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
           if (res.status === 200) {
               const action = {
                   type: actionTypes.GET_UXBOX_MOVIE_INFO,
                   data: res.data
               }
               dispatch(action)
           }
        })
    }
}

export const getTop250MonvieInfo = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/openApi/top250?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
           if (res.status === 200) {
               const action = {
                   type: actionTypes.GET_TOP250_MOVIE_INFO,
                   data: res.data
               }
               dispatch(action)
           }
        })
    }
}