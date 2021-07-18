import Link from 'next/link'
import { useState, useEffect } from 'react';
import DashSideNav from './DashSideNav'
import {useRouter} from 'next/router'
import CurrentInvestments from './CurrentInvestments';
import HowToFund from './HowToFund';
import DashPlans from './DashPlans';
import InvestmentsBody from './InvestmentsBody';
import axios from 'axios';

const DashHomeInvestments = () => {

    const router = useRouter();
    const [hasInvestment, sethasInvestment] = useState(true)

    const [isLoading2, setisLoading2] = useState(true);
    const [invest, setinvest] = useState({});

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.cropsharesafrica.com/api/investment/user_investment`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                setinvest(response.data.data)
                console.log(invest);
                setisLoading2(false)
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [isLoading2])

    return (
        <>
        {
            isLoading2 ?
            <div className='flex items-center justify-center py-16'>
                <div className="spinner-page"></div>
            </div>:
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 bg-graybg'>
                <DashSideNav router={router} />
                <div className='md:col-span-4 lg:col-span-5 pt-6 pl-6 md:pl-52 lg:pl-60 pb-16 pr-6'>
                    {
                        invest.length !== 0 ? 
                        <InvestmentsBody invest={invest}/> :
                        <div className='bg-white rounded flex justify-center items-center py-16 h-screen'>
                            <h5 className='font-bold'>You have no Investments yet</h5>
                        </div>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default DashHomeInvestments
