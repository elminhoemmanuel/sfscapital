import React, { useState, useEffect } from 'react'
import { ImCheckboxChecked } from "react-icons/im";
import PriBtn from './PriBtn'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const router = useRouter();
    const [nav, setNav] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    const handleClick = () => {
        setMenuShow(!menuShow);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuShow(!menuShow);
        document.body.style.overflowY = 'visible';
    }

    window.addEventListener("scroll", changeBackground);

    return (


        <>

            {/* mobile screens vertical nav */}
            <div className={menuShow ? 'mobile-box-show flex shadow-xl  flex-col lg:hidden bg-sfsblue text-white w-full h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition'
                : 'mobile-box flex shadow-xl  flex-col lg:hidden bg-sfsblue text-white w-0 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className=''>
                    <div className='lg:hidden flex flex-row justify-end mb-6 px-2'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-white hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                </div>

                <div className='flex lg:hidden flex-col font-bold justify-center'>
                    <div onClick={handleClickMobile}>
                        <Link className='' href="/">
                            <a className='text-center block mb-4 w-full py-3 px-3 text-white hover:text-blue-600'>
                                Login
                            </a>
                        </Link>
                    </div>

                    <div className="mb-4 text-center">
                        <PriBtn btnType='button' btnText="Signup" addStyle="font-bold text-base px-8" />
                    </div>



                </div>

            </div>

            {/* Navigation Bar on large screens */}
            <div className='relative'>
                <nav
                    className={nav ? 'flex items-center justify-between bg-sfsblue px-6 pt-7 pb-4 md:px-12 fixed top-0  w-full h-auto z-30 2xl:max-w-screen-2xl 2xl:mx-auto' :
                        'flex items-center justify-between bg-sfsblue lg:bg-transparent px-6 pt-7 pb-4 md:px-12 fixed top-0  w-full h-auto z-30 2xl:max-w-screen-2xl 2xl:mx-auto'
                    }>

                    {/* Left side of Navigation Bar */}
                    <div className="">
                        <Link href="/">
                            <a className=''>
                                <Image width="40%" height="40%" src="/images/logo.png" className=""/>
                            </a>
                        </Link>
                        
                    </div>

                    {/* Right side of Navigation Bar */}
                    <div className="flex items-center">
                        <div className='mr-8 hidden md:block'>
                            <Link href='/'>
                                <a className="text-white text-base">Login</a>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <PriBtn btnType='button' btnText="Signup" addStyle="font-bold text-base px-8" />
                        </div>

                        <div className='md:hidden'>
                            <button onClick={handleClick} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbar
