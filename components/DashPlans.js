import React from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';

const DashPlans = () => {
    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Available Investments</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-16'>
                {
                    CurrentInvestmentsData.map(item=>(
                        <Link href={`/dashboard/buy_plan/${item.linkName}`}>
                            <a className='block rounded-lg bg-white text-black shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                <div className={`${item.plan} rounded-t-lg maize-plan bg-no-repeat bg-cover bg-center w-full h-52`}>
                                </div>

                                <div className='px-4 py-8'>
                                    <h1 className='text-lg md:text-xl mb-5 font-bold'>{item.name}</h1>
                                    <div className='flex items-center justify-between mb-7'>
                                        <div className='flex items-center'>
                                            <div className='mr-2'>
                                                <FaStopwatch className='text-greensec w-6 h-6' />
                                            </div>
                                            <div>
                                                <p className='text-base font-bold'>{item.months} Months</p>
                                            </div>

                                        </div>
                                        <div className='flex items-center'>
                                            <div className='mr-2'>
                                                <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                            </div>
                                            <div>
                                                <p className='text-sm md:text-base font-bold'>{item.roi} ROI</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='flex items-center'>
                                            <div className='mr-2'>
                                                <FaTag className='text-greensec w-4 h-4' />
                                            </div>
                                            <div>
                                                <p className='text-base font-bold'>NGN {item.cost} / Unit</p>
                                            </div>

                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))
                }

            </div>
                    
        </div>
    )
}

export default DashPlans
