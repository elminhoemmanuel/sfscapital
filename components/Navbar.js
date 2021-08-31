import React from 'react'
import { ImCheckboxChecked } from "react-icons/im";
import Link from 'next/link'
import PriBtn from './PriBtn'

const Navbar = () => {
    return (

        // Navigations Bar
        <nav className='flex items-center justify-between bg-transparent px-6
        fixed top-0 left-0 w-full h-auto'>

            {/* Left side of Navigation Bar */}
            <Link href="/">
                <a className='flex items-center py-2'>
                    <div className='mr-4'>
                        <ImCheckboxChecked className="text-bexels h-10 w-10" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-base">Bexels</p>
                    </div>
                </a>
            </Link>

            {/* Right side of Navigation Bar */}
            <div className="flex items-center py-2">
                <div className='mr-8'>
                   <Link href='/'>
                        <a className="text-white text-base">Explore</a>
                   </Link>
                </div>
                <div>
                   <PriBtn btnType='button' btnText="Join" addStyle="font-bold text-base px-8" />
                </div>
            </div>
        </nav>

    )
}

export default Navbar
