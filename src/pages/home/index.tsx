import React from 'react'
import { Card, Image, Toast } from 'react-vant'
import './index.scss'
import imageone from '../../images/WechatIMG500.jpeg'
import imagetwo from '../../images/WechatIMG501.jpeg'
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

                <Card.Cover onClick={() => Toast.info('有问题联系客服！')}>
                    <Image src={imageone} />
                </Card.Cover>
            </Card>

            <Card round>
                <Card.Header>使用教程</Card.Header>
                <Card.Cover onClick={() => Toast.info('有问题联系客服！')}>
                    <Image src={imagetwo} />
                </Card.Cover>
            </Card>
        </div>
    )
}
export default Home