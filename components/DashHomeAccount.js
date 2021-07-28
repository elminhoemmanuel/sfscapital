import Link from 'next/link'
import { useState, useEffect } from 'react';
import DashSideNav from './DashSideNav'
import { useRouter } from 'next/router'
import axios from 'axios'
import useForm from './useForm'
import Swal from 'sweetalert2'
import PrimaryBtn from './PrimaryBtn';

const DashHomeAccount = ({ user }) => {

    const router = useRouter();

    //Define the state schema used for validation
    const stateSchema = {
        currentpassword: { value: "", error: "" },
        newpassword: { value: "", error: "" },
        confnewpassword: { value: "", error: "" },
    }

    const stateValidatorSchema = {
        currentpassword: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        },
        newpassword: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        },
        confnewpassword: {
            required: true,
            validator: {
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error: "password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)
    const { currentpassword, newpassword, confnewpassword } = values;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitting2, setIsSubmitting2] = useState(false);

    const handleSubmit = event => {
        event.preventDefault()
        setIsSubmitting(!isSubmitting);
        // setIsSubmitting2(!isSubmitting2);

        const userToken = localStorage.getItem('userToken');

        const formdata = {
            password: currentpassword,
            new_password: newpassword,
            confirm_new_password: confnewpassword
        };

        axios.post('https://api.cropsharesafrica.com/api/users/change_password', formdata, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then((response) => {
                setIsSubmitting(false)
                console.log(response);
                Swal.fire({
                    title: 'Success !!',
                    text: 'Your Password has been updated',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    iconColor: "#90cc42",
                    confirmButtonColor: "#2D5427",
                })

            }, (error) => {
                setIsSubmitting(false)
                console.log(error);
                Swal.fire({
                    title: 'Oops!!',
                    text: 'Something went wrong , please try again',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: "#2D5427",
                })

            });

    }


    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
                <DashSideNav router={router} />
                <div className='md:col-span-4 lg:col-span-5 pt-6 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                    <div className='rounded bg-white'>
                        <div className='border-b border-graybg px-6 py-3'>
                            <h1 className='text-lg md:text-xl text-greenpri font-bold'>Your Account Settings</h1>
                        </div>
                        <div className=' px-6 py-3'>
                            <h1 className='text-sm md:text-xl text-greenpri'>Change your password</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='text-sm px-6 py-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className='mb-4'>
                                    <div className='mb-1'><label htmlFor="currentpassword" className='text-sm'>Current Password</label></div>
                                    <input type="password"
                                        name='currentpassword'
                                        id='currentpassword'
                                        value={currentpassword}
                                        onChange={handleOnChange}
                                        className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    />
                                    {errors.currentpassword && dirty.currentpassword && (
                                        <p className='text-red-500 text-xs'>{errors.currentpassword}</p>
                                    )}
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-1'><label htmlFor="newpassword" className='text-sm'>New Password</label></div>
                                    <input type="password"
                                        name='newpassword'
                                        id='newpassword'
                                        value={newpassword}
                                        onChange={handleOnChange}
                                        className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    />
                                    {errors.newpassword && dirty.newpassword && (
                                        <p className='text-red-500 text-xs'>{errors.newpassword}</p>
                                    )}
                                </div>
                                <div className='mb-4'>
                                    <div className='mb-1'><label htmlFor="confnewpassword" className='text-sm'>Confirm New Password</label></div>
                                    <input type="password"
                                        name='confnewpassword'
                                        id='confnewpassword'
                                        value={confnewpassword}
                                        onChange={handleOnChange}
                                        className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    />
                                    {errors.confnewpassword && dirty.confnewpassword && (
                                        <p className='text-red-500 text-xs'>{errors.confnewpassword}</p>
                                    )}
                                    {
                                        dirty.confnewpassword && (<p className='text-red-500 text-xs'>
                                            {
                                                confnewpassword !== newpassword ? <span>Passwords do not match</span> : <span></span>
                                            }
                                        </p>)
                                    }
                                </div>

                            </div>
                            <div className='px-6 py-3 mb-3'>
                                {
                                    currentpassword.length === 0 || errors.currentpassword || newpassword.length === 0
                                        || errors.newpassword || confnewpassword.length === 0 || errors.confnewpassword
                                        || newpassword !== confnewpassword ?

                                        <PrimaryBtn buttonText='Confirm' addStyle='bg-greenpri text-sm pointer-events-none opacity-50' /> :

                                        <PrimaryBtn buttonText={isSubmitting ? <div className='spinner-white'></div> : 'Confirm'} addStyle='bg-greenpri text-sm' />
                                }
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashHomeAccount