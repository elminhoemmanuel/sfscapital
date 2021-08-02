import React from 'react'
import { AiFillCompass } from "react-icons/ai";
import { RiShieldStarFill } from "react-icons/ri";
import { AiFillAppstore, AiFillFile } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import Link from 'next/link'

const LeftSideNav = () => {
    return (
        <div className='border-r-2 border-tumbasborder relative h-full'>
            <div className='px-3 py-2 flex items-center mb-3'>
                <div className='mr-2'><AiFillCompass className='h-12 w-12 text-tumbas' /></div>
                <div>
                    <h1 className='font-bold text-lg text-tumbas'>Tumbas</h1>
                </div>
            </div>

            <div className='px-3 py-2'>
                <h1 className='font-bold text-lg text-tumbasblack mb-3'>Menu</h1>
            </div>
            <div >
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-tumbas hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><AiFillAppstore className='h-6 w-6 text-tumbas' /></div>
                        <div><p className='text-tumbas text-sm'>Overview</p></div>
                    </a>
                </Link>
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-transparent text-tumbasash hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><AiFillFile className='h-6 w-6 ' /></div>
                        <div><p className=' text-sm'>Orders</p></div>
                    </a>
                </Link>
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-transparent text-tumbasash hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><BsBagFill className='h-6 w-6 ' /></div>
                        <div><p className=' text-sm'>Products</p></div>
                    </a>
                </Link>
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-transparent text-tumbasash hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><RiSettings3Fill className='h-6 w-6 ' /></div>
                        <div><p className=' text-sm'>Settings</p></div>
                    </a>
                </Link>
            </div>

            <div className='px-3 py-2'>
                <h1 className='font-bold text-lg text-tumbasblack mb-3'>Business</h1>
            </div>
            <div >
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-transparent text-tumbasash hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><FaPaperPlane className='h-6 w-6 ' /></div>
                        <div><p className=' text-sm'>Shipment</p></div>
                    </a>
                </Link>
                <Link href="/" >
                    <a className='px-3 py-2 flex items-center border-r-2 border-transparent text-tumbasash hover:text-tumbas hover:border-tumbas'>
                        <div className='mr-3'><TiGroup className='h-6 w-6 ' /></div>
                        <div><p className=' text-sm'>Employee</p></div>
                    </a>
                </Link>
            </div>

            <div className='px-3 py-2 mt-60'>
                <p className='text-sm text-tumbasblack'>© Tumbas 2020</p>
                <p className='text-xs text-tumbasash'>Platform for solutions for all types of businesses to be more advanced.</p>
            </div>
        </div>
    )
}

export default LeftSideNav
