import React, { useState , useEffect} from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';
import { earningsData } from './EarningsData';
import axios from 'axios'

const InvestmentsBody = ({invest}) => {

    console.log('invest', invest)

    const [unit, setunit] = useState(1);

    useEffect(() => {
        setunit(invest[0].unit)
        
    }, [])

    console.log(unit)

    return (
        <div className='bg-white rounded '>
            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Your Investments</h1>
            </div>

            <div className='px-6 py-3'>
                <p className='text-sm mb-6'>Find below a list of your various investments.</p>
                <div className='flex invest[0]s-center justify-between mb-4'>
                    <div className='flex invest[0]s-center'>
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
                                    {/* <th className='p-3 text-left'>
                                        <p >Due Date</p>
                                    </th> */}
                                    <th className='p-3 text-left'>
                                        <p >Status</p>
                                    </th>
                                    {/* <th className='p-3 text-left'>
                                        <p >Withdrawal</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Reinvest</p>
                                    </th> */}
                                </tr>
                                
                                       <tr className='p-2'>
                                           <td className='p-3 '>1</td>
                                           <td className='p-3 '>{invest[0].ref}</td>
                                           <td className='p-3 '>{invest[0].plan.name}</td>
                                           <td className='p-3 '>{invest[0].unit}</td>
                                           <td className='p-3 '>{invest[0].plan.cost_per_unit}</td>
                                           <td className='p-3 '>{invest[0].plan.cost_per_unit*invest[0].unit}</td>
                                           <td className='p-3 '>{invest[0].plan.roi*invest[0].unit}%</td>
                                           <td className='p-3 '>{invest[0].plan.cost_per_unit*invest[0].unit}</td>
                                           <td className='p-3 '>{invest[0].plan.created_at.substr(0,10)}</td>
                                           {/* <td className='p-3 '>{invest[0].dueDate}</td> */}
                                           <td className='p-3 text-greenpri'>{invest[0].status}</td>
                                           {/* <td className='p-3 '>{invest[0].withdraw}</td>
                                           <td className='p-3 '>{invest[0].reinvest}</td> */}
                                       </tr>
                                   
                            </table>
                </div>

            </div>
            
                    
        </div>
    )
}

export default InvestmentsBody
