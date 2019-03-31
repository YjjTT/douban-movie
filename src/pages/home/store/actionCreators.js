import axios from 'axios'
import { actionTypes } from './index'



/**
 * 正在热映
 * 
*/
const getTheater = (data) => ({
    type: actionTypes.GET_THEATER_LIST,
    data: data
})
export const getTheaterList = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/v2/movie/in_theaters'
        }).then(res => {
            if (res.status === 200) {
                const result = res.data.subjects
                dispatch(getTheater(result))
            }
        })
    }
}

/***
 * 
 * 最近热门电影
 */

 // 获取标签
 const getHotMovieTags = () => ({
     type: actionTypes.GET_HOT_MOVIE_TAGS
 })

 export const getHotMovieTagList = () => {
     return (dispatch) => {
         axios({
             method: 'get',
             url: '/j/search_tags'
         }).then(res => {
            console.log(res.data)
         })
     }
 }