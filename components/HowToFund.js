import React, {useState} from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';
import {useRouter} from 'next/router';

const HowToFund = () => {

    const router = useRouter();

    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-4'>
                <h1 className='text-lg md:text-xl text-greenpri'>Purchase a Plan</h1>
            </div>

            <div className='px-6 pt-4 pb-2'>
                <p className='text-sm md:text-base mb-1'>Go to <Link href='/dashboard/plans'>
                    <a className='text-greenpri'>Plans.</a></Link>
                </p>
                <p className='text-sm md:text-base mb-1 '>Choose an Investment plan.
                </p>
                <p className='text-sm md:text-base mb-1 '>Select the number of units to be bought.
                </p>
                <p className='text-sm md:text-base mb-1 '>Pay using your preferred payment channel.
                </p>
                <p className='text-sm md:text-base mb-1 '>After the yield period, withdraw or reinvest funds
                </p>
            </div>

            <div  className='px-6 pt-2 pb-4'>
                <Link href='/dashboard/plans'>
                    <a >
                        <PrimaryBtn buttonText='Start Investing' addStyle='bg-greenpri text-base'
                        onClick={()=>{router.replace('/dashboard/plans')}}
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default HowToFund
