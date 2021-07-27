import React from 'react'
import SectionHeader from './SectionHeader'
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import Link from 'next/link'

const ActualPlans = ({plans}) => {

    const textColor = 'text-greensec';

    const headerText = 'Select your plan(s)'

    return (
        <div className='px-6 md:px-10 lg:px-20 py-16 bg-white' id='plans'>
            <SectionHeader headerText={headerText} textColor={textColor}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        plans.map(item=>(
                            <button key={item.id}
                            onClick={()=>{
                                router.replace(`/dashboard/plans/single/${item.id}`)
                            }}
                            className='focus:outline-none block' >
                                <div className='block rounded-lg bg-white text-black shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                    <div className={`${item.css_class} rounded-t-lg bg-no-repeat bg-cover bg-center w-full h-52`}>
                                    </div>

                                    <div className='px-4 py-8'>
                                        <h1 className='text-left text-lg md:text-xl mb-5 font-bold'>{item.name}</h1>
                                        <div className='flex items-center justify-between mb-7'>
                                            <div className='flex items-center'>
                                                <div className='mr-2'>
                                                    <FaStopwatch className='text-greensec w-6 h-6' />
                                                </div>
                                                <div>
                                                    <p className='text-base font-bold'>{item.duration} Months</p>
                                                </div>

                                            </div>
                                            <div className='flex items-center'>
                                                <div className='lg:mr-2 mr-1'>
                                                    <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                                </div>
                                                <div>
                                                    <p className='text-sm md:text-base font-bold'>{item.roi}% ROI</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className='flex items-center'>
                                                <div className='mr-1 lg:mr-2'>
                                                    <FaTag className='text-greensec w-4 h-4' />
                                                </div>
                                                <div>
                                                    <p className='text-base font-bold'>NGN {item.cost_per_unit} / Unit</p>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))
                    }

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

export default ActualPlans
