import React from 'react'
import { Rate } from 'antd'
import { connect } from 'react-redux'
import './index.scss'
import { actionCreators } from './store';

class Chart extends React.Component {

    componentDidMount() {
        this.props.getNewMovieInfo()
    }

    render() {
        const {
            newMovieInfo
        } = this.props
        return (
            <div id='chart'>
                <h1>豆瓣电影排行榜</h1>
                <div className='content'>
                    <div className='article'>
                        <label className='head'>{newMovieInfo.title} · · · · · ·</label>
                        {
                            (newMovieInfo.subjects || []).map((item, index) => (
                                <div key={index} className='item clearfix'>
                                    <img alt={item.alt} src={item.images.medium} />
                                    <div className='desc'>
                                        <a href='' className='title'>{item.title} / {item.original_title}}</a>
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
                    <div className='aside'></div>  
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newMovieInfo: state.chart.newMovieInfo
    }
}

const mapStateToDispatch = (dispatch) => ({
    getNewMovieInfo() {
        dispatch(actionCreators.getNewMovieInfo())
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Chart)