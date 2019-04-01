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

export const getDataList = (page_limit, page_start) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/apb/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=${page_limit}&page_start=${page_start}`
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.DATA_LIST,
                    data: res.data.data
                }
                dispatch(action)
            }
        }).then(error => {

        })
    }
}

export const changeTagIndex = (index) => {
    return dispatch => {
        const action = {
            type: actionTypes.CHANGE_TAG_INDEX,
            data: index
        }
        dispatch(action)
    }
}