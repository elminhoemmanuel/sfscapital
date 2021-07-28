import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar';
import PrimaryBtn from './PrimaryBtn';
import Swal from 'sweetalert2'

const InvestmentsBody = ({ invest }) => {

    console.log('invest', invest)

    const [unit, setunit] = useState(1);

    useEffect(() => {
        setunit(invest[0].unit)

    }, [])

    console.log(unit)

    const today = new Date().getTime()

    const requestCashout = (e) =>{
        e.preventDefault()
        Swal.fire({
            title: 'Success !!',
            text: 'Your withdrawal request has been sent , expect your funds with 48 hours',
            icon: 'success',
            confirmButtonColor:"#90cc42",
        })
        
    }
    

    return (
        <>
            <div className='bg-white rounded mb-3'>
                <div className='border-b border-graybg px-6 py-3'>
                    <h1 className='text-lg md:text-xl text-greenpri'>Your Investments</h1>
                </div>

                <div className='px-6 py-3'>
                    <p className='text-sm mb-6'>Find below a list of your various investments.</p>
                    <div className='flex invest[0]s-center justify-between mb-4'>
                        <div className='flex invest[0]s-center'>
                            <div className='mr-2'>
                                <button type='button'
                                    className='text-sm p-3 rounded border border-greensec bg-transparent
                            hover:border-greenpri whitespace-nowrap'>
                                    PDF
                                </button>
                            </div>
                            <div>
                                <button type='button'
                                    className='text-sm p-3 rounded border border-greensec bg-transparent
                            hover:border-greenpri whitespace-nowrap'>
                                    Print
                                </button>
                            </div>

                        </div>

                        <div>
                            <input type="text"
                                name='searchtext'
                                id='searchtext'
                                placeholder='Search'
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                            />
                        </div>

                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    invest.map(item => (
                        <div className='rounded bg-white '>
                            <div className='flex items-center justify-between mb-2 p-5 border-b border-graybg'>
                                <div className='flex items-center'>
                                    <div className={`rounded-full ${item.plan.css_class} bg-no-repeat bg-cover bg-center w-8 h-8 mr-1`}>
                                    </div>
                                    <div>
                                        <h1 className='text-sm font-bold'>{item.plan.name}</h1>
                                        <h1 className='text-sm'>Units bought: <span className='font-bold'>{item.unit}</span></h1>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <h1>{item.paid === 1 ?
                                        <span className='py-2 px-4 bg-paid rounded-full text-green-500'>{item.status}</span> :
                                        <span className='py-2 px-4 bg-graybg rounded-full text-red-300 '>{item.status}</span>
                                    }
                                    </h1>
                                </div>
                            </div>

                            <div className='p-5 border-b border-graybg grid gap-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                                <div className='mb-2'>
                                    <p className='text-sm'>Unit cost:</p>
                                    <h3 className='text-sm font-bold'> ₦{item.plan.cost_per_unit}</h3>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-sm'>Total Invested:</p>
                                    <h3 className='text-sm font-bold'> ₦{item.amount}</h3>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-sm'>Total ROI:</p>
                                    <h3 className='text-sm font-bold'>{item.plan.roi * item.unit}%</h3>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-sm'>Cashout Total:</p>
                                    <h3 className='text-sm font-bold'> ₦{item.amount}</h3>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-sm'>Start Date:</p>
                                    <h3 className='text-sm font-bold'>
                                        {new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(new Date(item.created_at))
                                        }
                                    </h3>
                                </div>
                                <div className='mb-2'>
                                    <p className='text-sm'>Due Date:</p>
                                    <h3 className='text-sm font-bold'>
                                        {new Intl.DateTimeFormat("en-GB", {
                                                year: "numeric",
                                                month: "long",
                                                day: "2-digit"
                                            }).format(new Date(item.due_date))
                                        } 
                                    </h3>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between p-5'>
                                <div className='mb-3'>
                                    <p className='text-sm'>Progress:</p>
                                    <ProgressBar 
                                    percentage={
                                        Math.round((((item.plan.duration * 31) - (new Date(item.due_date).getTime() - today)/ (1000 * 3600 * 24)) / (item.plan.duration*31)) * 100)
                                    }
                                    />
                                </div>
                                <div className=''>
                                    <form action="" onSubmit={requestCashout}>
                                    {
                                        item.overdue === 0 ? <PrimaryBtn buttonText='Withdraw' addStyle='text-xs bg-greenpri pointer-events-none opacity-50' /> :

                                        <PrimaryBtn  buttonText='Withdraw' addStyle='text-xs py-2 px-3 bg-greenpri' />
                                    }
                                    </form>
                                </div>
                                
                            </div>

                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default InvestmentsBody
