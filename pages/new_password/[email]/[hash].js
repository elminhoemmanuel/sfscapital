import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head';
import LogoNavbar from '../../../components/LogoNavbar';
import React, { useState, useEffect } from 'react';
import useForm from '../../../components/useForm';



const NewPassword = () => {
    const router = useRouter()
    const user_details = router.query

    const [resetMessage, setresetMessage] = useState('')

    const [isloading, setIsloading] = useState(false);

    //Define the state schema used for validation
    const stateSchema = {
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        password:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const { password } = values;

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        handleNext();

        axios.post('https://api.cropsharesafrica.com/api/reset_password', {
            email: user_details.email,
            hash: user_details.hash,
            password: password,
        })
        .then((response) => {
            setIsloading(false)
            console.log(response.data);
            setresetMessage(response.data.message);
            router.push('login')
        }, (error) => {
            setIsloading(false)
            console.log(error);
            setresetMessage('Something went wrong , plase try again')
        });
    }


  return (

      <>

            <Head>
                <title>Cropshares | New_Password</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='2xl:max-w-screen-2xl 2xl:mx-auto'>
                <div className='bg-graybg pt-16 pb-80'>
                <div className='bg-white shadow-xl rounded p-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto'>
                    <div className='flex justify-center items-center mb-6'>
                        <img className='h-16' src="/images/logo.png" alt="cropshares logo" />
                    </div>

                    <form action="" onSubmit={handleFormSubmit}>
                        <h1 className='text-center stext-xl md:text-3xl text-greensec mb-6'>Enter Your New Password</h1>
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
                                    email.length === 0 || errors.email ?
                                    <PrimaryBtn buttonText='Apply' addStyle='bg-greenpri text-sm pointer-events-none opacity-50'/> :
                                    <PrimaryBtn
                                    buttonText={isloading ? <div className="spinner-white"></div> : 
                                    'Apply'} 
                                    addStyle='bg-greenpri text-sm'/>
                                }

                                
                            </div>

                        </div>

                        {
                            resetMessage && <div className='text-red-400 text-sm'>{resetMessage}</div>
                        }

                    </form>

                </div>
                
                </div>
            </div>

      </>
  );
}

export default NewPassword