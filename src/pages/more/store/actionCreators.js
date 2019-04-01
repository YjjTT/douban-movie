import axios from 'axios'
import { actionTypes } from './index'

export const getTagList = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: '/apb/j/search_tags?type=movie'
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.TAG_LIST,
                    data: res.data.tags
                }
                dispatch(action)
            }
        }).catch(error => {

        })
    }
}