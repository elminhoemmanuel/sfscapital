import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'


export default function Home() {
  return (
    <>
        <Head>
            <title>Cropshares | Login</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
          <Login />
        
        </div>
    </>
  )
}
