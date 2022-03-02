import React from 'react'
import { Card, Image, Toast } from 'react-vant'
import imageone from '../../images/WechatIMG504.jpeg'

const Chat = () => {
    return (
        <Card round style={{ marginBottom: 20 }}>
        <Card.Cover onClick={() => Toast.info('点击了Cover区域')}>
                <Image src={imageone} />
        </Card.Cover>
        
        <Card.Body onClick={() => Toast.info('点击了Body区域')}>客服QQ： 2737888135</Card.Body>
      </Card>
    )
}


export default Chat