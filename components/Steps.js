import React from 'react'
import Link from 'next/link'
import SectionHeader from './SectionHeader'
import { FaUserPlus, FaCarrot, FaMobileAlt, FaHandHoldingUsd  } from 'react-icons/fa';

const Steps = () => {

    const headerColor= "text-white"

    const headerText = 'How it works'

    return (
        <div className='text-white px-6 md:px-10 lg:px-20 py-16 bg-gradient-to-br from-greenpri to-greensec'>
            <SectionHeader headerText={headerText} textColor={headerColor}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 '>
                <div>
                    <div className='flex items-center mb-6'>
                        <div className='mr-4 md:mr-10'>
                            <h1 className='text-2xl '>1.</h1>
                        </div>
                        <div className=''>
                            <FaUserPlus className='w-20 h-20'/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl md:text-2xl mb-3'>Create Your Account</p>
                        <p className='text-sm md:text-base'>Join our large community of investors funding agriculture, 
                            and making a good returns. Sign up today using your email to get started.</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center mb-6'>
                        <div className='mr-4 md:mr-10'>
                            <h1 className='text-2xl '>2.</h1>
                        </div>
                        <div className=''>
                            <FaCarrot className='w-20 h-20'/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl md:text-2xl mb-3'>Select a Plan</p>
                        <p className='text-sm md:text-base'>After registering, select an investment package from the available crop investments at our farm, 
                            choose the number of units you would like to purchase and proceed to pay.</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center mb-6'>
                        <div className='mr-4 md:mr-10'>
                            <h1 className='text-2xl '>3.</h1>
                        </div>
                        <div className=''>
                            <FaMobileAlt className='w-20 h-20'/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl md:text-2xl mb-3'>Monitor updates</p>
                        <p className='text-sm md:text-base'>Get regular realtime updates for your investment packages on your personalized dashboard, 
                            as well as necessary details of all the packages you have funded till date.</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center mb-6'>
                        <div className='mr-4 md:mr-10'>
                            <h1 className='text-2xl '>4.</h1>
                        </div>
                        <div className=''>
                            <FaHandHoldingUsd className='w-20 h-20'/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl md:text-2xl mb-3'>Enjoy Returns</p>
                        <p className='text-sm md:text-base'>After harvest and sale of farm produce to offtakers, returns of proceeds are then 
                            credited to all investors within the said yield period for that crop on our farm.</p>
                    </div>
                </div>
            </div>

            <div className='pt-16 flex items-center justify-center'>

                    <Link className='block ' href="/register">
                        <a className='text-lg text-center block rounded-full whitespace-nowrap w-4/5 md:w-3/5 lg:w-1/5 py-4 px-12 text-white border-2 border-greenpri bg-greenpri hover:bg-greensec hover:border-greensec font-bold'>
                            Get Started
                        </a>
                    </Link>

            </div>
        </div>
    )
}

export default Steps
