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
                axios({
                    method: 'get',
                    url: `/apb/j/search_subjects?type=movie&tag=${res.data.tags[0]}&page_limit=20&page_start=0`
                }).then(res => {
                    if (res.status === 200) {
                        const innerAction = {
                            type: actionTypes.DATA_LIST,
                            data: res.data.subjects
                        }
                        dispatch(innerAction)
                    }
                }).catch(error => {
                })

                dispatch(action)
            }
        }).catch(error => {

        })
    }
}

export const getDataList = (tag, page_limit = 20, page_start = 0) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/apb/j/search_subjects?type=movie&tag=${tag}&page_limit=${page_limit}&page_start=${page_start}`
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