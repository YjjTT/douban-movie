import axios from 'axios'
import { actionTypes } from './index'

export const getActorInfo = (id) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `/openApi/celebrity/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b`
        }).then(res => {
            if (res.status === 200) {
                const action = {
                    type: actionTypes.GET_ACTOR_INFO,
                    data: res.data
                }
                dispatch(action)
            }            
        }).catch(error => {

        }) 
    }
}