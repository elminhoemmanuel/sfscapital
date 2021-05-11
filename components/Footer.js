import React from 'react'
import Link from 'next/link'
import {footerObjOne, footerObjTwo} from './FooterData'
import {FaTwitter, FaFacebook, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='px-6 md:px-10 lg:px-20 py-16 bg-cultured text-black'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10'>
                <div>
                    <div className=''>
                        <Link href="/"><a><img alt="cropshares-logo" src='/images/logo.png' className='pl-0 h-20 w-40 
                        ' /></a>
                        </Link>
                    </div>

                </div>

                <div>
                    <h1 className='font-bold text-2xl mb-6'>Say Hello</h1>

                    <p className='hover:text-greenpri mb-4 text-sm'>Suite  007, First  Floor, Future  View  Plaza, opposite FCMB, Sabo  Tasha, Kaduna State. </p>

                    <a className='hover:text-greenpri block mb-2 text-sm' href="tel:+23409136553953">+23409136553953</a>
                    <a className='hover:text-greenpri block mb-2 text-sm' href="tel:+23409136553953">+23409136553953</a>
                    <a className='hover:text-greenpri block mb-2 text-sm' href="mailto:cropsharesafrica@gmail.com">cropsharesafrica@gmail.com</a>

                </div>

                <div>
                    <h1 className='font-bold text-2xl mb-6'>Resources</h1>
                    <div>
                        {footerObjOne.map(item =>{
                            return <Link key={item.id} href={item.link} className='block'>
                                        <a className='whitespace-nowrap hover:text-greenpri block mb-2 text-sm'>{item.value}</a>
                                    </Link>
                                
                        })}
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-2xl mb-6'>Social</h1>
                    <div className='flex items-center justify-start'>
                        {footerObjTwo.map(item =>{
                            return <Link key={item.id} href={item.url} className='block'>
                                        <a className='hover:text-greenpri block mb-2 mr-4 '>
                                            {item.image}
                                        </a>
                                    </Link>
                                
                        })}
                    </div>
                </div>

            </div>

            <div className='border-t border-gray-300 pt-10'>
                <p className='text-center text-sm'>Copyright © 2021 Cropshares Africa. All rights reserved.</p>

            </div>
            
        </div>
    )
}

export default Footer
