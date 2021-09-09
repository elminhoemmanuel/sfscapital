import React from 'react'
import Image from "next/image"
import DashMainNav from './DashMainNav'
import DashMainBody from './DashMainBody'


const DashboardMain = () => {
    return (
        <div className="bg-dashbg pb-16 md:ml-60 ml-0">
            <DashMainNav />
            <DashMainBody />
        </div>
    )
}

export default DashboardMain
