import Link from 'next/link'
import { useState } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import CurrentInvestments from './CurrentInvestments';
import HowToFund from './HowToFund';
import DashPlans from './DashPlans';

const DashHome = () => {

    const router = useRouter();

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
            <DashSideNav router={router} />
            <div className='md:col-span-4 lg:col-span-5 pt-6 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                
                <h1 className='text-xl md:text-3xl text-greenpri mb-6'>Hello Emmanuel 👨‍🌾</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-4'>
                    <CurrentInvestments />
                    <HowToFund />
                </div>
                <DashPlans />
            </div>
        </div>
        </>
    )
}

export default DashHome
