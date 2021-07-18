import Link from 'next/link'
import { useState } from 'react';
import {useRouter} from 'next/router'

const DashSideNav = () => {

    const router = useRouter()

    return (
        <div className='col-span-1 pt-4 bg-gradient-to-br from-greenpri to-greensec h-screen hidden md:block fixed'>
                <div className='flex flex-col font-bold'>
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
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
    )
}

export default DashSideNav
