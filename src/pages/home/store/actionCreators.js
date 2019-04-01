import axios from 'axios'
import { actionTypes } from './index'



/**
 * 正在热映
 * 
*/

export const getTheaterList = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/v2/movie/in_theaters'
        }).then(res => {
            if (res.status === 200) {
                const result = res.data.subjects
                const action = {
                    type: actionTypes.GET_THEATER_LIST,
                    data: result
                }
                dispatch(action)
            }
        })
    }
}

/***
 * 
 * 最近热门电影
 */

 // 获取标签
 export const getHotMovieTagList = () => {
     return (dispatch) => {
         axios({
             method: 'get',
             url: '/apb/j/search_tags?type=movie&source=index'
         }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.GET_HOT_MOVIE_TAGS,
                    data: res.data.tags
                }
                dispatch(action)
            }
         })
     }
 }