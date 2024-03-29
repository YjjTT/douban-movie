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
        const photos = (actorInfo.photos || []).splice(0, 5)
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
                            {
                                photos.map((item, index) => (
                                    <li key={index}>
                                        <img alt={item.alt} src={item.image} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='desc'>
                        <h2>最受好评的五部电影 ····</h2>
                        <ul>
                            {
                                (actorInfo.works || []).map((item, index) => (
                                    <li key={index}>
                                        <div>
                                        <img alt={item.subject.alt} src={item.subject.images.small} />
                                        <span className='movie-title'>{item.subject.title}</span>
                                        </div>
                                        
                                    </li>
                                ))
                            }
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