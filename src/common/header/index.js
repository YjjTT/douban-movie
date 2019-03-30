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
                </div>
                <div className='content'>
                    <a className='title' href='/'>豆瓣电影</a>
                    <Search style={{ width: 300 }} className='searchInput' onSearch={this.handleOnSearch.bind(this)} />
                </div>
            </div>
        )
    }
}


export default Header