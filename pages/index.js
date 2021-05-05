import Head from 'next/head'
import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Plans from '../components/Plans'
import SoFar from '../components/SoFar'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

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
        <Plans />
        <SoFar />
        <Testimonials />
        <Brands />
        <CTA />
        <Footer />
    </>
  )
}
