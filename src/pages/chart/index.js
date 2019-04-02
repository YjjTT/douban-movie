import React from 'react'
import { Rate, Icon } from 'antd'
import { connect } from 'react-redux'
import './index.scss'
import { actionCreators } from './store';

class Chart extends React.Component {

    componentDidMount() {
        this.props.getNewMovieInfo()
        this.props.getWeeklyMonvieInfo()
        this.props.getUsBoxMonvieInfo()
    }

    render() {
        const {
            newMovieInfo,
            weeklyMovieInfo,
            usBoxMovieInfo
        } = this.props
        return (
            <div id='chart'>
                <h1>豆瓣电影排行榜</h1>
                <div className='content clearfix'>
                    <div className='article'>
                        <label className='head'>{newMovieInfo.title} · · · · · ·</label>
                        {
                            (newMovieInfo.subjects || []).map((item, index) => (
                                <div key={index} className='item clearfix'>
                                    <img alt={item.alt} src={item.images.medium} />
                                    <div className='desc'>
                                        <a href='' className='title'>{item.title} / {item.original_title}</a>
                                        <p className='actors'>
                                            {item.pubdates[0]} 
                                            {
                                                item.casts.map((item, index) => (
                                                    <span key={index}>/ {item.name}</span>
                                                ))
                                            }
                                        </p>
                                        
                                        <div className='bottom'>
                                            <Rate style={{ fontSize: 10, color: "#FFAC2C" }} allowHalf disabled defaultValue={item.rating.stars / 10} />
                                            <label>{item.rating.average}</label>
                                            <label className='comment'>({item.collect_count}评价)</label>
                                        </div>
                                    </div>
                                </div>  
                            ))
                        }
                    </div>
                    <div className='aside'>
                        <label className='head'>{weeklyMovieInfo.title} · · · · · ·</label> 
                        <ul>
                            {
                                (weeklyMovieInfo.subjects || []).map((item, index) => (
                                    <li key={index}>
                                        {index + 1} <a href=''>{item.subject.title}</a>
                                        <label className='delta'><Icon type="arrow-up" /> {item.delta}</label>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        <label className='head'>{usBoxMovieInfo.title} · · · · · ·</label> 
                        <ul>
                            {
                                (usBoxMovieInfo.subjects || []).map((item, index) => (
                                    <li key={index}>
                                        {index + 1} <a href=''>{item.subject.title}</a> 
                                        {
                                            item.new ? <label className='new'>new</label> : null
                                        }
                                        <label className='money'>{Math.floor(item.box / 10000)}万</label>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>  
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newMovieInfo: state.chart.newMovieInfo,
        weeklyMovieInfo: state.chart.weeklyMovieInfo,
        usBoxMovieInfo: state.chart.usBoxMovieInfo
    }
}

const mapStateToDispatch = (dispatch) => ({
    // 新电影
    getNewMovieInfo() {
        dispatch(actionCreators.getNewMovieInfo())
    },
    // 一周电影
    getWeeklyMonvieInfo() {
        dispatch(actionCreators.getWeeklyMonvieInfo())
    },
    // 北美
    getUsBoxMonvieInfo() {
        dispatch(actionCreators.getUsBoxMonvieInfo())
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Chart)