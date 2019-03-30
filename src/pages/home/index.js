import React from 'react'
import Slider from 'react-slick'
import { Rate, Button } from 'antd'
import './index.scss'
class Home extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1
        }
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
                            <ul className='clearfix'>
                                
                                <li className='each'>
                                    <a href='/'>
                                        <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549234765.webp' />
                                    </a>
                                    <a className='title' href='/'>波西米亚狂想</a>
                                    <span className='rate'>
                                        <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled  defaultValue={3} /> 8.3                                        
                                    </span>
                                    <Button style={{ backgroundColor: "#258DCC", color: "white", fontSize: '10px', padding: '2px 15px 2px 15px' }}>选座购票</Button>
                                </li>
                                <li className='each'>
                                    <a href='/'>
                                        <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549234765.webp' />
                                    </a>
                                    <a className='title' href='/'>波西米亚狂想</a>
                                    <span className='rate'>
                                        <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled  defaultValue={3} /> 8.3                                        
                                    </span>
                                    <Button style={{ backgroundColor: "#258DCC", color: "white", fontSize: '10px', padding: '2px 15px 2px 15px' }}>选座购票</Button>
                                </li>
                                <li className='each'>
                                    <a href='/'>
                                        <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549234765.webp' />
                                    </a>
                                    <a className='title' href='/'>波西米亚狂想</a>
                                    <span className='rate'>
                                        <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled  defaultValue={3} /> 8.3                                        
                                    </span>
                                    <Button style={{ backgroundColor: "#258DCC", color: "white", fontSize: '10px', padding: '2px 15px 2px 15px' }}>选座购票</Button>
                                </li>
                                <li className='each'>
                                    <a href='/'>
                                        <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549234765.webp' />
                                    </a>
                                    <a className='title' href='/'>波西米亚狂想</a>
                                    <span className='rate'>
                                        <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled  defaultValue={3} /> 8.3                                        
                                    </span>
                                    <Button style={{ backgroundColor: "#258DCC", color: "white", fontSize: '10px', padding: '2px 15px 2px 15px' }}>选座购票</Button>
                                </li>
                                <li className='each'>
                                    <a href='/'>
                                        <img src='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549234765.webp' />
                                    </a>
                                    <a className='title' href='/'>波西米亚狂想</a>
                                    <span className='rate'>
                                        <Rate style={{ fontSize: 10, color: "#FFAC2C" }} disabled  defaultValue={3} /> 8.3                                        
                                    </span>
                                    <Button style={{ backgroundColor: "#258DCC", color: "white", fontSize: '10px', padding: '2px 15px 2px 15px' }}>选座购票</Button>
                                </li>
                            </ul>
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

export default Home