import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Tabbar } from 'react-vant'
import { WapHomeO, HotSaleO, ChatO } from '@react-vant/icons'

const Layout = () => {
    return (
        <div>
            <Tabbar>
                <Tabbar.Item icon={<WapHomeO />}> <Link to="/">首页</Link></Tabbar.Item>
                <Tabbar.Item icon={<HotSaleO />}><Link to="/goods">商品</Link></Tabbar.Item>
                <Tabbar.Item icon={<ChatO />}><Link to="/chat">客服</Link></Tabbar.Item>
            </Tabbar>
            <Outlet />
        </div>
    )
}


export default Layout