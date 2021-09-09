import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { sideData } from './SideNavData'

const SideNav = () => {
    return (
        <div className='overflow-y-hidden bg-sfsblue side'>
            <div className="fixed w-60 overflow-y-hidden h-screen bg-sfsblue text-dashtext p-4 flex flex-col justify-between">
                <div className="">
                    <div className='px-3 pt-5 pb-5'>
                        <Link href="/dashboard">
                            <a className='block'>
                                <Image width="50%" height="50%" src="/images/logo.png" className="" />
                            </a>
                        </Link>
                    </div>
                    <div >
                        {
                            sideData.map(item => {
                                return <div className='flex items-center' key={item.id}>
                                    <Link href={item.link}>
                                        <a className={`w-full flex items-center px-3 py-4 text-dashtext hover:text-white`}>
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
    )
}

export default SideNav
