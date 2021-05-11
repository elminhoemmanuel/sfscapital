import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlansHero from '../components/PlansHero'
import ActualPlans from '../components/ActualPlans'


export default function About() {
  return (
    <>
        <Head>
            <title>Cropshares | Plans</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div className='max-w-screen-2xl mx-auto'>
        <Navbar activePage='plans'/>
        <PlansHero />
        <ActualPlans />
        <Footer />
        </div>
    </>
  )
}
