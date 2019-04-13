import React from 'react'
import { connect } from 'react-redux'
import { Rate, Button } from 'antd'
import { actionCreators } from './store/index'
import { Link } from 'react-router-dom'
import './index.scss'

class Coming extends React.Component {
    componentWillMount() {
        this.props.getComingData()
    }
    render() {
        const {
            comingInfo
        } = this.props
        console.log(comingInfo)
        return (
            <div id='Coming' className='clearfix'>
                <div className='content'>
                    <ul className='each'>
                        {
                            (comingInfo.subjects || []).map((item, index) => (

                                <li key={index}>
                                    <Link to={`/movieDetail/${item.id}`}><img alt={item.alt} src={(item.images || {}).small}/></Link>
                                    <Link to={`/movieDetail/${item.id}`} className='title'>{item.title}</Link>
                                    <div className='rate'>
                                        <Rate allowHalf disabled defaultValue={3} style={{fontSize: 13}}></Rate>
                                        <span className='num'>4</span>
                                    </div>
                                    <Button type="primary">选座购票</Button>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comingInfo: state.coming.comingInfo
    }
}

const mapStateToDispatch = (dispatch) => ({
    getComingData() {
        dispatch(actionCreators.getComingData())
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Coming)