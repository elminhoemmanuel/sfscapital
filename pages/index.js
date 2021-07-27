import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Plans from '../components/Plans'
import SoFar from '../components/SoFar'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Home() {

    const [plans, setPlans] = useState([])
    const [isLoading3, setisLoading3] = useState(true)
    useEffect(() => {

        const userToken = localStorage.getItem('userToken');
  
        axios.get(`https://api.cropsharesafrica.com/api/plan`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                // console.log(response);
                response.data.data.map(item=>(
                  plans.push(item)
                ))
                console.log(plans);
                
                setisLoading3(!isLoading3)
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [])

  return (
    <>
        <Head>
            <title>Cropshares</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div>
            {
              isLoading3 ?
              <div className='flex items-center justify-center py-16 h-screen'>
                <div className="spinner-page"></div>
              </div> :
              <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
              <Navbar activePage='home' />
              <Hero />
              <Steps />
              <Plans plans={plans}/>
              <SoFar />
              <Testimonials />
              <Brands />
              <CTA />
              <Footer />
            </div>
            }
        </div>
    </>
  )
}
