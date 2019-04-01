import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Radio } from 'antd'
import './index.scss'

const RadioGroup = Radio.Group 
class More extends React.Component {

    constructor() {
        super()
        this.state = {
            sort: 'recommend'
        }
    }

    componentDidMount() {
        this.props.getTagList()
    }

    // 切换标签
    handleOnTagClick = (index) => {
        if (index === 1) {
            this.setState({
                sort: 'time'
            })
        }
        this.props.changeTagIndex(index)
        const isSwitchTag = true
        const page_limit = 20
        const page_start = 0
        this.props.getDataList(
            isSwitchTag,
            this.props.tagList[index],
            page_limit,
            page_start
        )
    }

    // 排序单选框
    handleOnRadioChange = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    // 加载更多
    handleOnLoadMore = () => {
        const page_start = this.props.page_start + 20
        this.props.changePageStart(page_start)
        const isSwitchTag = false
        this.props.getDataList(
            isSwitchTag,
            this.props.tagList[this.props.currentTagIndex],
            this.props.page_limit,
            page_start
        )
    }

    render() {
        const {
            tagList,
            dataList,
            currentTagIndex,
        } = this.props
        const disabled = currentTagIndex === 1
        const value = disabled ? 'time' : this.state.sort
        return (
            <div id='more'>
                <h1>选电影</h1>
                <div className='article'>
                    <div className='filter'>
                        <div className='tag-list'>
                            {
                                tagList.map((item, index) => (
                                    <label
                                        onClick={this.handleOnTagClick.bind(this, index)} 
                                        key={index} 
                                        className={currentTagIndex === index ? 'active' : 'normal'}
                                    >{item}</label>
                                ))
                            }
                        </div>
                        <div className='sort'>
                            <RadioGroup disabled={disabled} onChange={this.handleOnRadioChange} value={value}>
                                <Radio value={'recommend'}>按热度排序</Radio>
                                <Radio value={'time'}>按时间排序</Radio>
                                <Radio value={'rank'}>按评价排序</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='collection'>
                            {
                                dataList.map((item, index) => (
                                    <div key={index} className='item'>
                                        <img src={item.cover} />
                                        <p>{item.title} <span>{item.rate}</span></p>
                                    </div>   
                                ))
                            }
                    </div>
                    <label onClick={this.handleOnLoadMore} className='loadmore'>加载更多</label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tagList: state.more.tagList,
    dataList: state.more.dataList,
    page_limit: state.more.page_limit,
    page_start: state.more.page_start,
    currentTagIndex: state.more.currentTagIndex
})

const mapStateToDispatch = (dispatch) => ({
    getTagList() {
        dispatch(actionCreators.getTagList())
    },
    getDataList(isSwitchTag, tag, page_limit, page_start) {
        dispatch(actionCreators.getDataList(isSwitchTag, tag, page_limit, page_start))
    },
    changeTagIndex(index) {
        dispatch(actionCreators.changeTagIndex(index))
    },
    changePageStart(index) {
        dispatch(actionCreators.changePageStart(index))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(More)