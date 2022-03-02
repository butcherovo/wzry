import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Tabbar } from 'react-vant'
import { WapHomeO, HotSaleO } from '@react-vant/icons'

const Layout = () => {
    return (
        <div>
            <Tabbar>
                <Tabbar.Item icon={<WapHomeO />}> <Link to="/">Home</Link></Tabbar.Item>
                <Tabbar.Item icon={<HotSaleO />}><Link to="/goods">Goods</Link></Tabbar.Item>
            </Tabbar>
            <Outlet />
        </div>
    )
}


export default Layout