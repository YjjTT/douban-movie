import React from 'react'
import { Rate, Pagination } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import './index.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class AllComments extends React.Component {
    constructor() {
        super()
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({ id })
        this.props.getAllCommentsInfo(id, 0)
    }

    handleOnChange = (page, pageSize) => {
        const start = (page - 1)  * 20
        this.props.changeStart(start)
        this.props.getAllCommentsInfo(this.state.id, start)
    }

    render() {
        const {
            allCommentsInfo
        } = this.props
        return (
            <div id='allComments' className='clearfix'>
                <div className='comments'>
                    {
                        (allCommentsInfo.comments || []).map((item, index) => (
                            <div key={index} className='comment clearfix'>
                                <img alt={item.author.alt} src={item.author.avatar} />
                                <div className='info'>
                                    <div className='clearfix'>
                                        <span className='name'>{item.author.name}</span>
                                        <Rate className='rate' allowHalf disabled defaultValue={item.rating.value} style={{fontSize: 13}}></Rate>
                                        <span className='time'>{item.created_at.split(' ')[0]}</span>
                                        <label className='num'><span>{item.useful_count}</span>有用</label>
                                    </div>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))
                    }
                    <Pagination 
                        pageSize={allCommentsInfo.count} 
                        total={Math.ceil(allCommentsInfo.total / allCommentsInfo.count)} 
                        onChange={this.handleOnChange.bind(this)}
                    />
                </div>
                <div className='aside'>
                    <Link className='movieName' to={`/movieDetail/${(allCommentsInfo.subject || {}).id}`}> 
                        > 去 {(allCommentsInfo.subject || {}).title} 的页面
                    </Link>
                    <img 
                        alt={(allCommentsInfo.subject || {}).alt} 
                        src={((allCommentsInfo.subject || {}).images || {}).small} 
                    />
                    <label>导演: 
                        {
                            ((allCommentsInfo.subject || {}).directors || []).map((item, index) => (
                                <a key={index}>{item.name}</a>
                            ))
                        }
                    </label>
                    <label>主演: 
                        {
                            ((allCommentsInfo.subject || {}).casts || []).map((item, index) => (
                                <a key={index}>{item.name} /</a>
                            ))
                        }
                    </label>
                    <label>类型: 
                        {
                            ((allCommentsInfo.subject || {}).genres || []).map((item, index) => (
                                <span key={index}>{item} /</span>
                            ))
                        }
                    </label>
                    <label>片场: 
                        {
                            ((allCommentsInfo.subject || {}).durations || [])[0]
                        }
                    </label>
                    <label>上映: 
                        {
                            (allCommentsInfo.subject || {}).year
                        }
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allCommentsInfo: state.comments.allCommentsInfo
})

const mapStateToDispatch = (dispatch) => ({
    
    getAllCommentsInfo(id, start) {
        dispatch(actionCreators.getAllCommentsInfo(id, start))
    },

    changeStart(start) {
        dispatch(actionCreators.changeStart(start))
    }

    
    
})

export default connect(mapStateToProps, mapStateToDispatch)(AllComments)