import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'

const WebsiteLayout = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebsiteLayout