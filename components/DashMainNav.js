import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from "react-icons/ri"
import { GrMenu } from "react-icons/gr"
import { sideData } from './SideNavData'

const DashMainNav = () => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'visible';
    }

    return (
        <div className="relative">

            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'dash-box-show flex shadow-xl flex-col md:hidden bg-sfsblue text-white w-3/4 h-full fixed top-0 z-50 pt-4 max-w-screen-2xl transition'
                : 'dash-box flex shadow-xl flex-col md:hidden bg-sfsblue text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className=''>
                    <div className='lg:hidden flex flex-row justify-end mb-2 px-2'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-white hover:text-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                </div>

                <div className=''>
                    <div className="h-screen bg-sfsblue text-dashtext p-4 flex flex-col justify-between">
                        <div className="">
                            <div className='px-3 pt-5 pb-5'>
                                <Link href="/dashboard">
                                    <a className='block'>
                                        <Image width="35%" height="35%" src="/images/logo.png" className="" />
                                    </a>
                                </Link>
                            </div>
                            <div className="flex items-center md:hidden px-3 py-2">
                                <div>
                                    <Link href="/dashboard">
                                        <a onClick={handleClickMobile} className='block w-full mr-3'>
                                            <Image width="40%" height="40%" src="/images/andie.svg" alt="user avatar" className="" />
                                        </a>
                                    </Link>
                                </div>
                                <Link href='/dashboard'>
                                    <a onClick={handleClickMobile} className="flex items-center ">
                                        <div className='text-dashtext text-sm'>
                                            Andie Kane
                                        </div>
                                        <div className='text-dashtext text-sm'>
                                            <RiArrowDropDownLine className='h-5 w-5' />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div >
                                {
                                    sideData.map(item => {
                                        return <div className='flex items-center' key={item.id}>
                                            <Link href={item.link}>
                                                <a onClick={handleClickMobile} className={`w-full flex items-center px-3 py-4 text-dashtext hover:text-white`}>
                                                    <div className="mr-4">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        {item.text}
                                                    </div>

                                                </a>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="text-dashtext text-sm px-3">
                            <p>2019 | Copright - sfs Capital</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="px-6 md:px-8">
                <div className='bg-transparent  py-3 border-b border-navborder flex items-center justify-between'>
                    <div className="flex items-center">
                        <div className="mr-2 md:hidden">
                            <button onClick={handleClick} className="focus:outline-none block w-full">
                                <GrMenu className="h-6 w-6 text-sfsblue" />
                            </button>
                        </div>
                        <div className="rounded-full py-2 px-5 md:px-8 lg:px-16 bg-footeryellow text-sm text-white">
                            <p>Hi Andie! you are yet to complete your account setup</p>
                        </div>
                    </div>
                    <div className="md:flex items-center hidden">
                        <div>
                            <Link href="/dashboard">
                                <a className='block w-full mr-3'>
                                    <Image width="40%" height="40%" src="/images/andie.svg" alt="user avatar" className="" />
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center ">
                            <div className='text-sfsblue text-sm'>
                                Andie Kane
                            </div>
                            <div className='text-sfsblue text-sm'>
                                <RiArrowDropDownLine className='h-5 w-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashMainNav
