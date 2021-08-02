import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { ImPieChart } from "react-icons/im";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { table } from './Data'

const Center = () => {
    return (
        <div className='px-8 pt-2 border-r-2 border-tumbasborder h-full'>
            <div className='relative mb-8'>
                <input type="text" 
                className='py-3 pr-4 pl-16 block w-full text-sm text-tumbasblack rounded-full bg-inputgrey 
                focus:bg-transparent border border-transparent focus:border-inputgrey focus:outline-none placeholder-tumbasblack'
                placeholder='Search for product'
                />
                <BiSearch className='h-6 w-6 text-tumbasblack absolute top-3 left-6' />

            </div>

            <div>
                <h1 className='font-bold text-lg text-tumbasblack mb-3'>Overview</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div className="border-2 border-tumbasborder rounded px-3 py-2">
                        <div className='flex items-center justify-between mb-3'>
                            <div>
                                <BsBagFill className='h-5 w-5 text-yellow-600' />
                            </div>
                            <div>
                                <p className='text-sm font-bold text-green-400'>+24%</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='font-bold text-lg text-tumbasblack mb-3'>$27,340.00</h1>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-sm text-tumbasash '>Total Sales</h1>
                        </div>
                    </div>
                    <div className="border-2 border-tumbasborder rounded px-3 py-2">
                        <div className='flex items-center justify-between mb-3'>
                            <div>
                                <ImPieChart className='h-5 w-5 text-purple-500' />
                            </div>
                            <div>
                                <p className='text-sm font-bold text-red-400'>-32%</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='font-bold text-lg text-tumbasblack mb-3'>$27,340.00</h1>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-sm text-tumbasash '>Total Expenses</h1>
                        </div>
                    </div>
                    <div className="border-2 border-tumbasborder rounded px-3 py-2">
                        <div className='flex items-center justify-between mb-3'>
                            <div>
                                <TiGroup className='h-5 w-5 text-green-400' />
                            </div>
                            <div>
                                <p className='text-sm font-bold text-green-400'>+48%</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='font-bold text-lg text-tumbasblack mb-3'>$18,260.00</h1>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-sm text-tumbasash '>Total Visitors</h1>
                        </div>
                    </div>
                    <div className="border-2 border-tumbasborder rounded px-3 py-2">
                        <div className='flex items-center justify-between mb-3'>
                            <div>
                                <RiShoppingCart2Fill className='h-5 w-5 text-yellow-600' />
                            </div>
                            <div>
                                <p className='text-sm font-bold text-red-400'>-12%</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h1 className='font-bold text-lg text-tumbasblack mb-3'>$11,340.00</h1>
                        </div>
                        <div className='mb-3'>
                            <h1 className='text-sm text-tumbasash '>Total Orders</h1>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='mt-4 mb-3'>
                <img src="/images/chart.png" alt="chart image" />
            </div>

            <div className='border-2 border-tumbasborder rounded px-3 py-2'>
                <h1 className='font-bold text-lg text-tumbasblack mb-3'>Popular Products</h1>

                <table className='w-full'>
                    <thead>
                        <tr className='bg-inputgrey rounded text-sm text-tumbasash text-left p-3'>
                            <th className='p-2'>Photos</th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Date</th>
                            <th className='p-2'>Category</th>
                            <th className='p-2'>Brand</th>
                            <th className='p-2'>Price</th>
                            <th className='p-2'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            table.map((item, x) =>(
                                <tr key={x}>
                                    <td className='p-2'>
                                        <div className='p-2 bg-greybg rounded flex items-center justify-center'>
                                            <img className='h-8 w-8' src={item.image} alt="item image" />
                                        </div> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-tumbasblack'>{item.name}</h1> 
                                        <p className='text-xs text-tumbasash'>{item.code}</p> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-tumbasblack'>{item.date}</h1> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-tumbasblack'>{item.category}</h1> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-tumbasblack'>{item.brand}</h1> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-green-500'>{item.price}</h1> 
                                    </td>
                                    <td className='p-2'>
                                        <h1 className='text-sm text-tumbasblack'>{item.status}</h1> 
                                        <p className='text-xs text-tumbasash'>{item.viewers}</p> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
            
        </div>
    )
}

export default Center
