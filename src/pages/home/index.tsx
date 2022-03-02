import React from 'react'
import { Card } from 'react-vant'
import './index.scss'

const Home = () => {
    return (
        <div className='home-container'>
            <Card round>
                <Card.Header>下载网盘</Card.Header>
                <Card.Body>
                    <p>新网盘（实时更新包）</p>
                    <a href="http://anan66.ysepan.com">http://anan66.ysepan.com</a>
                    <p>网盘密码：6666</p>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Home