import Link from 'next/link'
import { useState } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import PrimaryBtn from './PrimaryBtn'
import Swal from 'sweetalert2'

const DashPlanCalc = ({ user, plan }) => {

    const router = useRouter();

    const [units, setUnits] = useState(1);

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
            <DashSideNav router={router} />
            <div className='md:col-span-4 lg:col-span-5 pt-12 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                <div className=' bg-white rounded p-5'>

                    <div className='pt-6 pb-6 px-4'>
                        <h4 className='text-base md:text-lg font-bold mb-3 text-greenpri'>{plan.name}</h4>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
                            <div>
                                <p className='text-sm mb-3 '>How many units are you purchasing?</p>
                                <input type="number" 
                                            name='units'
                                            id='units'
                                            value={units}
                                            onChange={(e)=>{setUnits(e.target.value)}}
                                            placeholder='2'
                                            className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                            </div>
                            <div>
                                <p className='text-sm mb-3 '>The Cost per unit is:</p>
                                <p className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {plan.cost_per_unit}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm mb-3 '>Your Total Amount Payable is:</p>
                                <p className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {plan.cost_per_unit * units}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm mb-3 '>The ROI per unit is:</p>
                                <p className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {plan.roi}%
                                </p>
                            </div>
                            <div>
                                <p className='text-sm mb-3 '>Your Total ROI is:</p>
                                <p className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {plan.roi * units}%
                                </p>
                            </div>
                            <div>
                                <p className='text-sm mb-3 '>Your Investment duration is:</p>
                                <p className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {plan.duration}
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 mb-3'>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                let handler = PaystackPop.setup({
                                    key: 'pk_test_7f7d5c671c445c64a1b9c62fffa0184c1e35829d',
                                    email: user.email,
                                    amount: (plan.cost_per_unit * units) *100,
                                    onClose: function(){
                                        Swal.fire({
                                            title: 'Oops!!',
                                            text: 'Something went wrong',
                                            icon: 'error',
                                            confirmButtonColor:"#2D5427",
                                        })
                                    },
                                    callback: function(response){
                                      console.log(response);
                                    }
                                });
                                handler.openIframe();
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

export default DashPlanCalc
