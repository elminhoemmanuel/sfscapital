import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero'
import TabsDisplay from '../components/TabsDisplay';
import TabsSection from '../components/TabsSection';
import { setPage } from '../redux/actions/search'


export default function Home() {

  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(setPage("home", () => { }));
  }, [])

  return (
    <>
      <Head>
        <title>Bexels</title>
        <meta name="keywords" content="Bexels" />
      </Head>

      <div className=''>
        <Hero />
        <TabsSection />
        <TabsDisplay />
      </div>
    </>
  )
}
