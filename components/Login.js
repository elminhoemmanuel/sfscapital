import React, { useState } from 'react'
import Link from 'next/link'
import useForm from './useForm'
import PrimaryBtn from './PrimaryBtn'
import {useRouter} from 'next/router'
import axios from 'axios'


const Login = () => {

    const router = useRouter()
    const [isloading, setIsLoading] = useState(false);
    const [responsegotten, setresponsegotten] = useState("");

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""},
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        },
        password:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email, password} = values;

    const handleSubmit = event => {
        event.preventDefault()

        setIsLoading(!isloading);

        axios.post('https://api.cropsharesafrica.com/api/login', {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem('userToken',response.data.access_token)
            setIsLoading(false);
            router.replace('/dashboard')
          }, (error) => {
            console.log(error.data);
            setIsLoading(false);
            setresponsegotten('Something went wrong, ensure that your email is verified by checking your email inbox and then try again')
          });

        
    
    }


    return (
        <div className='bg-graybg pt-16 pb-80'>
            <div className='bg-white shadow-xl rounded p-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto'>
                <div className='flex justify-center items-center mb-6'>
                    <img className='h-16' src="/images/logo.png" alt="cropshares logo" />
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <h1 className='text-center text-xl md:text-3xl text-greensec mb-6'>Login to Your Account</h1>
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
                    
                    <div className='mb-4'>
                        <input type="password" 
                            name='password'
                            id='password'
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Password"
                            className='placeholder-black w-full border-b border-gray-300 focus:border-greenpri focus:outline-none pl-0 pr-3 py-3 text-sm'
                        />
                        {errors.password && dirty.password && (
                                    <p className='text-red-500 text-xs'>{errors.password}</p>
                                )}
                    </div>

                    <div className='flex items-center justify-between mr-0 mb-2'>
                        <div className=' '>
                        {
                                email.length === 0 || errors.email || password.length===0 ||  errors.password ?
                                <PrimaryBtn buttonText='Login' addStyle='bg-greenpri text-sm pointer-events-none opacity-50'/> :
                                <PrimaryBtn
                                buttonText={isloading ? <div className="spinner-white"></div> : 
                                'Login'} 
                                addStyle='bg-greenpri text-sm'/>
                            }

                            
                        </div>

                        <div className=''>
                            <p className='text-sm'> 
                                <Link href='/reset_password'><a className='text-greenpri text-xs sm:text-sm whitespace-nowrap'> forgot password?</a></Link> 
                            </p>
                        
                        </div>

                    </div>

                    <div>
                    {
                        responsegotten && <p className='text-xs text-red-400'>{responsegotten}</p>
                    }
                    </div>

                    <div className='mt-6'>
                        <p className='text-sm'>I dont have an account. 
                            <Link href='/register'><a className='text-greenpri'> Create an account</a></Link> 
                        </p>
                        
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default Login
