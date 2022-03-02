import React, { } from 'react'
import { ProductCard, Tag, Button } from 'react-vant';

const Goods = () => {
    return (
        <ProductCard
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品名称"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            tags={
                <>
                    <Tag plain type="danger" style={{ marginRight: 5 }}>
                        标签
                    </Tag>
                    <Tag plain type="danger">
                        标签
                    </Tag>
                </>
            }
            footer={
                <>
                    <Button size="mini" round plain style={{ marginRight: 2 }}>
                        标签1
                    </Button>
                    <Button size="mini" round plain>
                        标签2
                    </Button>
                </>
            }
        />
    )
}

export default Goods
