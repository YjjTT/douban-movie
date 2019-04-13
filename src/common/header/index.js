import React from 'react'
import { Input } from "antd";
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'

import './index.scss'

const Search = Input.Search;

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            isVisible: false
        }
    }

    handleonChange = (e) => {
        this.props.getSearchData(e.target.value)  
        this.setState({
            isVisible: true
        }) 
    }

    handleOnFocus = () => {
        const isVisible = this.props.searchData.length > 0 ? true : false
        this.setState({ isVisible })
    }

    handleOnMouseEnter = () => {
        const isVisible = this.props.searchData.length > 0 ? true : false
        this.setState({ isVisible })
    }

    handleOnMouseLeave = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const {
            searchData
        } = this.props
        return (
            <div  className='header clearfix'>
                <div className='top'>
                    <a href='/'>豆瓣</a>
                    <a href='/'>读书</a>
                    <a href='/'>电影</a>
                    <a href='/'>音乐</a>
                    <a href='/'>同城</a>
                    <a href='/'>小组</a>
                    <a href='/'>阅读</a>
                    <a href='/'>FM</a>
                    <a href='/'>时间</a>
                    <a href='/'>豆品</a>
                    <a href='/'>更多</a>
                </div>
                <div className='content'>
                    <a className='title' href='/'>豆瓣电影</a>
                    <Search style={{ width: 450 }} onMouseEnter={this.handleOnMouseEnter} onFocus={this.handleOnFocus} className='searchInput' onChange={this.handleonChange.bind(this)} />
                    {
                        searchData.length > 0 && this.state.isVisible
                            ?   <div onMouseLeave={this.handleOnMouseLeave} className='searchList'>
                                    
                                    {
                                        searchData.map((item, index) => (
                                            <div className='searchitem clearfix'>
                                                <Link to={`/movieDetail/${item.id}`}>
                                                    <img alt='' src={item.img} />
                                                </Link>
                                                <div className='searchdesc'>
                                                    <label><Link to={`/movieDetail/${item.id}`}>{item.title}</Link><span className='time'>{item.year}</span></label>
                                                    <span className='english-title'>{item.sub_title}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                    
                                </div>
                            :   null
                    }
                </div>
                <div className='line'></div>
                <ul className='cate'>
                    <li><a href='/'>影讯&购票</a></li>
                    <li><a href='/'>选电影</a></li>
                    <li><a href='/'>电视剧</a></li>
                    <li><a href='/'>排行榜</a></li>
                    <li><a href='/'>分类</a></li>
                    <li><a href='/'>影评</a></li>
                    <li><a href='/'>2018年度榜单</a></li>
                    <li><a href='/'>2018书影音报告</a></li>
                </ul>
            </div>
        )
    }
}


const mapToProps = (state) => ({
    searchData: state.header.searchData

})

const mapToDispatch = (dispatch) => ({
    getSearchData(keyword) {
        dispatch(actionCreators.getSearchData(keyword))
    }
})

export default connect(mapToProps, mapToDispatch)(Header)