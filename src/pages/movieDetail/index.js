import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Rate } from 'antd'
import './index.scss'
class MovieDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieDetail(id)
    }
    render() {
        const {
            movieDetail
        } = this.props
        console.log(movieDetail.rating)
        return (
            <div id='movieDetail'>
                <div className='content'>
                    <label className='title'>{movieDetail.title}  {movieDetail.original_title}</label>
                    <label className='year'>({movieDetail.year})</label>
                    <div className='info clearfix'>
                        <img alt={movieDetail.alt} src={(movieDetail.images || {}).small} />
                        <div className='middle'>
                            <label>导演: 
                                {
                                    (movieDetail.directors || []).map((item, index) => (
                                        <a key={index} href='/' className='name'>{item.name}</a>   
                                    ))
                                }
                            </label>
                            <label>编剧: 
                                {
                                    (movieDetail.writers || []).map((item, index) => (
                                        <a key={index} href='/' className='name'>{item.name} /</a>
                                    ))
                                }
                                
                            </label>
                            <label>主演: 
                                {
                                    (movieDetail.casts || []).map((item, index) => (
                                        <a className='name' key={index} href='/'>{item.name} /</a>
                                    ))
                                }
                            </label>
                            <label>类型: 
                                {
                                    (movieDetail.genres || []).map((item, index) => (
                                        <span key={index} className='type'>{item} /</span>
                                    ))
                                }
                            </label>
                            <label>语言: 
                                {
                                    (movieDetail.languages || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>
                                    ))
                                }
                            </label>
                            <label>制片国家/地区: 
                                {
                                    (movieDetail.countries || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>
                                    ))
                                }
                            </label>
                            <label>片长: 
                                {
                                    (movieDetail.durations || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>   
                                    ))
                                }
                                
                            </label>
                            <label>又名: 
                                {
                                    (movieDetail.aka || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>
                                    ))
                                }
                            </label>
                        </div>
                        <div className='right'>
                            <span className='title'>豆瓣评分</span>
                            <div className='stars clearfix'>
                                <span className='num'>
                                    {
                                        (movieDetail.rating || {}).average
                                    }
                                </span>
                                <div className='rate'>
                                    <Rate disabled allowHalf defaultValue={5} style={{fontSize: 15}} />
                                    <a href='/' className='totalNum'>{movieDetail.ratings_count}评价</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='desc'>
                        <h2>{movieDetail.title}的演职员 ······</h2>
                        <p>{movieDetail.summary}</p>
                    </div>
                    <div className='desc'>
                        <h2>{movieDetail.title}的剧情简介 ······</h2>
                        <p>{movieDetail.summary}</p>
                    </div>
                                    
                </div>
                <div className='aside'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieDetail: state.movieDetail.movieDetail
})

const mapStateToDispatch = (dispatch) => ({
    getMovieDetail(id) {
        dispatch(actionCreators.getMovieDetail(id))
    }
    
})

export default connect(mapStateToProps, mapStateToDispatch)(MovieDetail)