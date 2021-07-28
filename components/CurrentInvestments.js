import React, {useState} from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';

const CurrentInvestments = ({invest}) => {

    // console.log(invest)

    const [hasInvested, setHasInvested] = useState(true)

    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Your Investments</h1>
            </div>

            <div className='p-6'>
                {
                    invest.length !== 0 ? 

                    <div>
                        {
                        invest.map(item=>(
                            <Link href={`/dashboard/investments`} key={item}>
                                <a className='block rounded mb-3 bg-white text-black border border-graybg hover:shadow-lg '>
                                    <div className='px-2 py-2'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <div className='flex items-center'>
                                                <div className={`rounded-full ${item.plan.css_class} bg-no-repeat bg-cover bg-center w-8 h-8 mr-1`}>
                                                </div>
                                                <div><h1 className='text-sm font-bold'>{item.plan.name}</h1></div>
                                            </div>
                                            <div className='flex items-center'>
                                                    <div className='mr-2'>
                                                        <FaStopwatch className='text-greensec w-6 h-6' />
                                                    </div>
                                                    <div>
                                                        <p className='text-sm'>{item.plan.duration} Months</p>
                                                    </div>
    
                                            </div>
                                        </div>
    
                                        <div className='flex items-center justify-between'>
                                            
                                            <div className='flex items-center'>
                                                <div className='flex items-center mr-3'>
                                                    <div className='mr-2'>
                                                        <svg className="w-6 h-6 text-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                                    </div>
                                                    <div>
                                                        <p className='text-sm'>{item.unit} units</p>
                                                    </div>
                                                </div>

                                                <div className='flex items-center'>
                                                    <div className='mr-2'>
                                                        <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                                    </div>
                                                    <div>
                                                        <p className='text-sm'>{item.unit * item.plan.roi} ROI</p>
                                                    </div>
                                                </div>
    
                                            </div>
    
                                            <div className='flex items-center'>
                                                <div className='mr-2'>
                                                    <FaTag className='text-greensec w-4 h-4' />
                                                </div>
                                                <div>
                                                    <p className='text-sm'>NGN {item.unit * item.plan.cost_per_unit}</p>
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
                                    onClick={()=>{router.replace('/dashboard/plans')}}
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
