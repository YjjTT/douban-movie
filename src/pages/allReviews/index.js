import React from 'react'
import { Rate, Pagination } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Link } from 'react-router-dom'

import './index.scss'

class AllReviews extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            isLaunch: false
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id
        this.setState({ id })
        this.props.getReviewsInfo(id, 0)
    }

    handleOnChange = (page, pageSize) => {
        const start = (page - 1)  * 20
        this.props.changeStart(start)
        this.props.getReviewsInfo(this.state.id, start)
    }

    handleOnClick = () => {
        this.setState({
            isLaunch: !this.state.isLaunch
        })
    }

    render() {
        const {
            allReviewsInfo
        } = this.props
        return (
            <div id='allReviews' className='clearfix'>
                <div className='comments'>
                    {
                        (allReviewsInfo.reviews || []).map((item, index) => (
                            <div key={index} className='comment clearfix'>
                                <img alt={item.author.alt} src={item.author.avatar} />
                                <div className='info'>
                                    <div className='clearfix'>
                                        <span className='name'>{item.author.name}</span>
                                        <Rate className='rate' allowHalf disabled defaultValue={item.rating.value} style={{fontSize: 13}}></Rate>
                                        <span className='time'>{item.created_at.split(' ')[0]}</span>
                                        <label className='num'><span>{item.useful_count}</span>有用</label>
                                    </div>
                                    <p>
                                        {
                                            this.state.isLaunch ? item.content : item.summary
                                        }
                                        (<span onClick={this.handleOnClick} className='isLaunch'>展开</span>)
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    <Pagination 
                        pageSize={allReviewsInfo.count} 
                        total={Math.ceil(allReviewsInfo.total / allReviewsInfo.count)} 
                        onChange={this.handleOnChange.bind(this)}
                    />
                </div>
                <div className='aside'>
                    <Link className='movieName' to={`/movieDetail/${(allReviewsInfo.subject || {}).id}`}> 
                        > 去 {(allReviewsInfo.subject || {}).title} 的页面
                    </Link>
                    <img 
                        alt={(allReviewsInfo.subject || {}).alt} 
                        src={((allReviewsInfo.subject || {}).images || {}).small} 
                    />
                    <label>导演: 
                        {
                            ((allReviewsInfo.subject || {}).directors || []).map((item, index) => (
                                <a href='/' key={index}>{item.name}</a>
                            ))
                        }
                    </label>
                    <label>主演: 
                        {
                            ((allReviewsInfo.subject || {}).casts || []).map((item, index) => (
                                <a href='/' key={index}>{item.name} /</a>
                            ))
                        }
                    </label>
                    <label>类型: 
                        {
                            ((allReviewsInfo.subject || {}).genres || []).map((item, index) => (
                                <span key={index}>{item} /</span>
                            ))
                        }
                    </label>
                    <label>片场: 
                        {
                            ((allReviewsInfo.subject || {}).durations || [])[0]
                        }
                    </label>
                    <label>上映: 
                        {
                            (allReviewsInfo.subject || {}).year
                        }
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allReviewsInfo: state.reviews.allReviewsInfo
})

const mapStateToDispatch = (dispatch) => ({
    
    getReviewsInfo(id, start) {
        dispatch(actionCreators.getReviewsInfo(id, start))
    },
    
    changeStart(start) {
        dispatch(actionCreators.changeStart(start))
    }
     
})

export default connect(mapStateToProps, mapStateToDispatch)(AllReviews)