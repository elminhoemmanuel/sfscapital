import Head from 'next/head'
import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Steps from '../components/Steps'

export default function Home() {
  return (
    <>
        <Head>
            <title>Cropshares</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <Navbar />
        <Hero />
        <Steps />
    </>
  )
}
