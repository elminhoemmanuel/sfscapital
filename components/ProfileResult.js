import React, { useState, useEffect } from 'react'
import PrimaryBtn from './PrimaryBtn'
import useForm from './useForm'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import Swal from 'sweetalert2'

const ProfileResult = () => {

    const [isLoading2, setisLoading2] = useState(true);
    const [isLoading, setisLoading] = useState(true);
    const [isLoading3, setisLoading3] = useState(true);
    const [isLoading4, setisLoading4] = useState(true);
    const [user, setUser] = useState({})
    const [bank, setBank] = useState({})

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.cropsharesafrica.com/api/profile`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                setUser(response.data.data)
                console.log(user);
                setisLoading2(false)
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [isLoading2])

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.cropsharesafrica.com/api/bank_detail`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                setBank(response.data.data)
                console.log(bank);
                setisLoading4(false)
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [isLoading4])

    return (
            <>
            {
                isLoading2  && isLoading4 ?
                <div className='flex items-center justify-center py-16'>
                    <div className="spinner-page"></div>
                </div>:
                <div>
                <div className='px-6 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='mb-4'>
                        <p className='text-sm'>CropShares ID Number*</p>
                        <p className='text-greenpri'>{user.user.cropshares_id}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>First Name*</p>
                        <p className='text-greenpri'>{user.first_name}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Last Name*</p>
                        <p className='text-greenpri'>{user.last_name}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Other Name*</p>
                        <p className='text-greenpri'>{user.other_name}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Phone Number*</p>
                        <p className='text-greenpri'>{user.phone}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Address*</p>
                        <p className='text-greenpri'>{user.address}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Date of Birth*</p>
                        <p className='text-greenpri'>{user.dob}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>State*</p>
                        <p className='text-greenpri'>{user.city}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Country*</p>
                        <p className='text-greenpri'>{user.country}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Gender*</p>
                        <p className='text-greenpri'>{user.gender}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>State of Origin*</p>
                        <p className='text-greenpri'>{user.state_of_origin}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Next of Kin*</p>
                        <p className='text-greenpri'>{user.nok}</p>
                    </div>
                    <div className='mb-4'>
                        <p className='text-sm'>Next of Kin Phone*</p>
                        <p className='text-greenpri'>{user.nok_phone}</p>
                    </div>
                </div>
                <div className='px-6 py-3 '>
                    <div className='border-b border-graybg py-3'><h1 className='text-lg text-greenpri '>Bank Details</h1></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3'>
                        <div className='mb-4'>
                            <p className='text-sm'>Account Name*</p>
                            <p className='text-greenpri'>{bank.account_name}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Account Number*</p>
                            <p className='text-greenpri'>{bank.account_number}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Bank Name*</p>
                            <p className='text-greenpri'>{bank.bank_name}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Foreign Account Name</p>
                            <p className='text-greenpri'>{bank.foreign_account_name}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Foreign Account Number</p>
                            <p className='text-greenpri'>{bank.foreign_account_number}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Foreign Bank Name</p>
                            <p className='text-greenpri'>{bank.foreign_bank_name}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>IBAN</p>
                            <p className='text-greenpri'>{bank.iban}</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-sm'>Your Currency</p>
                            <p className='text-greenpri'>{bank.currency}</p>
                        </div>
                        
                    </div>
                </div>

            </div>
            }
            </>
    )
}

export default ProfileResult
