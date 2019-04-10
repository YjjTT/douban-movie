import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store/index';

import './index.scss'

class ActorDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            id: ''
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id
        this.setState({ id })
        this.props.getActorInfo(id)
    }

    render() {
        const {
            actorInfo
        } = this.props
        console.log(actorInfo)
        return(
            <div id='actorDetail'>
                <h2 className='actorName'>{actorInfo.name}</h2>
                <div className='content'>
                    <div className='clearfix'>
                        <img alt={actorInfo.alt} src={(actorInfo.avatars || {}).small} />
                        <div className='info'>
                            <label>性别: <span>{actorInfo.gender}</span></label>
                            <label>星座: <span>{actorInfo.constellation}</span></label>
                            <label>出生日期: <span>{actorInfo.birthday}</span></label>
                            <label>出生地: <span>{actorInfo.born_place}</span></label>
                            <label>职业: 
                                {
                                    (actorInfo.professions || []).map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))
                                }
                            </label>
                        </div>
                    </div>
                    <div className='desc'>
                        <h2>影人简介 ····</h2>
                        <p className='summary'>{actorInfo.summary}</p>
                    </div>
                    <div className='desc'>
                        <h2>影人图片 ····</h2>
                        <ul>
                            <li>
                                <img alt='' src='https://img3.doubanio.com/view/photo/m/public/p2175540865.jpg' />
                            </li>
                            <li>
                                <img alt='' src='https://img3.doubanio.com/view/photo/m/public/p2175540865.jpg' />
                            </li>
                            <li>
                                <img alt='' src='https://img3.doubanio.com/view/photo/m/public/p2175540865.jpg' />
                            </li>
                            <li>
                                <img alt='' src='https://img3.doubanio.com/view/photo/m/public/p2175540865.jpg' />
                            </li>
                            <li>
                                <img alt='' src='https://img3.doubanio.com/view/photo/m/public/p2175540865.jpg' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='aside'></div>
            </div>
        )
    }
}

const mapToProps = (state) => ({
    actorInfo: state.actorInfo.actorInfo

})

const mapToDispatch = (dispatch) => ({
    getActorInfo(id) {
        dispatch(actionCreators.getActorInfo(id))
    }
})

export default connect(mapToProps, mapToDispatch)(ActorDetail)