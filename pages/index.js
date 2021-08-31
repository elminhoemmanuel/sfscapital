import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { setName } from '../redux/actions/name';
import { useDispatch, useSelector } from 'react-redux';


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

        <div className='p-6 text-red-500'>
          
          
        </div>
    </>
  )
}
