import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'


export default function Home() {

  return (
    <>
      <Head>
        <title>SFS Capital</title>
        <meta name="keywords" content="SFS Capital" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <Hero />
      </div>
    </>
  )
}
