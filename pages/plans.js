import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlansHero from '../components/PlansHero'
import ActualPlans from '../components/ActualPlans'
import axios from 'axios'


export default function About() {

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
            <title>Cropshares | Plans</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
        </Head>

        <div>
            {
              isLoading3 ?
              <div className='flex items-center justify-center py-16 h-screen'>
                <div className="spinner-page"></div>
              </div> :
              <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
                <Navbar activePage='plans'/>
                <PlansHero />
                <ActualPlans plans={plans}/>
                <Footer />
              </div>
            }
        </div>
        
    </>
  )
}
