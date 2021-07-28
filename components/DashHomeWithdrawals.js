import Link from 'next/link'
import { useState, useEffect } from 'react';
import DashSideNav from './DashSideNav'
import { useRouter } from 'next/router'
import CurrentInvestments from './CurrentInvestments';
import HowToFund from './HowToFund';
import DashPlans from './DashPlans';
import WithdrawalsBody from './WithdrawalsBody';
import axios from 'axios'

const DashHomeWithdrawals = ({user}) => {

    const router = useRouter();
    const [hasWithdrawal, sethasWithdrawal] = useState(true)

    const [isLoading, setisLoading] = useState(true);
    const [trans, setTrans] = useState([])

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');

        // if (trans === undefined) {
            axios.get(`https://api.cropsharesafrica.com/api/transaction/user_transaction`,
                {
                    headers: {
                        'Authorization': `Bearer ${userToken}`
                    }
                }
            )
                .then((response) => {
                    // console.log(response.data.data);
                    setTrans(response.data.data)
                    // console.log(trans);
                    setisLoading(false)

                }, (error) => {
                    console.log(error)
                    setisLoading(false)
                });
        // }

    }, [trans])

    return (
        <>
            {
                isLoading ?
                    <div className='flex items-center justify-center py-16'>
                        <div className="spinner-page"></div>
                    </div> :
                    <div>
                        {
                            trans === [] ?
                                <div className='flex h-screen items-center justify-center text-lg'>
                                    Something went wrong , Please check your internet connection and try again.
                                </div>
                                :
                                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
                                    <DashSideNav router={router} />
                                    <div className='md:col-span-4 lg:col-span-5 pt-6 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                                        {
                                            trans.length !== 0 ?
                                                <WithdrawalsBody trans={trans}/> :
                                                <div className='bg-white rounded flex justify-center items-center py-16 h-screen'>
                                                    <h5 className='font-bold'>You have no Withdrawals yet</h5>
                                                </div>
                                        }
                                    </div>
                                </div>

                        }
                    </div>
            }
        </>
    )
}

export default DashHomeWithdrawals
