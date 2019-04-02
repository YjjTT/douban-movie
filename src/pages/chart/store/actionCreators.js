
import axios from 'axios'
import { actionTypes } from './index'

export const getNewMovieInfo = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/openApi/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
           if (res.status === 200) {
               console.log(res.data)
               const action = {
                   type: actionTypes.GET_NEW_MOVIE_INFO,
                   data: res.data
               }
               dispatch(action)
           }
        })

    }
}