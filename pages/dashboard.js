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
        <div className="grid grid-cols-9">
          <div className="side col-span-2">
            <SideNav />
          </div>

          <div className="main col-span-9 md:col-span-7">
            <DashboardMain />
          </div>
        </div>
      </div>
    </>
  )
}
