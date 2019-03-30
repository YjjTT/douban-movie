import React from 'react'
import { Input } from "antd";
import './index.scss'

const Search = Input.Search;

class Header extends React.Component {

    handleOnSearch = (value) => {
        console.log(value)
    }

    render() {
        return (
            <div className='header clearfix'>
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
                    <Search style={{ width: 450 }} className='searchInput' onSearch={this.handleOnSearch.bind(this)} />
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


export default Header