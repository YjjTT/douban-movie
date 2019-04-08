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
                            <label>导演: &nbsp;
                                {
                                    (movieDetail.directors || []).map((item, index) => (
                                        <a key={index} href='/' className='name'>{item.name}</a>   
                                    ))
                                }
                            </label>
                            <label>编剧:  &nbsp;
                                {
                                    (movieDetail.writers || []).map((item, index) => (
                                        <a key={index} href='/' className='name'>{item.name}/</a>
                                    ))
                                }
                                
                            </label>
                            <label>主演:  &nbsp;
                                {
                                    (movieDetail.casts || []).map((item, index) => (
                                        <a className='name' key={index} href='/'>{item.name} /</a>
                                    ))
                                }
                            </label>
                            <label>类型:  &nbsp;
                                {
                                    (movieDetail.genres || []).map((item, index) => (
                                        <span key={index} className='type'>{item} /</span>
                                    ))
                                }
                            </label>
                            <label>语言:  &nbsp;
                                {
                                    (movieDetail.languages || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>
                                    ))
                                }
                            </label>
                            <label>制片国家/地区:  &nbsp;
                                {
                                    (movieDetail.countries || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>
                                    ))
                                }
                            </label>
                            <label>片长:  &nbsp;
                                {
                                    (movieDetail.durations || []).map((item, index) => (
                                        <span key={index} className='type'>{item}</span>   
                                    ))
                                }
                                
                            </label>
                            <label>又名:  &nbsp;
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
                        <div className='top clearfix'>
                            <h2>{movieDetail.title}的剧情简介 ······</h2>
                        </div>
                        <p>{movieDetail.summary}</p>
                    </div>

                    <div className='desc'>
                        <div className='top clearfix'>
                            <h2>{movieDetail.title}的演职员 ······</h2>        
                        </div>
                        <p>{movieDetail.summary}</p>
                    </div>
                    <div className='popular_comments'>
                        <div className='top clearfix'>
                            <h2>{movieDetail.title}的短评 ······</h2>
                            <a>(全部 {movieDetail.comments_count} 条)</a>
                        </div>
                        {
                            (movieDetail.popular_comments || []).map((item, index) => (
                                <div key={index} className='comments'>
                                    <div className='commenttop'>
                                        <a href='#' className='authorname'>{item.author.name}</a>
                                        <Rate allowHalf disabled defaultValue={item.rating.value} style={{fontSize: 15}} ></Rate>
                                        <span className='commenttime'>{item.created_at.split(' ')[0]}</span>
                                        <span className='use'>2222<a>有用</a></span>
                                    </div>
                                    
                                    <p className='comment'>{item.content}</p>
                                </div>
                            ))
                        }
                        
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