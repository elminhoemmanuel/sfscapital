import React from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';
import { earningsData } from './EarningsData';

const InvestmentsBody = () => {
    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Your Investments</h1>
            </div>

            <div className='px-6 py-3'>
                <p className='text-sm mb-6'>Find below a list of your various investments.</p>
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
                                    <th className='p-3 text-left'>
                                        <p >S/N</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >CSA ID</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Plan</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Units</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Unit Cost(₦)</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Total Invested(₦)</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Total ROI(₦)</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Payout Total(₦)</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Start Date</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Due Date</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Status</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Withdrawal</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Reinvest</p>
                                    </th>
                                </tr>
                                {
                                   earningsData.map(item=>(
                                       <tr className='p-2'>
                                           <td className='p-3 '>{item.sn}</td>
                                           <td className='p-3 '>{item.ref}</td>
                                           <td className='p-3 '>{item.plan}</td>
                                           <td className='p-3 '>{item.units}</td>
                                           <td className='p-3 '>{item.unitCost}</td>
                                           <td className='p-3 '>{item.investment}</td>
                                           <td className='p-3 '>{item.totalRoi}</td>
                                           <td className='p-3 '>{item.payout}</td>
                                           <td className='p-3 '>{item.startDate}</td>
                                           <td className='p-3 '>{item.dueDate}</td>
                                           <td className='p-3 text-greenpri'>{item.status}</td>
                                           <td className='p-3 '>{item.withdraw}</td>
                                           <td className='p-3 '>{item.reinvest}</td>
                                       </tr>
                                   )) 
                                }
                            </table>
                </div>

            </div>
            
                    
        </div>
    )
}

export default InvestmentsBody
