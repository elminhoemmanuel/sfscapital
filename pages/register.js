import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/Register'


export default function Home() {
  return (
    <>
        <Head>
            <title>Cropshares | Register</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <Register />
        
        </div>
    </>
  )
}
