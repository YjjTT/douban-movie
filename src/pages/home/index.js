import React from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { Rate, Button } from 'antd'
import { actionCreators } from './store/index'
import axios from 'axios'
import './index.scss'
import { red } from 'ansi-colors';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
}

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            hotMovieTags: [],
            hotMovies: [],
            hotTvTags: [],
            hotTvs: [],
            currentMovieTagIndex: 0,
            currentTvTagIndex: 0
        }
    }

    componentWillMount() {
        // 正在热映电影
        this.props.getTheraterList()
        // this.props.getHotMovieTags()
        this.loadHotMovieTags()
        this.loadHotTvTags()
    }

    //  热门电影标签
    loadHotMovieTags () {
        axios({
            method: 'get',
            url: '/apb/j/search_tags?type=movie&source=index'
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    hotMovieTags: res.data.tags
                })
                this.loadHotMovies(res.data.tags[this.state.currentMovieTagIndex])
            }
        })
    }

    // 热门电视剧标签
    loadHotTvTags() {
        axios({
            method: 'get',
            url: '/apb/j/search_tags?type=tv&source=index'
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    hotTvTags: res.data.tags
                })
                this.loadHotTvs(res.data.tags[this.state.currentTvTagIndex])

            }
        })
    }

    // 获取热门电影
    loadHotMovies(tag) {
        axios({
            method: 'get',
            url: `/apb/j/search_subjects?type=movie&tag=${tag}&page_limit=50&page_start=0`
        }).then(res => {
            if (res.status === 200) {
                const result = res.data.subjects
                let arr = [
                    [result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7], result[8], result[9]],
                    [result[10], result[11], result[12], result[13], result[14], result[15], result[16], result[17], result[18], result[19]],
                ]
                this.setState({
                    hotMovies: arr
                })
            }
        })
    }
    
    // 获取热门电视剧
    loadHotTvs(tag) {
        // https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0
        axios({
            method: 'get',
            url: `/apb/j/search_subjects?type=tv&tag=${tag}&page_limit=50&page_start=0`
        }).then(res => {
            if (res.status === 200) {
                const result = res.data.subjects
                let arr = [
                    [result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7], result[8], result[9]],
                    [result[10], result[11], result[12], result[13], result[14], result[15], result[16], result[17], result[18], result[19]],
                ]
                this.setState({
                    hotTvs: arr
                })
                
            }
        })
    }

    // 热门电影标签点击
    handleOnHotMovieTagClick = (index) => {
        this.setState({
            currentMovieTagIndex: index
        })
        this.loadHotMovies(this.state.hotMovieTags[index])
    }

    // 热门电视剧标签点击
    handleOnHotTvTagClick = (index) => {
        this.setState({
            currentTvTagIndex: index
        })
        this.loadHotTvs(this.state.hotTvTags[index])
        
    }


    
    render() {
        const style = { backgroundColor: "#258DCC", color: "white", fontSize: '10px'}
        const {
            theraterList,
        } = this.props

        const { hotMovieTags, hotMovies, hotTvs, hotTvTags } = this.state
        
        return (
            <div className='home'>
                <div className='content'>
                    <div className='article'>
                        <div className='item'>
                            <div>
                                正在热映
                                <a className='in-theater' href='/'>全部正在热映>></a>
                                <a className='will-in-theater' href='/'>即将上映>></a>
                            </div>
                            <Slider {...settings}>
                                {
                                    theraterList.map((item, index) => (
                                        <div key={index}>
                                            <ul className='clearfix'>
                                                {   item.length > 0 
                                                    ? item.map((each, innerindex) => (
                                                        <li key={innerindex} className='each'>
                                                            <a href='/'>
                                                                <img alt={each.alt} src={each.images.medium} />
                                                            </a>
                                                            <a className='title' href='/'>{each.title}</a>
                                                            <span className='rate'>
                                                                <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled allowHalf defaultValue={each.rating.stars / 10} /> {each.rating.average}                                       
                                                            </span>
                                                            <Button style={style}>选座购票</Button>
                                                        </li>
                                                    )) : <div></div>
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                                
                            </Slider>
                        </div>                      
                        <a href='/' className='advert'>
                            <img alt='' src='https://img1.doubanio.com/view/dale-online/dale_ad/public/9c8f726e63d7269.jpg' />
                        </a>
                        <div className='item'>
                            <div>
                                最近热门电影
                                {
                                    hotMovieTags.map((item, index) => (
                                        <span onClick={this.handleOnHotMovieTagClick.bind(this, index)} className={`cate ${index === this.state.currentMovieTagIndex ? 'active': ''}`} key={index}>{item}</span>
                                    ))
                                    
                                }
                            </div>
                            <Slider {...settings}>
                                {
                                    hotMovies.map((item, index) => (
                                        <div key={index}>
                                            <ul className='clearfix'>
                                                {   item.map((each, innerindex) => (
                                                        <li key={innerindex} className='each hot'>
                                                            <a href='/'>
                                                                <img alt='' src={each.cover} />
                                                            </a>
                                                            <a className='title' href='/'>{each.title}</a>
                                                            <span className='rate'>
                                                                {each.rate}                                       
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                                
                            </Slider>
                        </div>
                        <div className='item'>
                            <div>
                                最近热门电视剧
                                {
                                    hotTvTags.map((item, index) => (
                                        <span onClick={this.handleOnHotTvTagClick.bind(this, index)} className={`cate ${index === this.state.currentTvTagIndex ? 'active': ''}`} key={index}>{item}</span>
                                    ))
                                    
                                }
                            </div>
                            <Slider {...settings}>
                                {
                                    hotTvs.map((item, index) => (
                                        <div key={index}>
                                            <ul className='clearfix'>
                                                {   item.map((each, innerindex) => (
                                                        <li key={innerindex} className='each hot'>
                                                            <a href='/'>
                                                                <img alt='' src={each.cover} />
                                                            </a>
                                                            <a className='title' href='/'>{each.title}</a>
                                                            <span className='rate'>
                                                                {each.rate}                                       
                                                            </span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                                
                            </Slider>
                        </div>
                    </div>
                    <div className='aside'></div>
                </div>
                <div className='footer'>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theraterList: state.home.theraterList,
    }
}

const mapStateToDispatch = (dispatch) => ({
    // 正在热映电影
    getTheraterList() {
        dispatch(actionCreators.getTheaterList())
    },
    // 最近热门电影标签
    getHotMovieTags() {
        dispatch(actionCreators.getHotMovieTagList())
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Home)