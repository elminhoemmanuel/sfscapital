import React, {useState} from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';

const CurrentInvestments = () => {

    const [hasInvested, setHasInvested] = useState(false)

    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Your Investments</h1>
            </div>

            <div className='p-6'>
                {
                    hasInvested ? 

                    <div>
                        {
                        CurrentInvestmentsData.map(item=>(
                            <Link href={`/dashboard/investments`} key={item}>
                                <a className='block rounded mb-3 bg-white text-black border border-graybg hover:shadow-lg '>
                                    <div className='px-2 py-2'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <div className='flex items-center'>
                                                <div className={`rounded-full ${item.plan} bg-no-repeat bg-cover bg-center w-8 h-8 mr-1`}>
                                                </div>
                                                <div><h1 className='text-sm font-bold'>{item.name}</h1></div>
                                            </div>
                                            <div className='flex items-center'>
                                                    <div className='mr-2'>
                                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                                    </div>
                                                    <div>
                                                        <p className='text-sm'>{item.months} Months</p>
                                                    </div>
    
                                            </div>
                                        </div>
    
                                        <div className='flex items-center justify-between'>
                                            
                                            <div className='flex items-center'>
                                                <div className='mr-2'>
                                                    <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                                </div>
                                                <div>
                                                    <p className='text-sm'>{item.roi} ROI</p>
                                                </div>
    
                                            </div>
    
                                            <div className='flex items-center'>
                                                <div className='mr-2'>
                                                    <FaTag className='text-greensec w-4 h-4' />
                                                </div>
                                                <div>
                                                    <p className='text-sm'>NGN {item.cost} / Unit</p>
                                                </div>
    
                                            </div>
    
                                        </div>
    
                                        
                                    </div>
                                </a>
                            </Link>
                        ))
                        }
                    </div> 
                    :
                    <div >
                        <p className='text-sm md:text-base mb-1 '>No Investment yet.</p>
                        <div  className='pt-2 pb-4'>
                            <Link href='/dashboard/plans'>
                                <a >
                                    <PrimaryBtn buttonText='Start Investing' addStyle='bg-greenpri text-base'
                                    onClick={()=>{router.push('/dashboard/plans')}}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default CurrentInvestments
