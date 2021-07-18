import Link from 'next/link'
import { useState } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import PrimaryBtn from './PrimaryBtn'
import Swal from 'sweetalert2'
import useForm from './useForm'
import axios from 'axios'


const DashPlanCalc = ({ user, plan }) => {

    const [isLoading, setisLoading] = useState(false);
    const stateSchema = {
        units:{value:1 , error:""},
    }

    const stateValidatorSchema ={
        units:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Units must be more than one character"
            }
        }, 
        
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {units} = values

    const router = useRouter();

    const handleSubmit = (e)=>{
        e.preventDefault()
        setisLoading(!isLoading);
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
                .then((response) => {
                        console.log(response);
                        if(response.isConfirmed){
                            setisLoading(false);
                        }
                        if(response.isDismissed){
                            setisLoading(false);
                        }
                })
            },
            callback: function(response){
              console.log(response);

              const formdata ={
                plan_id:plan.id,
                reference:response.reference,
                unit:units,
                amount:plan.cost_per_unit * units
             };

             console.log(formdata)

             const userToken = localStorage.getItem('userToken');

             axios.post('https://api.cropsharesafrica.com/api/investment/create',formdata,{
                headers: {
                'Authorization': `Bearer ${userToken}`
                }})
            .then((response) => {
                console.log(response);
                Swal.fire({
                    title: 'Transaction Success',
                    text: 'You have successfully purchased the investment plan',
                    icon: 'success',
                    confirmButtonText: 'Go to Investments',
                    confirmButtonColor:"#2D5427",
                    allowOutsideClick:false,
                })
                .then((response) => {
                    console.log(response);
                    if(response.isConfirmed){
                        router.replace('/dashboard/investments')
                    }
                  })
                setisLoading(false);
            }, (error) => {
                console.log(error);
                Swal.fire({
                    title: 'Oops!!',
                    text: 'Something went wrong, Please try again',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:"#2D5427",
                })
                setisLoading(false);
            });
            

            console.log('after axios')
            setisLoading(false);
            }
            
        });
        handler.openIframe();
    }

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
                                            onChange={handleOnChange}
                                            placeholder='2'
                                            className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.units && dirty.units && (
                                    <p className='text-red-500 text-xs'>{errors.units}</p>
                                )}

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
                            <form onSubmit={handleSubmit}>
                                {
                                    units===0 || errors.units  ?
                                    <PrimaryBtn buttonText='Confirm Purchase' addStyle='bg-greenpri text-sm w-full pointer-events-none opacity-50' /> :
                                    <PrimaryBtn buttonText={isLoading ? <div className='flex items-center justify-center'><div className='spinner-white'></div></div> : 'Confirm Purchase'} addStyle='bg-greenpri text-sm w-full' />
                                }
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
