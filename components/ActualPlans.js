import React from 'react'
import SectionHeader from './SectionHeader'
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import Link from 'next/link'

const ActualPlans = () => {

    const textColor = 'text-greensec';

    const headerText = 'Select your plan(s)'

    return (
        <div className='px-6 md:px-10 lg:px-20 py-16 bg-white' id='plans'>
            <SectionHeader headerText={headerText} textColor={textColor}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Link href='/plans/maize'>
                    <a className='block rounded-lg bg-white text-black shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <div className='rounded-t-lg maize-plan bg-no-repeat bg-cover bg-center w-full h-52'>
                        </div>

                        <div className='px-4 py-8'>
                            <h1 className='text-lg md:text-xl mb-5 font-bold'>Maize Farming</h1>
                            <div className='flex items-center justify-between mb-7'>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>6 Months</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-sm md:text-base font-bold'>59.5% ROI</p>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaTag className='text-greensec w-4 h-4' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>NGN 165525 / Unit</p>
                                    </div>

                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/plans/maize'>
                    <a className='block rounded-lg bg-white text-black shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <div className='rounded-t-lg cabbage-plan bg-no-repeat bg-cover bg-center w-full h-52'>
                        </div>

                        <div className='px-4 py-8'>
                            <h1 className='text-lg md:text-xl mb-5 font-bold'>Cabbage Farming</h1>
                            <div className='flex items-center justify-between mb-7'>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>4 Months</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-sm md:text-base font-bold'>45% ROI</p>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaTag className='text-greensec w-4 h-4' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>NGN 107600 / Unit</p>
                                    </div>

                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/plans/maize'>
                    <a className='block rounded-lg bg-white text-black shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <div className='rounded-t-lg mech-plan bg-no-repeat bg-cover bg-center w-full h-52'>
                        </div>

                        <div className='px-4 py-8'>
                            <h1 className='text-lg md:text-xl mb-5 font-bold'>Mechanization Package</h1>
                            <div className='flex items-center justify-between mb-7'>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>24 Months</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-sm md:text-base font-bold'>162.64% ROI</p>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaTag className='text-greensec w-4 h-4' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>NGN 500000 / Unit</p>
                                    </div>

                            </div>
                        </div>
                    </a>
                </Link>

                <Link href='/plans/maize'>
                    <a className='block rounded-lg bg-white text-black shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        <div className='rounded-t-lg cassava-plan bg-no-repeat bg-cover bg-center w-full h-52'>
                        </div>

                        <div className='px-4 py-8'>
                            <h1 className='text-lg md:text-xl mb-5 font-bold'>Cassava Farming</h1>
                            <div className='flex items-center justify-between mb-7'>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>6 Months</p>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                    </div>
                                    <div>
                                        <p className='text-sm md:text-base font-bold'>50% ROI</p>
                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center'>
                                    <div className='mr-2'>
                                        <FaTag className='text-greensec w-4 h-4' />
                                    </div>
                                    <div>
                                        <p className='text-base font-bold'>NGN 135000 / Unit</p>
                                    </div>

                            </div>
                        </div>
                    </a>
                </Link>
            </div>

            <div className='pt-16 flex items-center justify-center'>

                    <Link className='block ' href="/login">
                        <a className='text-lg text-center block rounded-full whitespace-nowrap w-4/5 md:w-3/5 lg:w-1/5 py-4 px-12 text-white border-2 border-greenpri bg-greenpri hover:bg-greensec hover:border-greensec font-bold'>
                            Get Started
                        </a>
                    </Link>

            </div>
        </div>
    )
}

export default ActualPlans
