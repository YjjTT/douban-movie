import React from 'react'
import { connect } from "react-redux";
import { Pagination } from  'antd'
import { actionCreators } from './store';
import './index.scss'

class Top250 extends React.Component {
    componentDidMount() {
        this.props.getTop250MovieInfo()
    }

    handleOnShowSizeChange = (current, size) => {
        console.log(current, size)
        const page_start = (current - 1) * 25
        this.props.getTop250MovieInfo(page_start)
    }

    render() {
        const {
            top250MovieInfo
        } = this.props
        return (
            <div id='top250'>
                <h1 className='head'>{top250MovieInfo.title}</h1>
                <div className='article'>
                    <ul>
                        {
                            (top250MovieInfo.subjects || []).map((item, index) => (
                                <li className='movie' key={index}>
                                    <div className='item'>
                                        <a><img alt={item.alt} src={item.images.medium} className='pic' /></a>
                                        <div className='info'>
                                            <a className='title'>{item.title} / {item.original_title}</a>
                                            <p className='actor'>导演: 
                                                {
                                                    item.directors.map((each, index) => (
                                                        <span key={index}>{each.name} {each.name_en}</span>
                                                    ))
                                                }
                                                &nbsp;主演:
                                                {
                                                    item.casts.map((each, index) => (
                                                        <span key={index}>{each.name} {each.name_en}</span>
                                                    ))
                                                } 
                                             </p>
                                            <p className='actor'>{item.year} / 美国 / {
                                                item.genres.map((each, index) => (
                                                    <span key={index}> {each}</span>
                                                ))
                                            }</p>
                                            <div className='rate'></div>
                                            <span className='comment'>希望让人自由</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <Pagination onChange={this.handleOnShowSizeChange.bind(this)} pageSize={25} defaultCurrent={1} total={250} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    top250MovieInfo: state.top250.top250MovieInfo,
    page_start: state.top250.page_start
})

const mapStateToDispatch = (dispatch) => ({
    getTop250MovieInfo(page_start) {
        dispatch(actionCreators.getTop250MovieInfo(page_start))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(Top250)