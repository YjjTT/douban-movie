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
        this.props.getTop250MonvieInfo()
    }

    render() {
        const {
            newMovieInfo,
            weeklyMovieInfo,
            usBoxMovieInfo,
            top250MovieInfo
        } = this.props
        const date = new Date()

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
                        {/*  */}
                        <label className='head'>{weeklyMovieInfo.title}<span className='date'>{date.getMonth()}月{date.getUTCDate()}日 更新</span></label> 
                        <ul className='sideMovie'>
                            {
                                (weeklyMovieInfo.subjects || []).map((item, index) => (
                                    <li key={index}>
                                        {index + 1} <a href=''>{item.subject.title}</a>
                                        <label className='delta'><Icon type="arrow-up" /> {item.delta}</label>
                                    </li>
                                ))
                            }
                            
                        </ul>
                        {/*  */}
                        <label className='head'>{usBoxMovieInfo.title}<span className='date'>{date.getMonth()}月{date.getUTCDate()}日 更新 / 美元</span></label> 
                        <ul className='sideMovie'>
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
                        {/*  */}
                        <label className='head'>{top250MovieInfo.title} · · · · · ·<a className='top250All'>全部</a></label> 
                        <ul className='top250'>
                            {
                                (top250MovieInfo.subjects || []).map((item, index) => (
                                    <li key={index}>
                                        <a>
                                            <img alt={item.alt} src={item.images.medium} />
                                            <label className='movie-title'>{item.title}</label>
                                        </a>
                                    </li>
                                ))
                            }
                            {/* <li>
                                <a>
                                    <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.webp' />
                                    <label className='movie-title'>消失的爱人</label>
                                </a>
                            </li> */}
                            
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
        usBoxMovieInfo: state.chart.usBoxMovieInfo,
        top250MovieInfo: state.chart.top250MovieInfo
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
    },
    // 250
    getTop250MonvieInfo() {
        dispatch(actionCreators.getTop250MonvieInfo())
    }
    
})

export default connect(mapStateToProps, mapStateToDispatch)(Chart)