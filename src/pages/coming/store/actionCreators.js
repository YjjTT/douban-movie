
import axios from 'axios'
import { actionTypes } from './index'

export const getComingData = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/openApi/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b'
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.GET_COMING_DATA_INFO,
                    data: res.data
                }
                dispatch(action)
            }
        })
    }
}