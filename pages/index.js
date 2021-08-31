import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { setName } from '../redux/actions/tabs';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero'
import TabsSection from '../components/TabsSection';


export default function Home() {

  const dispatch = useDispatch();
  const { personName } = useSelector((state) => state.name);

  useEffect(() => {
    dispatch(setName("Amodu"))
  }, [dispatch])

  return (
    <>
        <Head>
            <title>Bexels</title>
            <meta name="keywords" content="Bexels"/>
        </Head>

        <div className=''>
          <Hero />
          <TabsSection />
        </div>
    </>
  )
}
