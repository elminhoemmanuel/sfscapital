import React from 'react'
import { HiBell } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { RiTicket2Fill } from "react-icons/ri";
import { AiFillCompass } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import ProgressBar from './ProgressBar';
import Link from 'next/link'
import { orders } from './Data'

const RightSideNav = () => {
    return (
        <div className='px-8 pt-2 pb-3'>
            <div className='flex items-center justify-between'>
                <div className='rounded-full h-12 w-12 border-2 border-tumbasborder flex items-center justify-center'>
                    <HiBell className='h-6 w-6 text-tumbasblack' />
                </div>

                <div className='rounded-full h-12 w-12 border-2 border-tumbasborder flex items-center justify-center'>
                    <FaPen className='h-5 w-5 text-tumbasblack' />
                </div>
            </div>

            <div className='mt-5 mb-2 flex items-center justify-center flex-col'>
                <div className='mb-2'><AiFillCompass className='h-24 w-24 text-tumbas' /></div>
                <div><h1 className='font-bold text-xl text-tumbasblack mb-3'>Konter Pulsa</h1></div>
            </div>

            <div className="border-2 border-tumbasborder rounded p-2 grid grid-cols-1 md:grid-cols-2">
                <div className='flex items-center border-r border-tumbasborder p-2'>
                    <div className='p-2 bg-greybg rounded flex items-center justify-center mr-4'>
                        <BsBagFill className='h-6 w-6' />
                    </div>
                    <div>
                        <h1 className='text-sm text-tumbasblack font-bold'>218</h1>
                        <p className='text-xs text-tumbasash'>Products</p>
                    </div>
                </div>
                <div className='flex items-center border-l border-tumbasborder pl-4 py-2 pr-2'>
                    <div className='p-2 bg-greybg rounded flex items-center justify-center mr-4'>
                        <TiGroup className='h-6 w-6' />
                    </div>
                    <div>
                        <h1 className='text-sm text-tumbasblack font-bold'>218</h1>
                        <p className='text-xs text-tumbasash'>Products</p>
                    </div>
                </div>
            </div>

            <div className='mt-6 mb-6'>
                <h1 className='font-bold text-lg text-tumbasblack mb-3'>Reputation</h1>

                <div className="border-2 border-tumbasborder rounded p-2 ">
                    <div className='flex items-center p-2 w-full'>
                        <div className='p-2 bg-tumbasorange rounded flex items-center justify-center mr-4'>
                            <RiTicket2Fill className='h-6 w-6 text-yellow-600' />
                        </div>
                        <div className='w-full'>
                            <div className='flex items-center justify-between mb-2'>
                                <div>
                                    <h1 className='text-sm text-tumbasblack font-bold'>Star seller</h1>
                                </div>
                                <div>
                                    <h1 className='text-sm text-tumbasblack font-bold'>85%</h1>
                                </div>
                            </div>
                            <ProgressBar percentage={80} />
                        </div>
                    </div>

                </div>

            </div>

            <div className='mt-6 mb-6'>
                <div className='flex items-center justify-between mb-3'>
                    <div><h1 className='font-bold text-lg text-tumbasblack '>Recent Orders</h1></div>
                    <div>
                        <Link href='/'>
                            <a clasName='text-tumbas font-bold text-lg'>See All</a>
                        </Link>
                    </div>
                </div>

                <div className="border-2 border-tumbasborder rounded p-2 ">
                    {
                        orders.map((item, x) => (
                            <div className='flex items-center p-2 w-full' key={x}>
                                <div className='p-2 bg-tumbasorange rounded flex items-center justify-center mr-4'>
                                    <img className='h-8 w-12' src={item.image} alt='headphone' />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <h1 className='text-sm text-tumbasblack font-bold'>{item.name}</h1>
                                        </div>
                                        <div>
                                            <h1 className='text-sm text-green-500 font-bold'>+$80.00</h1>
                                        </div>
                                    </div>
                                    <p className='text-xs text-tumbasash'>2 Minutes Ago</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default RightSideNav
