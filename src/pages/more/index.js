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
            currentTagIndex: 0,
            sort: 'recommend'
        }
    }

    componentDidMount() {
        this.props.getTagList()
        this.props.getDataList(
                this.props.page_limit, 
                this.props.page_start
            )
    }

    handleOnTagClick = (index) => {
        if (index === 1) {
            this.setState({
                sort: 'time'
            })
        }
        this.props.changeTagIndex(index)
    }

    // 排序单选框
    handleOnRadioChange = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    render() {
        const {
            tagList,
            dataList,
            currentTagIndex
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
    getDataList(page_limit, page_start) {
        dispatch(actionCreators.getDataList(page_limit, page_start))
    },
    changeTagIndex(index) {
        dispatch(actionCreators.changeTagIndex(index))
    }
})

export default connect(mapStateToProps, mapStateToDispatch)(More)