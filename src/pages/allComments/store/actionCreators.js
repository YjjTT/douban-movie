import axios from 'axios'
import { actionTypes } from './index'

export const getAllCommentsInfo = (id, start) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/openApi/subject/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=20`
        }).then(res => {
            if (res.status === 200) {
                const data = res.data
                const action = {
                    type: actionTypes.GET_ALLCOMMENTS_LIST,
                    data
                }
                dispatch(action)
                
            }
        }).catch(error => {

        }) 
    }
}

export const changeStart = (start) => {
    return dispatch => {
        const action = {
            type: actionTypes.CHANGE_START,
            data: start
        }
        dispatch(action)
    }
}