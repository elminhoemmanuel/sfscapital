import Link from 'next/link'
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Navbar = ({activePage}) => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY= 'hidden';
        
    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY= 'visible';
    } 

    return ( 
        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col lg:hidden bg-black text-white w-full h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition'
            : 'mobile-box flex shadow-xl flex-col lg:hidden bg-black text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className=''>
                    <div className='lg:hidden flex flex-row justify-end mb-4 px-2'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-white hover:text-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>   
                    </div> 
                </div>

                <div className='flex lg:hidden flex-col font-bold'>
                        <div onClick={handleClickMobile}>
                            <Link className='block w-full' href="/">
                                <a className='text-center block mb-2 w-full py-3 px-3 lg:px-6 text-white hover:text-greensec'>
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link className='block w-full' href="/about">
                                <a className='text-center block mb-2 whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white hover:text-greensec'>
                                    About Us
                                </a>
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link className='block w-full' href="/plans">
                                <a className='text-center block mb-2 whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white hover:text-greensec'>
                                    Plans
                                </a>
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link className='block w-full' href="/contact">
                                <a className='text-center block mb-2 whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white hover:text-greensec'>
                                    Contact
                                </a>
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link className='block w-full' href="/login">
                                <a className='text-center block mb-2 whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white hover:text-greensec'>
                                    Login
                                </a>
                            </Link>
                        </div>
                        <div className='px-8' onClick={handleClickMobile}>
                            <Link className='block w-full' href="/register">
                                <a className='text-center block mb-2 rounded-full whitespace-nowrap w-full py-4 px-3 lg:px-6 text-white bg-greenpri hover:bg-greensec'>
                                    Get Started
                                </a>
                            </Link>
                        </div>
                        

                </div>
                
            </div>

            {/* Navigation bar */}
            <nav className='flex flex-row py-4 px-6 md:px-10 lg:px-20 justify-between items-center fixed top-0 2xl:max-w-screen-2xl 2xl:mx-auto w-full bg-white z-10 with-border-gradient shadow-sm nav'>
                <div className='flex flex-row justify-start items-center text-base'>
                    
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="cropshares-logo" src='/images/logo.png' className='pl-0 h-10 w-10 md:h-12 md:w-12 
                        ' /></a>
                        </Link>
                    </div>
                    
                    
                </div>
                <div className='flex-row items-center flex'>

                    <div className='hidden lg:flex flex-row items-center font-bold'>
                        <div>
                            <Link className='block w-full' href="/">
                                <a 
                                className={
                                    activePage==='home' ? 'block text-greenpri w-full py-2 px-3 lg:px-6 hover:text-greensec' :
                                    'block text-black w-full py-2 px-3 lg:px-6 hover:text-greensec'
                                }>
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link className='block w-full' href="/about">
                                <a 
                                className= {
                                    activePage==="about" ? 'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-greenpri hover:text-greensec' :
                                    'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-black hover:text-greensec'
                                }>
                                    About Us
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link className='block w-full' href="/plans">
                            <a 
                                className= {
                                    activePage==="plans" ? 'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-greenpri hover:text-greensec' :
                                    'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-black hover:text-greensec'
                                }>
                                    Plans
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link className='block w-full' href="/contact">
                            <a 
                                className= {
                                    activePage==="contact" ? 'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-greenpri hover:text-greensec' :
                                    'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-black hover:text-greensec'
                                }>
                                    Contact
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link className='block w-full' href="/login">
                            <a 
                                className= {
                                    activePage==="login" ? 'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-greenpri hover:text-greensec' :
                                    'block whitespace-nowrap  w-full py-2 px-3 lg:px-6 text-black hover:text-greensec'
                                }>
                                    Login
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link className='block w-full' href="/register">
                                <a className='block rounded-full whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white bg-greenpri hover:bg-greensec'>
                                    Get Started
                                </a>
                            </Link>
                        </div>
                        

                    </div>

                    <div className='lg:hidden'>
                        <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-greenpri hover:text-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                    </div>

                </div>
            </nav>
        </>
     );
}
 
export default Navbar;