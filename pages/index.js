import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import FeaturesArea from '../components/FeaturesArea'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SearchArea from '../components/SearchArea'


export default function Home() {

  return (
    <>
      <Head>
        <title>SFS Capital</title>
        <meta name="keywords" content="SFS Capital" />
      </Head>

      <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
        <Navbar />
        <Hero />
        <SearchArea />
        <FeaturesArea />
        <Footer />
      </div>
    </>
  )
}
