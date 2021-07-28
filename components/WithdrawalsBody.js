import React from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch, FaHandHoldingUsd, FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';
import { withdrawalsData } from './WithdrawalsData';

const WithdrawalsBody = ({ trans }) => {
    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Your Withdrawals</h1>
            </div>

            <div className='px-6 py-3'>
                <p className='text-sm mb-6'>Find below a list of your various withdrawals.</p>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <button type='button'
                                className='text-sm p-3 rounded border border-greensec bg-transparent
                            hover:border-greenpri whitespace-nowrap'>
                                PDF
                            </button>
                        </div>
                        <div>
                            <button type='button'
                                className='text-sm p-3 rounded border border-greensec bg-transparent
                            hover:border-greenpri whitespace-nowrap'>
                                Print
                            </button>
                        </div>

                    </div>

                    <div>
                        <input type="text"
                            name='searchtext'
                            id='searchtext'
                            placeholder='Search'
                            className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                        />
                    </div>


                </div>

                <div className='overflow-x-scroll'>
                    <table className='text-sm text-didallabody bg-white p-2 w-full '>
                        <tr className='border-b border-grayborder p-2'>
                            <th className='p-3 text-left text-sm'>
                                <p >S/N</p>
                            </th>
                            <th className='p-3 text-left text-sm'>
                                <p >Plan</p>
                            </th>
                            <th className='p-3 text-left text-sm'>
                                <p >Units</p>
                            </th>
                            <th className='p-3 text-left text-sm'>
                                <p >Transaction Amount(₦)</p>
                            </th>
                            <th className='p-3 text-left text-sm'>
                                <p >Type</p>
                            </th>
                            <th className='p-3 text-left text-sm'>
                                <p >Date</p>
                            </th>

                        </tr>
                        {
                            trans.map((item, x) => (
                                <tr className='p-2'>
                                    <td className='p-3 '>{x + 1}</td>
                                    <td className='p-3 '>{item.plan.name}</td>
                                    <td className='p-3 '>{item.investment.unit}</td>
                                    <td className='p-3 '>{item.amount}</td>
                                    <td className='p-3 '>{item.type}</td>
                                    <td className='p-3 '>
                                        {new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(new Date(item.created_at))
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>

            </div>

        </div>
    )
}

export default WithdrawalsBody
