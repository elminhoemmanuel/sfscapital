import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import LeftSideNav from '../components/LeftSideNav';
import RightSideCol from '../components/RightSideCol';
import Center from '../components/Center';


export default function Home() {

    

  return (
    <>
        <Head>
            <title>Tumbas</title>
            <meta name="keywords" content="Tumbas"/>
        </Head>

        <div className='p-6 grid grid-cols-7 w-full'>
          <div className=''>
            <LeftSideNav />
          </div>
          <div className='col-span-4'>
            <Center />
          </div>
          <div className='col-span-2'>
            <RightSideCol />
          </div>
            
        </div>
    </>
  )
}
