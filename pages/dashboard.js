import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import DashboardMain from '../components/DashboardMain'
import SideNav from '../components/SideNav'


export default function Home() {

  return (
    <>
      <Head>
        <title>SFS Capital</title>
        <meta name="keywords" content="SFS Capital" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
            <SideNav />
            <DashboardMain />
      </div>
    </>
  )
}
