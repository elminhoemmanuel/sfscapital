import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {RiArrowDropDownLine} from "react-icons/ri"

const DashMainNav = () => {
    return (
        <div className="">
            <div className='bg-transparent px-2 py-3 border-b border-navborder flex items-center justify-between'>
                <div className="rounded-full py-2 px-3 md:px-8 lg:px-16 bg-footeryellow text-sm text-white">
                    <p>Hi Andie! you are yet to complete your account setup</p>
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
    )
}

export default DashMainNav
