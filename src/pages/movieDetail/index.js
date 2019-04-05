import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import './index.scss'
class MovieDetail extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getMovieDetail(id)
    }
    render() {
        const {
            movieDetail
        } = this.props
        return (
            <div id='movieDetail'>
                <div className='content'>
                    <label className='title'>肖申克的救赎 The Shawshank Redemption</label>
                    <label className='year'>(1994)</label>
                    <div className='info clearfix'>
                        <img alt='' src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.webp' />
                        <div className='middle'>
                            <label>导演: <span className='name'>弗兰克·德拉邦特</span></label>
                            <label>编剧: <span className='name'>弗兰克·德拉邦特 / 斯蒂芬·金</span></label>
                            <label>主演: <span className='name'>蒂姆·罗宾斯 / 摩根·弗里曼 / 鲍勃·冈顿 / 威廉姆·赛德勒 / 克兰西·布朗 / 吉尔·贝罗斯 / 马克·罗斯顿 / 詹姆斯·惠特摩 / 杰弗里·德曼 / 拉里·布兰登伯格 / 尼尔·吉恩托利 / 布赖恩·利比 / 大卫·普罗瓦尔 / 约瑟夫·劳格诺 / 祖德·塞克利拉 / 保罗·麦克兰尼 / 芮妮·布莱恩 / 阿方索·弗里曼 / V·J·福斯特 / 弗兰克·梅德拉诺 / 马克·迈尔斯 / 尼尔·萨默斯 / 耐德·巴拉米 / 布赖恩·戴拉特 / 唐·麦克马纳斯</span></label>
                            <label>类型: <span className='type'>剧情 / 犯罪</span></label>
                            <label>语言: <span className='type'>英语</span></label>
                            <label>制片国家/地区: <span className='type'>美国</span></label>
                            <label>片长: <span className='type'>142分钟</span></label>
                            <label>又名: <span className='type'>月黑高飞(港) / 刺激1995(台) / 地狱诺言 / 铁窗岁月 / 消香克的救赎</span></label>
                        </div>
                        <div className='right'>111</div>
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