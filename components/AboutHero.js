import React from 'react'
import Link from 'next/link'

const AboutHero = () => {

    

    return (
        <div className='px-6 md:px-10 lg:px-20 bg-cultured pt-40 md:pb-24 '>
            <div className='grid grid-cols-1 md:grid-cols-2 pb-16 gap-5'>
                <div className='pt-0 '>
                    <h1 className='text-3xl md:text-4xl font-bold mb-10 text-center md:text-left'>
                        Who we are
                    </h1>
                    <p className='mb-3 text-center md:text-left'>
                        We are a group on a mission to tapping the vast resources in nigerian agriculture, Cropshares is providing a 
                        safe, easy and sustainable platform for you to grow your funds whilst also contributing to food
                        security and economic growth.
                    </p>
                    <p className='mb-6 text-center md:text-left'>
                        We envision becoming the  leading commercial and mechanized agritechnology company working to achieve food security, 
                        economic growth and sustainablility in Africa. What are you waiting for join us today
                    </p>

                    <div className=' mr-0 mb-2 '>
                        <Link className='block ' href="/register">
                            <a className='w-full md:w-3/5 text-lg text-center block rounded-full whitespace-nowrap py-3 px-8 text-white border-2 border-greenpri bg-greenpri hover:bg-greensec hover:border-greensec font-bold'>
                                Get Started
                            </a>
                        </Link>
                    </div>

                </div>

                <div className='relative hidden md:block'>
                    
                    <img className='about1 absolute rounded md:w-72 md:h-64 lg:w-80 h-72' src='/images/about1.jpg' alt="about image"/>
                    <img className='about2 absolute rounded md:w-72 md:h-64 lg:w-80 h-72' src='/images/about2.jpg' alt="about image"/>

                </div>

            </div>

        </div>
    )
}

export default AboutHero
