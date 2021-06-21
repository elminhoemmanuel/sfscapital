import React, { useState } from 'react'
import Link from 'next/link'
import useForm from './useForm'
import PrimaryBtn from './PrimaryBtn'
import {useRouter} from 'next/router'
import axios from 'axios'


const Register = () => {

    const router = useRouter()
    const [isloading, setIsLoading] = useState(false);
    const [responsegotten, setresponsegotten] = useState("");

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""},
        firstname:{value:"" , error:""},
        lastname:{value:"" , error:""},
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        firstname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"First name must be more than one character without space inbetween"
            }
        },
        lastname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Last name must be more than one character without space inbetween"
            }
        },
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
    const {email, firstname, lastname, password} = values;

    const handleSubmit = event => {
        event.preventDefault()

        setIsLoading(!isloading);

        axios.post('https://api.cropsharesafrica.com/api/register', {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            role:'user'
          })
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            router.push('/login')
          }, (error) => {
            console.log(error.data);
            setIsLoading(false);
            setresponsegotten('Something went wrong, ensure that your email is not already taken')
          });

        
    
    }


    return (
        <div className='bg-graybg pt-16 pb-16'>
            <div className='bg-white shadow-xl rounded p-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto'>
                <div className='flex justify-center items-center mb-6'>
                    <img className='h-16' src="/images/logo.png" alt="cropshares logo" />
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <h1 className='text-center stext-xl md:text-3xl text-greensec mb-6'>Create Your Account</h1>
                    <div className='mb-4'>
                        <input type="text" 
                            name='firstname'
                            id='firstname'
                            value={firstname}
                            onChange={handleOnChange}
                            placeholder="First Name"
                            className='placeholder-black w-full border-b border-gray-300 focus:border-greenpri focus:outline-none pl-0 pr-3 py-3 text-sm'
                        />
                        {errors.firstname && dirty.firstname && (
                                    <p className='text-red-500 text-xs'>{errors.firstname}</p>
                                )}
                    </div>
                    <div className='mb-4'>
                        <input type="text" 
                            name='lastname'
                            id='lastname'
                            value={lastname}
                            onChange={handleOnChange}
                            placeholder="Last Name"
                            className='placeholder-black w-full border-b border-gray-300 focus:border-greenpri focus:outline-none pl-0 pr-3 py-3 text-sm'
                        />
                        {errors.lastname && dirty.lastname && (
                                    <p className='text-red-500 text-xs'>{errors.lastname}</p>
                                )}
                    </div>
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

                    <p className='text-xs mb-5'>
                            By creating your account you are agreeing to Cropshares <Link href='/terms'><a className='text-greenpri whitespace-nowrap'>Terms of use </a></Link>
                             and <Link href='/privacy'><a className='text-greenpri whitespace-nowrap'>Privacy policy</a></Link>
                    </p>

                    <div className='mr-0 mb-3 '>
                        {
                            email.length === 0 || errors.email || firstname.length === 0 || lastname.length === 0 || password.length===0 || errors.firstname ||errors.lastname || errors.password ?
                            <PrimaryBtn buttonText='Create My Account' addStyle='bg-greenpri text-sm pointer-events-none opacity-50'/> :
                            <PrimaryBtn
                             buttonText={isloading ? <div className="spinner-white"></div> : 
                             'Create My Account'} 
                             addStyle='bg-greenpri text-sm'/>
                        }

                        {
                            responsegotten && <p className='text-xs text-red-400'>{responsegotten}</p>
                        }
                    </div>

                    <div className='mt-6'>
                        <p className='text-sm'>I have an account already. 
                            <Link href='/login'><a className='text-greenpri'> Login</a></Link> 
                        </p>
                        
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default Register
