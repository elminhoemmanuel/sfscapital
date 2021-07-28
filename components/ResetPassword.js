import React, { useState } from 'react'
import Link from 'next/link'
import useForm from './useForm'
import PrimaryBtn from './PrimaryBtn'
import {useRouter} from 'next/router'
import axios from 'axios'

const ResetPassword = () => {
    const router = useRouter()
    const [isloading, setIsLoading] = useState(false);
    const [responsegotten, setresponsegotten] = useState("");

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email} = values;

    const handleSubmit = event => {
        event.preventDefault()

        setIsLoading(!isloading);

        axios.get(`https://api.cropsharesafrica.com/api/send_password_recovery_email/${email}`)
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            setresponsegotten('Great!! a reset link has been sent to your email')
          }, (error) => {
            console.log(error.data);
            setIsLoading(false);
            setresponsegotten('Something went wrong, please try again')
          });

        
    
    }


    return (
        <div className='bg-graybg pt-16 pb-80'>
            <div className='bg-white shadow-xl rounded p-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto'>
                <div className='flex justify-center items-center mb-6'>
                    <img className='h-12 w-12' src="/images/logo.png" alt="cropshares logo" />
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <h1 className='text-center stext-xl md:text-3xl text-greensec mb-6'>Reset Your Password</h1>
                    <div className='mb-4'>
                        <input type="email" 
                            name='email'
                            id='email'
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Email Address"
                            className='placeholder-black w-full border-b border-gray-300 focus:border-greenpri focus:outline-none pl-0 pr-3 py-3 text-sm'
                        />
                        {errors.email && dirty.email && (
                                    <p className='text-red-500 text-xs'>{errors.email}</p>
                                )}
                    </div>

                    <div className='flex items-center justify-between mr-0 mb-2'>
                        <div className=' '>
                        {
                                email.length === 0 || errors.email ?
                                <PrimaryBtn buttonText='Reset' addStyle='bg-greenpri text-sm pointer-events-none opacity-50'/> :
                                <PrimaryBtn
                                buttonText={isloading ? <div className="spinner-white"></div> : 
                                'Reset'} 
                                addStyle='bg-greenpri text-sm'/>
                            }

                            
                        </div>

                    </div>

                    {
                        responsegotten && <div className='mt-2'>
                        {
                            responsegotten === 'Great!! a reset link has been sent to your email' ?
                            <div className='rounded p-2 bg-greenpri text-white text-sm'>
                                {responsegotten}
                            </div>
                            :
                            <div className='rounded p-2 bg-red-300 text-white text-sm'>
                                {responsegotten}
                            </div>
                        }
                        </div>
                    }

                    <div className='mt-6'>
                        <p className='text-sm'>
                            <Link href='/login'><a className='text-greenpri'>Back to Login</a></Link> 
                        </p>
                        
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default ResetPassword
