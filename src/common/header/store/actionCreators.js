import axios from 'axios'
import { actionTypes } from './index'

export const getSearchData = (keywork) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/apb/j/subject_suggest?q=${keywork}`
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.GET_SEARCH_DATA,
                    data: res.data
                }
                dispatch(action)
            }            
        }).catch(error => {

        }) 
    }
}