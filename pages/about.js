import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import SoFar from '../components/SoFar'
import Team from '../components/Team'
import Brands from '../components/Brands'


export default function About() {
  return (
    <>
        <Head>
            <title>Cropshares | About</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <Navbar activePage='about'/>
        <AboutHero />
        <SoFar />
        <Team />
        <Brands />
        <Footer />
    </>
  )
}
