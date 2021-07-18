import Link from 'next/link'
import { useState } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import CurrentInvestments from './CurrentInvestments';
import HowToFund from './HowToFund';
import DashPlans from './DashPlans';
import WithdrawalsBody from './WithdrawalsBody';

const DashHomeWithdrawals = () => {

    const router = useRouter();
    const [hasWithdrawal, sethasWithdrawal] = useState(false)

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
            <DashSideNav router={router} />
            <div className='md:col-span-4 lg:col-span-5 pt-6 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                {
                    hasWithdrawal ?
                    <WithdrawalsBody /> :
                    <div className='bg-white rounded flex justify-center items-center py-16 h-screen'>
                        <h5 className='font-bold'>You have no Withdrawals yet</h5>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default DashHomeWithdrawals
