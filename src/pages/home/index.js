import React from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { Rate, Button } from 'antd'
import { actionCreators } from './store/index'
import './index.scss'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
}

class Home extends React.Component {

    componentDidMount() {
        // 正在热映电影
        this.props.getTheraterList()
        // 
        this.props.getHotMovieTags()
    }


    
    render() {
        const style = { backgroundColor: "#258DCC", color: "white", fontSize: '10px'}
        const {
            theraterList
        } = this.props
        const data = theraterList
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
                                    data.length > 0
                                    ? data.map((item, index) => (
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
                                    )) : <div></div>
                                }
                                
                            </Slider>
                        </div>
                        
                        <a href='/' className='advert'>
                            <img alt='' src='https://img1.doubanio.com/view/dale-online/dale_ad/public/9c8f726e63d7269.jpg' />
                        </a>
                        <div className='item'>
                            <div>
                                最近热门电影
                                <span className='cate active'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                                <span className='cate'>热门</span>
                            </div>
                            <Slider {...settings}>
                                {
                                    data.length > 0
                                    ? data.map((item, index) => (
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
                                    )) : <div></div>
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
        theraterList: state.home.theraterList
    }
}

const mapStateToDispatch = (dispatch) => ({
    // 正在热映电影
    getTheraterList() {
        dispatch(actionCreators.getTheaterList())
    },
    // 最近热门电影 --- 标签
    getHotMovieTags() {
        dispatch(actionCreators.getHotMovieTagList())
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Home)