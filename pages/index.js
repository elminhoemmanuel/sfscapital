import Head from 'next/head'
import React, { useState, useEffect } from 'react'


export default function Home() {

  return (
    <>
        <Head>
            <title>Bexels</title>
            <meta name="keywords" content="Bexels"/>
        </Head>

        <div className='p-6 text-red-500'>
          <p>Hello Bexels</p> 
        </div>
    </>
  )
}
