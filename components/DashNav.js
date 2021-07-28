import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useState , useEffect} from 'react';
import axios from 'axios'

const DashNav = ({user}) => {

    const [menuclick, setMenuClick] = useState(false);
    const router = useRouter()


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
                <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col lg:hidden bg-gradient-to-br from-greenpri to-greensec text-white w-4/5 h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition'
                : 'mobile-box flex shadow-xl flex-col lg:hidden bg-gradient-to-br from-greenpri to-greensec text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                    <div className=''>
                        <div className='lg:hidden flex flex-row justify-end mb-4 px-2'>
                            <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-white hover:bg-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>   
                        </div> 
                    </div>
    
                    <div className='flex lg:hidden flex-col font-bold'>
                                <div onClick={handleClickMobile}>
                                    <Link className='block w-full' href="/dashboard">
                                        {
                                            router.pathname==='/dashboard' ?
                                            <a className='flex items-center flex-nowrap w-full py-3 px-3 lg:px-6 bg-greensec text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg></div>
                                            <div className='pl-1 pt-1'>Dashboard</div>
                                            </a>
                                            :
                                            <a className='flex items-center flex-nowrap w-full py-3 px-3 lg:px-6 text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg></div>
                                            <div className='pl-1 pt-1'>Dashboard</div>
                                            </a>
                                        }
                                    </Link>
                                </div>
                                <div onClick={handleClickMobile}>
                                    <Link className='block w-full' href="/dashboard/profile">
                                        {
                                            router.pathname.includes('profile')?
                                            <a className='flex items-center flex-nowrap whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white bg-greensec hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>Profile</div>
                                            </a>
                                            :
                                            <a className='flex items-center flex-nowrap whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>Profile</div>
                                            </a>
                                        }
                                    </Link>
                                </div>
                                <div onClick={handleClickMobile}>
                                    <Link className='block w-full' href="/dashboard/plans">
                                        {
                                            router.pathname.includes('plans')?
                                            <a className='flex items-center flex-nowrap whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white bg-greensec hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg></div>
                                            <div className='pl-1 pt-1'>Plans</div>
                                            </a>
                                            :
                                            <a className='flex items-center flex-nowrap whitespace-nowrap  w-full py-3 px-3 lg:px-6 text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg></div>
                                            <div className='pl-1 pt-1'>Plans</div>
                                            </a>
                                        }
                                    </Link>
                                </div>
                                <div onClick={handleClickMobile}>
                                    <Link className='block w-full' href="/dashboard/investments">
    
                                        {
                                            router.pathname.includes('investments')?
                                            <a className=' flex items-center flex-nowrap whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white bg-greensec hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>My Investments</div>
                                            </a>
                                            :
                                            <a className=' flex items-center flex-nowrap whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>My Investments</div>
                                            </a>
                                        }
    
                                        
                                    </Link>
                                </div>
                                <div onClick={handleClickMobile}>
                                    <Link className='block w-full' href="/dashboard/withdrawals">
    
                                        {
                                            router.pathname.includes('withdrawals') ?
                                            <a className=' flex items-center flex-nowrap whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white bg-greensec hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>Transactions</div>
                                            </a>
                                            :
                                            <a className=' flex items-center flex-nowrap whitespace-nowrap w-full py-3 px-3 lg:px-6 text-white hover:bg-greensec'>
                                            <div><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                                            <div className='pl-1 pt-1'>Transactions</div>
                                            </a>
                                        }
    
                                    </Link>
                                </div>
                    </div>
                    
                </div>
    
                {/* Navigation bar */}
                <nav className='flex flex-row py-4 px-3 md:px-6 lg:px-6 justify-between items-center fixed top-0 2xl:max-w-screen-2xl 2xl:mx-auto w-full bg-white z-10 with-border-gradient shadow-lg nav'>
                    <div className='flex flex-row justify-start items-center text-base'>
                        
                        <div className='md:hidden'>
                            <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8 text-greenpri hover:bg-greensec" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>
                        <div className='pl-0'>
                            <Link href="/"><a><img alt="cropshares-logo" src='/images/logo.png' className='pl-0 h-10 w-10 md:h-12 md:w-12 
                            ' /></a>
                            </Link>
                        </div>
                        
                        
                    </div>
                    <div className='flex-row items-center flex'>
    
                        <button
                        onClick={()=>{router.push('/dashboard/account')}}
                        type='button' className='text-greenpri text-sm flex items-center focus:outline-none'>
                            <div className='text-black'>{user.first_name}</div>
                            <div className=''>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                        </button>
                    </div>
                </nav>
            </>
     );
}
 
export default DashNav;