import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='hero-box text-white px-6 md:px-10 lg:px-20 bg-no-repeat bg-cover md:bg-center
        pt-32 h-full lg:h-screen pb-10 lg:pb-0 xl:h-5/6 xl:pb-40'>
            <div className='pt-20 pb-6'>
                <h1 className='text-4xl md:text-6xl md:whitespace-nowrap leading-tight tracking-wide font-bold'>Invest in Agriculture</h1>
                <h1 className='text-4xl md:text-6xl md:whitespace-nowrap leading-tight tracking-wider font-bold mb-8 md:mb-16'>Enjoy returns!</h1>
                <p className='text-sm md:text-lg'>Enjoy the benefits of mechanized commercial <br/>farming without having to move a finger</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center mt-4'>
                <div className=' mr-0 mb-3 md:mr-4'>
                    <Link className='block w-full' href="/register">
                        <a className='text-lg text-center block rounded-full whitespace-nowrap w-full py-4 px-12 text-white border-2 border-greenpri bg-greenpri hover:bg-greensec hover:border-greensec font-bold'>
                            Get Started
                        </a>
                    </Link>
                </div>
                <div className=''>
                    <Link className='block w-full' href="/contact">
                        <a className='text-lg text-center block rounded-full whitespace-nowrap w-full py-4 px-12 text-white border-2 border-greenpri bg-transparent hover:bg-greensec hover:border-greensec font-bold'>
                            Talk to Us
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
