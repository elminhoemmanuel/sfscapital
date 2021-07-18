import Link from 'next/link'
import { useState } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import PrimaryBtn from './PrimaryBtn'

const DashSinglePlan = ({ user, plan, openCalc }) => {

    const router = useRouter();

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
            <DashSideNav router={router} />
            <div className='md:col-span-4 lg:col-span-5 pt-12 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-white rounded'>
                    <div >
                        <img className='h-full w-full border border-gray-300 rounded-l' src={plan.photo_url} alt='plan image'/>
                    </div>

                    <div className='pt-6 pb-6 px-4'>
                        <h4 className='text-base md:text-lg font-bold mb-3 text-greenpri'>{plan.name}</h4>

                        <div>
                            <p className='text-sm mb-1 '>{plan.bio}</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 mb-2'>
                            <div className='flex flex-col items-center justify-center border border-graybg shadow-lg p-2 bg-white rounded'>
                                <div><p className='text-greenpri text-base font-bold'> ₦{plan.cost_per_unit}</p></div>
                                <div><p className='text-sm'>Per unit</p> </div>
                            </div>
                            <div className='flex flex-col items-center justify-center border border-graybg shadow-lg p-2 bg-white rounded'>
                                <div><p className='text-greenpri text-base font-bold'> {plan.roi}%</p></div>
                                <div><p className='text-sm'>ROI</p> </div>
                            </div>
                            <div className='flex flex-col items-center justify-center border border-graybg shadow-lg p-2 bg-white rounded'>
                                <div><p className='text-greenpri text-base font-bold'> {plan.duration}</p></div>
                                <div><p className='text-sm'>Months</p> </div>
                            </div>
                            <div className='flex flex-col items-center justify-center border border-graybg shadow-lg p-2 bg-white rounded'>
                                <div><p className='text-greenpri text-base font-bold'> ₦5000</p></div>
                                <div><p className='text-sm'>Admin Fee</p> </div>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                openCalc();
                            }}>
                                <PrimaryBtn buttonText='Purchase' addStyle='bg-greenpri text-sm w-full' />
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default DashSinglePlan
