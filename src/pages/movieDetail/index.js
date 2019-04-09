import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Rate, Icon } from 'antd'
import './index.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class MovieDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieDetail(id)
    }
    render() {
        const {
            movieDetail
        } = this.props
        const casts = (movieDetail.casts || []).splice(0, 4)
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
                            <h2>{movieDetail.title}的影人列表 ······</h2>        
                        </div>
                        <ul>
                            {
                                (movieDetail.directors || []).map((item, index) => (
                                    <li key={index}>
                                        <a><img src={item.avatars.small} alt={item.alt} /></a>
                                        <a className='name'>{item.name}</a>
                                        <span className='job'>导演</span>
                                    </li>

                                ))
                            }
                            {
                                (casts || []).map((item, index) => (
                                    <li key={index}>
                                        <a><img src={item.avatars.small} alt={item.alt} /></a>
                                        <a className='name'>{item.name}</a>
                                        <span className='job'>演员</span>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className='popular_comments'>
                        <div className='top clearfix'>
                            <h2>{movieDetail.title}的短评 ······</h2>
                            <Link to={`/allComments/${movieDetail.id}`}>(全部 {movieDetail.comments_count} 条)</Link>
                        </div>
                        {
                            (movieDetail.popular_comments || []).map((item, index) => (
                                <div key={index} className='comments'>
                                    <div className='commenttop'>
                                        <a href='/' className='authorname'>{item.author.name}</a>
                                        <Rate allowHalf disabled defaultValue={item.rating.value} style={{fontSize: 15}} ></Rate>
                                        <span className='commenttime'>{item.created_at.split(' ')[0]}</span>
                                        <span className='use'>2222<a href='/'>有用</a></span>
                                    </div>
                                    
                                    <p className='comment'>{item.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='popular_reviews'>
                        <div className='top clearfix'>
                            <h2>{movieDetail.title}的影评 ······</h2>
                            <a href='/'>(全部 {movieDetail.reviews_count} 条)</a>
                        </div>
                        {
                            (movieDetail.popular_reviews || []).map((item, index) => (
                                <div key={index} className='comments'>
                                    <div className='commenttop'>
                                        <a href='/'><img alt={item.author.alt} src={item.author.avatar} /></a>
                                        <a href='/' className='authorname'>{item.author.name}</a>
                                        <Rate allowHalf disabled defaultValue={item.rating.value} style={{fontSize: 15}} ></Rate>
                                        <span className='commenttime'>2018</span>
                                    </div>
                                    <label className='comment-title'>{item.title}</label>
                                    <p className='comment'>{item.summary}</p>
                                    <div className='comment-bottom'>
                                        <span><Icon type="up" style={{fontSize: 15}} />739</span>
                                        <span><Icon type="down" style={{fontSize: 15}} />739</span>
                                        <a href='/' className='response'>780回应</a>
                                    </div>
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